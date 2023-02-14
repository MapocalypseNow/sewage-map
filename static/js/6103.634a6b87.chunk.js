/*! For license information please see 6103.634a6b87.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksewage_map=self.webpackChunksewage_map||[]).push([[6103],{6103:function(t,e,i){i.r(e),i.d(e,{CalciteNotice:function(){return C},defineCustomElement:function(){return E}});var n,a=i(74165),o=i(15861),c=i(15671),l=i(43144),r=i(97326),s=i(60136),u=i(29388),m=i(51554);!function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(n||(n={}));var d=i(92358),h=i(19432),f=i(57601),p={close:"Close"},v="title",g="message",b="link",k="actions-end",y="actions-end",w="notice-close",x="container",z="notice-content",Z="notice-icon",_=(0,m.GH)(function(t){(0,s.Z)(i,t);var e=(0,u.Z)(i);function i(){var t;return(0,c.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteNoticeClose=(0,m.yM)((0,r.Z)(t),"calciteNoticeClose",6),t.calciteNoticeOpen=(0,m.yM)((0,r.Z)(t),"calciteNoticeOpen",6),t.active=!1,t.open=!1,t.color="blue",t.dismissible=!1,t.closable=!1,t.intlClose=p.close,t.scale="m",t.width="auto",t.close=function(){t.open=!1,t.calciteNoticeClose.emit()},t}return(0,l.Z)(i,[{key:"activeHandler",value:function(t){this.open=t}},{key:"openHandler",value:function(t){this.active=t}},{key:"handleDismissible",value:function(t){this.closable=t}},{key:"handleClosable",value:function(t){this.dismissible=t}},{key:"updateRequestedIcon",value:function(){this.requestedIcon=(0,d.s)(n,this.icon,this.color)}},{key:"connectedCallback",value:function(){(0,h.c)(this);var t=this.active||this.open;t&&(this.activeHandler(t),this.openHandler(t)),this.dismissible&&this.handleDismissible(this.dismissible),this.closable&&this.handleClosable(this.closable)}},{key:"disconnectedCallback",value:function(){(0,h.d)(this)}},{key:"componentWillLoad",value:function(){this.requestedIcon=(0,d.s)(n,this.icon,this.color)}},{key:"render",value:function(){var t=this,e=this.el,i=(0,m.h)("button",{"aria-label":this.intlClose,class:w,onClick:this.close,ref:function(e){return t.closeButton=e}},(0,m.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),n=(0,d.b)(e,k);return(0,m.h)("div",{class:x},this.requestedIcon?(0,m.h)("div",{class:Z},(0,m.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,m.h)("div",{class:z},(0,m.h)("slot",{name:v}),(0,m.h)("slot",{name:g}),(0,m.h)("slot",{name:b})),n?(0,m.h)("div",{class:y},(0,m.h)("slot",{name:k})):null,this.closable?i:null)}},{key:"setFocus",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.querySelector("calcite-link"),this.closeButton||e){t.next=3;break}return t.abrupt("return");case 3:e?e.setFocus():this.closeButton&&this.closeButton.focus();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{active:["activeHandler"],open:["openHandler"],dismissible:["handleDismissible"],closable:["handleClosable"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}}]),i}(m.mv),[1,"calcite-notice",{active:[1540],open:[1540],color:[513],dismissible:[516],closable:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]);function D(){if("undefined"!==typeof customElements){["calcite-notice","calcite-icon"].forEach((function(t){switch(t){case"calcite-notice":customElements.get(t)||customElements.define(t,_);break;case"calcite-icon":customElements.get(t)||(0,f.d)()}}))}}D();var C=_,E=D},19432:function(t,e,i){i.d(e,{c:function(){return u},d:function(){return m}});var n,a=i(29439),o=i(37762),c=i(51554),l=i(72021),r=new Set,s={childList:!0};function u(t){n||(n=(0,l.c)("mutation",d)),n.observe(t.el,s)}function m(t){r.delete(t.el),d(n.takeRecords()),n.disconnect();var e,i=(0,o.Z)(r.entries());try{for(i.s();!(e=i.n()).done;){var c=(0,a.Z)(e.value,1)[0];n.observe(c,s)}}catch(l){i.e(l)}finally{i.f()}}function d(t){t.forEach((function(t){var e=t.target;(0,c.xE)(e)}))}},57601:function(t,e,i){i.d(e,{I:function(){return y},d:function(){return w}});var n=i(4942),a=i(74165),o=i(15671),c=i(43144),l=i(60136),r=i(29388),s=i(15861),u=i(51554),m=i(92358),d=i(72021),h="flip-rtl",f={},p={},v={s:16,m:24,l:32};function g(t){return b.apply(this,arguments)}function b(){return(b=(0,s.Z)((0,a.Z)().mark((function t(e){var i,n,o,c,l,r,s,m;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.icon,n=e.scale,o=v[n],c=k(i),l="F"===c.charAt(c.length-1),r=l?c.substring(0,c.length-1):c,s="".concat(r).concat(o).concat(l?"F":""),!f[s]){t.next=8;break}return t.abrupt("return",f[s]);case 8:return p[s]||(p[s]=fetch((0,u.K3)("./assets/icon/".concat(s,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(s,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,p[s];case 11:return m=t.sent,f[s]=m,t.abrupt("return",m);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){var e=!isNaN(Number(t.charAt(0))),i=t.split("-");return 1===i.length?e?"i".concat(t):t:i.map((function(t,i){return 0===i?e?"i".concat(t.toUpperCase()):t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var y=(0,u.GH)(function(t){(0,l.Z)(i,t);var e=(0,r.Z)(i);function i(){var t;return(0,o.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.visible=!1,t}return(0,c.Z)(i,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this.el,i=this.flipRtl,a=this.pathData,o=this.scale,c=this.textLabel,l=(0,m.c)(e),r=v[o],s=!!c,d=[].concat(a||"");return(0,u.h)(u.AA,{"aria-hidden":(0,m.t)(!s),"aria-label":s?c:null,role:s?"img":null},(0,u.h)("svg",{class:(t={},(0,n.Z)(t,h,"rtl"===l&&i),(0,n.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(r," ").concat(r),width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((function(t){return"string"===typeof t?(0,u.h)("path",{d:t}):(0,u.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var e,i,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.icon,i=this.scale,n=this.visible,u.Z5.isBrowser&&e&&n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,g({icon:e,scale:i});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var e=this;this.intersectionObserver=(0,d.c)("intersection",(function(i){i.forEach((function(i){i.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}}]),i}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function w(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,y)}))}}w()},72021:function(t,e,i){i.d(e,{c:function(){return u}});var n=i(15671),a=i(43144),o=i(11752),c=i(61120),l=i(60136),r=i(29388),s=i(51554);function u(t,e,i){if(s.Z5.isBrowser){var u=function(t){var e=function(t){(0,l.Z)(i,t);var e=(0,r.Z)(i);function i(t){var a;return(0,n.Z)(this,i),(a=e.call(this,t)).observedEntry=[],a.callback=t,a}return(0,a.Z)(i,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),(0,o.Z)((0,c.Z)(i.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,n=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback((0,o.Z)((0,c.Z)(i.prototype),"takeRecords",this).call(this),this),this.disconnect(),n.forEach((function(t){return e.observe(t.target,t.options)}))}}]),i}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new u(e,i)}}}}]);
//# sourceMappingURL=6103.634a6b87.chunk.js.map