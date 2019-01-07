(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/WebTileLayer":1313,"esri/layers/OpenStreetMapLayer":1322})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[27,29],{1313:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(10),r(2),r(1),r(161),r(169),r(32),r(36),r(9),r(4),r(127),r(8),r(22),r(0),r(119),r(239),r(238),r(485),r(482),r(123),r(173),r(237)],void 0===(o=function(e,t,l,o,n,p,i,a,s,u,c,y,d,f,v,h,m,w,b,g,T,S,R){return function(e){function t(t,r){var l=e.call(this)||this;return l.copyright="",l.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),l.legendEnabled=!0,l.popupEnabled=!0,l.spatialReference=a.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new R({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new S({level:0,scale:591657527.591555,resolution:156543.033928}),new S({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S({level:8,scale:2311162.217155,resolution:611.49622628138}),new S({level:9,scale:1155581.108577,resolution:305.748113140558}),new S({level:10,scale:577790.554289,resolution:152.874056570411}),new S({level:11,scale:288895.277144,resolution:76.4370282850732}),new S({level:12,scale:144447.638572,resolution:38.2185141425366}),new S({level:13,scale:72223.819286,resolution:19.1092570712683}),new S({level:14,scale:36111.909643,resolution:9.55462853563415}),new S({level:15,scale:18055.954822,resolution:4.77731426794937}),new S({level:16,scale:9027.977411,resolution:2.38865713397468}),new S({level:17,scale:4513.988705,resolution:1.19432856685505}),new S({level:18,scale:2256.994353,resolution:.597164283559817}),new S({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?c.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){if(!e.urlTemplate)throw new u("layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') is missing the required 'urlTemplate' property value")});return this.addResolvingPromise(t),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&a.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new i(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&l.authority.split(".").length>1)for(var p=0,a=r;p<a.length;p++){var s=a[p];e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new i(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t,r){e&&f.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?f.normalize(e):e},t.prototype.fetchTile=function(e,t,r,l){var o=this.getTileUrl(e,t,r),n={responseType:"image"};return l&&l.timestamp&&(n.query={_ts:l.timestamp}),s(o,n).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+p.substitute(this.urlPath,{level:l,col:r,row:t});return o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return d.create(function(e){return r.e(18).then(function(){var t=[r(1768)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return d.create(function(e){return Promise.all([r.e(5),r.e(6),r.e(7),r.e(8),r.e(33)]).then(function(){var t=[r(1709)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},n([v.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),n([v.property({type:a.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),n([v.property(T.legendEnabled)],t.prototype,"legendEnabled",void 0),n([v.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),n([v.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),n([v.property(T.popupEnabled)],t.prototype,"popupEnabled",void 0),n([v.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),n([v.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),n([v.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),n([v.property({type:R,json:{write:!0}})],t.prototype,"tileInfo",void 0),n([v.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),n([v.property({json:{read:!1}})],t.prototype,"type",void 0),n([v.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),n([v.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),n([v.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),n([v.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),n([v.property({json:{write:!0}})],t.prototype,"wmtsInfo",void 0),n([v.subclass("esri.layers.WebTileLayer")],t)}(v.declared(h,m,y,g,w,b))}.apply(null,l))||(e.exports=o)},1322:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(10),r(2),r(1),r(32),r(0),r(1313)],void 0===(o=function(e,t,r,l,o,n,p,i){return function(e){function t(){var t=e.call(this)||this;return t.subDomains=["a","b","c"],t.fullExtent=new n.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.SpatialReference.WebMercator),t.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",t.operationalLayerType="OpenStreetMap",t.type="open-street-map",t.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",t}return l(t,e),o([p.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"subDomains",void 0),o([p.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"fullExtent",void 0),o([p.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"urlTemplate",void 0),o([p.property({type:["OpenStreetMap"]})],t.prototype,"operationalLayerType",void 0),o([p.property({json:{read:!1}})],t.prototype,"type",void 0),o([p.property({json:{read:!1,write:!1}})],t.prototype,"copyright",void 0),o([p.property({json:{read:!1,write:!1}})],t.prototype,"wmtsInfo",void 0),o([p.subclass("esri.layers.OpenStreetMapLayer")],t)}(p.declared(i))}.apply(null,l))||(e.exports=o)}}]);