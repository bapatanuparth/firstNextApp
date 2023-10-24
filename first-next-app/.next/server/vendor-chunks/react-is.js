"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-is";
exports.ids = ["vendor-chunks/react-is"];
exports.modules = {

/***/ "(rsc)/../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \nif (true) {\n    (function() {\n        \"use strict\";\n        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n        // nor polyfill, then a plain number is used for performance.\n        var hasSymbol = typeof Symbol === \"function\" && Symbol.for;\n        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for(\"react.element\") : 0xeac7;\n        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for(\"react.portal\") : 0xeaca;\n        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for(\"react.fragment\") : 0xeacb;\n        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for(\"react.strict_mode\") : 0xeacc;\n        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for(\"react.profiler\") : 0xead2;\n        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for(\"react.provider\") : 0xeacd;\n        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for(\"react.context\") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n        // (unstable) APIs that have been removed. Can we remove the symbols?\n        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for(\"react.async_mode\") : 0xeacf;\n        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for(\"react.concurrent_mode\") : 0xeacf;\n        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for(\"react.forward_ref\") : 0xead0;\n        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for(\"react.suspense\") : 0xead1;\n        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for(\"react.suspense_list\") : 0xead8;\n        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for(\"react.memo\") : 0xead3;\n        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for(\"react.lazy\") : 0xead4;\n        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for(\"react.block\") : 0xead9;\n        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for(\"react.fundamental\") : 0xead5;\n        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for(\"react.responder\") : 0xead6;\n        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for(\"react.scope\") : 0xead7;\n        function isValidElementType(type) {\n            return typeof type === \"string\" || typeof type === \"function\" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === \"object\" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n        }\n        function typeOf(object) {\n            if (typeof object === \"object\" && object !== null) {\n                var $$typeof = object.$$typeof;\n                switch($$typeof){\n                    case REACT_ELEMENT_TYPE:\n                        var type = object.type;\n                        switch(type){\n                            case REACT_ASYNC_MODE_TYPE:\n                            case REACT_CONCURRENT_MODE_TYPE:\n                            case REACT_FRAGMENT_TYPE:\n                            case REACT_PROFILER_TYPE:\n                            case REACT_STRICT_MODE_TYPE:\n                            case REACT_SUSPENSE_TYPE:\n                                return type;\n                            default:\n                                var $$typeofType = type && type.$$typeof;\n                                switch($$typeofType){\n                                    case REACT_CONTEXT_TYPE:\n                                    case REACT_FORWARD_REF_TYPE:\n                                    case REACT_LAZY_TYPE:\n                                    case REACT_MEMO_TYPE:\n                                    case REACT_PROVIDER_TYPE:\n                                        return $$typeofType;\n                                    default:\n                                        return $$typeof;\n                                }\n                        }\n                    case REACT_PORTAL_TYPE:\n                        return $$typeof;\n                }\n            }\n            return undefined;\n        } // AsyncMode is deprecated along with isAsyncMode\n        var AsyncMode = REACT_ASYNC_MODE_TYPE;\n        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\n        var ContextConsumer = REACT_CONTEXT_TYPE;\n        var ContextProvider = REACT_PROVIDER_TYPE;\n        var Element = REACT_ELEMENT_TYPE;\n        var ForwardRef = REACT_FORWARD_REF_TYPE;\n        var Fragment = REACT_FRAGMENT_TYPE;\n        var Lazy = REACT_LAZY_TYPE;\n        var Memo = REACT_MEMO_TYPE;\n        var Portal = REACT_PORTAL_TYPE;\n        var Profiler = REACT_PROFILER_TYPE;\n        var StrictMode = REACT_STRICT_MODE_TYPE;\n        var Suspense = REACT_SUSPENSE_TYPE;\n        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n        function isAsyncMode(object) {\n            {\n                if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n                    console[\"warn\"](\"The ReactIs.isAsyncMode() alias has been deprecated, \" + \"and will be removed in React 17+. Update your code to use \" + \"ReactIs.isConcurrentMode() instead. It has the exact same API.\");\n                }\n            }\n            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n        }\n        function isConcurrentMode(object) {\n            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n        }\n        function isContextConsumer(object) {\n            return typeOf(object) === REACT_CONTEXT_TYPE;\n        }\n        function isContextProvider(object) {\n            return typeOf(object) === REACT_PROVIDER_TYPE;\n        }\n        function isElement(object) {\n            return typeof object === \"object\" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n        }\n        function isForwardRef(object) {\n            return typeOf(object) === REACT_FORWARD_REF_TYPE;\n        }\n        function isFragment(object) {\n            return typeOf(object) === REACT_FRAGMENT_TYPE;\n        }\n        function isLazy(object) {\n            return typeOf(object) === REACT_LAZY_TYPE;\n        }\n        function isMemo(object) {\n            return typeOf(object) === REACT_MEMO_TYPE;\n        }\n        function isPortal(object) {\n            return typeOf(object) === REACT_PORTAL_TYPE;\n        }\n        function isProfiler(object) {\n            return typeOf(object) === REACT_PROFILER_TYPE;\n        }\n        function isStrictMode(object) {\n            return typeOf(object) === REACT_STRICT_MODE_TYPE;\n        }\n        function isSuspense(object) {\n            return typeOf(object) === REACT_SUSPENSE_TYPE;\n        }\n        exports.AsyncMode = AsyncMode;\n        exports.ConcurrentMode = ConcurrentMode;\n        exports.ContextConsumer = ContextConsumer;\n        exports.ContextProvider = ContextProvider;\n        exports.Element = Element;\n        exports.ForwardRef = ForwardRef;\n        exports.Fragment = Fragment;\n        exports.Lazy = Lazy;\n        exports.Memo = Memo;\n        exports.Portal = Portal;\n        exports.Profiler = Profiler;\n        exports.StrictMode = StrictMode;\n        exports.Suspense = Suspense;\n        exports.isAsyncMode = isAsyncMode;\n        exports.isConcurrentMode = isConcurrentMode;\n        exports.isContextConsumer = isContextConsumer;\n        exports.isContextProvider = isContextProvider;\n        exports.isElement = isElement;\n        exports.isForwardRef = isForwardRef;\n        exports.isFragment = isFragment;\n        exports.isLazy = isLazy;\n        exports.isMemo = isMemo;\n        exports.isPortal = isPortal;\n        exports.isProfiler = isProfiler;\n        exports.isStrictMode = isStrictMode;\n        exports.isSuspense = isSuspense;\n        exports.isValidElementType = isValidElementType;\n        exports.typeOf = typeOf;\n    })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DLEdBRUQ7QUFJQSxJQUFJQSxJQUFxQyxFQUFFO0lBQ3hDO1FBQ0g7UUFFQSxtRkFBbUY7UUFDbkYsNkRBQTZEO1FBQzdELElBQUlDLFlBQVksT0FBT0MsV0FBVyxjQUFjQSxPQUFPQyxHQUFHO1FBQzFELElBQUlDLHFCQUFxQkgsWUFBWUMsT0FBT0MsR0FBRyxDQUFDLG1CQUFtQjtRQUNuRSxJQUFJRSxvQkFBb0JKLFlBQVlDLE9BQU9DLEdBQUcsQ0FBQyxrQkFBa0I7UUFDakUsSUFBSUcsc0JBQXNCTCxZQUFZQyxPQUFPQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3JFLElBQUlJLHlCQUF5Qk4sWUFBWUMsT0FBT0MsR0FBRyxDQUFDLHVCQUF1QjtRQUMzRSxJQUFJSyxzQkFBc0JQLFlBQVlDLE9BQU9DLEdBQUcsQ0FBQyxvQkFBb0I7UUFDckUsSUFBSU0sc0JBQXNCUixZQUFZQyxPQUFPQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3JFLElBQUlPLHFCQUFxQlQsWUFBWUMsT0FBT0MsR0FBRyxDQUFDLG1CQUFtQixRQUFRLDhFQUE4RTtRQUN6SixxRUFBcUU7UUFFckUsSUFBSVEsd0JBQXdCVixZQUFZQyxPQUFPQyxHQUFHLENBQUMsc0JBQXNCO1FBQ3pFLElBQUlTLDZCQUE2QlgsWUFBWUMsT0FBT0MsR0FBRyxDQUFDLDJCQUEyQjtRQUNuRixJQUFJVSx5QkFBeUJaLFlBQVlDLE9BQU9DLEdBQUcsQ0FBQyx1QkFBdUI7UUFDM0UsSUFBSVcsc0JBQXNCYixZQUFZQyxPQUFPQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3JFLElBQUlZLDJCQUEyQmQsWUFBWUMsT0FBT0MsR0FBRyxDQUFDLHlCQUF5QjtRQUMvRSxJQUFJYSxrQkFBa0JmLFlBQVlDLE9BQU9DLEdBQUcsQ0FBQyxnQkFBZ0I7UUFDN0QsSUFBSWMsa0JBQWtCaEIs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QUFrQixHQUFHUDtRQUNyQk8sY0FBYyxHQUFHTjtRQUNqQk0sY0FBYyxHQUFHTDtRQUNqQkssZ0JBQWdCLEdBQUdKO1FBQ25CSSxrQkFBa0IsR0FBR0g7UUFDckJHLG9CQUFvQixHQUFHRjtRQUN2QkUsa0JBQWtCLEdBQUdEO1FBQ3JCQywwQkFBMEIsR0FBR25DO1FBQzdCbUMsY0FBYyxHQUFHaEM7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3QtbmV4dC1hcHAvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcz8wMDg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJoYXNTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9BU1lOQ19NT0RFX1RZUEUiLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfQkxPQ0tfVFlQRSIsIlJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUiLCJSRUFDVF9SRVNQT05ERVJfVFlQRSIsIlJFQUNUX1NDT1BFX1RZUEUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlIiwiJCR0eXBlb2YiLCJ0eXBlT2YiLCJvYmplY3QiLCIkJHR5cGVvZlR5cGUiLCJ1bmRlZmluZWQiLCJBc3luY01vZGUiLCJDb25jdXJyZW50TW9kZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGb3J3YXJkUmVmIiwiRnJhZ21lbnQiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIlN1c3BlbnNlIiwiaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUiLCJpc0FzeW5jTW9kZSIsImNvbnNvbGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/react-is/cjs/react-is.development.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"(rsc)/../node_modules/react-is/cjs/react-is.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsS0FBeUIsRUFBYyxFQUUxQyxNQUFNO0lBQ0xDLHVJQUF5QjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LW5leHQtYXBwLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcz84MDI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/react-is/index.js\n");

/***/ })

};
;