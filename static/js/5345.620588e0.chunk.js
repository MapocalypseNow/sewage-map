"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[5345],{64145:function(r,e,t){t.d(e,{BH:function(){return x},K:function(){return S},KC:function(){return g},NL:function(){return f},QI:function(){return w},Tg:function(){return d},Yx:function(){return c},nb:function(){return _},wF:function(){return V},xQ:function(){return m}});var n=t(29439),a=t(43404),i=t(92026),o=t(96212),l=t(17314),u=new Map;u.set("meter-per-second",1),u.set("kilometer-per-hour",.277778),u.set("knots",.514444),u.set("feet-per-second",.3048),u.set("mile-per-hour",.44704);var h=180/Math.PI,s=5,f=new a.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function c(r,e){return u.get(r)/u.get(e)||1}function v(r){return(450-r)%360}function d(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geographic",t=(0,n.Z)(r,2),a=t[0],i=t[1],o=Math.sqrt(a*a+i*i),l=Math.atan2(i,a)*h;return l=(360+l)%360,"geographic"===e&&(l=v(l)),[o,l]}function p(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geographic",t=r[1];"geographic"===e&&(t=v(t)),t%=360;var n=r[0];return[n*Math.cos(t/h),n*Math.sin(t/h)]}function m(r,e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"geographic";if(!(0,l.nk)(r)||(0,i.Wi)(t))return r;for(var a="vector-magdir"===e?r.clone():(0,i.Wg)(g(r,e)),o=a.pixels[1],u=0;u<o.length;u++)o[u]="geographic"===n?(o[u]+t[u]+270)%360:(o[u]+360-t[u])%360;return"vector-magdir"===e?a:g(a,"vector-magdir")}function g(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"geographic",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!(0,l.nk)(r))return r;for(var i=r.pixels,u=r.width,h=r.height,s=u*h,f=i[0],c=i[1],v=r.pixelType.startsWith("f")?r.pixelType:"f32",m=o.Z.createEmptyBand(v,s),g=o.Z.createEmptyBand(v,s),w=0,x=0;x<h;x++)for(var y=0;y<u;y++){var M,Z,k,b;"vector-uv"===e?(M=d([f[w],c[w]],t),Z=(0,n.Z)(M,2),m[w]=Z[0],g[w]=Z[1],m[w]*=a):(k=p([f[w],c[w]],t),b=(0,n.Z)(k,2),m[w]=b[0],g[w]=b[1],m[w]*=a,g[w]*=a),w++}var I=new o.Z({pixelType:v,width:r.width,height:r.height,mask:r.mask,validPixelCount:r.validPixelCount,maskIsAlpha:r.maskIsAlpha,pixels:[m,g]});return I.updateStatistics(),I}function w(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(1===t||!(0,l.nk)(r))return r;for(var n=r.clone(),a=n.pixels,i=n.width,o=n.height,u=a[0],h=a[1],s=0,f=0;f<o;f++)for(var c=0;c<i;c++)"vector-uv"===e?(u[s]*=t,h[s]*=t):u[s]*=t,s++;return n.updateStatistics(),n}function x(r,e,t,n,a){if((0,i.Wi)(a)||!a.spatialReference.equals(r.spatialReference))return{extent:r,width:Math.round(e/n),height:Math.round(t/n),resolution:r.width/e};var o=a.xmin,l=a.ymax,u=(r.xmax-r.xmin)/e*n,h=(r.ymax-r.ymin)/t*n,s=(u+h)/2;return r.xmin=o+Math.floor((r.xmin-o)/u)*u,r.xmax=o+Math.ceil((r.xmax-o)/u)*u,r.ymin=l+Math.floor((r.ymin-l)/h)*h,r.ymax=l+Math.ceil((r.ymax-l)/h)*h,{extent:r,width:Math.round(r.width/u),height:Math.round(r.height/h),resolution:s}}var y=M(0,0,0);function M(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.PI,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];a&&(t=(2*Math.PI-t)%(2*Math.PI));var i=a?-1:1,o=-7*i,l=-2*i,u=-16*i,h=21.75,s=k(0,e+13*i,t,h),f=(0,n.Z)(s,2),c=f[0],v=f[1],d=k(r-5.5,e+o,t,h),p=(0,n.Z)(d,2),m=p[0],g=p[1],w=k(r+5.5,e+o,t,h),x=(0,n.Z)(w,2),y=x[0],M=x[1],Z=k(r-1.5,e+l,t,h),b=(0,n.Z)(Z,2),I=b[0],A=b[1],P=k(r+1.5,e+l,t,h),D=(0,n.Z)(P,2),F=D[0],S=D[1],V=k(r-1.5,e+u,t,h),_=(0,n.Z)(V,2),U=_[0],q=_[1],L=k(r+1.5,e+u,t,h),T=(0,n.Z)(L,2);return[c,v,m,g,I,A,F,S,y,M,U,q,T[0],T[1]]}function Z(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.PI,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&(e=(2*Math.PI-e)%(2*Math.PI));var a=t?-1:1,i=5*a,o=20*a,l=25*a,u=45,h=2*a,f=t?1:-1,c=5*f,v=0+c,d=0-o,p=v+2*f,m=d,g=p-0*f,w=m+h,x=0-c,y=0-l,M=x+0*f,Z=y-h,b=Math.ceil(r/s),I=Math.floor(b/10);b-=8*I;for(var A=[],P=[],D=0;D<b/2;D++,I--){I<=0&&b%2==1&&D===(b-1)/2&&(M=(x=0)+0*f,Z=(y=(y+d)/2)-h);var F=k(x,y,e,u),S=(0,n.Z)(F,2),V=S[0],_=S[1];if(I>0){var U=k(p,y,e,u),q=(0,n.Z)(U,2),L=q[0],T=q[1],O=k(v,d,e,u),C=(0,n.Z)(O,2),N=C[0],W=C[1];A.push(L),A.push(T),A.push(V),A.push(_),A.push(N),A.push(W)}else{var B=k(p,m,e,u),K=(0,n.Z)(B,2),E=K[0],R=K[1],J=k(g,w,e,u),H=(0,n.Z)(J,2),Q=H[0],X=H[1],j=k(M,Z,e,u),z=(0,n.Z)(j,2),G=z[0],Y=z[1];P.push(V),P.push(_),P.push(G),P.push(Y),P.push(Q),P.push(X),P.push(E),P.push(R)}y+=i,d+=i,m+=i,w+=i,Z+=i}var $=k(0+c,0+o,e,u),rr=(0,n.Z)($,2),er=rr[0],tr=rr[1],nr=7*f,ar=k(0+nr,0+o,e,u),ir=(0,n.Z)(ar,2),or=ir[0],lr=ir[1],ur=k(0+c,0-l,e,u),hr=(0,n.Z)(ur,2),sr=hr[0],fr=hr[1],cr=k(0+nr,0-l,e,u),vr=(0,n.Z)(cr,2);return{pennants:A,barbs:P,shaft:[er,tr,or,lr,sr,fr,vr[0],vr[1]]}}function k(r,e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=Math.sqrt(r*r+e*e)/n,i=(2*Math.PI+Math.atan2(e,r))%(2*Math.PI);return[a,(2*Math.PI+i-t)%(2*Math.PI)]}var b=[0,1,3,6,10,16,21,27,33,40,47,55,63],I=[0,.5,1,1.5,2],A=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function P(r,e,t,n){var a,i=c(n||"knots",t);for(a=1;a<e.length;a++)if(a===e.length-1){if(r<e[a]*i)break}else if(r<=e[a]*i)break;return Math.min(a-1,e.length-2)}function D(r,e,t,n,a){var i=0;switch(e){case"beaufort_kn":i=P(r,b,"knots",t);break;case"beaufort_km":i=P(r,b,"kilometer-per-hour",t);break;case"beaufort_ft":i=P(r,b,"feet-per-second",t);break;case"beaufort_m":i=P(r,b,"meter-per-second",t);break;case"classified_arrow":i=P(r,null!==a&&void 0!==a?a:[],n,t);break;case"ocean_current_m":i=P(r,I,"meter-per-second",t);break;case"ocean_current_kn":i=P(r,A,"knots",t)}return i}var F=[];function S(r,e){for(var t=0,n=0,a=r.width,i=r.height,o=r.mask,l=r.pixels[0],u=[],h=[],v=c(f.fromJSON(e.inputUnit),"knots"),d="wind_speed"===e.style?s:Number.MAX_VALUE,p=0;p<i;p++)for(var m=0;m<a;m++){var g=l[p*a+m]*v;if((!o||o[p*a+m])&&g<d){for(var w=0;w<4;w++)u[t++]=(m+.5)/a,u[t++]=(p+.5)/i,u[t++]=w<2?-.5:.5,u[t++]=w%2==0?-.5:.5,u[t++]=0,u[t++]=g;var x=4*(t/24-1);h[n++]=x,h[n++]=x+1,h[n++]=x+2,h[n++]=x+1,h[n++]=x+2,h[n++]=x+3}}return{vertexData:new Float32Array(u),indexData:new Uint32Array(h)}}function V(r,e){return"simple_scalar"===e.style?S(r,e):"wind_speed"===e.style?function(r,e){if(0===F.length)for(var t=0;t<30;t++)F.push(Z(5*t,0,!e.invertDirection));for(var n=c(f.fromJSON(e.inputUnit),"knots"),a=r.width,i=r.height,o=r.mask,l=r.pixels[0],u=r.pixels[1],h=[],v=[],d=0,p=0,m=0;m<i;m++)for(var g=0;g<a;g++){var w=m*a+g,x=l[w]*n;if((!o||o[m*a+g])&&x>=s){var y=(u[w]+360)%360/180*Math.PI,M=F[Math.min(Math.floor(x/5),29)],k=M.pennants,b=M.barbs,I=M.shaft;if(k.length+b.length===0)continue;for(var A=h.length/6,P=(g+.5)/a,D=(m+.5)/i,S=0;S<k.length;S+=2)h[d++]=P,h[d++]=D,h[d++]=k[S],h[d++]=k[S+1]+y,h[d++]=0,h[d++]=x;for(var V=0;V<b.length;V+=2)h[d++]=P,h[d++]=D,h[d++]=b[V],h[d++]=b[V+1]+y,h[d++]=0,h[d++]=x;for(var _=0;_<I.length;_+=2)h[d++]=P,h[d++]=D,h[d++]=I[_],h[d++]=I[_+1]+y,h[d++]=0,h[d++]=x;for(var U=0;U<k.length/6;U++)v[p++]=A,v[p++]=A+1,v[p++]=A+2,A+=3;for(var q=0;q<b.length/8;q++)v[p++]=A,v[p++]=A+1,v[p++]=A+2,v[p++]=A+1,v[p++]=A+2,v[p++]=A+3,A+=4;v[p++]=A+0,v[p++]=A+1,v[p++]=A+2,v[p++]=A+1,v[p++]=A+3,v[p++]=A+2,A+=4}}return{vertexData:new Float32Array(h),indexData:new Uint32Array(v)}}(r,e):function(r,e){for(var t=e.style,n=e.inputUnit,a=e.outputUnit,o=e.breakValues,l=f.fromJSON(n),u=f.fromJSON(a),h=0,s=0,c=r.width,v=r.height,d=r.mask,p=r.pixels[0],m=r.pixels[1],g=(0,i.pC)(d)?d.filter((function(r){return r>0})).length:c*v,w=new Float32Array(42*g),x=new Uint32Array(15*g),Z=e.invertDirection?M(0,0,0,!1):y,k=0;k<v;k++)for(var b=0;b<c;b++){var I=k*c+b;if(!d||d[k*c+b]){for(var A=(m[I]+360)%360/180*Math.PI,P=D(p[I],t,l,u,o),F=0;F<Z.length;F+=2)w[h++]=(b+.5)/c,w[h++]=(k+.5)/v,w[h++]=Z[F],w[h++]=Z[F+1]+A,w[h++]=P,w[h++]=p[I];var S=7*(h/42-1);x[s++]=S,x[s++]=S+1,x[s++]=S+2,x[s++]=S+0,x[s++]=S+4,x[s++]=S+3,x[s++]=S+0,x[s++]=S+2,x[s++]=S+3,x[s++]=S+2,x[s++]=S+5,x[s++]=S+3,x[s++]=S+5,x[s++]=S+6,x[s++]=S+3}}return{vertexData:w,indexData:x}}(r,e)}function _(r,e,t){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,l=r.width,u=r.height,h=r.mask,s=(0,n.Z)(r.pixels,2),f=s[0],c=s[1],v=(0,n.Z)(a,2),m=v[0],g=v[1],w=Math.round((l-m)/t),x=Math.round((u-g)/t),y=w*x,M=new Float32Array(y),Z=new Float32Array(y),k=new Uint8Array(y),b="vector-uv"===e,I=0;I<x;I++)for(var A=0;A<w;A++){for(var P=0,D=I*w+A,F=Math.max(0,I*t+g),S=Math.max(0,A*t+m),V=Math.min(u,F+t),_=Math.min(l,S+t),U=F;U<V;U++)for(var q=S;q<_;q++){var L=U*l+q;if(!h||h[L]){P++;var T=b?[f[L],c[L]]:[f[L],(360+c[L])%360],O=b?T:p(T),C=(0,n.Z)(O,2),N=C[0],W=C[1];M[D]+=N,Z[D]+=W}}if(P>=(V-F)*(_-S)*(1-i)){k[D]=1;var B=d([M[D]/P,Z[D]/P]),K=(0,n.Z)(B,2),E=K[0],R=K[1];M[D]=E,Z[D]=R}else k[D]=0,M[D]=0,Z[D]=0}var J=new o.Z({width:w,height:x,pixels:[M,Z],mask:k});return J.updateStatistics(),J}},55185:function(r,e,t){t.d(e,{GE:function(){return g},KK:function(){return A}});var n=t(74165),a=t(37762),i=t(29439),o=t(15861),l=(t(59486),t(93169)),u=t(32718),h=t(16889),s=t(92026),f=t(66978),c=t(84936),v=t(92975),d=t(53866),p=u.Z.getLogger("esri.views.2d.engine.flow.dataUtils"),m=10;function g(r,e,t,n){return w.apply(this,arguments)}function w(){return w=(0,o.Z)((0,n.Z)().mark((function r(e,t,a,i){var o,u,h,s,c,v,d,g,w;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=performance.now(),u=x(t,a),h=performance.now(),s=M(t,u,a.width,a.height),c=performance.now(),v=Z(s,!0),d=performance.now(),g="Streamlines"===e?k(v,m):b(v),w=performance.now(),(0,l.Z)("esri-2d-profiler")&&(p.info("I.1","_createFlowFieldFromData (ms)",Math.round(h-o)),p.info("I.2","_getStreamlines (ms)",Math.round(c-h)),p.info("I.3","createAnimatedLinesData (ms)",Math.round(d-c)),p.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(w-d)),p.info("I.5","createFlowMesh (ms)",Math.round(w-o)),p.info("I.6","Mesh size (bytes)",g.vertexData.buffer.byteLength+g.indexData.buffer.byteLength)),r.next=4,Promise.resolve();case 4:return(0,f.k_)(i),r.abrupt("return",g);case 6:case"end":return r.stop()}}),r)}))),w.apply(this,arguments)}function x(r,e){var t=function(r,e,t,n){if(0===n)return r;for(var a=Math.round(3*n),i=new Array(2*a+1),o=0,l=-a;l<=a;l++){var u=Math.exp(-l*l/(n*n));i[l+a]=u,o+=u}for(var h=-a;h<=a;h++)i[h+a]/=o;for(var s=new Float32Array(r.length),f=0;f<t;f++)for(var c=0;c<e;c++){for(var v=0,d=0,p=-a;p<=a;p++)if(!(c+p<0||c+p>=e)){var m=i[p+a];v+=m*r[2*(f*e+(c+p))+0],d+=m*r[2*(f*e+(c+p))+1]}s[2*(f*e+c)+0]=v,s[2*(f*e+c)+1]=d}for(var g=new Float32Array(r.length),w=0;w<e;w++)for(var x=0;x<t;x++){for(var y=0,M=0,Z=-a;Z<=a;Z++)if(!(x+Z<0||x+Z>=t)){var k=i[Z+a];y+=k*s[2*((x+Z)*e+w)+0],M+=k*s[2*((x+Z)*e+w)+1]}g[2*(x*e+w)+0]=y,g[2*(x*e+w)+1]=M}return g}(e.data,e.width,e.height,r.smoothing);return r.interpolate?function(r,n){var a=Math.floor(r),i=Math.floor(n);if(a<0||a>=e.width)return[0,0];if(i<0||i>=e.height)return[0,0];var o=r-a,l=n-i,u=a,h=i,s=a<e.width-1?a+1:a,f=i<e.height-1?i+1:i,c=t[2*(h*e.width+u)],v=t[2*(h*e.width+s)],d=t[2*(f*e.width+u)],p=t[2*(f*e.width+s)],m=t[2*(h*e.width+u)+1],g=t[2*(h*e.width+s)+1];return[(c*(1-l)+d*l)*(1-o)+(v*(1-l)+p*l)*o,(m*(1-l)+t[2*(f*e.width+u)+1]*l)*(1-o)+(g*(1-l)+t[2*(f*e.width+s)+1]*l)*o]}:function(r,n){var a=Math.round(r),i=Math.round(n);return a<0||a>=e.width||i<0||i>=e.height?[0,0]:[t[2*(i*e.width+a)+0],t[2*(i*e.width+a)+1]]}}function y(r,e,t,n,a,o,l,u,h){var s=[],f=t,c=n,v=0,d=e(f,c),p=(0,i.Z)(d,2),m=p[0],g=p[1];m*=r.velocityScale,g*=r.velocityScale;var w,x,y=Math.sqrt(m*m+g*g);s.push({x:f,y:c,t:v,speed:y});for(var M=0;M<r.verticesPerLine;M++){var Z=e(f,c),k=(0,i.Z)(Z,2),b=k[0],I=k[1];b*=r.velocityScale,I*=r.velocityScale;var A=Math.sqrt(b*b+I*I);if(A<r.minSpeedThreshold)return s;var P=b/A,D=I/A;if(f+=P*r.segmentLength,c+=D*r.segmentLength,v+=r.segmentLength/A,Math.acos(P*w+D*x)>r.maxTurnAngle)return s;if(r.collisions){var F=Math.round(f*h),S=Math.round(c*h);if(F<0||F>l-1||S<0||S>u-1)return s;var V=o[S*l+F];if(-1!==V&&V!==a)return s;o[S*l+F]=a}s.push({x:f,y:c,t:v,speed:A}),w=P,x=D}return s}function M(r,e,t,n){for(var a=[],i=new c.Z,o=1/Math.max(r.lineCollisionWidth,1),l=Math.round(t*o),u=Math.round(n*o),h=new Int32Array(l*u),s=0;s<h.length;s++)h[s]=-1;for(var f=[],v=0;v<n;v+=r.lineSpacing)for(var d=0;d<t;d+=r.lineSpacing)f.push({x:d,y:v,sort:i.getFloat()});f.sort((function(r,e){return r.sort-e.sort}));for(var p=0,m=f;p<m.length;p++){var g=m[p],w=g.x,x=g.y;if(i.getFloat()<r.density){var M=y(r,e,w,x,a.length,h,l,u,o);if(M.length<2)continue;a.push(M)}}return a}function Z(r,e){var t,n=new c.Z,i=r.reduce((function(r,e){return r+e.length}),0),o=new Float32Array(4*i),l=new Array(r.length),u=0,h=0,s=(0,a.Z)(r);try{for(s.s();!(t=s.n()).done;){var f,v=t.value,d=u,p=(0,a.Z)(v);try{for(p.s();!(f=p.n()).done;){var m=f.value;o[4*u+0]=m.x,o[4*u+1]=m.y,o[4*u+2]=m.t,o[4*u+3]=m.speed,u++}}catch(g){p.e(g)}finally{p.f()}l[h++]={startVertex:d,numberOfVertices:v.length,totalTime:v[v.length-1].t,timeSeed:e?n.getFloat():0}}}catch(g){s.e(g)}finally{s.f()}return{lineVertices:o,lineDescriptors:l}}function k(r,e){var t,n=9,i=r.lineVertices,o=r.lineDescriptors,l=0,u=0,h=(0,a.Z)(o);try{for(h.s();!(t=h.n()).done;){var s=t.value;l+=2*s.numberOfVertices,u+=6*(s.numberOfVertices-1)}}catch(B){h.e(B)}finally{h.f()}var f=new Float32Array(l*n),c=new Uint32Array(u),v=0,d=0;function p(r,e,t,a,i,o,l,u){var h=v*n,s=0;f[h+s++]=r,f[h+s++]=e,f[h+s++]=1,f[h+s++]=t,f[h+s++]=o,f[h+s++]=l,f[h+s++]=a/2,f[h+s++]=i/2,f[h+s++]=u,v++,f[h+s++]=r,f[h+s++]=e,f[h+s++]=-1,f[h+s++]=t,f[h+s++]=o,f[h+s++]=l,f[h+s++]=-a/2,f[h+s++]=-i/2,f[h+s++]=u,v++}var m,g=(0,a.Z)(o);try{for(g.s();!(m=g.n()).done;){for(var w=m.value,x=w.totalTime,y=w.timeSeed,M=null,Z=null,k=null,b=null,I=null,A=null,P=0;P<w.numberOfVertices;P++){var D=i[4*(w.startVertex+P)+0],F=i[4*(w.startVertex+P)+1],S=i[4*(w.startVertex+P)+2],V=i[4*(w.startVertex+P)+3],_=null,U=null,q=null,L=null;if(P>0){_=D-M,U=F-Z;var T=Math.sqrt(_*_+U*U);if(_/=T,U/=T,P>1){var O=_+I,C=U+A,N=Math.sqrt(O*O+C*C);O/=N,C/=N;var W=Math.min(1/(O*_+C*U),e);q=-(C*=W),L=O*=W}else q=-U,L=_;null!==q&&null!==L&&(p(M,Z,k,q,L,x,y,V),c[d++]=v-2,c[d++]=v,c[d++]=v-1,c[d++]=v,c[d++]=v+1,c[d++]=v-1)}M=D,Z=F,k=S,I=_,A=U,b=V}p(M,Z,k,-A,I,x,y,b)}}catch(B){g.e(B)}finally{g.f()}return{vertexData:f,indexData:c}}function b(r){var e,t=16,n=1,i=2,o=r.lineVertices,l=r.lineDescriptors,u=0,h=0,s=(0,a.Z)(l);try{for(s.s();!(e=s.n()).done;){var f=e.value.numberOfVertices-1;u+=4*f*2,h+=6*f*2}}catch(B){s.e(B)}finally{s.f()}var c,v,d,p,m,g,w,x,y,M,Z,k,b,I,A=new Float32Array(u*t),P=new Uint32Array(h),D=0,F=0;function S(){P[F++]=D-8,P[F++]=D-7,P[F++]=D-6,P[F++]=D-7,P[F++]=D-5,P[F++]=D-6,P[F++]=D-4,P[F++]=D-3,P[F++]=D-2,P[F++]=D-3,P[F++]=D-1,P[F++]=D-2}function V(r,e,a,o,l,u,h,s,f,c,v,d,p,m){for(var g=D*t,w=0,x=0,y=[n,i];x<y.length;x++)for(var M=y[x],Z=0,k=[1,2,3,4];Z<k.length;Z++){var b=k[Z];A[g+w++]=r,A[g+w++]=e,A[g+w++]=a,A[g+w++]=o,A[g+w++]=h,A[g+w++]=s,A[g+w++]=f,A[g+w++]=c,A[g+w++]=M,A[g+w++]=b,A[g+w++]=p,A[g+w++]=m,A[g+w++]=l/2,A[g+w++]=u/2,A[g+w++]=v/2,A[g+w++]=d/2,D++}}function _(r,e){var t=y+Z,n=M+k,a=Math.sqrt(t*t+n*n),i=y*(t/=a)+M*(n/=a);t/=i,n/=i;var o=Z+b,l=k+I,u=Math.sqrt(o*o+l*l),h=Z*(o/=u)+k*(l/=u);V(c,v,d,p,-n,t,m,g,w,x,-(l/=h),o/=h,r,e),S()}function U(r,e,t,n,a,i){if(y=Z,M=k,Z=b,k=I,null==y&&null==M&&(y=Z,M=k),null!=m&&null!=g){b=r-m,I=e-g;var o=Math.sqrt(b*b+I*I);b/=o,I/=o}null!=y&&null!=M&&_(a,i),c=m,v=g,d=w,p=x,m=r,g=e,w=t,x=n}function q(r,e){y=Z,M=k,Z=b,k=I,null==y&&null==M&&(y=Z,M=k),null!=y&&null!=M&&_(r,e)}var L,T=(0,a.Z)(l);try{for(T.s();!(L=T.n()).done;){var O=L.value;c=null,v=null,d=null,p=null,m=null,g=null,w=null,x=null,y=null,M=null,Z=null,k=null,b=null,I=null;for(var C=O.totalTime,N=O.timeSeed,W=0;W<O.numberOfVertices;W++)U(o[4*(O.startVertex+W)+0],o[4*(O.startVertex+W)+1],o[4*(O.startVertex+W)+2],o[4*(O.startVertex+W)+3],C,N);q(C,N)}}catch(B){T.e(B)}finally{T.f()}return{vertexData:A,indexData:P}}function I(r,e){var t=e.pixels,n=e.width,a=e.height,i=new Float32Array(n*a*2),o=e.mask||new Uint8Array(n*a*2);if(e.mask||o.fill(255),"vector-uv"===r)for(var l=0;l<n*a;l++)i[2*l+0]=t[0][l],i[2*l+1]=-t[1][l];else if("vector-magdir"===r)for(var u=0;u<n*a;u++){var s=t[0][u],f=(0,h.Vl)(t[1][u]),c=Math.cos(f-Math.PI/2),v=Math.sin(f-Math.PI/2);i[2*u+0]=c*s,i[2*u+1]=v*s}return{data:i,mask:o,width:n,height:a}}function A(r,e,t,n,a,i){return P.apply(this,arguments)}function P(){return P=(0,o.Z)((0,n.Z)().mark((function r(e,t,o,u,h,s){var f,c,m,g,w,x,y,M,Z,k,b,I,A,P,F,S,V,_,U,q,L,T,O;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f=performance.now(),c=(0,v.C5)(t.spatialReference)){r.next=6;break}return r.next=4,D(e,t,o,u,h,s);case 4:return m=r.sent,r.abrupt("return",((0,l.Z)("esri-2d-profiler")&&p.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-f)),(0,l.Z)("esri-2d-profiler")&&p.info("I.9","Number of parts",1),m));case 6:for(g=(0,i.Z)(c.valid,2),w=g[0],x=g[1],y=x-w,M=Math.ceil(t.width/y),Z=t.width/M,k=Math.round(o/M),b=t.xmin,I=[],A=performance.now(),P=0;P<M;P++)F=new d.Z({xmin:b,xmax:b+Z,ymin:t.ymin,ymax:t.ymax,spatialReference:t.spatialReference}),I.push(D(e,F,k,u,h,s)),b+=Z;return r.next=12,Promise.all(I);case 12:S=r.sent,(0,l.Z)("esri-2d-profiler")&&p.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-A)),(0,l.Z)("esri-2d-profiler")&&p.info("I.9","Number of parts",S.length),V={data:new Float32Array(o*u*2),mask:new Uint8Array(o*u),width:o,height:u},_=0,U=(0,a.Z)(S);try{for(U.s();!(q=U.n()).done;){for(L=q.value,T=0;T<L.height;T++)for(O=0;O<L.width;O++)_+O>=o||(V.data[2*(T*o+_+O)+0]=L.data[2*(T*L.width+O)+0],V.data[2*(T*o+_+O)+1]=L.data[2*(T*L.width+O)+1],V.mask[T*o+_+O]=L.mask[T*L.width+O]);_+=L.width}}catch(n){U.e(n)}finally{U.f()}return r.abrupt("return",((0,l.Z)("esri-2d-profiler")&&p.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-f)),V));case 19:case"end":return r.stop()}}),r)}))),P.apply(this,arguments)}function D(r,e,t,n,a,i){return F.apply(this,arguments)}function F(){return F=(0,o.Z)((0,n.Z)().mark((function r(e,t,a,i,o,l){var u,h,f,c,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u={requestProjectedLocalDirections:!0,signal:l},(0,s.pC)(o)&&(u.timeExtent=o),"imagery"!==e.type){r.next=9;break}return r.next=4,e.load({signal:l});case 4:return h=e.rasterInfo.dataType,r.next=7,e.fetchImage(t,a,i,u);case 7:return f=r.sent,r.abrupt("return",!f||(0,s.Wi)(f.pixelData)||(0,s.Wi)(f.pixelData.pixelBlock)?{data:new Float32Array(a*i*2),mask:new Uint8Array(a*i),width:a,height:i}:I(h,f.pixelData.pixelBlock));case 9:return r.next=11,e.load({signal:l});case 11:return c=e.rasterInfo.dataType,r.next=14,e.fetchPixels(t,a,i,u);case 14:return v=r.sent,r.abrupt("return",!v||(0,s.Wi)(v.pixelBlock)?{data:new Float32Array(a*i*2),mask:new Uint8Array(a*i),width:a,height:i}:I(c,v.pixelBlock));case 16:case"end":return r.stop()}}),r)}))),F.apply(this,arguments)}}}]);
//# sourceMappingURL=5345.620588e0.chunk.js.map