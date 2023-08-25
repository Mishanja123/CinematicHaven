/*! For license information please see 253.dce713a4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[253,359],{8796:function(t,n,e){e.d(n,{h:function(){return f}});var r,i,o=e(168),a=e(5867),c=a.ZP.svg(r||(r=(0,o.Z)(["\n"]))),s=e(184),u=function(){return(0,s.jsxs)(c,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,s.jsx)("title",{children:"back"}),(0,s.jsx)("path",{d:"M15.343 16l5.657 5.657-2.828 2.828-8.486-8.485 8.485-8.485 2.829 2.828-5.657 5.657z"})]})},h=e(1087),l=(0,a.ZP)(h.rU)(i||(i=(0,o.Z)(["\n    display: flex;\n    width:110px;\n    font-size: 15px;\n    justify-content: flex-end;\n    flex-direction: row-reverse;\n    align-items: center;\n    margin-bottom: 15px;  \n    color: rgba(0, 0, 0, 0.5);\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: color 0.4s ease ;\n\n    svg {\n        width: 25px;\n        height: 25px;\n        fill:rgba(0, 0, 0, 0.5);\n        transition: fill 0.4s ease;\n    }\n    &:hover {\n        color: #fff;\n        svg {\n            fill: #fff;\n        }\n    }\n"]))),f=function(t){var n=t.to,e=t.children,r=t.title;return(0,s.jsxs)(l,{to:n,children:[r,(0,s.jsx)(u,{}),e]})}},4359:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var r,i,o,a,c,s=e(5861),u=e(9439),h=e(2791),l=e(7689),f=e(4872),p=e(168),d=e(5867),v=d.ZP.h3(r||(r=(0,p.Z)(["\n    margin: 0;\n\n    @media screen and (min-width: 768px) {\n        font-size:  15px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 18px;\n    }\n"]))),m=d.ZP.ul(i||(i=(0,p.Z)(["\n    display: flex;\n    gap: 12px;\n    max-width: 300px;\n    overflow: auto;\n    \n    @media screen and (min-width: 768px) {\n        max-width: 400px;\n    }\n    \n    @media screen and (min-width: 1200px) {\n        max-width: 740px;\n    }\n"]))),x=d.ZP.li(o||(o=(0,p.Z)(["\n\n"]))),y=d.ZP.p(a||(a=(0,p.Z)(["\n        font-size:  9px;\n\n    @media screen and (min-width: 768px) {\n        font-size:  12px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 14px;\n    }\n"]))),g=d.ZP.img(c||(c=(0,p.Z)(["\n    border-radius: 10px;\n    margin-bottom: 5px;\n    width: 80px;\n\n    @media screen and (min-width: 768px) {\n        border-radius: 20px;\n        width: 90px;\n\n        heigt: 225px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        width: 155px;\n        height: 232px;\n    }\n"]))),w=e(184);function b(){b=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(k){s=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var o=n&&n.prototype instanceof f?n:f,a=Object.create(o.prototype),c=new _(i||[]);return r(a,"_invoke",{value:j(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function p(){}function d(){}var v={};s(v,o,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(P([])));x&&x!==n&&e.call(x,o)&&(v=x);var y=d.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function i(r,o,a,c){var s=h(t[r],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(s.arg)}var o;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function j(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return O()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=h(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function L(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new w(u(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;Z(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:P(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var j=function(){var t=(0,h.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],i=(0,l.UO)().movieId;return(0,h.useEffect)((function(){var t=function(){var t=(0,s.Z)(b().mark((function t(){var n,e;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.M1)(i);case 3:n=t.sent,e=n.cast,r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[i]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v,{children:"Cast:"}),(0,w.jsx)(m,{children:e.map((function(t){var n=t.profile_path,e=t.name,r=t.id;return(0,w.jsxs)(x,{children:[n?(0,w.jsx)(g,{src:"https://image.tmdb.org/t/p/w300".concat(n),alt:"cast"}):(0,w.jsx)(g,{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:"profile"}),(0,w.jsx)(y,{children:e})]},r)}))})]})}},2253:function(t,n,e){e.r(n),e.d(n,{default:function(){return ct}});var r,i,o,a,c,s,u,h,l,f,p=e(5861),d=e(9439),v=e(2791),m=e(7689),x=e(4872),y=e(1087),g=e(168),w=e(5867),b=w.ZP.div(r||(r=(0,g.Z)(["\n    margin-bottom: 50px;\n"]))),j=w.ZP.h3(i||(i=(0,g.Z)(["\n\n    @media screen and (min-width: 768px) {\n        font-size: 19px; \n    }\n    \n    @media screen and (min-width: 1200px) {\n        font-size: 24px; \n    }\n    \n"]))),L=w.ZP.ul(o||(o=(0,g.Z)(["\n    display: flex;\n    gap: 12px;\n"]))),E=w.ZP.li(a||(a=(0,g.Z)(["\n    max-width: 150px;\n    a {\n        color: #fff;\n        @media screen and (min-width: 768px) {\n            font-size: 13px; \n        }\n        \n        @media screen and (min-width: 1200px) {\n            font-size: 15px; \n        }\n    }\n\n"]))),Z=e(184),_=function(){return(0,Z.jsxs)(b,{children:[(0,Z.jsx)(j,{children:"Aditional information:"}),(0,Z.jsx)(L,{children:(0,Z.jsx)(E,{children:(0,Z.jsx)(y.rU,{to:"reviews",children:"Reviews"})})}),(0,Z.jsx)(v.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(m.j3,{})})]})},P=w.ZP.div(c||(c=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),O=w.ZP.h3(s||(s=(0,g.Z)(["\n\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\n        font-size: 16px;\n    }\n    \n    @media screen and (min-width: 1200px) {\n        font-size: 20px;\n\n    }\n    \n"]))),k=w.ZP.ul(u||(u=(0,g.Z)(["\n    display: flex;\n    gap: 14px;\n    max-width: 286px;\n    overflow: auto;\n\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\n        max-width: 736px;\n\n    }\n    \n    @media screen and (min-width: 1200px) {\n        max-width: 1160px;\n    }\n"]))),z=w.ZP.li(h||(h=(0,g.Z)(["\n\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\n\n    }\n    \n    @media screen and (min-width: 1200px) {\n    }\n\n    a {\n        text-decoration: none;\n        color: #fff;\n\n    }\n\n"]))),S=w.ZP.p(l||(l=(0,g.Z)(["  \n    font-weight: 500;\n    font-size: 10px;\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\n        font-size: 11px;\n    }\n    \n    @media screen and (min-width: 1200px) {\n        font-size: 14px;\n\n    }\n"]))),G=w.ZP.img(f||(f=(0,g.Z)(["\n        margin-bottom: 5px;\n        border-radius: 20px;\n        width: 90px;\n        height: 135px;\n\n\n    @media screen and (min-width: 768px) and (max-width: 1199px) {\n        width: 100px;\n        height: 150px;\n    }\n    \n    @media screen and (min-width: 1200px) {\n        width: 150px;\n        height: 225px;\n        margin-bottom: 5px;\n    }\n"])));function N(){N=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(O){s=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var o=n&&n.prototype instanceof f?n:f,a=Object.create(o.prototype),c=new Z(i||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var l={};function f(){}function p(){}function d(){}var v={};s(v,o,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(_([])));x&&x!==n&&e.call(x,o)&&(v=x);var y=d.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function i(r,o,a,c){var s=h(t[r],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(s.arg)}var o;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=h(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new w(u(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;E(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var F,T,I,A,Y,U,C,B,M,R,H,q=function(t){var n=t.id,e=(t.location,(0,v.useState)([])),r=(0,d.Z)(e,2),i=r[0],o=r[1];return(0,v.useEffect)((function(){var t=function(){var t=(0,p.Z)(N().mark((function t(){var e,r;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.Bn)(n);case 3:e=t.sent,r=e.results,o(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)(P,{children:[(0,Z.jsx)(O,{children:"Similar movies"}),(0,Z.jsx)(k,{children:i.map((function(t){var n=t.poster_path,e=t.title,r=t.id;return(0,Z.jsx)(z,{children:(0,Z.jsxs)(y.rU,{to:"/movies/".concat(r),children:[n?(0,Z.jsx)(G,{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"cast"}):(0,Z.jsx)(G,{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:"profile"}),(0,Z.jsx)(S,{children:e})]})},r)}))})]})},D=e(8796),J=e(4359),K=w.ZP.div(F||(F=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-bottom: 60px;\n    @media screen and (min-width: 768px) {\n        align-items: flex-start;\n        flex-direction: row;\n        margin-bottom: 60px;\n        gap: 35px;\n\n    }\n\n    @media screen and (min-width: 1200px) {\n\n    }\n"]))),Q=w.ZP.div(T||(T=(0,g.Z)(["\n\n\n    @media screen and (min-width: 768px) {\n\n    }\n\n    @media screen and (min-width: 1200px) {\n\n    }\n"]))),V=w.ZP.img(I||(I=(0,g.Z)(["\n    width: 286px;\n\n    border-radius: 30px;\n    @media screen and (min-width: 768px) {\n        width: 260px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        width: 360px;\n    }\n"]))),W=w.ZP.div(A||(A=(0,g.Z)(["\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n\n    width: 286px;\n    @media screen and (min-width: 768px) {\n        width: auto;\n        gap: 15px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        gap: 25px;\n    }\n"]))),X=w.ZP.span(Y||(Y=(0,g.Z)(["\n\n"]))),$=w.ZP.h1(U||(U=(0,g.Z)(["\n    font-size: 20px;\n    margin-bottom: 10px;\n\n    @media screen and (min-width: 768px) {\n        margin-bottom: 20px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 27px;\n    }\n"]))),tt=w.ZP.span(C||(C=(0,g.Z)(["\n        font-size:  13px;\n\n    @media screen and (min-width: 1200px) {\n        font-size: 15px;\n    }\n"]))),nt=w.ZP.ul(B||(B=(0,g.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px;\n    @media screen and (min-width: 768px) {\n        font-size:  13px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 15px;\n    }\n"]))),et=w.ZP.li(M||(M=(0,g.Z)(["\n    \n    border-radius: 24px;\n    background: rgba(130, 130, 130, 0.50);\n    backdrop-filter: blur(4.5px);\n    padding: 5px 10px;\n\n    @media screen and (min-width: 768px) {\n        padding: 10px 15px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        padding: 12px 17px;\n    }\n"]))),rt=w.ZP.p(R||(R=(0,g.Z)(["\n    color: #FAFAFA;\n    text-edge: cap;\n    font-size: 9px;\n    font-weight: 600;\n    line-height: normal;\n\n    @media screen and (min-width: 768px) {\n        font-size:  10px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 12px;\n    }\n"]))),it=w.ZP.p(H||(H=(0,g.Z)(["\n    opacity: 0.7;\n    overflow-x: auto;\n\n    @media screen and (min-width: 768px) {\n        font-size: 13px;\n        max-width: 500px;\n        height: 70px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        font-size: 16px;\n        max-width: 600px;\n        height: 70px;\n    }\n"]))),ot=function(t){var n,e,r=t.poster,i=t.title,o=t.year,a=t.genres,c=t.overview,s=t.id,u=t.location,h=(0,v.useRef)(null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(D.h,{to:h.current,title:"go back"}),(0,Z.jsxs)(K,{children:[(0,Z.jsx)(Q,{children:r?(0,Z.jsx)(V,{src:"https://image.tmdb.org/t/p/original".concat(r),alt:"poster"}):(0,Z.jsx)(V,{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:"profile"})}),(0,Z.jsxs)(W,{children:[(0,Z.jsxs)(X,{children:[(0,Z.jsx)($,{children:i}),(0,Z.jsxs)(tt,{children:["Year: ",o]})]}),(0,Z.jsx)(nt,{children:a.map((function(t){var n=t.name,e=t.id;return(0,Z.jsx)(et,{children:(0,Z.jsx)(rt,{children:n})},e)}))}),(0,Z.jsxs)(it,{children:[(0,Z.jsx)("b",{children:"Overview:"})," ",c]}),(0,Z.jsx)(J.default,{})]})]}),(0,Z.jsx)(_,{}),(0,Z.jsx)(q,{id:s,location:u})]})};function at(){at=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(O){s=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var o=n&&n.prototype instanceof f?n:f,a=Object.create(o.prototype),c=new Z(i||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var l={};function f(){}function p(){}function d(){}var v={};s(v,o,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(_([])));x&&x!==n&&e.call(x,o)&&(v=x);var y=d.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function i(r,o,a,c){var s=h(t[r],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(s.arg)}var o;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return o=o?o.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=h(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new w(u(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;E(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var ct=function(){var t=(0,v.useState)(""),n=(0,d.Z)(t,2),e=n[0],r=n[1],i=(0,v.useState)(""),o=(0,d.Z)(i,2),a=o[0],c=o[1],s=(0,v.useState)(""),u=(0,d.Z)(s,2),h=u[0],l=u[1],f=(0,v.useState)(""),y=(0,d.Z)(f,2),g=y[0],w=y[1],b=(0,v.useState)([]),j=(0,d.Z)(b,2),L=j[0],E=j[1],_=(0,m.TH)(),P=(0,m.UO)().movieId;return(0,v.useEffect)((function(){var t=function(){var t=(0,p.Z)(at().mark((function t(){var n,e;return at().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.TP)(P);case 3:n=t.sent,e=n.release_date.split("-")[0],E(n.genres),r(n.title),c(e),l(n.overview),w(n.poster_path),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[P]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(ot,{poster:g,title:e,year:a,genres:L,overview:h,id:P,location:_})})}}}]);
//# sourceMappingURL=253.dce713a4.chunk.js.map