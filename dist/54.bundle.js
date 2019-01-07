(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/GroupLayer":1312,"esri/portal/support/layersLoader":1352,"esri/core/asyncUtils":1404,"esri/layers/support/lazyLayerLoader":1544,"esri/core/loadAll":1650,"esri/support/LayersMixin":1712,"esri/portal/support/jsonContext":1839})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[54,15],{1312:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(1),r(1404),r(1650),r(127),r(8),r(0),r(43),r(119),r(239),r(238),r(1712)],void 0===(i=function(e,t,n,i,o,a,u,l,s,c,p,y,f,d){return function(e){function t(t){var r=e.call(this)||this;return r._visibilityHandles={},r.fullExtent=void 0,r.operationalLayerType="GroupLayer",r.spatialReference=void 0,r.type="group",r._visibilityWatcher=r._visibilityWatcher.bind(r),r}return n(t,e),t.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},t.prototype._writeLayers=function(e,t,r,n){var i=[];if(!e)return i;e.forEach(function(e){if(e.write){var t=e.write(null,n);t&&t.layerType&&i.push(t)}}),t.layers=i},Object.defineProperty(t.prototype,"visibilityMode",{set:function(e){var t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)},enumerable:!0,configurable:!0}),t.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this.when()},t.prototype.loadAll=function(){var e=this;return o.safeCast(a.loadAll(this,function(t){t(e.layers)}))},t.prototype.layerAdded=function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)},t.prototype.layerRemoved=function(e){var t=this._visibilityHandles[e.uid];t&&(t.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":case"3d":return l.create(function(e){r.e(79).then(function(){var t=[r(1939)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._turnOffOtherLayers=function(e){this.layers.forEach(function(t){t!==e&&(t.visible=!1)})},t.prototype._enforceVisibility=function(e,t){if(c.getProperties(this).initialized){var r=this.layers,n=r.find(function(e){return e.visible});switch(e){case"exclusive":r.length&&!n&&((n=r.getItemAt(0)).visible=!0),this._turnOffOtherLayers(n);break;case"inherited":r.forEach(function(e){e.visible=t})}}},t.prototype._visibleWatcher=function(e){"inherited"===this.visibilityMode&&this.layers.forEach(function(t){t.visible=e})},t.prototype._visibilityWatcher=function(e,t,r,n){var i=n;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}},t.prototype._isAnyLayerVisible=function(){return this.layers.some(function(e){return e.visible})},i([s.property()],t.prototype,"fullExtent",void 0),i([s.property({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),i([s.writer("layers")],t.prototype,"_writeLayers",null),i([s.property({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),i([s.property({json:{write:!1}})],t.prototype,"portalItem",void 0),i([s.property()],t.prototype,"spatialReference",void 0),i([s.property({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),i([s.property({type:String,value:"independent",json:{write:!0}})],t.prototype,"visibilityMode",null),i([s.subclass("esri.layers.GroupLayer")],t)}(s.declared(p,d,u,y,f))}.apply(null,n))||(e.exports=i)},1352:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(36),r(9),r(8),r(1312),r(1544),r(48),r(1839),r(264)],void 0===(i=function(e,t,r,n,i,o,a,u,l,s){function c(e,t){var r,i,o=e.portalItem.type;switch(o){case"Feature Service":r=a.layerLookupMap.FeatureLayer;break;case"Stream Service":r=a.layerLookupMap.StreamLayer;break;case"Scene Service":r=a.layerLookupMap.SceneLayer;break;case"Feature Collection":r=a.layerLookupMap.FeatureLayer;break;default:throw new n("portal:unsupported-item-type-as-group","The item type '"+o+"' is not supported as a 'GroupLayer'")}return r().then(function(e){return i=e,f(t)}).then(function(r){return r&&Array.isArray(r.layers)?y(e,i,r,t):p(e,i,t)})}function p(e,t,n){if(!e.portalItem.url)return i.resolve();return r(e.portalItem.url,{responseType:"json",query:{f:"json"}}).then(function(r){var i=r.data;if(i&&Array.isArray(i.layers)){var o=i.layers.map(function(e){return{id:e.id,name:e.name}});return y(e,t,{layers:o},n)}})}function y(e,t,r,n){var i=r.showLegend,o=r.layers.slice();o.reverse(),o.forEach(function(r){var n=new t({portalItem:e.portalItem,layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||u.getDefault()};n.read(r,o),null!=i&&n.read({showLegend:i},o)}e.add(n)})}function f(e){if(!1===e.supportsData)return i.resolve();var t=e.instance;return t.portalItem.fetchData().catch(function(){return null}).then(function(e){var r,n=e;if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){var i=!0;if(e&&Array.isArray(n.layers)){null==t.layerId&&(t.layerId=n.layers[0].id);for(var o=0;o<n.layers.length;o++)if(n.layers[o].id===t.layerId){r=n.layers[o];break}r&&(1===n.layers.length&&(i=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))}return i&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.load=function(e){var t=e.instance.portalItem;return t&&t.id?t.load().then(function(){return function(e){var t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e)}).then(function(){return function(e){var t=e.instance,r=t.portalItem,n=r.url,i=r.title,a=l.createForItem(r);return t.isInstanceOf(o)?(t.read({title:i},a),c(t,e)):(n&&t.read({url:n},a),f(e).then(function(e){return e&&t.read(e,a),t.read({title:i},a),s.loadStyleRenderer(t,a)}))}(e)}):i.resolve()}}.apply(null,n))||(e.exports=i)},1404:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(158),r(474),r(8)],void 0===(i=function(e,t,r,n,i){function o(e){return e}Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=function(e,t,r){return i.eachAlways(e.map(function(e,n){return t.apply(r,[e,n])}))},t.map=function(e,t,r){return i.eachAlways(e.map(function(e,n){return t.apply(r,[e,n])})).then(function(e){return e.map(function(e){return e.value})})},t.result=function(e){return e.then(function(e){return{ok:!0,value:e}}).catch(function(e){return{ok:!1,error:e}})},t.assertResult=function(e){if(!0===e.ok)return e.value;throw e.error},t.safeCast=o,t.safeCastCall=function(e){return o(e())},t.safeCastReturn=function(e){return e}}.apply(null,n))||(e.exports=i)},1544:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(8)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.layerLookupMap={CSVLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var t=[r(247)];e.apply(null,t)}.bind(this)).catch(r.oe)})},ElevationLayer:function(){return n.create(function(e){return Promise.all([r.e(7),r.e(21)]).then(function(){var t=[r(1310)];e.apply(null,t)}.bind(this)).catch(r.oe)})},FeatureLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var t=[r(99)];e.apply(null,t)}.bind(this)).catch(r.oe)})},GroupLayer:function(){return n.create(function(e){return r.e(15).then(function(){var t=[r(1312)];e.apply(null,t)}.bind(this)).catch(r.oe)})},GeoRSSLayer:function(){return n.create(function(e){return r.e(24).then(function(){var t=[r(1319)];e.apply(null,t)}.bind(this)).catch(r.oe)})},ImageryLayer:function(){return n.create(function(e){return r.e(39).then(function(){var t=[r(1316)];e.apply(null,t)}.bind(this)).catch(r.oe)})},KMLLayer:function(){return n.create(function(e){return r.e(26).then(function(){var t=[r(1321)];e.apply(null,t)}.bind(this)).catch(r.oe)})},MapImageLayer:function(){return n.create(function(e){return r.e(17).then(function(){var t=[r(1314)];e.apply(null,t)}.bind(this)).catch(r.oe)})},MapNotesLayer:function(){return n.create(function(e){return r.e(68).then(function(){var t=[r(1656)];e.apply(null,t)}.bind(this)).catch(r.oe)})},OpenStreetMapLayer:function(){return n.create(function(e){return r.e(27).then(function(){var t=[r(1322)];e.apply(null,t)}.bind(this)).catch(r.oe)})},PointCloudLayer:function(){return n.create(function(e){return r.e(38).then(function(){var t=[r(1323)];e.apply(null,t)}.bind(this)).catch(r.oe)})},SceneLayer:function(){return n.create(function(e){return Promise.resolve().then(function(){var t=[r(248)];e.apply(null,t)}.bind(this)).catch(r.oe)})},BuildingSceneLayer:function(){return n.create(function(e){return r.e(23).then(function(){var t=[r(1318)];e.apply(null,t)}.bind(this)).catch(r.oe)})},IntegratedMeshLayer:function(){return n.create(function(e){return r.e(25).then(function(){var t=[r(1320)];e.apply(null,t)}.bind(this)).catch(r.oe)})},StreamLayer:function(){return n.create(function(e){return r.e(20).then(function(){var t=[r(1317)];e.apply(null,t)}.bind(this)).catch(r.oe)})},TileLayer:function(){return n.create(function(e){return Promise.all([r.e(6),r.e(69)]).then(function(){var t=[r(478)];e.apply(null,t)}.bind(this)).catch(r.oe)})},UnknownLayer:function(){return n.create(function(e){return r.e(70).then(function(){var t=[r(1657)];e.apply(null,t)}.bind(this)).catch(r.oe)})},UnsupportedLayer:function(){return n.create(function(e){return r.e(71).then(function(){var t=[r(1658)];e.apply(null,t)}.bind(this)).catch(r.oe)})},VectorTileLayer:function(){return n.create(function(e){return Promise.all([r.e(8),r.e(28)]).then(function(){var t=[r(1311)];e.apply(null,t)}.bind(this)).catch(r.oe)})},WebTileLayer:function(){return n.create(function(e){return r.e(29).then(function(){var t=[r(1313)];e.apply(null,t)}.bind(this)).catch(r.oe)})},WMSLayer:function(){return n.create(function(e){return r.e(30).then(function(){var t=[r(1324)];e.apply(null,t)}.bind(this)).catch(r.oe)})},WMTSLayer:function(){return n.create(function(e){return r.e(96).then(function(){var t=[r(1659)];e.apply(null,t)}.bind(this)).catch(r.oe)})},BingMapsLayer:function(){return n.create(function(e){return r.e(12).then(function(){var t=[r(245)];e.apply(null,t)}.bind(this)).catch(r.oe)})}}}.apply(null,n))||(e.exports=i)},1650:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(158),r(474),r(1404),r(21),r(102)],void 0===(i=function(e,t,r,n,i,o,a){function u(e,t){return n(this,void 0,void 0,function(){var u,l,s,c=this;return r(this,function(p){switch(p.label){case 0:return[4,e.load()];case 1:return p.sent(),u=[],l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var i=n[r];i&&(Array.isArray(i)?l.apply(void 0,i):o.isCollection(i)?i.forEach(function(e){return l(e)}):i.isInstanceOf&&i.isInstanceOf(a)&&u.push(i))}},t(l),s=null,[4,i.map(u,function(e){return n(c,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,i.result(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())];case 1:return!1!==t.sent().ok||s||(s=e),[2]}})})})];case 2:if(p.sent(),s)throw s.loadError;return[2,e]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=u,t.default=u}.apply(null,n))||(e.exports=i)},1712:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(1),r(5),r(21),r(495),r(7),r(8),r(0),r(119)],void 0===(i=function(e,t,r,n,i,o,a,u,l,s,c){function p(e){return e&&null!=e.layers}function y(e,t,r){for(var n,i,o=0,a=e.length;o<a;o++){if((n=e.getItemAt(o))[t]===r)return n;if(p(n)&&(i=y(n.layers,t,r)))return i}}var f=o.ofType(c),d=u.getLogger("esri.support.LayersMixin");return function(e){function t(t){var r=e.call(this,t)||this;r.layers=new f;return r.layers.on("after-add",function(e){return function(e){e.parent&&e.parent!==r&&"remove"in e.parent&&e.parent.remove(e),e.parent=r,r.layerAdded(e),"elevation"===e.type&&d.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as an operational layer and will therefore be ignored.")}(e.item)}),r.layers.on("after-remove",function(e){return function(e){e.parent=null,r.layerRemoved(e)}(e.item)}),r}return r(t,e),t.prototype.destroy=function(){this.layers.drain(this.layerRemoved,this)},Object.defineProperty(t.prototype,"layers",{set:function(e){this._set("layers",a.referenceSetter(e,this._get("layers"),f))},enumerable:!0,configurable:!0}),t.prototype.findLayerById=function(e){return y(this.layers,"id",e)},t.prototype.add=function(e,t){var r=this,n=this.layers;t=n.getNextIndex(t),e instanceof c?(e.parent===this&&this.reorder(e,t),n.add(e,t)):l.isThenable(e)?e.then(function(e){r.destroyed||r.add(e,t)}):d.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")},t.prototype.addMany=function(e,t){var r=this,n=this.layers;t=n.getNextIndex(t),e.slice().forEach(function(e){e.parent!==r?(n.add(e,t),t+=1):r.reorder(e,t)})},t.prototype.findLayerByUid=function(e){return y(this.layers,"uid",e)},t.prototype.remove=function(e){return this.layers.remove(e)},t.prototype.removeMany=function(e){return this.layers.removeMany(e)},t.prototype.removeAll=function(){return this.layers.removeAll()},t.prototype.reorder=function(e,t){return this.layers.reorder(e,t)},t.prototype.layerAdded=function(e){},t.prototype.layerRemoved=function(e){},n([s.property({type:f,cast:a.castForReferenceSetter})],t.prototype,"layers",null),n([s.subclass("esri.support.LayersMixin")],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)},1839:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(22),r(48)],void 0===(i=function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createForItem=function(e){return{origin:"portal-item",url:r.urlToObject(e.itemUrl),portal:e.portal||n.getDefault()}}}.apply(null,n))||(e.exports=i)}}]);