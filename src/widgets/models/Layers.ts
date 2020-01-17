import EsriMap from "esri/Map";

import Widget from "./Widget";
import * as layersView from "../views/layersView";

export default class Layers extends Widget {

    constructor() {

        super('Layers', 'layers', true);

    }

    render(): void {
        layersView.renderWidget();
    }

    listLayers(map: EsriMap): void {

        let visible: string[] = [];
        let notVisible: string[] = [];
        let hyperlink: string[] = [];   // created a list for the hyperlink layers
        let hyperlinkoff: string[] = [];

        map.layers.forEach((layer) => {
            
            const substr: string = 'Hyperlinks'; // substring to search for
            // 1) Go through the layers and sort them into appropriate list
 
            if (layer.id.indexOf(substr)  > -1) {
            (layer.visible) ? hyperlink.push(layer.id) : hyperlinkoff.push(layer.id);

            } else {

                (layer.visible) ? visible.push(layer.id) : notVisible.push(layer.id);

            }
            
        });

        layersView.populateLayersList(visible, notVisible, hyperlink, hyperlinkoff);
        
    }

    toggleVisibility (map: EsriMap, ID: string): void {
        
        const layer = map.findLayerById(ID);

        (layer.visible) ? layer.visible = false : layer.visible = true;
        
    }

}