"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[7213],{70804:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(71002),a=t(89611),i=t(60136);function o(){o=function(e,n){return new t(e,void 0,n)};var e=RegExp.prototype,n=new WeakMap;function t(e,r,i){var o=new RegExp(e,r);return n.set(o,i||n.get(e)),(0,a.Z)(o,t.prototype)}function u(e,t){var r=n.get(t);return Object.keys(r).reduce((function(n,t){var a=r[t];if("number"==typeof a)n[t]=e[a];else{for(var i=0;void 0===e[a[i]]&&i+1<a.length;)i++;n[t]=e[a[i]]}return n}),Object.create(null))}return(0,i.Z)(t,RegExp),t.prototype.exec=function(n){var t=e.exec.call(this,n);if(t){t.groups=u(t,this);var r=t.indices;r&&(r.groups=u(r,this))}return t},t.prototype[Symbol.replace]=function(t,a){if("string"==typeof a){var i=n.get(this);return e[Symbol.replace].call(this,t,a.replace(/\$<([^>]+)>/g,(function(e,n){var t=i[n];return"$"+(Array.isArray(t)?t.join("$"):t)})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,t,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(u(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,t,a)},o.apply(this,arguments)}},47615:function(e,n,t){t.d(n,{O3:function(){return j},lG:function(){return T},my:function(){return I},q9:function(){return d}});var r=t(29439),a=t(74165),i=t(37762),o=t(10064),u=t(3182),s=t(80457),c=t(80031),l=(0,a.Z)().mark(y),p=(0,a.Z)().mark(g),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(e){return f[e]}function y(e){var n,t,r;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:n=(0,i.Z)(e.features),a.prev=7,n.s();case 9:if((t=n.n()).done){a.next=17;break}if(r=t.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),n.e(a.t2);case 22:return a.prev=22,n.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function g(e){var n,t,r,o,u,s,c,l,f;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:n=(0,i.Z)(e.coordinates),a.prev=11,n.s();case 13:if((t=n.n()).done){a.next=18;break}return r=t.value,a.delegateYield(r,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),n.e(a.t3);case 23:return a.prev=23,n.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:o=(0,i.Z)(e.coordinates),a.prev=28,o.s();case 30:if((u=o.n()).done){a.next=50;break}s=u.value,c=(0,i.Z)(s),a.prev=33,c.s();case 35:if((l=c.n()).done){a.next=40;break}return f=l.value,a.delegateYield(f,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),c.e(a.t5);case 45:return a.prev=45,c.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),o.e(a.t6);case 55:return a.prev=55,o.f(),a.finish(55);case 58:case"end":return a.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function m(e){for(var n=0,t=0;t<e.length;t++){var r=e[t],a=e[(t+1)%e.length];n+=r[0]*a[1]-a[0]*r[1]}return n<=0}function h(e){var n=e[0],t=e[e.length-1];return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]||e.push(n),e}function v(e,n,t){switch(n.type){case"LineString":case"MultiPoint":return function(e,n,t){return Z(e,n.coordinates,t),e}(e,n,t);case"MultiLineString":return function(e,n,t){var r,a=(0,i.Z)(n.coordinates);try{for(a.s();!(r=a.n()).done;){Z(e,r.value,t)}}catch(o){a.e(o)}finally{a.f()}return e}(e,n,t);case"MultiPolygon":return function(e,n,t){var r,a=(0,i.Z)(n.coordinates);try{for(a.s();!(r=a.n()).done;){var o=r.value;b(e,o[0],t);for(var u=1;u<o.length;u++)w(e,o[u],t)}}catch(s){a.e(s)}finally{a.f()}return e}(e,n,t);case"Point":return function(e,n,t){return x(e,n.coordinates,t),e}(e,n,t);case"Polygon":return function(e,n,t){var r=n.coordinates;b(e,r[0],t);for(var a=1;a<r.length;a++)w(e,r[a],t);return e}(e,n,t)}}function b(e,n,t){var r=h(n);!function(e){return!m(e)}(r)?Z(e,r,t):k(e,r,t)}function w(e,n,t){var r=h(n);!function(e){return m(e)}(r)?Z(e,r,t):k(e,r,t)}function Z(e,n,t){var r,a=(0,i.Z)(n);try{for(a.s();!(r=a.n()).done;){x(e,r.value,t)}}catch(o){a.e(o)}finally{a.f()}e.lengths.push(n.length)}function k(e,n,t){for(var r=n.length-1;r>=0;r--)x(e,n[r],t);e.lengths.push(n.length)}function x(e,n,t){var a=(0,r.Z)(n,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),t.hasZ&&e.coords.push(u||0)}function F(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function j(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var n=e.crs;if(n){var t="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!t||!r.test(t))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}}function I(e){var n,t,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],u=new Set,s=new Set,l=!1,p=null,f=!1,m=a.geometryType,h=void 0===m?null:m,v=!1,b=(0,i.Z)(y(e));try{var w=function(){var e=r.value,n=e.geometry,a=e.properties,y=e.id;if((!n||(h||(h=d(n.type)),d(n.type)===h))&&(l||(l=function(e){var n,t=(0,i.Z)(e);try{for(t.s();!(n=t.n()).done;)if(n.value.length>2)return!0}catch(r){t.e(r)}finally{t.f()}return!1}(g(n))),f||(f=null!=y)&&(t=typeof y,p=Object.keys(a).filter((function(e){return a[e]===y}))),f&&null!=y&&(p.length>1?p=p.filter((function(e){return a[e]===y})):1===p.length&&(p=a[p[0]]===y?p:[])),!v&&a)){var m=!0;for(var b in a)if(!u.has(b)){var w=a[b];if(null!=w){var Z=F(w);"unknown"!==Z?(s.delete(b),u.add(b),o.push({name:(0,c.q6)(b),alias:b,type:Z})):s.add(b)}else m=!1,s.add(b)}v=m}};for(b.s();!(r=b.n()).done;)w()}catch(I){b.e(I)}finally{b.f()}var Z=(0,c.q6)(1===(null===(n=p)||void 0===n?void 0:n.length)&&p[0]||null);if(Z){var k,x=(0,i.Z)(o);try{for(x.s();!(k=x.n()).done;){var j=k.value;if(j.name===Z&&(0,c.H7)(j)){j.type="esriFieldTypeOID";break}}}catch(I){x.e(I)}finally{x.f()}}return{fields:o,geometryType:h,hasZ:l,objectIdFieldName:Z,objectIdFieldType:t,unknownFields:Array.from(s)}}function T(e,n){return Array.from(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)().mark((function t(){var r,o,c,l,p,f,y,g,m,h,b,w;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.geometryType,o=n.objectIdField,c=(0,i.Z)(e),t.prev=2,c.s();case 4:if((l=c.n()).done){t.next=17;break}if(f=l.value,y=f.geometry,g=f.properties,m=f.id,!y||d(y.type)===r){t.next=9;break}return t.abrupt("continue",15);case 9:return b=null!==(p=(h=g||{})[o])&&void 0!==p?p:null,o&&null!=m&&!h[o]&&(h[o]=b=m),w=new u.u_(y?v(new s.Z,y,n):null,h,null,b),t.next=15,w;case 15:t.next=4;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),c.e(t.t0);case 22:return t.prev=22,c.f(),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[2,19,22,25]])}))()}(y(e),n))}},67213:function(e,n,t){t.d(n,{$9:function(){return x},G4:function(){return S},Lu:function(){return k},WW:function(){return q},d:function(){return O},eS:function(){return W},gp:function(){return G},j:function(){return I},w9:function(){return F},yN:function(){return N}});var r=t(74165),a=t(37762),i=t(1413),o=t(70804),u=t(15861),s=(t(59486),t(76200)),c=t(10064),l=t(32718),p=t(92026),f=t(92975),d=t(81753),y=t(83406),g=t(6908),m=t(47615),h=t(63543),v=t(52410),b=t(85249),w=t(78952),Z=l.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),k="http://www.opengis.net/def/crs/",x="".concat(k,"OGC/1.3/CRS84");function F(e,n){return j.apply(this,arguments)}function j(){return j=(0,u.Z)((0,r.Z)().mark((function e(n,t){var o,u,l,f,d,y,g,w,k,x,F,j,I,T,S,P,G,M,W,C,O,N=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=N.length>2&&void 0!==N[2]?N[2]:{},u=N.length>3&&void 0!==N[3]?N[3]:5,l=n.links,f=$(l,"items","application/geo+json")||$(l,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!(0,p.Wi)(f)){e.next=5;break}throw new c.Z("ogc-feature-layer:missing-items-page","Missing items url");case 5:return e.next=7,(0,s.default)(f.href,{signal:o.signal,query:(0,i.Z)((0,i.Z)({limit:u},o.customParameters),{},{token:o.apiKey}),headers:{accept:"application/geo+json"}});case 7:return d=e.sent,y=d.data,e.next=11,(0,m.O3)(y);case 11:if(g=(0,m.my)(y,{geometryType:t.geometryType}),w=t.fields||g.fields||[],k=null!=t.hasZ?t.hasZ:g.hasZ,x=g.geometryType,F=t.objectIdField||g.objectIdFieldName||"OBJECTID",j=t.timeInfo,!(I=w.find((function(e){return e.name===F})))){e.next=18;break}I.editable=!1,I.nullable=!1,e.next=21;break;case 18:if(g.objectIdFieldType){e.next=20;break}throw new c.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");case 20:w.unshift({name:F,alias:F,type:"number"===g.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1});case 21:F!==g.objectIdFieldName&&(T=w.find((function(e){return e.name===g.objectIdFieldName})))&&(T.type="esriFieldTypeInteger"),w===g.fields&&g.unknownFields.length>0&&Z.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:g.unknownFields}}),S=(0,a.Z)(w),e.prev=24,S.s();case 26:if((P=S.n()).done){e.next=34;break}if(null==(G=P.value).name&&(G.name=G.alias),null==G.alias&&(G.alias=G.name),"esriFieldTypeOID"!==G.type&&"esriFieldTypeGlobalID"!==G.type&&(G.editable=null==G.editable||!!G.editable,G.nullable=null==G.nullable||!!G.nullable),G.name){e.next=30;break}throw new c.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:G});case 30:if(b.v.jsonValues.includes(G.type)){e.next=32;break}throw new c.Z("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(G.name,'"'),{field:G});case 32:e.next=26;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e.catch(24),S.e(e.t0);case 39:return e.prev=39,S.f(),e.finish(39);case 42:return j&&(M=new v.Z(w),j.startTimeField&&((W=M.get(j.startTimeField))?(j.startTimeField=W.name,W.type="esriFieldTypeDate"):j.startTimeField=null),j.endTimeField&&((C=M.get(j.endTimeField))?(j.endTimeField=C.name,C.type="esriFieldTypeDate"):j.endTimeField=null),j.trackIdField&&((O=M.get(j.trackIdField))?j.trackIdField=O.name:(j.trackIdField=null,Z.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))),j.startTimeField||j.endTimeField||(Z.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:j}}),j=null)),e.abrupt("return",{drawingInfo:x?(0,h.bU)(x):null,extent:K(n),geometryType:x,fields:w,hasZ:!!k,objectIdField:F,timeInfo:j});case 44:case"end":return e.stop()}}),e,null,[[24,36,39,42]])}))),j.apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return T=(0,u.Z)((0,r.Z)().mark((function e(n){var t,a,o,u,l,f,d,y,g=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.length>1&&void 0!==g[1]?g[1]:{},a=n.links,o=$(a,"data","application/json")||$(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json"),!(0,p.Wi)(o)){e.next=4;break}throw new c.Z("ogc-feature-layer:missing-collections-page","Missing collections url");case 4:return u=t.apiKey,l=t.customParameters,f=t.signal,e.next=9,(0,s.default)(o.href,{signal:f,headers:{accept:"application/json"},query:(0,i.Z)((0,i.Z)({},l),{},{token:u})});case 9:return d=e.sent,y=d.data,e.abrupt("return",y);case 12:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return P=(0,u.Z)((0,r.Z)().mark((function e(n){var t,a,o,u,l,f,d,y,g=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.length>1&&void 0!==g[1]?g[1]:{},a=n.links,o=$(a,"conformance","application/json")||$(a,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json"),!(0,p.Wi)(o)){e.next=4;break}throw new c.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");case 4:return u=t.apiKey,l=t.customParameters,f=t.signal,e.next=9,(0,s.default)(o.href,{signal:f,headers:{accept:"application/json"},query:(0,i.Z)((0,i.Z)({},l),{},{token:u})});case 9:return d=e.sent,y=d.data,e.abrupt("return",y);case 12:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function G(e){return M.apply(this,arguments)}function M(){return M=(0,u.Z)((0,r.Z)().mark((function e(n){var t,a,o,u,c,l,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(t=p.length>1&&void 0!==p[1]?p[1]:{}).apiKey,o=t.customParameters,u=t.signal,e.next=6,(0,s.default)(n,{signal:u,headers:{accept:"application/json"},query:(0,i.Z)((0,i.Z)({},o),{},{token:a})});case 6:return c=e.sent,l=c.data,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function W(e){return C.apply(this,arguments)}function C(){return C=(0,u.Z)((0,r.Z)().mark((function e(n){var t,a,o,u,c,l,f,d,y=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=y.length>1&&void 0!==y[1]?y[1]:{},a="application/vnd.oai.openapi+json;version=3.0",o=$(n.links,"service-desc",a),!(0,p.Wi)(o)){e.next=4;break}return e.abrupt("return",(Z.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null));case 4:return u=t.apiKey,c=t.customParameters,l=t.signal,e.next=9,(0,s.default)(o.href,{signal:l,headers:{accept:a},query:(0,i.Z)((0,i.Z)({},c),{},{token:u})});case 9:return f=e.sent,d=f.data,e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function O(e){var n,t=null===(n=(0,o.Z)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e))||void 0===n?void 0:n.groups;if(!t)return null;var r=t.authority,a=t.code;switch(r.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return w.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return w.Z.WGS84.wkid;default:return null}case"esri":case"epsg":var i=Number.parseInt(a,10);return Number.isNaN(i)?null:i;default:return null}}function N(e,n,t){return R.apply(this,arguments)}function R(){return(R=(0,u.Z)((0,r.Z)().mark((function e(n,t,a){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n,t,a);case 2:return i=e.sent,e.abrupt("return",(0,y.cn)(i));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,n,t){return L.apply(this,arguments)}function L(){return L=(0,u.Z)((0,r.Z)().mark((function e(n,t,o){var u,l,h,v,b,Z,k,x,F,j,I,T,S,P,G,M,W,C,O,N,R,q,L,A,K,_,H,V,Y,z,B,Q,U,X,ee,ne,te,re,ae,ie;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.collection,l=n.layerDefinition,h=n.maxRecordCount,v=n.queryParameters,b=v.apiKey,Z=v.customParameters,k=n.spatialReference,x=n.supportedCrs,F=u.links,j=$(F,"items","application/geo+json")||$(F,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!(0,p.Wi)(j)){e.next=3;break}throw new c.Z("ogc-feature-layer:missing-items-page","Missing items url");case 3:if(I=t.geometry,T=t.num,S=t.start,P=t.timeExtent,G=t.where,!t.objectIds){e.next=6;break}throw new c.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");case 6:return M=w.Z.fromJSON(k),W=(0,p.Pt)(t.outSpatialReference,M),C=W.isWGS84?null:D(W,x),O=J(I,x),N=E(P),r=G,R=(0,p.Wi)(r)||!r||"1=1"===r?null:r,q=null!==T&&void 0!==T?T:null!=S&&void 0!==S?10:h,e.next=15,(0,s.default)(j.href,(0,i.Z)((0,i.Z)({},o),{},{query:(0,i.Z)((0,i.Z)((0,i.Z)({},Z),O),{},{crs:C,datetime:N,query:R,limit:q,startindex:S,token:b}),headers:{accept:"application/geo+json"}}));case 15:if(L=e.sent,A=L.data,K=!1,A.links&&(_=A.links.find((function(e){return"next"===e.rel})),K=!!_),!K&&Number.isInteger(A.numberMatched)&&Number.isInteger(A.numberReturned)&&(K=A.numberReturned<A.numberMatched),H=l.fields,V=l.geometryType,Y=l.hasZ,z=l.objectIdField,B=(0,m.lG)(A,{geometryType:V,hasZ:Y,objectIdField:z}),!C&&W.isWebMercator){Q=(0,a.Z)(B);try{for(Q.s();!(U=Q.n()).done;)X=U.value,(0,p.pC)(X.geometry)&&((ee=(0,y.di)(X.geometry,V,Y,!1)).spatialReference=w.Z.WGS84,X.geometry=(0,y.GH)((0,d.iV)(ee,W)))}catch(oe){Q.e(oe)}finally{Q.f()}}ne=(0,a.Z)(B);try{for(ne.s();!(te=ne.n()).done;)(re=te.value).objectId=re.attributes[z]}catch(oe){ne.e(oe)}finally{ne.f()}return ae=C||!C&&W.isWebMercator?W.toJSON():f.Zn,ie=new g.Z,e.abrupt("return",(ie.exceededTransferLimit=K,ie.features=B,ie.fields=H,ie.geometryType=V,ie.hasZ=Y,ie.objectIdFieldName=z,ie.spatialReference=ae,ie));case 26:case"end":return e.stop()}var r}),e)}))),L.apply(this,arguments)}function D(e,n){var t,r,a,i=e.isWebMercator;if(!e.wkid)return null;var o=i?null!==(t=null!==(r=null!==(a=n[3857])&&void 0!==a?a:n[102100])&&void 0!==r?r:n[102113])&&void 0!==t?t:n[900913]:n[e.wkid];return o?"".concat(k).concat(o):null}function A(e){if((0,p.Wi)(e))return"";var n=e.xmin,t=e.ymin,r=e.xmax,a=e.ymax;return"".concat(n,",").concat(t,",").concat(r,",").concat(a)}function E(e){if((0,p.Wi)(e))return null;var n=e.start,t=e.end;return"".concat((0,p.pC)(n)?n.toISOString():"..","/").concat((0,p.pC)(t)?t.toISOString():"..")}function J(e,n){if(!function(e){return(0,p.pC)(e)&&"extent"===e.type}(e))return null;var t=e.spatialReference;if(!t||t.isWGS84)return{bbox:A(e)};var r=D(t,n);return(0,p.pC)(r)?{bbox:A(e),"bbox-crs":r}:t.isWebMercator?{bbox:A((0,d.iV)(e,w.Z.WGS84))}:null}function K(e){var n,t=null===(n=e.extent)||void 0===n?void 0:n.spatial;if(!t)return null;var r=t.bbox[0],a=4===r.length,i=r[0],o=r[1],u=a?void 0:r[2];return{xmin:i,ymin:o,xmax:a?r[2]:r[3],ymax:a?r[3]:r[4],zmin:u,zmax:a?void 0:r[5],spatialReference:w.Z.WGS84.toJSON()}}function $(e,n,t){return e.find((function(e){return e.rel===n&&e.type===t}))||e.find((function(e){return e.rel===n&&!e.type}))}}}]);
//# sourceMappingURL=7213.875c8e7a.chunk.js.map