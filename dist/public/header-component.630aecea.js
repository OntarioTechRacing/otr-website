// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/public/components/header-component.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
var repoName = window.location.pathname.split("/")[1];
var basePath = isLocalhost ? "/" : "/".concat(repoName, "/");
var homePageFilePath = "".concat(basePath);
var imageSrc = "".concat(basePath, "src/public/images/otrLogo.PNG");
var filePath = "".concat(basePath, "src/public/html/");
var Header = /*#__PURE__*/function (_HTMLElement) {
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header);
  }
  _inherits(Header, _HTMLElement);
  return _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n        <style>\n        ul{\n        margin-top: 0;\n        margin-bottom: 0;\n        }\n        .navigation-bar {\n            background-color: rgba(0,0,0,0.8);\n            backdrop-filter: blur(30px);\n            color: white;\n            padding-left: 40px;\n            padding-right: 40px;\n            height: auto;\n            position: fixed;\n            top: 0;\n            right: 0;\n            left: 0;\n            z-index: 2000;\n            animation: header-load 600ms ease-in; \n            }\n        .nav-shell {\n            position: relative;\n        }\n        .navigation-bar ul {\n            list-style: none;\n            padding: unset;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .nav-toggle {\n            display: flex;\n        }\n        .navigation-bar a {\n            text-decoration: none;\n            color: inherit;\n            display: inline-block;\n            padding: 0.8em;\n            border: 1px solid transparent;\n            border-radius: 6px;\n        }\n        .navigation-bar a:hover {\n            background-color: white;\n            color: #000000;\n        }\n        .navigation-bar a:active {\n            background-color: white;\n            color: #000000;\n        }\n        .otr-logo {\n            width: 120px;\n            min-width: 96px;\n            transition: transform 0.2s;\n        }\n        .otr-logo:hover {\n            transform: scale(1.04);\n        }\n        .otr-logo img {\n            width: 100%;\n        }\n\n        .link {\n            font-weight: 700;\n            cursor: pointer;\n        }\n\n        .open .mobile-menu-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: end;\n        }\n        .mobile-menu-container {\n            display: block;\n            position: absolute;\n            top: 56px;\n            left: 0;\n            right: 0;\n            width: 100%;\n            font-weight: 500;\n            background-color: #d9d9d9;\n\n            padding: 10px 60px 10px 10px;\n        }\n        .menu-button {\n            position: absolute;\n            top: 12px;\n\n            right: 0;\n            background-color: transparent;\n            border: none;\n            display: none;\n            cursor: pointer;\n\n            transition: 1000ms ease all;\n        }\n\n        @keyframes header-load {\n          0% {\n            transform: translateY(-100%);\n          }\n          100% {\n            transform: translateY(-0);\n          }\n        }\n        .bar1,\n        .bar2,\n        .bar3 {\n          width: 30px;\n          height: 4px;\n          margin: 5px 0;\n          background-color: #d9d9d9;\n          transition: 0.4s;\n        }\n\n        .menu-button.open .bar1 {\n          -webkit-transform: translate(-6px, 6.5px) rotate(-45deg);\n          transform: translate(-6px, 6.5px) rotate(-45deg);\n        }\n        .menu-button.open .bar2 {\n          opacity: 0;\n        }\n        .menu-button.open .bar3 {\n          -webkit-transform: translate(-6px, -11px) rotate(45deg);\n          transform: translate(-6px, -11px) rotate(45deg);\n        }\n        @media (max-width: 700px) {\n          .navigation-bar.nav-open {\n            min-height: 100%;\n          }\n          .nav-toggle {\n            display: none;\n          }\n          .navigation-bar.nav-open ul {\n            display: block;\n          }\n          .navigation-bar.nav-open .nav-toggle {\n            display: flex;\n            flex-direction: column;\n            min-height: 100vh;\n            justify-content: center;\n            padding-bottom: 6.5rem;\n            align-items: center;\n            gap: 1rem;\n          }\n          .navigation-bar.nav-open a {\n            display: block;\n            font-size: 1.6rem;\n          }\n          .menu-button {\n            display: initial;\n          }\n          .otr-logo {\n            width: 95px;\n          }\n        }\n        </style>\n          <div class=\"navigation-bar\">\n            <div class=\"nav-shell\">\n             <ul>\n                  <li class=\"otr-logo\">\n                      <img src=".concat(imageSrc, " alt=\"Ontario Tech Racing Logo\"/>\n                  </li>\n                  <div class=\"nav-toggle\">\n                      <li class=\"link\">\n                          <a href=").concat(homePageFilePath, "> Home </a>\n                      </li>\n                      <li class=\"link\">\n                          <a href=").concat(filePath + "TeamPage.html", ">Team</a>\n                      </li>\n                      <li class=\"link\">\n                          <a href=").concat(filePath + "GaragePage.html", ">Our Car</a>\n                      </li>\n                      <li class=\"link\">\n                          <a href=").concat(filePath + "joinUs.html", ">Join Us</a>\n                      </li>\n                      <li class=\"link\">\n                          <a href=").concat(filePath + "sponsers.html", ">Sponsors</a>\n                      </li>\n                      <li class=\"link\">\n                          <a href=").concat(filePath + "History.html", ">History</a>\n                      </li>\n                  </div>\n                </ul>\n                <button class=\"menu-button\">\n                    <div class=\"bar1\"></div>\n                    <div class=\"bar2\"></div>\n                    <div class=\"bar3\"></div>\n                </button>\n            </div>\n        </div>\n    ");
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("header-component", Header);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50048" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/public/components/header-component.js"], null)
//# sourceMappingURL=/header-component.630aecea.js.map