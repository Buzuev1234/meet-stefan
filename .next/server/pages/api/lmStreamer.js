"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 2772:
/***/ ((module) => {

module.exports = require("socialagi");

/***/ }),

/***/ 8789:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _socialagi = __webpack_require__(2772);
// module.exports = createOpenAIStreamHandler(Model.GPT_3_5_turbo_16k);
module.exports = (0, _socialagi.createOpenAIStreamHandler)(_socialagi.Model.GPT_4);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8789));
module.exports = __webpack_exports__;

})();