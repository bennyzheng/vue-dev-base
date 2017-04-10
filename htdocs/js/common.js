/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(3);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._45 = 0;
  this._81 = 0;
  this._65 = null;
  this._54 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._10 = null;
Promise._97 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._81 === 3) {
    self = self._65;
  }
  if (Promise._10) {
    Promise._10(self);
  }
  if (self._81 === 0) {
    if (self._45 === 0) {
      self._45 = 1;
      self._54 = deferred;
      return;
    }
    if (self._45 === 1) {
      self._45 = 2;
      self._54 = [self._54, deferred];
      return;
    }
    self._54.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._81 === 1) {
        resolve(deferred.promise, self._65);
      } else {
        reject(deferred.promise, self._65);
      }
      return;
    }
    var ret = tryCallOne(cb, self._65);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._81 = 3;
      self._65 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._81 = 1;
  self._65 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._81 = 2;
  self._65 = newValue;
  if (Promise._97) {
    Promise._97(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._45 === 1) {
    handle(self, self._54);
    self._54 = null;
  }
  if (self._45 === 2) {
    for (var i = 0; i < self._54.length; i++) {
      handle(self, self._54[i]);
    }
    self._54 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* axios v0.16.0 | (c) 2017 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(4),a=n(5),u=r(a);u.Axios=s,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(22),u.CancelToken=n(23),u.isCancel=n(19),u.all=function(e){return Promise.all(e)},u.spread=n(24),e.exports=u,e.exports.default=u},function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===C.call(e)}function d(e){return"[object File]"===C.call(e)}function l(e){return"[object Blob]"===C.call(e)}function h(e){return"[object Function]"===C.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function b(e,t,n){return g(t,function(t,r){n&&"function"==typeof t?e[r]=E(t,n):e[r]=t}),e}var E=n(3),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:g,merge:x,extend:b,trim:w}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(5),i=n(2),s=n(16),a=n(17),u=n(20),c=n(21);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(7):"undefined"!=typeof process&&(e=n(7)),e}var i=n(2),s=n(6),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(8),i=n(11),s=n(12),a=n(13),u=n(9),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(14);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||a(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(u("Network Error",e)),l=null},l.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),l=null},r.isStandardBrowserEnv()){var v=n(15),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n,o){var i=new Error(e);return r(i,t,n,o)}},function(e,t){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),s="",a=0,u=o;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(18),s=n(19),a=n(5);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(22);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(3);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "navList": "/get_nav_list.php"
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(34);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(36);

var _user2 = _interopRequireDefault(_user);

var _post = __webpack_require__(35);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{ "path": "/", "component": _home2.default }, { "path": "/user", "component": _user2.default }, { "path": "/post/:id", "component": _post2.default }]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = __webpack_require__(15);

var _state2 = _interopRequireDefault(_state);

var _getters = __webpack_require__(11);

var _getters2 = _interopRequireDefault(_getters);

var _mutations = __webpack_require__(14);

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = __webpack_require__(10);

var _actions2 = _interopRequireDefault(_actions);

var _modules = __webpack_require__(13);

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    state: _state2.default,
    getters: _getters2.default,
    mutations: _mutations2.default,
    actions: _actions2.default,
    modules: _modules2.default
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(18);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    common: _store2.default
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _mockjs = __webpack_require__(24);

var _mockjs2 = _interopRequireDefault(_mockjs);

var _cgi = __webpack_require__(8);

