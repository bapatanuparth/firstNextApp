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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/dashboard/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/../node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    var _session_data;\n    _s();\n    // const [data, setData] = useState([]);\n    // const [err, setErr] = useState([]);\n    // const [isLoading, setIsLoading] = useState([]);\n    // useEffect(() => {\n    //   async function getData(id) {\n    //     setIsLoading(true);\n    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {\n    //       cache: \"no-store\",\n    //     });\n    //     if (!res.ok) {\n    //       setErr(true);\n    //     }\n    //     const data = await res.json();\n    //     setData(data);\n    //     setIsLoading(false);\n    //   }\n    //   getData();\n    // }, []);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    //this data will have all the returned posts of the user\n    const { data, mutate, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"api/posts?username=\".concat(session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.name), fetcher);\n    if (session.status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (session.status === \"unauthenticated\") {\n        router === null || router === void 0 ? void 0 : router.push(\"/dashboard/login\");\n    }\n    console.log(session);\n    const handleDelete = async (id)=>{\n        try {\n            await fetch(\"/api/posts/\".concat(id), {\n                method: \"DELETE\"\n            });\n            mutate();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const title = e.target[0].value;\n        const desc = e.target[1].value;\n        const img = e.target[2].value;\n        const content = e.target[3].value;\n        try {\n            await fetch(\"/api/posts\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title,\n                    desc,\n                    img,\n                    content,\n                    username: session.data.user.name\n                })\n            });\n            mutate();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    if (session.status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().posts),\n                    children: isLoading ? \"loading...\" : data === null || data === void 0 ? void 0 : data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: post.img,\n                                        alt: \"\",\n                                        width: 200,\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTitle),\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                                    onClick: ()=>handleDelete(post._id),\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, post._id, true, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"new\"]),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Desc\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Image\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Content\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().textArea),\n                            cols: \"30\",\n                            rows: \"10\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WORK\\\\react\\\\projects_5\\\\firstNextApp\\\\first-next-app\\\\src\\\\app\\\\dashboard\\\\page.jsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_s(Dashboard, \"uMf7jkJO4wD4IHoeUqqvgKzxYuA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNaO0FBQ2Q7QUFDb0I7QUFDRDtBQUNiO0FBRS9CLE1BQU1RLFlBQVk7UUErQlFDOztJQTlCeEIsd0NBQXdDO0lBQ3hDLHNDQUFzQztJQUN0QyxrREFBa0Q7SUFFbEQsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsOEVBQThFO0lBQzlFLDJCQUEyQjtJQUMzQixVQUFVO0lBRVYscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixRQUFRO0lBRVIscUNBQXFDO0lBRXJDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLGVBQWU7SUFDZixVQUFVO0lBRVYsTUFBTUEsVUFBVUosMkRBQVVBO0lBRTFCLE1BQU1LLFNBQVNKLDBEQUFTQTtJQUV4QixNQUFNSyxVQUFVO3lDQUFJQztZQUFBQTs7ZUFBU0MsU0FBU0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUNwRSx3REFBd0Q7SUFDeEQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2hCLCtDQUFNQSxDQUMvQyxzQkFBK0MsT0FBekJLLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNRLElBQUksY0FBYlIsb0NBQUFBLGNBQWVZLElBQUksQ0FBQ0MsSUFBSSxHQUM5Q1g7SUFHRixJQUFJRixRQUFRYyxNQUFNLEtBQUssV0FBVztRQUNoQyxxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaO0lBQ0EsSUFBSWYsUUFBUWMsTUFBTSxLQUFLLG1CQUFtQjtRQUN4Q2IsbUJBQUFBLDZCQUFBQSxPQUFRZSxJQUFJLENBQUM7SUFDZjtJQUNBQyxRQUFRQyxHQUFHLENBQUNsQjtJQUVaLE1BQU1tQixlQUFlLE9BQU9DO1FBQzFCLElBQUk7WUFDRixNQUFNaEIsTUFBTSxjQUFpQixPQUFIZ0IsS0FBTTtnQkFDOUJDLFFBQVE7WUFDVjtZQUNBWjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkTyxRQUFRQyxHQUFHLENBQUNSO1FBQ2Q7SUFDRjtJQUVBLE1BQU1ZLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsUUFBUUYsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUMvQixNQUFNQyxPQUFPTCxFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQzlCLE1BQU1FLE1BQU1OLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDN0IsTUFBTUcsVUFBVVAsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUVqQyxJQUFJO1lBQ0YsTUFBTXZCLE1BQU0sY0FBYztnQkFDeEJpQixRQUFRO2dCQUNSVSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CUjtvQkFDQUc7b0JBQ0FDO29CQUNBQztvQkFDQUksVUFBVWxDLFFBQVFRLElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJO2dCQUNsQztZQUNGO1lBQ0FKO1FBQ0YsRUFBRSxPQUFPMEIsS0FBSztZQUNabEIsUUFBUUMsR0FBRyxDQUFDaUI7UUFDZDtJQUNGO0lBRUEsSUFBSW5DLFFBQVFjLE1BQU0sS0FBSyxpQkFBaUI7UUFDdEMscUJBQ0UsOERBQUNzQjtZQUFJQyxXQUFXM0MsbUVBQWdCOzs4QkFDOUIsOERBQUMwQztvQkFBSUMsV0FBVzNDLCtEQUFZOzhCQUN6QmlCLFlBQ0csZUFDQUgsaUJBQUFBLDJCQUFBQSxLQUFNZ0MsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDTDs0QkFBSUMsV0FBVzNDLDhEQUFXOzs4Q0FDekIsOERBQUMwQztvQ0FBSUMsV0FBVzNDLHdFQUFxQjs4Q0FDbkMsNEVBQUNJLG1EQUFLQTt3Q0FDSjZDLEtBQUtGLEtBQUtaLEdBQUc7d0NBQ2JlLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzhDQUdaLDhEQUFDQztvQ0FBR1YsV0FBVzNDLG1FQUFnQjs4Q0FBRytDLEtBQUtoQixLQUFLOzs7Ozs7OENBQzVDLDhEQUFDd0I7b0NBQ0NaLFdBQVczQyxtRUFBYTtvQ0FDeEJ5RCxTQUFTLElBQU1oQyxhQUFhc0IsS0FBS1csR0FBRzs4Q0FDckM7Ozs7Ozs7MkJBYitCWCxLQUFLVyxHQUFHOzs7Ozs7Ozs7OzhCQW1CbEQsOERBQUNDO29CQUFLaEIsV0FBVzNDLGdFQUFVO29CQUFFNkQsVUFBVWpDOztzQ0FDckMsOERBQUNrQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBUXRCLFdBQVczQywrREFBWTs7Ozs7O3NDQUM5RCw4REFBQytEOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFPdEIsV0FBVzNDLCtEQUFZOzs7Ozs7c0NBQzdELDhEQUFDK0Q7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQVF0QixXQUFXM0MsK0RBQVk7Ozs7OztzQ0FDOUQsOERBQUNrRTs0QkFDQ0QsYUFBWTs0QkFDWnRCLFdBQVczQyxrRUFBZTs0QkFDMUJvRSxNQUFLOzRCQUNMQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNDOzRCQUFPM0IsV0FBVzNDLGdFQUFhO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJMUM7QUFDRjtHQXhITUs7O1FBd0JZSCx1REFBVUE7UUFFWEMsc0RBQVNBO1FBSW1CRiwyQ0FBTUE7OztLQTlCN0NJO0FBMEhOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4PzE1MjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGlkKSB7XHJcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2AsIHtcclxuICAvLyAgICAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIGlmICghcmVzLm9rKSB7XHJcbiAgLy8gICAgICAgc2V0RXJyKHRydWUpO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gICAgIHNldERhdGEoZGF0YSk7XHJcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBnZXREYXRhKCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIC8vdGhpcyBkYXRhIHdpbGwgaGF2ZSBhbGwgdGhlIHJldHVybmVkIHBvc3RzIG9mIHRoZSB1c2VyXHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihcclxuICAgIGBhcGkvcG9zdHM/dXNlcm5hbWU9JHtzZXNzaW9uPy5kYXRhPy51c2VyLm5hbWV9YCwgLy90aGlzIHNlc3Npb24uZGF0YSB3aWxsIGhhdmUgYWxsIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZyAuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwidW5hdXRoZW50aWNhdGVkXCIpIHtcclxuICAgIHJvdXRlcj8ucHVzaChcIi9kYXNoYm9hcmQvbG9naW5cIik7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGAvYXBpL3Bvc3RzLyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgfSk7XHJcbiAgICAgIG11dGF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGUudGFyZ2V0WzFdLnZhbHVlO1xyXG4gICAgY29uc3QgaW1nID0gZS50YXJnZXRbMl0udmFsdWU7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXRbM10udmFsdWU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3RzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzYyxcclxuICAgICAgICAgIGltZyxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICB1c2VybmFtZTogc2Vzc2lvbi5kYXRhLnVzZXIubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIG11dGF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlc3Npb24uc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAge2lzTG9hZGluZ1xyXG4gICAgICAgICAgICA/IFwibG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgIDogZGF0YT8ubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17cG9zdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUaXRsZX0+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHBvc3QuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubmV3fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxoMT5BZGQgTmV3IFBvc3Q8L2gxPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWF9XHJcbiAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVNXUiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkRhc2hib2FyZCIsInNlc3Npb24iLCJyb3V0ZXIiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibXV0YXRlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJ1c2VyIiwibmFtZSIsInN0YXR1cyIsInAiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsImlkIiwibWV0aG9kIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2MiLCJpbWciLCJjb250ZW50IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInBvc3RzIiwibWFwIiwicG9zdCIsImltYWdlQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInBvc3RUaXRsZSIsInNwYW4iLCJkZWxldGUiLCJvbkNsaWNrIiwiX2lkIiwiZm9ybSIsIm5ldyIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwidGV4dEFyZWEiLCJjb2xzIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});