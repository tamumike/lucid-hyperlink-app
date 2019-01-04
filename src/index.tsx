import "./config";
import $ = require("jquery");

// import "@dojo/shim/Promise";

import MapView from "esri/views/MapView";
import EsriMap from "esri/Map";

import App from "./widgets/models/App";
import Panel from "./widgets/models/Panel";
import Modal from "./widgets/models/Modal";
import Acreage from "./widgets/models/Acreage";
import Coordinates from "./widgets/models/Coordinates";
import DrillingInfo from "./widgets/models/DrillingInfo";
import ThirdParty from "./widgets/models/ThirdParty";
import Symbology from "./widgets/models/Symbology";
import Measure from "./widgets/models/Measure";
import Layers from "./widgets/models/Layers";
import Meters from "./widgets/models/Meters";
import Drawing from "./widgets/models/Draw";

import * as panelView from "./widgets/views/panelView";
import * as widgetView from "./widgets/views/widgetView";
import * as acreageView from "./widgets/views/acreageView";
import * as drillingInfoView from "./widgets/views/drillingInfoView";
import * as thirdPartyView from "./widgets/views/thirdPartyView";
import * as symbologyView from "./widgets/views/symbologyView";
import * as measureView from "./widgets/views/measureView";
import * as metersView from "./widgets/views/metersView";

import {CSS, elements} from "./widgets/views/base";

const state: {[key: string]: any} = {};

export const appController = () => {

  const app = new App({
    appName: "Lucid Portal App",
    container: document.getElementById('app') as HTMLElement
  });

  let appView: MapView, appMap: EsriMap;

  app.watch('view', () => {
    appView = app.view;
    controlCoordinates();
  });

  app.watch('map', () => {
    appMap = app.map;
  });

  state.widgets = [new Layers(), new Coordinates(), new Measure()];
  state.acreage = [];

  const launchWidget = (currentWidget: string): void => {
    
    
    (currentWidget == "measure") ? controlMeasure() : 
    (currentWidget == "layers") ? controlLayers() : 
    console.log('no Widget');

  };

  /* 
  * Events 
  */
  $(`${elements.widget_container}`).on("click", (e) => {

    e.stopImmediatePropagation();
    Panel.getInstance();
    app.view.graphics.removeAll();
    var $this = $(e.currentTarget);

    widgetView.getWidget(state, $this.attr("widgetid"));

    if (!widgetView.isActive($this)) {

      panelView.destroyPanel();
      panelView.showPanel($($this).attr('widgetid') as string);
      widgetView.toggleCurrentActive();
      widgetView.toggleActive($this);
      state.currentWidget.render();
      launchWidget(state.currentWidget.ID);
      
    } else {

      panelView.destroyPanel();
      widgetView.toggleActive($this);

    }

  });

  /*
  * Layers Controller
  */
  const controlLayers = () => {

    const widget = state.currentWidget;

    widget.listLayers(appMap);

    // Layers Events
    $(elements.layers.list).on('click', 'li.panel__widget-list_item', (e) => {
      
      const $this = $(e.currentTarget);

      $this.toggleClass('placeholder');

      widget.toggleVisibility(appMap, $this.text().trim());
      
    });
  };

  /* 
  * Coordinates Controller 
  */
  const controlCoordinates = () => {

    const widget = state.widgets.filter(item => {

      return item.ID === 'coordinates';

    })[0];

    widget.pointerMoveEvent(appView);

    widget.targetEvent(appView);

    $(elements.coordinates.target_btn).on('click', (e) => {

      $(e.currentTarget).toggleClass('active');

    });

    $(elements.coordinates.copy_btn).on('click', (e) => {

      widget.copyEvent();

    });
    
  };

  /*
   * Measure Controller 
   */
  const controlMeasure = () => {

    const widget = state.currentWidget;

    let type = $('.active-feature').text().trim().toLowerCase();

    // Measure Events
    $(elements.panel_obj.tab).on('click', (e) => {

      const $this = $(e.currentTarget);
       if(!$(elements.measure.go_btn).hasClass('is_measuring')) {
      type = $this.text().trim().toLowerCase();

      if (!measureView.isActive($this)) {

        measureView.toggleCurrentActive();
        measureView.toggleActiveFeature($this);
        measureView.renderMeasurementTypeOptions(type);

      } else {

        measureView.toggleActiveFeature($this);
        measureView.removeTypeMarkup();
      
      }
      appView.graphics.removeAll();
      }
      
    });

    $(elements.measure.action_container).on('click', `button#${CSS.measure.go_btn}`, (e) => {

      e.preventDefault();

      const $this = $(e.currentTarget);

      let draw = widget.createDraw(appView);

      if (!$this.hasClass('is_measuring')) {

        $this.toggleClass('is_measuring');

        widget.addMeasurement(draw, appView, type, state);

      } else {

        state.drawAction.complete();

        appView.graphics.removeAll();

      }

  
      
    });

  };

};

(navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) ? alert("This application will not work with IE. Please use Google Chrome") : appController();

