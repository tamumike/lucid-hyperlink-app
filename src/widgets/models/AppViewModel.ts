import esri = __esri;

import Accessor from "esri/core/Accessor";
import { whenOnce } from "esri/core/watchUtils";
import EsriMap from "esri/Map";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapView from "esri/views/MapView";
import Expand from "esri/widgets/Expand";
import Search from "esri/widgets/Search";
import ScaleBar from "esri/widgets/ScaleBar";
import Print from "esri/widgets/Print";
import BaseMapGallery from "esri/widgets/BasemapGallery";
import Home from "esri/widgets/Home";
import Zoom from "esri/widgets/Zoom";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

type SearchSource = esri.LocatorSearchSource | esri.FeatureLayerSearchSource;

export interface AppParams {
  appName: string;
  map: EsriMap;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() 
  appName: string;

  @property() 
  map: EsriMap;

  @property() 
  view: MapView;

  constructor(params?: Partial<AppParams>) {

    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));

  }

  onload() {

    const searchSources = [{
      layer: new FeatureLayer({
          url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Lines/FeatureServer/0",
          outFields: ["*"]
      }),
      searchFields: ["LineName", "AFE"],
      displayField: "LineName",
      exactMatch: false,
      name: "Lucid Lines",
      placeholder: "Search Lines",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer/1",
        outFields: ["*"]
    }),
      searchFields: ["Name", "AFE"],
      displayField: "Name",
      exactMatch: false,
      name: "AFE Hyperlinks",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer/2",
        outFields: ["*"]
    }),
      searchFields: ["Name", "AFE"],
      displayField: "Name",
      exactMatch: false,
      name: "Alignments Hyperlinks",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer/3",
        outFields: ["*"]
    }),
      searchFields: ["Name", "AFE"],
      displayField: "Name",
      exactMatch: false,
      name: "Construction Hyperlinks",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer/4",
        outFields: ["*"]
    }),
      searchFields: ["Name", "AFE"],
      displayField: "Name",
      exactMatch: false,
      name: "Permits Hyperlinks",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer/5",
        outFields: ["*"]
    }),
      searchFields: ["TractName"],
      displayField: "TractName",
      exactMatch: false,
      name: "ROW Hyperlinks",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
          url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Facilities/MapServer/1",
          outFields: ["*"]
      }),
        searchFields: ["SiteName"],
        displayField: "SiteName",
        exactMatch: false,
        name: "Lucid Facilities",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
    }, {
      layer: new FeatureLayer({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Meters_Search/MapServer/0",
        outFields: ["*"]
      }),
      searchFields: ["Meter_Name"],
      displayField: "Meter_Name",
      exactMatch: false,
      name: "Lucid Meters",
      maxResults: 6,
      maxSuggestions: 6,
      suggestionsEnabled: true,
      minSuggestCharacters: 0
    }] as SearchSource[];
  
    const search = new Search({
      view: this.view,
      allPlaceholder: "Search Assets",
      resultGraphicEnabled: true,
      includeDefaultSources: false,
      popupEnabled: true,
      locationEnabled: false,
      sources: searchSources
    });

    const home = new Home({
      view: this.view
    });

    const basemapGallery = new BaseMapGallery({
      view: this.view,
      activeBasemap: this.map.basemap
    });

    const print = new Print({
      view: this.view,
      printServiceUrl: "https://gisportal.lucid-energy.com/arcgis/rest/services/PrintLayouts/GPServer/Export%20Web%20Map"
    });


    const scalebar = new ScaleBar({ view: this.view, style: "ruler" });
    this.view.ui.add(new Zoom({view: this.view}), "top-right");
    this.view.ui.add(home, "top-right");
    this.view.ui.add(new Expand({content: search, expandTooltip: "Search"}), "top-right");
    this.view.ui.add(scalebar, "bottom-right");
    this.view.ui.add(new Expand({content: print, expandTooltip: "Print"}), "top-right");
    this.view.ui.add(new Expand({content: basemapGallery, expandTooltip: "Basemaps"}), "top-right");

  }
}

export default AppViewModel;
