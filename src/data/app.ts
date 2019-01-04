import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import PopupTemplate from "esri/PopupTemplate";

import * as popups from "./popups";

export const systemLayer = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_System/MapServer",
    id: "Lucid System",
    sublayers: [{
        id: 9,
        popupEnabled: false,
        title: "Facitily Boundaries",
        visible: true
    }, {
        id: 8,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid SWD",
        visible: true
    }, {
        id: 7,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid LP",
        visible: true
    }, {
        id: 6,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress SWD",
        visible: true
    }, {
        id: 5,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress LP",
        visible: true
    }, {
        id: 4,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid NGL",
        visible: true
    }, {
        id: 3,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress NGL",
        legendEnabled: false,
        visible: false
    }, {
        id: 2,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid HP",
        visible: true
    }, {
        id: 1,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress HP",
        visible: true
    }, {
        id: 0,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.sites.title,
            content: popups.system.sites.content
        }, 
        visible: true
    }]
});

export const surfaceOwnership = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/BLM_Surface_Ownership/MapServer",
    id: "Surface Ownership",
    visible: false
});

export const STR = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/STR/MapServer",
    id: "STR",
    sublayers: [{
        id: 2,
        title: "SubSections",
        legendEnabled: false
    }, {
        id: 1,
        title: "Sections",
        legendEnabled: false
    }, {
        id: 0,
        title: "Township Range",
        legendEnabled: false
    }],
    legendEnabled: false,
    visible: false
});

export const meters = new MapImageLayer({
    id: "Meters",
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Meters/MapServer",
    sublayers: [{
        id: 0,
        popupEnabled: true,
        popupTemplate: {
            title: popups.meters.title,
            content: popups.meters.content
        },
        title: "Meters",
        visible: true
    }],
    visible: false
});

let attachLink = (value) => {
    
    let link = value.toString() + "TEST";

    return `${value}TEST`;
    
};

export const hyperlink = new MapImageLayer({
    id: "Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Hyperlink/MapServer",
    sublayers: [{
        id: 1,
        popupEnabled: true,
        popupTemplate: new PopupTemplate({
            title: `{Name}`,
            content: `<b>Link Type: </b>{LinkType}<br>
                    <b>System: </b>{SystemName}<br>
                    <b>Facilities Link: </b><a href="{Hyperlink_Facilities}" target="_blank"> More Info</a>`
        }),
        visible: true
    }, {
        id: 0,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.pipeline.title,
            content: popups.hyperlink.pipeline.content
        },
        visible: true
    }]
});

export const map = new EsriMap({
    basemap: "streets",
    layers: [surfaceOwnership, STR, systemLayer, hyperlink, meters]
});
