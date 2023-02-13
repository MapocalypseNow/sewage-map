/*! For license information please see 4110.566daef3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[4110],{14110:function(t,e,n){n.r(e),n.d(e,{getClippingRect:function(){return P},getElementRects:function(){return f},getOffsetParent:function(){return S}});var o=n(93433),r=n(1413),i=n(77171);function l(t){return h(t)&&"fixed"!==a(t).position?function(t){var e=t.offsetParent,n=t,o=!1;for(;n&&n!==e;){var r=n.assignedSlot;if(r){var i=r.offsetParent;if("contents"===a(r).display){var l=r.hasAttribute("style"),f=r.style.display;r.style.display=a(n).display,i=r.offsetParent,r.style.display=f,l||r.removeAttribute("style")}n=r,e!==i&&(e=i,o=!0)}else if(p(n)&&n.host&&o)break;n=p(n)&&n.host||n.parentNode}return e}(t):null}function f(t){var e=t.reference,n=t.floating,o=t.strategy;return{reference:R(e,S(n),o),floating:(0,r.Z)((0,r.Z)({},k(n)),{},{x:0,y:0})}}function u(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function c(t){if(null==t)return window;if(!u(t)){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function a(t){return c(t).getComputedStyle(t)}function s(t){return u(t)?"":t?(t.nodeName||"").toLowerCase():""}function d(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function h(t){return t instanceof c(t).HTMLElement}function v(t){return t instanceof c(t).Element}function p(t){return"undefined"!==typeof ShadowRoot&&(t instanceof c(t).ShadowRoot||t instanceof ShadowRoot)}function g(t){var e=a(t),n=e.overflow,o=e.overflowX,r=e.overflowY,i=e.display;return/auto|scroll|overlay|hidden/.test(n+r+o)&&!["inline","contents"].includes(i)}function w(t){return["table","td","th"].includes(s(t))}function m(t){var e=/firefox/i.test(d()),n=a(t);return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((function(t){return n.willChange.includes(t)}))||["paint","layout","strict","content"].some((function(t){var e=n.contain;return null!=e&&e.includes(t)}))}function y(){return!/^((?!chrome|android).)*safari/i.test(d())}function b(t){return["html","body","#document"].includes(s(t))}var x=Math.min,L=Math.max,W=Math.round;function H(t,e,n){var o,r,i,l;void 0===e&&(e=!1),void 0===n&&(n=!1);var f=t.getBoundingClientRect(),u=1,a=1;e&&h(t)&&(u=t.offsetWidth>0&&W(f.width)/t.offsetWidth||1,a=t.offsetHeight>0&&W(f.height)/t.offsetHeight||1);var s=v(t)?c(t):window,d=!y()&&n,p=(f.left+(d&&null!=(o=null==(r=s.visualViewport)?void 0:r.offsetLeft)?o:0))/u,g=(f.top+(d&&null!=(i=null==(l=s.visualViewport)?void 0:l.offsetTop)?i:0))/a,w=f.width/u,m=f.height/a;return{width:w,height:m,top:g,right:p+w,bottom:g+m,left:p,x:p,y:g}}function T(t){return(e=t,(e instanceof c(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function C(t){return v(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function N(t){return H(T(t)).left+C(t).scrollLeft}function R(t,e,n){var o=h(e),r=T(e),i=H(t,o&&function(t){var e=H(t);return W(e.width)!==t.offsetWidth||W(e.height)!==t.offsetHeight}(e),"fixed"===n),l={scrollLeft:0,scrollTop:0},f={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==s(e)||g(r))&&(l=C(e)),h(e)){var u=H(e,!0);f.x=u.x+e.clientLeft,f.y=u.y+e.clientTop}else r&&(f.x=N(r));return{x:i.left+l.scrollLeft-f.x,y:i.top+l.scrollTop-f.y,width:i.width,height:i.height}}function D(t){return"html"===s(t)?t:t.assignedSlot||t.parentNode||(p(t)?t.host:null)||T(t)}function S(t){for(var e=c(t),n=l(t);n&&w(n)&&"static"===a(n).position;)n=l(n);return n&&("html"===s(n)||"body"===s(n)&&"static"===a(n).position&&!m(n))?e:n||function(t){var e=D(t);for(p(e)&&(e=e.host);h(e)&&!b(e);){if(m(e))return e;var n=e.parentNode;e=p(n)?n.host:n}return null}(t)||e}function k(t){if(h(t))return{width:t.offsetWidth,height:t.offsetHeight};var e=H(t);return{width:e.width,height:e.height}}function A(t){var e=D(t);return b(e)?t.ownerDocument.body:h(e)&&g(e)?e:A(e)}function V(t,e){var n;void 0===e&&(e=[]);var o=A(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=c(o),l=r?[i].concat(i.visualViewport||[],g(o)?o:[]):o,f=e.concat(l);return r?f:f.concat(V(l))}function E(t,e,n){return"viewport"===e?(0,i.e)(function(t,e){var n=c(t),o=T(t),r=n.visualViewport,i=o.clientWidth,l=o.clientHeight,f=0,u=0;if(r){i=r.width,l=r.height;var a=y();(a||!a&&"fixed"===e)&&(f=r.offsetLeft,u=r.offsetTop)}return{width:i,height:l,x:f,y:u}}(t,n)):v(e)?function(t,e){var n=H(t,!1,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft;return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):(0,i.e)(function(t){var e,n=T(t),o=C(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=L(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=L(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),f=-o.scrollLeft+N(t),u=-o.scrollTop;return"rtl"===a(r||n).direction&&(f+=L(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:l,x:f,y:u}}(T(t)))}function M(t){var e=V(t),n=function(t,e){for(var n=t;n&&!b(n)&&!e.includes(n)&&(!v(n)||!["absolute","fixed"].includes(a(n).position));){var o=D(n);n=p(o)?o.host:o}return n}(t,e),o=null;if(n&&h(n)){var r=S(n);g(n)?o=n:h(r)&&(o=r)}return v(o)?e.filter((function(t){return o&&v(t)&&function(t,e){var n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&p(n)){var o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}(t,o)&&"body"!==s(t)})):[]}function P(t){var e=t.element,n=t.boundary,r=t.rootBoundary,i=t.strategy,l="clippingAncestors"===n?M(e):[].concat(n),f=[].concat((0,o.Z)(l),[r]),u=f[0],c=f.reduce((function(t,n){var o=E(e,n,i);return t.top=L(o.top,t.top),t.right=x(o.right,t.right),t.bottom=x(o.bottom,t.bottom),t.left=L(o.left,t.left),t}),E(e,u,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}}}]);
//# sourceMappingURL=4110.566daef3.chunk.js.map