"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[2977],{42977:function(e,r,t){t.r(r),t.d(r,{default:function(){return q}});var a=t(74165),n=t(15861),i=t(1413),o=t(15671),l=t(43144),s=t(60136),u=t(29388),c=t(27366),p=t(76200),d=t(10064),y=t(41691),f=t(92026),v=t(97642),h=t(66978),_=t(35995),g=t(49861),m=(t(63780),t(89125)),b=t(38511),S=t(69912),k=t(31201),w=t(78952),T=t(30651),C=t(27961),Z=t(17775),O=t(6741),R=t(11936),U=t(6693),W=t(46671),B=t(6061),P=t(29598),j=t(71684),I=t(56811),L=t(18870),M=t(25899),N=t(45948),A=t(77990),D=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],J=function(e){(0,s.Z)(t,e);var r=(0,u.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,l.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,i.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,f.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(h.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return r?this._getDefaultAttribution(this._getMapName(r)):null}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&w.Z.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,a){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=[],l=(0,i.Z)({writeSublayerStructure:!1},a);n.forEach((function(e){var r=e.write({},l);o.push(r)})),o.some((function(e){return Object.keys(e).length>1}))&&(r.layers=o)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,_.mN)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var a=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,n=this.getTileUrl(e,r,t),o={responseType:"image",signal:a,query:(0,i.Z)({},this.refreshParameters)};return(0,p.default)(n,o).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(r,t,n){var o,l,s,u,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(c.length>3&&void 0!==c[3]?c[3]:{}).signal,l=this.getTileUrl(r,t,n),s={responseType:"blob",signal:o,query:(0,i.Z)({},this.refreshParameters)},e.next=6,(0,p.default)(l,s);case 6:return u=e.sent,e.abrupt("return",createImageBitmap(u.data));case 8:case"end":return e.stop()}}),e,this)})));return function(r,t,a){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,r,t){var a=!this.tilemapCache&&this.supportsBlankTile,n=(0,_.B7)((0,i.Z)((0,i.Z)((0,i.Z)({},this.parsedUrl.query),{},{blankTile:!a&&null},this.customParameters),{},{token:this.apiKey})),o=this.tileServers;return"".concat(o&&o.length?o[r%o.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(n?"?"+n:"")}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,a){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new d.Z("tile-layer:undefined-url","layer's url is not defined");var n=(0,M.Qc)(r.parsedUrl.path);if((0,f.pC)(n)&&"ImageServer"===n.serverType)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,p.default)(r.parsedUrl.path,{query:(0,i.Z)((0,i.Z)((0,i.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,a)}})).then((function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,M.M8)(r.url))return r._fetchServerVersion(r.url,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,M.B5)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,p.default)(t,{query:(0,i.Z)((0,i.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new d.Z("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var r;e=e.toLowerCase();for(var t=0,a=D.length;t<a;t++)if((r=D[t]).toLowerCase().includes(e))return(0,_.hF)("//static.arcgis.com/attribution/"+r)}}},{key:"_getDefaultTileServers",value:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),t}((0,U.h)((0,L.x)((0,I.M)((0,B.q)((0,P.I)((0,Z.Z)((0,O.O)((0,R.Y)((0,v.R)((0,y.p)((0,j.Q)((0,C.V)((0,W.N)(T.Z))))))))))))));(0,c._)([(0,g.Cb)({readOnly:!0})],J.prototype,"attributionDataUrl",null),(0,c._)([(0,g.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,c._)([(0,g.Cb)({json:{read:!0,write:!0}})],J.prototype,"blendMode",void 0),(0,c._)([(0,g.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],J.prototype,"isReference",void 0),(0,c._)([(0,g.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,c._)([(0,g.Cb)({type:Boolean})],J.prototype,"resampling",void 0),(0,c._)([(0,g.Cb)()],J.prototype,"sourceJSON",void 0),(0,c._)([(0,g.Cb)({type:w.Z})],J.prototype,"spatialReference",void 0),(0,c._)([(0,b.r)("spatialReference",["spatialReference","tileInfo"])],J.prototype,"readSpatialReference",null),(0,c._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],J.prototype,"sublayers",void 0),(0,c._)([(0,k.c)("sublayers",{layers:{type:[A.Z]}})],J.prototype,"writeSublayers",null),(0,c._)([(0,g.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,c._)([(0,g.Cb)()],J.prototype,"tileServers",null),(0,c._)([(0,m.p)("tileServers")],J.prototype,"castTileServers",null),(0,c._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),(0,c._)([(0,g.Cb)(N.HQ)],J.prototype,"url",void 0),(J=(0,c._)([(0,S.j)("esri.layers.TileLayer")],J)).prototype.fetchTile.__isDefault__=!0;var q=J}}]);
//# sourceMappingURL=2977.d6081211.chunk.js.map