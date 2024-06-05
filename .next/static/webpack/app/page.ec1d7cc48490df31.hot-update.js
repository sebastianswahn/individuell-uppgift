"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/EventCarousel.jsx":
/*!**************************************!*\
  !*** ./components/EventCarousel.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./components/ui/carousel.jsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-provider */ \"(app-pages-browser)/./components/auth-provider.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst EventCarousel = (param)=>{\n    let { events } = param;\n    _s();\n    const { isLoaded, isSignedIn } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const { user, userId } = (0,_auth_provider__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)();\n    const handleUpdateEvent = async (eventId)=>{\n        if (isLoaded && isSignedIn && user && userId) {\n            try {\n                const updatedEvent = await updateUsers(\"events\", eventId, userId);\n                console.log(\"Event updated successfully:\", updatedEvent);\n            } catch (error) {\n                console.error(\"Error updating event:\", error);\n            }\n        } else {\n            console.error(\"User is not signed in\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n        className: \"h-screen w-4/5 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselContent, {\n                children: events.map((event, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                className: \"py-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-3xl\",\n                                    children: event.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                className: \"w-full h-2/5 max-h-[54rem]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: event.image,\n                                    alt: event.name,\n                                    className: \"h-full w-full object-cover rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                className: \"mb-4 overflow-auto w-full h-1/5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                    className: \"p-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-2xl\",\n                                            children: [\n                                                \"Den \",\n                                                event.date,\n                                                \" kan du \",\n                                                event.description,\n                                                \" i \",\n                                                event.location,\n                                                \" det finns \",\n                                                event.seats,\n                                                \" seats available\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex text-center justify-center items-center\",\n                                            children: [\n                                                \"                 \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    href: \"/\".concat(event.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                        children: \"Mer info\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 80\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselPrevious, {}, void 0, false, {\n                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselNext, {}, void 0, false, {\n                fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebbeswahn/Desktop/individuelluppgift/components/EventCarousel.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventCarousel, \"3gD34HLWn04hQIhxpg6+f1OaAZc=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth,\n        _auth_provider__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c = EventCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCarousel);\nvar _c;\n$RefreshReg$(_c, \"EventCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRXZlbnRDYXJvdXNlbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBTXJCO0FBT0k7QUFDRztBQUNHO0FBQ0s7QUFDSTtBQUNwQjtBQUU3QixNQUFNaUIsZ0JBQWdCO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUUvQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUdQLHNEQUFPQTtJQUN4QyxNQUFNLEVBQUVRLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdQLDhEQUFjQTtJQUV6QyxNQUFNUSxvQkFBb0IsT0FBT0M7UUFDL0IsSUFBSUwsWUFBWUMsY0FBY0MsUUFBUUMsUUFBUTtZQUM1QyxJQUFJO2dCQUNGLE1BQU1HLGVBQWUsTUFBTUMsWUFBWSxVQUFVRixTQUFTRjtnQkFDMURLLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JIO1lBQzdDLEVBQUUsT0FBT0ksT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRixPQUFPO1lBQ0xGLFFBQVFFLEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBRUUscUJBQ0UsOERBQUN0Qiw2REFBUUE7UUFBQ3VCLFdBQVU7OzBCQUNsQiw4REFBQ3RCLG9FQUFlQTswQkFDYlUsT0FBT2EsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ3hCLGlFQUFZQTs7MENBQ1gsOERBQUNILDBEQUFTQTtnQ0FBQ3dCLFdBQVU7MENBQ25CLDRFQUFDSTtvQ0FBS0osV0FBVTs4Q0FBWUUsTUFBTUcsSUFBSTs7Ozs7Ozs7Ozs7MENBR3RDLDhEQUFDL0IsNERBQVdBO2dDQUFDMEIsV0FBVTswQ0FDckIsNEVBQUNNO29DQUNDQyxLQUFLTCxNQUFNTSxLQUFLO29DQUNoQkMsS0FBS1AsTUFBTUcsSUFBSTtvQ0FDZkwsV0FBVTs7Ozs7Ozs7Ozs7MENBS2hCLDhEQUFDM0IscURBQUlBO2dDQUFDMkIsV0FBVTswQ0FDZCw0RUFBQ3pCLGdFQUFlQTtvQ0FBQ3lCLFdBQVU7O3NEQUN6Qiw4REFBQ0k7NENBQUtKLFdBQVU7O2dEQUFXO2dEQUNwQkUsTUFBTVEsSUFBSTtnREFBQztnREFBU1IsTUFBTVMsV0FBVztnREFBQztnREFBSVQsTUFBTVUsUUFBUTtnREFBQztnREFBWVYsTUFBTVcsS0FBSztnREFBQzs7Ozs7OztzREFFeEcsOERBQUNDOzRDQUFJZCxXQUFVOztnREFBK0M7OERBQWlCLDhEQUFDZCxpREFBSUE7b0RBQUM2QixNQUFNLElBQWEsT0FBVGIsTUFBTWMsRUFBRTs4REFDdkYsNEVBQUNsQyw4Q0FBTUE7a0VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXBCS3FCOzs7Ozs7Ozs7OzBCQTJCdkIsOERBQUN0QixxRUFBZ0JBOzs7OzswQkFDakIsOERBQUNELGlFQUFZQTs7Ozs7Ozs7Ozs7QUFHbkI7R0FyRE1POztRQUU2Qkosa0RBQU9BO1FBQ2ZFLDBEQUFjQTs7O0tBSG5DRTtBQXVETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V2ZW50Q2Fyb3VzZWwuanN4P2Y5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxDb250ZW50LFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsTmV4dCxcbiAgQ2Fyb3VzZWxQcmV2aW91cyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcbmltcG9ydCB7IFNpZ25JbkJ1dHRvbiB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuL2F1dGgtcHJvdmlkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRXZlbnRDYXJvdXNlbCA9ICh7IGV2ZW50cyB9KSA9PiB7XG5cbiAgY29uc3QgeyBpc0xvYWRlZCwgaXNTaWduZWRJbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHVzZXIsIHVzZXJJZCB9ID0gdXNlQXV0aENvbnRleHQoKTtcblxuY29uc3QgaGFuZGxlVXBkYXRlRXZlbnQgPSBhc3luYyAoZXZlbnRJZCkgPT4ge1xuICBpZiAoaXNMb2FkZWQgJiYgaXNTaWduZWRJbiAmJiB1c2VyICYmIHVzZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGVkRXZlbnQgPSBhd2FpdCB1cGRhdGVVc2VycygnZXZlbnRzJywgZXZlbnRJZCwgdXNlcklkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgdXBkYXRlZCBzdWNjZXNzZnVsbHk6XCIsIHVwZGF0ZWRFdmVudCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBldmVudDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3Qgc2lnbmVkIGluXCIpO1xuICB9XG59O1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctNC81IFwiPlxuICAgICAgPENhcm91c2VsQ29udGVudD5cbiAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57ZXZlbnQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cblxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwidy1mdWxsIGgtMi81IG1heC1oLVs1NHJlbV1cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2V2ZW50LmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtldmVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cblxuXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtYi00IG92ZXJmbG93LWF1dG8gdy1mdWxsIGgtMS81XCI+XG4gICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgIERlbiB7ZXZlbnQuZGF0ZX0ga2FuIGR1IHtldmVudC5kZXNjcmlwdGlvbn0gaSB7ZXZlbnQubG9jYXRpb259IGRldCBmaW5ucyB7ZXZlbnQuc2VhdHN9IHNlYXRzIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbjxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj4gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtldmVudC5pZH1gfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPk1lciBpbmZvPC9CdXR0b24+PC9MaW5rPlxuPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWxDb250ZW50PlxuICAgICAgPENhcm91c2VsUHJldmlvdXMgLz5cbiAgICAgIDxDYXJvdXNlbE5leHQgLz5cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDYXJvdXNlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRUaXRsZSIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxDb250ZW50IiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxOZXh0IiwiQ2Fyb3VzZWxQcmV2aW91cyIsIkJ1dHRvbiIsInVzZUF1dGgiLCJTaWduSW5CdXR0b24iLCJ1c2VBdXRoQ29udGV4dCIsIkxpbmsiLCJFdmVudENhcm91c2VsIiwiZXZlbnRzIiwiaXNMb2FkZWQiLCJpc1NpZ25lZEluIiwidXNlciIsInVzZXJJZCIsImhhbmRsZVVwZGF0ZUV2ZW50IiwiZXZlbnRJZCIsInVwZGF0ZWRFdmVudCIsInVwZGF0ZVVzZXJzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2xhc3NOYW1lIiwibWFwIiwiZXZlbnQiLCJpbmRleCIsInNwYW4iLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInNlYXRzIiwiZGl2IiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EventCarousel.jsx\n"));

/***/ })

});