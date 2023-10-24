"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.jsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/dashboard/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/../node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    var _session_data;\n    _s();\n    // const [data, setData] = useState([]);\n    // const [err, setErr] = useState([]);\n    // const [isLoading, setIsLoading] = useState([]);\n    // useEffect(() => {\n    //   async function getData(id) {\n    //     setIsLoading(true);\n    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {\n    //       cache: \"no-store\",\n    //     });\n    //     if (!res.ok) {\n    //       setErr(true);\n    //     }\n    //     const data = await res.json();\n    //     setData(data);\n    //     setIsLoading(false);\n    //   }\n    //   getData();\n    // }, []);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    //this data will have all the returned posts of the user\n    const { data, mutate, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"api/posts?username=\".concat(session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.name), fetcher);\n    if (session.status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (session.status === \"unauthenticated\") {\n        router === null || router === void 0 ? void 0 : router.push(\"/dashboard/login\");\n    }\n    console.log(session);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const title = e.target[0].value;\n        const desc = e.target[1].value;\n        const img = e.target[2].value;\n        const content = e.target[3].value;\n        try {\n            await fetch(\"/api/posts\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title,\n                    desc,\n                    img,\n                    content,\n                    username: session.data.user.name\n                })\n            });\n            mutate();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    if (session.status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().posts),\n                    children: isLoading ? \"loading...\" : data === null || data === void 0 ? void 0 : data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: post.img,\n                                        alt: \"\",\n                                        width: 200,\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTitle),\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, post._id, true, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"new\"]),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Desc\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Image\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Content\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().textArea),\n                            cols: \"30\",\n                            rows: \"10\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_s(Dashboard, \"uMf7jkJO4wD4IHoeUqqvgKzxYuA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNaO0FBQ2Q7QUFDb0I7QUFDRDtBQUNiO0FBRS9CLE1BQU1RLFlBQVk7UUErQlFDOztJQTlCeEIsd0NBQXdDO0lBQ3hDLHNDQUFzQztJQUN0QyxrREFBa0Q7SUFFbEQsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsOEVBQThFO0lBQzlFLDJCQUEyQjtJQUMzQixVQUFVO0lBRVYscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixRQUFRO0lBRVIscUNBQXFDO0lBRXJDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLGVBQWU7SUFDZixVQUFVO0lBRVYsTUFBTUEsVUFBVUosMkRBQVVBO0lBRTFCLE1BQU1LLFNBQVNKLDBEQUFTQTtJQUV4QixNQUFNSyxVQUFVO3lDQUFJQztZQUFBQTs7ZUFBU0MsU0FBU0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUNwRSx3REFBd0Q7SUFDeEQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2hCLCtDQUFNQSxDQUMvQyxzQkFBK0MsT0FBekJLLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNRLElBQUksY0FBYlIsb0NBQUFBLGNBQWVZLElBQUksQ0FBQ0MsSUFBSSxHQUM5Q1g7SUFHRixJQUFJRixRQUFRYyxNQUFNLEtBQUssV0FBVztRQUNoQyxxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaO0lBQ0EsSUFBSWYsUUFBUWMsTUFBTSxLQUFLLG1CQUFtQjtRQUN4Q2IsbUJBQUFBLDZCQUFBQSxPQUFRZSxJQUFJLENBQUM7SUFDZjtJQUNBQyxRQUFRQyxHQUFHLENBQUNsQjtJQUVaLE1BQU1tQixlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFFBQVFGLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDL0IsTUFBTUMsT0FBT0wsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUM5QixNQUFNRSxNQUFNTixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQzdCLE1BQU1HLFVBQVVQLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFFakMsSUFBSTtZQUNGLE1BQU1wQixNQUFNLGNBQWM7Z0JBQ3hCd0IsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQlQ7b0JBQ0FHO29CQUNBQztvQkFDQUM7b0JBQ0FLLFVBQVVoQyxRQUFRUSxJQUFJLENBQUNJLElBQUksQ0FBQ0MsSUFBSTtnQkFDbEM7WUFDRjtZQUNBSjtRQUNGLEVBQUUsT0FBT3dCLEtBQUs7WUFDWmhCLFFBQVFDLEdBQUcsQ0FBQ2U7UUFDZDtJQUNGO0lBRUEsSUFBSWpDLFFBQVFjLE1BQU0sS0FBSyxpQkFBaUI7UUFDdEMscUJBQ0UsOERBQUNvQjtZQUFJQyxXQUFXekMsbUVBQWdCOzs4QkFDOUIsOERBQUN3QztvQkFBSUMsV0FBV3pDLCtEQUFZOzhCQUN6QmlCLFlBQ0csZUFDQUgsaUJBQUFBLDJCQUFBQSxLQUFNOEIsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDTDs0QkFBSUMsV0FBV3pDLDhEQUFXOzs4Q0FDekIsOERBQUN3QztvQ0FBSUMsV0FBV3pDLHdFQUFxQjs4Q0FDbkMsNEVBQUNJLG1EQUFLQTt3Q0FDSjJDLEtBQUtGLEtBQUtiLEdBQUc7d0NBQ2JnQixLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FHWiw4REFBQ0M7b0NBQUdWLFdBQVd6QyxtRUFBZ0I7OENBQUc2QyxLQUFLakIsS0FBSzs7Ozs7OzhDQUM1Qyw4REFBQ3lCO29DQUFLWixXQUFXekMsbUVBQWE7OENBQUU7Ozs7Ozs7MkJBVkE2QyxLQUFLVSxHQUFHOzs7Ozs7Ozs7OzhCQWNsRCw4REFBQ0M7b0JBQUtmLFdBQVd6QyxnRUFBVTtvQkFBRTBELFVBQVVqQzs7c0NBQ3JDLDhEQUFDa0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQVFyQixXQUFXekMsK0RBQVk7Ozs7OztzQ0FDOUQsOERBQUM0RDs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBT3JCLFdBQVd6QywrREFBWTs7Ozs7O3NDQUM3RCw4REFBQzREOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFRckIsV0FBV3pDLCtEQUFZOzs7Ozs7c0NBQzlELDhEQUFDK0Q7NEJBQ0NELGFBQVk7NEJBQ1pyQixXQUFXekMsa0VBQWU7NEJBQzFCaUUsTUFBSzs0QkFDTEMsTUFBSzs7Ozs7O3NDQUVQLDhEQUFDQzs0QkFBTzFCLFdBQVd6QyxnRUFBYTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTFDO0FBQ0Y7R0F4R01LOztRQXdCWUgsdURBQVVBO1FBRVhDLHNEQUFTQTtRQUltQkYsMkNBQU1BOzs7S0E5QjdDSTtBQTBHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLmpzeD8xNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpZCkge1xyXG4gIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgLCB7XHJcbiAgLy8gICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICBpZiAoIXJlcy5vaykge1xyXG4gIC8vICAgICAgIHNldEVycih0cnVlKTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vICAgICBzZXREYXRhKGRhdGEpO1xyXG4gIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgZ2V0RGF0YSgpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICAvL3RoaXMgZGF0YSB3aWxsIGhhdmUgYWxsIHRoZSByZXR1cm5lZCBwb3N0cyBvZiB0aGUgdXNlclxyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXHJcbiAgICBgYXBpL3Bvc3RzP3VzZXJuYW1lPSR7c2Vzc2lvbj8uZGF0YT8udXNlci5uYW1lfWAsIC8vdGhpcyBzZXNzaW9uLmRhdGEgd2lsbCBoYXZlIGFsbCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcgLi4uPC9wPjtcclxuICB9XHJcbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICByb3V0ZXI/LnB1c2goXCIvZGFzaGJvYXJkL2xvZ2luXCIpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gZS50YXJnZXRbMV0udmFsdWU7XHJcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldFsyXS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldFszXS52YWx1ZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjLFxyXG4gICAgICAgICAgaW1nLFxyXG4gICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgIHVzZXJuYW1lOiBzZXNzaW9uLmRhdGEudXNlci5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgbXV0YXRlKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nXHJcbiAgICAgICAgICAgID8gXCJsb2FkaW5nLi4uXCJcclxuICAgICAgICAgICAgOiBkYXRhPy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtwb3N0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRpdGxlfT57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5uZXd9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGgxPkFkZCBOZXcgUG9zdDwvaDE+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX1cclxuICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlU1dSIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkltYWdlIiwiRGFzaGJvYXJkIiwic2Vzc2lvbiIsInJvdXRlciIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJtdXRhdGUiLCJlcnJvciIsImlzTG9hZGluZyIsInVzZXIiLCJuYW1lIiwic3RhdHVzIiwicCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2MiLCJpbWciLCJjb250ZW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInBvc3RzIiwibWFwIiwicG9zdCIsImltYWdlQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInBvc3RUaXRsZSIsInNwYW4iLCJkZWxldGUiLCJfaWQiLCJmb3JtIiwibmV3Iiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});