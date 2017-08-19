
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Rutas = __webpack_require__(545);

var _Rutas2 = _interopRequireDefault(_Rutas);

var _index = __webpack_require__(561);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Rutas2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_index2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

var _baseStyles = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/components/Rutas.js';


var Rutas = function Rutas() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_baseStyles.Button, { primary: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'home Page'))), _react2.default.createElement(_baseStyles.Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { href: '/About', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'About Page'))));
};

exports.default = Rutas;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/components/Rutas.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/components/Rutas.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (true) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/Rutas")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(550);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(557);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n'], ['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n']);

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
	return props.primary ? 'palevioletred' : 'white';
}, function (props) {
	return props.primary ? 'white' : 'palevioletred';
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/styles/base.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/styles/base.styles.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/Home/container/index.js';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, 'hola home');
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/Home/container/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/app-test-now/pages/Home/container/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (true) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/Home/container")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2E1ODYyNWEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9SdXRhcy5qcz9hNTg2MjVhIiwid2VicGFjazovLy8uL3N0eWxlcy9iYXNlLnN0eWxlcy5qcz9hNTg2MjVhIiwid2VicGFjazovLy8uL3BhZ2VzL0hvbWUvY29udGFpbmVyL2luZGV4LmpzP2E1ODYyNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJ1dGFzIGZyb20gJy4vY29tcG9uZW50cy9SdXRhcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUvY29udGFpbmVyL2luZGV4JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPFJ1dGFzIC8+XG4gICAgPEhvbWUgLz5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL3N0eWxlcy9iYXNlLnN0eWxlcy5qcyc7XG5cbmNvbnN0IFJ1dGFzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPmhvbWUgUGFnZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uPlxuICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiPlxuICAgICAgICA8YT5BYm91dCBQYWdlPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvQnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnV0YXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL1J1dGFzLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgPyAncGFsZXZpb2xldHJlZCcgOiAnd2hpdGUnfTtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSA/ICd3aGl0ZScgOiAncGFsZXZpb2xldHJlZCd9O1xuXG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRtYXJnaW46IDFlbTtcblx0cGFkZGluZzogMC4yNWVtIDFlbTtcblx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0eWxlcy9iYXNlLnN0eWxlcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgaG9sYSBob21lXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0hvbWUvY29udGFpbmVyL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        