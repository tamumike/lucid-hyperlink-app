(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/WMSLayerView":1872,"esri/views/2d/layers/WMSLayerView2D":2392})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1872:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(9),r(8),r(0),r(1412)],void 0===(n=function(e,t,r,i,n,a,o,s){return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e){var t=this.layer;if(!e)return a.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var r=t.popupEnabled;if(!r)return a.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));var i=this.createFetchPopupFeaturesQuery(e),o=i.extent,s=i.width,p=i.height,h=i.x,u=i.y;if(!(o&&s&&p))return a.reject(new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:s,height:p}));var c=t.fetchFeatureInfo(o,s,p,h,u);return c?c.then(function(e){return[e]}):a.resolve([])},i([o.property()],t.prototype,"layer",void 0),i([o.subclass("esri.views.layers.WMSLayerView")],t)}(o.declared(s))}.apply(null,i))||(e.exports=n)},2392:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(10),r(2),r(1),r(14),r(0),r(17),r(1840),r(1606),r(1456),r(1844),r(1872)],void 0===(n=function(e,t,r,i,n,a,o,s,p,h,u,c,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.container=new h.BitmapContainer,t}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxHeight,i=t.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e._exportWMSImageParameters.layers?e.requestUpdate():e.container.removeAllChildren())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?this.layer.supportsSpatialReference(this.view.spatialReference):e},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.container,r=this.view,i=e.x,n=e.y,a=r.spatialReference,o=null,p=0,h=0;t.children.some(function(e){var t=e.width,r=e.height,u=e.resolution,c=e.x,l=e.y,d=c+u*t,y=l-u*r;return i>=c&&i<=d&&n<=l&&n>=y&&(o=new s({xmin:c,ymin:y,xmax:d,ymax:l,spatialReference:a}),p=t,h=r,!0)});var u=o.width/p,c=Math.round((i-o.xmin)/u),l=Math.round((o.ymax-n)/u);return{extent:o,width:p,height:h,x:c,y:l}},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,i,n){var a=this;return n=r({timestamp:this.refreshTimestamp},n),this.layer.fetchImage(e,t,i,n).then(function(e){return a.notifyChange("updating"),e})},n([o.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),n([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(o.declared(u,l))}.apply(null,i))||(e.exports=n)}}]);