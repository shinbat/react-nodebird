webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./containers/LoginForm.js":
/*!*********************************!*\
  !*** ./containers/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/signup */ \"./pages/signup.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: red;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar LoginError = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n\nvar LoginForm = function LoginForm() {\n  var _useInput = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_7__[\"useInput\"])(''),\n      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      id = _useInput2[0],\n      onChangeId = _useInput2[1];\n\n  var _useInput3 = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_7__[\"useInput\"])(''),\n      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput3, 2),\n      password = _useInput4[0],\n      onChangePassword = _useInput4[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isLoggingIn = _useSelector.isLoggingIn,\n      logInErrorReason = _useSelector.logInErrorReason;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[\"LOG_IN_REQUEST\"],\n      data: {\n        userId: id,\n        password: password\n      }\n    });\n  }, [id, password]);\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    onSubmit: onSubmitForm,\n    style: {\n      padding: '10px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"\\uC544\\uC774\\uB514\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    onChange: onChangeId,\n    required: true\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    name: \"user-password\",\n    value: password,\n    onChange: onChangePassword,\n    type: \"password\",\n    required: true\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginError, null, logInErrorReason), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    style: {\n      marginTop: '10px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isLoggingIn\n  }, \"\\uB85C\\uADF8\\uC778\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/signup\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], null, \"\\uD68C\\uC6D0\\uAC00\\uC785\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./containers/LoginForm.js?");

/***/ })

})