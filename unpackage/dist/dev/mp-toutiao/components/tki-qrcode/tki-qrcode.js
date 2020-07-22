(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-qrcode/tki-qrcode"],{

/***/ 376:
/*!***************************************************************!*\
  !*** D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tki-qrcode.vue?vue&type=template&id=11a38604&xlang=wxml&minapp=mpvue& */ 377);
/* harmony import */ var _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tki-qrcode.vue?vue&type=script&lang=js& */ 379);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tki-qrcode.vue?vue&type=style&index=0&lang=css& */ 382);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 377:
/*!**********************************************************************************************************************!*\
  !*** D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=11a38604&xlang=wxml&minapp=mpvue& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=template&id=11a38604&xlang=wxml&minapp=mpvue& */ 378);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_template_id_11a38604_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 378:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=11a38604&xlang=wxml&minapp=mpvue& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 379:
/*!****************************************************************************************!*\
  !*** D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=script&lang=js& */ 380);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 380:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _qrcode = _interopRequireDefault(__webpack_require__(/*! ./qrcode.js */ 381));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var qrcode;var _default = { name: "tki-qrcode", props: { cid: { type: String, default: 'tki-qrcode-canvas' }, size: { type: Number, default: 200 },
    unit: {
      type: String,
      default: 'upx' },

    show: {
      type: Boolean,
      default: true },

    val: {
      type: String,
      default: '' },

    background: {
      type: String,
      default: '#ffffff' },

    foreground: {
      type: String,
      default: '#000000' },

    pdground: {
      type: String,
      default: '#000000' },

    icon: {
      type: String,
      default: '' },

    iconSize: {
      type: Number,
      default: 40 },

    lv: {
      type: Number,
      default: 3 },

    onval: {
      type: Boolean,
      default: false },

    loadMake: {
      type: Boolean,
      default: false },

    usingComponents: {
      type: Boolean,
      default: true },

    showLoading: {
      type: Boolean,
      default: true },

    loadingText: {
      type: String,
      default: '二维码生成中' } },


  data: function data() {
    return {
      result: '' };

  },
  methods: {
    _makeCode: function _makeCode() {
      var that = this;
      if (!this._empty(this.val)) {
        qrcode = new _qrcode.default({
          context: that, // 上下文环境
          canvasId: that.cid, // canvas-id
          usingComponents: that.usingComponents, // 是否是自定义组件
          showLoading: that.showLoading, // 是否显示loading
          loadingText: that.loadingText, // loading文字
          text: that.val, // 生成内容
          size: that.cpSize, // 二维码大小
          background: that.background, // 背景色
          foreground: that.foreground, // 前景色
          pdground: that.pdground, // 定位角点颜色
          correctLevel: that.lv, // 容错级别
          image: that.icon, // 二维码图标
          imageSize: that.iconSize, // 二维码图标大小
          cbResult: function cbResult(res) {// 生成二维码的回调
            that._result(res);
          } });

      } else {
        uni.showToast({
          title: '二维码内容不能为空',
          icon: 'none',
          duration: 2000 });

      }
    },
    _clearCode: function _clearCode() {
      this._result('');
      qrcode.clear();
    },
    _saveCode: function _saveCode() {
      var that = this;
      if (this.result != "") {
        uni.saveImageToPhotosAlbum({
          filePath: that.result,
          success: function success() {
            uni.showToast({
              title: '二维码保存成功',
              icon: 'success',
              duration: 2000 });

          } });

      }
    },
    _result: function _result(res) {
      this.result = res;
      this.$emit('result', res);
    },
    _empty: function _empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    } },

  watch: {
    size: function size(n, o) {var _this = this;
      if (n != o && !this._empty(n)) {
        this.cSize = n;
        if (!this._empty(this.val)) {
          setTimeout(function () {
            _this._makeCode();
          }, 100);
        }
      }
    },
    val: function val(n, o) {var _this2 = this;
      if (this.onval) {
        if (n != o && !this._empty(n)) {
          setTimeout(function () {
            _this2._makeCode();
          }, 0);
        }
      }
    } },

  computed: {
    cpSize: function cpSize() {
      if (this.unit == "upx") {
        return uni.upx2px(this.size);
      } else {
        return this.size;
      }
    } },

  mounted: function mounted() {var _this3 = this;
    if (this.loadMake) {
      if (!this._empty(this.val)) {
        setTimeout(function () {
          _this3._makeCode();
        }, 0);
      }
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 382:
/*!************************************************************************************************!*\
  !*** D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=style&index=0&lang=css& */ 383);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_qrcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 383:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/components/tki-qrcode/tki-qrcode.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L2NvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZT9jNGRiIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvY29tcG9uZW50cy90a2ktcXJjb2RlL3RraS1xcmNvZGUudnVlPzA1YjAiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9jb21wb25lbnRzL3RraS1xcmNvZGUvdGtpLXFyY29kZS52dWU/ZmM4MyIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L2NvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZT8zMGEyIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvY29tcG9uZW50cy90a2ktcXJjb2RlL3RraS1xcmNvZGUudnVlIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvY29tcG9uZW50cy90a2ktcXJjb2RlL3RraS1xcmNvZGUudnVlP2Y4NWEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9jb21wb25lbnRzL3RraS1xcmNvZGUvdGtpLXFyY29kZS52dWU/ZDIzMyJdLCJuYW1lcyI6WyJxcmNvZGUiLCJuYW1lIiwicHJvcHMiLCJjaWQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInNpemUiLCJOdW1iZXIiLCJ1bml0Iiwic2hvdyIsIkJvb2xlYW4iLCJ2YWwiLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsInBkZ3JvdW5kIiwiaWNvbiIsImljb25TaXplIiwibHYiLCJvbnZhbCIsImxvYWRNYWtlIiwidXNpbmdDb21wb25lbnRzIiwic2hvd0xvYWRpbmciLCJsb2FkaW5nVGV4dCIsImRhdGEiLCJyZXN1bHQiLCJtZXRob2RzIiwiX21ha2VDb2RlIiwidGhhdCIsIl9lbXB0eSIsIlFSQ29kZSIsImNvbnRleHQiLCJjYW52YXNJZCIsInRleHQiLCJjcFNpemUiLCJjb3JyZWN0TGV2ZWwiLCJpbWFnZSIsImltYWdlU2l6ZSIsImNiUmVzdWx0IiwicmVzIiwiX3Jlc3VsdCIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiZHVyYXRpb24iLCJfY2xlYXJDb2RlIiwiY2xlYXIiLCJfc2F2ZUNvZGUiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJzdWNjZXNzIiwiJGVtaXQiLCJ2IiwidHAiLCJydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXRjaCIsIm4iLCJvIiwiY1NpemUiLCJzZXRUaW1lb3V0IiwiY29tcHV0ZWQiLCJ1cHgycHgiLCJtb3VudGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStJO0FBQy9JO0FBQzhEO0FBQ0w7QUFDYTs7O0FBR3RFO0FBQytNO0FBQy9NLGdCQUFnQix5TkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSw2R0FBTTtBQUNSLEVBQUUsc0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQW0wQixDQUFnQixnMUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYXYxQixrRiw4RkFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxNQUFKLEMsZUFDZSxFQUNkQyxJQUFJLEVBQUUsWUFEUSxFQUVkQyxLQUFLLEVBQUUsRUFDTkMsR0FBRyxFQUFFLEVBQ0pD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O0FBQ3BCLFVBQUksS0FBS3hDLEtBQVQsRUFBZ0I7QUFDZixZQUFJdUMsQ0FBQyxJQUFJQyxDQUFMLElBQVUsQ0FBQyxLQUFLOUIsTUFBTCxDQUFZNkIsQ0FBWixDQUFmLEVBQStCO0FBQzlCRyxvQkFBVSxDQUFDLFlBQU07QUFDaEIsa0JBQUksQ0FBQ2xDLFNBQUw7QUFDQSxXQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0E7QUFDRDtBQUNELEtBbkJLLEVBL0lPOztBQW9LZG1DLFVBQVEsRUFBRTtBQUNUNUIsVUFEUyxvQkFDQTtBQUNSLFVBQUcsS0FBS3pCLElBQUwsSUFBYSxLQUFoQixFQUFzQjtBQUNyQixlQUFPZ0MsR0FBRyxDQUFDc0IsTUFBSixDQUFXLEtBQUt4RCxJQUFoQixDQUFQO0FBQ0EsT0FGRCxNQUVLO0FBQ0osZUFBTyxLQUFLQSxJQUFaO0FBQ0E7QUFDRCxLQVBRLEVBcEtJOztBQTZLZHlELFNBQU8sRUFBRSxtQkFBWTtBQUNwQixRQUFJLEtBQUs1QyxRQUFULEVBQW1CO0FBQ2xCLFVBQUksQ0FBQyxLQUFLUyxNQUFMLENBQVksS0FBS2pCLEdBQWpCLENBQUwsRUFBNEI7QUFDM0JpRCxrQkFBVSxDQUFDLFlBQU07QUFDaEIsZ0JBQUksQ0FBQ2xDLFNBQUw7QUFDQSxTQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0E7QUFDRDtBQUNELEdBckxhLEU7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUFBO0FBQUE7QUFBQTtBQUEycUMsQ0FBZ0IsMHBDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBL3JDLHVDIiwiZmlsZSI6ImNvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90a2ktcXJjb2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWEzODYwNCZ4bGFuZz13eG1sJm1pbmFwcD1tcHZ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90a2ktcXJjb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90a2ktcXJjb2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExYTM4NjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExYTM4NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExYTM4NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90a2ktcXJjb2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWEzODYwNCZ4bGFuZz13eG1sJm1pbmFwcD1tcHZ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMWEzODYwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pLWFwcC9lcnl1ZTI2L2NvbXBvbmVudHMvdGtpLXFyY29kZS90a2ktcXJjb2RlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGtpLXFyY29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTFhMzg2MDQmeGxhbmc9d3htbCZtaW5hcHA9bXB2dWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGtpLXFyY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgUVJDb2RlIGZyb20gXCIuL3FyY29kZS5qc1wiXG5sZXQgcXJjb2RlXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6IFwidGtpLXFyY29kZVwiLFxuXHRwcm9wczoge1xuXHRcdGNpZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ3RraS1xcmNvZGUtY2FudmFzJ1xuXHRcdH0sXG5cdFx0c2l6ZToge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogMjAwXG5cdFx0fSxcblx0XHR1bml0OiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAndXB4J1xuXHRcdH0sXG5cdFx0c2hvdzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdHZhbDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcjZmZmZmZmJ1xuXHRcdH0sXG5cdFx0Zm9yZWdyb3VuZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJyMwMDAwMDAnXG5cdFx0fSxcblx0XHRwZGdyb3VuZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJyMwMDAwMDAnXG5cdFx0fSxcblx0XHRpY29uOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0aWNvblNpemU6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdGRlZmF1bHQ6IDQwXG5cdFx0fSxcblx0XHRsdjoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogM1xuXHRcdH0sXG5cdFx0b252YWw6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH0sXG5cdFx0bG9hZE1ha2U6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH0sXG5cdFx0dXNpbmdDb21wb25lbnRzOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0c2hvd0xvYWRpbmc6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fSxcblx0XHRsb2FkaW5nVGV4dDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ+S6jOe7tOeggeeUn+aIkOS4rSdcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN1bHQ6ICcnLFxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdF9tYWtlQ29kZSgpIHtcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFx0aWYgKCF0aGlzLl9lbXB0eSh0aGlzLnZhbCkpIHtcblx0XHRcdFx0cXJjb2RlID0gbmV3IFFSQ29kZSh7XG5cdFx0XHRcdFx0Y29udGV4dDogdGhhdCwgLy8g5LiK5LiL5paH546v5aKDXG5cdFx0XHRcdFx0Y2FudmFzSWQ6dGhhdC5jaWQsIC8vIGNhbnZhcy1pZFxuXHRcdFx0XHRcdHVzaW5nQ29tcG9uZW50czogdGhhdC51c2luZ0NvbXBvbmVudHMsIC8vIOaYr+WQpuaYr+iHquWumuS5iee7hOS7tlxuXHRcdFx0XHRcdHNob3dMb2FkaW5nOiB0aGF0LnNob3dMb2FkaW5nLCAvLyDmmK/lkKbmmL7npLpsb2FkaW5nXG5cdFx0XHRcdFx0bG9hZGluZ1RleHQ6IHRoYXQubG9hZGluZ1RleHQsIC8vIGxvYWRpbmfmloflrZdcblx0XHRcdFx0XHR0ZXh0OiB0aGF0LnZhbCwgLy8g55Sf5oiQ5YaF5a65XG5cdFx0XHRcdFx0c2l6ZTogdGhhdC5jcFNpemUsIC8vIOS6jOe7tOeggeWkp+Wwj1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRoYXQuYmFja2dyb3VuZCwgLy8g6IOM5pmv6ImyXG5cdFx0XHRcdFx0Zm9yZWdyb3VuZDogdGhhdC5mb3JlZ3JvdW5kLCAvLyDliY3mma/oibJcblx0XHRcdFx0XHRwZGdyb3VuZDogdGhhdC5wZGdyb3VuZCwgLy8g5a6a5L2N6KeS54K56aKc6ImyXG5cdFx0XHRcdFx0Y29ycmVjdExldmVsOiB0aGF0Lmx2LCAvLyDlrrnplJnnuqfliKtcblx0XHRcdFx0XHRpbWFnZTogdGhhdC5pY29uLCAvLyDkuoznu7TnoIHlm77moIdcblx0XHRcdFx0XHRpbWFnZVNpemU6IHRoYXQuaWNvblNpemUsLy8g5LqM57u056CB5Zu+5qCH5aSn5bCPXG5cdFx0XHRcdFx0Y2JSZXN1bHQ6IGZ1bmN0aW9uIChyZXMpIHsgLy8g55Sf5oiQ5LqM57u056CB55qE5Zue6LCDXG5cdFx0XHRcdFx0XHR0aGF0Ll9yZXN1bHQocmVzKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfkuoznu7TnoIHlhoXlrrnkuI3og73kuLrnqbonLFxuXHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9jbGVhckNvZGUoKSB7XG5cdFx0XHR0aGlzLl9yZXN1bHQoJycpXG5cdFx0XHRxcmNvZGUuY2xlYXIoKVxuXHRcdH0sXG5cdFx0X3NhdmVDb2RlKCkge1xuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKHRoaXMucmVzdWx0ICE9IFwiXCIpIHtcblx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuXHRcdFx0XHRcdGZpbGVQYXRoOiB0aGF0LnJlc3VsdCxcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuoznu7TnoIHkv53lrZjmiJDlip8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3Jlc3VsdChyZXMpIHtcblx0XHRcdHRoaXMucmVzdWx0ID0gcmVzO1xuXHRcdFx0dGhpcy4kZW1pdCgncmVzdWx0JywgcmVzKVxuXHRcdH0sXG5cdFx0X2VtcHR5KHYpIHtcblx0XHRcdGxldCB0cCA9IHR5cGVvZiB2LFxuXHRcdFx0XHRydCA9IGZhbHNlO1xuXHRcdFx0aWYgKHRwID09IFwibnVtYmVyXCIgJiYgU3RyaW5nKHYpID09IFwiXCIpIHtcblx0XHRcdFx0cnQgPSB0cnVlXG5cdFx0XHR9IGVsc2UgaWYgKHRwID09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0cnQgPSB0cnVlXG5cdFx0XHR9IGVsc2UgaWYgKHRwID09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0aWYgKEpTT04uc3RyaW5naWZ5KHYpID09IFwie31cIiB8fCBKU09OLnN0cmluZ2lmeSh2KSA9PSBcIltdXCIgfHwgdiA9PSBudWxsKSBydCA9IHRydWVcblx0XHRcdH0gZWxzZSBpZiAodHAgPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodiA9PSBcIlwiIHx8IHYgPT0gXCJ1bmRlZmluZWRcIiB8fCB2ID09IFwibnVsbFwiIHx8IHYgPT0gXCJ7fVwiIHx8IHYgPT0gXCJbXVwiKSBydCA9IHRydWVcblx0XHRcdH0gZWxzZSBpZiAodHAgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHJ0ID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdHJldHVybiBydFxuXHRcdH1cblx0fSxcblx0d2F0Y2g6IHtcblx0XHRzaXplOiBmdW5jdGlvbiAobiwgbykge1xuXHRcdFx0aWYgKG4gIT0gbyAmJiAhdGhpcy5fZW1wdHkobikpIHtcblx0XHRcdFx0dGhpcy5jU2l6ZSA9IG5cblx0XHRcdFx0aWYgKCF0aGlzLl9lbXB0eSh0aGlzLnZhbCkpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX21ha2VDb2RlKClcblx0XHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR2YWw6IGZ1bmN0aW9uIChuLCBvKSB7XG5cdFx0XHRpZiAodGhpcy5vbnZhbCkge1xuXHRcdFx0XHRpZiAobiAhPSBvICYmICF0aGlzLl9lbXB0eShuKSkge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fbWFrZUNvZGUoKVxuXHRcdFx0XHRcdH0sIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGNwU2l6ZSgpIHtcblx0XHRcdGlmKHRoaXMudW5pdCA9PSBcInVweFwiKXtcblx0XHRcdFx0cmV0dXJuIHVuaS51cHgycHgodGhpcy5zaXplKVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpemVcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy5sb2FkTWFrZSkge1xuXHRcdFx0aWYgKCF0aGlzLl9lbXB0eSh0aGlzLnZhbCkpIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbWFrZUNvZGUoKVxuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGtpLXFyY29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3RraS1xcmNvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-qrcode/tki-qrcode-create-component',
    {
        'components/tki-qrcode/tki-qrcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(376))
        })
    },
    [['components/tki-qrcode/tki-qrcode-create-component']]
]);
