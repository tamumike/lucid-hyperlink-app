(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1393,"esri/views/layers/LayerView":1413,"esri/views/layers/GroupLayerView":1939})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1393:function(e,i,t){var r,n;r=[t.dj.c(e.i),i,t(2),t(1),t(5),t(14),t(0)],void 0===(n=function(e,i,t,r,n,s,a){return function(e){function i(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var r=e.call(this)||this;return r.handles=new s,r}return t(i,e),i.prototype.destroy=function(){this.handles.destroy()},r([a.property({readOnly:!0})],i.prototype,"handles",void 0),r([a.subclass("esri.core.HandleOwner")],i)}(a.declared(n))}.apply(null,r))||(e.exports=n)},1413:function(e,i,t){var r,n;r=[t.dj.c(e.i),i,t(2),t(1),t(27),t(1393),t(121),t(7),t(159),t(8),t(0)],void 0===(n=function(e,i,t,r,n,s,a,l,o,d,y){return function(e){function i(i){var t=e.call(this)||this;return t.layer=null,t.parent=null,t.view=null,t}return t(i,e),i.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(i){if("layerview:create-error"!==i.name){var t=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+t+"')",i),d.reject(i)}})},i.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(i.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),i.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},i.prototype.isUpdating=function(){return!1},r([y.property()],i.prototype,"layer",void 0),r([y.property()],i.prototype,"parent",void 0),r([y.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],i.prototype,"suspended",null),r([y.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],i.prototype,"updating",null),r([y.property()],i.prototype,"view",void 0),r([y.property({dependsOn:["layer.visible"]})],i.prototype,"visible",null),r([y.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],i.prototype,"fullOpacity",null),r([y.subclass("esri.views.layers.LayerView")],i)}(y.declared(s,n,a.Identifiable,o))}.apply(null,r))||(e.exports=n)},1939:function(e,i,t){var r,n;r=[t.dj.c(e.i),i,t(2),t(1),t(21),t(495),t(14),t(0),t(1413)],void 0===(n=function(e,i,t,r,n,s,a,l,o){return function(e){function i(){var i=e.call(this)||this;return i.layerViews=new n,i}return t(i,e),i.prototype.initialize=function(){var e=this;this._watchHandles=new a,this._watchHandles.add(this.layerViews.on("change",function(i){return e._layerViewsChangeHandler(i)})),this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this))),this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},i.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},Object.defineProperty(i.prototype,"layerViews",{set:function(e){this._set("layerViews",s.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),i.prototype.isUpdating=function(){return this.layerViews.some(function(e){return e.updating})},i.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(e){return e._isOverridden("visible")})},i.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find(function(i){return i.layer===e})},i.prototype._firstVisibleOnLayerOrder=function(){var e=this,i=this.layer.layers.find(function(i){var t=e._findLayerViewForLayer(i);return t&&t.visible});return i&&this._findLayerViewForLayer(i)},i.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(function(i){i.visible=i===e}))},i.prototype._layerViewsChangeHandler=function(e){var i=this;this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map(function(e){return e.watch("visible",i._layerViewVisibleHandler.bind(i),!0)}).toArray(),"visible");var t=e.added[e.added.length-1],r=null;t&&t.visible&&(r=t),this._enforceVisibility(r)},i.prototype._layerViewsAfterChangesHandler=function(){var e=this;this._watchHandles.remove("updating"),this._watchHandles.add(this.layerViews.map(function(i){return i.watch("updating",function(){return e._updateUpdating()},!0)}).toArray(),"updating"),this._updateUpdating()},i.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach(function(e){e.visible=i});break;case"exclusive":this._enforceExclusiveVisibility(e)}},i.prototype._visibilityModeHandler=function(e){this._enforceVisibility()},i.prototype._layerViewVisibleHandler=function(e,i,t,r){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(r.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&r)}},i.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()},i.prototype._updateUpdating=function(){this.notifyChange("updating")},r([l.property({cast:s.castForReferenceSetter})],i.prototype,"layerViews",null),r([l.subclass("esri.views.layers.GroupLayerView")],i)}(l.declared(o))}.apply(null,r))||(e.exports=n)}}]);