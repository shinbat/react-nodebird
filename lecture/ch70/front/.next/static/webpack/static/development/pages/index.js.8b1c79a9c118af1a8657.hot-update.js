webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/PostForm */ "./containers/PostForm.js");
/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/PostCard */ "./containers/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");









var Home = function Home() {
  // const { user, isLoggedIn } = useSelector(state => state.user);   // 잘게쪼개면 render효율증대됨
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var countRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([]);
  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      console.log('asasa1 ', mainPosts, mainPosts[mainPosts.length - 1]);

      if (hasMorePost) {
        console.log('asasa2 ', mainPosts[mainPosts.length - 1].id);
        var lastId = mainPosts[mainPosts.length - 1].id;

        if (!countRef.current.includes(lastId)) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_MAIN_POSTS_REQUEST"],
            lastId: lastId
          });
          countRef.current.push(lastId);
        }
      }
    }
  }, [hasMorePost, mainPosts.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, me && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_containers_PostForm__WEBPACK_IMPORTED_MODULE_5__["default"], null), mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_containers_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: c.id,
      post: c
    });
  }));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('index.js Object.keys:: ', _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(context));
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_MAIN_POSTS_REQUEST"]
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8b1c79a9c118af1a8657.hot-update.js.map