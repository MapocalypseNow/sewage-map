"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[7314],{96212:function(t,e,i){i.d(e,{Z:function(){return k}});var r,n=i(37762),a=i(29439),l=i(15671),s=i(43144),h=i(60136),o=i(29388),u=i(27366),f=i(10064),p=i(46784),c=i(84652),v=i(32718),d=i(92026),x=i(49861),g=i(89125),m=i(69912),y=(0,s.Z)((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,l.Z)(this,t),this.minValue=e,this.maxValue=i,this.noDataValue=r})),w=r=function(t){(0,h.Z)(i,t);var e=(0,o.Z)(i);function i(t){var r;return(0,l.Z)(this,i),(r=e.call(this,t)).width=null,r.height=null,r.pixelType="f32",r.validPixelCount=null,r.mask=null,r.maskIsAlpha=!1,r.statistics=null,r}return(0,s.Z)(i,[{key:"castPixelType",value:function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}},{key:"getPlaneCount",value:function(){var t;return null===(t=this.pixels)||void 0===t?void 0:t.length}},{key:"addData",value:function(t){var e;if(!t.pixels||t.pixels.length!==this.width*this.height)throw new f.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(null!==(e=t.statistics)&&void 0!==e?e:new y)}},{key:"getAsRGBA",value:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}},{key:"getAsRGBAFloat",value:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}},{key:"updateStatistics",value:function(){var t=this;if(this.pixels){this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,i=0;if((0,d.pC)(e))for(var r=0;r<e.length;r++)e[r]&&i++;else i=this.width*this.height;this.validPixelCount=i}}},{key:"clamp",value:function(t){if(t&&"f64"!==t&&"f32"!==t&&this.pixels){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var i,n,l,s=e,h=(0,a.Z)(s,2),o=h[0],u=h[1],f=this.pixels,p=this.width*this.height,c=f.length,v=[],d=0;d<c;d++){l=r.createEmptyBand(t,p),i=f[d];for(var x=0;x<p;x++)n=i[x],l[x]=n>u?u:n<o?o:n;v.push(l)}this.pixels=v,this.pixelType=t}}},{key:"extractBands",value:function(t){var e=this.pixels,i=this.statistics;if((0,d.Wi)(t)||0===t.length||!e||0===e.length)return this;var n=e.length,a=t.some((function(t){return t>=e.length})),l=n===t.length&&!t.some((function(t,e){return t!==e}));return a||l?this:new r({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e[t]})),statistics:i&&t.map((function(t){return i[t]}))})}},{key:"clone",value:function(){var t,e=new r({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});(0,d.pC)(this.mask)&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));var i=r.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var n=!!this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=n?this.pixels[t].slice(0,this.pixels[t].length):new i(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=(0,c.d9)(this.statistics[t]);return e}},{key:"_fillFrom8Bit",value:function(t){var e=this.mask,i=this.maskIsAlpha,r=this.pixels;if(t&&r&&r.length){var n,a,l,s;n=a=l=r[0],r.length>=3?(a=r[1],l=r[2]):2===r.length&&(a=r[1]);var h=new Uint32Array(t),o=this.width*this.height;if(n.length===o)if((0,d.pC)(e)&&e.length===o)if(i)for(s=0;s<o;s++)e[s]&&(h[s]=e[s]<<24|l[s]<<16|a[s]<<8|n[s]);else for(s=0;s<o;s++)e[s]&&(h[s]=255<<24|l[s]<<16|a[s]<<8|n[s]);else for(s=0;s<o;s++)h[s]=255<<24|l[s]<<16|a[s]<<8|n[s];else v.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else v.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFromNon8Bit",value:function(t){var e=this.pixels,i=this.mask,r=this.statistics;if(t&&e&&e.length){var a=this.pixelType,l=1,s=0,h=1;if(r&&r.length>0){var o,u=(0,n.Z)(r);try{for(u.s();!(o=u.n()).done;){var f=o.value;if(null!=f.minValue&&(s=Math.min(s,f.minValue)),null!=f.maxValue&&null!=f.minValue){var p=f.maxValue-f.minValue;h=Math.max(h,p)}}}catch(C){u.e(C)}finally{u.f()}l=255/h}else{var c=255;"s8"===a?(s=-128,c=127):"u16"===a?c=65535:"s16"===a?(s=-32768,c=32767):"u32"===a?c=4294967295:"s32"===a?(s=-2147483648,c=2147483647):"f32"===a?(s=-34e38,c=34e38):"f64"===a&&(s=-Number.MAX_VALUE,c=Number.MAX_VALUE),l=255/(c-s)}var x,g,m,y,w,k=new Uint32Array(t),A=this.width*this.height;if((x=g=m=e[0]).length!==A)return v.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(g=e[1],e.length>=3&&(m=e[2]),(0,d.pC)(i)&&i.length===A)for(y=0;y<A;y++)i[y]&&(k[y]=255<<24|(m[y]-s)*l<<16|(g[y]-s)*l<<8|(x[y]-s)*l);else for(y=0;y<A;y++)k[y]=255<<24|(m[y]-s)*l<<16|(g[y]-s)*l<<8|(x[y]-s)*l;else if((0,d.pC)(i)&&i.length===A)for(y=0;y<A;y++)w=(x[y]-s)*l,i[y]&&(k[y]=255<<24|w<<16|w<<8|w);else for(y=0;y<A;y++)w=(x[y]-s)*l,k[y]=255<<24|w<<16|w<<8|w}else v.Z.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFrom32Bit",value:function(t){var e,i,r,n,a=this.pixels,l=this.mask;if(!t||!a||!a.length)return v.Z.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=i=r=a[0],a.length>=3?(i=a[1],r=a[2]):2===a.length&&(i=a[1]);var s=this.width*this.height;if(e.length!==s)return v.Z.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var h=0;if((0,d.pC)(l)&&l.length===s)for(n=0;n<s;n++)t[h++]=e[n],t[h++]=i[n],t[h++]=r[n],t[h++]=1&l[n];else for(n=0;n<s;n++)t[h++]=e[n],t[h++]=i[n],t[h++]=r[n],t[h++]=1}},{key:"_calculateBandStatistics",value:function(t,e){var i,r=1/0,n=-1/0,a=t.length,l=0;if((0,d.pC)(e))for(i=0;i<a;i++)e[i]&&(r=(l=t[i])<r?l:r,n=l>n?l:n);else for(i=0;i<a;i++)r=(l=t[i])<r?l:r,n=l>n?l:n;return new y(r,n)}}],[{key:"createEmptyBand",value:function(t,e){return new(r.getPixelArrayConstructor(t))(e)}},{key:"getPixelArrayConstructor",value:function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}}]),i}(p.wq);(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"width",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"height",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"pixelType",void 0),(0,u._)([(0,g.p)("pixelType")],w.prototype,"castPixelType",null),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"validPixelCount",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"mask",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"maskIsAlpha",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"pixels",void 0),(0,u._)([(0,x.Cb)({json:{write:!0}})],w.prototype,"statistics",void 0);var k=w=r=(0,u._)([(0,m.j)("esri.layers.support.PixelBlock")],w)},17314:function(t,e,i){i.d(e,{CD:function(){return n},DX:function(){return r},Gd:function(){return f},Kh:function(){return b},Pz:function(){return p},Qh:function(){return G},SJ:function(){return c},Uk:function(){return I},Vl:function(){return R},XV:function(){return v},a2:function(){return g},nA:function(){return C},nk:function(){return o},oB:function(){return A},pW:function(){return U},qF:function(){return u},sS:function(){return k},us:function(){return T},zp:function(){return x}});var r,n,a,l=i(93433),s=i(92026),h=i(96212);function o(t){return(0,s.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function u(t,e){if(null===e||void 0===e||!e.length||!o(t))return t;var i=t.pixels.length;return e&&e.some((function(t){return t>=i}))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some((function(t,e){return t!==e}))?new h.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t}function f(t){if(null===t||void 0===t||!t.length||t.some((function(t){return!o(t)})))return null;if(1===t.length)return(0,s.pC)(t[0])?t[0].clone():null;var e=t,i=e[0],r=i.width,n=i.height,a=i.pixelType;if(e.some((function(t){return t.width!==r||t.height!==n})))return null;var u=e.map((function(t){return t.mask})).filter((function(t){return null!=t})),f=null;u.length&&((f=new Uint8Array(r*n)).set(u[0]),u.length>1&&w(u.slice(1),f));var p=[];e.forEach((function(t){var e=t.pixels;return p.push.apply(p,(0,l.Z)(e))}));var c=e.map((function(t){return t.statistics})).filter((function(t){return null===t||void 0===t?void 0:t.length})),v=[];return c.forEach((function(t){return v.push.apply(v,(0,l.Z)(t))})),new h.Z({pixelType:a,width:r,height:n,mask:f,pixels:p,statistics:v.length?v:null})}function p(t){if(t){var e=t.colormap;if(e&&0!==e.length){var i=e.sort((function(t,e){return t[0]-e[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var n,a=Math.max(256,i[i.length-1][0]-r+1),l=new Uint8Array(4*a),s=[],h=0,o=0,u=5===i[0].length;if(a>65536)return i.forEach((function(t){s[t[0]-r]=u?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:s,offset:r,alphaSpecified:u};if(t.fillUnspecified)for(h=(n=i[o])[0]-r;h<a;h++)l[4*h]=n[1],l[4*h+1]=n[2],l[4*h+2]=n[3],l[4*h+3]=u?n[4]:255,h===n[0]-r&&(n=o===i.length-1?n:i[++o]);else for(h=0;h<i.length;h++)l[o=4*((n=i[h])[0]-r)]=n[1],l[o+1]=n[2],l[o+2]=n[3],l[o+3]=u?n[4]:255;return{indexedColormap:l,offset:r,alphaSpecified:u}}}}function c(t,e){if(!o(t))return t;if(!e||!e.indexedColormap&&!e.indexed2DColormap)return t;var i=t.clone(),r=i.pixels,n=i.mask,a=i.width*i.height;if(1!==r.length)return t;var l,h=e.indexedColormap,u=e.indexed2DColormap,f=e.offset,p=e.alphaSpecified,c=0,v=r[0],d=new Uint8Array(v.length),x=new Uint8Array(v.length),g=new Uint8Array(v.length),m=0;if(h){var y=h.length-1;if((0,s.pC)(n))for(c=0;c<a;c++)n[c]&&((m=4*(v[c]-f))<f||m>y?n[c]=0:(d[c]=h[m],x[c]=h[m+1],g[c]=h[m+2],n[c]=h[m+3]));else{for(n=new Uint8Array(a),c=0;c<a;c++)(m=4*(v[c]-f))<f||m>y?n[c]=0:(d[c]=h[m],x[c]=h[m+1],g[c]=h[m+2],n[c]=h[m+3]);i.mask=n}}else if(u)if((0,s.pC)(n))for(c=0;c<a;c++)n[c]&&(l=u[v[c]],d[c]=l[0],x[c]=l[1],g[c]=l[2],n[c]=l[3]);else{for(n=new Uint8Array(a),c=0;c<a;c++)l=u[v[c]],d[c]=l[0],x[c]=l[1],g[c]=l[2],n[c]=l[3];i.mask=n}return i.pixels=[d,x,g],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=p,i}function v(t,e){if(!o(t))return null;var i=t.pixels,r=t.mask,n=i.length,a=e.lut,l=e.offset;a&&1===a[0].length&&(a=i.map((function(){return a})));for(var s=[],u=e.outputPixelType||"u8",f=0;f<n;f++){var p=d(i[f],r,a[f],l||0,u);s.push(p)}var c=new h.Z({width:t.width,height:t.height,pixels:s,mask:r,pixelType:u});return c.updateStatistics(),c}function d(t,e,i,r,n){var a=t.length,l=h.Z.createEmptyBand(n,a);if(e)for(var s=0;s<a;s++)e[s]&&(l[s]=i[t[s]-r]);else for(var o=0;o<a;o++)l[o]=i[t[o]-r];return l}function x(t,e){if(!o(t))return null;var i,r,n,a,l,s,h=t.clone(),u=h.pixels,f=h.width*h.height,p=e.length,c=Math.floor(p/2),v=e[Math.floor(c)],d=u[0],x=!1,g=new Uint8Array(f),m=new Uint8Array(f),y=new Uint8Array(f),w=h.mask,k=4===e[0].mappedColor.length;for(w||((w=new Uint8Array(f)).fill(k?255:1),h.mask=w),l=0;l<f;l++)if(w[l]){for(i=d[l],x=!1,s=c,r=v,n=0,a=p-1;a-n>1;){if(i===r.value){x=!0;break}i>r.value?n=s:a=s,s=Math.floor((n+a)/2),r=e[Math.floor(s)]}x||(i===e[n].value?(r=e[n],x=!0):i===e[a].value?(r=e[a],x=!0):i<e[n].value?(x=!1,r=null):i>e[n].value&&(i<e[a].value?(r=e[n],x=!0):a===p-1?(x=!1,r=null):(r=e[a],x=!0))),x?(g[l]=r.mappedColor[0],m[l]=r.mappedColor[1],y[l]=r.mappedColor[2],w[l]=r.mappedColor[3]):g[l]=m[l]=y[l]=w[l]=0}return h.pixels=[g,m,y],h.mask=w,h.pixelType="u8",h.maskIsAlpha=k,h}function g(t,e){if(!o(t))return null;var i=t.width,r=t.height,n=e.inputRanges,a=e.outputValues,l=e.outputPixelType,s=e.noDataRanges,u=e.allowUnmatched,f=t.pixels[0],p=h.Z.createEmptyBand(l,f.length);u&&p.set(f);for(var c=t.mask,v=n.length/2,d=0;d<r;d++)for(var x=0;x<i;x++){var g=d*i+x;if(!c||c[g])for(var m=f[g],y=v-1;y>=0;y--)if(m>=n[2*y]&&m<=n[2*y+1]){p[g]=a[y];break}}var w=c;if(null!==s&&void 0!==s&&s.length){w=new Uint8Array(i*r),c&&w.set(c);for(var k=0;k<r;k++)for(var A=0;A<i;A++){var C=k*i+A;if(!c||c[C])for(var b=f[C],M=0;M<v;M+=2)if(b>=s[M]&&b<=s[M+1]){p[C]=0,w[C]=0;break}}}return new h.Z({width:i,height:r,pixelType:l,pixels:[p],mask:w})}function m(t,e,i,r){for(var n=null!=i&&i.length>=2?new Set(i):null,a=1===(null===i||void 0===i?void 0:i.length)?i[0]:null,l=!(null===e||void 0===e||!e.length),s=0;s<t.length;s++)if(r[s]){var h=t[s];if(l){for(var o=!1,u=0;u<e.length;u+=2)if(h>=e[u]&&h<=e[u+1]){o=!0;break}o||(r[s]=0)}r[s]&&(h===a||(null===n||void 0===n?void 0:n.has(h)))&&(r[s]=0)}}function y(t,e){for(var i=t[0].length,r=0;r<i;r++)if(e[r]){for(var n=!1,a=0;a<t.length;a++)if(t[a][r]){n=!0;break}n||(e[r]=0)}}function w(t,e){for(var i=t[0].length,r=0;r<i;r++)if(e[r]){for(var n=!1,a=0;a<t.length;a++)if(0===t[a][r]){n=!0;break}n&&(e[r]=0)}}function k(t,e){if(!o(t))return null;var i=t.width,r=t.height,n=t.pixels,a=i*r,l=new Uint8Array(a);t.mask?l.set(t.mask):l.fill(255);var s=n.length,u=e.includedRanges,f=e.noDataValues,p=e.outputPixelType,c=e.matchAll,v=e.lookup;if(v){for(var x=[],g=0;g<s;g++){var k=d(n[g],l,v.lut,v.offset||0,"u8");x.push(k)}1===x.length?l.set(x[0]):c?y(x,l):w(x,l)}else if(c){for(var A=[],C=0;C<s;C++){var b=new Uint8Array(a);b.set(l),m(n[C],u,f,b),A.push(b)}1===A.length?l.set(A[0]):y(A,l)}else for(var M=0;M<s;M++)m(n[M],u,f,l);return new h.Z({width:i,height:r,pixelType:p,pixels:n,mask:l})}function A(t,e,i){if("u8"!==t&&"s8"!==t&&"u16"!==t&&"s16"!==t)return null;for(var r=t.includes("16")?65536:256,n=t.includes("s")?-r/2:0,a=h.Z.createEmptyBand(t,r),l=0;l<e.length;l++)for(var s=i[l],o=Math.ceil(e[2*l]-n),u=Math.floor(e[2*l+1]-n),f=o;f<=u;f++)a[f]=s;return{lut:a,offset:n}}function C(t,e,i){if("u8"!==t&&"s8"!==t&&"u16"!==t&&"s16"!==t)return null;var r=t.includes("16")?65536:256,n=t.includes("s")?-r/2:0,a=new Uint8Array(r);if(e)for(var l=0;l<e.length;l++)for(var s=Math.ceil(e[2*l]-n),h=Math.floor(e[2*l+1]-n),o=s;o<=h;o++)a[o]=255;if(i)for(var u=0;u<i.length;u++)a[i[u]-n]=0;return{lut:a,offset:n}}function b(t,e){if(!t||0===t.length)return null;var i=t.find((function(t){return t.pixelBlock}));if(!i||(0,s.Wi)(i.pixelBlock))return null;var r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,n=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,a=.01*Math.min(r,n),l=t.sort((function(t,e){return Math.abs(t.extent.ymax-e.extent.ymax)>a?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>a?t.extent.xmin-e.extent.xmin:0})),h=Math.min.apply(null,l.map((function(t){return t.extent.xmin}))),o=Math.min.apply(null,l.map((function(t){return t.extent.ymin}))),u=Math.max.apply(null,l.map((function(t){return t.extent.xmax}))),f=Math.max.apply(null,l.map((function(t){return t.extent.ymax}))),p={x:Math.round((e.xmin-h)/r),y:Math.round((f-e.ymax)/n)},c={width:Math.round((u-h)/r),height:Math.round((f-o)/n)},v={width:Math.round((e.xmax-e.xmin)/r),height:Math.round((e.ymax-e.ymin)/n)};return Math.round(c.width/i.pixelBlock.width)*Math.round(c.height/i.pixelBlock.height)!==l.length||p.x<0||p.y<0||c.width<v.width||c.height<v.height?null:{extent:e,pixelBlock:T(l.map((function(t){return t.pixelBlock})),c,{clipOffset:p,clipSize:v})}}function M(t,e,i,r,n,a){var l=i.block,s=l.width,h=l.height,o=i.offset,u=o.x,f=o.y,p=i.mosaic,c=p.width,v=function(t,e,i,r,n,a,l,s){return{xmin:n<=i*t?0:n<i*t+t?n-i*t:t,ymin:a<=r*e?0:a<r*e+e?a-r*e:e,xmax:n+l<=i*t?0:n+l<i*t+t?n+l-i*t:t,ymax:a+s<=r*e?0:a+s<r*e+e?a+s-r*e:e}}(s,h,r,n,u,f,c,p.height),d=0,x=0;if(a){var g,m=a.hasGCSSShiftTransform?360:null!==(g=a.halfWorldWidth)&&void 0!==g?g:0,y=s*a.resolutionX,w=a.startX+r*y;w<m&&w+y>m?x=a.rightPadding:w>=m&&(d=a.leftMargin-a.rightPadding,x=0)}if(v.xmax-=x,"number"!=typeof e)for(var k=v.ymin;k<v.ymax;k++)for(var A=(n*h+k-f)*c+(r*s-u)+d,C=k*s,b=v.xmin;b<v.xmax;b++)t[A+b]=e[C+b];else for(var M=v.ymin;M<v.ymax;M++)for(var T=(n*h+M-f)*c+(r*s-u)+d,U=v.xmin;U<v.xmax;U++)t[T+U]=e}function T(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.clipOffset,n=i.clipSize,a=i.alignmentInfo,l=i.blockWidths;if(l)return function(t,e,i){var r=t.find((function(t){return(0,s.pC)(t)}));if((0,s.Wi)(r))return null;var n=t.some((function(t){return!(0,s.pC)(t)||!!t.mask})),a=e.width,l=e.height,u=n?new Uint8Array(a*l):null,f=i.blockWidths,p=[],c=r.getPlaneCount(),v=h.Z.getPixelArrayConstructor(r.pixelType);if(n)for(var d=0,x=0;d<t.length;x+=f[d],d++){var g=t[d];if(o(g))for(var m=(0,s.Wg)(g.mask),y=0;y<l;y++)for(var w=0;w<f[d];w++)u[y*a+w+x]=null==m?255:m[y*g.width+w]}for(var k=0;k<c;k++){for(var A=new v(a*l),C=0,b=0;C<t.length;b+=f[C],C++){var M=t[C];if(o(M)){var T=M.pixels[k];if(null!=T)for(var U=0;U<l;U++)for(var B=0;B<f[C];B++)A[U*a+B+b]=T[U*M.width+B]}}p.push(A)}var Z=new h.Z({width:a,height:l,mask:u,pixels:p,pixelType:r.pixelType});return Z.updateStatistics(),Z}(t,e,{blockWidths:l});var u=t.find((function(t){return o(t)}));if((0,s.Wi)(u))return null;for(var f,p,c=n?n.width:e.width,v=n?n.height:e.height,d=u.width,x=u.height,g=e.width/d,m=e.height/x,y={offset:r||{x:0,y:0},mosaic:n||e,block:{width:d,height:x}},w=u.pixelType,k=h.Z.getPixelArrayConstructor(w),A=u.pixels.length,C=[],b=0;b<A;b++){f=new k(c*v);for(var T=0;T<m;T++)for(var U=0;U<g;U++){var B=t[T*g+U];o(B)&&M(f,B.pixels[b],y,U,T,a)}C.push(f)}if(t.some((function(t){return(0,s.Wi)(t)||(0,s.pC)(t.mask)&&t.mask.length>0}))){p=new Uint8Array(c*v);for(var Z=0;Z<m;Z++)for(var _=0;_<g;_++){var P=t[Z*g+_],S=(0,s.pC)(P)?P.mask:null;(0,s.pC)(S)?M(p,S,y,_,Z,a):M(p,P?1:0,y,_,Z,a)}}var F=new h.Z({width:c,height:v,pixels:C,pixelType:w,mask:p});return F.updateStatistics(),F}function U(t,e,i){if(!o(t))return null;var r=t.width,n=t.height,a=e.x,l=e.y,s=i.width+a,h=i.height+l;if(a<0||l<0||s>r||h>n)return t;if(0===a&&0===l&&s===r&&h===n)return t;t.mask||(t.mask=new Uint8Array(r*n));for(var u=t.mask,f=0;f<n;f++)for(var p=f*r,c=0;c<r;c++)u[p+c]=f<l||f>=h||c<a||c>=s?0:1;return t.updateStatistics(),t}function B(t){if(!o(t))return null;for(var e=t.clone(),i=t.width,r=t.height,n=t.pixels[0],a=e.pixels[0],l=(0,s.Wg)(t.mask),h=2;h<r-1;h++){for(var u=new Map,f=h-2;f<h+2;f++)for(var p=0;p<4;p++){var c=f*i+p;P(u,n[c],l?l[c]:1)}a[h*i]=Z(u),a[h*i+1]=a[h*i+2]=a[h*i];for(var v=3;v<i-1;v++){var d=(h-2)*i+v+1;P(u,n[d],l?l[d]:1),P(u,n[d=(h-1)*i+v+1],l?l[d]:1),P(u,n[d=h*i+v+1],l?l[d]:1),P(u,n[d=(h+1)*i+v+1],l?l[d]:1),_(u,n[d=(h-2)*i+v-3],l?l[d]:1),_(u,n[d=(h-1)*i+v-3],l?l[d]:1),_(u,n[d=h*i+v-3],l?l[d]:1),_(u,n[d=(h+1)*i+v-3],l?l[d]:1),a[h*i+v]=Z(u)}a[h*i+v+1]=a[h*i+v]}for(var x=0;x<i;x++)a[x]=a[i+x]=a[2*i+x],a[(r-1)*i+x]=a[(r-2)*i+x];return e.updateStatistics(),e}function Z(t){if(0===t.size)return 0;for(var e=0,i=-1,r=0,n=t.keys(),a=n.next();!a.done;)(r=t.get(a.value))>e&&(i=a.value,e=r),a=n.next();return i}function _(t,e,i){if(0!==i){var r=t.get(e);1===r?t.delete(e):t.set(e,r-1)}}function P(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function S(t,e,i){var r=e.x,n=e.y,a=i.width,l=i.height;if(0===r&&0===n&&l===t.height&&a===t.width)return t;var u=t.width,f=t.height,p=Math.max(0,n),c=Math.max(0,r),v=Math.min(r+a,u),d=Math.min(n+l,f);if(v<0||d<0||!o(t))return null;r=Math.max(0,-r),n=Math.max(0,-n);for(var x=t.pixels,g=a*l,m=x.length,y=[],w=0;w<m;w++){for(var k=x[w],A=h.Z.createEmptyBand(t.pixelType,g),C=p;C<d;C++)for(var b=C*u,M=(C+n-p)*a+r,T=c;T<v;T++)A[M++]=k[b+T];y.push(A)}for(var U=new Uint8Array(g),B=(0,s.Wg)(t.mask),Z=p;Z<d;Z++)for(var _=Z*u,P=(Z+n-p)*a+r,S=c;S<v;S++)U[P++]=B?B[_+S]:1;var F=new h.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:y,mask:U});return F.updateStatistics(),F}function F(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!o(t))return null;for(var i=t.pixels,r=t.width,n=t.height,a=t.mask,l=t.pixelType,u=[],f=Math.round(r/2),p=Math.round(n/2),c=n-1,v=r-1,d=0;d<i.length;d++){for(var x=i[d],g=h.Z.createEmptyBand(l,f*p),m=0,y=0;y<n;y+=2)for(var w=0;w<r;w+=2){var k=x[y*r+w];if(e){var A=w===v?k:x[y*r+w+1],C=y===c?k:x[y*r+w+r],b=w===v?C:y===c?A:x[y*r+w+r+1];g[m++]=(k+A+C+b)/4}else g[m++]=k}u.push(g)}var M=null;if((0,s.pC)(a)){M=new Uint8Array(f*p);for(var T=0,U=0;U<n;U+=2)for(var B=0;B<r;B+=2){var Z=a[U*r+B];if(e){var _=B===v?Z:a[U*r+B+1],P=U===c?Z:a[U*r+B+r],S=B===v?P:U===c?_:a[U*r+B+r+1];M[T++]=Z*_*P*S?1:0}else M[T++]=Z}}return new h.Z({width:f,height:p,pixelType:l,pixels:u,mask:M})}function R(t,e,i){if(!o(t))return null;for(var r=e.width,n=e.height,a=t.width,l=t.height,s=new Map,h={x:0,y:0},u=null==i?1:1+i,f=t,p=0;p<u;p++){for(var c=Math.ceil(a/r),v=Math.ceil(l/n),d=0;d<v;d++){h.y=d*n;for(var x=0;x<c;x++){h.x=x*r;var g=S(f,h,e);s.set("".concat(p,"/").concat(d,"/").concat(x),g)}}p<u-1&&(f=F(f)),a=Math.round(a/2),l=Math.round(l/2)}return s}function W(t,e,i,r){for(var n,a,l,s,h,o,u,f,p,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,v=t.width,d=t.height,x=e.width,g=e.height,m=r.cols,y=r.rows,w=Math.ceil(x/m-.1/m),k=Math.ceil(g/y-.1/y),A=w*m,C=A*k*y,b=new Float32Array(C),M=new Float32Array(C),T=new Uint32Array(C),U=new Uint32Array(C),B=0,Z=0;Z<k;Z++)for(var _=0;_<w;_++){a=i[n=12*(Z*w+_)],l=i[n+1],s=i[n+2],h=i[n+3],o=i[n+4],u=i[n+5];for(var P=0;P<y;P++){B=(Z*y+P)*A+_*m,p=(P+.5)/y;for(var S=0;S<P;S++)f=(S+.5)/m,b[B+S]=(a*f+l*p+s)*v-c,M[B+S]=(h*f+o*p+u)*d-c,T[B+S]=Math.round(b[B+S]),U[B+S]=Math.round(M[B+S])}a=i[n+=6],l=i[n+1],s=i[n+2],h=i[n+3],o=i[n+4],u=i[n+5];for(var F=0;F<y;F++){B=(Z*y+F)*A+_*m,p=(F+.5)/y;for(var R=F;R<m;R++)f=(R+.5)/m,b[B+R]=(a*f+l*p+s)*v-c,M[B+R]=(h*f+o*p+u)*d-c,T[B+R]=Math.round(b[B+R]),U[B+R]=Math.round(M[B+R])}}return{offsets_x:b,offsets_y:M,offsets_xi:T,offsets_yi:U,gridWidth:A}}function G(t,e){for(var i=e.coefficients,r=e.spacing,n=W(t,t,i,{rows:r[0],cols:r[1]},.5),a=n.offsets_x,l=n.offsets_y,s=n.gridWidth,h=t.width,o=t.height,u=new Float32Array(h*o),f=180/Math.PI,p=0;p<o;p++)for(var c=0;c<h;c++){var v=p*s+c,d=0===p?v:v-s,x=p===o-1?v:v+s,g=a[d]-a[x],m=l[x]-l[d];if(isNaN(g)||isNaN(m))u[p*h+c]=90;else{var y=Math.atan2(m,g)*f;y=(360+y)%360,u[p*h+c]=y}}return u}function I(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!o(t))return null;"majority"===n&&(t=B(t));for(var a=t,l=a.pixels,u=a.mask,f=a.pixelType,p=t.width,c=t.height,v=h.Z.getPixelArrayConstructor(f),d=l.length,x=e.width,g=e.height,m=!1,y=0;y<i.length;y+=3)-1===i[y]&&-1===i[y+1]&&-1===i[y+2]&&(m=!0);for(var w,k,A=W({width:p,height:c},e,i,r,"majority"===n?0:.5),C=A.offsets_x,b=A.offsets_y,M=A.offsets_xi,T=A.offsets_yi,U=A.gridWidth,Z=function(t,e,i){for(var r=t instanceof Float32Array||t instanceof Float64Array?0:.5,n=0;n<g;n++){w=n*U;for(var a=0;a<x;a++){if(C[w]<0||b[w]<0)t[n*x+a]=0;else if(i)t[n*x+a]=e[M[w]+T[w]*p];else{var l=Math.floor(C[w]),s=Math.floor(b[w]),h=Math.ceil(C[w]),o=Math.ceil(b[w]),f=C[w]-l,c=b[w]-s;if(!u||u[l+s*p]&&u[l+s*p]&&u[l+o*p]&&u[h+o*p]){var v=(1-f)*e[l+s*p]+f*e[h+s*p],d=(1-f)*e[l+o*p]+f*e[h+o*p];t[n*x+a]=(1-c)*v+c*d+r}else t[n*x+a]=e[M[w]+T[w]*p]}w++}}},_=[],P=0;P<d;P++)Z(k=new v(x*g),l[P],"nearest"===n||"majority"===n),_.push(k);var S=new h.Z({width:x,height:g,pixelType:f,pixels:_});if((0,s.pC)(u))S.mask=new Uint8Array(x*g),Z(S.mask,u,!0);else if(m){S.mask=new Uint8Array(x*g);for(var F=0;F<x*g;F++)S.mask[F]=C[F]<0||b[F]<0?0:1}return S.updateStatistics(),S}(a=r||(r={}))[a.matchAny=0]="matchAny",a[a.matchAll=1]="matchAll",function(t){t[t.bestMatch=0]="bestMatch",t[t.fail=1]="fail"}(n||(n={}))}}]);
//# sourceMappingURL=7314.a7693dea.chunk.js.map