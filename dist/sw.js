var serviceWorkerOption = {
  "assets": [
    "/fonts/82704020820d85eec7bda2750d655475.woff",
    "/fonts/03f51c0ad834430c651f9d3fb5f46bbf.woff",
    "/fonts/4a7b304db79997bfadb4732ca386f220.woff",
    "/fonts/c8728f7644a0300a0405de7f1e083021.ttf",
    "/images/11d526bb99efa2959d4b7c6b662a2223.jpg",
    "/images/eda90887a786eaa8e3708baff28cda59.jpg",
    "/images/f195aac92d23439ad652d1637c594039.jpg",
    "/images/441e5a3e096a248c6622a2e67d1f8db0.jpg",
    "/images/624696d45e0001ee7e78796b5afff020.jpg",
    "/images/d713c90c674688acfa14256dcab09660.jpg",
    "/images/05dbefb4206a117641c23cd78a1da58e.jpg",
    "/images/3863d13677ebabc5224d78b6848e943b.jpg",
    "/images/36d75d2dd979186a3713b3577ba2262c.jpg",
    "/images/20f40df21a485f522d0631c67139f334.jpg",
    "/images/af155984fba3b6b83bdd698958b6464b.jpg",
    "/images/484330fd86d244b06660b2fd467df072.jpg",
    "/images/8afb9c033007456eedc6fcf2780f0375.svg",
    "/images/3d6da29358a9ded290c59868caeaab91.svg",
    "/images/b96a8d5b5c59b6fb6b3f11d27e9928c4.svg",
    "/defaultVendors~main~678f84af.js",
    "/defaultVendors~main~d939e436.js",
    "/main~08d14693.js",
    "/main~4441a6f0.js",
    "/main~5a4d8549.js",
    "/main~a910263d.js",
    "/favicon.ico",
    "/index.html",
    "/manifest.8ed2868ca52bd77fa192fd30c68a302c.json",
    "/icons/icon_1024x1024.d2e9f891cb19b1584cc028a253478655.png",
    "/icons/icon_1024x1024.22b185a67a9b0d16b25b480f276dba6e.png",
    "/icons/icon_512x512.824c26bbea6824d0fce2eb7ae4fc7779.png",
    "/icons/icon_384x384.3ed0dce727da75b740a1a212cb21e9a1.png",
    "/icons/icon_256x256.7e24fa635cc939ff8e904d6988707381.png",
    "/icons/icon_192x192.157248cf1473a4c12a0b4f8e1154d19d.png",
    "/icons/icon_152x152.7f004b400e97fa02ed1c70abb5156ac3.png",
    "/icons/icon_144x144.d0ede713e7852f47c604df822466ea29.png",
    "/icons/icon_128x128.33f0cca1c19eb705624d5977b88416e1.png",
    "/icons/icon_96x96.48977791bcbf85fb09015aae78526ca4.png",
    "/icons/icon_72x72.29403988586a3a427ec80ee0e4fe1b2c.png"
  ]
};
        
        !function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";var n={CACHE_NAME:"Restawuran-V1",DATABASE_NAME:"restawuran-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"favorites"};function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o,u,c,f,s,l,h;return e=t,r=null,o=[{key:"cachingAppShell",value:(h=i(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._openCache();case 2:t.sent.addAll(e);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"deleteOldCache",value:(l=i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter((function(t){return t!==n.CACHE_NAME})).map((function(t){return caches.delete(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})},{key:"revalidateCache",value:(s=i(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.match(e);case 2:if(!(r=t.sent)){t.next=6;break}return this._fetchRequest(e),t.abrupt("return",r);case 6:return t.abrupt("return",this._fetchRequest(e));case 7:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"_openCache",value:(f=i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(n.CACHE_NAME));case 1:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)})},{key:"_fetchRequest",value:(c=i(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((r=t.sent)&&200===r.status){t.next=5;break}return t.abrupt("return",r);case 5:return t.next=7,this._addCache(e);case 7:return t.abrupt("return",r);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"_addCache",value:(u=i(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._openCache();case 2:t.sent.add(e);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})}],r&&a(e.prototype,r),o&&a(e,o),t}();e.a=u},function(t,e,r){"use strict";r.r(e),function(t){r(3);var e=r(0);function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=t.serviceWorkerOption.assets;self.addEventListener("install",(function(t){t.waitUntil(e.a.cachingAppShell([].concat(n(i),["./"])))})),self.addEventListener("activate",(function(t){t.waitUntil(e.a.deleteOldCache())})),self.addEventListener("fetch",(function(t){t.respondWith(e.a.revalidateCache(t.request))}))}.call(this,r(2))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l={};function h(){}function p(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==r&&n.call(m,i)&&(d=m);var g=y.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,r){var o;this._invoke=function(i,a){function u(){return new r((function(o,u){!function o(i,a,u,c){var f=s(t[i],t,a);if("throw"!==f.type){var l=f.arg,h=l.value;return h&&"object"===e(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}(i,a,o,u)}))}return o=o?o.then(u,u):u()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,c(g,"constructor",y),c(y,"constructor",p),p.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}("object"===e(t)?t.exports:{});try{regeneratorRuntime=r}catch(t){"object"===("undefined"==typeof globalThis?"undefined":e(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);