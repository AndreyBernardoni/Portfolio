"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navData\": function() { return /* binding */ navData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi2 */ \"./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// icons\n\nvar _s = $RefreshSig$();\n\n// nav data\nconst navData = [\n    {\n        name: \"home\",\n        path: \"/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiHome, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 13,\n            columnNumber: 36\n        }, undefined)\n    },\n    {\n        name: \"about\",\n        path: \"/about\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiUser, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 14,\n            columnNumber: 42\n        }, undefined)\n    },\n    {\n        name: \"services\",\n        path: \"/services\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiRectangleGroup, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 15,\n            columnNumber: 48\n        }, undefined)\n    },\n    {\n        name: \"work\",\n        path: \"/work\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiViewColumns, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 16,\n            columnNumber: 40\n        }, undefined)\n    },\n    {\n        name: \"testimonials\",\n        path: \"/testimonials\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiChatBubbleBottomCenterText, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiEnvelope, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, undefined)\n    }\n];\n\n\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screnn p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 mmd:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full\",\n            children: navData.map((link, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"\".concat(link.path === pathname && \"text-accent\", \" relative flex items-center group hover:text-accent transition-all duration-300\"),\n                    href: link.path,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[12px]\",\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: link.icon\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFFBQVE7OztBQVFpQjtBQUV6QixXQUFXO0FBQ0osTUFBTU0sVUFBVTtJQUNyQjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07UUFBS0Msb0JBQU0sOERBQUNULG1EQUFNQTs7Ozs7SUFBSTtJQUM1QztRQUFFTyxNQUFNO1FBQVNDLE1BQU07UUFBVUMsb0JBQU0sOERBQUNSLG1EQUFNQTs7Ozs7SUFBSTtJQUNsRDtRQUFFTSxNQUFNO1FBQVlDLE1BQU07UUFBYUMsb0JBQU0sOERBQUNOLDZEQUFnQkE7Ozs7O0lBQUk7SUFDbEU7UUFBRUksTUFBTTtRQUFRQyxNQUFNO1FBQVNDLG9CQUFNLDhEQUFDUCwwREFBYUE7Ozs7O0lBQUk7SUFDdkQ7UUFDRUssTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDTCx5RUFBNEJBOzs7OztJQUNyQztJQUNBO1FBQ0VHLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxvQkFBTSw4REFBQ0osdURBQVVBOzs7OztJQUNuQjtDQUNELENBQUM7QUFFMkI7QUFFbUI7QUFFaEQsTUFBTVEsTUFBTSxJQUFNOztJQUNoQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTUcsV0FBV0QsT0FBT0MsUUFBUTtJQUNoQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDWlgsUUFBUWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7Z0JBQzVCLHFCQUNFLDhEQUFDWCxrREFBSUE7b0JBQ0hPLFdBQVcsR0FFVixPQURDRyxLQUFLWixJQUFJLEtBQUtPLFlBQVksZUFDM0I7b0JBQ0RPLE1BQU1GLEtBQUtaLElBQUk7O3NDQUdmLDhEQUFDVTtzQ0FDQyw0RUFBQ0E7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNDO29DQUFJRCxXQUFVOzhDQUFlRyxLQUFLYixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUczQyw4REFBQ1c7c0NBQUtFLEtBQUtYLElBQUk7Ozs7Ozs7bUJBUFZZOzs7OztZQVVYOzs7Ozs7Ozs7OztBQUlSO0dBNUJNUjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBOEJOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaWNvbnNcclxuaW1wb3J0IHtcclxuICBIaUhvbWUsXHJcbiAgSGlVc2VyLFxyXG4gIEhpVmlld0NvbHVtbnMsXHJcbiAgSGlSZWN0YW5nbGVHcm91cCxcclxuICBIaUNoYXRCdWJibGVCb3R0b21DZW50ZXJUZXh0LFxyXG4gIEhpRW52ZWxvcGUsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2hpMlwiO1xyXG5cclxuLy8gbmF2IGRhdGFcclxuZXhwb3J0IGNvbnN0IG5hdkRhdGEgPSBbXHJcbiAgeyBuYW1lOiBcImhvbWVcIiwgcGF0aDogXCIvXCIsIGljb246IDxIaUhvbWUgLz4gfSxcclxuICB7IG5hbWU6IFwiYWJvdXRcIiwgcGF0aDogXCIvYWJvdXRcIiwgaWNvbjogPEhpVXNlciAvPiB9LFxyXG4gIHsgbmFtZTogXCJzZXJ2aWNlc1wiLCBwYXRoOiBcIi9zZXJ2aWNlc1wiLCBpY29uOiA8SGlSZWN0YW5nbGVHcm91cCAvPiB9LFxyXG4gIHsgbmFtZTogXCJ3b3JrXCIsIHBhdGg6IFwiL3dvcmtcIiwgaWNvbjogPEhpVmlld0NvbHVtbnMgLz4gfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInRlc3RpbW9uaWFsc1wiLFxyXG4gICAgcGF0aDogXCIvdGVzdGltb25pYWxzXCIsXHJcbiAgICBpY29uOiA8SGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiY29udGFjdFwiLFxyXG4gICAgcGF0aDogXCIvY29udGFjdFwiLFxyXG4gICAgaWNvbjogPEhpRW52ZWxvcGUgLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgeGw6anVzdGlmeS1jZW50ZXIgZ2FwLXktNCBmaXhlZCBoLW1heCBib3R0b20tMCBtdC1hdXRvIHhsOnJpZ2h0LVsyJV0gei01MCB0b3AtMCB3LWZ1bGwgeGw6dy0xNiB4bDptYXgtdy1tZCB4bDpoLXNjcmVubiBwLTIwXCI+XHJcbiAgICAgIHt9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgeGw6ZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB4bDpqdXN0aWZ5LWNlbnRlciBnYXAteS0xMCBweC00IG1tZDpweC00MCB4bDpweC0wIGgtWzgwcHhdIHhsOmgtbWF4IHB5LTggYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ci1zbSB0ZXh0LTN4bCB4bDp0ZXh0LXhsIHhsOnJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgIHtuYXZEYXRhLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGxpbmsucGF0aCA9PT0gcGF0aG5hbWUgJiYgXCJ0ZXh0LWFjY2VudFwiXHJcbiAgICAgICAgICAgICAgfSByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBncm91cCBob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBgfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsucGF0aH1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTJweF1cIj57bGluay5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57bGluay5pY29ufTwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJIaUhvbWUiLCJIaVVzZXIiLCJIaVZpZXdDb2x1bW5zIiwiSGlSZWN0YW5nbGVHcm91cCIsIkhpQ2hhdEJ1YmJsZUJvdHRvbUNlbnRlclRleHQiLCJIaUVudmVsb3BlIiwibmF2RGF0YSIsIm5hbWUiLCJwYXRoIiwiaWNvbiIsIkxpbmsiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJyb3V0ZXIiLCJwYXRobmFtZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImxpbmsiLCJpbmRleCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});