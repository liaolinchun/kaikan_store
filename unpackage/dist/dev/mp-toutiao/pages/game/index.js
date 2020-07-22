(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game/index"],{

/***/ 193:
/*!******************************************************************!*\
  !*** D:/uni-app/eryue26/main.js?{"page":"pages%2Fgame%2Findex"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/game/index.vue */ 194));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 194:
/*!***********************************************!*\
  !*** D:/uni-app/eryue26/pages/game/index.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=361b47f0& */ 195);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 197);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ 199);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uni-app/eryue26/pages/game/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 195:
/*!******************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/game/index.vue?vue&type=template&id=361b47f0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=361b47f0& */ 196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_361b47f0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 196:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/game/index.vue?vue&type=template&id=361b47f0& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 197:
/*!************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/game/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 198);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/game/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































var _interface = _interopRequireDefault(__webpack_require__(/*! ../../utils/interface.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var timer;var share = function share() {return __webpack_require__.e(/*! import() | pages/game/share */ "pages/game/share").then(__webpack_require__.bind(null, /*! ./share.vue */ 355));};var _default = { data: function data() {return { headerShow: false, goods_id: '', //商品id
      goodsInfo: { name: '', old: '', new: '', soldOut: '', img: '', id: '', money: '' }, goods: [], sec: 9, startSec: 3, isShow: false, canClick: true, startFont: '开始', money: '', //优惠后价格
      kan_id: '', //游戏id
      child_id: '', //开砍商品id
      unit: '', //十分
      decade: '', //分
      hunders: '.', //点
      kilbit: '', //个
      myriabit: '', //十
      debit: '', //百
      hunbit: '', //千
      ten: '', //万	
      timer: null, count: 0, //记录点击次数		
      shareShow: false, hour: '', minute: '', second: '', endTime: '', userInfo: '', end_time: '', //活动剩余时间
      gameOverShow: false, isFriend: false, //是否是朋友帮砍
      help: [], //朋友帮砍
      bottomPrice: '', //最低的价格
      remark: '注: 请在游戏活动时间结束之前进行购买', you: '' //记录邮费
    };}, onLoad: function onLoad(option) {var _this = this;try {uni.showToast({ icon: "loading", title: "数据获取中" });if (option.scanCode) {//扫码进入
        this.headerShow = false;this.isFriend = true;var codeData = JSON.parse(option.scanCode);this.kan_id = codeData.k;this.gameOverShow = false;this.you = codeData.y;this.request({ //扫码后发起请求
          url: _interface.default.friend_kan, method: 'POST', data: { kan_id: codeData.k }, success: function success(res) {console.log(res);if (res.error_code == 1) {uni.showToast({ title: '请先去登录', icon: 'none', duration: 1000 });setTimeout(function () {uni.navigateTo({ url: '../public/login' });
              }, 1200);

            } else if (res.error_code == 4) {//游戏已经结束
              _this.gameOverShow = true;
            } else if (res.error_code == 5) {//已经玩过此游戏,不能重复玩!

              _this.end();
              _this.goods = res.goods[0];
              _this.money = res.on_price;
              _this.kan_id = res.kan_id;
              _this.end_time = res.end_time * 1000;
              _this.child_id = res.child_id;
              _this.help = res.help;
              _this.help_Arr();
              _this.open();
              if (parseFloat(res.on_price) <= parseFloat(_this.bottomPrice)) {//到达最低价

                _this.money = _this.bottomPrice.toFixed(2);
                _this.remark = '已经到达最低价,请在活动时间结束前进行购买';
              }
            } else if (res.error_code == 0) {//还没玩过 可以玩
              _this.goodsInfo.old = res.on_price;
              _this.end_time = res.end_time * 1000;
              _this.open();
              if (parseFloat(res.on_price) <= parseFloat(_this.bottomPrice)) {//到达最低价
                _this.end();
                _this.remark = '已经到达最低价,请在活动时间结束前进行购买';
                return;
              }
              console.log('123');
              _this.init();
              console.log('456');
            }
          } });

      } else {//直接进入
        this.bottomPrice = option.bottomPrice; //记录最低价
        this.you = option.you; //记录邮费
        var goodsId = option.goodsId;
        this.goods_id = option.goodsId;
        var PriceInit = JSON.parse(uni.getStorageSync('goodsPrice')); //读取本地存储
        this.headerShow = true;
        this.gameOverShow = false;
        this.goodsInfo.old = PriceInit;
        // this.goodsInfo.old = 10000.15
        console.log(this.goodsInfo.old);
        this.initData(goodsId);

      }

    } catch (e) {

    } // error
    // console.log(endTime, now, this.hour, this.minute, this.second)

  },
  components: {
    share: share },

  onShareAppMessage: function onShareAppMessage(res) {
    // console.log(this.goods)
    var a = {
      k: this.kan_id,
      g: this.child_id,
      y: this.you };

    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: this.goods.title,
      path: '/pages/game/index?scanCode=' + JSON.stringify(a), // 路径，传递参数到指定页面。
      imageUrl: 'http://www.tiktokshopee.com' + this.goods.thumbimg };

  },
  methods: {
    initData: function initData(e) {var _this2 = this;
      this.isFriend = false;
      this.request({
        url: _interface.default.action_kan,
        method: 'POST',
        data: {
          child_id: e },

        success: function success(res) {
          if (res.error_code == 3) {//并无此游戏，开始发起
            _this2.init();
          }
          if (res.error_code == 5) {//已经玩过此游戏,不能重复玩!
            // this.goodsInfo = res.
            // this.send(); //可以转发
            _this2.end();
            _this2.goods = res.goods[0];
            _this2.money = res.on_price;
            _this2.kan_id = res.kan_id;
            _this2.end_time = res.end_time * 1000;
            _this2.child_id = res.child_id;
            _this2.help = res.help;
            _this2.help_Arr();
            _this2.open();
            if (parseFloat(res.on_price) <= parseFloat(_this2.bottomPrice)) {//到达最低价
              _this2.money = _this2.bottomPrice.toFixed(2);
              _this2.remark = '已经到达最低价,请在活动时间结束前进行购买';
            }
          }
        } });

    },
    gameOver: function gameOver(e) {var _this3 = this; //开砍游戏开始
      console.log(e);
      this.request({
        url: _interface.default.set_play,
        method: 'POST',
        data: {
          child_id: this.goods_id,
          help_price: e },

        success: function success(res) {
          console.log(res);
          if (res.error_code == 0) {
            _this3.end();
            _this3.goods = res.guige;
            _this3.kan_id = res.kan_id;
            _this3.child_id = res.child_id;
            _this3.shareShow = true; //显示
            _this3.end_time = res.end_time * 1000;
            _this3.money = res.on_price;
            _this3.open();
          }
        } });

    },
    help_power: function help_power(e) {var _this4 = this; //朋友游戏开始
      this.request({
        url: _interface.default.help_power,
        method: 'POST',
        data: {
          kan_id: this.kan_id,
          help_price: e },

        success: function success(res) {
          console.log(res);
          if (res.error_code == 0) {
            _this4.end();
            _this4.goods = res.goods[0];
            _this4.kan_id = res.kan_id;
            _this4.child_id = res.child_id;
            _this4.shareShow = true; //显示
            _this4.end_time = res.end_time * 1000;
            _this4.money = res.on_price;
            _this4.open();
            if (parseFloat(res.on_price) <= parseFloat(_this4.bottomPrice)) {//到达最低价
              _this4.money = _this4.bottomPrice.toFixed(2);
              _this4.remark = '已经到达最低价,请在活动时间结束前进行购买';
            }
          }
        } });

    },
    help_Arr: function help_Arr() {var _this5 = this; //好友帮砍

      this.help.forEach(function (item) {
        item.help_time = _this5.timestampToTime(item.help_time);
      });

    },
    timestampToTime: function timestampToTime(cjsj) {
      var time = cjsj.toString();
      if (time.length == 10) {
        time = time * 1000;
      }
      var date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    open: function open() {
      // console.log('时间', this.end_time)
      var that = this;
      timer = setInterval(function () {
        var newDate = new Date().getTime();
        var date = new Date(that.end_time) - newDate;
        if (date > 0) {
          var time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hour = parseInt(time % (60 * 60 * 24) / 3600) < 10 ? '0' + parseInt(time % (60 * 60 * 24) / 3600) :
          parseInt(time % (60 * 60 * 24) / 3600);
          that.minute = parseInt(time % (60 * 60 * 24) % 3600 / 60) < 10 ? '0' + parseInt(time % (60 * 60 * 24) %
          3600 / 60) : parseInt(time % (60 * 60 * 24) % 3600 / 60);
          that.second = parseInt(time % (60 * 60 * 24) % 3600 % 60) < 10 ? '0' + parseInt(time % (60 * 60 * 24) %
          3600 % 60) : parseInt(time % (60 * 60 * 24) % 3600 % 60);
          that.ssec = parseInt(date % (60 * 60 * 24) % 3600 / 60) % 10;

        } else {
          //活动已结束，全部设置为'00'
          that.hour = "00",
          that.minute = "00",
          that.second = "00";
        }
      }, 1000);
    },
    countDown: function countDown() {var _this6 = this; //点击开始
      if (this.startSec == 3) {
        console.log('开始');
        if (!this.canClick) return;
        this.canClick = false;
        this.isShow = true;
        var self = this;
        var clock = setInterval(function () {
          self.startSec--;
          if (_this6.startSec < 1) {
            clearInterval(clock);
            _this6.canClick = true;
            _this6.isShow = false;
            _this6.startFont = '点击';
            _this6.start();
          }
        }, 1000);
      } else {
        //点击节流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(function () {
          _this6.minus(); //执行函数
        }, 100);
      }
    },
    //
    init: function init() {//开始
      this.canClick = true;
      this.startFont = '开始';
      this.synth();
      this.shareShow = false;
      this.sec = 9;
      this.goodsInfo.old = +this.goodsInfo.old; //+隐式转换为number , 避免this.goodsInfo.old.toFixed(2)报错（this.goodsInfo.old为字符串）;
      this.money = this.goodsInfo.old.toFixed(2);
      if (parseInt(this.goodsInfo.old) === this.goodsInfo.old) {
        this.money = this.goodsInfo.old.toFixed(2);
      }
      this.single(this.money);
    },
    end: function end() {//玩过

      this.single(this.goodsInfo.old); //分解
      this.synth(); //合成
      this.canClick = false;
      this.startFont = '结束';
      this.synth();
      this.shareShow = true;
      this.sec = 0;
      console.log('结束');
    },
    start: function start() {var _this7 = this;
      var timer = setInterval(function () {
        _this7.sec--;
        if (_this7.sec < 1) {
          clearInterval(timer);
          _this7.canClick = false;
          _this7.startFont = '结束';
          _this7.synth();
          if (_this7.isFriend) {
            console.log('好友'); //好友发起游戏
            var kan_money = parseFloat(_this7.goodsInfo.old - _this7.money).toFixed(2);
            _this7.help_power(kan_money);
          } else {
            console.log('开砍');
            var _kan_money = parseFloat(_this7.goodsInfo.old - _this7.money).toFixed(2);
            _this7.gameOver(_kan_money); //发起人开砍游戏结束
          }
        }
      }, 1000);
    },
    //分解单个金额
    single: function single(money) {

      this.money = money.toString().split(''); //分解

      this.unit = this.money[this.money.length - 1];
      this.decade = this.money[this.money.length - 2];
      this.hunders = this.money[this.money.length - 3]; //分割点

      this.kilbit = this.money[this.money.length - 4];
      this.myriabit = this.money[this.money.length - 5];
      this.debit = this.money[this.money.length - 6];
      this.hunbit = this.money[this.money.length - 7];
      this.ten = this.money[this.money.length - 8];

    },
    //合成金额
    synth: function synth() {

      if (this.ten) {
        this.money = this.ken + this.hunbit + this.debit + this.myriabit + this.kilbit + this.hunders + this.decade + this.
        unit;
      } else if (this.hunbit) {
        this.money = this.hunbit.toString() + this.debit.toString() + this.myriabit.toString() + this.kilbit.toString() +
        this.hunders + this.decade + this.unit;
      } else if (this.debit) {
        this.money = this.debit.toString() + this.myriabit.toString() + this.kilbit.toString() + this.hunders + this.decade +
        this.unit;
      } else if (this.myriabit) {
        this.money = this.myriabit.toString() + this.kilbit.toString() + this.hunders + this.decade + this.unit;
      } else if (this.kilbit) {
        this.money = this.kilbit.toString() + this.hunders + this.decade + this.unit;
      }


    },
    //点击减少
    minus: function minus() {
      if (this.canClick) {
        this.count++;
        if (this.unit > 0) {
          this.unit--;
        } else
        {
          this.unit = 9;
          if (this.decade > 0) {
            this.decade--; //分
          } else
          {
            this.decade = 9;
            if (this.kilbit > 0) {
              this.kilbit--; //个
            } else {
              this.kilbit = 9;
              if (this.myriabit > 0) {
                this.myriabit--; //十
              } else {
                if (this.debit > 0) {//百
                  this.myriabit = 9;
                  this.debit--;
                } else {
                  if (this.hunbit > 0) {//千
                    this.myriabit = 9;
                    this.debit = 9;
                    this.hunbit--;
                    console.log(this.bebit, this.myriabit, this.hunbit);
                  } else {
                    if (this.ten > 0) {
                      this.debit = 9;
                      this.hunbit = 9;
                      this.myriabit = 9;
                      this.ten--;
                    } else {
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 199:
/*!*********************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/game/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=scss& */ 200);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/game/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[193,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L21haW4uanMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy9nYW1lL2luZGV4LnZ1ZT8wZWQ2Iiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvZ2FtZS9pbmRleC52dWU/YzBlNCIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2dhbWUvaW5kZXgudnVlP2E4MDEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy9nYW1lL2luZGV4LnZ1ZT8wMzYxIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvZ2FtZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy9nYW1lL2luZGV4LnZ1ZT80YWUzIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvZ2FtZS9pbmRleC52dWU/NGRhOSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsInRpbWVyIiwiZGF0YSIsImhlYWRlclNob3ciLCJnb29kc19pZCIsImdvb2RzSW5mbyIsIm5hbWUiLCJvbGQiLCJuZXciLCJzb2xkT3V0IiwiaW1nIiwiaWQiLCJtb25leSIsImdvb2RzIiwic2VjIiwic3RhcnRTZWMiLCJpc1Nob3ciLCJjYW5DbGljayIsInN0YXJ0Rm9udCIsImthbl9pZCIsImNoaWxkX2lkIiwidW5pdCIsImRlY2FkZSIsImh1bmRlcnMiLCJraWxiaXQiLCJteXJpYWJpdCIsImRlYml0IiwiaHVuYml0IiwidGVuIiwiY291bnQiLCJzaGFyZVNob3ciLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW5kVGltZSIsInVzZXJJbmZvIiwiZW5kX3RpbWUiLCJnYW1lT3ZlclNob3ciLCJpc0ZyaWVuZCIsImhlbHAiLCJib3R0b21QcmljZSIsInJlbWFyayIsInlvdSIsIm9uTG9hZCIsIm9wdGlvbiIsInVuaSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsInNjYW5Db2RlIiwiY29kZURhdGEiLCJKU09OIiwicGFyc2UiLCJrIiwieSIsInJlcXVlc3QiLCJ1cmwiLCJpbnRlcmZhY2VzIiwiZnJpZW5kX2thbiIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JfY29kZSIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJlbmQiLCJvbl9wcmljZSIsImhlbHBfQXJyIiwib3BlbiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaW5pdCIsImdvb2RzSWQiLCJQcmljZUluaXQiLCJnZXRTdG9yYWdlU3luYyIsImluaXREYXRhIiwiZSIsImNvbXBvbmVudHMiLCJzaGFyZSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiYSIsImciLCJmcm9tIiwicGF0aCIsInN0cmluZ2lmeSIsImltYWdlVXJsIiwidGh1bWJpbWciLCJtZXRob2RzIiwiYWN0aW9uX2thbiIsImdhbWVPdmVyIiwic2V0X3BsYXkiLCJoZWxwX3ByaWNlIiwiZ3VpZ2UiLCJoZWxwX3Bvd2VyIiwiZm9yRWFjaCIsIml0ZW0iLCJoZWxwX3RpbWUiLCJ0aW1lc3RhbXBUb1RpbWUiLCJjanNqIiwidGltZSIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJ0aGF0Iiwic2V0SW50ZXJ2YWwiLCJuZXdEYXRlIiwiZ2V0VGltZSIsInBhcnNlSW50Iiwic3NlYyIsImNvdW50RG93biIsInNlbGYiLCJjbG9jayIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsImNsZWFyVGltZW91dCIsIm1pbnVzIiwic3ludGgiLCJzaW5nbGUiLCJrYW5fbW9uZXkiLCJzcGxpdCIsImtlbiIsImJlYml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUFDSixtQkFBS0EsTUFBTCxHQUFjLENBQWQ7QUFDQSxrQkFBRyxLQUFLQyxRQUFMLEdBQWdCLENBQW5CLEVBQXNCO0FBQ3JCLHFCQUFLQSxRQUFMLEdBRHFCLENBQ0w7QUFDaEIsZUFGRCxNQUVLO0FBQ0osb0JBQUcsS0FBS0MsS0FBTCxHQUFhLENBQWhCLEVBQWtCLENBQUM7QUFDbEIsdUJBQUtELFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBS0MsS0FBTDtBQUNBLGlCQUhELE1BR0s7QUFDSixzQkFBRyxLQUFLQyxNQUFMLEdBQWMsQ0FBakIsRUFBbUIsQ0FBQztBQUNuQix5QkFBS0YsUUFBTCxHQUFnQixDQUFoQjtBQUNBLHlCQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLHlCQUFLQyxNQUFMO0FBQ0FtQywyQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBSzBFLEtBQWpCLEVBQXlCLEtBQUtoSCxRQUE5QixFQUF5QyxLQUFLRSxNQUE5QztBQUNBLG1CQUxELE1BS0s7QUFDSix3QkFBRyxLQUFLQyxHQUFMLEdBQVcsQ0FBZCxFQUFnQjtBQUNmLDJCQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLDJCQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLDJCQUFLRixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsMkJBQUtHLEdBQUw7QUFDQSxxQkFMRCxNQUtLO0FBQ0o7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsS0E1Uk8sRUEzSkssRTs7Ozs7Ozs7Ozs7OztBQ2hFZjtBQUFBO0FBQUE7QUFBQTtBQUFrL0MsQ0FBZ0IsbzhDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdGdELHVDIiwiZmlsZSI6InBhZ2VzL2dhbWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZ2FtZS9pbmRleC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYxYjQ3ZjAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzYxYjQ3ZjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzYxYjQ3ZjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzYxYjQ3ZjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjFiNDdmMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNjFiNDdmMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2dhbWUvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYxYjQ3ZjAmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbnZhciB0aW1lcjtcbmltcG9ydCBzaGFyZSBmcm9tICcuL3NoYXJlLnZ1ZSc7XG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2UuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRoZWFkZXJTaG93OiBmYWxzZSxcblx0XHRcdGdvb2RzX2lkOiAnJywgLy/llYblk4FpZFxuXHRcdFx0Z29vZHNJbmZvOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRvbGQ6ICcnLFxuXHRcdFx0XHRuZXc6ICcnLFxuXHRcdFx0XHRzb2xkT3V0OiAnJyxcblx0XHRcdFx0aW1nOiAnJyxcblx0XHRcdFx0aWQ6ICcnLFxuXHRcdFx0XHRtb25leTogJycsXG5cdFx0XHR9LFxuXHRcdFx0Z29vZHM6IFtdLFxuXHRcdFx0c2VjOiA5LFxuXHRcdFx0c3RhcnRTZWM6IDMsXG5cdFx0XHRpc1Nob3c6IGZhbHNlLFxuXHRcdFx0Y2FuQ2xpY2s6IHRydWUsXG5cdFx0XHRzdGFydEZvbnQ6ICflvIDlp4snLFxuXHRcdFx0bW9uZXk6ICcnLCAvL+S8mOaDoOWQjuS7t+agvFxuXHRcdFx0a2FuX2lkOiAnJywgLy/muLjmiI9pZFxuXHRcdFx0Y2hpbGRfaWQ6ICcnLCAvL+W8gOegjeWVhuWTgWlkXG5cdFx0XHR1bml0OiAnJywgLy/ljYHliIZcblx0XHRcdGRlY2FkZTogJycsIC8v5YiGXG5cdFx0XHRodW5kZXJzOiAnLicsIC8v54K5XG5cdFx0XHRraWxiaXQ6ICcnLCAvL+S4qlxuXHRcdFx0bXlyaWFiaXQ6ICcnLCAvL+WNgVxuXHRcdFx0ZGViaXQ6ICcnLCAvL+eZvlxuXHRcdFx0aHVuYml0OiAnJywgLy/ljYNcblx0XHRcdHRlbjogJycsIC8v5LiHXHRcblx0XHRcdHRpbWVyOiBudWxsLFxuXHRcdFx0Y291bnQ6IDAsIC8v6K6w5b2V54K55Ye75qyh5pWwXHRcdFxuXHRcdFx0c2hhcmVTaG93OiBmYWxzZSxcblx0XHRcdGhvdXI6ICcnLFxuXHRcdFx0bWludXRlOiAnJyxcblx0XHRcdHNlY29uZDogJycsXG5cdFx0XHRlbmRUaW1lOiAnJyxcblx0XHRcdHVzZXJJbmZvOiAnJyxcblx0XHRcdGVuZF90aW1lOiAnJywgLy/mtLvliqjliankvZnml7bpl7Rcblx0XHRcdGdhbWVPdmVyU2hvdzogZmFsc2UsXG5cdFx0XHRpc0ZyaWVuZDogZmFsc2UsIC8v5piv5ZCm5piv5pyL5Y+L5biu56CNXG5cdFx0XHRoZWxwOiBbXSwgLy/mnIvlj4vluK7noI1cblx0XHRcdGJvdHRvbVByaWNlOiAnJywgLy/mnIDkvY7nmoTku7fmoLxcblx0XHRcdHJlbWFyazogJ+azqDog6K+35Zyo5ri45oiP5rS75Yqo5pe26Ze057uT5p2f5LmL5YmN6L+b6KGM6LSt5LmwJyxcblx0XHRcdHlvdTogJycsLy/orrDlvZXpgq7otLlcblx0XHR9XG5cdH0sXG5cdG9uTG9hZChvcHRpb24pIHtcblx0XHR0cnkge1xuXHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdGljb246IFwibG9hZGluZ1wiLFxuXHRcdFx0XHR0aXRsZTogXCLmlbDmja7ojrflj5bkuK1cIixcblx0XHRcdH0pXG5cdFx0XHRpZiAoKG9wdGlvbi5zY2FuQ29kZSkpIHsgLy/miavnoIHov5vlhaVcblx0XHRcdFx0dGhpcy5oZWFkZXJTaG93ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuaXNGcmllbmQgPSB0cnVlO1xuXHRcdFx0XHRsZXQgY29kZURhdGEgPSBKU09OLnBhcnNlKG9wdGlvbi5zY2FuQ29kZSk7XG5cdFx0XHRcdHRoaXMua2FuX2lkID0gY29kZURhdGEuaztcblx0XHRcdFx0dGhpcy5nYW1lT3ZlclNob3cgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy55b3UgPSBjb2RlRGF0YS55O1xuXHRcdFx0XHR0aGlzLnJlcXVlc3QoeyAvL+aJq+eggeWQjuWPkei1t+ivt+axglxuXHRcdFx0XHRcdHVybDogaW50ZXJmYWNlcy5mcmllbmRfa2FuLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGthbl9pZDogY29kZURhdGEua1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0XHRcdGlmIChyZXMuZXJyb3JfY29kZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI5Y6755m75b2VJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9wdWJsaWMvbG9naW4nXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSwgMTIwMClcblxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuZXJyb3JfY29kZSA9PSA0KSB7IC8v5ri45oiP5bey57uP57uT5p2fXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2FtZU92ZXJTaG93ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmVycm9yX2NvZGUgPT0gNSkgeyAvL+W3sue7j+eOqei/h+atpOa4uOaIjyzkuI3og73ph43lpI3njqkhXG5cblx0XHRcdFx0XHRcdFx0dGhpcy5lbmQoKVxuXHRcdFx0XHRcdFx0XHR0aGlzLmdvb2RzID0gcmVzLmdvb2RzWzBdO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vbmV5ID0gcmVzLm9uX3ByaWNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmthbl9pZCA9IHJlcy5rYW5faWQ7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5kX3RpbWUgPSByZXMuZW5kX3RpbWUgKiAxMDAwO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNoaWxkX2lkID0gcmVzLmNoaWxkX2lkO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhlbHAgPSByZXMuaGVscDtcblx0XHRcdFx0XHRcdFx0dGhpcy5oZWxwX0FycigpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9wZW4oKTtcblx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQocmVzLm9uX3ByaWNlKSA8PSBwYXJzZUZsb2F0KHRoaXMuYm90dG9tUHJpY2UpKSB7IC8v5Yiw6L6+5pyA5L2O5Lu3XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vbmV5ID0gdGhpcy5ib3R0b21QcmljZS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtYXJrID0gJ+W3sue7j+WIsOi+vuacgOS9juS7tyzor7flnKjmtLvliqjml7bpl7Tnu5PmnZ/liY3ov5vooYzotK3kubAnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5lcnJvcl9jb2RlID09IDApIHsgLy/ov5jmsqHnjqnov4cg5Y+v5Lul546pXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ29vZHNJbmZvLm9sZCA9IHJlcy5vbl9wcmljZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5lbmRfdGltZSA9IHJlcy5lbmRfdGltZSAqIDEwMDA7XG5cdFx0XHRcdFx0XHRcdHRoaXMub3BlbigpO1xuXHRcdFx0XHRcdFx0XHRpZiAocGFyc2VGbG9hdChyZXMub25fcHJpY2UpIDw9IHBhcnNlRmxvYXQodGhpcy5ib3R0b21QcmljZSkpeyAvL+WIsOi+vuacgOS9juS7t1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZW5kKCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1hcmsgPSAn5bey57uP5Yiw6L6+5pyA5L2O5Lu3LOivt+WcqOa0u+WKqOaXtumXtOe7k+adn+WJjei/m+ihjOi0reS5sCc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCcxMjMnKVxuXHRcdFx0XHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJzQ1NicpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7IC8v55u05o6l6L+b5YWlXG5cdFx0XHRcdHRoaXMuYm90dG9tUHJpY2UgPSBvcHRpb24uYm90dG9tUHJpY2U7IC8v6K6w5b2V5pyA5L2O5Lu3XG5cdFx0XHRcdHRoaXMueW91ID0gb3B0aW9uLnlvdTsgLy/orrDlvZXpgq7otLlcblx0XHRcdFx0bGV0IGdvb2RzSWQgPSBvcHRpb24uZ29vZHNJZDtcblx0XHRcdFx0dGhpcy5nb29kc19pZCA9IG9wdGlvbi5nb29kc0lkO1xuXHRcdFx0XHRjb25zdCBQcmljZUluaXQgPSBKU09OLnBhcnNlKHVuaS5nZXRTdG9yYWdlU3luYygnZ29vZHNQcmljZScpKTsgLy/or7vlj5bmnKzlnLDlrZjlgqhcblx0XHRcdFx0dGhpcy5oZWFkZXJTaG93ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5nYW1lT3ZlclNob3cgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5nb29kc0luZm8ub2xkID0gUHJpY2VJbml0O1xuXHRcdFx0XHQvLyB0aGlzLmdvb2RzSW5mby5vbGQgPSAxMDAwMC4xNVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmdvb2RzSW5mby5vbGQpXG5cdFx0XHRcdHRoaXMuaW5pdERhdGEoZ29vZHNJZCk7XG5cblx0XHRcdH1cblxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIGVycm9yXG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKGVuZFRpbWUsIG5vdywgdGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSwgdGhpcy5zZWNvbmQpXG5cblx0fSxcblx0Y29tcG9uZW50czoge1xuXHRcdHNoYXJlXG5cdH0sXG5cdG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihyZXMpIHtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmdvb2RzKVxuXHRcdHZhciBhID0ge1xuXHRcdFx0azogdGhpcy5rYW5faWQsXG5cdFx0XHRnOiB0aGlzLmNoaWxkX2lkLFxuXHRcdFx0eTogdGhpcy55b3Vcblx0XHR9XG5cdFx0aWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuXHRcdFx0Ly8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0aXRsZTogdGhpcy5nb29kcy50aXRsZSxcblx0XHRcdHBhdGg6ICcvcGFnZXMvZ2FtZS9pbmRleD9zY2FuQ29kZT0nICsgSlNPTi5zdHJpbmdpZnkoYSksIC8vIOi3r+W+hO+8jOS8oOmAkuWPguaVsOWIsOaMh+WumumhtemdouOAglxuXHRcdFx0aW1hZ2VVcmwgOiAnaHR0cDovL3d3dy50aWt0b2tzaG9wZWUuY29tJyArIHRoaXMuZ29vZHMudGh1bWJpbWcsXG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aW5pdERhdGEoZSkge1xuXHRcdFx0dGhpcy5pc0ZyaWVuZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiBpbnRlcmZhY2VzLmFjdGlvbl9rYW4sXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0Y2hpbGRfaWQ6IGVcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmVycm9yX2NvZGUgPT0gMykgeyAvL+W5tuaXoOatpOa4uOaIj++8jOW8gOWni+WPkei1t1xuXHRcdFx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChyZXMuZXJyb3JfY29kZSA9PSA1KSB7IC8v5bey57uP546p6L+H5q2k5ri45oiPLOS4jeiDvemHjeWkjeeOqSFcblx0XHRcdFx0XHRcdC8vIHRoaXMuZ29vZHNJbmZvID0gcmVzLlxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zZW5kKCk7IC8v5Y+v5Lul6L2s5Y+RXG5cdFx0XHRcdFx0XHR0aGlzLmVuZCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5nb29kcyA9IHJlcy5nb29kc1swXTtcblx0XHRcdFx0XHRcdHRoaXMubW9uZXkgPSByZXMub25fcHJpY2U7XG5cdFx0XHRcdFx0XHR0aGlzLmthbl9pZCA9IHJlcy5rYW5faWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZF90aW1lID0gcmVzLmVuZF90aW1lICogMTAwMDtcblx0XHRcdFx0XHRcdHRoaXMuY2hpbGRfaWQgPSByZXMuY2hpbGRfaWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmhlbHAgPSByZXMuaGVscDtcblx0XHRcdFx0XHRcdHRoaXMuaGVscF9BcnIoKTtcblx0XHRcdFx0XHRcdHRoaXMub3BlbigpO1xuXHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQocmVzLm9uX3ByaWNlKSA8PSBwYXJzZUZsb2F0KHRoaXMuYm90dG9tUHJpY2UpKSB7IC8v5Yiw6L6+5pyA5L2O5Lu3XG5cdFx0XHRcdFx0XHRcdHRoaXMubW9uZXkgPSB0aGlzLmJvdHRvbVByaWNlLnRvRml4ZWQoMik7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVtYXJrID0gJ+W3sue7j+WIsOi+vuacgOS9juS7tyzor7flnKjmtLvliqjml7bpl7Tnu5PmnZ/liY3ov5vooYzotK3kubAnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRnYW1lT3ZlcihlKSB7IC8v5byA56CN5ri45oiP5byA5aeLXG5cdFx0XHRjb25zb2xlLmxvZyhlKVxuXHRcdFx0dGhpcy5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiBpbnRlcmZhY2VzLnNldF9wbGF5LFxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGNoaWxkX2lkOiB0aGlzLmdvb2RzX2lkLFxuXHRcdFx0XHRcdGhlbHBfcHJpY2U6IGVcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0aWYgKHJlcy5lcnJvcl9jb2RlID09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5kKClcblx0XHRcdFx0XHRcdHRoaXMuZ29vZHMgPSByZXMuZ3VpZ2U7XG5cdFx0XHRcdFx0XHR0aGlzLmthbl9pZCA9IHJlcy5rYW5faWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmNoaWxkX2lkID0gcmVzLmNoaWxkX2lkO1xuXHRcdFx0XHRcdFx0dGhpcy5zaGFyZVNob3cgPSB0cnVlOyAvL+aYvuekulxuXHRcdFx0XHRcdFx0dGhpcy5lbmRfdGltZSA9IHJlcy5lbmRfdGltZSAqIDEwMDA7XG5cdFx0XHRcdFx0XHR0aGlzLm1vbmV5ID0gcmVzLm9uX3ByaWNlO1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0aGVscF9wb3dlcihlKSB7IC8v5pyL5Y+L5ri45oiP5byA5aeLXG5cdFx0XHR0aGlzLnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IGludGVyZmFjZXMuaGVscF9wb3dlcixcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRrYW5faWQ6IHRoaXMua2FuX2lkLFxuXHRcdFx0XHRcdGhlbHBfcHJpY2U6IGVcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0aWYgKHJlcy5lcnJvcl9jb2RlID09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5kKClcblx0XHRcdFx0XHRcdHRoaXMuZ29vZHMgPSByZXMuZ29vZHNbMF07XG5cdFx0XHRcdFx0XHR0aGlzLmthbl9pZCA9IHJlcy5rYW5faWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmNoaWxkX2lkID0gcmVzLmNoaWxkX2lkO1xuXHRcdFx0XHRcdFx0dGhpcy5zaGFyZVNob3cgPSB0cnVlOyAvL+aYvuekulxuXHRcdFx0XHRcdFx0dGhpcy5lbmRfdGltZSA9IHJlcy5lbmRfdGltZSAqIDEwMDA7XG5cdFx0XHRcdFx0XHR0aGlzLm1vbmV5ID0gcmVzLm9uX3ByaWNlO1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0XHRcdFx0XHRpZiAocGFyc2VGbG9hdChyZXMub25fcHJpY2UpIDw9IHBhcnNlRmxvYXQodGhpcy5ib3R0b21QcmljZSkpIHsgLy/liLDovr7mnIDkvY7ku7dcblx0XHRcdFx0XHRcdFx0dGhpcy5tb25leSA9IHRoaXMuYm90dG9tUHJpY2UudG9GaXhlZCgyKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZW1hcmsgPSAn5bey57uP5Yiw6L6+5pyA5L2O5Lu3LOivt+WcqOa0u+WKqOaXtumXtOe7k+adn+WJjei/m+ihjOi0reS5sCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGhlbHBfQXJyKCkgeyAvL+WlveWPi+W4ruegjVxuXG5cdFx0XHR0aGlzLmhlbHAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpdGVtLmhlbHBfdGltZSA9IHRoaXMudGltZXN0YW1wVG9UaW1lKGl0ZW0uaGVscF90aW1lKVxuXHRcdFx0fSlcblxuXHRcdH0sXG5cdFx0dGltZXN0YW1wVG9UaW1lKGNqc2opIHtcblx0XHRcdGxldCB0aW1lID0gY2pzai50b1N0cmluZygpXG5cdFx0XHRpZiAodGltZS5sZW5ndGggPT0gMTApIHtcblx0XHRcdFx0dGltZSA9IHRpbWUgKiAxMDAwXG5cdFx0XHR9XG5cdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpIC8v5pe26Ze05oiz5Li6MTDkvY3pnIAqMTAwMO+8jOaXtumXtOaIs+S4ujEz5L2N55qE6K+d5LiN6ZyA5LmYMTAwMFxuXHRcdFx0dmFyIFkgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLSdcblx0XHRcdHZhciBNID0gKGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/ICcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSA6IGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy0nXG5cdFx0XHR2YXIgRCA9IGRhdGUuZ2V0RGF0ZSgpICsgJyAnXG5cdFx0XHR2YXIgaCA9IGRhdGUuZ2V0SG91cnMoKSArICc6J1xuXHRcdFx0dmFyIG0gPSBkYXRlLmdldE1pbnV0ZXMoKSArICc6J1xuXHRcdFx0dmFyIHMgPSBkYXRlLmdldFNlY29uZHMoKVxuXHRcdFx0cmV0dXJuIFkgKyBNICsgRCArIGggKyBtICsgc1xuXHRcdH0sXG5cdFx0b3BlbigpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCfml7bpl7QnLCB0aGlzLmVuZF90aW1lKVxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG5ld0RhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGF0LmVuZF90aW1lKSAtIG5ld0RhdGU7XG5cdFx0XHRcdGlmIChkYXRlID4gMCkge1xuXHRcdFx0XHRcdGxldCB0aW1lID0gZGF0ZSAvIDEwMDA7XG5cdFx0XHRcdFx0Ly8g6I635Y+W5pe244CB5YiG44CB56eSLOavq+enklxuXHRcdFx0XHRcdHRoYXQuaG91ciA9IHBhcnNlSW50KCh0aW1lICUgKDYwICogNjAgKiAyNCkpIC8gMzYwMCkgPCAxMCA/ICgnMCcgKyBwYXJzZUludCgodGltZSAlICg2MCAqIDYwICogMjQpKSAvIDM2MDApKSA6XG5cdFx0XHRcdFx0XHRwYXJzZUludCgodGltZSAlICg2MCAqIDYwICogMjQpKSAvIDM2MDApXG5cdFx0XHRcdFx0dGhhdC5taW51dGUgPSBwYXJzZUludCgoKHRpbWUgJSAoNjAgKiA2MCAqIDI0KSkgJSAzNjAwKSAvIDYwKSA8IDEwID8gKCcwJyArIHBhcnNlSW50KCgodGltZSAlICg2MCAqIDYwICogMjQpKSAlXG5cdFx0XHRcdFx0XHQzNjAwKSAvIDYwKSkgOiBwYXJzZUludCgoKHRpbWUgJSAoNjAgKiA2MCAqIDI0KSkgJSAzNjAwKSAvIDYwKTtcblx0XHRcdFx0XHR0aGF0LnNlY29uZCA9IHBhcnNlSW50KCgodGltZSAlICg2MCAqIDYwICogMjQpKSAlIDM2MDApICUgNjApIDwgMTAgPyAoJzAnICsgcGFyc2VJbnQoKCh0aW1lICUgKDYwICogNjAgKiAyNCkpICVcblx0XHRcdFx0XHRcdDM2MDApICUgNjApKSA6IHBhcnNlSW50KCgodGltZSAlICg2MCAqIDYwICogMjQpKSAlIDM2MDApICUgNjApO1xuXHRcdFx0XHRcdHRoYXQuc3NlYyA9IHBhcnNlSW50KCgoZGF0ZSAlICg2MCAqIDYwICogMjQpKSAlIDM2MDApIC8gNjApICUgMTA7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvL+a0u+WKqOW3sue7k+adn++8jOWFqOmDqOiuvue9ruS4uicwMCdcblx0XHRcdFx0XHR0aGF0LmhvdXIgPSBcIjAwXCIsXG5cdFx0XHRcdFx0XHR0aGF0Lm1pbnV0ZSA9IFwiMDBcIixcblx0XHRcdFx0XHRcdHRoYXQuc2Vjb25kID0gXCIwMFwiXG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApXG5cdFx0fSxcblx0XHRjb3VudERvd24oKSB7IC8v54K55Ye75byA5aeLXG5cdFx0XHRpZiAodGhpcy5zdGFydFNlYyA9PSAzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCflvIDlp4snKVxuXHRcdFx0XHRpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcblx0XHRcdFx0dGhpcy5jYW5DbGljayA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmlzU2hvdyA9IHRydWU7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0bGV0IGNsb2NrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuc3RhcnRTZWMtLTtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGFydFNlYyA8IDEpIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoY2xvY2spXG5cdFx0XHRcdFx0XHR0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXJ0Rm9udCA9ICfngrnlh7snO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFydCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMTAwMClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8v54K55Ye76IqC5rWBXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubWludXMoKTsgLy/miafooYzlh73mlbBcblx0XHRcdFx0fSwgMTAwKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9cblx0XHRpbml0KCkgeyAvL+W8gOWni1xuXHRcdFx0dGhpcy5jYW5DbGljayA9IHRydWU7XG5cdFx0XHR0aGlzLnN0YXJ0Rm9udCA9ICflvIDlp4snO1xuXHRcdFx0dGhpcy5zeW50aCgpO1xuXHRcdFx0dGhpcy5zaGFyZVNob3cgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2VjID0gOTtcblx0XHRcdHRoaXMuZ29vZHNJbmZvLm9sZCA9ICt0aGlzLmdvb2RzSW5mby5vbGQ7IC8vK+makOW8j+i9rOaNouS4um51bWJlciAsIOmBv+WFjXRoaXMuZ29vZHNJbmZvLm9sZC50b0ZpeGVkKDIp5oql6ZSZ77yIdGhpcy5nb29kc0luZm8ub2xk5Li65a2X56ym5Liy77yJO1xuXHRcdFx0dGhpcy5tb25leSA9IHRoaXMuZ29vZHNJbmZvLm9sZC50b0ZpeGVkKDIpO1xuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMuZ29vZHNJbmZvLm9sZCkgPT09IHRoaXMuZ29vZHNJbmZvLm9sZCkge1xuXHRcdFx0XHR0aGlzLm1vbmV5ID0gdGhpcy5nb29kc0luZm8ub2xkLnRvRml4ZWQoMilcblx0XHRcdH1cblx0XHRcdHRoaXMuc2luZ2xlKHRoaXMubW9uZXkpO1xuXHRcdH0sXG5cdFx0ZW5kKCkgeyAvL+eOqei/h1xuXG5cdFx0XHR0aGlzLnNpbmdsZSh0aGlzLmdvb2RzSW5mby5vbGQpIC8v5YiG6KejXG5cdFx0XHR0aGlzLnN5bnRoKCk7IC8v5ZCI5oiQXG5cdFx0XHR0aGlzLmNhbkNsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnN0YXJ0Rm9udCA9ICfnu5PmnZ8nO1xuXHRcdFx0dGhpcy5zeW50aCgpO1xuXHRcdFx0dGhpcy5zaGFyZVNob3cgPSB0cnVlO1xuXHRcdFx0dGhpcy5zZWMgPSAwO1xuXHRcdFx0Y29uc29sZS5sb2coJ+e7k+adnycpXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zZWMtLTtcblx0XHRcdFx0aWYgKHRoaXMuc2VjIDwgMSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xuXHRcdFx0XHRcdHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnN0YXJ0Rm9udCA9ICfnu5PmnZ8nO1xuXHRcdFx0XHRcdHRoaXMuc3ludGgoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0ZyaWVuZCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WlveWPiycpIC8v5aW95Y+L5Y+R6LW35ri45oiPXG5cdFx0XHRcdFx0XHRsZXQga2FuX21vbmV5ID0gcGFyc2VGbG9hdCh0aGlzLmdvb2RzSW5mby5vbGQgLSB0aGlzLm1vbmV5KS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRcdFx0dGhpcy5oZWxwX3Bvd2VyKGthbl9tb25leSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflvIDnoI0nKVxuXHRcdFx0XHRcdFx0bGV0IGthbl9tb25leSA9IHBhcnNlRmxvYXQodGhpcy5nb29kc0luZm8ub2xkIC0gdGhpcy5tb25leSkudG9GaXhlZCgyKTtcblx0XHRcdFx0XHRcdHRoaXMuZ2FtZU92ZXIoa2FuX21vbmV5KTsgLy/lj5HotbfkurrlvIDnoI3muLjmiI/nu5PmnZ9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApXG5cdFx0fSxcblx0XHQvL+WIhuino+WNleS4qumHkeminVxuXHRcdHNpbmdsZShtb25leSkge1xuXG5cdFx0XHR0aGlzLm1vbmV5ID0gbW9uZXkudG9TdHJpbmcoKS5zcGxpdCgnJykgLy/liIbop6NcblxuXHRcdFx0dGhpcy51bml0ID0gdGhpcy5tb25leVt0aGlzLm1vbmV5Lmxlbmd0aCAtIDFdO1xuXHRcdFx0dGhpcy5kZWNhZGUgPSB0aGlzLm1vbmV5W3RoaXMubW9uZXkubGVuZ3RoIC0gMl07XG5cdFx0XHR0aGlzLmh1bmRlcnMgPSB0aGlzLm1vbmV5W3RoaXMubW9uZXkubGVuZ3RoIC0gM107IC8v5YiG5Ymy54K5XG5cblx0XHRcdHRoaXMua2lsYml0ID0gdGhpcy5tb25leVt0aGlzLm1vbmV5Lmxlbmd0aCAtIDRdO1xuXHRcdFx0dGhpcy5teXJpYWJpdCA9IHRoaXMubW9uZXlbdGhpcy5tb25leS5sZW5ndGggLSA1XTtcblx0XHRcdHRoaXMuZGViaXQgPSB0aGlzLm1vbmV5W3RoaXMubW9uZXkubGVuZ3RoIC0gNl07XG5cdFx0XHR0aGlzLmh1bmJpdCA9IHRoaXMubW9uZXlbdGhpcy5tb25leS5sZW5ndGggLSA3XTtcblx0XHRcdHRoaXMudGVuID0gdGhpcy5tb25leVt0aGlzLm1vbmV5Lmxlbmd0aCAtIDhdO1xuXG5cdFx0fSxcblx0XHQvL+WQiOaIkOmHkeminVxuXHRcdHN5bnRoKCkge1xuXG5cdFx0XHRpZiAodGhpcy50ZW4pIHtcblx0XHRcdFx0dGhpcy5tb25leSA9IHRoaXMua2VuICsgdGhpcy5odW5iaXQgKyB0aGlzLmRlYml0ICsgdGhpcy5teXJpYWJpdCArIHRoaXMua2lsYml0ICsgdGhpcy5odW5kZXJzICsgdGhpcy5kZWNhZGUgKyB0aGlzXG5cdFx0XHRcdFx0LnVuaXQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaHVuYml0KSB7XG5cdFx0XHRcdHRoaXMubW9uZXkgPSB0aGlzLmh1bmJpdC50b1N0cmluZygpICsgdGhpcy5kZWJpdC50b1N0cmluZygpICsgdGhpcy5teXJpYWJpdC50b1N0cmluZygpICsgdGhpcy5raWxiaXQudG9TdHJpbmcoKSArXG5cdFx0XHRcdFx0dGhpcy5odW5kZXJzICsgdGhpcy5kZWNhZGUgKyB0aGlzLnVuaXQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGViaXQpIHtcblx0XHRcdFx0dGhpcy5tb25leSA9IHRoaXMuZGViaXQudG9TdHJpbmcoKSArIHRoaXMubXlyaWFiaXQudG9TdHJpbmcoKSArIHRoaXMua2lsYml0LnRvU3RyaW5nKCkgKyB0aGlzLmh1bmRlcnMgKyB0aGlzLmRlY2FkZSArXG5cdFx0XHRcdFx0dGhpcy51bml0O1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm15cmlhYml0KSB7XG5cdFx0XHRcdHRoaXMubW9uZXkgPSB0aGlzLm15cmlhYml0LnRvU3RyaW5nKCkgKyB0aGlzLmtpbGJpdC50b1N0cmluZygpICsgdGhpcy5odW5kZXJzICsgdGhpcy5kZWNhZGUgKyB0aGlzLnVuaXQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMua2lsYml0KSB7XG5cdFx0XHRcdHRoaXMubW9uZXkgPSB0aGlzLmtpbGJpdC50b1N0cmluZygpICsgdGhpcy5odW5kZXJzICsgdGhpcy5kZWNhZGUgKyB0aGlzLnVuaXQ7XG5cdFx0XHR9XG5cblxuXHRcdH0sXG5cdFx0Ly/ngrnlh7vlh4/lsJFcblx0XHRtaW51cygpIHtcblx0XHRcdGlmICh0aGlzLmNhbkNsaWNrKSB7XG5cdFx0XHRcdHRoaXMuY291bnQrKztcblx0XHRcdFx0aWYgKHRoaXMudW5pdCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLnVuaXQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdHRoaXMudW5pdCA9IDk7XG5cdFx0XHRcdFx0aWYodGhpcy5kZWNhZGUgPiAwKXtcblx0XHRcdFx0XHRcdCB0aGlzLmRlY2FkZS0tOyAvL+WIhlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5kZWNhZGUgPSA5O1xuXHRcdFx0XHRcdFx0aWYodGhpcy5raWxiaXQgPiAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5raWxiaXQtLTsgLy/kuKpcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR0aGlzLmtpbGJpdCA9IDk7XG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMubXlyaWFiaXQgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5teXJpYWJpdC0tOy8v5Y2BXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGViaXQgPiAwKXsvL+eZvlxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5teXJpYWJpdCA9IDk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlYml0LS07XG5cdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLmh1bmJpdCA+IDApey8v5Y2DXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubXlyaWFiaXQgPSA5O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlYml0ID0gOTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5odW5iaXQtLTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5iZWJpdCAsIHRoaXMubXlyaWFiaXQgLCB0aGlzLmh1bmJpdClcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLnRlbiA+IDApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZGViaXQgPSA5O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaHVuYml0ID0gOTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm15cmlhYml0ID0gOTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRlbi0tO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHR9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9