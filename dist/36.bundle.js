(function(){(this||window).webpackJsonp.registerAbsMids({"dojo/request":1710})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1330:function(e,n,r){var t,o;t=[r.dj.c(e.i),n,r(58),r(106),r(506),r(47),r(479),r(528),r(17),r(30),r(1693),r(54),r(20),r(40),r(42),r(51)],void 0===(o=function(e,n,r,t,o,i,a,s,u,c,l,f,g,m,d,h){function p(e){return 0===t.version.indexOf("4.")?m.fromExtent(e):new m({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function v(e){if(i.pcCheck(e,2,2),e[0]instanceof c&&e[1]instanceof c);else if(e[0]instanceof c&&null===e[1]);else if(e[1]instanceof c&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=function(e){"async"===e.mode&&(e.functions.disjoint=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null===r[0]||null===r[1]||l.disjoint(r[0],r[1])})},e.functions.intersects=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.intersects(r[0],r[1])})},e.functions.touches=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.touches(r[0],r[1])})},e.functions.crosses=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.crosses(r[0],r[1])})},e.functions.within=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.within(r[0],r[1])})},e.functions.contains=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.contains(r[0],r[1])})},e.functions.overlaps=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null!==r[1]&&l.overlaps(r[0],r[1])})},e.functions.equals=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return i.pcCheck(r,2,2),r[0]===r[1]||(r[0]instanceof c&&r[1]instanceof c?l.equals(r[0],r[1]):!(!i.isDate(r[0])||!i.isDate(r[1]))&&r[0].getTime()===r[1].getTime())})},e.functions.relate=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,3,3),r[0]instanceof c&&r[1]instanceof c)return l.relate(r[0],r[1],i.toString(r[2]));if(r[0]instanceof c&&null===r[1])return!1;if(r[1]instanceof c&&null===r[0])return!1;if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")})},e.functions.intersection=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null===r[0]||null===r[1]?null:l.intersect(r[0],r[1])})},e.functions.union=function(n,r){return e.standardFunctionAsync(n,r,function(e,r,t){var o=[];if(0===(t=i.autoCastFeatureToGeometry(t)).length)throw new Error("Function called with wrong number of Parameters");if(1===t.length)if(i.isArray(t[0])){for(var s=i.autoCastFeatureToGeometry(t[0]),u=0;u<s.length;u++)if(null!==s[u]){if(!(s[u]instanceof c))throw new Error("Illegal Argument");o.push(s[u])}}else{if(!i.isImmutableArray(t[0])){if(t[0]instanceof c)return i.fixSpatialReference(a.cloneGeometry(t[0]),n.spatialReference);if(null===t[0])return null;throw new Error("Illegal Argument")}var f=i.autoCastFeatureToGeometry(t[0].toArray());for(u=0;u<f.length;u++)if(null!==f[u]){if(!(f[u]instanceof c))throw new Error("Illegal Argument");o.push(f[u])}}else for(u=0;u<t.length;u++)if(null!==t[u]){if(!(t[u]instanceof c))throw new Error("Illegal Argument");o.push(t[u])}return 0===o.length?null:l.union(o)})},e.functions.difference=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null!==r[0]&&null===r[1]?a.cloneGeometry(r[0]):null===r[0]?null:l.difference(r[0],r[1])})},e.functions.symmetricdifference=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){return v(r=i.autoCastFeatureToGeometry(r)),null===r[0]&&null===r[1]?null:null===r[0]?a.cloneGeometry(r[1]):null===r[1]?a.cloneGeometry(r[0]):l.symmetricDifference(r[0],r[1])})},e.functions.clip=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,2),!(r[1]instanceof u)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");return null===r[1]?null:l.clip(r[0],r[1])})},e.functions.cut=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,2),!(r[1]instanceof d)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return[];if(!(r[0]instanceof c))throw new Error("Illegal Argument");return null===r[1]?[a.cloneGeometry(r[0])]:l.cut(r[0],r[1])})},e.functions.area=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,2),null===r[0])return 0;if(!(r[0]instanceof c))throw new Error("Illegal Argument");return l.planarArea(r[0],o.convertSquareUnitsToCode(i.defaultUndefined(r[1],-1)))})},e.functions.areageodetic=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,2),null===r[0])return 0;if(!(r[0]instanceof c))throw new Error("Illegal Argument");return l.geodesicArea(r[0],o.convertSquareUnitsToCode(i.defaultUndefined(r[1],-1)))})},e.functions.length=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,2),null===r[0])return 0;if(!(r[0]instanceof c))throw new Error("Illegal Argument");return l.planarLength(r[0],o.convertLinearUnitsToCode(i.defaultUndefined(r[1],-1)))})},e.functions.lengthgeodetic=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,2),null===r[0])return 0;if(!(r[0]instanceof c))throw new Error("Illegal Argument");return l.geodesicLength(r[0],o.convertLinearUnitsToCode(i.defaultUndefined(r[1],-1)))})},e.functions.distance=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3),!(r[0]instanceof c))throw new Error("Illegal Argument");if(!(r[1]instanceof c))throw new Error("Illegal Argument");return l.distance(r[0],r[1],o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1)))})},e.functions.densify=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");if(t<=0)throw new Error("Illegal Argument");return r[0]instanceof m||r[0]instanceof d?l.densify(r[0],t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1))):r[0]instanceof u?l.densify(p(r[0]),t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1))):r[0]})},e.functions.densifygeodetic=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");if(t<=0)throw new Error("Illegal Argument");return r[0]instanceof m||r[0]instanceof d?l.geodesicDensify(r[0],t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1))):r[0]instanceof u?l.geodesicDensify(p(r[0]),t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1))):r[0]})},e.functions.generalize=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,4),null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");return l.generalize(r[0],t,i.toBoolean(i.defaultUndefined(r[2],!0)),o.convertLinearUnitsToCode(i.defaultUndefined(r[3],-1)))})},e.functions.buffer=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");return 0===t?a.cloneGeometry(r[0]):l.buffer(r[0],t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1)))})},e.functions.buffergeodetic=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof c))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");return 0===t?a.cloneGeometry(r[0]):l.geodesicBuffer(r[0],t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1)))})},e.functions.offset=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,6),null===r[0])return null;if(!(r[0]instanceof m||r[0]instanceof d))throw new Error("Illegal Argument");var t=i.toNumber(r[1]);if(isNaN(t))throw new Error("Illegal Argument");var a=i.toNumber(i.defaultUndefined(r[4],10));if(isNaN(a))throw new Error("Illegal Argument");var s=i.toNumber(i.defaultUndefined(r[5],0));if(isNaN(s))throw new Error("Illegal Argument");return l.offset(r[0],t,o.convertLinearUnitsToCode(i.defaultUndefined(r[2],-1)),i.toString(i.defaultUndefined(r[3],"round")).toLowerCase(),a,s)})},e.functions.rotate=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,2,3);var t=r[0];if(null===t)return null;if(!(t instanceof c))throw new Error("Illegal Argument");t instanceof u&&(t=m.fromExtent(t));var o=i.toNumber(r[1]);if(isNaN(o))throw new Error("Illegal Argument");var a=i.defaultUndefined(r[2],null);if(null===a)return l.rotate(t,o);if(a instanceof g)return l.rotate(t,o,a);throw new Error("Illegal Argument")})},e.functions.centroid=function(n,r){return e.standardFunctionAsync(n,r,function(e,r,t){if(t=i.autoCastFeatureToGeometry(t),i.pcCheck(t,1,1),null===t[0])return null;if(!(t[0]instanceof c))throw new Error("Illegal Argument");return t[0]instanceof g?i.fixSpatialReference(a.cloneGeometry(t[0]),n.spatialReference):t[0]instanceof m?t[0].centroid:t[0]instanceof d?s.centroidPolyline(t[0]):t[0]instanceof f?s.centroidMultiPoint(t[0]):t[0]instanceof u?t[0].center:null})},e.functions.multiparttosinglepart=function(n,t){return e.standardFunctionAsync(n,t,function(e,t,s){s=i.autoCastFeatureToGeometry(s),i.pcCheck(s,1,1);var p=[];if(null===s[0])return null;if(!(s[0]instanceof c))throw new Error("Illegal Argument");if(s[0]instanceof g)return[i.fixSpatialReference(a.cloneGeometry(s[0]),n.spatialReference)];if(s[0]instanceof u)return[i.fixSpatialReference(a.cloneGeometry(s[0]),n.spatialReference)];var v=new r;return l.simplify(s[0]).then(o.callback(function(e){if(e instanceof m){for(var r=[],t=[],o=0;o<e.rings.length;o++)if(e.isClockwise(e.rings[o])){var u=h.fromJSON({rings:[e.rings[o]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});r.push(u)}else t.push({ring:e.rings[o],pt:e.getPoint(o,0)});for(var c=0;c<t.length;c++)for(var l=0;l<r.length;l++)if(r[l].contains(t[c].pt)){r[l].addRing(t[c].ring);break}v.resolve(r)}else if(e instanceof d){var g=[];for(o=0;o<e.paths.length;o++){var w=h.fromJSON({paths:[e.paths[o]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});g.push(w)}v.resolve(g)}else if(s[0]instanceof f){var y=i.fixSpatialReference(a.cloneGeometry(s[0]),n.spatialReference);for(o=0;o<y.points.length;o++)p.push(y.getPoint(o));v.resolve(p)}else v.resolve(null)},v),o.errback(v)),v.promise})},e.functions.issimple=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,1),null===r[0])return!0;if(r[0]instanceof c)return l.isSimple(r[0]);throw new Error("Illegal Argument")})},e.functions.simplify=function(n,r){return e.standardFunctionAsync(n,r,function(e,n,r){if(r=i.autoCastFeatureToGeometry(r),i.pcCheck(r,1,1),null===r[0])return null;if(r[0]instanceof c)return l.simplify(r[0]);throw new Error("Illegal Argument")})})}}.apply(null,t))||(e.exports=o)},1693:function(e,n,r){var t,o;t=[r.dj.c(e.i),n,r(106),r.dj.m(e),r(30),r(40),r(42),r(20),r(17),r(54),r(1785),r(58)],void 0===(o=function(e,n,r,t,o,i,a,s,u,c,l,f){function g(e,n){var r;if(null==e||void 0===e)return e;if("number"==typeof e)return e;var t=e.toString();if(""===t)return null;if(2==n){if(void 0!==(r=A[t]))return r}else if(0==n){if(void 0!==(r=R[t]))return r;if(void 0!==(r=E[e]))return r}else if(3==n&&void 0!==(r=R[t]))return r;if(1==n&&void 0!==(r=E[e]))return r;if(!0===/^\d+$/.test(t))return parseInt(t);throw Error("Unrecognised Unit Type")}function m(e){if(void 0!==e&&null!==e)switch(e){case"loxodrome":return 1;case"great-elliptic":return 2;case"normal-section":return 3;case"shape-preserving":return 4}return 0}function d(e){if(null===e||void 0===e)return null;if(x)switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m};case"multipoint":return{points:e.points,hasZ:e.hasZ,hasM:e.hasM};case"polyline":return{paths:e.paths,hasZ:e.hasZ,hasM:e.hasM};case"polygon":return{rings:e.rings,hasZ:e.hasZ,hasM:e.hasM};case"extent":return{xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax,zmin:e.zmin,zmax:e.zmax,mmin:e.mmin,mmax:e.mmax}}else switch(e.type){case"point":return{x:e.x,y:e.y};case"multipoint":return{points:e.points};case"polyline":return{paths:e.paths};case"polygon":return{rings:e.rings};case"extent":return{xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}return null}function h(e,n){if(null===e)return null;var r=function(e){if(void 0===s.fromJson){if(void 0!==e.x&&void 0!==e.y)return new s(e);if(void 0!==e.paths)return new a(e);if(void 0!==e.rings)return new i(e);if(void 0!==e.points)return new c(e);if(void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax)return new u(e)}else{if(void 0!==e.x&&void 0!==e.y)return s.fromJson(e);if(void 0!==e.paths)return a.fromJson(e);if(void 0!==e.rings)return i.fromJson(e);if(void 0!==e.points)return c.fromJson(e);if(void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax)return u.fromJson(e)}}(e);return x?r.set("spatialReference",n):r.setSpatialReference(n),r}function p(e){return null==e||void 0===e?null:-1!=e.wkid&&null!==e.wkid&&void 0!==e.wkid?{wkid:e.wkid}:""!==e.wkt&&void 0!==e.wkt&&null!==e.wkt?{wkt:e.wkt}:null}function v(e,n,r){var t=new f,o=n.spatialReference;return j.a({action:e,geoma:d(n),geomb:d(r),spatialReference:p(n.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise}function w(e,n,r){var t=new f;return j.a({action:e,geoma:d(n),geomb:d(r),spatialReference:p(n.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise}var y,x=0==r.version.indexOf("4.");!function(e){e[e.Linear=0]="Linear",e[e.Angular=1]="Angular",e[e.Area=2]="Area",e[e.LinearOrAngular=3]="LinearOrAngular"}(y||(y={}));var R={feet:9002,kilometers:9036,meters:9001,miles:9035,"nautical-miles":9030,yards:9096},A={acres:109402,ares:109463,hectares:109401,"square-feet":109405,"square-kilometers":109414,"square-meters":109404,"square-miles":109413,"square-yards":109442},E={degrees:9102,radians:9101},k=function(){function n(){this.c=!0,this.i=null}return n.prototype.A=function(e){var n=this;this.i=new l,this.i.setWorker(this.l(),function(){n.c=!1,e()})},n.prototype.l=function(){return e.B?e.B("./geometryenginewebworker"):t.id.replace(/\/[^\/]*$/gi,"/")+"./geometryenginewebworker"},n}(),j=function(){function e(){}return e.a=function(n){var r=new f;return e.h.push({task:n,d:r}),e.f(),r.promise},e.f=function(){if(0<e.h.length){for(var n=null,r=0;r<e.b.length;r++)if(!1===e.b[r].c){n=e.b[r];break}if(null===n&&e.b.length<e.g&&(r=new k,e.b.push(r),r.A(function(){e.f()})),null!==n){var t=this.h.shift();n.c=!0,n.i.postMessage(t.task).then(function(r){n.c=!1;try{t.d.resolve(r)}catch(e){}e.f()},function(r){n.c=!1;try{t.d.reject(r)}catch(e){}e.f()})}}},e.b=[],e.h=[],e.g=4,e}();return function(){function e(){}return e._removeAllWorkers=function(){j.b=[]},e._setMaxWorkers=function(n){e._removeAllWorkers(),j.g=n},e._getMaxWorkers=function(){return j.g},e._getNumWorkers=function(){return j.b.length},e.extendedSpatialReferenceInfo=function(e){var n=new f;return j.a({action:"extendedspatialreferenceinfo",spatialReference:p(e)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(e.result)},function(e){n.reject(e)}),n.promise},e.equals=function(e,n){return!(null===e&&null!==n||null===n&&null!==e)&&w("equals",e,n)},e.intersects=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("intersects",e,n)},e.touches=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("touches",e,n)},e.within=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("within",e,n)},e.disjoint=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("disjoint",e,n)},e.overlaps=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("overlaps",e,n)},e.crosses=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("crosses",e,n)},e.contains=function(e,n){if(null===e||null===n)throw Error("Illegal Argument Exception");return w("contains",e,n)},e.isSimple=function(e){return w("issimple",e,null)},e.clip=function(e,n){return v("clip",e,n)},e.simplify=function(e){var n=new f,r=e.spatialReference;return j.a({action:"simplify",geoma:d(e),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?n.reject(Error(e.error.message)):n.resolve(h(e.result,r))},function(e){n.reject(e)}),n.promise},e.rotate=function(e,n,r){var t=new f,o=e.spatialReference;if(void 0===r||null===r)switch(e.type){case"point":r=e;break;case"extent":r=x?e.get("center"):e.getCenter();break;default:r=x?e.get("extent").get("center"):e.getExtent().getCenter()}return j.a({action:"rotate",geoma:d(e),spatialReference:p(e.spatialReference),angle:n,rotpt:d(r)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise},e.flipHorizontal=function(e,n){var r=new f,t=e.spatialReference;if(void 0===n||null===n)switch(e.type){case"point":n=e;break;case"extent":n=x?e.get("center"):e.getCenter();break;default:n=x?e.get("extent").get("center"):e.getExtent().getCenter()}return j.a({action:"fliph",geoma:d(e),spatialReference:p(e.spatialReference),flippt:d(n)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(h(e.result,t))},function(e){r.reject(e)}),r.promise},e.flipVertical=function(e,n){var r=new f,t=e.spatialReference;if(void 0===n||null===n)switch(e.type){case"point":n=e;break;case"extent":n=x?e.get("center"):e.getCenter();break;default:n=x?e.get("extent").get("center"):e.getExtent().getCenter()}return j.a({action:"flipv",geoma:d(e),spatialReference:p(e.spatialReference),flippt:d(n)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(h(e.result,t))},function(e){r.reject(e)}),r.promise},e.distance=function(e,n,r){var t=new f;return j.a({action:"distance",geoma:d(e),geomb:d(n),spatialReference:p(e.spatialReference),distanceunits:g(r,3)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.relate=function(e,n,r){var t=new f;return j.a({action:"relate",geoma:d(e),geomb:d(n),relation:r,spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.nearestCoordinate=function(e,n,r){var t=new f,o=e.spatialReference;return j.a({action:"nearestcoord",geoma:d(e),geomb:d(n),spatialReference:p(e.spatialReference),testinterior:void 0===r||r}).then(function(e){0===e.status?t.reject(Error(e.error.message)):(e.result.coordinate=h(e.result.coordinate,o),t.resolve(e.result))},function(e){t.reject(e)}),t.promise},e.nearestVertex=function(e,n){var r=new f,t=e.spatialReference;return j.a({action:"nearestvertex",geoma:d(e),geomb:d(n),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):(e.result.coordinate=h(e.result.coordinate,t),r.resolve(e.result))},function(e){r.reject(e)}),r.promise},e.nearestVertices=function(e,n,r,t){var o=new f,i=e.spatialReference;return j.a({action:"nearestvertices",geoma:d(e),geomb:d(n),spatialReference:p(e.spatialReference),searchradius:r,maxreturn:t}).then(function(e){if(0===e.status)o.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n].coordinate=h(e.result[n].coordinate,i);o.resolve(e.result)}},function(e){o.reject(e)}),o.promise},e.cut=function(e,n){var r=new f,t=e.spatialReference;return j.a({action:"cut",geoma:d(e),geomb:d(n),spatialReference:p(e.spatialReference)}).then(function(e){if(0===e.status)r.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],t);r.resolve(e.result)}},function(e){r.reject(e)}),r.promise},e.generalize=function(e,n,r,t){var o=new f,i=e.spatialReference;return j.a({action:"generalize",geoma:d(e),maxdeviation:n,removedegenerateparts:r,maxdeviationunit:g(t,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?o.reject(Error(e.error.message)):o.resolve(h(e.result,i))},function(e){o.reject(e)}),o.promise},e.densify=function(e,n,r){var t=new f,o=e.spatialReference;return j.a({action:"densify",geoma:d(e),maxsegmentlength:n,maxsegmentlengthunit:g(r,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,o))},function(e){t.reject(e)}),t.promise},e.geodesicDensify=function(e,n,r,t){void 0===t&&(t=0);var o=new f,i=e.spatialReference;return j.a({action:"geodensify",geoma:d(e),maxsegmentlength:n,maxsegmentlengthunit:g(r,3),spatialReference:p(e.spatialReference),curveType:t}).then(function(e){0===e.status?o.reject(Error(e.error.message)):o.resolve(h(e.result,i))},function(e){o.reject(e)}),o.promise},e.intersect=function(n,r){return n instanceof o?v("intersect",n,r):e.u(n,r)},e.u=function(e,n){for(var r=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=n.spatialReference;return j.a({action:"intersectmany",geom:d(n),geometries:t,spatialReference:p(n.spatialReference)}).then(function(e){if(0===e.status)r.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],i);r.resolve(e.result)}},function(e){r.reject(e)}),r.promise},e.difference=function(n,r){return n instanceof o?v("difference",n,r):e.s(n,r)},e.s=function(e,n){for(var r=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=n.spatialReference;return j.a({action:"differencemany",geom:d(n),geometries:t,spatialReference:p(n.spatialReference)}).then(function(e){if(0===e.status)r.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],i);r.resolve(e.result)}},function(e){r.reject(e)}),r.promise},e.symmetricDifference=function(n,r){return n instanceof o?v("symdifference",n,r):e.w(n,r)},e.w=function(e,n){for(var r=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=n.spatialReference;return j.a({action:"symdifferencemany",geom:d(n),geometries:t,spatialReference:p(n.spatialReference)}).then(function(e){if(0===e.status)r.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],i);r.resolve(e.result)}},function(e){r.reject(e)}),r.promise},e.union=function(e,n){void 0===n&&(n=null);var r=new f,t=[];if(null===e)return r.resolve(null),r.promise;if(e instanceof o&&(e=[e],null!==n&&e.push(n)),0===e.length)return r.resolve(null),r.promise;for(var i=0;i<e.length;i++)t.push(d(e[i]));var a=e[0].spatialReference;return j.a({action:"unionmany",geometries:t,spatialReference:p(a)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(h(e.result,a))},function(e){r.reject(e)}),r.promise},e.buffer=function(n,r,t,i){if(void 0===i&&(i=!1),n instanceof o){var a=new f,s=n.spatialReference;return j.a({action:"buffer",geoma:d(n),spatialReference:p(n.spatialReference),distance:r,unit:g(t,3),geodesic:!1,geodesicmaxdeviation:NaN,geodesiccurvetype:0}).then(function(e){0===e.status?a.reject(Error(e.error.message)):a.resolve(h(e.result,s))},function(e){a.reject(e)}),a.promise}if("[object Array]"!==Object.prototype.toString.call(r)){for(var u=[],c=0;c<n.length;c++)u.push(r);r=u}if(r.length!=n.length){if(0==r.length)throw Error("Illegal Argument Exception");u=[];var l=0;for(c=0;c<n.length;c++)void 0===r[c]?u.push(l):(u.push(r[c]),l=r[c]);r=u}return e.j(n,r,t,!1,i,"geodesic",NaN)},e.geodesicBuffer=function(n,r,t,i,a,s){if(n instanceof o){var u=new f;void 0===a&&(a=NaN);var c=n.spatialReference;return j.a({action:"buffer",geoma:d(n),spatialReference:p(n.spatialReference),distance:r,unit:g(t,0),geodesic:!0,geodesicmaxdeviation:a,geodesiccurvetype:m(i)}).then(function(e){0===e.status?u.reject(Error(e.error.message)):u.resolve(h(e.result,c))},function(e){u.reject(e)}),u.promise}if("[object Array]"!==Object.prototype.toString.call(r)){for(var l=[],v=0;v<n.length;v++)l.push(r);r=l}if(r.length!=n.length){if(0==r.length)throw Error("Illegal Argument Exception");l=[];var w=0;for(v=0;v<n.length;v++)void 0===r[v]?l.push(w):(l.push(r[v]),w=r[v]);r=l}return e.j(n,r,t,!0,i,a,s)},e.j=function(e,n,r,t,o,i,a){var s=new f,u=[];if(void 0===a&&(a=NaN),null===e||0===e.length)return s.resolve(null),s.promise;for(var c=0;c<e.length;c++)u.push(d(e[c]));r=g(r,t?0:3);var l=e[0].spatialReference;return j.a({action:"buffermany",geometries:u,spatialReference:p(l),distances:n,tounionresults:o,unit:r,geodesic:t,geodesicmaxdeviation:a,geodesiccurvetype:m(i)}).then(function(e){if(0===e.status)s.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],l);s.resolve(e.result)}},function(e){s.reject(e)}),s.promise},e.convexHull=function(n,r){if(void 0===r&&(r=!1),n instanceof o){var t=new f,i=n.spatialReference;return j.a({action:"convexhull",geoma:d(n),spatialReference:p(n.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(h(e.result,i))},function(e){t.reject(e)}),t.promise}return e.o(n,r)},e.o=function(e,n){for(var r=new f,t=[],o=0;o<e.length;o++)t.push(d(e[o]));var i=0<e.length?e[0].spatialReference:null;return j.a({action:"convexhullmany",geometries:t,merge:n}).then(function(e){if(0===e.status)r.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],i);r.resolve(e.result)}},function(e){r.reject(e)}),r.promise},e.offset=function(n,r,t,i,a,s){var u=0;if(null!=i&&void 0!=i)switch(i){case"round":u=0;break;case"bevel":u=1;break;case"miter":u=2;break;case"square":u=3}if(n instanceof o){var c=new f,l=n.spatialReference;return j.a({action:"offset",geoma:d(n),spatialReference:p(n.spatialReference),distance:r,joins:u,bevelratio:a,flattenerror:s,offsetunit:g(t,3)}).then(function(e){0===e.status?c.reject(Error(e.error.message)):c.resolve(h(e.result,l))},function(e){c.reject(e)}),c.promise}return e.v(n,r,t,u,a,s)},e.v=function(e,n,r,t,o,i){for(var a=new f,s=[],u=0;u<e.length;u++)s.push(d(e[u]));var c=0<e.length?e[0].spatialReference:null;return j.a({action:"offsetmany",geometries:s,spatialReference:p(c),distance:n,joins:t,bevelratio:o,offsetunit:g(r,3),flattenerror:i}).then(function(e){if(0===e.status)a.reject(Error(e.error.message));else{for(var n=0;n<e.result.length;n++)e.result[n]=h(e.result[n],c);a.resolve(e.result)}},function(e){a.reject(e)}),a.promise},e.planarArea=function(e,n){var r=new f;return j.a({action:"area",geoma:d(e),unit:g(n,2),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(e.result)},function(e){r.reject(e)}),r.promise},e.planarLength=function(e,n){var r=new f;return j.a({action:"length",geoma:d(e),unit:g(n,3),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?r.reject(Error(e.error.message)):r.resolve(e.result)},function(e){r.reject(e)}),r.promise},e.geodesicArea=function(e,n,r){var t=new f;return j.a({action:"geodesicarea",geoma:d(e),unit:g(n,2),geodesiccurvetype:m(r),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e.geodesicLength=function(e,n,r){var t=new f;return j.a({action:"geodesiclength",geoma:d(e),unit:g(n,0),geodesiccurvetype:m(r),spatialReference:p(e.spatialReference)}).then(function(e){0===e.status?t.reject(Error(e.error.message)):t.resolve(e.result)},function(e){t.reject(e)}),t.promise},e}()}.apply(null,t))||(e.exports=o)},1710:function(e,n,r){var t,o;t=[r(251)],void 0===(o=function(e){return e}.apply(null,t))||(e.exports=o)},1785:function(e,n,r){var t,o;t=[r(167),r(104),r(58),r(1710),r(16),r(22),r.dj.c(e.i)],void 0===(o=function(e,n,r,t,o,i,a){var s=window.Blob||window.webkitBlob||window.mozBlob,u=window.URL||window.webkitURL||window.mozURL;return n([e],{declaredClass:"esri.workers.WorkerClient",worker:null,_queue:null,constructor:function(e,n){this._isIE=o("ie"),this._queue={},this._acceptMessage=this._acceptMessage.bind(this),this._errorMessage=this._errorMessage.bind(this),e&&this.setWorker(e,function(e){this.worker=e,n(this)}.bind(this))},setWorker:function(e,n){if(e instanceof Array){var r=e;e=r.shift()}var t=this._getUrl(e);t=i.normalize(t);var o,a=!i.hasSameOrigin(t,location.href);if(!1===t)return console.log("Can not resolve worker path"),!1;if(this.worker&&((o=this.worker).removeEventListener("message",this._acceptMessage,!1),o.removeEventListener("error",this._errorMessage,!1),o.terminate(),o=null),a){var c=this._getUrl("./mutableWorker",!0);try{this._getRemoteText(c,function(e){var r=u.createObjectURL(new s([e],{type:"text/javascript"}));n(this._createWorker(r,t))}.bind(this))}catch(e){try{c=i.getProxyUrl(c).path+"?"+encodeURI(c),this._useProxy=!0,n(this._createWorker(c,r))}catch(e){return console.log("Can not create worker"),!1}}}else n(this._createWorker(t,r))},_createWorker:function(e,n){var r=new Worker(e);return r.addEventListener("message",this._acceptMessage,!1),r.addEventListener("error",this._errorMessage,!1),this.worker=r,n&&this.importScripts(n),r},postMessage:function(e,n){(e instanceof Array||"object"!=typeof e)&&(e={data:e});var t=Math.floor(64e9*Math.random()).toString(36);e.msgId=t;var o=this._queue[t]=new r;return this.worker?(n?this.worker.postMessage(e,n):this.worker.postMessage(e),this.emit("start-message",{target:this,message:e})):o.reject({message:"No worker was set."}),o.promise},terminate:function(){var e=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var n=e.length-1;n>=0;n--)this._queue[e[n]].cancel("terminated"),delete this._queue[e[n]]},addWorkerCallback:function(e,n){var t,o=this._getUrl(e,!0);return!1===o?((t=new r).reject({message:"Could not load text from "+e}),t.promise):this.postMessage({action:"add-callback",url:o,cbName:n||"main"}).then(function(e){e.target=this,this.emit("callback-added",e)}.bind(this))},importScripts:function(e){Array.isArray(e)||(e=[e]);var n=e.map(function(e){var n=this._getUrl(e,!0);return this._useProxy&&!i.hasSameOrigin(n,location.href)&&(n=i.getProxyUrl(n).path+"?"+encodeURI(n)),n},this);return this.postMessage({action:"import-script",url:n}).then(function(e){e.target=this,this.emit("scripts-imported",e)}.bind(this))},_acceptMessage:function(e){var n=e.data,r=n.msgId;if(n.status&&"debug"==n.status){var t=n.showAs||"debug";console[t](n)}else if(r&&r in this._queue){var o=this._queue[r];"progress"==n.status?o.progress(e.data):"error"==n.status?(o.reject(e.data),delete this._queue[r]):(o.resolve(e.data),delete this._queue[r])}this.emit("message",{message:e.data,event:e,target:this})},_errorMessage:function(e){this.onerror||this.onError?this.onerror?this.onerror(e):this.onError(e):console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)},_getUrl:function(e,n){if(!e)return console.error("can not resolve empty path"),!1;e.match(/\.js$/)||(e+=".js");var r=a.toUrl(e);return n?i.makeAbsolute(r):r},_getRemoteText:function(e,n){(e=this._getUrl(e))&&t.get(e,{sync:!1,handleAs:"text",headers:{"X-Requested-With":"","Content-Type":"text/plain"}}).then(function(e){n(e)})},_startBlobWorker:function(){var e=this._xdSource;if(!e){var n=this._getUrl("./mutableWorker"),r=new s(["if(!self._mutable){importScripts('"+n+"');}"],{type:"text/javascript"});e=this._xdSource=u.createObjectURL(r)}try{return new Worker(e)}catch(e){return console.log(e.message),!1}}})}.apply(null,t))||(e.exports=o)}}]);