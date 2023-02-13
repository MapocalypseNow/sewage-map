"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[1657],{51657:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(1413),i=n(37762),a=n(74165),s=n(15861),u=n(15671),o=n(43144),l=n(76200),c=n(14921),p=n(10064),d=n(32718),f=n(92026),h=n(66978),y=n(77981),v=n(92975),g=n(83406),m=n(97114),b=n(19995),Z=n(14e3),x=n(47615),_=n(63543),k=n(68808),w=n(52410),I=n(85249),F=n(80031),E={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},j=function(){function e(){var t=this;(0,u.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,u,o,l,c,d,f,h,y,g,b,k,j,T,q,S,P,O,G,R,C,D,M,Q,A,N,J=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=J.length>1&&void 0!==J[1]?J[1]:{},this._loadOptions={url:t.url,customParameters:t.customParameters},s=[],e.next=5,this._checkProjection(t.spatialReference);case 5:if(u=null,e.t0=t.url,!e.t0){e.next=11;break}return e.next=10,this._fetch(null===n||void 0===n?void 0:n.signal);case 10:u=e.sent;case 11:o=(0,x.my)(u,{geometryType:t.geometryType}),l=t.fields||o.fields||[],c=null!=t.hasZ?t.hasZ:o.hasZ,d=o.geometryType,f=t.objectIdField||o.objectIdFieldName||"__OBJECTID",h=t.spatialReference||v.Zn,y=t.timeInfo,l===o.fields&&o.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}}),(g=new w.Z(l).get(f))?("esriFieldTypeString"!==g.type&&(g.type="esriFieldTypeOID"),g.editable=!1,g.nullable=!1,f=g.name):(g={alias:f,name:f,type:"string"===o.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},l.unshift(g)),b={},k=(0,i.Z)(l),e.prev=20,k.s();case 22:if((j=k.n()).done){e.next=31;break}if(null==(T=j.value).name&&(T.name=T.alias),null==T.alias&&(T.alias=T.name),T.name){e.next=26;break}throw new p.Z("geojson-layer:invalid-field-name","field name is missing",{field:T});case 26:if(I.v.jsonValues.includes(T.type)){e.next=28;break}throw new p.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(T.name,'"'),{field:T});case 28:T.name!==g.name&&void 0!==(q=(0,F.os)(T))&&(b[T.name]=q);case 29:e.next=22;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(20),k.e(e.t1);case 36:return e.prev=36,k.f(),e.finish(36);case 39:return this._fieldsIndex=new w.Z(l),(S=this._fieldsIndex.requiredFields.indexOf(g))>-1&&this._fieldsIndex.requiredFields.splice(S,1),y&&(y.startTimeField&&((P=this._fieldsIndex.get(y.startTimeField))?(y.startTimeField=P.name,P.type="esriFieldTypeDate"):y.startTimeField=null),y.endTimeField&&((O=this._fieldsIndex.get(y.endTimeField))?(y.endTimeField=O.name,O.type="esriFieldTypeDate"):y.endTimeField=null),y.trackIdField&&((G=this._fieldsIndex.get(y.trackIdField))?y.trackIdField=G.name:(y.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))),y.startTimeField||y.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)),R=d?(0,_.bU)(d):null,C={warnings:s,featureErrors:[],layerDefinition:(0,r.Z)((0,r.Z)({},E),{},{drawingInfo:R,templates:(0,_.Hq)(b),extent:null,geometryType:d,objectIdField:f,fields:l,hasZ:!!c,timeInfo:y})},this._queryEngine=new Z.q({fields:l,geometryType:d,hasM:!1,hasZ:c,objectIdField:f,spatialReference:h,timeInfo:y,featureStore:new m.Z({geometryType:d,hasM:!1,hasZ:c}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,_.Dm)(b,f),e.next=46,this._createFeatures(u);case 46:return D=e.sent,this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,D),M=this._normalizeFeatures(D,C.warnings,C.featureErrors),this._queryEngine.featureStore.addMany(M),C.layerDefinition.extent=this._queryEngine.fullExtent,C.layerDefinition.timeInfo&&(Q=this._queryEngine.timeExtent,A=Q.start,N=Q.end,C.layerDefinition.timeInfo.timeExtent=[A,N]),e.abrupt("return",C);case 51:case"end":return e.stop()}}),e,this,[[20,33,36,39]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,r=n.spatialReference,i=n.geometryType,e.next=3,Promise.all([(0,k.b)(r,i),(0,b._W)(t.adds,r),(0,b._W)(t.updates,r)]);case 3:return e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",this._applyEdits(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadOptions.customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,c.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){r._queryEngine.featureStore.clear(),r._objectIdGenerator=r._createObjectIdGenerator(r._queryEngine,e);var t=r._normalizeFeatures(e);t&&r._queryEngine.featureStore.addMany(t)}),(function(e){r._queryEngine.featureStore.clear(),(0,h.D_)(e)||d.Z.getLogger("esri.layers.GeoJSONLayer").error(new p.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createFeatures",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,s,u,o,l,c,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._queryEngine,r=n.geometryType,s=n.hasZ,u=n.objectIdField,o=(0,x.lG)(t,{geometryType:r,hasZ:s,objectIdField:u}),!(0,v.fS)(this._queryEngine.spatialReference,v.Zn)){l=(0,i.Z)(o);try{for(l.s();!(c=l.n()).done;)p=c.value,(0,f.pC)(p.geometry)&&(p.geometry=(0,g.GH)((0,b.iV)((0,g.di)(p.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),v.Zn,this._queryEngine.spatialReference)))}catch(a){l.e(a)}finally{l.f()}}return e.abrupt("return",o);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,i,s,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._loadOptions,i=n.url,s=n.customParameters,e.next=5,(0,l.default)(i,{responseType:"json",query:(0,r.Z)({},s),signal:t});case 5:return u=e.sent.data,e.next=8,(0,x.O3)(u);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_normalizeFeatures",value:function(e,t,n){var r,a=this._queryEngine.objectIdField,s=[],u=(0,i.Z)(e);try{for(u.s();!(r=u.n()).done;){var o=r.value,l=this._createDefaultAttributes(),c=(0,k.O0)(this._fieldsIndex,l,o.attributes,!0,t);c?null===n||void 0===n||n.push(c):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[a],s.push(o))}}catch(p){u.e(p)}finally{u.f()}return s}},{key:"_applyEdits",value:function(e){var t=e.adds,n=e.updates,r=e.deletes,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),n&&n.length&&this._applyUpdateEdits(a,n),r&&r.length){var s,u=(0,i.Z)(r);try{for(u.s();!(s=u.n()).done;){var o=s.value;a.deleteResults.push((0,k.d1)(o))}}catch(l){u.e(l)}finally{u.f()}this._queryEngine.featureStore.removeManyById(r)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}},{key:"_applyAddEdits",value:function(e,t){var n,r=e.addResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,l=a.objectIdField,c=a.spatialReference,p=a.featureStore,d=[],h=(0,i.Z)(t);try{for(h.s();!(n=h.n()).done;){var v=n.value;if(v.geometry&&s!==(0,y.Ji)(v.geometry))r.push((0,k.av)("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),Z=(0,k.O0)(this._fieldsIndex,m,v.attributes);if(Z)r.push(Z);else{if(this._assignObjectId(m,v.attributes),v.attributes=m,null!=v.uid){var x=v.attributes[l];e.uidToObjectId[v.uid]=x}if((0,f.pC)(v.geometry)){var _,w=null!==(_=v.geometry.spatialReference)&&void 0!==_?_:c;v.geometry=(0,b.iV)((0,k.og)(v.geometry,w),w,c)}d.push(v),r.push((0,k.d1)(v.attributes[l]))}}}}catch(I){h.e(I)}finally{h.f()}p.addMany((0,g.Yn)([],d,s,o,u,l))}},{key:"_applyUpdateEdits",value:function(e,t){var n,r=e.updateResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,l=a.objectIdField,c=a.spatialReference,p=a.featureStore,d=(0,i.Z)(t);try{for(d.s();!(n=d.n()).done;){var h=n.value,v=h.attributes,m=h.geometry,Z=v&&v[l];if(null!=Z)if(p.has(Z)){var x=(0,g.EI)(p.getFeature(Z),s,o,u);if((0,f.pC)(m)){var _;if(s!==(0,y.Ji)(m)){r.push((0,k.av)("Incorrect geometry type."));continue}var w=null!==(_=m.spatialReference)&&void 0!==_?_:c;x.geometry=(0,b.iV)((0,k.og)(m,w),w,c)}if(v){var I=(0,k.O0)(this._fieldsIndex,x.attributes,v);if(I){r.push(I);continue}}p.add((0,g.XA)(x,s,o,u,l)),r.push((0,k.d1)(Z))}else r.push((0,k.av)("Feature with object id ".concat(Z," missing")));else r.push((0,k.av)("Identifier field ".concat(l," missing")))}}catch(F){d.e(F)}finally{d.f()}}},{key:"_createObjectIdGenerator",value:function(e,t){var n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return function(){return n.name+"-"+Date.now().toString(16)};var r,a=Number.NEGATIVE_INFINITY,s=(0,i.Z)(t);try{for(s.s();!(r=s.n()).done;){var u=r.value;u.objectId&&(a=Math.max(a,u.objectId))}}catch(o){s.e(o)}finally{s.f()}return a=Math.max(0,a)+1,function(){return a++}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._queryEngine.objectIdField;e[r]=n&&r in t?t[r]:this._objectIdGenerator()}},{key:"_checkProjection",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b._W)(v.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new p.Z("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},47615:function(e,t,n){n.d(t,{O3:function(){return I},lG:function(){return E},my:function(){return F},q9:function(){return f}});var r=n(29439),i=n(74165),a=n(37762),s=n(10064),u=n(3182),o=n(80457),l=n(80031),c=(0,i.Z)().mark(h),p=(0,i.Z)().mark(y),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return d[e]}function h(e){var t,n,r;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=(0,a.Z)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),c,null,[[7,19,22,25]])}function y(e){var t,n,r,s,u,o,l,c,d;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return",null);case 2:i.t0=e.type,i.next="Point"===i.t0?5:"LineString"===i.t0||"MultiPoint"===i.t0?8:"MultiLineString"===i.t0||"Polygon"===i.t0?10:"MultiPolygon"===i.t0?27:58;break;case 5:return i.next=7,e.coordinates;case 7:return i.abrupt("break",58);case 8:return i.delegateYield(e.coordinates,"t1",9);case 9:return i.abrupt("break",58);case 10:t=(0,a.Z)(e.coordinates),i.prev=11,t.s();case 13:if((n=t.n()).done){i.next=18;break}return r=n.value,i.delegateYield(r,"t2",16);case 16:i.next=13;break;case 18:i.next=23;break;case 20:i.prev=20,i.t3=i.catch(11),t.e(i.t3);case 23:return i.prev=23,t.f(),i.finish(23);case 26:return i.abrupt("break",58);case 27:s=(0,a.Z)(e.coordinates),i.prev=28,s.s();case 30:if((u=s.n()).done){i.next=50;break}o=u.value,l=(0,a.Z)(o),i.prev=33,l.s();case 35:if((c=l.n()).done){i.next=40;break}return d=c.value,i.delegateYield(d,"t4",38);case 38:i.next=35;break;case 40:i.next=45;break;case 42:i.prev=42,i.t5=i.catch(33),l.e(i.t5);case 45:return i.prev=45,l.f(),i.finish(45);case 48:i.next=30;break;case 50:i.next=55;break;case 52:i.prev=52,i.t6=i.catch(28),s.e(i.t6);case 55:return i.prev=55,s.f(),i.finish(55);case 58:case"end":return i.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function v(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function g(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function m(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){x(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var s=r.value;b(e,s[0],n);for(var u=1;u<s.length;u++)Z(e,s[u],n)}}catch(o){i.e(o)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return k(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;b(e,r[0],n);for(var i=1;i<r.length;i++)Z(e,r[i],n);return e}(e,t,n)}}function b(e,t,n){var r=g(t);!function(e){return!v(e)}(r)?x(e,r,n):_(e,r,n)}function Z(e,t,n){var r=g(t);!function(e){return v(e)}(r)?x(e,r,n):_(e,r,n)}function x(e,t,n){var r,i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){k(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}e.lengths.push(t.length)}function _(e,t,n){for(var r=t.length-1;r>=0;r--)k(e,t[r],n);e.lengths.push(t.length)}function k(e,t,n){var i=(0,r.Z)(t,3),a=i[0],s=i[1],u=i[2];e.coords.push(a,s),n.hasZ&&e.coords.push(u||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function F(e){var t,n,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=[],u=new Set,o=new Set,c=!1,p=null,d=!1,v=i.geometryType,g=void 0===v?null:v,m=!1,b=(0,a.Z)(h(e));try{var Z=function(){var e=r.value,t=e.geometry,i=e.properties,h=e.id;if((!t||(g||(g=f(t.type)),f(t.type)===g))&&(c||(c=function(e){var t,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;)if(t.value.length>2)return!0}catch(r){n.e(r)}finally{n.f()}return!1}(y(t))),d||(d=null!=h)&&(n=typeof h,p=Object.keys(i).filter((function(e){return i[e]===h}))),d&&null!=h&&(p.length>1?p=p.filter((function(e){return i[e]===h})):1===p.length&&(p=i[p[0]]===h?p:[])),!m&&i)){var v=!0;for(var b in i)if(!u.has(b)){var Z=i[b];if(null!=Z){var x=w(Z);"unknown"!==x?(o.delete(b),u.add(b),s.push({name:(0,l.q6)(b),alias:b,type:x})):o.add(b)}else v=!1,o.add(b)}m=v}};for(b.s();!(r=b.n()).done;)Z()}catch(F){b.e(F)}finally{b.f()}var x=(0,l.q6)(1===(null===(t=p)||void 0===t?void 0:t.length)&&p[0]||null);if(x){var _,k=(0,a.Z)(s);try{for(k.s();!(_=k.n()).done;){var I=_.value;if(I.name===x&&(0,l.H7)(I)){I.type="esriFieldTypeOID";break}}}catch(F){k.e(F)}finally{k.f()}}return{fields:s,geometryType:g,hasZ:c,objectIdFieldName:x,objectIdFieldType:n,unknownFields:Array.from(o)}}function E(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.Z)().mark((function n(){var r,s,l,c,p,d,h,y,v,g,b,Z;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,s=t.objectIdField,l=(0,a.Z)(e),n.prev=2,l.s();case 4:if((c=l.n()).done){n.next=17;break}if(d=c.value,h=d.geometry,y=d.properties,v=d.id,!h||f(h.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return b=null!==(p=(g=y||{})[s])&&void 0!==p?p:null,s&&null!=v&&!g[s]&&(g[s]=b=v),Z=new u.u_(h?m(new o.Z,h,t):null,g,null,b),n.next=15,Z;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),l.e(n.t0);case 22:return n.prev=22,l.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(h(e),t))}},68808:function(e,t,n){n.d(t,{O0:function(){return m},av:function(){return f},b:function(){return k},d1:function(){return y},og:function(){return Z}});var r=n(74165),i=n(15861),a=n(37762),s=n(43144),u=n(15671),o=n(92026),l=n(92975),c=n(80031),p=(0,s.Z)((function e(){(0,u.Z)(this,e),this.code=null,this.description=null})),d=(0,s.Z)((function e(t){(0,u.Z)(this,e),this.error=new p,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function f(e){return new d(e)}var h=(0,s.Z)((function e(t){(0,u.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function y(e){return new h(e)}var v,g=new Set;function m(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;for(var u in g.clear(),n){var o=e.get(u);if(o){var l=n[u],p=b(o,l);if(p!==l&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:p}}),g.add(o.name),o&&(i||o.editable)){var d=(0,c.Qc)(o,p);if(d)return f((0,c.vP)(d,o,p));t[o.name]=p}}}var h,y=(0,a.Z)(null!==(r=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==r?r:[]);try{for(y.s();!(h=y.n()).done;){var v=h.value;if(!g.has(v.name))return f('missing required field "'.concat(v.name,'"'))}}catch(m){y.e(m)}finally{y.f()}return null}function b(e,t){var n=t;return"string"==typeof t&&(0,c.H7)(e)?n=parseFloat(t):null!=t&&(0,c.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,c.Pz)(n)}function Z(e,t){if(!e||!(0,l.JY)(t))return e;if("rings"in e||"paths"in e){if((0,o.Wi)(v))throw new TypeError("geometry engine not loaded");return v.simplify(t,e)}return e}function x(){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,o.Wi)(v),!e.t0){e.next=5;break}return e.next=4,Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309));case 4:v=e.sent;case 5:return e.abrupt("return",v);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,l.JY)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,x();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=1657.b3085e58.chunk.js.map