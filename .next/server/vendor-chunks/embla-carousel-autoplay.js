"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-autoplay";
exports.ids = ["vendor-chunks/embla-carousel-autoplay"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\nconst defaultOptions = {\n  active: true,\n  breakpoints: {},\n  delay: 4000,\n  jump: false,\n  playOnInit: true,\n  stopOnFocusIn: true,\n  stopOnInteraction: true,\n  stopOnMouseEnter: false,\n  stopOnLastSnap: false,\n  rootNode: null\n};\n\nfunction Autoplay(userOptions = {}) {\n  let options;\n  let emblaApi;\n  let destroyed;\n  let playing = false;\n  let resume = true;\n  let jump = false;\n  let timer = 0;\n  function init(emblaApiInstance, optionsHandler) {\n    emblaApi = emblaApiInstance;\n    const {\n      mergeOptions,\n      optionsAtMedia\n    } = optionsHandler;\n    const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);\n    const allOptions = mergeOptions(optionsBase, userOptions);\n    options = optionsAtMedia(allOptions);\n    if (emblaApi.scrollSnapList().length <= 1) return;\n    jump = options.jump;\n    destroyed = false;\n    const {\n      eventStore,\n      ownerDocument\n    } = emblaApi.internalEngine();\n    const emblaRoot = emblaApi.rootNode();\n    const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;\n    const container = emblaApi.containerNode();\n    emblaApi.on('pointerDown', stopTimer);\n    if (!options.stopOnInteraction) {\n      emblaApi.on('pointerUp', startTimer);\n    }\n    if (options.stopOnMouseEnter) {\n      eventStore.add(root, 'mouseenter', () => {\n        resume = false;\n        stopTimer();\n      });\n      if (!options.stopOnInteraction) {\n        eventStore.add(root, 'mouseleave', () => {\n          resume = true;\n          startTimer();\n        });\n      }\n    }\n    if (options.stopOnFocusIn) {\n      eventStore.add(container, 'focusin', stopTimer);\n      if (!options.stopOnInteraction) {\n        eventStore.add(container, 'focusout', startTimer);\n      }\n    }\n    eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);\n    if (options.playOnInit && !documentIsHidden()) startTimer();\n  }\n  function destroy() {\n    emblaApi.off('pointerDown', stopTimer).off('pointerUp', startTimer);\n    stopTimer();\n    destroyed = true;\n    playing = false;\n  }\n  function startTimer() {\n    if (destroyed) return;\n    if (!resume) return;\n    if (!playing) emblaApi.emit('autoplay:play');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = ownerWindow.setInterval(next, options.delay);\n    playing = true;\n  }\n  function stopTimer() {\n    if (destroyed) return;\n    if (playing) emblaApi.emit('autoplay:stop');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = 0;\n    playing = false;\n  }\n  function visibilityChange() {\n    if (documentIsHidden()) {\n      resume = playing;\n      return stopTimer();\n    }\n    if (resume) startTimer();\n  }\n  function documentIsHidden() {\n    const {\n      ownerDocument\n    } = emblaApi.internalEngine();\n    return ownerDocument.visibilityState === 'hidden';\n  }\n  function play(jumpOverride) {\n    if (typeof jumpOverride !== 'undefined') jump = jumpOverride;\n    resume = true;\n    startTimer();\n  }\n  function stop() {\n    if (playing) stopTimer();\n  }\n  function reset() {\n    if (playing) play();\n  }\n  function isPlaying() {\n    return playing;\n  }\n  function next() {\n    const {\n      index\n    } = emblaApi.internalEngine();\n    const nextIndex = index.clone().add(1).get();\n    const lastIndex = emblaApi.scrollSnapList().length - 1;\n    const kill = options.stopOnLastSnap && nextIndex === lastIndex;\n    if (kill) stopTimer();\n    if (emblaApi.canScrollNext()) {\n      emblaApi.scrollNext(jump);\n    } else {\n      emblaApi.scrollTo(0, jump);\n    }\n  }\n  const self = {\n    name: 'autoplay',\n    options: userOptions,\n    init,\n    destroy,\n    play,\n    stop,\n    reset,\n    isPlaying\n  };\n  return self;\n}\nAutoplay.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-autoplay.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncnVwcC1qczMvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcz83ZGM0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBhY3RpdmU6IHRydWUsXG4gIGJyZWFrcG9pbnRzOiB7fSxcbiAgZGVsYXk6IDQwMDAsXG4gIGp1bXA6IGZhbHNlLFxuICBwbGF5T25Jbml0OiB0cnVlLFxuICBzdG9wT25Gb2N1c0luOiB0cnVlLFxuICBzdG9wT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgc3RvcE9uTW91c2VFbnRlcjogZmFsc2UsXG4gIHN0b3BPbkxhc3RTbmFwOiBmYWxzZSxcbiAgcm9vdE5vZGU6IG51bGxcbn07XG5cbmZ1bmN0aW9uIEF1dG9wbGF5KHVzZXJPcHRpb25zID0ge30pIHtcbiAgbGV0IG9wdGlvbnM7XG4gIGxldCBlbWJsYUFwaTtcbiAgbGV0IGRlc3Ryb3llZDtcbiAgbGV0IHBsYXlpbmcgPSBmYWxzZTtcbiAgbGV0IHJlc3VtZSA9IHRydWU7XG4gIGxldCBqdW1wID0gZmFsc2U7XG4gIGxldCB0aW1lciA9IDA7XG4gIGZ1bmN0aW9uIGluaXQoZW1ibGFBcGlJbnN0YW5jZSwgb3B0aW9uc0hhbmRsZXIpIHtcbiAgICBlbWJsYUFwaSA9IGVtYmxhQXBpSW5zdGFuY2U7XG4gICAgY29uc3Qge1xuICAgICAgbWVyZ2VPcHRpb25zLFxuICAgICAgb3B0aW9uc0F0TWVkaWFcbiAgICB9ID0gb3B0aW9uc0hhbmRsZXI7XG4gICAgY29uc3Qgb3B0aW9uc0Jhc2UgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIEF1dG9wbGF5Lmdsb2JhbE9wdGlvbnMpO1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9uc0Jhc2UsIHVzZXJPcHRpb25zKTtcbiAgICBvcHRpb25zID0gb3B0aW9uc0F0TWVkaWEoYWxsT3B0aW9ucyk7XG4gICAgaWYgKGVtYmxhQXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICBqdW1wID0gb3B0aW9ucy5qdW1wO1xuICAgIGRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50U3RvcmUsXG4gICAgICBvd25lckRvY3VtZW50XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgY29uc3QgZW1ibGFSb290ID0gZW1ibGFBcGkucm9vdE5vZGUoKTtcbiAgICBjb25zdCByb290ID0gb3B0aW9ucy5yb290Tm9kZSAmJiBvcHRpb25zLnJvb3ROb2RlKGVtYmxhUm9vdCkgfHwgZW1ibGFSb290O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVtYmxhQXBpLmNvbnRhaW5lck5vZGUoKTtcbiAgICBlbWJsYUFwaS5vbigncG9pbnRlckRvd24nLCBzdG9wVGltZXIpO1xuICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgZW1ibGFBcGkub24oJ3BvaW50ZXJVcCcsIHN0YXJ0VGltZXIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Nb3VzZUVudGVyKSB7XG4gICAgICBldmVudFN0b3JlLmFkZChyb290LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgcmVzdW1lID0gZmFsc2U7XG4gICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc3RvcE9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZXZlbnRTdG9yZS5hZGQocm9vdCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgcmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Gb2N1c0luKSB7XG4gICAgICBldmVudFN0b3JlLmFkZChjb250YWluZXIsICdmb2N1c2luJywgc3RvcFRpbWVyKTtcbiAgICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgICBldmVudFN0b3JlLmFkZChjb250YWluZXIsICdmb2N1c291dCcsIHN0YXJ0VGltZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBldmVudFN0b3JlLmFkZChvd25lckRvY3VtZW50LCAndmlzaWJpbGl0eWNoYW5nZScsIHZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIGlmIChvcHRpb25zLnBsYXlPbkluaXQgJiYgIWRvY3VtZW50SXNIaWRkZW4oKSkgc3RhcnRUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZW1ibGFBcGkub2ZmKCdwb2ludGVyRG93bicsIHN0b3BUaW1lcikub2ZmKCdwb2ludGVyVXAnLCBzdGFydFRpbWVyKTtcbiAgICBzdG9wVGltZXIoKTtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgIGlmIChkZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoIXJlc3VtZSkgcmV0dXJuO1xuICAgIGlmICghcGxheWluZykgZW1ibGFBcGkuZW1pdCgnYXV0b3BsYXk6cGxheScpO1xuICAgIGNvbnN0IHtcbiAgICAgIG93bmVyV2luZG93XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgb3duZXJXaW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBvd25lcldpbmRvdy5zZXRJbnRlcnZhbChuZXh0LCBvcHRpb25zLmRlbGF5KTtcbiAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmIChwbGF5aW5nKSBlbWJsYUFwaS5lbWl0KCdhdXRvcGxheTpzdG9wJyk7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJXaW5kb3dcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBvd25lcldpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IDA7XG4gICAgcGxheWluZyA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKGRvY3VtZW50SXNIaWRkZW4oKSkge1xuICAgICAgcmVzdW1lID0gcGxheWluZztcbiAgICAgIHJldHVybiBzdG9wVGltZXIoKTtcbiAgICB9XG4gICAgaWYgKHJlc3VtZSkgc3RhcnRUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGRvY3VtZW50SXNIaWRkZW4oKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJEb2N1bWVudFxuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIHJldHVybiBvd25lckRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbic7XG4gIH1cbiAgZnVuY3Rpb24gcGxheShqdW1wT3ZlcnJpZGUpIHtcbiAgICBpZiAodHlwZW9mIGp1bXBPdmVycmlkZSAhPT0gJ3VuZGVmaW5lZCcpIGp1bXAgPSBqdW1wT3ZlcnJpZGU7XG4gICAgcmVzdW1lID0gdHJ1ZTtcbiAgICBzdGFydFRpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpZiAocGxheWluZykgc3RvcFRpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaWYgKHBsYXlpbmcpIHBsYXkoKTtcbiAgfVxuICBmdW5jdGlvbiBpc1BsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHBsYXlpbmc7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbmRleFxuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4LmNsb25lKCkuYWRkKDEpLmdldCgpO1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IGVtYmxhQXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBraWxsID0gb3B0aW9ucy5zdG9wT25MYXN0U25hcCAmJiBuZXh0SW5kZXggPT09IGxhc3RJbmRleDtcbiAgICBpZiAoa2lsbCkgc3RvcFRpbWVyKCk7XG4gICAgaWYgKGVtYmxhQXBpLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGFBcGkuc2Nyb2xsTmV4dChqdW1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1ibGFBcGkuc2Nyb2xsVG8oMCwganVtcCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNlbGYgPSB7XG4gICAgbmFtZTogJ2F1dG9wbGF5JyxcbiAgICBvcHRpb25zOiB1c2VyT3B0aW9ucyxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gICAgcGxheSxcbiAgICBzdG9wLFxuICAgIHJlc2V0LFxuICAgIGlzUGxheWluZ1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cbkF1dG9wbGF5Lmdsb2JhbE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IEF1dG9wbGF5IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js\n");

/***/ })

};
;