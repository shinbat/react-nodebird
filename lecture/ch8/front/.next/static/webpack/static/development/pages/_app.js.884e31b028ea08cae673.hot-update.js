webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInput\", function() { return useInput; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  padding: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin-top: 10px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar ButtonZone = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\nvar SignUpForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"])(_templateObject2());\n\nvar TextInput = function TextInput(_ref) {\n  var value = _ref.value;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, value);\n};\n\nTextInput.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string\n};\nvar useInput = function useInput() {\n  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initValue),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      value = _useState2[0],\n      setter = _useState2[1];\n\n  var handler = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n};\n\nvar Signup = function Signup() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      passwordCheck = _useState4[0],\n      setPasswordCheck = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      term = _useState6[0],\n      setTerm = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      passwordError = _useState8[0],\n      setPasswordError = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState9, 2),\n      termError = _useState10[0],\n      setTermError = _useState10[1];\n\n  var _useInput = useInput(''),\n      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      id = _useInput2[0],\n      onChangeId = _useInput2[1];\n\n  var _useInput3 = useInput(''),\n      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput3, 2),\n      nick = _useInput4[0],\n      onChangeNick = _useInput4[1];\n\n  var _useInput5 = useInput(''),\n      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput5, 2),\n      password = _useInput6[0],\n      onChangePassword = _useInput6[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isSigningUp = _useSelector.isSigningUp,\n      me = _useSelector.me;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (me) {\n      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');\n    }\n  }, [me && me.id]);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!term) {\n      return setTermError(true);\n    }\n\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[\"SIGN_UP_REQUEST\"],\n      data: {\n        userId: id,\n        password: password,\n        nickname: nick\n      }\n    });\n  }, [id, nick, password, passwordCheck, term]); // custom hooks 으로 바꿈\n  // const onChangeId = useCallback((e) => {\n  //     setId(e.target.value);\n  // },[]);\n  // const onChangeNick = useCallback((e) => {\n  //     setNick(e.target.value);\n  // },[]);\n  // const onChangePassword = useCallback((e) => {\n  //     setPassword(e.target.value);\n  // }, []);\n\n  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setTermError(false);\n    setTerm(e.target.checked);\n  }, []);\n\n  if (me) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignUpForm, {\n    onSubmit: onSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextInput, {\n    value: \"123123\"\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"\\uC544\\uC774\\uB514\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    required: true,\n    onChange: onChangeId\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-nick\"\n  }, \"\\uB2C9\\uB124\\uC784\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-nick\",\n    value: nick,\n    required: true,\n    onChange: onChangeNick\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-password\",\n    type: \"password\",\n    value: password,\n    required: true,\n    onChange: onChangePassword\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password-check\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\\uCCB4\\uD06C\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-password-check\",\n    type: \"password\",\n    value: passwordCheck,\n    required: true,\n    onChange: onChangePasswordCheck\n  }), passwordError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ㄴ, {\n    style: {\n      color: 'red'\n    }\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n    name: \"user-term\",\n    value: term,\n    onChange: onChangeTerm\n  }, \"\\uB3D9\\uC758\\uD569\\uB2C8\\uB2E4\"), termError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    style: {\n      color: 'red'\n    }\n  }, \"\\uC57D\\uAD00\\uC5D0 \\uB3D9\\uC758\\uD558\\uC154\\uC57C \\uD569\\uB2C8\\uB2E4\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonZone, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isSigningUp\n  }, \"\\uAC00\\uC785\\uD558\\uAE30\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./pages/signup.js?");

/***/ })

})