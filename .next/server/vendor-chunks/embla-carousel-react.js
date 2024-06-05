"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-react";
exports.ids = ["vendor-chunks/embla-carousel-react"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useEmblaCarousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! embla-carousel-reactive-utils */ \"(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\");\n/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ \"(ssr)/./node_modules/embla-carousel/esm/embla-carousel.esm.js\");\n\n\n\n\nfunction useEmblaCarousel(options = {}, plugins = []) {\n  const storedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options);\n  const storedPlugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(plugins);\n  const [emblaApi, setEmblaApi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const reInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);\n  }, [emblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && viewport) {\n      embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].globalOptions = useEmblaCarousel.globalOptions;\n      const newEmblaApi = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(viewport, storedOptions.current, storedPlugins.current);\n      setEmblaApi(newEmblaApi);\n      return () => newEmblaApi.destroy();\n    } else {\n      setEmblaApi(undefined);\n    }\n  }, [viewport, setEmblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.areOptionsEqual)(storedOptions.current, options)) return;\n    storedOptions.current = options;\n    reInit();\n  }, [options, reInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.arePluginsEqual)(storedPlugins.current, plugins)) return;\n    storedPlugins.current = plugins;\n    reInit();\n  }, [plugins, reInit]);\n  return [setViewport, emblaApi];\n}\nuseEmblaCarousel.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-react.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3QvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlFO0FBQzJCO0FBQ2pEOztBQUUzQyxzQ0FBc0M7QUFDdEMsd0JBQXdCLDZDQUFNO0FBQzlCLHdCQUF3Qiw2Q0FBTTtBQUM5QixrQ0FBa0MsK0NBQVE7QUFDMUMsa0NBQWtDLCtDQUFRO0FBQzFDLGlCQUFpQixrREFBVztBQUM1QjtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1gsUUFBUSx3RUFBUztBQUNqQixNQUFNLHNEQUFhO0FBQ25CLDBCQUEwQiwwREFBYTtBQUN2QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYLFFBQVEsOEVBQWU7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1gsUUFBUSw4RUFBZTtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFdUM7QUFDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncnVwcC1qczMvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3QvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0LmVzbS5qcz83Yjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYW5Vc2VET00sIGFyZU9wdGlvbnNFcXVhbCwgYXJlUGx1Z2luc0VxdWFsIH0gZnJvbSAnZW1ibGEtY2Fyb3VzZWwtcmVhY3RpdmUtdXRpbHMnO1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnO1xuXG5mdW5jdGlvbiB1c2VFbWJsYUNhcm91c2VsKG9wdGlvbnMgPSB7fSwgcGx1Z2lucyA9IFtdKSB7XG4gIGNvbnN0IHN0b3JlZE9wdGlvbnMgPSB1c2VSZWYob3B0aW9ucyk7XG4gIGNvbnN0IHN0b3JlZFBsdWdpbnMgPSB1c2VSZWYocGx1Z2lucyk7XG4gIGNvbnN0IFtlbWJsYUFwaSwgc2V0RW1ibGFBcGldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByZUluaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGVtYmxhQXBpKSBlbWJsYUFwaS5yZUluaXQoc3RvcmVkT3B0aW9ucy5jdXJyZW50LCBzdG9yZWRQbHVnaW5zLmN1cnJlbnQpO1xuICB9LCBbZW1ibGFBcGldKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FuVXNlRE9NKCkgJiYgdmlld3BvcnQpIHtcbiAgICAgIEVtYmxhQ2Fyb3VzZWwuZ2xvYmFsT3B0aW9ucyA9IHVzZUVtYmxhQ2Fyb3VzZWwuZ2xvYmFsT3B0aW9ucztcbiAgICAgIGNvbnN0IG5ld0VtYmxhQXBpID0gRW1ibGFDYXJvdXNlbCh2aWV3cG9ydCwgc3RvcmVkT3B0aW9ucy5jdXJyZW50LCBzdG9yZWRQbHVnaW5zLmN1cnJlbnQpO1xuICAgICAgc2V0RW1ibGFBcGkobmV3RW1ibGFBcGkpO1xuICAgICAgcmV0dXJuICgpID0+IG5ld0VtYmxhQXBpLmRlc3Ryb3koKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RW1ibGFBcGkodW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFt2aWV3cG9ydCwgc2V0RW1ibGFBcGldKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJlT3B0aW9uc0VxdWFsKHN0b3JlZE9wdGlvbnMuY3VycmVudCwgb3B0aW9ucykpIHJldHVybjtcbiAgICBzdG9yZWRPcHRpb25zLmN1cnJlbnQgPSBvcHRpb25zO1xuICAgIHJlSW5pdCgpO1xuICB9LCBbb3B0aW9ucywgcmVJbml0XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZVBsdWdpbnNFcXVhbChzdG9yZWRQbHVnaW5zLmN1cnJlbnQsIHBsdWdpbnMpKSByZXR1cm47XG4gICAgc3RvcmVkUGx1Z2lucy5jdXJyZW50ID0gcGx1Z2lucztcbiAgICByZUluaXQoKTtcbiAgfSwgW3BsdWdpbnMsIHJlSW5pdF0pO1xuICByZXR1cm4gW3NldFZpZXdwb3J0LCBlbWJsYUFwaV07XG59XG51c2VFbWJsYUNhcm91c2VsLmdsb2JhbE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1ibGEtY2Fyb3VzZWwtcmVhY3QuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js\n");

/***/ })

};
;