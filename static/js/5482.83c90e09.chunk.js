"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[5482],{35482:function(r,e,t){t.r(e),t.d(e,{default:function(){return S}});var a=t(37762),n=t(15671),o=t(43144),l=t(92026),i=t(18722),u=t(48976),f=t(4582),s=t(11186),c=t(8229),v=t(52587),b=t(78952),p=t(21134),h=t(89431),d=t(87005),y=t(28278),m=t(2821);function g(r,e,t,a){var n=r.rendererJSON,o=r.isRGBRenderer,l=null,i=null;if(e&&o)l=e;else if(e&&"pointCloudUniqueValueRenderer"===n.type){var u=(i=d.Z.fromJSON(n)).colorUniqueValueInfos;l=new Uint8Array(3*a);for(var f=C(i.fieldTransformType),s=0;s<a;s++)for(var c=(f?f(e[s]):e[s])+"",v=0;v<u.length;v++)if(u[v].values.includes(c)){l[3*s]=u[v].color.r,l[3*s+1]=u[v].color.g,l[3*s+2]=u[v].color.b;break}}else if(e&&"pointCloudStretchRenderer"===n.type){var b=(i=h.Z.fromJSON(n)).stops;l=new Uint8Array(3*a);for(var y=C(i.fieldTransformType),m=0;m<a;m++){var g=y?y(e[m]):e[m],I=b.length-1;if(g<b[0].value)l[3*m]=b[0].color.r,l[3*m+1]=b[0].color.g,l[3*m+2]=b[0].color.b;else if(g>=b[I].value)l[3*m]=b[I].color.r,l[3*m+1]=b[I].color.g,l[3*m+2]=b[I].color.b;else for(var A=1;A<b.length;A++)if(g<b[A].value){var w=(g-b[A-1].value)/(b[A].value-b[A-1].value);l[3*m]=b[A].color.r*w+b[A-1].color.r*(1-w),l[3*m+1]=b[A].color.g*w+b[A-1].color.g*(1-w),l[3*m+2]=b[A].color.b*w+b[A-1].color.b*(1-w);break}}}else if(e&&"pointCloudClassBreaksRenderer"===n.type){var M=(i=p.Z.fromJSON(n)).colorClassBreakInfos;l=new Uint8Array(3*a);for(var S=C(i.fieldTransformType),k=0;k<a;k++)for(var Z=S?S(e[k]):e[k],O=0;O<M.length;O++)if(Z>=M[O].minValue&&Z<=M[O].maxValue){l[3*k]=M[O].color.r,l[3*k+1]=M[O].color.g,l[3*k+2]=M[O].color.b;break}}else{l=new Uint8Array(3*a);for(var x=0;x<l.length;x++)l[x]=255}if(t&&i&&i.colorModulation)for(var D=i.colorModulation.minValue,F=i.colorModulation.maxValue,R=0;R<a;R++){var _=t[R],U=_>=F?1:_<=D?.3:.3+.7*(_-D)/(F-D);l[3*R]=U*l[3*R],l[3*R+1]=U*l[3*R+1],l[3*R+2]=U*l[3*R+2]}return l}function I(r,e,t){return(0,l.pC)(r)&&r.attributeInfo.useElevation?function(r,e){for(var t=new Float64Array(e),a=0;a<e;a++)t[a]=r[3*a+2];return t}(e,t):(0,l.pC)(r)?(0,y.qM)(r.attributeInfo.storageInfo,r.buffer,t):null}function C(r){return null==r||"none"===r?null:"low-four-bit"===r?function(r){return 15&r}:"high-four-bit"===r?function(r){return(240&r)>>4}:"absolute-value"===r?function(r){return Math.abs(r)}:"modulo-ten"===r?function(r){return r%10}:null}function A(r){var e,t=0,n=(0,a.Z)(r||[]);try{for(n.s();!(e=n.n()).done;){t|=1<<e.value}}catch(o){n.e(o)}finally{n.f()}return t}var w=function(){function r(){(0,n.Z)(this,r)}return(0,o.Z)(r,[{key:"transform",value:function(r){var e=this._transform(r),t=[e.points.buffer,e.rgb.buffer];(0,l.pC)(e.pointIdFilterMap)&&t.push(e.pointIdFilterMap.buffer);var n,o=(0,a.Z)(e.attributes);try{for(o.s();!(n=o.n()).done;){var u=n.value;"buffer"in u.values&&(0,i.eP)(u.values.buffer)&&u.values.buffer!==e.rgb.buffer&&t.push(u.values.buffer)}}catch(f){o.e(f)}finally{o.f()}return Promise.resolve({result:e,transferList:t})}},{key:"_transform",value:function(r){var e=function(r,e){if(null==r.encoding||""===r.encoding){var t=(0,y.W7)(e,r);if((0,l.Wi)(t.vertexAttributes.position))return;for(var a=(0,y.I_)(e,t.vertexAttributes.position),n=t.header.fields,o=[n.offsetX,n.offsetY,n.offsetZ],i=[n.scaleX,n.scaleY,n.scaleZ],u=a.length/3,f=new Float64Array(3*u),s=0;s<u;s++)f[3*s]=a[3*s]*i[0]+o[0],f[3*s+1]=a[3*s+1]*i[1]+o[1],f[3*s+2]=a[3*s+2]*i[2]+o[2];return f}if("lepcc-xyz"===r.encoding)return(0,m.Gi)(e).result}(r.schema,r.geometryBuffer),t=e.length/3,n=null,o=[],i=I(r.primaryAttributeData,e,t);(0,l.pC)(r.primaryAttributeData)&&i&&o.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:i});var u=I(r.modulationAttributeData,e,t);(0,l.pC)(r.modulationAttributeData)&&u&&o.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:u});var f=g(r.rendererInfo,i,u,t);if(r.filterInfo&&r.filterInfo.length>0&&(0,l.pC)(r.filterAttributesData)){var s=r.filterAttributesData.map((function(r){var a=I(r,e,t),n={attributeInfo:r.attributeInfo,values:a};return o.push(n),n}));n=new Uint32Array(t),t=function(r,e,t,n,o){for(var l=r.length/3,i=0,u=0;u<l;u++){for(var f=!0,s=0;s<n.length&&f;s++){var c=n[s].filterJSON,v=o[s].values[u];switch(c.type){case"pointCloudValueFilter":var b="exclude"===c.mode;c.values.includes(v)===b&&(f=!1);break;case"pointCloudBitfieldFilter":var p=A(c.requiredSetBits),h=A(c.requiredClearBits);(v&p)===p&&0==(v&h)||(f=!1);break;case"pointCloudReturnFilter":var d,y=15&v,m=v>>>4&15,g=m>1,I=1===y,C=y===m,w=!1,M=(0,a.Z)(c.includedReturns);try{for(M.s();!(d=M.n()).done;){var S=d.value;if("last"===S&&C||"firstOfMany"===S&&I&&g||"lastOfMany"===S&&C&&g||"single"===S&&!g){w=!0;break}}}catch(k){M.e(k)}finally{M.f()}w||(f=!1)}}f&&(t[i]=u,r[3*i]=r[3*u],r[3*i+1]=r[3*u+1],r[3*i+2]=r[3*u+2],e[3*i]=e[3*u],e[3*i+1]=e[3*u+1],e[3*i+2]=e[3*u+2],i++)}return i}(e,f,n,r.filterInfo,s)}var c,v=(0,a.Z)(r.userAttributesData);try{for(v.s();!(c=v.n()).done;){var p=c.value,h=I(p,e,t);o.push({attributeInfo:p.attributeInfo,values:h})}}catch(C){v.e(C)}finally{v.f()}3*t<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*t))),this._applyElevationOffsetInPlace(e,t,r.elevationOffset);var d=this._transformCoordinates(e,t,r.obb,b.Z.fromJSON(r.inSR),b.Z.fromJSON(r.outSR));return{obb:r.obb,points:d,rgb:f,attributes:o,pointIdFilterMap:n}}},{key:"_transformCoordinates",value:function(r,e,t,a,n){if(!(0,v.CM)(r,a,0,r,n,0,e))throw new Error("Can't reproject");var o=(0,c.f)(t.center[0],t.center[1],t.center[2]),l=(0,c.c)(),i=(0,c.c)();(0,u.c)(M,t.quaternion);for(var f=new Float32Array(3*e),b=0;b<e;b++)l[0]=r[3*b]-o[0],l[1]=r[3*b+1]-o[1],l[2]=r[3*b+2]-o[2],(0,s.q)(i,l,M),t.halfSize[0]=Math.max(t.halfSize[0],Math.abs(i[0])),t.halfSize[1]=Math.max(t.halfSize[1],Math.abs(i[1])),t.halfSize[2]=Math.max(t.halfSize[2],Math.abs(i[2])),f[3*b]=l[0],f[3*b+1]=l[1],f[3*b+2]=l[2];return f}},{key:"_applyElevationOffsetInPlace",value:function(r,e,t){if(0!==t)for(var a=0;a<e;a++)r[3*a+2]+=t}}]),r}(),M=(0,f.c)();function S(){return new w}}}]);
//# sourceMappingURL=5482.83c90e09.chunk.js.map