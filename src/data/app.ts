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

export const hyperlinkFacility = new MapImageLayer({
    id: "Facility - Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 0,
        popupEnabled: true,
        popupTemplate: new PopupTemplate({
            title: popups.hyperlink.Facility.title,
            content: popups.hyperlink.Facility.content,
        }),
        title: "Hyperlinks - Facility",
    }],
    legendEnabled: true,
    visible: true
});

export const hyperlinkAFE = new MapImageLayer({
    id: "AFE - Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 1,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.AFE.title,
            content: popups.hyperlink.AFE.content
        },
        title: "Hyperlinks AFE",
    }],
    legendEnabled: true,
    visible: false
});

export const hyperlinkAlignments = new MapImageLayer({
    id: "Alignment - Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 2,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.Alignments.title,
            content: popups.hyperlink.Alignments.content
        },
        title: "Hyperlinks Alignments",
    }],
    legendEnabled: true,
    visible: true
});

export const hyperlinkConstruction = new MapImageLayer({
    id: "Construction - Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 3,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.Construction.title,
            content: popups.hyperlink.Construction.content
        },
        title: "Hyperlinks Construction",
    }],
    legendEnabled: true,
    visible: true
});

export const hyperlinkPermits = new MapImageLayer({
    id: "Permits - Hyperlinks", 
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 4,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.Permits.title,
            content: popups.hyperlink.Permits.content
        },
        title: "Hyperlinks Permits",
    }],
    legendEnabled: true,
    visible: false
});

export const hyperlinkROW = new MapImageLayer({
    id: "ROW - Hyperlinks",
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/HyperlinkNEW/MapServer",
    sublayers: [{
        id: 5,
        popupEnabled: true,
        popupTemplate: {
            title: popups.hyperlink.ROW.title,
            content: popups.hyperlink.ROW.content
        },
        title: "Hyperlink ROW"
    }],
    legendEnabled: true,
    visible: false
});

export const map = new EsriMap({
    basemap: "streets",
    layers: [surfaceOwnership, STR, hyperlinkROW, systemLayer, hyperlinkFacility, hyperlinkAFE, 
        hyperlinkAlignments, hyperlinkConstruction, hyperlinkPermits, meters]
});
