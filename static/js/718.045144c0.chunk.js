"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[718],{718:function(e,t,n){n.r(t),n.d(t,{registerFunctions:function(){return V}});var a=n(74165),r=n(37762),i=n(15861),s=n(72741),c=n(62357),l=n(22564),u=n(5431),o=n(97879),f=n(31786),d=n(97246),p=n(44715),m=n(12829),y=n(67820),b=n(89066),x=n(45184),h=n(73954),v=n(84272),g=n(82279),w=n(29876),k=n(65247),F=n(93106),I=n(66978),Z=n(48562),E=n(64326),D=n(83040);function A(e,t,n,a){if(1===a.length){if((0,p.m)(a[0]))return(0,F.t)(e,a[0],-1);if((0,p.x)(a[0]))return(0,F.t)(e,a[0].toArray(),-1)}return(0,F.t)(e,a,-1)}function N(e,t,n){return S.apply(this,arguments)}function S(){return(S=(0,i.Z)((0,a.Z)().mark((function e(t,n,r){var i,s,c,l,u,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=t.getVariables()).length>0)){e.next=17;break}s=[],c=0;case 4:if(!(c<i.length)){e.next=14;break}return l={name:i[c]},e.t0=s,e.next=9,n.evaluateIdentifier(r,l);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 11:c++,e.next=4;break;case 14:for(u={},o=0;o<i.length;o++)u[i[o]]=s[o];return e.abrupt("return",(t.parameters=u,t));case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function L(e){if(null===e)return null;var t={type:T(e,"type",""),name:T(e,"name","")};if("range"===t.type)t.range=T(e,"range",[]);else{t.codedValues=[];var n,a=(0,r.Z)(T(e,"codedValues",[]));try{for(a.s();!(n=a.n()).done;){var i=n.value;t.codedValues.push({name:T(i,"name",""),code:T(i,"code",null)})}}catch(s){a.e(s)}finally{a.f()}}return t}function C(e){if(null===e)return null;var t={},n=T(e,"wkt",null);null!==n&&(t.wkt=n);var a=T(e,"wkid",null);return null!==a&&(t.wkid=a),t}function H(e){if(null===e)return null;var t={hasZ:T(e,"hasz",!1),hasM:T(e,"hasm",!1)},n=T(e,"spatialreference",null);n&&(t.spatialReference=C(n));var a=T(e,"x",null);if(null!==a)return t.x=a,t.y=T(e,"y",null),t;var r=T(e,"rings",null);if(null!==r)return t.rings=r,t;var i=T(e,"paths",null);if(null!==i)return t.paths=i,t;var s=T(e,"points",null);if(null!==s)return t.points=s,t;for(var c=0,l=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];c<l.length;c++){var u=l[c],o=T(e,u,null);null!==o&&(t[u]=o)}return t}function P(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){var n,a=(0,r.Z)(t);try{for(a.s();!(n=a.n()).done;)if(n.value===e)return!0}catch(i){a.e(i)}finally{a.f()}return!1}(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,p.m)(e.layerDefinition.fields)&&!1!==(0,p.m)(e.featureSet.features)}function V(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,u){var o,d,m,y,b,x,h,v,g,w,k,F,I,Z,E,D,A;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(u,0,2,t,n),o=(0,p.A)(u[1],""),d=!0===o,o=!0===o||!1===o?"":(0,p.j)(o),!(0===u.length||u[0]instanceof s.Z)){e.next=13;break}return m=null,t.services&&t.services.portal&&(m=t.services.portal),u.length>0&&(m=(0,f.getPortal)(u[0],m)),e.next=7,(0,f.lookupUser)(m,o,d);case 7:if(!(y=e.sent)){e.next=12;break}for(b=JSON.parse(JSON.stringify(y)),x=0,h=["lastLogin","created","modified"];x<h.length;x++)void 0!==b[v=h[x]]&&null!==b[v]&&(b[v]=new Date(b[v]));return e.abrupt("return",c.Z.convertObjectToArcadeDictionary(b));case 12:case 28:case 38:return e.abrupt("return",null);case 13:if(g=null,(0,p.T)(u[0])&&(g=u[0]),!g){e.next=39;break}if(d=!1,!o){e.next=17;break}return e.abrupt("return",null);case 17:return e.next=19,g.load();case 19:return e.next=21,g.getOwningSystemUrl();case 21:if(w=e.sent){e.next=29;break}if(o){e.next=28;break}return e.next=26,g.getIdentityUser();case 26:return k=e.sent,e.abrupt("return",k?c.Z.convertObjectToArcadeDictionary({username:k}):null);case 29:return F=null,t.services&&t.services.portal&&(F=t.services.portal),F=(0,f.getPortal)(new s.Z(w),F),e.next=33,(0,f.lookupUser)(F,o,d);case 33:if(!(I=e.sent)){e.next=38;break}for(Z=JSON.parse(JSON.stringify(I)),E=0,D=["lastLogin","created","modified"];E<D.length;E++)void 0!==Z[A=D[E]]&&null!==Z[A]&&(Z[A]=new Date(Z[A]));return e.abrupt("return",c.Z.convertObjectToArcadeDictionary(Z));case 39:throw new l.aV(t,l.rH.InvalidParameter,n);case 40:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"getuser",min:1,max:2}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,a,r){if((0,p.y)(r,2,4,t,n),r[0]instanceof o.Z){var i=(0,p.j)(r[1]),s=(0,p.A)(r[2],null),c=(0,p.h)((0,p.A)(r[3],!0));if(null===s&&(s=["*"]),!1===(0,p.m)(s))throw new l.aV(t,l.rH.InvalidParameter,n);return r[0].featureSetById(i,c,s)}throw new l.aV(t,l.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,(function(e,a,r){if((0,p.y)(r,1,2,t,n),(0,p.w)(r[0])){var i=(0,p.A)(r[1],"datasource");return null===i&&(i="datasource"),i=(0,p.j)(i).toLowerCase(),(0,f.convertToFeatureSet)(r[0].fullSchema(),i,t.lrucache,t.interceptor,t.spatialReference)}throw new l.aV(t,l.rH.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(function(e,a,r){if((0,p.y)(r,2,5,t,n),null===r[0])throw new l.aV(t,l.rH.PortalRequired,n);if(r[0]instanceof s.Z){var i=(0,p.j)(r[1]),c=(0,p.j)(r[2]),u=(0,p.A)(r[3],null),o=(0,p.h)((0,p.A)(r[4],!0));if(null===u&&(u=["*"]),!1===(0,p.m)(u))throw new l.aV(t,l.rH.InvalidParameter,n);var d=null;return t.services&&t.services.portal&&(d=t.services.portal),d=(0,f.getPortal)(r[0],d),(0,f.constructFeatureSetFromPortalItem)(i,c,t.spatialReference,u,o,d,t.lrucache,t.interceptor)}if(!1===(0,p.c)(r[0]))throw new l.aV(t,l.rH.PortalRequired,n);var m=(0,p.j)(r[0]),y=(0,p.j)(r[1]),b=(0,p.A)(r[2],null),x=(0,p.h)((0,p.A)(r[3],!0));if(null===b&&(b=["*"]),!1===(0,p.m)(b))throw new l.aV(t,l.rH.InvalidParameter,n);if(t.services&&t.services.portal)return(0,f.constructFeatureSetFromPortalItem)(m,y,t.spatialReference,b,x,t.services.portal,t.lrucache,t.interceptor);throw new l.aV(t,l.rH.PortalRequired,n)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,a,r){if((0,p.y)(r,2,4,t,n),r[0]instanceof o.Z){var i=(0,p.j)(r[1]),s=(0,p.A)(r[2],null),c=(0,p.h)((0,p.A)(r[3],!0));if(null===s&&(s=["*"]),!1===(0,p.m)(s))throw new l.aV(t,l.rH.InvalidParameter,n);return r[0].featureSetByName(i,c,s)}throw new l.aV(t,l.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(function(e,a,i){(0,p.y)(i,1,1,t,n);var s=i[0],u={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,p.c)(s))void 0!==(s=JSON.parse(s)).layerDefinition?(u.layerDefinition=s.layerDefinition,u.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(u.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(u.featureSet.features=s.features,u.featureSet.geometryType=s.geometryType,u.layerDefinition.geometryType=u.featureSet.geometryType,u.layerDefinition.objectIdField=s.objectIdFieldName,u.layerDefinition.typeIdField=s.typeIdFieldName,u.layerDefinition.globalIdField=s.globalIdFieldName,u.layerDefinition.fields=s.fields,s.spatialReference&&(u.layerDefinition.spatialReference=s.spatialReference));else{if(!(i[0]instanceof c.Z))throw new l.aV(t,l.rH.InvalidParameter,n);var o=T(s=JSON.parse(i[0].castToText(!0)),"layerdefinition");if(null!==o){u.layerDefinition.geometryType=T(o,"geometrytype",""),u.featureSet.geometryType=u.layerDefinition.geometryType,u.layerDefinition.globalIdField=T(o,"globalidfield",""),u.layerDefinition.objectIdField=T(o,"objectidfield",""),u.layerDefinition.typeIdField=T(o,"typeidfield","");var f=T(o,"spatialreference",null);f&&(u.layerDefinition.spatialReference=C(f));var d,m=(0,r.Z)(T(o,"fields",[]));try{for(m.s();!(d=m.n()).done;){var y=d.value,b={name:T(y,"name",""),alias:T(y,"alias",""),type:T(y,"type",""),nullable:T(y,"nullable",!0),editable:T(y,"editable",!0),length:T(y,"length",null),domain:L(T(y,"domain"))};u.layerDefinition.fields.push(b)}}catch(q){m.e(q)}finally{m.f()}var x=T(s,"featureset",null);if(x){var h,g={},w=(0,r.Z)(u.layerDefinition.fields);try{for(w.s();!(h=w.n()).done;){var k=h.value;g[k.name.toLowerCase()]=k.name}}catch(q){w.e(q)}finally{w.f()}var F,I=(0,r.Z)(T(x,"features",[]));try{for(I.s();!(F=I.n()).done;){var Z=F.value,E={},D=T(Z,"attributes",{});for(var A in D)E[g[A.toLowerCase()]]=D[A];u.featureSet.features.push({attributes:E,geometry:H(T(Z,"geometry",null))})}}catch(q){I.e(q)}finally{I.f()}}}else{u.layerDefinition.geometryType=T(s,"geometrytype",""),u.featureSet.geometryType=u.layerDefinition.geometryType,u.layerDefinition.objectIdField=T(s,"objectidfieldname",""),u.layerDefinition.typeIdField=T(s,"typeidfieldname","");var N=T(s,"spatialreference",null);N&&(u.layerDefinition.spatialReference=C(N));var S,V=(0,r.Z)(T(s,"fields",[]));try{for(V.s();!(S=V.n()).done;){var R=S.value,j={name:T(R,"name",""),alias:T(R,"alias",""),type:T(R,"type",""),nullable:T(R,"nullable",!0),editable:T(R,"editable",!0),length:T(R,"length",null),domain:L(T(R,"domain"))};u.layerDefinition.fields.push(j)}}catch(q){V.e(q)}finally{V.f()}var O,W={},M=(0,r.Z)(u.layerDefinition.fields);try{for(M.s();!(O=M.n()).done;){var X=O.value;W[X.name.toLowerCase()]=X.name}}catch(q){M.e(q)}finally{M.f()}var z,_=(0,r.Z)(T(s,"features",[]));try{for(_.s();!(z=_.n()).done;){var G=z.value,J={},U=T(G,"attributes",{});for(var B in U)J[W[B.toLowerCase()]]=U[B];u.featureSet.features.push({attributes:J,geometry:H(T(G,"geometry",null))})}}catch(q){_.e(q)}finally{_.f()}}}if(!1===P(u))throw new l.aV(t,l.rH.InvalidParameter,n);return v.Z.create(u,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,function(){var s=(0,i.Z)((0,a.Z)().mark((function i(s,c,u){var o,f,m,b,x,h,v,g,w,k,F,E,D,A,N;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if((0,p.y)(u,2,2,t,n),!(0,p.m)(u[0])&&!(0,p.x)(u[0])){a.next=36;break}if(o=[],(f=u[0])instanceof d.Z&&(f=f.toArray()),m=null,(0,p.i)(u[1])){a.next=7;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 7:m=u[1].createFunction(t),b=(0,r.Z)(f),a.prev=9,b.s();case 11:if((x=b.n()).done){a.next=27;break}if(h=x.value,v=m(h),!(0,I.y8)(v)){a.next=24;break}return a.t0=!0,a.next=18,v;case 18:if(a.t1=a.sent,a.t2=a.t0===a.t1,!a.t2){a.next=22;break}o.push(h);case 22:a.next=25;break;case 24:!0===v&&o.push(h);case 25:a.next=11;break;case 27:a.next=32;break;case 29:a.prev=29,a.t3=a.catch(9),b.e(a.t3);case 32:return a.prev=32,b.f(),a.finish(32);case 35:return a.abrupt("return",o);case 36:if(!(0,p.T)(u[0])){a.next=59;break}return a.next=39,u[0].load();case 39:if(g=a.sent,w=Z.WhereClause.create(u[1],g.getFieldsIndex()),!((k=w.getVariables()).length>0)){a.next=58;break}F=[],E=0;case 45:if(!(E<k.length)){a.next=55;break}return D={name:k[E]},a.t4=F,a.next=50,e.evaluateIdentifier(t,D);case 50:a.t5=a.sent,a.t4.push.call(a.t4,a.t5);case 52:E++,a.next=45;break;case 55:for(A={},N=0;N<k.length;N++)A[k[N]]=F[N];return a.abrupt("return",(w.parameters=A,new y.Z({parentfeatureset:u[0],whereclause:w})));case 58:return a.abrupt("return",new y.Z({parentfeatureset:u[0],whereclause:w}));case 59:throw new l.aV(t,l.rH.InvalidParameter,n);case 60:case"end":return a.stop()}}),i,null,[[9,29,32,35]])})));return function(e,t,n){return s.apply(this,arguments)}}())},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,s){var c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(s,2,2,t,n),!(0,p.T)(s[0])){e.next=3;break}return c=new g.Z(s[1]),e.abrupt("return",new b.Z({parentfeatureset:s[0],orderbyclause:c}));case 3:throw new l.aV(t,l.rH.InvalidParameter,n);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(s,2,2,t,n),!(0,p.T)(s[0])){e.next=2;break}return e.abrupt("return",new x.Z({parentfeatureset:s[0],topnum:s[1]}));case 2:if(!(0,p.m)(s[0])){e.next=4;break}return e.abrupt("return",(0,p.g)(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,(0,p.g)(s[1])));case 4:if(!(0,p.x)(s[0])){e.next=6;break}return e.abrupt("return",(0,p.g)(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,(0,p.g)(s[1])));case 6:throw new l.aV(t,l.rH.InvalidParameter,n);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,s){var c,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(s,1,1,t,n),!(0,p.T)(s[0])){e.next=8;break}return e.next=3,s[0].first(r.abortSignal);case 3:if(null===(c=e.sent)){e.next=7;break}return l=u.Z.createFromGraphicLikeObject(c.geometry,c.attributes,s[0]),e.abrupt("return",(l._underlyingGraphic=c,l));case 7:return e.abrupt("return",c);case 8:return e.abrupt("return",(0,p.m)(s[0])?0===s[0].length?null:s[0][0]:(0,p.x)(s[0])?0===s[0].length()?null:s[0].get(0):null);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,s){var u,o,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(s,1,2,t,n),u={minsize:-1,maxsize:-1,types:null,returnMetadata:!1},!(s.length>1)){e.next=9;break}if(!(s[1]instanceof c.Z)){e.next=7;break}s[1].hasField("minsize")&&(u.minsize=(0,p.g)(s[1].field("minsize"))),s[1].hasField("metadata")&&(u.returnMetadata=(0,p.h)(s[1].field("metadata"))),s[1].hasField("maxsize")&&(u.maxsize=(0,p.g)(s[1].field("maxsize"))),s[1].hasField("types")&&(o=(0,p.X)(s[1].field("types"),!1)).length>0&&(u.types=o),e.next=9;break;case 7:if(null===s[1]){e.next=9;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 9:if(!(0,p.w)(s[0])){e.next=25;break}if((d=s[0]._layer)instanceof E.default&&(d=(0,f.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null!==d){e.next=16;break}e.t0=[],e.next=24;break;case 16:if(!1!==(0,p.T)(d)){e.next=20;break}e.t1=[],e.next=23;break;case 20:return e.next=22,d.load();case 22:e.t1=d.queryAttachments(s[0].field(d.objectIdField),u.minsize,u.maxsize,u.types,u.returnMetadata);case 23:e.t0=e.t1;case 24:return e.abrupt("return",e.t0);case 25:if(null!==s[0]){e.next=27;break}return e.abrupt("return",[]);case 27:throw new l.aV(t,l.rH.InvalidParameter,n);case 28:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,i,s){var c,u,o,d,m,y,b,x,v,g,w,k;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(s,2,4,t,n),c=s[0],u=(0,p.j)(s[1]),o=(0,p.A)(s[2],null),d=(0,p.h)((0,p.A)(s[3],!0)),null===o&&(o=["*"]),!1!==(0,p.m)(o)){e.next=6;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 6:if(null!==s[0]){e.next=8;break}return e.abrupt("return",null);case 8:if((0,p.w)(s[0])){e.next=10;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 10:if((m=c._layer)instanceof E.default&&(m=(0,f.constructFeatureSet)(m,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null!==m){e.next=13;break}return e.abrupt("return",null);case 13:if(!1!==(0,p.T)(m)){e.next=15;break}return e.abrupt("return",null);case 15:return e.next=17,m.load();case 17:if(m=e.sent,y=m.relationshipMetaData().filter((function(e){return e.name===u})),0!==y.length){e.next=21;break}return e.abrupt("return",null);case 21:if(!(void 0!==y[0].relationshipTableId&&null!==y[0].relationshipTableId&&y[0].relationshipTableId>-1)){e.next=23;break}return e.abrupt("return",(0,f.constructFeatureSetFromRelationship)(m,y[0],c.field(m.objectIdField),m.spatialReference,o,d,t.lrucache,t.interceptor));case 23:if(b=m.serviceUrl()){e.next=26;break}return e.abrupt("return",null);case 26:return b="/"===b.charAt(b.length-1)?b+y[0].relatedTableId.toString():b+"/"+y[0].relatedTableId.toString(),e.next=29,(0,f.constructFeatureSetFromUrl)(b,m.spatialReference,o,d,t.lrucache,t.interceptor);case 29:return x=e.sent,e.next=32,x.load();case 32:if(v=(v=x.relationshipMetaData()).filter((function(e){return e.id===y[0].id})),!1!==c.hasField(y[0].keyField)&&null!==c.field(y[0].keyField)){e.next=41;break}return e.next=36,m.getFeatureByObjectId(c.field(m.objectIdField),[y[0].keyField]);case 36:if(!(g=e.sent)){e.next=40;break}return w=Z.WhereClause.create(v[0].keyField+"= @id",x.getFieldsIndex()),e.abrupt("return",(w.parameters={id:g.attributes[y[0].keyField]},x.filter(w)));case 40:return e.abrupt("return",new h.Z({parentfeatureset:x}));case 41:return k=Z.WhereClause.create(v[0].keyField+"= @id",x.getFieldsIndex()),e.abrupt("return",(k.parameters={id:c.field(y[0].keyField)},x.filter(k)));case 43:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i,s,c){var u,o,d,y,b,x,h,v,g,k,F,I,A,N,S,T,L,C,H,P,V,R,j,O,W,M,X,z,_,G,J,U,B,q,Q,$,K,Y,ee,te,ne;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.y)(c,2,3,t,n),u=c[0],o=(0,p.j)((0,p.A)(c[1],"")).toLowerCase(),d=(0,p.c)(c[2])?(0,p.j)(c[2]):null,null!==c[0]){e.next=4;break}return e.abrupt("return",null);case 4:if((0,p.w)(c[0])){e.next=6;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 6:if((y=u._layer)instanceof E.default&&(y=(0,f.constructFeatureSet)(y,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null!==y){e.next=9;break}return e.abrupt("return",null);case 9:if(!1!==(0,p.T)(y)){e.next=11;break}return e.abrupt("return",null);case 11:return e.next=13,y.load();case 13:return b=y.serviceUrl(),e.next=16,(0,f.constructAssociationMetaDataFeatureSetFromUrl)(b,t.spatialReference);case 16:if(x=e.sent,h=null,v=null,g=!1,null!==d&&""!==d&&void 0!==d){k=(0,r.Z)(x.terminals);try{for(k.s();!(F=k.n()).done;)(I=F.value).terminalName===d&&(v=I.terminalId)}catch(a){k.e(a)}finally{k.f()}null===v&&(g=!0)}A=x.associations.getFieldsIndex(),N=A.get("TOGLOBALID").name,S=A.get("FROMGLOBALID").name,T=A.get("TOTERMINALID").name,L=A.get("FROMTERMINALID").name,C=A.get("FROMNETWORKSOURCEID").name,H=A.get("TONETWORKSOURCEID").name,P=A.get("ASSOCIATIONTYPE").name,V=A.get("ISCONTENTVISIBLE").name,R=A.get("OBJECTID").name,j=(0,r.Z)(y.fields),e.prev=21,j.s();case 23:if((O=j.n()).done){e.next=30;break}if("global-id"!==(W=O.value).type){e.next=28;break}return h=u.field(W.name),e.abrupt("break",30);case 28:e.next=23;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(21),j.e(e.t0);case 35:return e.prev=35,j.f(),e.finish(35);case 38:for(U in M=null,X=new m.yN(new D.Z({name:"percentalong",alias:"percentalong",type:"double"}),Z.WhereClause.create("0",x.associations.getFieldsIndex())),z=new m.yN(new D.Z({name:"side",alias:"side",type:"string"}),Z.WhereClause.create("''",x.associations.getFieldsIndex())),_="globalid",G="globalId",J={},x.lkp)J[U]=x.lkp[U].sourceId;B=new m.TO(new D.Z({name:"classname",alias:"classname",type:"string"}),null,J),q="",e.t1=o,e.next="midspan"===e.t1?46:"junctionedge"===e.t1?50:"connected"===e.t1?54:"container"===e.t1?59:"content"===e.t1?60:"structure"===e.t1?62:"attached"===e.t1?64:66;break;case 46:return q="((".concat(N,"='").concat(h,"') OR ( ").concat(S,"='").concat(h,"')) AND (").concat(P," IN (5))"),B.codefield=Z.WhereClause.create("CASE WHEN (".concat(N,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),(Q=(0,w.JW)(m.Xx.findField(x.associations.fields,S))).name=_,Q.alias=_,M=new m.yN(Q,Z.WhereClause.create("CASE WHEN (".concat(S,"='").concat(h,"') THEN ").concat(N," ELSE ").concat(S," END"),x.associations.getFieldsIndex())),X=x.unVersion>=4?new m.$X(m.Xx.findField(x.associations.fields,A.get("PERCENTALONG").name)):new m.yN(new D.Z({name:"percentalong",alias:"percentalong",type:"double"}),Z.WhereClause.create("0",x.associations.getFieldsIndex())),e.abrupt("break",67);case 50:return q="((".concat(N,"='").concat(h,"') OR ( ").concat(S,"='").concat(h,"')) AND (").concat(P," IN (4,6))"),B.codefield=Z.WhereClause.create("CASE WHEN (".concat(N,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),($=(0,w.JW)(m.Xx.findField(x.associations.fields,S))).name=_,$.alias=_,M=new m.yN($,Z.WhereClause.create("CASE WHEN (".concat(S,"='").concat(h,"') THEN ").concat(N," ELSE ").concat(S," END"),x.associations.getFieldsIndex())),z=new m.yN(new D.Z({name:"side",alias:"side",type:"string"}),Z.WhereClause.create("CASE WHEN (".concat(P,"=4) THEN 'from' ELSE 'to' END"),x.associations.getFieldsIndex())),e.abrupt("break",67);case 54:return ee="".concat(N,"='@T'"),te="".concat(S,"='@T'"),null!==v&&(ee+=" AND ".concat(T,"=@A"),te+=" AND ".concat(L,"=@A")),q="(("+ee+") OR ("+te+"))",q=(0,p.L)(q,"@T",null!==(K=h)&&void 0!==K?K:""),ee=(0,p.L)(ee,"@T",null!==(Y=h)&&void 0!==Y?Y:""),null!==v&&(ee=(0,p.L)(ee,"@A",v.toString()),q=(0,p.L)(q,"@A",v.toString())),B.codefield=Z.WhereClause.create("CASE WHEN "+ee+" THEN ".concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),(ne=(0,w.JW)(m.Xx.findField(x.associations.fields,S))).name=_,ne.alias=_,M=new m.yN(ne,Z.WhereClause.create("CASE WHEN "+ee+" THEN ".concat(S," ELSE ").concat(N," END"),x.associations.getFieldsIndex())),e.abrupt("break",67);case 59:q="".concat(N,"='").concat(h,"' AND ").concat(P," = 2"),null!==v&&(q+=" AND ".concat(T," = ")+v.toString()),B.codefield=C,q="( "+q+" )",M=new m.QP(m.Xx.findField(x.associations.fields,S),_,_);case 60:return q="(".concat(S,"='").concat(h,"' AND ").concat(P," = 2)"),null!==v&&(q+=" AND ".concat(L," = ")+v.toString()),B.codefield=H,q="( "+q+" )",M=new m.QP(m.Xx.findField(x.associations.fields,N),_,_),e.abrupt("break",67);case 62:return q="(".concat(N,"='").concat(h,"' AND ").concat(P," = 3)"),null!==v&&(q+=" AND ".concat(T," = ")+v.toString()),B.codefield=C,q="( "+q+" )",M=new m.QP(m.Xx.findField(x.associations.fields,S),_,G),e.abrupt("break",67);case 64:return q="(".concat(S,"='").concat(h,"' AND ").concat(P," = 3)"),null!==v&&(q+=" AND ".concat(L," = ")+v.toString()),B.codefield=H,q="( "+q+" )",M=new m.QP(m.Xx.findField(x.associations.fields,N),_,G),e.abrupt("break",67);case 66:throw new l.aV(t,l.rH.InvalidParameter,n);case 67:return g&&(q="1 <> 1"),e.abrupt("return",new m.Xx({parentfeatureset:x.associations,adaptedFields:[new m.$X(m.Xx.findField(x.associations.fields,R)),new m.$X(m.Xx.findField(x.associations.fields,V)),M,z,B,X],extraFilter:q?Z.WhereClause.create(q,x.associations.getFieldsIndex()):null}));case 69:case"end":return e.stop()}}),e,null,[[21,32,35,38]])})));return function(t,n,a){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,function(){var s=(0,i.Z)((0,a.Z)().mark((function i(s,u,o){var f,d,m,y,b,x,h,v,g,w,F,I,E,D,A,S,T,L,C,H,P,V,R,j,O,W,M,X,z,_,G,J,U,B,q,Q,$,K;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if((0,p.y)(o,3,3,t,n),(0,p.T)(o[0])){a.next=2;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 2:return a.next=4,o[0].load();case 4:if(f=a.sent,d=[],m=[],y=!1,b=[],!(0,p.c)(o[1])){a.next=12;break}b.push(o[1]),a.next=23;break;case 12:if(!(o[1]instanceof c.Z)){a.next=16;break}b.push(o[1]),a.next=23;break;case 16:if(!(0,p.m)(o[1])){a.next=20;break}b=o[1],a.next=23;break;case 20:if((0,p.x)(o[1])){a.next=22;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 22:b=o[1].toArray();case 23:x=(0,r.Z)(b),a.prev=24,x.s();case 26:if((h=x.n()).done){a.next=41;break}if(v=h.value,!(0,p.c)(v)){a.next=33;break}g=Z.WhereClause.create((0,p.j)(v),f.getFieldsIndex()),w=!0===(0,k.y5)(g)?(0,p.j)(v):"%%%%FIELDNAME",d.push({name:w,expression:g}),"%%%%FIELDNAME"===w&&(y=!0),a.next=39;break;case 33:if(v instanceof c.Z){a.next=35;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 35:if(F=v.hasField("name")?v.field("name"):"%%%%FIELDNAME",I=v.hasField("expression")?v.field("expression"):"","%%%%FIELDNAME"===F&&(y=!0),F){a.next=38;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 38:d.push({name:F,expression:Z.WhereClause.create(I||F,f.getFieldsIndex())});case 39:a.next=26;break;case 41:a.next=46;break;case 43:a.prev=43,a.t0=a.catch(24),x.e(a.t0);case 46:return a.prev=46,x.f(),a.finish(46);case 49:if(b=[],!(0,p.c)(o[2])){a.next=53;break}b.push(o[2]),a.next=64;break;case 53:if(!(0,p.m)(o[2])){a.next=57;break}b=o[2],a.next=64;break;case 57:if(!(0,p.x)(o[2])){a.next=61;break}b=o[2].toArray(),a.next=64;break;case 61:if(o[2]instanceof c.Z){a.next=63;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 63:b.push(o[2]);case 64:E=(0,r.Z)(b),a.prev=65,E.s();case 67:if((D=E.n()).done){a.next=77;break}if((A=D.value)instanceof c.Z){a.next=71;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 71:if(S=A.hasField("name")?A.field("name"):"",T=A.hasField("statistic")?A.field("statistic"):"",L=A.hasField("expression")?A.field("expression"):"",S&&T&&L){a.next=74;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 74:m.push({name:S,statistic:T.toLowerCase(),expression:Z.WhereClause.create(L,f.getFieldsIndex())});case 75:a.next=67;break;case 77:a.next=82;break;case 79:a.prev=79,a.t1=a.catch(65),E.e(a.t1);case 82:return a.prev=82,E.f(),a.finish(82);case 85:if(y){C={},H=(0,r.Z)(f.fields);try{for(H.s();!(P=H.n()).done;)V=P.value,C[V.name.toLowerCase()]=1}catch(i){H.e(i)}finally{H.f()}R=(0,r.Z)(d);try{for(R.s();!(j=R.n()).done;)"%%%%FIELDNAME"!==(O=j.value).name&&(C[O.name.toLowerCase()]=1)}catch(i){R.e(i)}finally{R.f()}W=(0,r.Z)(m);try{for(W.s();!(M=W.n()).done;)"%%%%FIELDNAME"!==(X=M.value).name&&(C[X.name.toLowerCase()]=1)}catch(i){W.e(i)}finally{W.f()}z=0,_=(0,r.Z)(d);try{for(_.s();!(G=_.n()).done;)if("%%%%FIELDNAME"===(J=G.value).name){for(;1===C["field_"+z.toString()];)z++;C["field_"+z.toString()]=1,J.name="FIELD_"+z.toString()}}catch(i){_.e(i)}finally{_.f()}}U=0,B=d;case 87:if(!(U<B.length)){a.next=94;break}return q=B[U],a.next=91,N(q.expression,e,t);case 91:U++,a.next=87;break;case 94:Q=0,$=m;case 95:if(!(Q<$.length)){a.next=102;break}return K=$[Q],a.next=99,N(K.expression,e,t);case 99:Q++,a.next=95;break;case 102:return a.abrupt("return",o[0].groupby(d,m));case 103:case"end":return a.stop()}}),i,null,[[24,43,46,49],[65,79,82,85]])})));return function(e,t,n){return s.apply(this,arguments)}}())},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,function(){var s=(0,i.Z)((0,a.Z)().mark((function i(s,u,o){var f,d,m,y,b,x,h,v,g,w,F,I,E,D,S,T,L,C,H,P,V,R,j,O,W;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(0,p.T)(o[0])){a.next=59;break}return(0,p.y)(o,2,2,t,n),a.next=4,o[0].load();case 4:if(f=a.sent,d=[],m=[],!(0,p.c)(o[1])){a.next=11;break}m.push(o[1]),a.next=22;break;case 11:if(!(o[1]instanceof c.Z)){a.next=15;break}m.push(o[1]),a.next=22;break;case 15:if(!(0,p.m)(o[1])){a.next=19;break}m=o[1],a.next=22;break;case 19:if((0,p.x)(o[1])){a.next=21;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 21:m=o[1].toArray();case 22:y=!1,b=(0,r.Z)(m),a.prev=24,b.s();case 26:if((x=b.n()).done){a.next=41;break}if(h=x.value,!(0,p.c)(h)){a.next=33;break}v=Z.WhereClause.create((0,p.j)(h),f.getFieldsIndex()),g=!0===(0,k.y5)(v)?(0,p.j)(h):"%%%%FIELDNAME",d.push({name:g,expression:v}),"%%%%FIELDNAME"===g&&(y=!0),a.next=39;break;case 33:if(h instanceof c.Z){a.next=35;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 35:if(w=h.hasField("name")?h.field("name"):"%%%%FIELDNAME",F=h.hasField("expression")?h.field("expression"):"","%%%%FIELDNAME"===w&&(y=!0),w){a.next=38;break}throw new l.aV(t,l.rH.InvalidParameter,n);case 38:d.push({name:w,expression:Z.WhereClause.create(F||w,f.getFieldsIndex())});case 39:a.next=26;break;case 41:a.next=46;break;case 43:a.prev=43,a.t0=a.catch(24),b.e(a.t0);case 46:return a.prev=46,b.f(),a.finish(46);case 49:if(y){I={},E=(0,r.Z)(f.fields);try{for(E.s();!(D=E.n()).done;)S=D.value,I[S.name.toLowerCase()]=1}catch(i){E.e(i)}finally{E.f()}T=(0,r.Z)(d);try{for(T.s();!(L=T.n()).done;)"%%%%FIELDNAME"!==(C=L.value).name&&(I[C.name.toLowerCase()]=1)}catch(i){T.e(i)}finally{T.f()}H=0,P=(0,r.Z)(d);try{for(P.s();!(V=P.n()).done;)if("%%%%FIELDNAME"===(R=V.value).name){for(;1===I["field_"+H.toString()];)H++;I["field_"+H.toString()]=1,R.name="FIELD_"+H.toString()}}catch(i){P.e(i)}finally{P.f()}}j=0,O=d;case 51:if(!(j<O.length)){a.next=58;break}return W=O[j],a.next=55,N(W.expression,e,t);case 55:j++,a.next=51;break;case 58:return a.abrupt("return",o[0].groupby(d,[]));case 59:return a.abrupt("return",A("distinct",0,0,o));case 60:case"end":return a.stop()}}),i,null,[[24,43,46,49]])})));return function(e,t,n){return s.apply(this,arguments)}}())})}}}]);
//# sourceMappingURL=718.045144c0.chunk.js.map