var _cgi2 = _interopRequireDefault(_cgi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, "common.navList", function commonNavList(context) {
    // 造点假数据
    _mockjs2.default.mock(_cgi2.default.navList, {
        "code": 0,
        "msg": "success",
        "data": [{ "path": "/", "title": "首页" }, { "path": "/user", "title": "用户信息" }, { "path": "/post/1234", "title": "文章详情" }]
    });

    return _axios2.default.get(_cgi2.default.navList).then(function (res) {
        if (res.code == 0) {
            context.commit("common.navList", res.data);
            return res.data;
        } else {
            return Promise.reject("请求数据失败!");
        }
    }, function (error) {
        return Promise.reject(error.msg);
    });
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = __webpack_require__(21);

var _state2 = _interopRequireDefault(_state);

var _getters = __webpack_require__(17);

var _getters2 = _interopRequireDefault(_getters);

var _mutations = __webpack_require__(20);

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = __webpack_require__(16);

var _actions2 = _interopRequireDefault(_actions);

var _modules = __webpack_require__(19);

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    state: _state2.default,
    getters: _getters2.default,
    mutations: _mutations2.default,
    actions: _actions2.default,
    modules: _modules2.default
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, "common.navList", function commonNavList(state, list) {
    state.navList = list;
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    navList: null // 通用导航
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 默认请示方式若是用json对象会使用json格式发送，改成form-urlencoded
 */
_axios2.default.interceptors.request.use(function (request) {
    if (_typeof(request.data) != "object") {
        return request;
    }

    request.headers["Content-Type"] = "application/x-www-form-urlencoded";
    request.data = Object.keys(request.data).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(request.data[key]);
    }).join("&");

    return request;
});

/**
 * 将请求返回的数据拦截处理一下
 */
_axios2.default.interceptors.response.use(function (response) {
    return _typeof(response.data) != "object" ? Promise.reject({
        code: "-999",
        msg: "请求返回数据损坏",
        data: null
    }) : response.data;
}, function (error) {
    return Promise.reject({
        code: "-999",
        msg: "[" + error.response.status + "]\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
        data: {
            status: error.response.status,
            statusText: error.response.statusText,
            error: error
        }
    });
});

exports.default = {};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Mock=e():t.Mock=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r,a=n(1),o=n(3),u=n(5),i=n(20),l=n(23),s=n(25);"undefined"!=typeof window&&(r=n(27));/*!
	    Mock - 模拟请求 & 模拟数据
	    https://github.com/nuysoft/Mock
	    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
	*/
var c={Handler:a,Random:u,Util:o,XHR:r,RE:i,toJSONSchema:l,valid:s,heredoc:o.heredoc,setup:function(t){return r.setup(t)},_mocked:{}};c.version="1.0.1-beta3",r&&(r.Mock=c),c.mock=function(t,e,n){return 1===arguments.length?a.gen(t):(2===arguments.length&&(n=e,e=void 0),r&&(window.XMLHttpRequest=r),c._mocked[t+(e||"")]={rurl:t,rtype:e,template:n},c)},t.exports=c},function(module,exports,__webpack_require__){var Constant=__webpack_require__(2),Util=__webpack_require__(3),Parser=__webpack_require__(4),Random=__webpack_require__(5),RE=__webpack_require__(20),Handler={extend:Util.extend};Handler.gen=function(t,e,n){e=void 0==e?"":e+"",n=n||{},n={path:n.path||[Constant.GUID],templatePath:n.templatePath||[Constant.GUID++],currentContext:n.currentContext,templateCurrentContext:n.templateCurrentContext||t,root:n.root||n.currentContext,templateRoot:n.templateRoot||n.templateCurrentContext||t};var r,a=Parser.parse(e),o=Util.type(t);return Handler[o]?(r=Handler[o]({type:o,template:t,name:e,parsedName:e?e.replace(Constant.RE_KEY,"$1"):e,rule:a,context:n}),n.root||(n.root=r),r):t},Handler.extend({array:function(t){var e,n,r=[];if(0===t.template.length)return r;if(t.rule.parameters)if(1===t.rule.min&&void 0===t.rule.max)t.context.path.push(t.name),t.context.templatePath.push(t.name),r=Random.pick(Handler.gen(t.template,void 0,{path:t.context.path,templatePath:t.context.templatePath,currentContext:r,templateCurrentContext:t.template,root:t.context.root||r,templateRoot:t.context.templateRoot||t.template})),t.context.path.pop(),t.context.templatePath.pop();else if(t.rule.parameters[2])t.template.__order_index=t.template.__order_index||0,t.context.path.push(t.name),t.context.templatePath.push(t.name),r=Handler.gen(t.template,void 0,{path:t.context.path,templatePath:t.context.templatePath,currentContext:r,templateCurrentContext:t.template,root:t.context.root||r,templateRoot:t.context.templateRoot||t.template})[t.template.__order_index%t.template.length],t.template.__order_index+=+t.rule.parameters[2],t.context.path.pop(),t.context.templatePath.pop();else for(e=0;e<t.rule.count;e++)for(n=0;n<t.template.length;n++)t.context.path.push(r.length),t.context.templatePath.push(n),r.push(Handler.gen(t.template[n],r.length,{path:t.context.path,templatePath:t.context.templatePath,currentContext:r,templateCurrentContext:t.template,root:t.context.root||r,templateRoot:t.context.templateRoot||t.template})),t.context.path.pop(),t.context.templatePath.pop();else for(e=0;e<t.template.length;e++)t.context.path.push(e),t.context.templatePath.push(e),r.push(Handler.gen(t.template[e],e,{path:t.context.path,templatePath:t.context.templatePath,currentContext:r,templateCurrentContext:t.template,root:t.context.root||r,templateRoot:t.context.templateRoot||t.template})),t.context.path.pop(),t.context.templatePath.pop();return r},object:function(t){var e,n,r,a,o,u,i={};if(void 0!=t.rule.min)for(e=Util.keys(t.template),e=Random.shuffle(e),e=e.slice(0,t.rule.count),u=0;u<e.length;u++)r=e[u],a=r.replace(Constant.RE_KEY,"$1"),t.context.path.push(a),t.context.templatePath.push(r),i[a]=Handler.gen(t.template[r],r,{path:t.context.path,templatePath:t.context.templatePath,currentContext:i,templateCurrentContext:t.template,root:t.context.root||i,templateRoot:t.context.templateRoot||t.template}),t.context.path.pop(),t.context.templatePath.pop();else{e=[],n=[];for(r in t.template)("function"==typeof t.template[r]?n:e).push(r);for(e=e.concat(n),u=0;u<e.length;u++)r=e[u],a=r.replace(Constant.RE_KEY,"$1"),t.context.path.push(a),t.context.templatePath.push(r),i[a]=Handler.gen(t.template[r],r,{path:t.context.path,templatePath:t.context.templatePath,currentContext:i,templateCurrentContext:t.template,root:t.context.root||i,templateRoot:t.context.templateRoot||t.template}),t.context.path.pop(),t.context.templatePath.pop(),o=r.match(Constant.RE_KEY),o&&o[2]&&"number"===Util.type(t.template[r])&&(t.template[r]+=parseInt(o[2],10))}return i},number:function(t){var e,n;if(t.rule.decimal){for(t.template+="",n=t.template.split("."),n[0]=t.rule.range?t.rule.count:n[0],n[1]=(n[1]||"").slice(0,t.rule.dcount);n[1].length<t.rule.dcount;)n[1]+=n[1].length<t.rule.dcount-1?Random.character("number"):Random.character("123456789");e=parseFloat(n.join("."),10)}else e=t.rule.range&&!t.rule.parameters[2]?t.rule.count:t.template;return e},"boolean":function(t){var e;return e=t.rule.parameters?Random.bool(t.rule.min,t.rule.max,t.template):t.template},string:function(t){var e,n,r,a,o="";if(t.template.length){for(void 0==t.rule.count&&(o+=t.template),e=0;e<t.rule.count;e++)o+=t.template;for(n=o.match(Constant.RE_PLACEHOLDER)||[],e=0;e<n.length;e++)if(r=n[e],/^\\/.test(r))n.splice(e--,1);else{if(a=Handler.placeholder(r,t.context.currentContext,t.context.templateCurrentContext,t),1===n.length&&r===o&&typeof a!=typeof o){o=a;break}o=o.replace(r,a)}}else o=t.rule.range?Random.string(t.rule.count):t.template;return o},"function":function(t){return t.template.call(t.context.currentContext,t)},regexp:function(t){var e="";void 0==t.rule.count&&(e+=t.template.source);for(var n=0;n<t.rule.count;n++)e+=t.template.source;return RE.Handler.gen(RE.Parser.parse(e))}}),Handler.extend({_all:function(){var t={};for(var e in Random)t[e.toLowerCase()]=e;return t},placeholder:function(placeholder,obj,templateContext,options){Constant.RE_PLACEHOLDER.exec("");var parts=Constant.RE_PLACEHOLDER.exec(placeholder),key=parts&&parts[1],lkey=key&&key.toLowerCase(),okey=this._all()[lkey],params=parts&&parts[2]||"",pathParts=this.splitPathToArray(key);try{params=eval("(function(){ return [].splice.call(arguments, 0 ) })("+params+")")}catch(error){params=parts[2].split(/,\s*/)}if(obj&&key in obj)return obj[key];if("/"===key.charAt(0)||pathParts.length>1)return this.getValueByKeyPath(key,options);if(templateContext&&"object"==typeof templateContext&&key in templateContext&&placeholder!==templateContext[key])return templateContext[key]=Handler.gen(templateContext[key],key,{currentContext:obj,templateCurrentContext:templateContext}),templateContext[key];if(!(key in Random||lkey in Random||okey in Random))return placeholder;for(var i=0;i<params.length;i++)Constant.RE_PLACEHOLDER.exec(""),Constant.RE_PLACEHOLDER.test(params[i])&&(params[i]=Handler.placeholder(params[i],obj,templateContext,options));var handle=Random[key]||Random[lkey]||Random[okey];switch(Util.type(handle)){case"array":return Random.pick(handle);case"function":handle.options=options;var re=handle.apply(Random,params);return void 0===re&&(re=""),delete handle.options,re}},getValueByKeyPath:function(t,e){var n=t,r=this.splitPathToArray(t),a=[];"/"===t.charAt(0)?a=[e.context.path[0]].concat(this.normalizePath(r)):r.length>1&&(a=e.context.path.slice(0),a.pop(),a=this.normalizePath(a.concat(r))),t=r[r.length-1];for(var o=e.context.root,u=e.context.templateRoot,i=1;i<a.length-1;i++)o=o[a[i]],u=u[a[i]];return o&&t in o?o[t]:u&&"object"==typeof u&&t in u&&n!==u[t]?(u[t]=Handler.gen(u[t],t,{currentContext:o,templateCurrentContext:u}),u[t]):void 0},normalizePath:function(t){for(var e=[],n=0;n<t.length;n++)switch(t[n]){case"..":e.pop();break;case".":break;default:e.push(t[n])}return e},splitPathToArray:function(t){var e=t.split(/\/+/);return e[e.length-1]||(e=e.slice(0,-1)),e[0]||(e=e.slice(1)),e}}),module.exports=Handler},function(t,e){t.exports={GUID:1,RE_KEY:/(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,RE_RANGE:/([\+\-]?\d+)-?([\+\-]?\d+)?/,RE_PLACEHOLDER:/\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g}},function(t,e){var n={};n.extend=function(){var t,e,r,a,o,u=arguments[0]||{},i=1,l=arguments.length;for(1===l&&(u=this,i=0);l>i;i++)if(t=arguments[i])for(e in t)r=u[e],a=t[e],u!==a&&void 0!==a&&(n.isArray(a)||n.isObject(a)?(n.isArray(a)&&(o=r&&n.isArray(r)?r:[]),n.isObject(a)&&(o=r&&n.isObject(r)?r:{}),u[e]=n.extend(o,a)):u[e]=a);return u},n.each=function(t,e,n){var r,a;if("number"===this.type(t))for(r=0;t>r;r++)e(r,r);else if(t.length===+t.length)for(r=0;r<t.length&&e.call(n,t[r],r,t)!==!1;r++);else for(a in t)if(e.call(n,t[a],a,t)===!1)break},n.type=function(t){return null===t||void 0===t?String(t):Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1].toLowerCase()},n.each("String Object Array RegExp Function".split(" "),function(t){n["is"+t]=function(e){return n.type(e)===t.toLowerCase()}}),n.isObjectOrArray=function(t){return n.isObject(t)||n.isArray(t)},n.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},n.keys=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},n.values=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e},n.heredoc=function(t){return t.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"").replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")},n.noop=function(){},t.exports=n},function(t,e,n){var r=n(2),a=n(5);t.exports={parse:function(t){t=void 0==t?"":t+"";var e=(t||"").match(r.RE_KEY),n=e&&e[3]&&e[3].match(r.RE_RANGE),o=n&&n[1]&&parseInt(n[1],10),u=n&&n[2]&&parseInt(n[2],10),i=n?n[2]?a.integer(o,u):parseInt(n[1],10):void 0,l=e&&e[4]&&e[4].match(r.RE_RANGE),s=l&&l[1]&&parseInt(l[1],10),c=l&&l[2]&&parseInt(l[2],10),h=l?!l[2]&&parseInt(l[1],10)||a.integer(s,c):void 0,p={parameters:e,range:n,min:o,max:u,count:i,decimal:l,dmin:s,dmax:c,dcount:h};for(var f in p)if(void 0!=p[f])return p;return{}}}},function(t,e,n){var r=n(3),a={extend:r.extend};a.extend(n(6)),a.extend(n(7)),a.extend(n(8)),a.extend(n(10)),a.extend(n(13)),a.extend(n(15)),a.extend(n(16)),a.extend(n(17)),a.extend(n(14)),a.extend(n(19)),t.exports=a},function(t,e){t.exports={"boolean":function(t,e,n){return void 0!==n?(t="undefined"==typeof t||isNaN(t)?1:parseInt(t,10),e="undefined"==typeof e||isNaN(e)?1:parseInt(e,10),Math.random()>1/(t+e)*t?!n:n):Math.random()>=.5},bool:function(t,e,n){return this["boolean"](t,e,n)},natural:function(t,e){return t="undefined"!=typeof t?parseInt(t,10):0,e="undefined"!=typeof e?parseInt(e,10):9007199254740992,Math.round(Math.random()*(e-t))+t},integer:function(t,e){return t="undefined"!=typeof t?parseInt(t,10):-9007199254740992,e="undefined"!=typeof e?parseInt(e,10):9007199254740992,Math.round(Math.random()*(e-t))+t},"int":function(t,e){return this.integer(t,e)},"float":function(t,e,n,r){n=void 0===n?0:n,n=Math.max(Math.min(n,17),0),r=void 0===r?17:r,r=Math.max(Math.min(r,17),0);for(var a=this.integer(t,e)+".",o=0,u=this.natural(n,r);u>o;o++)a+=u-1>o?this.character("number"):this.character("123456789");return parseFloat(a,10)},character:function(t){var e={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!@#$%^&*()[]"};return e.alpha=e.lower+e.upper,e.undefined=e.lower+e.upper+e.number+e.symbol,t=e[(""+t).toLowerCase()]||t,t.charAt(this.natural(0,t.length-1))},"char":function(t){return this.character(t)},string:function(t,e,n){var r;switch(arguments.length){case 0:r=this.natural(3,7);break;case 1:r=t,t=void 0;break;case 2:"string"==typeof arguments[0]?r=e:(r=this.natural(t,e),t=void 0);break;case 3:r=this.natural(e,n)}for(var a="",o=0;r>o;o++)a+=this.character(t);return a},str:function(){return this.string.apply(this,arguments)},range:function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1,t=+t,e=+e,n=+n;for(var r=Math.max(Math.ceil((e-t)/n),0),a=0,o=new Array(r);r>a;)o[a++]=t,t+=n;return o}}},function(t,e){var n={yyyy:"getFullYear",yy:function(t){return(""+t.getFullYear()).slice(2)},y:"yy",MM:function(t){var e=t.getMonth()+1;return 10>e?"0"+e:e},M:function(t){return t.getMonth()+1},dd:function(t){var e=t.getDate();return 10>e?"0"+e:e},d:"getDate",HH:function(t){var e=t.getHours();return 10>e?"0"+e:e},H:"getHours",hh:function(t){var e=t.getHours()%12;return 10>e?"0"+e:e},h:function(t){return t.getHours()%12},mm:function(t){var e=t.getMinutes();return 10>e?"0"+e:e},m:"getMinutes",ss:function(t){var e=t.getSeconds();return 10>e?"0"+e:e},s:"getSeconds",SS:function(t){var e=t.getMilliseconds();return 10>e&&"00"+e||100>e&&"0"+e||e},S:"getMilliseconds",A:function(t){return t.getHours()<12?"AM":"PM"},a:function(t){return t.getHours()<12?"am":"pm"},T:"getTime"};t.exports={_patternLetters:n,_rformat:new RegExp(function(){var t=[];for(var e in n)t.push(e);return"("+t.join("|")+")"}(),"g"),_formatDate:function(t,e){return e.replace(this._rformat,function r(e,a){return"function"==typeof n[a]?n[a](t):n[a]in n?r(e,n[a]):t[n[a]]()})},_randomDate:function(t,e){return t=void 0===t?new Date(0):t,e=void 0===e?new Date:e,new Date(Math.random()*(e.getTime()-t.getTime()))},date:function(t){return t=t||"yyyy-MM-dd",this._formatDate(this._randomDate(),t)},time:function(t){return t=t||"HH:mm:ss",this._formatDate(this._randomDate(),t)},datetime:function(t){return t=t||"yyyy-MM-dd HH:mm:ss",this._formatDate(this._randomDate(),t)},now:function(t,e){1===arguments.length&&(/year|month|day|hour|minute|second|week/.test(t)||(e=t,t="")),t=(t||"").toLowerCase(),e=e||"yyyy-MM-dd HH:mm:ss";var n=new Date;switch(t){case"year":n.setMonth(0);case"month":n.setDate(1);case"week":case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}switch(t){case"week":n.setDate(n.getDate()-n.getDay())}return this._formatDate(n,e)}}},function(t,e,n){(function(t){t.exports={_adSize:["300x250","250x250","240x400","336x280","180x150","720x300","468x60","234x60","88x31","120x90","120x60","120x240","125x125","728x90","160x600","120x600","300x600"],_screenSize:["320x200","320x240","640x480","800x480","800x480","1024x600","1024x768","1280x800","1440x900","1920x1200","2560x1600"],_videoSize:["720x480","768x576","1280x720","1920x1080"],image:function(t,e,n,r,a){return 4===arguments.length&&(a=r,r=void 0),3===arguments.length&&(a=n,n=void 0),t||(t=this.pick(this._adSize)),e&&~e.indexOf("#")&&(e=e.slice(1)),n&&~n.indexOf("#")&&(n=n.slice(1)),"http://dummyimage.com/"+t+(e?"/"+e:"")+(n?"/"+n:"")+(r?"."+r:"")+(a?"&text="+a:"")},img:function(){return this.image.apply(this,arguments)},_brandColors:{"4ormat":"#fb0a2a","500px":"#02adea","About.me (blue)":"#00405d","About.me (yellow)":"#ffcc33",Addvocate:"#ff6138",Adobe:"#ff0000",Aim:"#fcd20b",Amazon:"#e47911",Android:"#a4c639","Angie's List":"#7fbb00",AOL:"#0060a3",Atlassian:"#003366",Behance:"#053eff","Big Cartel":"#97b538",bitly:"#ee6123",Blogger:"#fc4f08",Boeing:"#0039a6","Booking.com":"#003580",Carbonmade:"#613854",Cheddar:"#ff7243","Code School":"#3d4944",Delicious:"#205cc0",Dell:"#3287c1",Designmoo:"#e54a4f",Deviantart:"#4e6252","Designer News":"#2d72da",Devour:"#fd0001",DEWALT:"#febd17","Disqus (blue)":"#59a3fc","Disqus (orange)":"#db7132",Dribbble:"#ea4c89",Dropbox:"#3d9ae8",Drupal:"#0c76ab",Dunked:"#2a323a",eBay:"#89c507",Ember:"#f05e1b",Engadget:"#00bdf6",Envato:"#528036",Etsy:"#eb6d20",Evernote:"#5ba525","Fab.com":"#dd0017",Facebook:"#3b5998",Firefox:"#e66000","Flickr (blue)":"#0063dc","Flickr (pink)":"#ff0084",Forrst:"#5b9a68",Foursquare:"#25a0ca",Garmin:"#007cc3",GetGlue:"#2d75a2",Gimmebar:"#f70078",GitHub:"#171515","Google Blue":"#0140ca","Google Green":"#16a61e","Google Red":"#dd1812","Google Yellow":"#fcca03","Google+":"#dd4b39",Grooveshark:"#f77f00",Groupon:"#82b548","Hacker News":"#ff6600",HelloWallet:"#0085ca","Heroku (light)":"#c7c5e6","Heroku (dark)":"#6567a5",HootSuite:"#003366",Houzz:"#73ba37",HTML5:"#ec6231",IKEA:"#ffcc33",IMDb:"#f3ce13",Instagram:"#3f729b",Intel:"#0071c5",Intuit:"#365ebf",Kickstarter:"#76cc1e",kippt:"#e03500",Kodery:"#00af81",LastFM:"#c3000d",LinkedIn:"#0e76a8",Livestream:"#cf0005",Lumo:"#576396",Mixpanel:"#a086d3",Meetup:"#e51937",Nokia:"#183693",NVIDIA:"#76b900",Opera:"#cc0f16",Path:"#e41f11","PayPal (dark)":"#1e477a","PayPal (light)":"#3b7bbf",Pinboard:"#0000e6",Pinterest:"#c8232c",PlayStation:"#665cbe",Pocket:"#ee4056",Prezi:"#318bff",Pusha:"#0f71b4",Quora:"#a82400","QUOTE.fm":"#66ceff",Rdio:"#008fd5",Readability:"#9c0000","Red Hat":"#cc0000",Resource:"#7eb400",Rockpack:"#0ba6ab",Roon:"#62b0d9",RSS:"#ee802f",Salesforce:"#1798c1",Samsung:"#0c4da2",Shopify:"#96bf48",Skype:"#00aff0",Snagajob:"#f47a20",Softonic:"#008ace",SoundCloud:"#ff7700","Space Box":"#f86960",Spotify:"#81b71a",Sprint:"#fee100",Squarespace:"#121212",StackOverflow:"#ef8236",Staples:"#cc0000","Status Chart":"#d7584f",Stripe:"#008cdd",StudyBlue:"#00afe1",StumbleUpon:"#f74425","T-Mobile":"#ea0a8e",Technorati:"#40a800","The Next Web":"#ef4423",Treehouse:"#5cb868",Trulia:"#5eab1f",Tumblr:"#34526f","Twitch.tv":"#6441a5",Twitter:"#00acee",TYPO3:"#ff8700",Ubuntu:"#dd4814",Ustream:"#3388ff",Verizon:"#ef1d1d",Vimeo:"#86c9ef",Vine:"#00a478",Virb:"#06afd8","Virgin Media":"#cc0000",Wooga:"#5b009c","WordPress (blue)":"#21759b","WordPress (orange)":"#d54e21","WordPress (grey)":"#464646",Wunderlist:"#2b88d9",XBOX:"#9bc848",XING:"#126567","Yahoo!":"#720e9e",Yandex:"#ffcc00",Yelp:"#c41200",YouTube:"#c4302b",Zalongo:"#5498dc",Zendesk:"#78a300",Zerply:"#9dcc7a",Zootool:"#5e8b1d"},_brandNames:function(){var t=[];for(var e in this._brandColors)t.push(e);return t},dataImage:function(e,n){var r;if("undefined"!=typeof document)r=document.createElement("canvas");else{var a=t.require("canvas");r=new a}var o=r&&r.getContext&&r.getContext("2d");if(!r||!o)return"";e||(e=this.pick(this._adSize)),n=void 0!==n?n:e,e=e.split("x");var u=parseInt(e[0],10),i=parseInt(e[1],10),l=this._brandColors[this.pick(this._brandNames())],s="#FFF",c=14,h="sans-serif";return r.width=u,r.height=i,o.textAlign="center",o.textBaseline="middle",o.fillStyle=l,o.fillRect(0,0,u,i),o.fillStyle=s,o.font="bold "+c+"px "+h,o.fillText(n,u/2,i/2,u),r.toDataURL("image/png")}}}).call(e,n(9)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){var r=n(11),a=n(12);t.exports={color:function(t){return t||a[t]?a[t].nicer:this.hex()},hex:function(){var t=this._goldenRatioColor(),e=r.hsv2rgb(t),n=r.rgb2hex(e[0],e[1],e[2]);return n},rgb:function(){var t=this._goldenRatioColor(),e=r.hsv2rgb(t);return"rgb("+parseInt(e[0],10)+", "+parseInt(e[1],10)+", "+parseInt(e[2],10)+")"},rgba:function(){var t=this._goldenRatioColor(),e=r.hsv2rgb(t);return"rgba("+parseInt(e[0],10)+", "+parseInt(e[1],10)+", "+parseInt(e[2],10)+", "+Math.random().toFixed(2)+")"},hsl:function(){var t=this._goldenRatioColor(),e=r.hsv2hsl(t);return"hsl("+parseInt(e[0],10)+", "+parseInt(e[1],10)+", "+parseInt(e[2],10)+")"},_goldenRatioColor:function(t,e){return this._goldenRatio=.618033988749895,this._hue=this._hue||Math.random(),this._hue+=this._goldenRatio,this._hue%=1,"number"!=typeof t&&(t=.5),"number"!=typeof e&&(e=.95),[360*this._hue,100*t,100*e]}}},function(t,e){t.exports={rgb2hsl:function(t){var e,n,r,a=t[0]/255,o=t[1]/255,u=t[2]/255,i=Math.min(a,o,u),l=Math.max(a,o,u),s=l-i;return l==i?e=0:a==l?e=(o-u)/s:o==l?e=2+(u-a)/s:u==l&&(e=4+(a-o)/s),e=Math.min(60*e,360),0>e&&(e+=360),r=(i+l)/2,n=l==i?0:.5>=r?s/(l+i):s/(2-l-i),[e,100*n,100*r]},rgb2hsv:function(t){var e,n,r,a=t[0],o=t[1],u=t[2],i=Math.min(a,o,u),l=Math.max(a,o,u),s=l-i;return n=0===l?0:s/l*1e3/10,l==i?e=0:a==l?e=(o-u)/s:o==l?e=2+(u-a)/s:u==l&&(e=4+(a-o)/s),e=Math.min(60*e,360),0>e&&(e+=360),r=l/255*1e3/10,[e,n,r]},hsl2rgb:function(t){var e,n,r,a,o,u=t[0]/360,i=t[1]/100,l=t[2]/100;if(0===i)return o=255*l,[o,o,o];n=.5>l?l*(1+i):l+i-l*i,e=2*l-n,a=[0,0,0];for(var s=0;3>s;s++)r=u+1/3*-(s-1),0>r&&r++,r>1&&r--,o=1>6*r?e+6*(n-e)*r:1>2*r?n:2>3*r?e+(n-e)*(2/3-r)*6:e,a[s]=255*o;return a},hsl2hsv:function(t){var e,n,r=t[0],a=t[1]/100,o=t[2]/100;return o*=2,a*=1>=o?o:2-o,n=(o+a)/2,e=2*a/(o+a),[r,100*e,100*n]},hsv2rgb:function(t){var e=t[0]/60,n=t[1]/100,r=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),u=255*r*(1-n),i=255*r*(1-n*o),l=255*r*(1-n*(1-o));switch(r=255*r,a){case 0:return[r,l,u];case 1:return[i,r,u];case 2:return[u,r,l];case 3:return[u,i,r];case 4:return[l,u,r];case 5:return[r,u,i]}},hsv2hsl:function(t){var e,n,r=t[0],a=t[1]/100,o=t[2]/100;return n=(2-a)*o,e=a*o,e/=1>=n?n:2-n,n/=2,[r,100*e,100*n]},rgb2hex:function(t,e,n){return"#"+((256+t<<8|e)<<8|n).toString(16).slice(1)},hex2rgb:function(t){return t="0x"+t.slice(1).replace(t.length>4?t:/./g,"$&$&")|0,[t>>16,t>>8&255,255&t]}}},function(t,e){t.exports={navy:{value:"#000080",nicer:"#001F3F"},blue:{value:"#0000ff",nicer:"#0074D9"},aqua:{value:"#00ffff",nicer:"#7FDBFF"},teal:{value:"#008080",nicer:"#39CCCC"},olive:{value:"#008000",nicer:"#3D9970"},green:{value:"#008000",nicer:"#2ECC40"},lime:{value:"#00ff00",nicer:"#01FF70"},yellow:{value:"#ffff00",nicer:"#FFDC00"},orange:{value:"#ffa500",nicer:"#FF851B"},red:{value:"#ff0000",nicer:"#FF4136"},maroon:{value:"#800000",nicer:"#85144B"},fuchsia:{value:"#ff00ff",nicer:"#F012BE"},purple:{value:"#800080",nicer:"#B10DC9"},silver:{value:"#c0c0c0",nicer:"#DDDDDD"},gray:{value:"#808080",nicer:"#AAAAAA"},black:{value:"#000000",nicer:"#111111"},white:{value:"#FFFFFF",nicer:"#FFFFFF"}}},function(t,e,n){function r(t,e,n,r){return void 0===n?a.natural(t,e):void 0===r?n:a.natural(parseInt(n,10),parseInt(r,10))}var a=n(6),o=n(14);t.exports={paragraph:function(t,e){for(var n=r(3,7,t,e),a=[],o=0;n>o;o++)a.push(this.sentence());return a.join(" ")},cparagraph:function(t,e){for(var n=r(3,7,t,e),a=[],o=0;n>o;o++)a.push(this.csentence());return a.join("")},sentence:function(t,e){for(var n=r(12,18,t,e),a=[],u=0;n>u;u++)a.push(this.word());return o.capitalize(a.join(" "))+"."},csentence:function(t,e){for(var n=r(12,18,t,e),a=[],o=0;n>o;o++)a.push(this.cword());return a.join("")+"。"},word:function(t,e){for(var n=r(3,10,t,e),o="",u=0;n>u;u++)o+=a.character("lower");return o},cword:function(t,e,n){var r,a="的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞";switch(arguments.length){case 0:t=a,r=1;break;case 1:"string"==typeof arguments[0]?r=1:(r=t,t=a);break;case 2:"string"==typeof arguments[0]?r=e:(r=this.natural(t,e),t=a);break;case 3:r=this.natural(e,n)}for(var o="",u=0;r>u;u++)o+=t.charAt(this.natural(0,t.length-1));return o},title:function(t,e){for(var n=r(3,7,t,e),a=[],o=0;n>o;o++)a.push(this.capitalize(this.word()));return a.join(" ")},ctitle:function(t,e){for(var n=r(3,7,t,e),a=[],o=0;n>o;o++)a.push(this.cword());return a.join("")}}},function(t,e,n){var r=n(3);t.exports={capitalize:function(t){return(t+"").charAt(0).toUpperCase()+(t+"").substr(1)},upper:function(t){return(t+"").toUpperCase()},lower:function(t){return(t+"").toLowerCase()},pick:function(t,e,n){return r.isArray(t)?(void 0===e&&(e=1),void 0===n&&(n=e)):(t=[].slice.call(arguments),e=1,n=1),1===e&&1===n?t[this.natural(0,t.length-1)]:this.shuffle(t,e,n)},shuffle:function(t,e,n){t=t||[];for(var r=t.slice(0),a=[],o=0,u=r.length,i=0;u>i;i++)o=this.natural(0,r.length-1),a.push(r[o]),r.splice(o,1);switch(arguments.length){case 0:case 1:return a;case 2:n=e;case 3:return e=parseInt(e,10),n=parseInt(n,10),a.slice(0,this.natural(e,n))}},order:function a(t){a.cache=a.cache||{},arguments.length>1&&(t=[].slice.call(arguments,0));var e=a.options,n=e.context.templatePath.join("."),r=a.cache[n]=a.cache[n]||{index:0,array:t};return r.array[r.index++%r.array.length]}}},function(t,e){t.exports={first:function(){var t=["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric"].concat(["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna"]);return this.pick(t)},last:function(){var t=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen"];return this.pick(t)},name:function(t){return this.first()+" "+(t?this.first()+" ":"")+this.last()},cfirst:function(){var t="王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");return this.pick(t)},clast:function(){var t="伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");return this.pick(t)},cname:function(){return this.cfirst()+this.clast()}}},function(t,e){t.exports={url:function(t,e){return(t||this.protocol())+"://"+(e||this.domain())+"/"+this.word()},protocol:function(){return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "))},domain:function(t){return this.word()+"."+(t||this.tld())},tld:function(){return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "))},email:function(t){return this.character("lower")+"."+this.word()+"@"+(t||this.word()+"."+this.tld())},ip:function(){return this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)}}},function(t,e,n){var r=n(18),a=["东北","华北","华东","华中","华南","西南","西北"];t.exports={region:function(){return this.pick(a)},province:function(){return this.pick(r).name},city:function(t){var e=this.pick(r),n=this.pick(e.children);return t?[e.name,n.name].join(" "):n.name},county:function(t){var e=this.pick(r),n=this.pick(e.children),a=this.pick(n.children)||{name:"-"};return t?[e.name,n.name,a.name].join(" "):a.name},zip:function(t){for(var e="",n=0;(t||6)>n;n++)e+=this.natural(0,9);return e}}},function(t,e){function n(t){for(var e,n={},r=0;r<t.length;r++)e=t[r],e&&e.id&&(n[e.id]=e);for(var a=[],o=0;o<t.length;o++)if(e=t[o])if(void 0!=e.pid||void 0!=e.parentId){var u=n[e.pid]||n[e.parentId];u&&(u.children||(u.children=[]),u.children.push(e))}else a.push(e);return a}var r={110000:"北京",110100:"北京市",110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",110107:"石景山区",110108:"海淀区",110109:"门头沟区",110111:"房山区",110112:"通州区",110113:"顺义区",110114:"昌平区",110115:"大兴区",110116:"怀柔区",110117:"平谷区",110228:"密云县",110229:"延庆县",110230:"其它区",120000:"天津",120100:"天津市",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区",120106:"红桥区",120110:"东丽区",120111:"西青区",120112:"津南区",120113:"北辰区",120114:"武清区",120115:"宝坻区",120116:"滨海新区",120221:"宁河县",120223:"静海县",120225:"蓟县",120226:"其它区",130000:"河北省",130100:"石家庄市",130102:"长安区",130103:"桥东区",130104:"桥西区",130105:"新华区",130107:"井陉矿区",130108:"裕华区",130121:"井陉县",130123:"正定县",130124:"栾城县",130125:"行唐县",130126:"灵寿县",130127:"高邑县",130128:"深泽县",130129:"赞皇县",130130:"无极县",130131:"平山县",130132:"元氏县",130133:"赵县",130181:"辛集市",130182:"藁城市",130183:"晋州市",130184:"新乐市",130185:"鹿泉市",130186:"其它区",130200:"唐山市",130202:"路南区",130203:"路北区",130204:"古冶区",130205:"开平区",130207:"丰南区",130208:"丰润区",130223:"滦县",130224:"滦南县",130225:"乐亭县",130227:"迁西县",130229:"玉田县",130230:"曹妃甸区",130281:"遵化市",130283:"迁安市",130284:"其它区",130300:"秦皇岛市",130302:"海港区",130303:"山海关区",130304:"北戴河区",130321:"青龙满族自治县",130322:"昌黎县",130323:"抚宁县",130324:"卢龙县",130398:"其它区",130400:"邯郸市",130402:"邯山区",130403:"丛台区",130404:"复兴区",130406:"峰峰矿区",130421:"邯郸县",130423:"临漳县",130424:"成安县",130425:"大名县",130426:"涉县",130427:"磁县",130428:"肥乡县",130429:"永年县",130430:"邱县",130431:"鸡泽县",130432:"广平县",130433:"馆陶县",130434:"魏县",130435:"曲周县",130481:"武安市",130482:"其它区",130500:"邢台市",130502:"桥东区",130503:"桥西区",130521:"邢台县",130522:"临城县",130523:"内丘县",130524:"柏乡县",130525:"隆尧县",130526:"任县",130527:"南和县",130528:"宁晋县",130529:"巨鹿县",130530:"新河县",130531:"广宗县",130532:"平乡县",130533:"威县",130534:"清河县",130535:"临西县",130581:"南宫市",130582:"沙河市",130583:"其它区",130600:"保定市",130602:"新市区",130603:"北市区",130604:"南市区",130621:"满城县",130622:"清苑县",130623:"涞水县",130624:"阜平县",130625:"徐水县",130626:"定兴县",130627:"唐县",130628:"高阳县",130629:"容城县",130630:"涞源县",130631:"望都县",130632:"安新县",130633:"易县",130634:"曲阳县",130635:"蠡县",130636:"顺平县",130637:"博野县",130638:"雄县",130681:"涿州市",130682:"定州市",130683:"安国市",130684:"高碑店市",130699:"其它区",130700:"张家口市",130702:"桥东区",130703:"桥西区",130705:"宣化区",130706:"下花园区",130721:"宣化县",130722:"张北县",130723:"康保县",130724:"沽源县",130725:"尚义县",130726:"蔚县",130727:"阳原县",130728:"怀安县",130729:"万全县",130730:"怀来县",130731:"涿鹿县",130732:"赤城县",130733:"崇礼县",130734:"其它区",130800:"承德市",130802:"双桥区",130803:"双滦区",130804:"鹰手营子矿区",130821:"承德县",130822:"兴隆县",130823:"平泉县",130824:"滦平县",130825:"隆化县",130826:"丰宁满族自治县",130827:"宽城满族自治县",130828:"围场满族蒙古族自治县",130829:"其它区",130900:"沧州市",130902:"新华区",130903:"运河区",130921:"沧县",130922:"青县",130923:"东光县",130924:"海兴县",130925:"盐山县",130926:"肃宁县",130927:"南皮县",130928:"吴桥县",130929:"献县",130930:"孟村回族自治县",130981:"泊头市",130982:"任丘市",130983:"黄骅市",130984:"河间市",130985:"其它区",131000:"廊坊市",131002:"安次区",131003:"广阳区",131022:"固安县",131023:"永清县",131024:"香河县",131025:"大城县",131026:"文安县",131028:"大厂回族自治县",131081:"霸州市",131082:"三河市",131083:"其它区",131100:"衡水市",131102:"桃城区",131121:"枣强县",131122:"武邑县",131123:"武强县",131124:"饶阳县",131125:"安平县",131126:"故城县",131127:"景县",131128:"阜城县",131181:"冀州市",131182:"深州市",131183:"其它区",140000:"山西省",140100:"太原市",140105:"小店区",140106:"迎泽区",140107:"杏花岭区",140108:"尖草坪区",140109:"万柏林区",140110:"晋源区",140121:"清徐县",140122:"阳曲县",140123:"娄烦县",140181:"古交市",140182:"其它区",140200:"大同市",140202:"城区",140203:"矿区",140211:"南郊区",140212:"新荣区",140221:"阳高县",140222:"天镇县",140223:"广灵县",140224:"灵丘县",140225:"浑源县",140226:"左云县",140227:"大同县",140228:"其它区",140300:"阳泉市",140302:"城区",140303:"矿区",140311:"郊区",140321:"平定县",140322:"盂县",140323:"其它区",140400:"长治市",140421:"长治县",140423:"襄垣县",140424:"屯留县",140425:"平顺县",140426:"黎城县",140427:"壶关县",140428:"长子县",140429:"武乡县",140430:"沁县",140431:"沁源县",140481:"潞城市",140482:"城区",140483:"郊区",140485:"其它区",140500:"晋城市",140502:"城区",140521:"沁水县",140522:"阳城县",140524:"陵川县",140525:"泽州县",140581:"高平市",140582:"其它区",140600:"朔州市",140602:"朔城区",140603:"平鲁区",140621:"山阴县",140622:"应县",140623:"右玉县",140624:"怀仁县",140625:"其它区",140700:"晋中市",140702:"榆次区",140721:"榆社县",140722:"左权县",140723:"和顺县",140724:"昔阳县",140725:"寿阳县",140726:"太谷县",140727:"祁县",140728:"平遥县",140729:"灵石县",140781:"介休市",140782:"其它区",140800:"运城市",140802:"盐湖区",140821:"临猗县",140822:"万荣县",140823:"闻喜县",140824:"稷山县",140825:"新绛县",140826:"绛县",140827:"垣曲县",140828:"夏县",140829:"平陆县",140830:"芮城县",140881:"永济市",140882:"河津市",140883:"其它区",140900:"忻州市",140902:"忻府区",140921:"定襄县",140922:"五台县",140923:"代县",140924:"繁峙县",140925:"宁武县",140926:"静乐县",140927:"神池县",140928:"五寨县",140929:"岢岚县",140930:"河曲县",140931:"保德县",140932:"偏关县",140981:"原平市",140982:"其它区",141000:"临汾市",141002:"尧都区",141021:"曲沃县",141022:"翼城县",141023:"襄汾县",141024:"洪洞县",141025:"古县",141026:"安泽县",141027:"浮山县",141028:"吉县",141029:"乡宁县",141030:"大宁县",141031:"隰县",141032:"永和县",141033:"蒲县",141034:"汾西县",141081:"侯马市",141082:"霍州市",141083:"其它区",141100:"吕梁市",141102:"离石区",141121:"文水县",141122:"交城县",141123:"兴县",141124:"临县",141125:"柳林县",141126:"石楼县",141127:"岚县",141128:"方山县",141129:"中阳县",141130:"交口县",141181:"孝义市",141182:"汾阳市",141183:"其它区",150000:"内蒙古自治区",150100:"呼和浩特市",150102:"新城区",150103:"回民区",150104:"玉泉区",150105:"赛罕区",
150121:"土默特左旗",150122:"托克托县",150123:"和林格尔县",150124:"清水河县",150125:"武川县",150126:"其它区",150200:"包头市",150202:"东河区",150203:"昆都仑区",150204:"青山区",150205:"石拐区",150206:"白云鄂博矿区",150207:"九原区",150221:"土默特右旗",150222:"固阳县",150223:"达尔罕茂明安联合旗",150224:"其它区",150300:"乌海市",150302:"海勃湾区",150303:"海南区",150304:"乌达区",150305:"其它区",150400:"赤峰市",150402:"红山区",150403:"元宝山区",150404:"松山区",150421:"阿鲁科尔沁旗",150422:"巴林左旗",150423:"巴林右旗",150424:"林西县",150425:"克什克腾旗",150426:"翁牛特旗",150428:"喀喇沁旗",150429:"宁城县",150430:"敖汉旗",150431:"其它区",150500:"通辽市",150502:"科尔沁区",150521:"科尔沁左翼中旗",150522:"科尔沁左翼后旗",150523:"开鲁县",150524:"库伦旗",150525:"奈曼旗",150526:"扎鲁特旗",150581:"霍林郭勒市",150582:"其它区",150600:"鄂尔多斯市",150602:"东胜区",150621:"达拉特旗",150622:"准格尔旗",150623:"鄂托克前旗",150624:"鄂托克旗",150625:"杭锦旗",150626:"乌审旗",150627:"伊金霍洛旗",150628:"其它区",150700:"呼伦贝尔市",150702:"海拉尔区",150703:"扎赉诺尔区",150721:"阿荣旗",150722:"莫力达瓦达斡尔族自治旗",150723:"鄂伦春自治旗",150724:"鄂温克族自治旗",150725:"陈巴尔虎旗",150726:"新巴尔虎左旗",150727:"新巴尔虎右旗",150781:"满洲里市",150782:"牙克石市",150783:"扎兰屯市",150784:"额尔古纳市",150785:"根河市",150786:"其它区",150800:"巴彦淖尔市",150802:"临河区",150821:"五原县",150822:"磴口县",150823:"乌拉特前旗",150824:"乌拉特中旗",150825:"乌拉特后旗",150826:"杭锦后旗",150827:"其它区",150900:"乌兰察布市",150902:"集宁区",150921:"卓资县",150922:"化德县",150923:"商都县",150924:"兴和县",150925:"凉城县",150926:"察哈尔右翼前旗",150927:"察哈尔右翼中旗",150928:"察哈尔右翼后旗",150929:"四子王旗",150981:"丰镇市",150982:"其它区",152200:"兴安盟",152201:"乌兰浩特市",152202:"阿尔山市",152221:"科尔沁右翼前旗",152222:"科尔沁右翼中旗",152223:"扎赉特旗",152224:"突泉县",152225:"其它区",152500:"锡林郭勒盟",152501:"二连浩特市",152502:"锡林浩特市",152522:"阿巴嘎旗",152523:"苏尼特左旗",152524:"苏尼特右旗",152525:"东乌珠穆沁旗",152526:"西乌珠穆沁旗",152527:"太仆寺旗",152528:"镶黄旗",152529:"正镶白旗",152530:"正蓝旗",152531:"多伦县",152532:"其它区",152900:"阿拉善盟",152921:"阿拉善左旗",152922:"阿拉善右旗",152923:"额济纳旗",152924:"其它区",210000:"辽宁省",210100:"沈阳市",210102:"和平区",210103:"沈河区",210104:"大东区",210105:"皇姑区",210106:"铁西区",210111:"苏家屯区",210112:"东陵区",210113:"新城子区",210114:"于洪区",210122:"辽中县",210123:"康平县",210124:"法库县",210181:"新民市",210184:"沈北新区",210185:"其它区",210200:"大连市",210202:"中山区",210203:"西岗区",210204:"沙河口区",210211:"甘井子区",210212:"旅顺口区",210213:"金州区",210224:"长海县",210281:"瓦房店市",210282:"普兰店市",210283:"庄河市",210298:"其它区",210300:"鞍山市",210302:"铁东区",210303:"铁西区",210304:"立山区",210311:"千山区",210321:"台安县",210323:"岫岩满族自治县",210381:"海城市",210382:"其它区",210400:"抚顺市",210402:"新抚区",210403:"东洲区",210404:"望花区",210411:"顺城区",210421:"抚顺县",210422:"新宾满族自治县",210423:"清原满族自治县",210424:"其它区",210500:"本溪市",210502:"平山区",210503:"溪湖区",210504:"明山区",210505:"南芬区",210521:"本溪满族自治县",210522:"桓仁满族自治县",210523:"其它区",210600:"丹东市",210602:"元宝区",210603:"振兴区",210604:"振安区",210624:"宽甸满族自治县",210681:"东港市",210682:"凤城市",210683:"其它区",210700:"锦州市",210702:"古塔区",210703:"凌河区",210711:"太和区",210726:"黑山县",210727:"义县",210781:"凌海市",210782:"北镇市",210783:"其它区",210800:"营口市",210802:"站前区",210803:"西市区",210804:"鲅鱼圈区",210811:"老边区",210881:"盖州市",210882:"大石桥市",210883:"其它区",210900:"阜新市",210902:"海州区",210903:"新邱区",210904:"太平区",210905:"清河门区",210911:"细河区",210921:"阜新蒙古族自治县",210922:"彰武县",210923:"其它区",211000:"辽阳市",211002:"白塔区",211003:"文圣区",211004:"宏伟区",211005:"弓长岭区",211011:"太子河区",211021:"辽阳县",211081:"灯塔市",211082:"其它区",211100:"盘锦市",211102:"双台子区",211103:"兴隆台区",211121:"大洼县",211122:"盘山县",211123:"其它区",211200:"铁岭市",211202:"银州区",211204:"清河区",211221:"铁岭县",211223:"西丰县",211224:"昌图县",211281:"调兵山市",211282:"开原市",211283:"其它区",211300:"朝阳市",211302:"双塔区",211303:"龙城区",211321:"朝阳县",211322:"建平县",211324:"喀喇沁左翼蒙古族自治县",211381:"北票市",211382:"凌源市",211383:"其它区",211400:"葫芦岛市",211402:"连山区",211403:"龙港区",211404:"南票区",211421:"绥中县",211422:"建昌县",211481:"兴城市",211482:"其它区",220000:"吉林省",220100:"长春市",220102:"南关区",220103:"宽城区",220104:"朝阳区",220105:"二道区",220106:"绿园区",220112:"双阳区",220122:"农安县",220181:"九台市",220182:"榆树市",220183:"德惠市",220188:"其它区",220200:"吉林市",220202:"昌邑区",220203:"龙潭区",220204:"船营区",220211:"丰满区",220221:"永吉县",220281:"蛟河市",220282:"桦甸市",220283:"舒兰市",220284:"磐石市",220285:"其它区",220300:"四平市",220302:"铁西区",220303:"铁东区",220322:"梨树县",220323:"伊通满族自治县",220381:"公主岭市",220382:"双辽市",220383:"其它区",220400:"辽源市",220402:"龙山区",220403:"西安区",220421:"东丰县",220422:"东辽县",220423:"其它区",220500:"通化市",220502:"东昌区",220503:"二道江区",220521:"通化县",220523:"辉南县",220524:"柳河县",220581:"梅河口市",220582:"集安市",220583:"其它区",220600:"白山市",220602:"浑江区",220621:"抚松县",220622:"靖宇县",220623:"长白朝鲜族自治县",220625:"江源区",220681:"临江市",220682:"其它区",220700:"松原市",220702:"宁江区",220721:"前郭尔罗斯蒙古族自治县",220722:"长岭县",220723:"乾安县",220724:"扶余市",220725:"其它区",220800:"白城市",220802:"洮北区",220821:"镇赉县",220822:"通榆县",220881:"洮南市",220882:"大安市",220883:"其它区",222400:"延边朝鲜族自治州",222401:"延吉市",222402:"图们市",222403:"敦化市",222404:"珲春市",222405:"龙井市",222406:"和龙市",222424:"汪清县",222426:"安图县",222427:"其它区",230000:"黑龙江省",230100:"哈尔滨市",230102:"道里区",230103:"南岗区",230104:"道外区",230106:"香坊区",230108:"平房区",230109:"松北区",230111:"呼兰区",230123:"依兰县",230124:"方正县",230125:"宾县",230126:"巴彦县",230127:"木兰县",230128:"通河县",230129:"延寿县",230181:"阿城区",230182:"双城市",230183:"尚志市",230184:"五常市",230186:"其它区",230200:"齐齐哈尔市",230202:"龙沙区",230203:"建华区",230204:"铁锋区",230205:"昂昂溪区",230206:"富拉尔基区",230207:"碾子山区",230208:"梅里斯达斡尔族区",230221:"龙江县",230223:"依安县",230224:"泰来县",230225:"甘南县",230227:"富裕县",230229:"克山县",230230:"克东县",230231:"拜泉县",230281:"讷河市",230282:"其它区",230300:"鸡西市",230302:"鸡冠区",230303:"恒山区",230304:"滴道区",230305:"梨树区",230306:"城子河区",230307:"麻山区",230321:"鸡东县",230381:"虎林市",230382:"密山市",230383:"其它区",230400:"鹤岗市",230402:"向阳区",230403:"工农区",230404:"南山区",230405:"兴安区",230406:"东山区",230407:"兴山区",230421:"萝北县",230422:"绥滨县",230423:"其它区",230500:"双鸭山市",230502:"尖山区",230503:"岭东区",230505:"四方台区",230506:"宝山区",230521:"集贤县",230522:"友谊县",230523:"宝清县",230524:"饶河县",230525:"其它区",230600:"大庆市",230602:"萨尔图区",230603:"龙凤区",230604:"让胡路区",230605:"红岗区",230606:"大同区",230621:"肇州县",230622:"肇源县",230623:"林甸县",230624:"杜尔伯特蒙古族自治县",230625:"其它区",230700:"伊春市",230702:"伊春区",230703:"南岔区",230704:"友好区",230705:"西林区",230706:"翠峦区",230707:"新青区",230708:"美溪区",230709:"金山屯区",230710:"五营区",230711:"乌马河区",230712:"汤旺河区",230713:"带岭区",230714:"乌伊岭区",230715:"红星区",230716:"上甘岭区",230722:"嘉荫县",230781:"铁力市",230782:"其它区",230800:"佳木斯市",230803:"向阳区",230804:"前进区",230805:"东风区",230811:"郊区",230822:"桦南县",230826:"桦川县",230828:"汤原县",230833:"抚远县",230881:"同江市",230882:"富锦市",230883:"其它区",230900:"七台河市",230902:"新兴区",230903:"桃山区",230904:"茄子河区",230921:"勃利县",230922:"其它区",231000:"牡丹江市",231002:"东安区",231003:"阳明区",231004:"爱民区",231005:"西安区",231024:"东宁县",231025:"林口县",231081:"绥芬河市",231083:"海林市",231084:"宁安市",231085:"穆棱市",231086:"其它区",231100:"黑河市",231102:"爱辉区",231121:"嫩江县",231123:"逊克县",231124:"孙吴县",231181:"北安市",231182:"五大连池市",231183:"其它区",231200:"绥化市",231202:"北林区",231221:"望奎县",231222:"兰西县",231223:"青冈县",231224:"庆安县",231225:"明水县",231226:"绥棱县",231281:"安达市",231282:"肇东市",231283:"海伦市",231284:"其它区",232700:"大兴安岭地区",232702:"松岭区",232703:"新林区",232704:"呼中区",232721:"呼玛县",232722:"塔河县",232723:"漠河县",232724:"加格达奇区",232725:"其它区",310000:"上海",310100:"上海市",310101:"黄浦区",310104:"徐汇区",310105:"长宁区",310106:"静安区",310107:"普陀区",310108:"闸北区",310109:"虹口区",310110:"杨浦区",310112:"闵行区",310113:"宝山区",310114:"嘉定区",310115:"浦东新区",310116:"金山区",310117:"松江区",310118:"青浦区",310120:"奉贤区",310230:"崇明县",310231:"其它区",320000:"江苏省",320100:"南京市",320102:"玄武区",320104:"秦淮区",320105:"建邺区",320106:"鼓楼区",320111:"浦口区",320113:"栖霞区",320114:"雨花台区",320115:"江宁区",320116:"六合区",320124:"溧水区",320125:"高淳区",320126:"其它区",320200:"无锡市",320202:"崇安区",320203:"南长区",320204:"北塘区",320205:"锡山区",320206:"惠山区",320211:"滨湖区",320281:"江阴市",320282:"宜兴市",320297:"其它区",320300:"徐州市",320302:"鼓楼区",320303:"云龙区",320305:"贾汪区",320311:"泉山区",320321:"丰县",320322:"沛县",320323:"铜山区",320324:"睢宁县",320381:"新沂市",320382:"邳州市",320383:"其它区",320400:"常州市",320402:"天宁区",320404:"钟楼区",320405:"戚墅堰区",320411:"新北区",320412:"武进区",320481:"溧阳市",320482:"金坛市",320483:"其它区",320500:"苏州市",320505:"虎丘区",320506:"吴中区",320507:"相城区",320508:"姑苏区",320581:"常熟市",320582:"张家港市",320583:"昆山市",320584:"吴江区",320585:"太仓市",320596:"其它区",320600:"南通市",320602:"崇川区",320611:"港闸区",320612:"通州区",320621:"海安县",320623:"如东县",320681:"启东市",320682:"如皋市",320684:"海门市",320694:"其它区",320700:"连云港市",320703:"连云区",320705:"新浦区",320706:"海州区",320721:"赣榆县",320722:"东海县",320723:"灌云县",320724:"灌南县",320725:"其它区",320800:"淮安市",320802:"清河区",320803:"淮安区",320804:"淮阴区",320811:"清浦区",320826:"涟水县",320829:"洪泽县",320830:"盱眙县",320831:"金湖县",320832:"其它区",320900:"盐城市",320902:"亭湖区",320903:"盐都区",320921:"响水县",320922:"滨海县",320923:"阜宁县",320924:"射阳县",320925:"建湖县",320981:"东台市",320982:"大丰市",320983:"其它区",321000:"扬州市",321002:"广陵区",321003:"邗江区",321023:"宝应县",321081:"仪征市",321084:"高邮市",321088:"江都区",321093:"其它区",321100:"镇江市",321102:"京口区",321111:"润州区",321112:"丹徒区",321181:"丹阳市",321182:"扬中市",321183:"句容市",321184:"其它区",321200:"泰州市",321202:"海陵区",321203:"高港区",321281:"兴化市",321282:"靖江市",321283:"泰兴市",321284:"姜堰区",321285:"其它区",321300:"宿迁市",321302:"宿城区",321311:"宿豫区",321322:"沭阳县",321323:"泗阳县",321324:"泗洪县",321325:"其它区",330000:"浙江省",330100:"杭州市",330102:"上城区",330103:"下城区",330104:"江干区",330105:"拱墅区",330106:"西湖区",330108:"滨江区",330109:"萧山区",330110:"余杭区",330122:"桐庐县",330127:"淳安县",330182:"建德市",330183:"富阳市",330185:"临安市",330186:"其它区",330200:"宁波市",330203:"海曙区",330204:"江东区",330205:"江北区",330206:"北仑区",330211:"镇海区",330212:"鄞州区",330225:"象山县",330226:"宁海县",330281:"余姚市",330282:"慈溪市",330283:"奉化市",330284:"其它区",330300:"温州市",330302:"鹿城区",330303:"龙湾区",330304:"瓯海区",330322:"洞头县",330324:"永嘉县",330326:"平阳县",330327:"苍南县",330328:"文成县",330329:"泰顺县",330381:"瑞安市",330382:"乐清市",330383:"其它区",330400:"嘉兴市",330402:"南湖区",330411:"秀洲区",330421:"嘉善县",330424:"海盐县",330481:"海宁市",330482:"平湖市",330483:"桐乡市",330484:"其它区",330500:"湖州市",330502:"吴兴区",330503:"南浔区",330521:"德清县",330522:"长兴县",330523:"安吉县",330524:"其它区",330600:"绍兴市",330602:"越城区",330621:"绍兴县",330624:"新昌县",330681:"诸暨市",330682:"上虞市",330683:"嵊州市",330684:"其它区",330700:"金华市",330702:"婺城区",330703:"金东区",330723:"武义县",330726:"浦江县",330727:"磐安县",330781:"兰溪市",330782:"义乌市",330783:"东阳市",330784:"永康市",330785:"其它区",330800:"衢州市",330802:"柯城区",330803:"衢江区",330822:"常山县",330824:"开化县",330825:"龙游县",330881:"江山市",330882:"其它区",330900:"舟山市",330902:"定海区",330903:"普陀区",330921:"岱山县",330922:"嵊泗县",330923:"其它区",331000:"台州市",331002:"椒江区",331003:"黄岩区",331004:"路桥区",331021:"玉环县",331022:"三门县",331023:"天台县",331024:"仙居县",331081:"温岭市",331082:"临海市",331083:"其它区",331100:"丽水市",331102:"莲都区",331121:"青田县",331122:"缙云县",331123:"遂昌县",331124:"松阳县",331125:"云和县",331126:"庆元县",331127:"景宁畲族自治县",331181:"龙泉市",331182:"其它区",340000:"安徽省",340100:"合肥市",340102:"瑶海区",340103:"庐阳区",340104:"蜀山区",340111:"包河区",340121:"长丰县",340122:"肥东县",340123:"肥西县",340192:"其它区",340200:"芜湖市",340202:"镜湖区",340203:"弋江区",340207:"鸠江区",340208:"三山区",340221:"芜湖县",340222:"繁昌县",340223:"南陵县",340224:"其它区",340300:"蚌埠市",340302:"龙子湖区",340303:"蚌山区",340304:"禹会区",340311:"淮上区",340321:"怀远县",340322:"五河县",340323:"固镇县",340324:"其它区",340400:"淮南市",340402:"大通区",340403:"田家庵区",340404:"谢家集区",340405:"八公山区",340406:"潘集区",340421:"凤台县",340422:"其它区",340500:"马鞍山市",340503:"花山区",340504:"雨山区",340506:"博望区",340521:"当涂县",340522:"其它区",340600:"淮北市",340602:"杜集区",340603:"相山区",340604:"烈山区",340621:"濉溪县",340622:"其它区",340700:"铜陵市",340702:"铜官山区",340703:"狮子山区",340711:"郊区",340721:"铜陵县",340722:"其它区",340800:"安庆市",340802:"迎江区",340803:"大观区",340811:"宜秀区",340822:"怀宁县",340823:"枞阳县",340824:"潜山县",340825:"太湖县",340826:"宿松县",340827:"望江县",340828:"岳西县",340881:"桐城市",340882:"其它区",341000:"黄山市",341002:"屯溪区",341003:"黄山区",341004:"徽州区",341021:"歙县",341022:"休宁县",341023:"黟县",341024:"祁门县",341025:"其它区",341100:"滁州市",341102:"琅琊区",341103:"南谯区",341122:"来安县",341124:"全椒县",341125:"定远县",341126:"凤阳县",341181:"天长市",341182:"明光市",341183:"其它区",341200:"阜阳市",341202:"颍州区",341203:"颍东区",341204:"颍泉区",341221:"临泉县",341222:"太和县",341225:"阜南县",341226:"颍上县",341282:"界首市",341283:"其它区",341300:"宿州市",341302:"埇桥区",341321:"砀山县",341322:"萧县",341323:"灵璧县",341324:"泗县",341325:"其它区",341400:"巢湖市",341421:"庐江县",341422:"无为县",341423:"含山县",341424:"和县",341500:"六安市",341502:"金安区",341503:"裕安区",341521:"寿县",341522:"霍邱县",341523:"舒城县",341524:"金寨县",341525:"霍山县",341526:"其它区",341600:"亳州市",341602:"谯城区",341621:"涡阳县",341622:"蒙城县",341623:"利辛县",341624:"其它区",341700:"池州市",341702:"贵池区",341721:"东至县",341722:"石台县",341723:"青阳县",341724:"其它区",341800:"宣城市",341802:"宣州区",341821:"郎溪县",341822:"广德县",341823:"泾县",341824:"绩溪县",341825:"旌德县",341881:"宁国市",341882:"其它区",350000:"福建省",350100:"福州市",350102:"鼓楼区",350103:"台江区",350104:"仓山区",350105:"马尾区",350111:"晋安区",350121:"闽侯县",350122:"连江县",350123:"罗源县",350124:"闽清县",350125:"永泰县",350128:"平潭县",350181:"福清市",350182:"长乐市",350183:"其它区",350200:"厦门市",350203:"思明区",350205:"海沧区",350206:"湖里区",350211:"集美区",350212:"同安区",350213:"翔安区",350214:"其它区",350300:"莆田市",350302:"城厢区",350303:"涵江区",350304:"荔城区",350305:"秀屿区",350322:"仙游县",350323:"其它区",350400:"三明市",350402:"梅列区",350403:"三元区",350421:"明溪县",350423:"清流县",350424:"宁化县",350425:"大田县",350426:"尤溪县",350427:"沙县",350428:"将乐县",350429:"泰宁县",350430:"建宁县",350481:"永安市",350482:"其它区",350500:"泉州市",350502:"鲤城区",350503:"丰泽区",350504:"洛江区",350505:"泉港区",350521:"惠安县",350524:"安溪县",350525:"永春县",350526:"德化县",350527:"金门县",350581:"石狮市",350582:"晋江市",350583:"南安市",350584:"其它区",350600:"漳州市",350602:"芗城区",350603:"龙文区",350622:"云霄县",350623:"漳浦县",350624:"诏安县",350625:"长泰县",350626:"东山县",350627:"南靖县",350628:"平和县",350629:"华安县",350681:"龙海市",350682:"其它区",350700:"南平市",350702:"延平区",350721:"顺昌县",350722:"浦城县",350723:"光泽县",350724:"松溪县",350725:"政和县",350781:"邵武市",350782:"武夷山市",350783:"建瓯市",350784:"建阳市",350785:"其它区",350800:"龙岩市",350802:"新罗区",350821:"长汀县",350822:"永定县",350823:"上杭县",350824:"武平县",350825:"连城县",350881:"漳平市",350882:"其它区",350900:"宁德市",350902:"蕉城区",350921:"霞浦县",350922:"古田县",350923:"屏南县",350924:"寿宁县",350925:"周宁县",350926:"柘荣县",350981:"福安市",350982:"福鼎市",350983:"其它区",360000:"江西省",360100:"南昌市",360102:"东湖区",360103:"西湖区",360104:"青云谱区",360105:"湾里区",360111:"青山湖区",360121:"南昌县",360122:"新建县",360123:"安义县",360124:"进贤县",360128:"其它区",360200:"景德镇市",360202:"昌江区",360203:"珠山区",360222:"浮梁县",360281:"乐平市",360282:"其它区",360300:"萍乡市",360302:"安源区",360313:"湘东区",360321:"莲花县",360322:"上栗县",360323:"芦溪县",360324:"其它区",360400:"九江市",360402:"庐山区",360403:"浔阳区",360421:"九江县",360423:"武宁县",360424:"修水县",360425:"永修县",360426:"德安县",360427:"星子县",360428:"都昌县",360429:"湖口县",360430:"彭泽县",360481:"瑞昌市",360482:"其它区",360483:"共青城市",360500:"新余市",360502:"渝水区",360521:"分宜县",360522:"其它区",360600:"鹰潭市",360602:"月湖区",360622:"余江县",360681:"贵溪市",360682:"其它区",360700:"赣州市",360702:"章贡区",360721:"赣县",360722:"信丰县",360723:"大余县",360724:"上犹县",360725:"崇义县",360726:"安远县",360727:"龙南县",360728:"定南县",360729:"全南县",360730:"宁都县",360731:"于都县",360732:"兴国县",360733:"会昌县",360734:"寻乌县",360735:"石城县",360781:"瑞金市",360782:"南康市",360783:"其它区",360800:"吉安市",360802:"吉州区",360803:"青原区",360821:"吉安县",360822:"吉水县",360823:"峡江县",360824:"新干县",360825:"永丰县",360826:"泰和县",360827:"遂川县",360828:"万安县",360829:"安福县",360830:"永新县",360881:"井冈山市",360882:"其它区",360900:"宜春市",360902:"袁州区",360921:"奉新县",360922:"万载县",360923:"上高县",360924:"宜丰县",360925:"靖安县",360926:"铜鼓县",360981:"丰城市",360982:"樟树市",360983:"高安市",360984:"其它区",361000:"抚州市",361002:"临川区",361021:"南城县",361022:"黎川县",361023:"南丰县",361024:"崇仁县",361025:"乐安县",361026:"宜黄县",361027:"金溪县",361028:"资溪县",361029:"东乡县",361030:"广昌县",361031:"其它区",361100:"上饶市",361102:"信州区",361121:"上饶县",361122:"广丰县",361123:"玉山县",361124:"铅山县",361125:"横峰县",361126:"弋阳县",361127:"余干县",361128:"鄱阳县",361129:"万年县",361130:"婺源县",361181:"德兴市",361182:"其它区",370000:"山东省",370100:"济南市",370102:"历下区",370103:"市中区",370104:"槐荫区",370105:"天桥区",370112:"历城区",370113:"长清区",370124:"平阴县",370125:"济阳县",370126:"商河县",370181:"章丘市",370182:"其它区",370200:"青岛市",370202:"市南区",370203:"市北区",370211:"黄岛区",370212:"崂山区",370213:"李沧区",370214:"城阳区",370281:"胶州市",370282:"即墨市",370283:"平度市",370285:"莱西市",370286:"其它区",370300:"淄博市",370302:"淄川区",370303:"张店区",370304:"博山区",370305:"临淄区",370306:"周村区",370321:"桓台县",370322:"高青县",370323:"沂源县",370324:"其它区",370400:"枣庄市",370402:"市中区",370403:"薛城区",370404:"峄城区",370405:"台儿庄区",370406:"山亭区",370481:"滕州市",370482:"其它区",370500:"东营市",370502:"东营区",370503:"河口区",370521:"垦利县",370522:"利津县",370523:"广饶县",370591:"其它区",370600:"烟台市",370602:"芝罘区",370611:"福山区",370612:"牟平区",370613:"莱山区",370634:"长岛县",370681:"龙口市",370682:"莱阳市",370683:"莱州市",370684:"蓬莱市",370685:"招远市",370686:"栖霞市",370687:"海阳市",370688:"其它区",370700:"潍坊市",370702:"潍城区",370703:"寒亭区",370704:"坊子区",370705:"奎文区",370724:"临朐县",370725:"昌乐县",370781:"青州市",370782:"诸城市",370783:"寿光市",370784:"安丘市",370785:"高密市",370786:"昌邑市",370787:"其它区",370800:"济宁市",370802:"市中区",370811:"任城区",370826:"微山县",370827:"鱼台县",370828:"金乡县",370829:"嘉祥县",370830:"汶上县",370831:"泗水县",370832:"梁山县",370881:"曲阜市",370882:"兖州市",370883:"邹城市",370884:"其它区",370900:"泰安市",370902:"泰山区",370903:"岱岳区",370921:"宁阳县",370923:"东平县",370982:"新泰市",370983:"肥城市",370984:"其它区",371000:"威海市",371002:"环翠区",371081:"文登市",371082:"荣成市",371083:"乳山市",371084:"其它区",371100:"日照市",371102:"东港区",371103:"岚山区",371121:"五莲县",371122:"莒县",371123:"其它区",371200:"莱芜市",371202:"莱城区",371203:"钢城区",371204:"其它区",371300:"临沂市",371302:"兰山区",371311:"罗庄区",371312:"河东区",371321:"沂南县",371322:"郯城县",371323:"沂水县",371324:"苍山县",371325:"费县",371326:"平邑县",371327:"莒南县",371328:"蒙阴县",371329:"临沭县",371330:"其它区",371400:"德州市",371402:"德城区",371421:"陵县",371422:"宁津县",371423:"庆云县",371424:"临邑县",371425:"齐河县",371426:"平原县",371427:"夏津县",371428:"武城县",371481:"乐陵市",371482:"禹城市",371483:"其它区",371500:"聊城市",371502:"东昌府区",371521:"阳谷县",371522:"莘县",371523:"茌平县",371524:"东阿县",371525:"冠县",371526:"高唐县",371581:"临清市",371582:"其它区",371600:"滨州市",371602:"滨城区",371621:"惠民县",371622:"阳信县",371623:"无棣县",371624:"沾化县",371625:"博兴县",371626:"邹平县",371627:"其它区",371700:"菏泽市",371702:"牡丹区",371721:"曹县",371722:"单县",371723:"成武县",371724:"巨野县",371725:"郓城县",371726:"鄄城县",371727:"定陶县",371728:"东明县",371729:"其它区",410000:"河南省",410100:"郑州市",410102:"中原区",410103:"二七区",410104:"管城回族区",410105:"金水区",410106:"上街区",410108:"惠济区",410122:"中牟县",410181:"巩义市",410182:"荥阳市",410183:"新密市",410184:"新郑市",410185:"登封市",410188:"其它区",410200:"开封市",410202:"龙亭区",410203:"顺河回族区",410204:"鼓楼区",410205:"禹王台区",410211:"金明区",410221:"杞县",410222:"通许县",410223:"尉氏县",410224:"开封县",410225:"兰考县",410226:"其它区",410300:"洛阳市",410302:"老城区",410303:"西工区",410304:"瀍河回族区",410305:"涧西区",410306:"吉利区",410307:"洛龙区",410322:"孟津县",410323:"新安县",410324:"栾川县",410325:"嵩县",410326:"汝阳县",410327:"宜阳县",410328:"洛宁县",410329:"伊川县",410381:"偃师市",410400:"平顶山市",410402:"新华区",410403:"卫东区",410404:"石龙区",410411:"湛河区",410421:"宝丰县",410422:"叶县",410423:"鲁山县",410425:"郏县",410481:"舞钢市",410482:"汝州市",410483:"其它区",410500:"安阳市",410502:"文峰区",410503:"北关区",410505:"殷都区",410506:"龙安区",410522:"安阳县",410523:"汤阴县",410526:"滑县",410527:"内黄县",410581:"林州市",410582:"其它区",410600:"鹤壁市",410602:"鹤山区",410603:"山城区",410611:"淇滨区",410621:"浚县",410622:"淇县",410623:"其它区",410700:"新乡市",410702:"红旗区",410703:"卫滨区",410704:"凤泉区",410711:"牧野区",410721:"新乡县",410724:"获嘉县",410725:"原阳县",410726:"延津县",410727:"封丘县",410728:"长垣县",410781:"卫辉市",410782:"辉县市",410783:"其它区",410800:"焦作市",410802:"解放区",410803:"中站区",410804:"马村区",410811:"山阳区",410821:"修武县",410822:"博爱县",410823:"武陟县",410825:"温县",410881:"济源市",410882:"沁阳市",410883:"孟州市",410884:"其它区",410900:"濮阳市",410902:"华龙区",410922:"清丰县",410923:"南乐县",410926:"范县",410927:"台前县",410928:"濮阳县",410929:"其它区",411000:"许昌市",411002:"魏都区",411023:"许昌县",411024:"鄢陵县",411025:"襄城县",411081:"禹州市",411082:"长葛市",411083:"其它区",411100:"漯河市",411102:"源汇区",411103:"郾城区",411104:"召陵区",411121:"舞阳县",411122:"临颍县",411123:"其它区",411200:"三门峡市",411202:"湖滨区",411221:"渑池县",411222:"陕县",411224:"卢氏县",411281:"义马市",411282:"灵宝市",411283:"其它区",411300:"南阳市",411302:"宛城区",411303:"卧龙区",411321:"南召县",411322:"方城县",411323:"西峡县",411324:"镇平县",411325:"内乡县",411326:"淅川县",411327:"社旗县",411328:"唐河县",411329:"新野县",411330:"桐柏县",411381:"邓州市",411382:"其它区",411400:"商丘市",411402:"梁园区",411403:"睢阳区",411421:"民权县",411422:"睢县",411423:"宁陵县",411424:"柘城县",411425:"虞城县",411426:"夏邑县",411481:"永城市",411482:"其它区",411500:"信阳市",411502:"浉河区",411503:"平桥区",411521:"罗山县",411522:"光山县",411523:"新县",411524:"商城县",411525:"固始县",411526:"潢川县",411527:"淮滨县",411528:"息县",411529:"其它区",411600:"周口市",411602:"川汇区",411621:"扶沟县",411622:"西华县",411623:"商水县",411624:"沈丘县",411625:"郸城县",411626:"淮阳县",411627:"太康县",411628:"鹿邑县",411681:"项城市",411682:"其它区",411700:"驻马店市",411702:"驿城区",411721:"西平县",411722:"上蔡县",411723:"平舆县",411724:"正阳县",411725:"确山县",411726:"泌阳县",411727:"汝南县",411728:"遂平县",411729:"新蔡县",411730:"其它区",420000:"湖北省",420100:"武汉市",420102:"江岸区",420103:"江汉区",420104:"硚口区",420105:"汉阳区",420106:"武昌区",420107:"青山区",420111:"洪山区",420112:"东西湖区",420113:"汉南区",420114:"蔡甸区",420115:"江夏区",420116:"黄陂区",420117:"新洲区",420118:"其它区",420200:"黄石市",420202:"黄石港区",420203:"西塞山区",420204:"下陆区",420205:"铁山区",420222:"阳新县",420281:"大冶市",420282:"其它区",420300:"十堰市",420302:"茅箭区",420303:"张湾区",420321:"郧县",420322:"郧西县",420323:"竹山县",420324:"竹溪县",420325:"房县",420381:"丹江口市",420383:"其它区",420500:"宜昌市",420502:"西陵区",420503:"伍家岗区",420504:"点军区",420505:"猇亭区",420506:"夷陵区",420525:"远安县",420526:"兴山县",420527:"秭归县",420528:"长阳土家族自治县",420529:"五峰土家族自治县",420581:"宜都市",420582:"当阳市",420583:"枝江市",420584:"其它区",420600:"襄阳市",420602:"襄城区",420606:"樊城区",420607:"襄州区",420624:"南漳县",420625:"谷城县",420626:"保康县",420682:"老河口市",420683:"枣阳市",420684:"宜城市",420685:"其它区",420700:"鄂州市",420702:"梁子湖区",420703:"华容区",420704:"鄂城区",420705:"其它区",420800:"荆门市",420802:"东宝区",420804:"掇刀区",420821:"京山县",420822:"沙洋县",420881:"钟祥市",420882:"其它区",420900:"孝感市",420902:"孝南区",420921:"孝昌县",420922:"大悟县",420923:"云梦县",420981:"应城市",420982:"安陆市",420984:"汉川市",420985:"其它区",421000:"荆州市",421002:"沙市区",421003:"荆州区",421022:"公安县",421023:"监利县",421024:"江陵县",421081:"石首市",421083:"洪湖市",421087:"松滋市",421088:"其它区",421100:"黄冈市",421102:"黄州区",421121:"团风县",421122:"红安县",421123:"罗田县",421124:"英山县",421125:"浠水县",421126:"蕲春县",421127:"黄梅县",421181:"麻城市",421182:"武穴市",421183:"其它区",421200:"咸宁市",421202:"咸安区",421221:"嘉鱼县",421222:"通城县",421223:"崇阳县",421224:"通山县",421281:"赤壁市",421283:"其它区",421300:"随州市",421302:"曾都区",421321:"随县",421381:"广水市",421382:"其它区",422800:"恩施土家族苗族自治州",422801:"恩施市",422802:"利川市",422822:"建始县",422823:"巴东县",422825:"宣恩县",422826:"咸丰县",422827:"来凤县",422828:"鹤峰县",422829:"其它区",429004:"仙桃市",429005:"潜江市",429006:"天门市",429021:"神农架林区",430000:"湖南省",430100:"长沙市",430102:"芙蓉区",430103:"天心区",430104:"岳麓区",430105:"开福区",430111:"雨花区",430121:"长沙县",430122:"望城区",430124:"宁乡县",430181:"浏阳市",430182:"其它区",430200:"株洲市",430202:"荷塘区",430203:"芦淞区",430204:"石峰区",430211:"天元区",430221:"株洲县",430223:"攸县",430224:"茶陵县",430225:"炎陵县",430281:"醴陵市",430282:"其它区",430300:"湘潭市",430302:"雨湖区",430304:"岳塘区",430321:"湘潭县",430381:"湘乡市",430382:"韶山市",430383:"其它区",430400:"衡阳市",430405:"珠晖区",430406:"雁峰区",430407:"石鼓区",430408:"蒸湘区",430412:"南岳区",430421:"衡阳县",430422:"衡南县",430423:"衡山县",430424:"衡东县",430426:"祁东县",430481:"耒阳市",430482:"常宁市",430483:"其它区",430500:"邵阳市",430502:"双清区",430503:"大祥区",430511:"北塔区",430521:"邵东县",430522:"新邵县",430523:"邵阳县",430524:"隆回县",430525:"洞口县",430527:"绥宁县",430528:"新宁县",430529:"城步苗族自治县",430581:"武冈市",430582:"其它区",430600:"岳阳市",430602:"岳阳楼区",430603:"云溪区",430611:"君山区",430621:"岳阳县",430623:"华容县",430624:"湘阴县",430626:"平江县",430681:"汨罗市",430682:"临湘市",430683:"其它区",430700:"常德市",430702:"武陵区",430703:"鼎城区",430721:"安乡县",430722:"汉寿县",430723:"澧县",430724:"临澧县",430725:"桃源县",430726:"石门县",430781:"津市市",430782:"其它区",430800:"张家界市",430802:"永定区",430811:"武陵源区",430821:"慈利县",430822:"桑植县",430823:"其它区",430900:"益阳市",430902:"资阳区",430903:"赫山区",430921:"南县",430922:"桃江县",430923:"安化县",430981:"沅江市",430982:"其它区",431000:"郴州市",431002:"北湖区",431003:"苏仙区",431021:"桂阳县",431022:"宜章县",431023:"永兴县",431024:"嘉禾县",431025:"临武县",431026:"汝城县",431027:"桂东县",431028:"安仁县",431081:"资兴市",431082:"其它区",431100:"永州市",431102:"零陵区",431103:"冷水滩区",431121:"祁阳县",431122:"东安县",431123:"双牌县",431124:"道县",431125:"江永县",431126:"宁远县",431127:"蓝山县",431128:"新田县",431129:"江华瑶族自治县",431130:"其它区",431200:"怀化市",431202:"鹤城区",431221:"中方县",431222:"沅陵县",431223:"辰溪县",431224:"溆浦县",431225:"会同县",431226:"麻阳苗族自治县",431227:"新晃侗族自治县",431228:"芷江侗族自治县",431229:"靖州苗族侗族自治县",431230:"通道侗族自治县",431281:"洪江市",431282:"其它区",431300:"娄底市",431302:"娄星区",431321:"双峰县",431322:"新化县",431381:"冷水江市",431382:"涟源市",431383:"其它区",433100:"湘西土家族苗族自治州",433101:"吉首市",433122:"泸溪县",433123:"凤凰县",433124:"花垣县",433125:"保靖县",433126:"古丈县",433127:"永顺县",433130:"龙山县",433131:"其它区",440000:"广东省",440100:"广州市",440103:"荔湾区",440104:"越秀区",440105:"海珠区",440106:"天河区",440111:"白云区",440112:"黄埔区",440113:"番禺区",440114:"花都区",440115:"南沙区",440116:"萝岗区",440183:"增城市",440184:"从化市",440189:"其它区",440200:"韶关市",440203:"武江区",440204:"浈江区",440205:"曲江区",440222:"始兴县",440224:"仁化县",440229:"翁源县",440232:"乳源瑶族自治县",440233:"新丰县",440281:"乐昌市",440282:"南雄市",440283:"其它区",440300:"深圳市",440303:"罗湖区",440304:"福田区",440305:"南山区",440306:"宝安区",440307:"龙岗区",440308:"盐田区",440309:"其它区",440320:"光明新区",440321:"坪山新区",440322:"大鹏新区",440323:"龙华新区",440400:"珠海市",440402:"香洲区",440403:"斗门区",440404:"金湾区",440488:"其它区",440500:"汕头市",440507:"龙湖区",440511:"金平区",440512:"濠江区",440513:"潮阳区",440514:"潮南区",440515:"澄海区",440523:"南澳县",440524:"其它区",440600:"佛山市",440604:"禅城区",440605:"南海区",440606:"顺德区",440607:"三水区",440608:"高明区",440609:"其它区",440700:"江门市",440703:"蓬江区",440704:"江海区",440705:"新会区",440781:"台山市",440783:"开平市",440784:"鹤山市",440785:"恩平市",440786:"其它区",440800:"湛江市",440802:"赤坎区",440803:"霞山区",440804:"坡头区",440811:"麻章区",440823:"遂溪县",440825:"徐闻县",440881:"廉江市",440882:"雷州市",440883:"吴川市",440884:"其它区",440900:"茂名市",440902:"茂南区",440903:"茂港区",440923:"电白县",440981:"高州市",440982:"化州市",440983:"信宜市",440984:"其它区",441200:"肇庆市",441202:"端州区",441203:"鼎湖区",441223:"广宁县",441224:"怀集县",441225:"封开县",441226:"德庆县",441283:"高要市",441284:"四会市",441285:"其它区",441300:"惠州市",441302:"惠城区",441303:"惠阳区",441322:"博罗县",441323:"惠东县",441324:"龙门县",441325:"其它区",441400:"梅州市",441402:"梅江区",441421:"梅县",441422:"大埔县",441423:"丰顺县",441424:"五华县",441426:"平远县",441427:"蕉岭县",441481:"兴宁市",441482:"其它区",441500:"汕尾市",441502:"城区",441521:"海丰县",441523:"陆河县",441581:"陆丰市",441582:"其它区",441600:"河源市",441602:"源城区",441621:"紫金县",441622:"龙川县",441623:"连平县",441624:"和平县",441625:"东源县",441626:"其它区",441700:"阳江市",441702:"江城区",441721:"阳西县",441723:"阳东县",441781:"阳春市",441782:"其它区",441800:"清远市",441802:"清城区",441821:"佛冈县",441823:"阳山县",441825:"连山壮族瑶族自治县",441826:"连南瑶族自治县",441827:"清新区",441881:"英德市",441882:"连州市",441883:"其它区",441900:"东莞市",442000:"中山市",442101:"东沙群岛",445100:"潮州市",445102:"湘桥区",445121:"潮安区",445122:"饶平县",445186:"其它区",445200:"揭阳市",445202:"榕城区",445221:"揭东区",445222:"揭西县",445224:"惠来县",445281:"普宁市",445285:"其它区",445300:"云浮市",445302:"云城区",445321:"新兴县",445322:"郁南县",445323:"云安县",445381:"罗定市",445382:"其它区",450000:"广西壮族自治区",450100:"南宁市",450102:"兴宁区",450103:"青秀区",450105:"江南区",450107:"西乡塘区",450108:"良庆区",450109:"邕宁区",450122:"武鸣县",450123:"隆安县",450124:"马山县",450125:"上林县",450126:"宾阳县",450127:"横县",450128:"其它区",450200:"柳州市",450202:"城中区",450203:"鱼峰区",450204:"柳南区",450205:"柳北区",450221:"柳江县",450222:"柳城县",450223:"鹿寨县",450224:"融安县",450225:"融水苗族自治县",450226:"三江侗族自治县",450227:"其它区",450300:"桂林市",450302:"秀峰区",450303:"叠彩区",450304:"象山区",450305:"七星区",450311:"雁山区",450321:"阳朔县",450322:"临桂区",450323:"灵川县",450324:"全州县",450325:"兴安县",450326:"永福县",450327:"灌阳县",450328:"龙胜各族自治县",450329:"资源县",450330:"平乐县",450331:"荔浦县",450332:"恭城瑶族自治县",450333:"其它区",450400:"梧州市",450403:"万秀区",450405:"长洲区",450406:"龙圩区",450421:"苍梧县",450422:"藤县",450423:"蒙山县",450481:"岑溪市",450482:"其它区",450500:"北海市",450502:"海城区",450503:"银海区",450512:"铁山港区",450521:"合浦县",450522:"其它区",450600:"防城港市",450602:"港口区",450603:"防城区",450621:"上思县",450681:"东兴市",450682:"其它区",450700:"钦州市",450702:"钦南区",450703:"钦北区",450721:"灵山县",450722:"浦北县",450723:"其它区",450800:"贵港市",450802:"港北区",450803:"港南区",450804:"覃塘区",450821:"平南县",450881:"桂平市",450882:"其它区",450900:"玉林市",450902:"玉州区",450903:"福绵区",450921:"容县",450922:"陆川县",450923:"博白县",450924:"兴业县",450981:"北流市",450982:"其它区",451000:"百色市",451002:"右江区",451021:"田阳县",451022:"田东县",451023:"平果县",451024:"德保县",451025:"靖西县",451026:"那坡县",451027:"凌云县",451028:"乐业县",451029:"田林县",451030:"西林县",451031:"隆林各族自治县",451032:"其它区",451100:"贺州市",451102:"八步区",451119:"平桂管理区",451121:"昭平县",451122:"钟山县",451123:"富川瑶族自治县",451124:"其它区",451200:"河池市",451202:"金城江区",451221:"南丹县",451222:"天峨县",451223:"凤山县",451224:"东兰县",451225:"罗城仫佬族自治县",451226:"环江毛南族自治县",451227:"巴马瑶族自治县",451228:"都安瑶族自治县",451229:"大化瑶族自治县",451281:"宜州市",451282:"其它区",451300:"来宾市",451302:"兴宾区",451321:"忻城县",451322:"象州县",451323:"武宣县",451324:"金秀瑶族自治县",451381:"合山市",451382:"其它区",451400:"崇左市",451402:"江州区",451421:"扶绥县",451422:"宁明县",451423:"龙州县",451424:"大新县",451425:"天等县",451481:"凭祥市",451482:"其它区",460000:"海南省",460100:"海口市",460105:"秀英区",460106:"龙华区",460107:"琼山区",460108:"美兰区",460109:"其它区",460200:"三亚市",460300:"三沙市",460321:"西沙群岛",460322:"南沙群岛",460323:"中沙群岛的岛礁及其海域",469001:"五指山市",469002:"琼海市",469003:"儋州市",469005:"文昌市",469006:"万宁市",469007:"东方市",469025:"定安县",469026:"屯昌县",469027:"澄迈县",469028:"临高县",469030:"白沙黎族自治县",469031:"昌江黎族自治县",469033:"乐东黎族自治县",469034:"陵水黎族自治县",469035:"保亭黎族苗族自治县",469036:"琼中黎族苗族自治县",471005:"其它区",500000:"重庆",500100:"重庆市",500101:"万州区",500102:"涪陵区",500103:"渝中区",500104:"大渡口区",500105:"江北区",500106:"沙坪坝区",500107:"九龙坡区",500108:"南岸区",500109:"北碚区",500110:"万盛区",500111:"双桥区",500112:"渝北区",500113:"巴南区",500114:"黔江区",500115:"长寿区",500222:"綦江区",500223:"潼南县",500224:"铜梁县",500225:"大足区",500226:"荣昌县",500227:"璧山县",500228:"梁平县",500229:"城口县",500230:"丰都县",500231:"垫江县",500232:"武隆县",500233:"忠县",500234:"开县",500235:"云阳县",500236:"奉节县",500237:"巫山县",500238:"巫溪县",500240:"石柱土家族自治县",500241:"秀山土家族苗族自治县",500242:"酉阳土家族苗族自治县",500243:"彭水苗族土家族自治县",500381:"江津区",500382:"合川区",500383:"永川区",500384:"南川区",500385:"其它区",510000:"四川省",510100:"成都市",510104:"锦江区",510105:"青羊区",510106:"金牛区",510107:"武侯区",510108:"成华区",510112:"龙泉驿区",510113:"青白江区",510114:"新都区",510115:"温江区",510121:"金堂县",510122:"双流县",510124:"郫县",510129:"大邑县",510131:"蒲江县",510132:"新津县",510181:"都江堰市",510182:"彭州市",510183:"邛崃市",510184:"崇州市",510185:"其它区",510300:"自贡市",510302:"自流井区",510303:"贡井区",510304:"大安区",510311:"沿滩区",510321:"荣县",510322:"富顺县",510323:"其它区",510400:"攀枝花市",510402:"东区",510403:"西区",510411:"仁和区",510421:"米易县",510422:"盐边县",510423:"其它区",510500:"泸州市",510502:"江阳区",510503:"纳溪区",510504:"龙马潭区",510521:"泸县",510522:"合江县",510524:"叙永县",510525:"古蔺县",510526:"其它区",510600:"德阳市",510603:"旌阳区",510623:"中江县",510626:"罗江县",510681:"广汉市",510682:"什邡市",510683:"绵竹市",510684:"其它区",510700:"绵阳市",510703:"涪城区",510704:"游仙区",510722:"三台县",510723:"盐亭县",510724:"安县",510725:"梓潼县",510726:"北川羌族自治县",510727:"平武县",510781:"江油市",510782:"其它区",510800:"广元市",510802:"利州区",510811:"昭化区",510812:"朝天区",510821:"旺苍县",510822:"青川县",510823:"剑阁县",510824:"苍溪县",510825:"其它区",510900:"遂宁市",510903:"船山区",510904:"安居区",510921:"蓬溪县",510922:"射洪县",510923:"大英县",510924:"其它区",511000:"内江市",511002:"市中区",511011:"东兴区",511024:"威远县",511025:"资中县",511028:"隆昌县",511029:"其它区",511100:"乐山市",511102:"市中区",511111:"沙湾区",511112:"五通桥区",511113:"金口河区",511123:"犍为县",511124:"井研县",511126:"夹江县",511129:"沐川县",511132:"峨边彝族自治县",511133:"马边彝族自治县",511181:"峨眉山市",511182:"其它区",511300:"南充市",511302:"顺庆区",511303:"高坪区",511304:"嘉陵区",511321:"南部县",511322:"营山县",511323:"蓬安县",511324:"仪陇县",511325:"西充县",511381:"阆中市",511382:"其它区",511400:"眉山市",511402:"东坡区",511421:"仁寿县",511422:"彭山县",511423:"洪雅县",511424:"丹棱县",511425:"青神县",511426:"其它区",511500:"宜宾市",511502:"翠屏区",511521:"宜宾县",511522:"南溪区",511523:"江安县",511524:"长宁县",511525:"高县",511526:"珙县",511527:"筠连县",511528:"兴文县",511529:"屏山县",511530:"其它区",511600:"广安市",511602:"广安区",511603:"前锋区",511621:"岳池县",511622:"武胜县",511623:"邻水县",511681:"华蓥市",511683:"其它区",511700:"达州市",511702:"通川区",511721:"达川区",511722:"宣汉县",511723:"开江县",511724:"大竹县",511725:"渠县",511781:"万源市",511782:"其它区",511800:"雅安市",511802:"雨城区",511821:"名山区",511822:"荥经县",511823:"汉源县",511824:"石棉县",511825:"天全县",511826:"芦山县",511827:"宝兴县",511828:"其它区",511900:"巴中市",511902:"巴州区",511903:"恩阳区",511921:"通江县",511922:"南江县",511923:"平昌县",511924:"其它区",512000:"资阳市",512002:"雁江区",512021:"安岳县",512022:"乐至县",512081:"简阳市",512082:"其它区",513200:"阿坝藏族羌族自治州",513221:"汶川县",513222:"理县",513223:"茂县",513224:"松潘县",513225:"九寨沟县",513226:"金川县",513227:"小金县",513228:"黑水县",513229:"马尔康县",513230:"壤塘县",513231:"阿坝县",513232:"若尔盖县",513233:"红原县",513234:"其它区",513300:"甘孜藏族自治州",513321:"康定县",513322:"泸定县",513323:"丹巴县",513324:"九龙县",513325:"雅江县",513326:"道孚县",513327:"炉霍县",513328:"甘孜县",513329:"新龙县",513330:"德格县",513331:"白玉县",513332:"石渠县",513333:"色达县",513334:"理塘县",513335:"巴塘县",513336:"乡城县",513337:"稻城县",513338:"得荣县",513339:"其它区",513400:"凉山彝族自治州",513401:"西昌市",513422:"木里藏族自治县",513423:"盐源县",513424:"德昌县",513425:"会理县",513426:"会东县",513427:"宁南县",513428:"普格县",513429:"布拖县",513430:"金阳县",513431:"昭觉县",513432:"喜德县",513433:"冕宁县",513434:"越西县",513435:"甘洛县",513436:"美姑县",513437:"雷波县",513438:"其它区",520000:"贵州省",520100:"贵阳市",520102:"南明区",520103:"云岩区",520111:"花溪区",520112:"乌当区",520113:"白云区",520121:"开阳县",520122:"息烽县",520123:"修文县",520151:"观山湖区",520181:"清镇市",520182:"其它区",520200:"六盘水市",520201:"钟山区",520203:"六枝特区",520221:"水城县",520222:"盘县",520223:"其它区",520300:"遵义市",520302:"红花岗区",520303:"汇川区",520321:"遵义县",520322:"桐梓县",520323:"绥阳县",520324:"正安县",520325:"道真仡佬族苗族自治县",520326:"务川仡佬族苗族自治县",520327:"凤冈县",520328:"湄潭县",520329:"余庆县",520330:"习水县",520381:"赤水市",520382:"仁怀市",520383:"其它区",520400:"安顺市",520402:"西秀区",520421:"平坝县",520422:"普定县",520423:"镇宁布依族苗族自治县",520424:"关岭布依族苗族自治县",520425:"紫云苗族布依族自治县",520426:"其它区",522200:"铜仁市",522201:"碧江区",522222:"江口县",522223:"玉屏侗族自治县",522224:"石阡县",522225:"思南县",522226:"印江土家族苗族自治县",522227:"德江县",522228:"沿河土家族自治县",522229:"松桃苗族自治县",522230:"万山区",
522231:"其它区",522300:"黔西南布依族苗族自治州",522301:"兴义市",522322:"兴仁县",522323:"普安县",522324:"晴隆县",522325:"贞丰县",522326:"望谟县",522327:"册亨县",522328:"安龙县",522329:"其它区",522400:"毕节市",522401:"七星关区",522422:"大方县",522423:"黔西县",522424:"金沙县",522425:"织金县",522426:"纳雍县",522427:"威宁彝族回族苗族自治县",522428:"赫章县",522429:"其它区",522600:"黔东南苗族侗族自治州",522601:"凯里市",522622:"黄平县",522623:"施秉县",522624:"三穗县",522625:"镇远县",522626:"岑巩县",522627:"天柱县",522628:"锦屏县",522629:"剑河县",522630:"台江县",522631:"黎平县",522632:"榕江县",522633:"从江县",522634:"雷山县",522635:"麻江县",522636:"丹寨县",522637:"其它区",522700:"黔南布依族苗族自治州",522701:"都匀市",522702:"福泉市",522722:"荔波县",522723:"贵定县",522725:"瓮安县",522726:"独山县",522727:"平塘县",522728:"罗甸县",522729:"长顺县",522730:"龙里县",522731:"惠水县",522732:"三都水族自治县",522733:"其它区",530000:"云南省",530100:"昆明市",530102:"五华区",530103:"盘龙区",530111:"官渡区",530112:"西山区",530113:"东川区",530121:"呈贡区",530122:"晋宁县",530124:"富民县",530125:"宜良县",530126:"石林彝族自治县",530127:"嵩明县",530128:"禄劝彝族苗族自治县",530129:"寻甸回族彝族自治县",530181:"安宁市",530182:"其它区",530300:"曲靖市",530302:"麒麟区",530321:"马龙县",530322:"陆良县",530323:"师宗县",530324:"罗平县",530325:"富源县",530326:"会泽县",530328:"沾益县",530381:"宣威市",530382:"其它区",530400:"玉溪市",530402:"红塔区",530421:"江川县",530422:"澄江县",530423:"通海县",530424:"华宁县",530425:"易门县",530426:"峨山彝族自治县",530427:"新平彝族傣族自治县",530428:"元江哈尼族彝族傣族自治县",530429:"其它区",530500:"保山市",530502:"隆阳区",530521:"施甸县",530522:"腾冲县",530523:"龙陵县",530524:"昌宁县",530525:"其它区",530600:"昭通市",530602:"昭阳区",530621:"鲁甸县",530622:"巧家县",530623:"盐津县",530624:"大关县",530625:"永善县",530626:"绥江县",530627:"镇雄县",530628:"彝良县",530629:"威信县",530630:"水富县",530631:"其它区",530700:"丽江市",530702:"古城区",530721:"玉龙纳西族自治县",530722:"永胜县",530723:"华坪县",530724:"宁蒗彝族自治县",530725:"其它区",530800:"普洱市",530802:"思茅区",530821:"宁洱哈尼族彝族自治县",530822:"墨江哈尼族自治县",530823:"景东彝族自治县",530824:"景谷傣族彝族自治县",530825:"镇沅彝族哈尼族拉祜族自治县",530826:"江城哈尼族彝族自治县",530827:"孟连傣族拉祜族佤族自治县",530828:"澜沧拉祜族自治县",530829:"西盟佤族自治县",530830:"其它区",530900:"临沧市",530902:"临翔区",530921:"凤庆县",530922:"云县",530923:"永德县",530924:"镇康县",530925:"双江拉祜族佤族布朗族傣族自治县",530926:"耿马傣族佤族自治县",530927:"沧源佤族自治县",530928:"其它区",532300:"楚雄彝族自治州",532301:"楚雄市",532322:"双柏县",532323:"牟定县",532324:"南华县",532325:"姚安县",532326:"大姚县",532327:"永仁县",532328:"元谋县",532329:"武定县",532331:"禄丰县",532332:"其它区",532500:"红河哈尼族彝族自治州",532501:"个旧市",532502:"开远市",532522:"蒙自市",532523:"屏边苗族自治县",532524:"建水县",532525:"石屏县",532526:"弥勒市",532527:"泸西县",532528:"元阳县",532529:"红河县",532530:"金平苗族瑶族傣族自治县",532531:"绿春县",532532:"河口瑶族自治县",532533:"其它区",532600:"文山壮族苗族自治州",532621:"文山市",532622:"砚山县",532623:"西畴县",532624:"麻栗坡县",532625:"马关县",532626:"丘北县",532627:"广南县",532628:"富宁县",532629:"其它区",532800:"西双版纳傣族自治州",532801:"景洪市",532822:"勐海县",532823:"勐腊县",532824:"其它区",532900:"大理白族自治州",532901:"大理市",532922:"漾濞彝族自治县",532923:"祥云县",532924:"宾川县",532925:"弥渡县",532926:"南涧彝族自治县",532927:"巍山彝族回族自治县",532928:"永平县",532929:"云龙县",532930:"洱源县",532931:"剑川县",532932:"鹤庆县",532933:"其它区",533100:"德宏傣族景颇族自治州",533102:"瑞丽市",533103:"芒市",533122:"梁河县",533123:"盈江县",533124:"陇川县",533125:"其它区",533300:"怒江傈僳族自治州",533321:"泸水县",533323:"福贡县",533324:"贡山独龙族怒族自治县",533325:"兰坪白族普米族自治县",533326:"其它区",533400:"迪庆藏族自治州",533421:"香格里拉县",533422:"德钦县",533423:"维西傈僳族自治县",533424:"其它区",540000:"西藏自治区",540100:"拉萨市",540102:"城关区",540121:"林周县",540122:"当雄县",540123:"尼木县",540124:"曲水县",540125:"堆龙德庆县",540126:"达孜县",540127:"墨竹工卡县",540128:"其它区",542100:"昌都地区",542121:"昌都县",542122:"江达县",542123:"贡觉县",542124:"类乌齐县",542125:"丁青县",542126:"察雅县",542127:"八宿县",542128:"左贡县",542129:"芒康县",542132:"洛隆县",542133:"边坝县",542134:"其它区",542200:"山南地区",542221:"乃东县",542222:"扎囊县",542223:"贡嘎县",542224:"桑日县",542225:"琼结县",542226:"曲松县",542227:"措美县",542228:"洛扎县",542229:"加查县",542231:"隆子县",542232:"错那县",542233:"浪卡子县",542234:"其它区",542300:"日喀则地区",542301:"日喀则市",542322:"南木林县",542323:"江孜县",542324:"定日县",542325:"萨迦县",542326:"拉孜县",542327:"昂仁县",542328:"谢通门县",542329:"白朗县",542330:"仁布县",542331:"康马县",542332:"定结县",542333:"仲巴县",542334:"亚东县",542335:"吉隆县",542336:"聂拉木县",542337:"萨嘎县",542338:"岗巴县",542339:"其它区",542400:"那曲地区",542421:"那曲县",542422:"嘉黎县",542423:"比如县",542424:"聂荣县",542425:"安多县",542426:"申扎县",542427:"索县",542428:"班戈县",542429:"巴青县",542430:"尼玛县",542431:"其它区",542432:"双湖县",542500:"阿里地区",542521:"普兰县",542522:"札达县",542523:"噶尔县",542524:"日土县",542525:"革吉县",542526:"改则县",542527:"措勤县",542528:"其它区",542600:"林芝地区",542621:"林芝县",542622:"工布江达县",542623:"米林县",542624:"墨脱县",542625:"波密县",542626:"察隅县",542627:"朗县",542628:"其它区",610000:"陕西省",610100:"西安市",610102:"新城区",610103:"碑林区",610104:"莲湖区",610111:"灞桥区",610112:"未央区",610113:"雁塔区",610114:"阎良区",610115:"临潼区",610116:"长安区",610122:"蓝田县",610124:"周至县",610125:"户县",610126:"高陵县",610127:"其它区",610200:"铜川市",610202:"王益区",610203:"印台区",610204:"耀州区",610222:"宜君县",610223:"其它区",610300:"宝鸡市",610302:"渭滨区",610303:"金台区",610304:"陈仓区",610322:"凤翔县",610323:"岐山县",610324:"扶风县",610326:"眉县",610327:"陇县",610328:"千阳县",610329:"麟游县",610330:"凤县",610331:"太白县",610332:"其它区",610400:"咸阳市",610402:"秦都区",610403:"杨陵区",610404:"渭城区",610422:"三原县",610423:"泾阳县",610424:"乾县",610425:"礼泉县",610426:"永寿县",610427:"彬县",610428:"长武县",610429:"旬邑县",610430:"淳化县",610431:"武功县",610481:"兴平市",610482:"其它区",610500:"渭南市",610502:"临渭区",610521:"华县",610522:"潼关县",610523:"大荔县",610524:"合阳县",610525:"澄城县",610526:"蒲城县",610527:"白水县",610528:"富平县",610581:"韩城市",610582:"华阴市",610583:"其它区",610600:"延安市",610602:"宝塔区",610621:"延长县",610622:"延川县",610623:"子长县",610624:"安塞县",610625:"志丹县",610626:"吴起县",610627:"甘泉县",610628:"富县",610629:"洛川县",610630:"宜川县",610631:"黄龙县",610632:"黄陵县",610633:"其它区",610700:"汉中市",610702:"汉台区",610721:"南郑县",610722:"城固县",610723:"洋县",610724:"西乡县",610725:"勉县",610726:"宁强县",610727:"略阳县",610728:"镇巴县",610729:"留坝县",610730:"佛坪县",610731:"其它区",610800:"榆林市",610802:"榆阳区",610821:"神木县",610822:"府谷县",610823:"横山县",610824:"靖边县",610825:"定边县",610826:"绥德县",610827:"米脂县",610828:"佳县",610829:"吴堡县",610830:"清涧县",610831:"子洲县",610832:"其它区",610900:"安康市",610902:"汉滨区",610921:"汉阴县",610922:"石泉县",610923:"宁陕县",610924:"紫阳县",610925:"岚皋县",610926:"平利县",610927:"镇坪县",610928:"旬阳县",610929:"白河县",610930:"其它区",611000:"商洛市",611002:"商州区",611021:"洛南县",611022:"丹凤县",611023:"商南县",611024:"山阳县",611025:"镇安县",611026:"柞水县",611027:"其它区",620000:"甘肃省",620100:"兰州市",620102:"城关区",620103:"七里河区",620104:"西固区",620105:"安宁区",620111:"红古区",620121:"永登县",620122:"皋兰县",620123:"榆中县",620124:"其它区",620200:"嘉峪关市",620300:"金昌市",620302:"金川区",620321:"永昌县",620322:"其它区",620400:"白银市",620402:"白银区",620403:"平川区",620421:"靖远县",620422:"会宁县",620423:"景泰县",620424:"其它区",620500:"天水市",620502:"秦州区",620503:"麦积区",620521:"清水县",620522:"秦安县",620523:"甘谷县",620524:"武山县",620525:"张家川回族自治县",620526:"其它区",620600:"武威市",620602:"凉州区",620621:"民勤县",620622:"古浪县",620623:"天祝藏族自治县",620624:"其它区",620700:"张掖市",620702:"甘州区",620721:"肃南裕固族自治县",620722:"民乐县",620723:"临泽县",620724:"高台县",620725:"山丹县",620726:"其它区",620800:"平凉市",620802:"崆峒区",620821:"泾川县",620822:"灵台县",620823:"崇信县",620824:"华亭县",620825:"庄浪县",620826:"静宁县",620827:"其它区",620900:"酒泉市",620902:"肃州区",620921:"金塔县",620922:"瓜州县",620923:"肃北蒙古族自治县",620924:"阿克塞哈萨克族自治县",620981:"玉门市",620982:"敦煌市",620983:"其它区",621000:"庆阳市",621002:"西峰区",621021:"庆城县",621022:"环县",621023:"华池县",621024:"合水县",621025:"正宁县",621026:"宁县",621027:"镇原县",621028:"其它区",621100:"定西市",621102:"安定区",621121:"通渭县",621122:"陇西县",621123:"渭源县",621124:"临洮县",621125:"漳县",621126:"岷县",621127:"其它区",621200:"陇南市",621202:"武都区",621221:"成县",621222:"文县",621223:"宕昌县",621224:"康县",621225:"西和县",621226:"礼县",621227:"徽县",621228:"两当县",621229:"其它区",622900:"临夏回族自治州",622901:"临夏市",622921:"临夏县",622922:"康乐县",622923:"永靖县",622924:"广河县",622925:"和政县",622926:"东乡族自治县",622927:"积石山保安族东乡族撒拉族自治县",622928:"其它区",623000:"甘南藏族自治州",623001:"合作市",623021:"临潭县",623022:"卓尼县",623023:"舟曲县",623024:"迭部县",623025:"玛曲县",623026:"碌曲县",623027:"夏河县",623028:"其它区",630000:"青海省",630100:"西宁市",630102:"城东区",630103:"城中区",630104:"城西区",630105:"城北区",630121:"大通回族土族自治县",630122:"湟中县",630123:"湟源县",630124:"其它区",632100:"海东市",632121:"平安县",632122:"民和回族土族自治县",632123:"乐都区",632126:"互助土族自治县",632127:"化隆回族自治县",632128:"循化撒拉族自治县",632129:"其它区",632200:"海北藏族自治州",632221:"门源回族自治县",632222:"祁连县",632223:"海晏县",632224:"刚察县",632225:"其它区",632300:"黄南藏族自治州",632321:"同仁县",632322:"尖扎县",632323:"泽库县",632324:"河南蒙古族自治县",632325:"其它区",632500:"海南藏族自治州",632521:"共和县",632522:"同德县",632523:"贵德县",632524:"兴海县",632525:"贵南县",632526:"其它区",632600:"果洛藏族自治州",632621:"玛沁县",632622:"班玛县",632623:"甘德县",632624:"达日县",632625:"久治县",632626:"玛多县",632627:"其它区",632700:"玉树藏族自治州",632721:"玉树市",632722:"杂多县",632723:"称多县",632724:"治多县",632725:"囊谦县",632726:"曲麻莱县",632727:"其它区",632800:"海西蒙古族藏族自治州",632801:"格尔木市",632802:"德令哈市",632821:"乌兰县",632822:"都兰县",632823:"天峻县",632824:"其它区",640000:"宁夏回族自治区",640100:"银川市",640104:"兴庆区",640105:"西夏区",640106:"金凤区",640121:"永宁县",640122:"贺兰县",640181:"灵武市",640182:"其它区",640200:"石嘴山市",640202:"大武口区",640205:"惠农区",640221:"平罗县",640222:"其它区",640300:"吴忠市",640302:"利通区",640303:"红寺堡区",640323:"盐池县",640324:"同心县",640381:"青铜峡市",640382:"其它区",640400:"固原市",640402:"原州区",640422:"西吉县",640423:"隆德县",640424:"泾源县",640425:"彭阳县",640426:"其它区",640500:"中卫市",640502:"沙坡头区",640521:"中宁县",640522:"海原县",640523:"其它区",650000:"新疆维吾尔自治区",650100:"乌鲁木齐市",650102:"天山区",650103:"沙依巴克区",650104:"新市区",650105:"水磨沟区",650106:"头屯河区",650107:"达坂城区",650109:"米东区",650121:"乌鲁木齐县",650122:"其它区",650200:"克拉玛依市",650202:"独山子区",650203:"克拉玛依区",650204:"白碱滩区",650205:"乌尔禾区",650206:"其它区",652100:"吐鲁番地区",652101:"吐鲁番市",652122:"鄯善县",652123:"托克逊县",652124:"其它区",652200:"哈密地区",652201:"哈密市",652222:"巴里坤哈萨克自治县",652223:"伊吾县",652224:"其它区",652300:"昌吉回族自治州",652301:"昌吉市",652302:"阜康市",652323:"呼图壁县",652324:"玛纳斯县",652325:"奇台县",652327:"吉木萨尔县",652328:"木垒哈萨克自治县",652329:"其它区",652700:"博尔塔拉蒙古自治州",652701:"博乐市",652702:"阿拉山口市",652722:"精河县",652723:"温泉县",652724:"其它区",652800:"巴音郭楞蒙古自治州",652801:"库尔勒市",652822:"轮台县",652823:"尉犁县",652824:"若羌县",652825:"且末县",652826:"焉耆回族自治县",652827:"和静县",652828:"和硕县",652829:"博湖县",652830:"其它区",652900:"阿克苏地区",652901:"阿克苏市",652922:"温宿县",652923:"库车县",652924:"沙雅县",652925:"新和县",652926:"拜城县",652927:"乌什县",652928:"阿瓦提县",652929:"柯坪县",652930:"其它区",653000:"克孜勒苏柯尔克孜自治州",653001:"阿图什市",653022:"阿克陶县",653023:"阿合奇县",653024:"乌恰县",653025:"其它区",653100:"喀什地区",653101:"喀什市",653121:"疏附县",653122:"疏勒县",653123:"英吉沙县",653124:"泽普县",653125:"莎车县",653126:"叶城县",653127:"麦盖提县",653128:"岳普湖县",653129:"伽师县",653130:"巴楚县",653131:"塔什库尔干塔吉克自治县",653132:"其它区",653200:"和田地区",653201:"和田市",653221:"和田县",653222:"墨玉县",653223:"皮山县",653224:"洛浦县",653225:"策勒县",653226:"于田县",653227:"民丰县",653228:"其它区",654000:"伊犁哈萨克自治州",654002:"伊宁市",654003:"奎屯市",654021:"伊宁县",654022:"察布查尔锡伯自治县",654023:"霍城县",654024:"巩留县",654025:"新源县",654026:"昭苏县",654027:"特克斯县",654028:"尼勒克县",654029:"其它区",654200:"塔城地区",654201:"塔城市",654202:"乌苏市",654221:"额敏县",654223:"沙湾县",654224:"托里县",654225:"裕民县",654226:"和布克赛尔蒙古自治县",654227:"其它区",654300:"阿勒泰地区",654301:"阿勒泰市",654321:"布尔津县",654322:"富蕴县",654323:"福海县",654324:"哈巴河县",654325:"青河县",654326:"吉木乃县",654327:"其它区",659001:"石河子市",659002:"阿拉尔市",659003:"图木舒克市",659004:"五家渠市",710000:"台湾",710100:"台北市",710101:"中正区",710102:"大同区",710103:"中山区",710104:"松山区",710105:"大安区",710106:"万华区",710107:"信义区",710108:"士林区",710109:"北投区",710110:"内湖区",710111:"南港区",710112:"文山区",710113:"其它区",710200:"高雄市",710201:"新兴区",710202:"前金区",710203:"芩雅区",710204:"盐埕区",710205:"鼓山区",710206:"旗津区",710207:"前镇区",710208:"三民区",710209:"左营区",710210:"楠梓区",710211:"小港区",710212:"其它区",710241:"苓雅区",710242:"仁武区",710243:"大社区",710244:"冈山区",710245:"路竹区",710246:"阿莲区",710247:"田寮区",710248:"燕巢区",710249:"桥头区",710250:"梓官区",710251:"弥陀区",710252:"永安区",710253:"湖内区",710254:"凤山区",710255:"大寮区",710256:"林园区",710257:"鸟松区",710258:"大树区",710259:"旗山区",710260:"美浓区",710261:"六龟区",710262:"内门区",710263:"杉林区",710264:"甲仙区",710265:"桃源区",710266:"那玛夏区",710267:"茂林区",710268:"茄萣区",710300:"台南市",710301:"中西区",710302:"东区",710303:"南区",710304:"北区",710305:"安平区",710306:"安南区",710307:"其它区",710339:"永康区",710340:"归仁区",710341:"新化区",710342:"左镇区",710343:"玉井区",710344:"楠西区",710345:"南化区",710346:"仁德区",710347:"关庙区",710348:"龙崎区",710349:"官田区",710350:"麻豆区",710351:"佳里区",710352:"西港区",710353:"七股区",710354:"将军区",710355:"学甲区",710356:"北门区",710357:"新营区",710358:"后壁区",710359:"白河区",710360:"东山区",710361:"六甲区",710362:"下营区",710363:"柳营区",710364:"盐水区",710365:"善化区",710366:"大内区",710367:"山上区",710368:"新市区",710369:"安定区",710400:"台中市",710401:"中区",710402:"东区",710403:"南区",710404:"西区",710405:"北区",710406:"北屯区",710407:"西屯区",710408:"南屯区",710409:"其它区",710431:"太平区",710432:"大里区",710433:"雾峰区",710434:"乌日区",710435:"丰原区",710436:"后里区",710437:"石冈区",710438:"东势区",710439:"和平区",710440:"新社区",710441:"潭子区",710442:"大雅区",710443:"神冈区",710444:"大肚区",710445:"沙鹿区",710446:"龙井区",710447:"梧栖区",710448:"清水区",710449:"大甲区",710450:"外埔区",710451:"大安区",710500:"金门县",710507:"金沙镇",710508:"金湖镇",710509:"金宁乡",710510:"金城镇",710511:"烈屿乡",710512:"乌坵乡",710600:"南投县",710614:"南投市",710615:"中寮乡",710616:"草屯镇",710617:"国姓乡",710618:"埔里镇",710619:"仁爱乡",710620:"名间乡",710621:"集集镇",710622:"水里乡",710623:"鱼池乡",710624:"信义乡",710625:"竹山镇",710626:"鹿谷乡",710700:"基隆市",710701:"仁爱区",710702:"信义区",710703:"中正区",710704:"中山区",710705:"安乐区",710706:"暖暖区",710707:"七堵区",710708:"其它区",710800:"新竹市",710801:"东区",710802:"北区",710803:"香山区",710804:"其它区",710900:"嘉义市",710901:"东区",710902:"西区",710903:"其它区",711100:"新北市",711130:"万里区",711131:"金山区",711132:"板桥区",711133:"汐止区",711134:"深坑区",711135:"石碇区",711136:"瑞芳区",711137:"平溪区",711138:"双溪区",711139:"贡寮区",711140:"新店区",711141:"坪林区",711142:"乌来区",711143:"永和区",711144:"中和区",711145:"土城区",711146:"三峡区",711147:"树林区",711148:"莺歌区",711149:"三重区",711150:"新庄区",711151:"泰山区",711152:"林口区",711153:"芦洲区",711154:"五股区",711155:"八里区",711156:"淡水区",711157:"三芝区",711158:"石门区",711200:"宜兰县",711214:"宜兰市",711215:"头城镇",711216:"礁溪乡",711217:"壮围乡",711218:"员山乡",711219:"罗东镇",711220:"三星乡",711221:"大同乡",711222:"五结乡",711223:"冬山乡",711224:"苏澳镇",711225:"南澳乡",711226:"钓鱼台",711300:"新竹县",711314:"竹北市",711315:"湖口乡",711316:"新丰乡",711317:"新埔镇",711318:"关西镇",711319:"芎林乡",711320:"宝山乡",711321:"竹东镇",711322:"五峰乡",711323:"横山乡",711324:"尖石乡",711325:"北埔乡",711326:"峨眉乡",711400:"桃园县",711414:"中坜市",711415:"平镇市",711416:"龙潭乡",711417:"杨梅市",711418:"新屋乡",711419:"观音乡",711420:"桃园市",711421:"龟山乡",711422:"八德市",711423:"大溪镇",711424:"复兴乡",711425:"大园乡",711426:"芦竹乡",711500:"苗栗县",711519:"竹南镇",711520:"头份镇",711521:"三湾乡",711522:"南庄乡",711523:"狮潭乡",711524:"后龙镇",711525:"通霄镇",711526:"苑里镇",711527:"苗栗市",711528:"造桥乡",711529:"头屋乡",711530:"公馆乡",711531:"大湖乡",711532:"泰安乡",711533:"铜锣乡",711534:"三义乡",711535:"西湖乡",711536:"卓兰镇",711700:"彰化县",711727:"彰化市",711728:"芬园乡",711729:"花坛乡",711730:"秀水乡",711731:"鹿港镇",711732:"福兴乡",711733:"线西乡",711734:"和美镇",711735:"伸港乡",711736:"员林镇",711737:"社头乡",711738:"永靖乡",711739:"埔心乡",711740:"溪湖镇",711741:"大村乡",711742:"埔盐乡",711743:"田中镇",711744:"北斗镇",711745:"田尾乡",711746:"埤头乡",711747:"溪州乡",711748:"竹塘乡",711749:"二林镇",711750:"大城乡",711751:"芳苑乡",711752:"二水乡",711900:"嘉义县",711919:"番路乡",711920:"梅山乡",711921:"竹崎乡",711922:"阿里山乡",711923:"中埔乡",711924:"大埔乡",711925:"水上乡",711926:"鹿草乡",711927:"太保市",711928:"朴子市",711929:"东石乡",711930:"六脚乡",711931:"新港乡",711932:"民雄乡",711933:"大林镇",711934:"溪口乡",711935:"义竹乡",711936:"布袋镇",712100:"云林县",712121:"斗南镇",712122:"大埤乡",712123:"虎尾镇",712124:"土库镇",712125:"褒忠乡",712126:"东势乡",712127:"台西乡",712128:"仑背乡",712129:"麦寮乡",712130:"斗六市",712131:"林内乡",712132:"古坑乡",712133:"莿桐乡",712134:"西螺镇",712135:"二仑乡",712136:"北港镇",712137:"水林乡",712138:"口湖乡",712139:"四湖乡",712140:"元长乡",712400:"屏东县",712434:"屏东市",712435:"三地门乡",712436:"雾台乡",712437:"玛家乡",712438:"九如乡",712439:"里港乡",712440:"高树乡",712441:"盐埔乡",712442:"长治乡",712443:"麟洛乡",712444:"竹田乡",712445:"内埔乡",712446:"万丹乡",712447:"潮州镇",712448:"泰武乡",712449:"来义乡",712450:"万峦乡",712451:"崁顶乡",712452:"新埤乡",712453:"南州乡",712454:"林边乡",712455:"东港镇",712456:"琉球乡",712457:"佳冬乡",712458:"新园乡",712459:"枋寮乡",712460:"枋山乡",712461:"春日乡",712462:"狮子乡",712463:"车城乡",712464:"牡丹乡",712465:"恒春镇",712466:"满州乡",712500:"台东县",712517:"台东市",712518:"绿岛乡",712519:"兰屿乡",712520:"延平乡",712521:"卑南乡",712522:"鹿野乡",712523:"关山镇",712524:"海端乡",712525:"池上乡",712526:"东河乡",712527:"成功镇",712528:"长滨乡",712529:"金峰乡",712530:"大武乡",712531:"达仁乡",712532:"太麻里乡",712600:"花莲县",712615:"花莲市",712616:"新城乡",712617:"太鲁阁",712618:"秀林乡",712619:"吉安乡",712620:"寿丰乡",712621:"凤林镇",712622:"光复乡",712623:"丰滨乡",712624:"瑞穗乡",712625:"万荣乡",712626:"玉里镇",712627:"卓溪乡",712628:"富里乡",712700:"澎湖县",712707:"马公市",712708:"西屿乡",712709:"望安乡",712710:"七美乡",712711:"白沙乡",712712:"湖西乡",712800:"连江县",712805:"南竿乡",712806:"北竿乡",712807:"莒光乡",712808:"东引乡",810000:"香港特别行政区",810100:"香港岛",810101:"中西区",810102:"湾仔",810103:"东区",810104:"南区",810200:"九龙",810201:"九龙城区",810202:"油尖旺区",810203:"深水埗区",810204:"黄大仙区",810205:"观塘区",810300:"新界",810301:"北区",810302:"大埔区",810303:"沙田区",810304:"西贡区",810305:"元朗区",810306:"屯门区",810307:"荃湾区",810308:"葵青区",810309:"离岛区",820000:"澳门特别行政区",820100:"澳门半岛",820200:"离岛",990000:"海外",990100:"海外"},a=function(){var t=[];for(var e in r){var a="0000"===e.slice(2,6)?void 0:"00"==e.slice(4,6)?e.slice(0,2)+"0000":e.slice(0,4)+"00";t.push({id:e,pid:a,name:r[e]})}return n(t)}();t.exports=a},function(t,e,n){var r=n(18);t.exports={d4:function(){return this.natural(1,4)},d6:function(){return this.natural(1,6)},d8:function(){return this.natural(1,8)},d12:function(){return this.natural(1,12)},d20:function(){return this.natural(1,20)},d100:function(){return this.natural(1,100)},guid:function(){var t="abcdefABCDEF1234567890",e=this.string(t,8)+"-"+this.string(t,4)+"-"+this.string(t,4)+"-"+this.string(t,4)+"-"+this.string(t,12);return e},uuid:function(){return this.guid()},id:function(){var t,e=0,n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],a=["1","0","X","9","8","7","6","5","4","3","2"];t=this.pick(r).id+this.date("yyyyMMdd")+this.string("number",3);for(var o=0;o<t.length;o++)e+=t[o]*n[o];return t+=a[e%11]},increment:function(){var t=0;return function(e){return t+=+e||1}}(),inc:function(t){return this.increment(t)}}},function(t,e,n){var r=n(21),a=n(22);t.exports={Parser:r,Handler:a}},function(t,e){function n(t){this.type=t,this.offset=n.offset(),this.text=n.text()}function r(t,e){n.call(this,"alternate"),this.left=t,this.right=e}function a(t){n.call(this,"match"),this.body=t.filter(Boolean)}function o(t,e){n.call(this,t),this.body=e}function u(t){o.call(this,"capture-group"),this.index=y[this.offset]||(y[this.offset]=x++),this.body=t}function i(t,e){n.call(this,"quantified"),this.body=t,this.quantifier=e}function l(t,e){n.call(this,"quantifier"),this.min=t,this.max=e,this.greedy=!0}function s(t,e){n.call(this,"charset"),this.invert=t,this.body=e}function c(t,e){n.call(this,"range"),this.start=t,this.end=e}function h(t){n.call(this,"literal"),this.body=t,this.escaped=this.body!=this.text}function p(t){n.call(this,"unicode"),this.code=t.toUpperCase()}function f(t){n.call(this,"hex"),this.code=t.toUpperCase()}function d(t){n.call(this,"octal"),this.code=t.toUpperCase()}function m(t){n.call(this,"back-reference"),this.code=t.toUpperCase()}function g(t){n.call(this,"control-character"),this.code=t.toUpperCase()}var v=function(){function t(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}function e(t,e,n,r,a){function o(t,e){function n(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var r,a;switch(t.length){case 0:r="end of input";break;case 1:r=t[0];break;default:r=t.slice(0,-1).join(", ")+" or "+t[t.length-1]}return a=e?'"'+n(e)+'"':"end of input","Expected "+r+" but "+a+" found."}this.expected=t,this.found=e,this.offset=n,this.line=r,this.column=a,this.name="SyntaxError",this.message=o(t,e)}function v(t){function v(){return t.substring(Qn,Zn)}function x(){return Qn}function y(e){function n(e,n,r){var a,o;for(a=n;r>a;a++)o=t.charAt(a),"\n"===o?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===o||"\u2028"===o||"\u2029"===o?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}return tr!==e&&(tr>e&&(tr=0,er={line:1,column:1,seenCR:!1}),n(er,tr,e),tr=e),er}function b(t){nr>Zn||(Zn>nr&&(nr=Zn,rr=[]),rr.push(t))}function w(t){var e=0;for(t.sort();e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function C(){var e,n,r,a,o;return e=Zn,n=k(),null!==n?(r=Zn,124===t.charCodeAt(Zn)?(a=Rt,Zn++):(a=null,0===ar&&b(At)),null!==a?(o=C(),null!==o?(a=[a,o],r=a):(Zn=r,r=kt)):(Zn=r,r=kt),null===r&&(r=Et),null!==r?(Qn=e,n=_t(n,r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function k(){var t,e,n,r,a;if(t=Zn,e=R(),null===e&&(e=Et),null!==e)if(n=Zn,ar++,r=M(),ar--,null===r?n=Et:(Zn=n,n=kt),null!==n){for(r=[],a=_(),null===a&&(a=E());null!==a;)r.push(a),a=_(),null===a&&(a=E());null!==r?(a=A(),null===a&&(a=Et),null!==a?(Qn=t,e=Mt(e,r,a),null===e?(Zn=t,t=e):t=e):(Zn=t,t=kt)):(Zn=t,t=kt)}else Zn=t,t=kt;else Zn=t,t=kt;return t}function E(){var t;return t=I(),null===t&&(t=B(),null===t&&(t=Y())),t}function R(){var e,n;return e=Zn,94===t.charCodeAt(Zn)?(n=Pt,Zn++):(n=null,0===ar&&b(Tt)),null!==n&&(Qn=e,n=Ht()),null===n?(Zn=e,e=n):e=n,e}function A(){var e,n;return e=Zn,36===t.charCodeAt(Zn)?(n=St,Zn++):(n=null,0===ar&&b(Dt)),null!==n&&(Qn=e,n=qt()),null===n?(Zn=e,e=n):e=n,e}function _(){var t,e,n;return t=Zn,e=E(),null!==e?(n=M(),null!==n?(Qn=t,e=Ft(e,n),null===e?(Zn=t,t=e):t=e):(Zn=t,t=kt)):(Zn=t,t=kt),t}function M(){var t,e,n;return ar++,t=Zn,e=P(),null!==e?(n=L(),null===n&&(n=Et),null!==n?(Qn=t,e=Ot(e,n),null===e?(Zn=t,t=e):t=e):(Zn=t,t=kt)):(Zn=t,t=kt),ar--,null===t&&(e=null,0===ar&&b(Lt)),t}function P(){var t;return t=T(),null===t&&(t=H(),null===t&&(t=S(),null===t&&(t=D(),null===t&&(t=q(),null===t&&(t=F()))))),t}function T(){var e,n,r,a,o,u;return e=Zn,123===t.charCodeAt(Zn)?(n=It,Zn++):(n=null,0===ar&&b(jt)),null!==n?(r=O(),null!==r?(44===t.charCodeAt(Zn)?(a=Nt,Zn++):(a=null,0===ar&&b(zt)),null!==a?(o=O(),null!==o?(125===t.charCodeAt(Zn)?(u=Ut,Zn++):(u=null,0===ar&&b(Bt)),null!==u?(Qn=e,n=Gt(r,o),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt),e}function H(){var e,n,r,a;return e=Zn,123===t.charCodeAt(Zn)?(n=It,Zn++):(n=null,0===ar&&b(jt)),null!==n?(r=O(),null!==r?(t.substr(Zn,2)===Xt?(a=Xt,Zn+=2):(a=null,0===ar&&b(Kt)),null!==a?(Qn=e,n=Wt(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt),e}function S(){var e,n,r,a;return e=Zn,123===t.charCodeAt(Zn)?(n=It,Zn++):(n=null,0===ar&&b(jt)),null!==n?(r=O(),null!==r?(125===t.charCodeAt(Zn)?(a=Ut,Zn++):(a=null,0===ar&&b(Bt)),null!==a?(Qn=e,n=Yt(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt),e}function D(){var e,n;return e=Zn,43===t.charCodeAt(Zn)?(n=$t,Zn++):(n=null,0===ar&&b(Jt)),null!==n&&(Qn=e,n=Vt()),null===n?(Zn=e,e=n):e=n,e}function q(){var e,n;return e=Zn,42===t.charCodeAt(Zn)?(n=Zt,Zn++):(n=null,0===ar&&b(Qt)),null!==n&&(Qn=e,n=te()),null===n?(Zn=e,e=n):e=n,e}function F(){var e,n;return e=Zn,63===t.charCodeAt(Zn)?(n=ee,Zn++):(n=null,0===ar&&b(ne)),null!==n&&(Qn=e,n=re()),null===n?(Zn=e,e=n):e=n,e}function L(){var e;return 63===t.charCodeAt(Zn)?(e=ee,Zn++):(e=null,0===ar&&b(ne)),e}function O(){var e,n,r;if(e=Zn,n=[],ae.test(t.charAt(Zn))?(r=t.charAt(Zn),Zn++):(r=null,0===ar&&b(oe)),null!==r)for(;null!==r;)n.push(r),ae.test(t.charAt(Zn))?(r=t.charAt(Zn),Zn++):(r=null,0===ar&&b(oe));else n=kt;return null!==n&&(Qn=e,n=ue(n)),null===n?(Zn=e,e=n):e=n,e}function I(){var e,n,r,a;return e=Zn,40===t.charCodeAt(Zn)?(n=ie,Zn++):(n=null,0===ar&&b(le)),null!==n?(r=z(),null===r&&(r=U(),null===r&&(r=N(),null===r&&(r=j()))),null!==r?(41===t.charCodeAt(Zn)?(a=se,Zn++):(a=null,0===ar&&b(ce)),null!==a?(Qn=e,n=he(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt),e}function j(){var t,e;return t=Zn,e=C(),null!==e&&(Qn=t,e=pe(e)),null===e?(Zn=t,t=e):t=e,t}function N(){var e,n,r;return e=Zn,t.substr(Zn,2)===fe?(n=fe,Zn+=2):(n=null,0===ar&&b(de)),null!==n?(r=C(),null!==r?(Qn=e,n=me(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function z(){var e,n,r;return e=Zn,t.substr(Zn,2)===ge?(n=ge,Zn+=2):(n=null,0===ar&&b(ve)),null!==n?(r=C(),null!==r?(Qn=e,n=xe(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function U(){var e,n,r;return e=Zn,t.substr(Zn,2)===ye?(n=ye,Zn+=2):(n=null,0===ar&&b(be)),null!==n?(r=C(),null!==r?(Qn=e,n=we(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function B(){var e,n,r,a,o;if(ar++,e=Zn,91===t.charCodeAt(Zn)?(n=ke,Zn++):(n=null,0===ar&&b(Ee)),null!==n)if(94===t.charCodeAt(Zn)?(r=Pt,Zn++):(r=null,0===ar&&b(Tt)),null===r&&(r=Et),null!==r){for(a=[],o=G(),null===o&&(o=X());null!==o;)a.push(o),o=G(),null===o&&(o=X());null!==a?(93===t.charCodeAt(Zn)?(o=Re,Zn++):(o=null,0===ar&&b(Ae)),null!==o?(Qn=e,n=_e(r,a),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)}else Zn=e,e=kt;else Zn=e,e=kt;return ar--,null===e&&(n=null,0===ar&&b(Ce)),e}function G(){var e,n,r,a;return ar++,e=Zn,n=X(),null!==n?(45===t.charCodeAt(Zn)?(r=Pe,Zn++):(r=null,0===ar&&b(Te)),null!==r?(a=X(),null!==a?(Qn=e,n=He(n,a),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt)):(Zn=e,e=kt),ar--,null===e&&(n=null,0===ar&&b(Me)),e}function X(){var t,e;return ar++,t=W(),null===t&&(t=K()),ar--,null===t&&(e=null,0===ar&&b(Se)),t}function K(){var e,n;return e=Zn,De.test(t.charAt(Zn))?(n=t.charAt(Zn),Zn++):(n=null,0===ar&&b(qe)),null!==n&&(Qn=e,n=Fe(n)),null===n?(Zn=e,e=n):e=n,e}function W(){var t;return t=Z(),null===t&&(t=pt(),null===t&&(t=et(),null===t&&(t=nt(),null===t&&(t=rt(),null===t&&(t=at(),null===t&&(t=ot(),null===t&&(t=ut(),null===t&&(t=it(),null===t&&(t=lt(),null===t&&(t=st(),null===t&&(t=ct(),null===t&&(t=ht(),null===t&&(t=dt(),null===t&&(t=mt(),null===t&&(t=gt(),null===t&&(t=vt(),null===t&&(t=xt()))))))))))))))))),t}function Y(){var t;return t=$(),null===t&&(t=V(),null===t&&(t=J())),t}function $(){var e,n;return e=Zn,46===t.charCodeAt(Zn)?(n=Le,Zn++):(n=null,0===ar&&b(Oe)),null!==n&&(Qn=e,n=Ie()),null===n?(Zn=e,e=n):e=n,e}function J(){var e,n;return ar++,e=Zn,Ne.test(t.charAt(Zn))?(n=t.charAt(Zn),Zn++):(n=null,0===ar&&b(ze)),null!==n&&(Qn=e,n=Fe(n)),null===n?(Zn=e,e=n):e=n,ar--,null===e&&(n=null,0===ar&&b(je)),e}function V(){var t;return t=Q(),null===t&&(t=tt(),null===t&&(t=pt(),null===t&&(t=et(),null===t&&(t=nt(),null===t&&(t=rt(),null===t&&(t=at(),null===t&&(t=ot(),null===t&&(t=ut(),null===t&&(t=it(),null===t&&(t=lt(),null===t&&(t=st(),null===t&&(t=ct(),null===t&&(t=ht(),null===t&&(t=ft(),null===t&&(t=dt(),null===t&&(t=mt(),null===t&&(t=gt(),null===t&&(t=vt(),null===t&&(t=xt()))))))))))))))))))),t}function Z(){var e,n;return e=Zn,t.substr(Zn,2)===Ue?(n=Ue,Zn+=2):(n=null,0===ar&&b(Be)),null!==n&&(Qn=e,n=Ge()),null===n?(Zn=e,e=n):e=n,e}function Q(){var e,n;return e=Zn,t.substr(Zn,2)===Ue?(n=Ue,Zn+=2):(n=null,0===ar&&b(Be)),null!==n&&(Qn=e,n=Xe()),null===n?(Zn=e,e=n):e=n,e}function tt(){var e,n;return e=Zn,t.substr(Zn,2)===Ke?(n=Ke,Zn+=2):(n=null,0===ar&&b(We)),null!==n&&(Qn=e,n=Ye()),null===n?(Zn=e,e=n):e=n,e}function et(){var e,n;return e=Zn,t.substr(Zn,2)===$e?(n=$e,Zn+=2):(n=null,0===ar&&b(Je)),null!==n&&(Qn=e,n=Ve()),null===n?(Zn=e,e=n):e=n,e}function nt(){var e,n;return e=Zn,t.substr(Zn,2)===Ze?(n=Ze,Zn+=2):(n=null,0===ar&&b(Qe)),null!==n&&(Qn=e,n=tn()),null===n?(Zn=e,e=n):e=n,e}function rt(){var e,n;return e=Zn,t.substr(Zn,2)===en?(n=en,Zn+=2):(n=null,0===ar&&b(nn)),null!==n&&(Qn=e,n=rn()),null===n?(Zn=e,e=n):e=n,e}function at(){var e,n;return e=Zn,t.substr(Zn,2)===an?(n=an,Zn+=2):(n=null,0===ar&&b(on)),null!==n&&(Qn=e,n=un()),null===n?(Zn=e,e=n):e=n,e}function ot(){var e,n;return e=Zn,t.substr(Zn,2)===ln?(n=ln,Zn+=2):(n=null,0===ar&&b(sn)),null!==n&&(Qn=e,n=cn()),null===n?(Zn=e,e=n):e=n,e}function ut(){var e,n;return e=Zn,t.substr(Zn,2)===hn?(n=hn,Zn+=2):(n=null,0===ar&&b(pn)),null!==n&&(Qn=e,n=fn()),null===n?(Zn=e,e=n):e=n,e}function it(){var e,n;return e=Zn,t.substr(Zn,2)===dn?(n=dn,Zn+=2):(n=null,0===ar&&b(mn)),null!==n&&(Qn=e,n=gn()),null===n?(Zn=e,e=n):e=n,e}function lt(){var e,n;return e=Zn,t.substr(Zn,2)===vn?(n=vn,Zn+=2):(n=null,0===ar&&b(xn)),null!==n&&(Qn=e,n=yn()),null===n?(Zn=e,e=n):e=n,e}function st(){var e,n;return e=Zn,t.substr(Zn,2)===bn?(n=bn,Zn+=2):(n=null,0===ar&&b(wn)),null!==n&&(Qn=e,n=Cn()),null===n?(Zn=e,e=n):e=n,e}function ct(){var e,n;return e=Zn,t.substr(Zn,2)===kn?(n=kn,Zn+=2):(n=null,0===ar&&b(En)),null!==n&&(Qn=e,n=Rn()),null===n?(Zn=e,e=n):e=n,e}function ht(){var e,n;return e=Zn,t.substr(Zn,2)===An?(n=An,Zn+=2):(n=null,0===ar&&b(_n)),null!==n&&(Qn=e,n=Mn()),null===n?(Zn=e,e=n):e=n,e}function pt(){var e,n,r;return e=Zn,t.substr(Zn,2)===Pn?(n=Pn,Zn+=2):(n=null,0===ar&&b(Tn)),null!==n?(t.length>Zn?(r=t.charAt(Zn),Zn++):(r=null,0===ar&&b(Hn)),null!==r?(Qn=e,n=Sn(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function ft(){var e,n,r;return e=Zn,92===t.charCodeAt(Zn)?(n=Dn,Zn++):(n=null,0===ar&&b(qn)),null!==n?(Fn.test(t.charAt(Zn))?(r=t.charAt(Zn),Zn++):(r=null,0===ar&&b(Ln)),null!==r?(Qn=e,n=On(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}function dt(){var e,n,r,a;if(e=Zn,t.substr(Zn,2)===In?(n=In,Zn+=2):(n=null,0===ar&&b(jn)),null!==n){if(r=[],Nn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(zn)),null!==a)for(;null!==a;)r.push(a),Nn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(zn));else r=kt;null!==r?(Qn=e,n=Un(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)}else Zn=e,e=kt;return e}function mt(){var e,n,r,a;if(e=Zn,t.substr(Zn,2)===Bn?(n=Bn,Zn+=2):(n=null,0===ar&&b(Gn)),null!==n){if(r=[],Xn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(Kn)),null!==a)for(;null!==a;)r.push(a),Xn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(Kn));else r=kt;null!==r?(Qn=e,n=Wn(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)}else Zn=e,e=kt;return e}function gt(){var e,n,r,a;if(e=Zn,t.substr(Zn,2)===Yn?(n=Yn,Zn+=2):(n=null,0===ar&&b($n)),null!==n){if(r=[],Xn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(Kn)),null!==a)for(;null!==a;)r.push(a),Xn.test(t.charAt(Zn))?(a=t.charAt(Zn),Zn++):(a=null,0===ar&&b(Kn));else r=kt;null!==r?(Qn=e,n=Jn(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)}else Zn=e,e=kt;return e}function vt(){var e,n;return e=Zn,t.substr(Zn,2)===In?(n=In,Zn+=2):(n=null,0===ar&&b(jn)),null!==n&&(Qn=e,n=Vn()),null===n?(Zn=e,e=n):e=n,e}function xt(){var e,n,r;return e=Zn,92===t.charCodeAt(Zn)?(n=Dn,Zn++):(n=null,0===ar&&b(qn)),null!==n?(t.length>Zn?(r=t.charAt(Zn),Zn++):(r=null,0===ar&&b(Hn)),null!==r?(Qn=e,n=Fe(r),null===n?(Zn=e,e=n):e=n):(Zn=e,e=kt)):(Zn=e,e=kt),e}var yt,bt=arguments.length>1?arguments[1]:{},wt={regexp:C},Ct=C,kt=null,Et="",Rt="|",At='"|"',_t=function(t,e){return e?new r(t,e[1]):t},Mt=function(t,e,n){return new a([t].concat(e).concat([n]))},Pt="^",Tt='"^"',Ht=function(){return new n("start")},St="$",Dt='"$"',qt=function(){return new n("end")},Ft=function(t,e){return new i(t,e)},Lt="Quantifier",Ot=function(t,e){return e&&(t.greedy=!1),t},It="{",jt='"{"',Nt=",",zt='","',Ut="}",Bt='"}"',Gt=function(t,e){return new l(t,e)},Xt=",}",Kt='",}"',Wt=function(t){return new l(t,1/0)},Yt=function(t){return new l(t,t)},$t="+",Jt='"+"',Vt=function(){return new l(1,1/0)},Zt="*",Qt='"*"',te=function(){return new l(0,1/0)},ee="?",ne='"?"',re=function(){return new l(0,1)},ae=/^[0-9]/,oe="[0-9]",ue=function(t){return+t.join("")},ie="(",le='"("',se=")",ce='")"',he=function(t){return t},pe=function(t){return new u(t)},fe="?:",de='"?:"',me=function(t){return new o("non-capture-group",t)},ge="?=",ve='"?="',xe=function(t){return new o("positive-lookahead",t)},ye="?!",be='"?!"',we=function(t){return new o("negative-lookahead",t)},Ce="CharacterSet",ke="[",Ee='"["',Re="]",Ae='"]"',_e=function(t,e){return new s(!!t,e)},Me="CharacterRange",Pe="-",Te='"-"',He=function(t,e){return new c(t,e)},Se="Character",De=/^[^\\\]]/,qe="[^\\\\\\]]",Fe=function(t){return new h(t)},Le=".",Oe='"."',Ie=function(){return new n("any-character")},je="Literal",Ne=/^[^|\\\/.[()?+*$\^]/,ze="[^|\\\\\\/.[()?+*$\\^]",Ue="\\b",Be='"\\\\b"',Ge=function(){return new n("backspace")},Xe=function(){return new n("word-boundary")},Ke="\\B",We='"\\\\B"',Ye=function(){return new n("non-word-boundary")},$e="\\d",Je='"\\\\d"',Ve=function(){return new n("digit")},Ze="\\D",Qe='"\\\\D"',tn=function(){return new n("non-digit")},en="\\f",nn='"\\\\f"',rn=function(){return new n("form-feed")},an="\\n",on='"\\\\n"',un=function(){return new n("line-feed")},ln="\\r",sn='"\\\\r"',cn=function(){return new n("carriage-return")},hn="\\s",pn='"\\\\s"',fn=function(){return new n("white-space")},dn="\\S",mn='"\\\\S"',gn=function(){return new n("non-white-space")},vn="\\t",xn='"\\\\t"',yn=function(){return new n("tab")},bn="\\v",wn='"\\\\v"',Cn=function(){return new n("vertical-tab")},kn="\\w",En='"\\\\w"',Rn=function(){
return new n("word")},An="\\W",_n='"\\\\W"',Mn=function(){return new n("non-word")},Pn="\\c",Tn='"\\\\c"',Hn="any character",Sn=function(t){return new g(t)},Dn="\\",qn='"\\\\"',Fn=/^[1-9]/,Ln="[1-9]",On=function(t){return new m(t)},In="\\0",jn='"\\\\0"',Nn=/^[0-7]/,zn="[0-7]",Un=function(t){return new d(t.join(""))},Bn="\\x",Gn='"\\\\x"',Xn=/^[0-9a-fA-F]/,Kn="[0-9a-fA-F]",Wn=function(t){return new f(t.join(""))},Yn="\\u",$n='"\\\\u"',Jn=function(t){return new p(t.join(""))},Vn=function(){return new n("null-character")},Zn=0,Qn=0,tr=0,er={line:1,column:1,seenCR:!1},nr=0,rr=[],ar=0;if("startRule"in bt){if(!(bt.startRule in wt))throw new Error("Can't start parsing from rule \""+bt.startRule+'".');Ct=wt[bt.startRule]}if(n.offset=x,n.text=v,yt=Ct(),null!==yt&&Zn===t.length)return yt;throw w(rr),Qn=Math.max(Zn,nr),new e(rr,Qn<t.length?t.charAt(Qn):null,Qn,y(Qn).line,y(Qn).column)}return t(e,Error),{SyntaxError:e,parse:v}}(),x=1,y={};t.exports=v},function(t,e,n){function r(t,e){for(var n="",r=t;e>=r;r++)n+=String.fromCharCode(r);return n}var a=n(3),o=n(5),u={extend:a.extend},i=r(97,122),l=r(65,90),s=r(48,57),c=r(32,47)+r(58,64)+r(91,96)+r(123,126),h=r(32,126),p=" \f\n\r	\x0B \u2028\u2029",f={"\\w":i+l+s+"_","\\W":c.replace("_",""),"\\s":p,"\\S":function(){for(var t=h,e=0;e<p.length;e++)t=t.replace(p[e],"");return t}(),"\\d":s,"\\D":i+l+c};u.gen=function(t,e,n){return n=n||{guid:1},u[t.type]?u[t.type](t,e,n):u.token(t,e,n)},u.extend({token:function(t,e,n){switch(t.type){case"start":case"end":return"";case"any-character":return o.character();case"backspace":return"";case"word-boundary":return"";case"non-word-boundary":break;case"digit":return o.pick(s.split(""));case"non-digit":return o.pick((i+l+c).split(""));case"form-feed":break;case"line-feed":return t.body||t.text;case"carriage-return":break;case"white-space":return o.pick(p.split(""));case"non-white-space":return o.pick((i+l+s).split(""));case"tab":break;case"vertical-tab":break;case"word":return o.pick((i+l+s).split(""));case"non-word":return o.pick(c.replace("_","").split(""));case"null-character":}return t.body||t.text},alternate:function(t,e,n){return this.gen(o["boolean"]()?t.left:t.right,e,n)},match:function(t,e,n){e="";for(var r=0;r<t.body.length;r++)e+=this.gen(t.body[r],e,n);return e},"capture-group":function(t,e,n){return e=this.gen(t.body,e,n),n[n.guid++]=e,e},"non-capture-group":function(t,e,n){return this.gen(t.body,e,n)},"positive-lookahead":function(t,e,n){return this.gen(t.body,e,n)},"negative-lookahead":function(t,e,n){return""},quantified:function(t,e,n){e="";for(var r=this.quantifier(t.quantifier),a=0;r>a;a++)e+=this.gen(t.body,e,n);return e},quantifier:function(t,e,n){var r=Math.max(t.min,0),a=isFinite(t.max)?t.max:r+o.integer(3,7);return o.integer(r,a)},charset:function(t,e,n){if(t.invert)return this["invert-charset"](t,e,n);var r=o.pick(t.body);return this.gen(r,e,n)},"invert-charset":function(t,e,n){for(var r,a=h,u=0;u<t.body.length;u++)switch(r=t.body[u],r.type){case"literal":a=a.replace(r.body,"");break;case"range":for(var i=this.gen(r.start,e,n).charCodeAt(),l=this.gen(r.end,e,n).charCodeAt(),s=i;l>=s;s++)a=a.replace(String.fromCharCode(s),"");default:var c=f[r.text];if(c)for(var p=0;p<=c.length;p++)a=a.replace(c[p],"")}return o.pick(a.split(""))},range:function(t,e,n){var r=this.gen(t.start,e,n).charCodeAt(),a=this.gen(t.end,e,n).charCodeAt();return String.fromCharCode(o.integer(r,a))},literal:function(t,e,n){return t.escaped?t.body:t.text},unicode:function(t,e,n){return String.fromCharCode(parseInt(t.code,16))},hex:function(t,e,n){return String.fromCharCode(parseInt(t.code,16))},octal:function(t,e,n){return String.fromCharCode(parseInt(t.code,8))},"back-reference":function(t,e,n){return n[t.code]||""},CONTROL_CHARACTER_MAP:function(){for(var t="@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "),e="\x00        \b 	 \n \x0B \f \r                  ".split(" "),n={},r=0;r<t.length;r++)n[t[r]]=e[r];return n}(),"control-character":function(t,e,n){return this.CONTROL_CHARACTER_MAP[t.code]}}),t.exports=u},function(t,e,n){t.exports=n(24)},function(t,e,n){function r(t,e,n){n=n||[];var i={name:"string"==typeof e?e.replace(a.RE_KEY,"$1"):e,template:t,type:o.type(t),rule:u.parse(e)};switch(i.path=n.slice(0),i.path.push(void 0===e?"ROOT":i.name),i.type){case"array":i.items=[],o.each(t,function(t,e){i.items.push(r(t,e,i.path))});break;case"object":i.properties=[],o.each(t,function(t,e){i.properties.push(r(t,e,i.path))})}return i}var a=n(2),o=n(3),u=n(4);t.exports=r},function(t,e,n){t.exports=n(26)},function(t,e,n){function r(t,e){for(var n=u(t),r=i.diff(n,e),a=0;a<r.length;a++);return r}var a=n(2),o=n(3),u=n(23),i={diff:function(t,e,n){var r=[];return this.name(t,e,n,r)&&this.type(t,e,n,r)&&(this.value(t,e,n,r),this.properties(t,e,n,r),this.items(t,e,n,r)),r},name:function(t,e,n,r){var a=r.length;return l.equal("name",t.path,n+"",t.name+"",r),r.length===a},type:function(t,e,n,r){var u=r.length;switch(t.type){case"string":if(t.template.match(a.RE_PLACEHOLDER))return!0;break;case"array":if(t.rule.parameters){if(void 0!==t.rule.min&&void 0===t.rule.max&&1===t.rule.count)return!0;if(t.rule.parameters[2])return!0}break;case"function":return!0}return l.equal("type",t.path,o.type(e),t.type,r),r.length===u},value:function(t,e,n,r){var o=r.length,u=t.rule,i=t.type;if("object"===i||"array"===i||"function"===i)return!0;if(!u.parameters){switch(i){case"regexp":return l.match("value",t.path,e,t.template,r),r.length===o;case"string":if(t.template.match(a.RE_PLACEHOLDER))return r.length===o}return l.equal("value",t.path,e,t.template,r),r.length===o}var s;switch(i){case"number":var c=(e+"").split(".");c[0]=+c[0],void 0!==u.min&&void 0!==u.max&&(l.greaterThanOrEqualTo("value",t.path,c[0],Math.min(u.min,u.max),r),l.lessThanOrEqualTo("value",t.path,c[0],Math.max(u.min,u.max),r)),void 0!==u.min&&void 0===u.max&&l.equal("value",t.path,c[0],u.min,r,"[value] "+n),u.decimal&&(void 0!==u.dmin&&void 0!==u.dmax&&(l.greaterThanOrEqualTo("value",t.path,c[1].length,u.dmin,r),l.lessThanOrEqualTo("value",t.path,c[1].length,u.dmax,r)),void 0!==u.dmin&&void 0===u.dmax&&l.equal("value",t.path,c[1].length,u.dmin,r));break;case"boolean":break;case"string":s=e.match(new RegExp(t.template,"g")),s=s?s.length:0,void 0!==u.min&&void 0!==u.max&&(l.greaterThanOrEqualTo("repeat count",t.path,s,u.min,r),l.lessThanOrEqualTo("repeat count",t.path,s,u.max,r)),void 0!==u.min&&void 0===u.max&&l.equal("repeat count",t.path,s,u.min,r);break;case"regexp":s=e.match(new RegExp(t.template.source.replace(/^\^|\$$/g,""),"g")),s=s?s.length:0,void 0!==u.min&&void 0!==u.max&&(l.greaterThanOrEqualTo("repeat count",t.path,s,u.min,r),l.lessThanOrEqualTo("repeat count",t.path,s,u.max,r)),void 0!==u.min&&void 0===u.max&&l.equal("repeat count",t.path,s,u.min,r)}return r.length===o},properties:function(t,e,n,r){var a=r.length,u=t.rule,i=o.keys(e);if(t.properties){if(t.rule.parameters?(void 0!==u.min&&void 0!==u.max&&(l.greaterThanOrEqualTo("properties length",t.path,i.length,Math.min(u.min,u.max),r),l.lessThanOrEqualTo("properties length",t.path,i.length,Math.max(u.min,u.max),r)),void 0!==u.min&&void 0===u.max&&1!==u.count&&l.equal("properties length",t.path,i.length,u.min,r)):l.equal("properties length",t.path,i.length,t.properties.length,r),r.length!==a)return!1;for(var s=0;s<i.length;s++)r.push.apply(r,this.diff(function(){var e;return o.each(t.properties,function(t){t.name===i[s]&&(e=t)}),e||t.properties[s]}(),e[i[s]],i[s]));return r.length===a}},items:function(t,e,n,r){var a=r.length;if(t.items){var o=t.rule;if(t.rule.parameters){if(void 0!==o.min&&void 0!==o.max&&(l.greaterThanOrEqualTo("items",t.path,e.length,Math.min(o.min,o.max)*t.items.length,r,"[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"),l.lessThanOrEqualTo("items",t.path,e.length,Math.max(o.min,o.max)*t.items.length,r,"[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")),void 0!==o.min&&void 0===o.max){if(1===o.count)return r.length===a;l.equal("items length",t.path,e.length,o.min*t.items.length,r)}if(o.parameters[2])return r.length===a}else l.equal("items length",t.path,e.length,t.items.length,r);if(r.length!==a)return!1;for(var u=0;u<e.length;u++)r.push.apply(r,this.diff(t.items[u%t.items.length],e[u],u%t.items.length));return r.length===a}}},l={message:function(t){return(t.message||"[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}",t.type.toUpperCase()).replace("{ltype}",t.type.toLowerCase()).replace("{path}",o.isArray(t.path)&&t.path.join(".")||t.path).replace("{action}",t.action).replace("{expected}",t.expected).replace("{actual}",t.actual)},equal:function(t,e,n,r,a,o){if(n===r)return!0;switch(t){case"type":if("regexp"===r&&"string"===n)return!0}var u={path:e,type:t,actual:n,expected:r,action:"is equal to",message:o};return u.message=l.message(u),a.push(u),!1},match:function(t,e,n,r,a,o){if(r.test(n))return!0;var u={path:e,type:t,actual:n,expected:r,action:"matches",message:o};return u.message=l.message(u),a.push(u),!1},notEqual:function(t,e,n,r,a,o){if(n!==r)return!0;var u={path:e,type:t,actual:n,expected:r,action:"is not equal to",message:o};return u.message=l.message(u),a.push(u),!1},greaterThan:function(t,e,n,r,a,o){if(n>r)return!0;var u={path:e,type:t,actual:n,expected:r,action:"is greater than",message:o};return u.message=l.message(u),a.push(u),!1},lessThan:function(t,e,n,r,a,o){if(r>n)return!0;var u={path:e,type:t,actual:n,expected:r,action:"is less to",message:o};return u.message=l.message(u),a.push(u),!1},greaterThanOrEqualTo:function(t,e,n,r,a,o){if(n>=r)return!0;var u={path:e,type:t,actual:n,expected:r,action:"is greater than or equal to",message:o};return u.message=l.message(u),a.push(u),!1},lessThanOrEqualTo:function(t,e,n,r,a,o){if(r>=n)return!0;var u={path:e,type:t,actual:n,expected:r,action:"is less than or equal to",message:o};return u.message=l.message(u),a.push(u),!1}};r.Diff=i,r.Assert=l,t.exports=r},function(t,e,n){t.exports=n(28)},function(t,e,n){function r(){this.custom={events:{},requestHeaders:{},responseHeaders:{}}}function a(){function t(){try{return new window._XMLHttpRequest}catch(t){}}function e(){try{return new window._ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}var n=function(){var t=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,e=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,n=location.href,r=e.exec(n.toLowerCase())||[];return t.test(r[1])}();return window.ActiveXObject?!n&&t()||e():t()}function o(t){function e(t,e){return"string"===i.type(t)?t===e:"regexp"===i.type(t)?t.test(e):void 0}for(var n in r.Mock._mocked){var a=r.Mock._mocked[n];if((!a.rurl||e(a.rurl,t.url))&&(!a.rtype||e(a.rtype,t.type.toLowerCase())))return a}}function u(t,e){return i.isFunction(t.template)?t.template(e):r.Mock.mock(t.template)}var i=n(3);window._XMLHttpRequest=window.XMLHttpRequest,window._ActiveXObject=window.ActiveXObject;try{new window.Event("custom")}catch(l){window.Event=function(t,e,n,r){var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,e,n,r),a}}var s={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},c="readystatechange loadstart progress abort error load timeout loadend".split(" "),h="timeout withCredentials".split(" "),p="readyState responseURL status statusText responseType response responseText responseXML".split(" "),f={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};r._settings={timeout:"10-100"},r.setup=function(t){return i.extend(r._settings,t),r._settings},i.extend(r,s),i.extend(r.prototype,s),r.prototype.mock=!0,r.prototype.match=!1,i.extend(r.prototype,{open:function(t,e,n,u,l){function s(t){for(var e=0;e<p.length;e++)try{f[p[e]]=m[p[e]]}catch(n){}f.dispatchEvent(new Event(t.type))}var f=this;i.extend(this.custom,{method:t,url:e,async:"boolean"==typeof n?n:!0,username:u,password:l,options:{url:e,type:t}}),this.custom.timeout=function(t){if("number"==typeof t)return t;if("string"==typeof t&&!~t.indexOf("-"))return parseInt(t,10);if("string"==typeof t&&~t.indexOf("-")){var e=t.split("-"),n=parseInt(e[0],10),r=parseInt(e[1],10);return Math.round(Math.random()*(r-n))+n}}(r._settings.timeout);var d=o(this.custom.options);if(d)this.match=!0,this.custom.template=d,this.readyState=r.OPENED,this.dispatchEvent(new Event("readystatechange"));else{var m=a();this.custom.xhr=m;for(var g=0;g<c.length;g++)m.addEventListener(c[g],s);u?m.open(t,e,n,u,l):m.open(t,e,n);for(var v=0;v<h.length;v++)try{m[h[v]]=f[h[v]]}catch(x){}}},setRequestHeader:function(t,e){if(!this.match)return void this.custom.xhr.setRequestHeader(t,e);var n=this.custom.requestHeaders;n[t]?n[t]+=","+e:n[t]=e},timeout:0,withCredentials:!1,upload:{},send:function(t){function e(){n.readyState=r.HEADERS_RECEIVED,n.dispatchEvent(new Event("readystatechange")),n.readyState=r.LOADING,n.dispatchEvent(new Event("readystatechange")),n.status=200,n.statusText=f[200],n.response=n.responseText=JSON.stringify(u(n.custom.template,n.custom.options),null,4),n.readyState=r.DONE,n.dispatchEvent(new Event("readystatechange")),n.dispatchEvent(new Event("load")),n.dispatchEvent(new Event("loadend"))}var n=this;return this.custom.options.body=t,this.match?(this.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),this.dispatchEvent(new Event("loadstart")),void(this.custom.async?setTimeout(e,this.custom.timeout):e())):void this.custom.xhr.send(t)},abort:function(){return this.match?(this.readyState=r.UNSENT,this.dispatchEvent(new Event("abort",!1,!1,this)),void this.dispatchEvent(new Event("error",!1,!1,this))):void this.custom.xhr.abort()}}),i.extend(r.prototype,{responseURL:"",status:r.UNSENT,statusText:"",getResponseHeader:function(t){return this.match?this.custom.responseHeaders[t.toLowerCase()]:this.custom.xhr.getResponseHeader(t)},getAllResponseHeaders:function(){if(!this.match)return this.custom.xhr.getAllResponseHeaders();var t=this.custom.responseHeaders,e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+": "+t[n]+"\r\n");return e},overrideMimeType:function(){},responseType:"",response:null,responseText:"",responseXML:null}),i.extend(r.prototype,{addEventListener:function(t,e){var n=this.custom.events;n[t]||(n[t]=[]),n[t].push(e)},removeEventListener:function(t,e){for(var n=this.custom.events[t]||[],r=0;r<n.length;r++)n[r]===e&&n.splice(r--,1)},dispatchEvent:function(t){for(var e=this.custom.events[t.type]||[],n=0;n<e.length;n++)e[n].call(this,t);var r="on"+t.type;this[r]&&this[r](t)}}),t.exports=r}])});
//# sourceMappingURL=mock-min.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(30)


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(0);

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(0);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._81 = 1;
  p._65 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._81 === 3) {
            val = val._65;
          }
          if (val._81 === 1) return res(i, val._65);
          if (val._81 === 2) reject(val._65);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(0);

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(0);
__webpack_require__(27);
__webpack_require__(29);
__webpack_require__(28);
__webpack_require__(31);
__webpack_require__(32);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = __webpack_require__(0);
var asap = __webpack_require__(4);

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
}

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(0);

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._81 === 3) {
      return this._65.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._65;
  };

  Promise.prototype.getReason = function () {
    if (this._81 === 3) {
      return this._65.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._65;
  };

  Promise.prototype.getState = function () {
    if (this._81 === 3) {
      return this._65.getState();
    }
    if (this._81 === -1 || this._81 === -2) {
      return 0;
    }

    return this._81;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/wwwroot/github/vue-dev-base/src/pages/index/nav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68f8801f", Component.options)
  } else {
    hotAPI.reload("data-v-68f8801f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/wwwroot/github/vue-dev-base/src/pages/index/views/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4db05397", Component.options)
  } else {
    hotAPI.reload("data-v-4db05397", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/wwwroot/github/vue-dev-base/src/pages/index/views/post/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-442efa18", Component.options)
  } else {
    hotAPI.reload("data-v-442efa18", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/wwwroot/github/vue-dev-base/src/pages/index/views/user/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be0d8fa", Component.options)
  } else {
    hotAPI.reload("data-v-5be0d8fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("这是文章详情页，编号是" + _vm._s(_vm.$route.params.id))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-442efa18", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("这是首页")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4db05397", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("这是用户信息")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5be0d8fa", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', _vm._l((_vm.$store.state.common.navList), function(item) {
    return _c('li', [_vm._v("\n        nav: "), _c('span', {
      staticClass: "icon-edit"
    }), _c('router-link', {
      attrs: {
        "to": item.path
      }
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68f8801f", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.3.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // inject instance registration hooks
    var hooks = data.hook || (data.hook = {});
    hooks.init = function (vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.prepatch = function (oldVnode, vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.destroy = function (vnode) {
      if (matched.instances[name] === vnode.child) {
        matched.instances[name] = undefined;
      }
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more comformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = location.path ? createRoute(null, location) : route;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.target && e.target.getAttribute) {
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (
  routes,
  oldPathMap,
  oldNameMap
) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null);

function getRouteRegex (path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      );
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
  }
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, onAbort);
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function () { onAbort && onAbort(); };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true);
        abort();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
        abort();
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  return function boundRouteGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = once(function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        });

        var reject = once(function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        });

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady (cb) {
  this.history.onReady(cb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(to, current || this.history.current, append);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.3.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/*!
 * Vue.js v2.2.6
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e);return isNaN(t)?e:t}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return $i.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return ki.call(e)===Ai}function p(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function d(){}function v(e,t){var n=l(e),r=l(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{return JSON.stringify(e)===JSON.stringify(t)}catch(n){return e===t}}function h(e,t){for(var n=0;n<e.length;n++)if(v(e[n],t))return n;return-1}function m(e){var t=!1;return function(){t||(t=!0,e())}}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!ji.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){qi.target&&Wi.push(qi.target),qi.target=e}function w(){qi.target=Wi.pop()}function x(e,t){e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function k(e,t){if(l(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof Xi?n=e.__ob__:Qi.shouldConvert&&!Ui()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Xi(e)),t&&n&&n.vmCount++,n}}function A(e,t,n,r){var i=new qi,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return qi.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&S(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}function O(e,t,n){if(Array.isArray(e)&&"number"==typeof t)return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(A(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function T(e,t){if(Array.isArray(e)&&"number"==typeof t)return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function S(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&S(t)}function E(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&E(r,o):O(e,n,o);return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?u(n,t):n}function I(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)"string"==typeof(r=t[n])&&(i=wi(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=wi(a),o[i]=f(r)?r:{type:r};e.props=o}}function L(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function D(e,t,n){function r(r){var i=eo[r]||to;l[r]=i(e[r],t[r],n,r)}I(t),L(t);var o=t.extends;if(o&&(e="function"==typeof o?D(e,o.options,n):D(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof nt&&(c=c.options),e=D(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function M(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=wi(n);if(i(o,a))return o[a];var s=xi(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function P(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(H(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:H(String,o.type)||""!==s&&s!==Ci(e)||(s=!0)),void 0===s){s=R(r,o,e);var c=Qi.shouldConvert;Qi.shouldConvert=!0,k(s),Qi.shouldConvert=c}return s}function R(e,t,n){if(i(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==F(t.type)?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function H(e,t){if(!Array.isArray(t))return F(t)===F(e);for(var n=0,r=t.length;n<r;n++)if(F(t[n])===F(e))return!0;return!1}function U(e,t,n){if(Si.errorHandler)Si.errorHandler.call(null,e,t,n);else{if(!Ii||"undefined"==typeof console)throw e;console.error(e)}}function B(e){return new no(void 0,void 0,void 0,String(e))}function V(e){var t=new no(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function z(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=V(e[r]);return n}function J(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function K(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=ao(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=J(a)),n(c.name,a,c.once,c.capture)));for(o in t)e[o]||(c=ao(o),r(c.name,t[o],c.capture))}function q(e,t,n){function i(){n.apply(this,arguments),r(o.fns,i)}var o,a=e[t];a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=J([a,i]):o=J([i]),o.merged=!0,e[t]=o}function W(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Z(e){return o(e)?[B(e)]:Array.isArray(e)?G(e):void 0}function G(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)null!=(r=e[n])&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,G(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(B(r)):r.text&&i&&i.text?a[a.length-1]=B(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Y(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function Q(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&te(e,t)}function X(e,t,n){n?io.$once(e,t):io.$on(e,t)}function ee(e,t){io.$off(e,t)}function te(e,t,n){io=e,K(t,n||{},X,ee,e)}function ne(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)}else o.push(i);return o.every(re)||(n.default=o),n}function re(e){return e.isComment||" "===e.text}function ie(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function oe(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ae(e,t,n){e.$el=t,e.$options.render||(e.$options.render=oo),fe(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new ho(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,fe(e,"mounted")),e}function se(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Ei);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){Qi.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=P(u,e.$options.props,t,e)}Qi.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,te(e,n,l)}o&&(e.$slots=ne(i,r.context),e.$forceUpdate())}function ce(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function ue(e,t){if(t){if(e._directInactive=!1,ce(e))return}else if(e._directInactive)return;if(e._inactive||null==e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)ue(e.$children[n]);fe(e,"activated")}}function le(e,t){if(!(t&&(e._directInactive=!0,ce(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)le(e.$children[n]);fe(e,"deactivated")}}function fe(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){U(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function pe(){co.length=0,uo={},lo=fo=!1}function de(){fo=!0;var e,t,n;for(co.sort(function(e,t){return e.id-t.id}),po=0;po<co.length;po++)e=co[po],t=e.id,uo[t]=null,e.run();var r=co.slice();for(pe(),po=r.length;po--;)e=r[po],n=e.vm,n._watcher===e&&n._isMounted&&fe(n,"updated");Bi&&Si.devtools&&Bi.emit("flush")}function ve(e){var t=e.id;if(null==uo[t]){if(uo[t]=!0,fo){for(var n=co.length-1;n>=0&&co[n].id>e.id;)n--;co.splice(Math.max(n,po)+1,0,e)}else co.push(e);lo||(lo=!0,zi(de))}}function he(e){mo.clear(),me(e,mo)}function me(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)me(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)me(e[r[n]],t)}}function ge(e,t,n){go.get=function(){return this[t][n]},go.set=function(e){this[t][n]=e},Object.defineProperty(e,n,go)}function ye(e){e._watchers=[];var t=e.$options;t.props&&_e(e,t.props),t.methods&&ke(e,t.methods),t.data?be(e):k(e._data={},!0),t.computed&&we(e,t.computed),t.watch&&Ae(e,t.watch)}function _e(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;Qi.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=P(o,t,n,e);A(r,o,a),o in e||ge(e,"_props",o)}(a);Qi.shouldConvert=!0}function be(e){var t=e.$options.data;t=e._data="function"==typeof t?$e(t,e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||g(n[o])||ge(e,"_data",n[o]);k(t,!0)}function $e(e,t){try{return e.call(t)}catch(e){return U(e,t,"data()"),{}}}function we(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new ho(e,o,d,yo),r in e||xe(e,r,i)}}function xe(e,t,n){"function"==typeof n?(go.get=Ce(t),go.set=d):(go.get=n.get?n.cache!==!1?Ce(t):n.get:d,go.set=n.set?n.set:d),Object.defineProperty(e,t,go)}function Ce(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),qi.target&&t.depend(),t.value}}function ke(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?d:s(t[n],e)}function Ae(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Oe(e,n,r[i]);else Oe(e,n,r)}}function Oe(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Te(e,t,n,r,i){if(e){var o=n.$options._base;if(l(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(!(e=je(e,o,function(){n.$forceUpdate()})))return;Xe(e),t=t||{},t.model&&Me(e.options,t);var a=Ne(t,e,i);if(e.options.functional)return Se(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),Le(t);var c=e.options.name||i;return new no("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r})}}}function Se(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=P(s,a,t);var c=Object.create(r),u=function(e,t,n,r){return Pe(c,e,t,n,r,!0)},l=e.options.render.call(null,u,{props:o,data:n,parent:r,children:i,slots:function(){return ne(i,r)}});return l instanceof no&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function Ee(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function je(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function Ne(e,t,n){var r=t.options.props;if(r){var i={},o=e.attrs,a=e.props,s=e.domProps;if(o||a||s)for(var c in r){var u=Ci(c);Ie(i,a,c,u,!0)||Ie(i,o,c,u)||Ie(i,s,c,u)}return i}}function Ie(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function Le(e){e.hook||(e.hook={});for(var t=0;t<bo.length;t++){var n=bo[t],r=e.hook[n],i=_o[n];e.hook[n]=r?De(i,r):i}}function De(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function Me(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});i[r]?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}function Pe(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=wo),Re(e,t,n,r,i)}function Re(e,t,n,r,i){if(n&&n.__ob__)return oo();if(!t)return oo();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===wo?r=Z(r):i===$o&&(r=W(r));var o,a;if("string"==typeof t){var s;a=Si.getTagNamespace(t),o=Si.isReservedTag(t)?new no(Si.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=M(e.$options,"components",t))?Te(s,n,e,r,t):new no(t,n,r,void 0,void 0,e)}else o=Te(t,n,e,r);return o?(a&&Fe(o,a),o):oo()}function Fe(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Fe(i,t)}}function He(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n}function Ue(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&u(n,r),i(n)||t;var o=this.$slots[e];return o||t}function Be(e){return M(this.$options,"filters",e,!0)||Ti}function Ve(e,t,n){var r=Si.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e}function ze(e,t,n,r){if(n)if(l(n)){Array.isArray(n)&&(n=p(n));var i;for(var o in n){if("class"===o||"style"===o)i=e;else{var a=e.attrs&&e.attrs.type;i=r||Si.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in i||(i[o]=n[o])}}else;return e}function Je(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?z(n):V(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),qe(n,"__static__"+e,!1),n)}function Ke(e,t,n){return qe(e,"__once__"+t+(n?"_"+n:""),!0),e}function qe(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&We(e[r],t+"_"+r,n);else We(e,t,n)}function We(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Ze(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=ne(e.$options._renderChildren,n),e.$scopedSlots=Ei,e._c=function(t,n,r,i){return Pe(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Pe(e,t,n,r,i,!0)}}function Ge(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ye(e){var t=e.$options.inject;if(t)for(var n=Array.isArray(t),r=n?t:Vi?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)!function(i){for(var o=r[i],a=n?o:t[o],s=e;s;){if(s._provided&&a in s._provided){A(e,o,s._provided[a]);break}s=s.$parent}}(i)}function Qe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Xe(e){var t=e.options;if(e.super){var n=Xe(e.super);if(n!==e.superOptions){e.superOptions=n;var r=et(e);r&&u(e.extendOptions,r),t=e.options=D(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function et(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=tt(n[i],r[i]));return t}function tt(e,t){if(Array.isArray(e)){var n=[];t=Array.isArray(t)?t:[t];for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);return n}return e}function nt(e){this._init(e)}function rt(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function it(e){e.mixin=function(e){this.options=D(this.options,e)}}function ot(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=D(n.options,e),a.super=n,a.options.props&&at(a),a.options.computed&&st(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Si._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),i[r]=a,a}}function at(e){var t=e.options.props;for(var n in t)ge(e.prototype,"_props",n)}function st(e){var t=e.options.computed;for(var n in t)xe(e.prototype,n,t[n])}function ct(e){Si._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function ut(e){return e&&(e.Ctor.options.name||e.tag)}function lt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp&&e.test(t)}function ft(e,t){for(var n in e){var r=e[n];if(r){var i=ut(r.componentOptions);i&&!t(i)&&(pt(r),e[n]=null)}}}function pt(e){e&&(e.componentInstance._inactive||fe(e.componentInstance,"deactivated"),e.componentInstance.$destroy())}function dt(e){for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=vt(r.data,t));for(;n=n.parent;)n.data&&(t=vt(t,n.data));return ht(t)}function vt(e,t){return{staticClass:mt(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function ht(e){var t=e.class,n=e.staticClass;return n||t?mt(n,gt(t)):""}function mt(e,t){return e?t?e+" "+t:e:t||""}function gt(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=gt(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function yt(e){return Ko(e)?"svg":"math"===e?"math":void 0}function _t(e){if(!Ii)return!0;if(Wo(e))return!1;if(e=e.toLowerCase(),null!=Zo[e])return Zo[e];var t=document.createElement(e);return e.indexOf("-")>-1?Zo[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Zo[e]=/HTMLUnknownElement/.test(t.toString())}function bt(e){if("string"==typeof e){var t=document.querySelector(e);return t?t:document.createElement("div")}return e}function $t(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function wt(e,t){return document.createElementNS(zo[e],t)}function xt(e){return document.createTextNode(e)}function Ct(e){return document.createComment(e)}function kt(e,t,n){e.insertBefore(t,n)}function At(e,t){e.removeChild(t)}function Ot(e,t){e.appendChild(t)}function Tt(e){return e.parentNode}function St(e){return e.nextSibling}function Et(e){return e.tagName}function jt(e,t){e.textContent=t}function Nt(e,t,n){e.setAttribute(t,n)}function It(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function Lt(e){return void 0===e||null===e}function Dt(e){return void 0!==e&&null!==e}function Mt(e){return e===!0}function Pt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&Dt(e.data)===Dt(t.data)&&Rt(e,t)}function Rt(e,t){if("input"!==e.tag)return!0;var n;return(Dt(n=e.data)&&Dt(n=n.attrs)&&n.type)===(Dt(n=t.data)&&Dt(n=n.attrs)&&n.type)}function Ft(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,Dt(i)&&(o[i]=r);return o}function Ht(e,t){(e.data.directives||t.data.directives)&&Ut(e,t)}function Ut(e,t){var n,r,i,o=e===Qo,a=t===Qo,s=Bt(e.data.directives,e.context),c=Bt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,zt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(zt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)zt(u[n],"inserted",t,e)};o?q(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&q(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)zt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||zt(s[n],"unbind",e,e,a)}function Bt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=ta),n[Vt(i)]=i,i.def=M(t.$options,"directives",i.name,!0);return n}function Vt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function zt(e,t,n,r,i){var o=e.def&&e.def[t];o&&o(n.elm,e,n,r,i)}function Jt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i=t.elm,o=e.data.attrs||{},a=t.data.attrs||{};a.__ob__&&(a=t.data.attrs=u({},a));for(n in a)r=a[n],o[n]!==r&&Kt(i,n,r);Mi&&a.value!==o.value&&Kt(i,"value",a.value);for(n in o)null==a[n]&&(Uo(n)?i.removeAttributeNS(Ho,Bo(n)):Ro(n)||i.removeAttribute(n))}}function Kt(e,t,n){Fo(t)?Vo(n)?e.removeAttribute(t):e.setAttribute(t,t):Ro(t)?e.setAttribute(t,Vo(n)||"false"===n?"false":"true"):Uo(t)?Vo(n)?e.removeAttributeNS(Ho,Bo(t)):e.setAttributeNS(Ho,t,n):Vo(n)?e.removeAttribute(t):e.setAttribute(t,n)}function qt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=dt(t),a=n._transitionClasses;a&&(o=mt(o,gt(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function Wt(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&oa.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=Zt(o,a[i]);return o}function Zt(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function Gt(e){console.error("[Vue compiler]: "+e)}function Yt(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Qt(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function Xt(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function en(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function tn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):o[t]=s?i?[a,s]:[s,a]:a}function nn(e,t,n){var r=rn(e,":"+t)||rn(e,"v-bind:"+t);if(null!=r)return Wt(r);if(n!==!1){var i=rn(e,t);if(null!=i)return JSON.stringify(i)}}function rn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function on(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=an(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function an(e,t){var n=sn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function sn(e){if(To=e,Oo=To.length,Eo=jo=No=0,e.indexOf("[")<0||e.lastIndexOf("]")<Oo-1)return{exp:e,idx:null};for(;!un();)So=cn(),ln(So)?pn(So):91===So&&fn(So);return{exp:e.substring(0,jo),idx:e.substring(jo+1,No)}}function cn(){return To.charCodeAt(++Eo)}function un(){return Eo>=Oo}function ln(e){return 34===e||39===e}function fn(e){var t=1;for(jo=Eo;!un();)if(e=cn(),ln(e))pn(e);else if(91===e&&t++,93===e&&t--,0===t){No=Eo;break}}function pn(e){for(var t=e;!un()&&(e=cn())!==t;);}function dn(e,t,n){Io=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)mn(e,r,i);else if("input"===o&&"checkbox"===a)vn(e,r,i);else if("input"===o&&"radio"===a)hn(e,r,i);else if("input"===o||"textarea"===o)gn(e,r,i);else if(!Si.isReservedTag(o))return on(e,r,i),!1;return!0}function vn(e,t,n){var r=n&&n.number,i=nn(e,"value")||"null",o=nn(e,"true-value")||"true",a=nn(e,"false-value")||"false";Qt(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),tn(e,sa,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function hn(e,t,n){var r=n&&n.number,i=nn(e,"value")||"null";i=r?"_n("+i+")":i,Qt(e,"checked","_q("+t+","+i+")"),tn(e,sa,an(t,i),null,!0)}function mn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+an(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),tn(e,"change",o,null,!0)}function gn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?aa:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=an(t,l);c&&(f="if($event.target.composing)return;"+f),Qt(e,"value","("+t+")"),tn(e,u,f,null,!0),(s||a||"number"===r)&&tn(e,"blur","$forceUpdate()")}function yn(e){var t;e[aa]&&(t=Di?"change":"input",e[t]=[].concat(e[aa],e[t]||[]),delete e[aa]),e[sa]&&(t=Hi?"click":"change",e[t]=[].concat(e[sa],e[t]||[]),delete e[sa])}function _n(e,t,n,r){if(n){var i=t,o=Lo;t=function(n){null!==(1===arguments.length?i(n):i.apply(null,arguments))&&bn(e,t,r,o)}}Lo.addEventListener(e,t,r)}function bn(e,t,n,r){(r||Lo).removeEventListener(e,t,n)}function $n(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Lo=t.elm,yn(n),K(n,r,_n,bn,t.context)}}function wn(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);xn(i,t,s)&&(i.value=s)}else i[n]=r}}function xn(e,t,n){return!e.composing&&("option"===t.tag||Cn(e,n)||kn(e,n))}function Cn(e,t){return document.activeElement!==e&&e.value!==t}function kn(e,n){var r=e.value,i=e._vModifiers;return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function An(e){var t=On(e.style);return e.staticStyle?u(e.staticStyle,t):t}function On(e){return Array.isArray(e)?p(e):"string"==typeof e?la(e):e}function Tn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=An(i.data))&&u(r,n);(n=An(e.data))&&u(r,n);for(var o=e;o=o.parent;)o.data&&(n=An(o.data))&&u(r,n);return r}function Sn(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=On(t.data.style)||{};t.data.style=f.__ob__?u({},f):f;var p=Tn(t,!0);for(o in l)null==p[o]&&da(a,o,"");for(o in p)(i=p[o])!==l[o]&&da(a,o,null==i?"":i)}}function En(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function jn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Nn(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,ga(e.name||"v")),u(t,e),t}return"string"==typeof e?ga(e):void 0}}function In(e){ka(function(){ka(e)})}function Ln(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),En(e,t)}function Dn(e,t){e._transitionClasses&&r(e._transitionClasses,t),jn(e,t)}function Mn(e,t,n){var r=Pn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===_a?wa:Ca,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Pn(e,t){var n,r=window.getComputedStyle(e),i=r[$a+"Delay"].split(", "),o=r[$a+"Duration"].split(", "),a=Rn(i,o),s=r[xa+"Delay"].split(", "),c=r[xa+"Duration"].split(", "),u=Rn(s,c),l=0,f=0;return t===_a?a>0&&(n=_a,l=a,f=o.length):t===ba?u>0&&(n=ba,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?_a:ba:null,f=n?n===_a?o.length:c.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===_a&&Aa.test(r[$a+"Property"])}}function Rn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Fn(t)+Fn(e[n])}))}function Fn(e){return 1e3*Number(e.slice(0,-1))}function Hn(e,n){var r=e.elm;r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=Nn(e.data.transition);if(i&&!r._enterCb&&1===r.nodeType){for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,g=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,x=i.duration,C=so,k=so.$vnode;k&&k.parent;)k=k.parent,C=k.context;var A=!C._isMounted||!e.isRootInsert;if(!A||b||""===b){var O=A&&f?f:s,T=A&&d?d:u,S=A&&p?p:c,E=A?_||v:v,j=A&&"function"==typeof b?b:h,N=A?$||g:g,I=A?w||y:y,L=t(l(x)?x.enter:x),D=o!==!1&&!Mi,M=Vn(j),P=r._enterCb=m(function(){D&&(Dn(r,S),Dn(r,T)),P.cancelled?(D&&Dn(r,O),I&&I(r)):N&&N(r),r._enterCb=null});e.data.show||q(e.data.hook||(e.data.hook={}),"insert",function(){var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,P)}),E&&E(r),D&&(Ln(r,O),Ln(r,T),In(function(){Ln(r,S),Dn(r,O),P.cancelled||M||(Bn(L)?setTimeout(P,L):Mn(r,a,P))})),e.data.show&&(n&&n(),j&&j(r,P)),D||M||P()}}}function Un(e,n){function r(){w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),_&&(Ln(i,c),Ln(i,f),In(function(){Ln(i,u),Dn(i,c),w.cancelled||b||(Bn($)?setTimeout(w,$):Mn(i,s,w))})),d&&d(i,w),_||b||w())}var i=e.elm;i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());var o=Nn(e.data.transition);if(!o)return n();if(!i._leaveCb&&1===i.nodeType){
var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,g=o.delayLeave,y=o.duration,_=a!==!1&&!Mi,b=Vn(d),$=t(l(y)?y.leave:y),w=i._leaveCb=m(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Dn(i,u),Dn(i,f)),w.cancelled?(_&&Dn(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null});g?g(r):r()}}function Bn(e){return"number"==typeof e&&!isNaN(e)}function Vn(e){if(!e)return!1;var t=e.fns;return t?Vn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function zn(e,t){t.data.show||Hn(t)}function Jn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=h(r,qn(a))>-1,a.selected!==o&&(a.selected=o);else if(v(qn(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Kn(e,t){for(var n=0,r=t.length;n<r;n++)if(v(qn(t[n]),e))return!1;return!0}function qn(e){return"_value"in e?e._value:e.value}function Wn(e){e.target.composing=!0}function Zn(e){e.target.composing=!1,Gn(e.target,"input")}function Gn(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Yn(e){return!e.componentInstance||e.data&&e.data.transition?e:Yn(e.componentInstance._vnode)}function Qn(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Qn(Y(t.children)):e}function Xn(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[wi(o)]=i[o];return t}function er(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function tr(e){for(;e=e.parent;)if(e.data.transition)return!0}function nr(e,t){return t.key===e.key&&t.tag===e.tag}function rr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ir(e){e.data.newPos=e.elm.getBoundingClientRect()}function or(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function ar(e){return Fa=Fa||document.createElement("div"),Fa.innerHTML=e,Fa.textContent}function sr(e,t){var n=t?ws:$s;return e.replace(n,function(e){return bs[e]})}function cr(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Oi,u=t.canBeLeftOpenTag||Oi,l=0;e;){if(i=e,o&&ys(o)){var f=o.toLowerCase(),p=_s[f]||(_s[f]=new RegExp("([\\s\\S]*?)(</"+f+"[^>]*>)","i")),d=0,v=e.replace(p,function(e,n,r){return d=r.length,ys(f)||"noscript"===f||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(f,l-d,l)}else{var h=e.indexOf("<");if(0===h){if(Ya.test(e)){var m=e.indexOf("-->");if(m>=0){n(m+3);continue}}if(Qa.test(e)){var g=e.indexOf("]>");if(g>=0){n(g+2);continue}}var y=e.match(Ga);if(y){n(y[0].length);continue}var _=e.match(Za);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(qa);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(Wa))&&(o=e.match(Ja));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&Va(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||"html"===n&&"head"===o||!!i,f=e.attrs.length,p=new Array(f),d=0;d<f;d++){var v=e.attrs[d];Xa&&v[0].indexOf('""')===-1&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:sr(h,t.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),t.start&&t.start(n,p,l,e.start,e.end)}($);continue}}var w=void 0,x=void 0,C=void 0;if(h>=0){for(x=e.slice(h);!(Za.test(x)||qa.test(x)||Ya.test(x)||Qa.test(x)||(C=x.indexOf("<",1))<0);)h+=C,x=e.slice(h);w=e.substring(0,h),n(h)}h<0&&(w=e,e=""),t.chars&&w&&t.chars(w)}if(e===i){t.chars&&t.chars(e);break}}r()}function ur(e,t){var n=t?Cs(t):xs;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=Wt(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function lr(e,t){function n(e){e.pre&&(s=!1),os(e.tag)&&(c=!1)}es=t.warn||Gt,ss=t.getTagNamespace||Oi,as=t.mustUseProp||Oi,os=t.isPreTag||Oi,rs=Yt(t.modules,"preTransformNode"),ns=Yt(t.modules,"transformNode"),is=Yt(t.modules,"postTransformNode"),ts=t.delimiters;var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;return cr(e,{warn:es,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){var l=i&&i.ns||ss(e);Di&&"svg"===l&&(a=Tr(a));var f={type:1,tag:e,attrsList:a,attrsMap:Ar(a),parent:i,children:[]};l&&(f.ns=l),Or(f)&&!Ui()&&(f.forbidden=!0);for(var p=0;p<rs.length;p++)rs[p](f,t);if(s||(fr(f),f.pre&&(s=!0)),os(f.tag)&&(c=!0),s)pr(f);else{hr(f),mr(f),br(f),dr(f),f.plain=!f.key&&!a.length,vr(f),$r(f),wr(f);for(var d=0;d<ns.length;d++)ns[d](f,t);xr(f)}if(r?o.length||r.if&&(f.elseif||f.else)&&_r(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)gr(f,i);else if(f.slotScope){i.plain=!1;var v=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[v]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var h=0;h<is.length;h++)is[h](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Di||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Ns(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=ur(e,ts))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function fr(e){null!=rn(e,"v-pre")&&(e.pre=!0)}function pr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function dr(e){var t=nn(e,"key");t&&(e.key=t)}function vr(e){var t=nn(e,"ref");t&&(e.ref=t,e.refInFor=Cr(e))}function hr(e){var t;if(t=rn(e,"v-for")){var n=t.match(Os);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ts);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function mr(e){var t=rn(e,"v-if");if(t)e.if=t,_r(e,{exp:t,block:e});else{null!=rn(e,"v-else")&&(e.else=!0);var n=rn(e,"v-else-if");n&&(e.elseif=n)}}function gr(e,t){var n=yr(t.children);n&&n.if&&_r(n,{exp:e.elseif,block:e})}function yr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function _r(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function br(e){null!=rn(e,"v-once")&&(e.once=!0)}function $r(e){if("slot"===e.tag)e.slotName=nn(e,"name");else{var t=nn(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=rn(e,"scope"))}}function wr(e){var t;(t=nn(e,"is"))&&(e.component=t),null!=rn(e,"inline-template")&&(e.inlineTemplate=!0)}function xr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,As.test(r))if(e.hasBindings=!0,a=kr(r),a&&(r=r.replace(js,"")),Es.test(r))r=r.replace(Es,""),o=Wt(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=wi(r))&&(r="innerHTML")),a.camel&&(r=wi(r))),s||as(e.tag,e.attrsMap.type,r)?Qt(e,r,o):Xt(e,r,o);else if(ks.test(r))r=r.replace(ks,""),tn(e,r,o,a);else{r=r.replace(As,"");var u=r.match(Ss),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),en(e,r,i,o,l,a)}else Xt(e,r,JSON.stringify(o))}function Cr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function kr(e){var t=e.match(js);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Ar(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Or(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Tr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Is.test(r.name)||(r.name=r.name.replace(Ls,""),t.push(r))}return t}function Sr(e,t){e&&(cs=Ds(t.staticKeys||""),us=t.isReservedTag||Oi,jr(e),Nr(e,!1))}function Er(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function jr(e){if(e.static=Lr(e),1===e.type){if(!us(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];jr(r),r.static||(e.static=!1)}}}function Nr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Nr(e.children[n],t||!!e.for);e.ifConditions&&Ir(e.ifConditions,t)}}function Ir(e,t){for(var n=1,r=e.length;n<r;n++)Nr(e[n].block,t)}function Lr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||bi(e.tag)||!us(e.tag)||Dr(e)||!Object.keys(e).every(cs))))}function Dr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Mr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Pr(r,e[r])+",";return n.slice(0,-1)+"}"}function Pr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Pr(e,t)}).join(",")+"]";var n=Ps.test(t.value),r=Ms.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)Hs[s]?(o+=Hs[s],Rs[s]&&a.push(s)):a.push(s);a.length&&(i+=Rr(a)),o&&(i+=o);return"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Rr(e){return"if(!('button' in $event)&&"+e.map(Fr).join("&&")+")return null;"}function Fr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Rs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Hr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Ur(e,t){var n=hs,r=hs=[],i=ms;ms=0,gs=t,ls=t.warn||Gt,fs=Yt(t.modules,"transformCode"),ps=Yt(t.modules,"genData"),ds=t.directives||{},vs=t.isReservedTag||Oi;var o=e?Br(e):'_c("div")';return hs=n,ms=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Br(e){if(e.staticRoot&&!e.staticProcessed)return Vr(e);if(e.once&&!e.onceProcessed)return zr(e);if(e.for&&!e.forProcessed)return qr(e);if(e.if&&!e.ifProcessed)return Jr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return oi(e);var t;if(e.component)t=ai(e.component,e);else{var n=e.plain?void 0:Wr(e),r=e.inlineTemplate?null:Xr(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<fs.length;i++)t=fs[i](e,t);return t}return Xr(e)||"void 0"}function Vr(e){return e.staticProcessed=!0,hs.push("with(this){return "+Br(e)+"}"),"_m("+(hs.length-1)+(e.staticInFor?",true":"")+")"}function zr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Jr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Br(e)+","+ms+++(t?","+t:"")+")":Br(e)}return Vr(e)}function Jr(e){return e.ifProcessed=!0,Kr(e.ifConditions.slice())}function Kr(e){function t(e){return e.once?zr(e):Br(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+Kr(e):""+t(n.block)}function qr(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Br(e)+"})"}function Wr(e){var t="{",n=Zr(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<ps.length;r++)t+=ps[r](e);if(e.attrs&&(t+="attrs:{"+si(e.attrs)+"},"),e.props&&(t+="domProps:{"+si(e.props)+"},"),e.events&&(t+=Mr(e.events)+","),e.nativeEvents&&(t+=Mr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=Yr(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=Gr(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function Zr(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=ds[i.name]||Us[i.name];c&&(o=!!c(e,i,ls)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function Gr(e){var t=e.children[0];if(1===t.type){var n=Ur(t,gs);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function Yr(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return Qr(t,e[t])}).join(",")+"])"}function Qr(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?Xr(t)||"void 0":Br(t))+"}]"}function Xr(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Br(r);var i=t?ei(n):0;return"["+n.map(ri).join(",")+"]"+(i?","+i:"")}}function ei(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ti(r)||r.ifConditions&&r.ifConditions.some(function(e){return ti(e.block)})){t=2;break}(ni(r)||r.ifConditions&&r.ifConditions.some(function(e){return ni(e.block)}))&&(t=1)}}return t}function ti(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function ni(e){return!vs(e.tag)}function ri(e){return 1===e.type?Br(e):ii(e)}function ii(e){return"_v("+(2===e.type?e.expression:ci(JSON.stringify(e.text)))+")"}function oi(e){var t=e.slotName||'"default"',n=Xr(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return wi(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function ai(e,t){var n=t.inlineTemplate?null:Xr(t,!0);return"_c("+e+","+Wr(t)+(n?","+n:"")+")"}function si(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+ci(r.value)+","}return t.slice(0,-1)}function ci(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function ui(e,t){var n=lr(e.trim(),t);Sr(n,t);var r=Ur(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function li(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),d}}function fi(e,t){var n=(t.warn,rn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=nn(e,"class",!1);r&&(e.classBinding=r)}function pi(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function di(e,t){var n=(t.warn,rn(e,"style"));n&&(e.staticStyle=JSON.stringify(la(n)));var r=nn(e,"style",!1);r&&(e.styleBinding=r)}function vi(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function hi(e,t){t.value&&Qt(e,"textContent","_s("+t.value+")")}function mi(e,t){t.value&&Qt(e,"innerHTML","_s("+t.value+")")}function gi(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var yi,_i,bi=n("slot,component",!0),$i=Object.prototype.hasOwnProperty,wi=a(function(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}),xi=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Ci=a(function(e){return e.replace(/([^-])([A-Z])/g,"$1-$2").replace(/([^-])([A-Z])/g,"$1-$2").toLowerCase()}),ki=Object.prototype.toString,Ai="[object Object]",Oi=function(){return!1},Ti=function(e){return e},Si={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Oi,isUnknownElement:Oi,getTagNamespace:d,parsePlatformTagName:Ti,mustUseProp:Oi,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Ei=Object.freeze({}),ji=/[^\w.$]/,Ni="__proto__"in{},Ii="undefined"!=typeof window,Li=Ii&&window.navigator.userAgent.toLowerCase(),Di=Li&&/msie|trident/.test(Li),Mi=Li&&Li.indexOf("msie 9.0")>0,Pi=Li&&Li.indexOf("edge/")>0,Ri=Li&&Li.indexOf("android")>0,Fi=Li&&/iphone|ipad|ipod|ios/.test(Li),Hi=Li&&/chrome\/\d+/.test(Li)&&!Pi,Ui=function(){return void 0===yi&&(yi=!Ii&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),yi},Bi=Ii&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Vi="undefined"!=typeof Symbol&&b(Symbol)&&"undefined"!=typeof Reflect&&b(Reflect.ownKeys),zi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Fi&&setTimeout(d)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}}();_i="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Ji=d,Ki=0,qi=function(){this.id=Ki++,this.subs=[]};qi.prototype.addSub=function(e){this.subs.push(e)},qi.prototype.removeSub=function(e){r(this.subs,e)},qi.prototype.depend=function(){qi.target&&qi.target.addDep(this)},qi.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},qi.target=null;var Wi=[],Zi=Array.prototype,Gi=Object.create(Zi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Zi[e];y(Gi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var Yi=Object.getOwnPropertyNames(Gi),Qi={shouldConvert:!0,isSettingProps:!1},Xi=function(e){if(this.value=e,this.dep=new qi,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){(Ni?x:C)(e,Gi,Yi),this.observeArray(e)}else this.walk(e)};Xi.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},Xi.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])};var eo=Si.optionMergeStrategies;eo.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},Si._lifecycleHooks.forEach(function(e){eo[e]=j}),Si._assetTypes.forEach(function(e){eo[e+"s"]=N}),eo.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},eo.props=eo.methods=eo.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var to=function(e,t){return void 0===t?e:t},no=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},ro={child:{}};ro.child.get=function(){return this.componentInstance},Object.defineProperties(no.prototype,ro);var io,oo=function(){var e=new no;return e.text="",e.isComment=!0,e},ao=a(function(e){var t="~"===e.charAt(0);e=t?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:t,capture:n}}),so=null,co=[],uo={},lo=!1,fo=!1,po=0,vo=0,ho=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new _i,this.newDepIds=new _i,this.expression="","function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ho.prototype.get=function(){$(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){U(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&he(e),w(),this.cleanupDeps(),e},ho.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ho.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ho.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ve(this)},ho.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){U(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},ho.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ho.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ho.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var mo=new _i,go={enumerable:!0,configurable:!0,get:d,set:d},yo={lazy:!0},_o={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){(e.componentInstance=Ee(e,so,n,r)).$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var i=e;_o.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;se(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,fe(e.componentInstance,"mounted")),e.data.keepAlive&&ue(e.componentInstance,!0)},destroy:function(e){e.componentInstance._isDestroyed||(e.data.keepAlive?le(e.componentInstance,!0):e.componentInstance.$destroy())}},bo=Object.keys(_o),$o=1,wo=2,xo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=xo++,t._isVue=!0,e&&e._isComponent?Qe(t,e):t.$options=D(Xe(t.constructor),e||{},t),t._renderProxy=t,t._self=t,oe(t),Q(t),Ze(t),fe(t,"beforeCreate"),Ye(t),ye(t),Ge(t),fe(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(nt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=O,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new ho(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(nt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}(nt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&fe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=so;so=n,n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),so=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){fe(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),fe(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$options._parentElm=e.$options._refElm=null}}}(nt),function(n){n.prototype.$nextTick=function(e){return zi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=z(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||Ei,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){U(t,e,"render function"),a=e._vnode}return a instanceof no||(a=oo()),a.parent=i,a},n.prototype._o=Ke,n.prototype._n=t,n.prototype._s=e,n.prototype._l=He,n.prototype._t=Ue,n.prototype._q=v,n.prototype._i=h,n.prototype._m=Je,n.prototype._f=Be,n.prototype._k=Ve,n.prototype._b=ze,n.prototype._v=B,n.prototype._e=oo,n.prototype._u=ie}(nt);var Co=[String,RegExp],ko={name:"keep-alive",abstract:!0,props:{include:Co,exclude:Co},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)pt(e.cache[t])},watch:{include:function(e){ft(this.cache,function(t){return lt(e,t)})},exclude:function(e){ft(this.cache,function(t){return!lt(e,t)})}},render:function(){var e=Y(this.$slots.default),t=e&&e.componentOptions;if(t){var n=ut(t);if(n&&(this.include&&!lt(this.include,n)||this.exclude&&lt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Ao={KeepAlive:ko};!function(e){var t={};t.get=function(){return Si},Object.defineProperty(e,"config",t),e.util={warn:Ji,extend:u,mergeOptions:D,defineReactive:A},e.set=O,e.delete=T,e.nextTick=zi,e.options=Object.create(null),Si._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,u(e.options.components,Ao),rt(e),it(e),ot(e),ct(e)}(nt),Object.defineProperty(nt.prototype,"$isServer",{get:Ui}),nt.version="2.2.6";var Oo,To,So,Eo,jo,No,Io,Lo,Do,Mo=n("input,textarea,option,select"),Po=function(e,t,n){return"value"===n&&Mo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Ro=n("contenteditable,draggable,spellcheck"),Fo=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Ho="http://www.w3.org/1999/xlink",Uo=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Bo=function(e){return Uo(e)?e.slice(6,e.length):""},Vo=function(e){return null==e||e===!1},zo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jo=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ko=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),qo=function(e){return"pre"===e},Wo=function(e){return Jo(e)||Ko(e)},Zo=Object.create(null),Go=Object.freeze({createElement:$t,createElementNS:wt,createTextNode:xt,createComment:Ct,insertBefore:kt,removeChild:At,appendChild:Ot,parentNode:Tt,nextSibling:St,tagName:Et,setTextContent:jt,setAttribute:Nt}),Yo={create:function(e,t){It(t)},update:function(e,t){e.data.ref!==t.data.ref&&(It(e,!0),It(t))},destroy:function(e){It(e,!0)}},Qo=new no("",{},[]),Xo=["create","activate","update","remove","destroy"],ea={create:Ht,update:Ht,destroy:function(e){Ht(e,Qo)}},ta=Object.create(null),na=[Yo,ea],ra={create:Jt,update:Jt},ia={create:qt,update:qt},oa=/[\w).+\-_$\]]/,aa="__r",sa="__c",ca={create:$n,update:$n},ua={create:wn,update:wn},la=a(function(e){var t={};return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var n=e.split(/:(.+)/);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),fa=/^--/,pa=/\s*!important$/,da=function(e,t,n){fa.test(t)?e.style.setProperty(t,n):pa.test(n)?e.style.setProperty(t,n.replace(pa,""),"important"):e.style[ha(t)]=n},va=["Webkit","Moz","ms"],ha=a(function(e){if(Do=Do||document.createElement("div"),"filter"!==(e=wi(e))&&e in Do.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<va.length;n++){var r=va[n]+t;if(r in Do.style)return r}}),ma={create:Sn,update:Sn},ga=a(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ya=Ii&&!Mi,_a="transition",ba="animation",$a="transition",wa="transitionend",xa="animation",Ca="animationend";ya&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&($a="WebkitTransition",wa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(xa="WebkitAnimation",Ca="webkitAnimationEnd"));var ka=Ii&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Aa=/\b(transform|all)(,|$)/,Oa=Ii?{create:zn,activate:zn,remove:function(e,t){e.data.show?t():Un(e,t)}}:{},Ta=[ra,ia,ca,ua,ma,Oa],Sa=Ta.concat(na),Ea=function(e){function t(e){return new no(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0==--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);Dt(t)&&O.removeChild(t,e)}function a(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var o=e.data,a=e.children,c=e.tag;Dt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),f(e,a,t),Dt(o)&&d(e,t),l(n,e.elm,r)):Mt(e.isComment)?(e.elm=O.createComment(e.text),
l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r))}}function s(e,t,n,r){var i=e.data;if(Dt(i)){var o=Dt(e.componentInstance)&&i.keepAlive;if(Dt(i=i.hook)&&Dt(i=i.init)&&i(e,!1,n,r),Dt(e.componentInstance))return c(e,t),Mt(o)&&u(e,t,n,r),!0}}function c(e,t){Dt(e.data.pendingInsert)&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,p(e)?(d(e,t),v(e)):(It(e),t.push(e))}function u(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Dt(i=o.data)&&Dt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](Qo,o);t.push(o);break}l(n,e.elm,r)}function l(e,t,n){Dt(e)&&(Dt(n)?O.insertBefore(e,t,n):O.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function p(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return Dt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](Qo,e);x=e.data.hook,Dt(x)&&(Dt(x.create)&&x.create(Qo,e),Dt(x.insert)&&t.push(e))}function v(e){for(var t,n=e;n;)Dt(t=n.context)&&Dt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),n=n.parent;Dt(t=so)&&t!==e.context&&Dt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t)}function m(e){var t,n,r=e.data;if(Dt(r))for(Dt(t=r.hook)&&Dt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(Dt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var o=t[n];Dt(o)&&(Dt(o.tag)?(y(o),m(o)):i(o.elm))}}function y(e,t){if(Dt(t)||Dt(e.data)){var n=k.remove.length+1;for(Dt(t)?t.listeners+=n:t=r(e.elm,n),Dt(x=e.componentInstance)&&Dt(x=x._vnode)&&Dt(x.data)&&y(x,t),x=0;x<k.remove.length;++x)k.remove[x](e,t);Dt(x=e.data.hook)&&Dt(x=x.remove)?x(e,t):t()}else i(e.elm)}function _(e,t,n,r,i){for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;l<=p&&f<=m;)Lt(d)?d=t[++l]:Lt(v)?v=t[--p]:Pt(d,y)?(b(d,y,r),d=t[++l],y=n[++f]):Pt(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):Pt(d,_)?(b(d,_,r),$&&O.insertBefore(e,d.elm,O.nextSibling(v.elm)),d=t[++l],_=n[--m]):Pt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(Lt(o)&&(o=Ft(t,l,p)),s=Dt(y.key)?o[y.key]:null,Lt(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],Pt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));l>p?(u=Lt(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p)}function b(e,t,n,r){if(e!==t){if(Mt(t.isStatic)&&Mt(e.isStatic)&&t.key===e.key&&(Mt(t.isCloned)||Mt(t.isOnce)))return t.elm=e.elm,void(t.componentInstance=e.componentInstance);var i,o=t.data;Dt(o)&&Dt(i=o.hook)&&Dt(i=i.prepatch)&&i(e,t);var a=t.elm=e.elm,s=e.children,c=t.children;if(Dt(o)&&p(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);Dt(i=o.hook)&&Dt(i=i.update)&&i(e,t)}Lt(t.text)?Dt(s)&&Dt(c)?s!==c&&_(a,s,c,n,r):Dt(c)?(Dt(e.text)&&O.setTextContent(a,""),h(a,null,c,0,c.length-1,n)):Dt(s)?g(a,s,0,s.length-1):Dt(e.text)&&O.setTextContent(a,""):e.text!==t.text&&O.setTextContent(a,t.text),Dt(o)&&Dt(i=o.hook)&&Dt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(Mt(n)&&Dt(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(Dt(i)&&(Dt(x=i.hook)&&Dt(x=x.init)&&x(t,!0),Dt(x=t.componentInstance)))return c(t,n),!0;if(Dt(r)){if(Dt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){if(!s||!w(s,o[u],n)){a=!1;break}s=s.nextSibling}if(!a||s)return!1}else f(t,o,n);if(Dt(i))for(var l in i)if(!T(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var x,C,k={},A=e.modules,O=e.nodeOps;for(x=0;x<Xo.length;++x)for(k[Xo[x]]=[],C=0;C<A.length;++C)Dt(A[C][Xo[x]])&&k[Xo[x]].push(A[C][Xo[x]]);var T=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(Lt(n))return void(Dt(e)&&m(e));var c=!1,u=[];if(Lt(e))c=!0,a(n,u,o,s);else{var l=Dt(e.nodeType);if(!l&&Pt(e,n))b(e,n,u,i);else{if(l){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),Mt(r)&&w(e,n,u))return $(n,u,!0),e;e=t(e)}var f=e.elm,d=O.parentNode(f);if(a(n,u,f._leaveCb?null:d,O.nextSibling(f)),Dt(n.parent)){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(p(n))for(var h=0;h<k.create.length;++h)k.create[h](Qo,n.parent)}Dt(d)?g(d,[e],0,0):Dt(e.tag)&&m(e)}}return $(n,u,c),n.elm}}({nodeOps:Go,modules:Sa});Mi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Gn(e,"input")});var ja={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Jn(e,t,n.context)};r(),(Di||Pi)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type&&"password"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(Ri||(e.addEventListener("compositionstart",Wn),e.addEventListener("compositionend",Zn)),Mi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Jn(e,t,n.context);(e.multiple?t.value.some(function(t){return Kn(t,e.options)}):t.value!==t.oldValue&&Kn(t.value,e.options))&&Gn(e,"change")}}},Na={bind:function(e,t,n){var r=t.value;n=Yn(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Mi?(n.data.show=!0,Hn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=Yn(n),n.data&&n.data.transition&&!Mi?(n.data.show=!0,r?Hn(n,function(){e.style.display=e.__vOriginalDisplay}):Un(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ia={model:ja,show:Na},La={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Da={name:"transition",props:La,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(tr(this.$vnode))return i;var a=Qn(i);if(!a)return i;if(this._leaving)return er(e,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=Xn(this),l=this._vnode,f=Qn(l);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),f&&f.data&&!nr(a,f)){var p=f&&(f.data.transition=u({},c));if("out-in"===r)return this._leaving=!0,q(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),er(e,i);if("in-out"===r){var d,v=function(){d()};q(c,"afterEnter",v),q(c,"enterCancelled",v),q(p,"delayLeave",function(e){d=e})}}return i}}},Ma=u({tag:String,moveClass:String},La);delete Ma.mode;var Pa={props:Ma,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Xn(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(rr),e.forEach(ir),e.forEach(or);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ln(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(wa,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(wa,e),n._moveCb=null,Dn(n,t))})}})}},methods:{hasMove:function(e,t){if(!ya)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){jn(n,e)}),En(n,t),n.style.display="none",this.$el.appendChild(n);var r=Pn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Ra={Transition:Da,TransitionGroup:Pa};nt.config.mustUseProp=Po,nt.config.isReservedTag=Wo,nt.config.getTagNamespace=yt,nt.config.isUnknownElement=_t,u(nt.options.directives,Ia),u(nt.options.components,Ra),nt.prototype.__patch__=Ii?Ea:d,nt.prototype.$mount=function(e,t){return e=e&&Ii?bt(e):void 0,ae(this,e,t)},setTimeout(function(){Si.devtools&&Bi&&Bi.emit("init",nt)},0);var Fa,Ha=!!Ii&&function(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}("\n","&#10;"),Ua=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Ba=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Va=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),za=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Ja=new RegExp("^\\s*"+/([^\s"'<>\/=]+)/.source+"(?:\\s*("+/(?:=)/.source+")\\s*(?:"+za.join("|")+"))?"),Ka="[a-zA-Z_][\\w\\-\\.]*",qa=new RegExp("^<((?:"+Ka+"\\:)?"+Ka+")"),Wa=/^\s*(\/?)>/,Za=new RegExp("^<\\/((?:"+Ka+"\\:)?"+Ka+")[^>]*>"),Ga=/^<!DOCTYPE [^>]+>/i,Ya=/^<!--/,Qa=/^<!\[/,Xa=!1;"x".replace(/x(.)?/g,function(e,t){Xa=""===t});var es,ts,ns,rs,is,os,as,ss,cs,us,ls,fs,ps,ds,vs,hs,ms,gs,ys=n("script,style,textarea",!0),_s={},bs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},$s=/&(?:lt|gt|quot|amp);/g,ws=/&(?:lt|gt|quot|amp|#10);/g,xs=/\{\{((?:.|\n)+?)\}\}/g,Cs=a(function(e){var t=e[0].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),n=e[1].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),ks=/^@|^v-on:/,As=/^v-|^@|^:/,Os=/(.*?)\s+(?:in|of)\s+(.*)/,Ts=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ss=/:(.*)$/,Es=/^:|^v-bind:/,js=/\.[^.]+/g,Ns=a(ar),Is=/^xmlns:NS\d+/,Ls=/^NS\d+:/,Ds=a(Er),Ms=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ps=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Rs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fs=function(e){return"if("+e+")return null;"},Hs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Fs("$event.target !== $event.currentTarget"),ctrl:Fs("!$event.ctrlKey"),shift:Fs("!$event.shiftKey"),alt:Fs("!$event.altKey"),meta:Fs("!$event.metaKey"),left:Fs("'button' in $event && $event.button !== 0"),middle:Fs("'button' in $event && $event.button !== 1"),right:Fs("'button' in $event && $event.button !== 2")},Us={bind:Hr,cloak:d},Bs={staticKeys:["staticClass"],transformNode:fi,genData:pi},Vs={staticKeys:["staticStyle"],transformNode:di,genData:vi},zs=[Bs,Vs],Js={model:dn,text:hi,html:mi},Ks={expectHTML:!0,modules:zs,directives:Js,isPreTag:qo,isUnaryTag:Ua,mustUseProp:Po,canBeLeftOpenTag:Ba,isReservedTag:Wo,getTagNamespace:yt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(zs)},qs=function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=ui(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=li(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=li(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}(Ks),Ws=qs.compileToFunctions,Zs=a(function(e){var t=bt(e);return t&&t.innerHTML}),Gs=nt.prototype.$mount;return nt.prototype.$mount=function(e,t){if((e=e&&bt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Zs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=gi(e));if(r){var i=Ws(r,{shouldDecodeNewlines:Ha,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Gs.call(this,e,t)},nt.compile=Ws,nt});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.2.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(42);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(43);

var _vuex2 = _interopRequireDefault(_vuex);

var _vueRouter = __webpack_require__(41);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _promise = __webpack_require__(26);

var _promise2 = _interopRequireDefault(_promise);

var _main = __webpack_require__(23);

var _main2 = _interopRequireDefault(_main);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

var _nav = __webpack_require__(33);

var _nav2 = _interopRequireDefault(_nav);

var _interceptors = __webpack_require__(22);

var _interceptors2 = _interopRequireDefault(_interceptors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vuex2.default);

var app = new _vue2.default({
    components: { AppNav: _nav2.default },
    store: new _vuex2.default.Store(_store2.default),
    router: new _vueRouter2.default(_routes2.default),
    created: function created() {
        this.$store.dispatch("common.navList").then(function (data) {
            console.log(data);
        }).catch(function (msg) {
            console.error(msg);
        });
    }
}).$mount("#app");

/***/ })
/******/ ]);
//# sourceMappingURL=common.js.map