(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/base/gameOrder"],{

/***/ 89:
/*!*****************************************************************************!*\
  !*** D:/uni-app/eryue26/main.js?{"page":"pages%2Fuser%2Fbase%2FgameOrder"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _gameOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/user/base/gameOrder.vue */ 90));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_gameOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 90:
/*!********************************************************!*\
  !*** D:/uni-app/eryue26/pages/user/base/gameOrder.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOrder.vue?vue&type=template&id=04068002& */ 91);
/* harmony import */ var _gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameOrder.vue?vue&type=script&lang=js& */ 93);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOrder.vue?vue&type=style&index=0&lang=scss& */ 95);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uni-app/eryue26/pages/user/base/gameOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/*!***************************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=template&id=04068002& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameOrder.vue?vue&type=template&id=04068002& */ 92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_template_id_04068002___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 92:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=template&id=04068002& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 93:
/*!*********************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameOrder.vue?vue&type=script&lang=js& */ 94);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 28));






































var _interface = _interopRequireDefault(__webpack_require__(/*! ../../../utils/interface.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var wechat = function wechat() {return __webpack_require__.e(/*! import() | components/wechat */ "components/wechat").then(__webpack_require__.bind(null, /*! ../../../components/wechat.vue */ 313));};var _default =






{
  data: function data() {
    return {
      goodsInfo: [],
      goodsInfoCur: [],
      money: '',
      wechatShow: false, //显示分享
      loadingText: "正在加载....",
      loading: true,
      goods: false,
      kanId: '',
      showGameOver: '' };


  },
  components: {
    wechat: wechat },

  onShareAppMessage: function onShareAppMessage(res) {
    console.log(this.goodsInfoCur);
    var a = {
      k: this.goodsInfoCur.id,
      g: this.goodsInfoCur.child_id };

    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: this.goodsInfoCur.title,
      path: '/pages/game/index?scanCode=' + JSON.stringify(a), // 路径，传递参数到指定页面。
      imageUrl: 'http://www.tiktokshopee.com' + this.goods.thumbimg };

  },
  methods: {
    //立即分享
    share: function share(item) {
      // this.wechatShow = true;
      this.goodsInfoCur = item;
      this.money = item.on_price;
      this.kanId = item.id;
      this.child = item.child_id;
      var a = {
        k: this.kanId,
        g: this.child,
        y: item.you };

      uni.navigateTo({
        url: '/pages/game/index?scanCode=' + JSON.stringify(a) // 路径，传递参数到指定页面。
      });
    },
    toOrder: function toOrder(item) {//去下单
      console.log(item);
      item.game = '拍卖';
      item.num = 1;
      item.kan_id = item.id;
      uni.navigateTo({
        url: '../../order/base/createOrder?goodsInfo=' + JSON.stringify(item) });

    },
    delGame: function delGame(e) {var _this = this; //删除商品
      this.request({
        url: _interface.default.del_kan,
        method: "POST",
        data: {
          kan_id: e },

        success: function success(res) {
          if (res.error_code == 0) {
            uni.showToast({
              title: '删除成功',
              icon: 'none' });

            var self = _this;
            setTimeout(function () {
              self.initData();
            }, 500);
          }
        } });


















    },
    initData: function () {var _initData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this2 = this;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                this.request({
                  url: _interface.default.get_kan, //获取用户开砍游戏记录
                  method: "POST",
                  success: function success(res) {
                    console.log(res);
                    if (res.error_code === 0) {
                      res.data.forEach(function (item) {
                        item.end_time = _this2.timestampToTime(item.end_time);
                      });
                      _this2.goodsInfo = res.data;
                      _this2.loading = false;
                      if (_this2.goodsInfo.length < 1) {
                        _this2.loading = true;
                        _this2.loadingText = '暂无数据';
                      }
                    }
                  } });case 1:case "end":return _context.stop();}}}, _callee, this);}));function initData() {return _initData.apply(this, arguments);}return initData;}(),

















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
    } },

  onLoad: function onLoad() {
    this.initData();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 95:
/*!******************************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameOrder.vue?vue&type=style&index=0&lang=scss& */ 96);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 96:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/user/base/gameOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[89,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L21haW4uanMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy91c2VyL2Jhc2UvZ2FtZU9yZGVyLnZ1ZT81OTg1Iiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvdXNlci9iYXNlL2dhbWVPcmRlci52dWU/ODc5YiIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL3VzZXIvYmFzZS9nYW1lT3JkZXIudnVlPzYxNTIiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy91c2VyL2Jhc2UvZ2FtZU9yZGVyLnZ1ZT83YjAyIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvdXNlci9iYXNlL2dhbWVPcmRlci52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy91c2VyL2Jhc2UvZ2FtZU9yZGVyLnZ1ZT9kNDQyIiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvdXNlci9iYXNlL2dhbWVPcmRlci52dWU/YTljYSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImRhdGEiLCJnb29kc0luZm8iLCJnb29kc0luZm9DdXIiLCJtb25leSIsIndlY2hhdFNob3ciLCJsb2FkaW5nVGV4dCIsImxvYWRpbmciLCJnb29kcyIsImthbklkIiwic2hvd0dhbWVPdmVyIiwiY29tcG9uZW50cyIsIndlY2hhdCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImEiLCJrIiwiaWQiLCJnIiwiY2hpbGRfaWQiLCJmcm9tIiwidGl0bGUiLCJwYXRoIiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlVXJsIiwidGh1bWJpbWciLCJtZXRob2RzIiwic2hhcmUiLCJpdGVtIiwib25fcHJpY2UiLCJjaGlsZCIsInkiLCJ5b3UiLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9PcmRlciIsImdhbWUiLCJudW0iLCJrYW5faWQiLCJkZWxHYW1lIiwiZSIsInJlcXVlc3QiLCJpbnRlcmZhY2VzIiwiZGVsX2thbiIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJlcnJvcl9jb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsInNlbGYiLCJzZXRUaW1lb3V0IiwiaW5pdERhdGEiLCJnZXRfa2FuIiwiZm9yRWFjaCIsImVuZF90aW1lIiwidGltZXN0YW1wVG9UaW1lIiwibGVuZ3RoIiwiY2pzaiIsInRpbWUiLCJ0b1N0cmluZyIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSx3RztBQUNBQSxVQUFVLENBQUNDLGtCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzSDtBQUN0SDtBQUM2RDtBQUNMO0FBQ2M7OztBQUd0RTtBQUNrTjtBQUNsTixnQkFBZ0IseU5BQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFpMUIsQ0FBZ0IsKzBCQUFHLEVBQUMsQzs7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QUFDdEJFLFlBQUksR0FBR0EsSUFBSSxHQUFHLElBQWQ7QUFDQTtBQUNELFVBQUlFLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNILElBQVQsQ0FBWCxDQUxxQixDQUtLO0FBQzFCLFVBQUlJLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxXQUFMLEtBQXFCLEdBQTdCO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQUNKLElBQUksQ0FBQ0ssUUFBTCxLQUFrQixDQUFsQixHQUFzQixFQUF0QixHQUEyQixPQUFPTCxJQUFJLENBQUNLLFFBQUwsS0FBa0IsQ0FBekIsQ0FBM0IsR0FBeURMLElBQUksQ0FBQ0ssUUFBTCxLQUFrQixDQUE1RSxJQUFpRixHQUF6RjtBQUNBLFVBQUlDLENBQUMsR0FBR04sSUFBSSxDQUFDTyxPQUFMLEtBQWlCLEdBQXpCO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHUixJQUFJLENBQUNTLFFBQUwsS0FBa0IsR0FBMUI7QUFDQSxVQUFJQyxDQUFDLEdBQUdWLElBQUksQ0FBQ1csVUFBTCxLQUFvQixHQUE1QjtBQUNBLFVBQUlDLENBQUMsR0FBR1osSUFBSSxDQUFDYSxVQUFMLEVBQVI7QUFDQSxhQUFPWCxDQUFDLEdBQUdFLENBQUosR0FBUUUsQ0FBUixHQUFZRSxDQUFaLEdBQWdCRSxDQUFoQixHQUFvQkUsQ0FBM0I7QUFDQSxLQWhITyxFQWpDSzs7QUFtSmRFLFFBbkpjLG9CQW1KTDtBQUNSLFNBQUt2QixRQUFMO0FBQ0EsR0FySmEsRTs7Ozs7Ozs7Ozs7OztBQzlDZjtBQUFBO0FBQUE7QUFBQTtBQUFpaEQsQ0FBZ0IsdzhDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcmlELHVDIiwiZmlsZSI6InBhZ2VzL3VzZXIvYmFzZS9nYW1lT3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdXNlci9iYXNlL2dhbWVPcmRlci52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9nYW1lT3JkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0MDY4MDAyJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2FtZU9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ2FtZU9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9nYW1lT3JkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA0MDY4MDAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0MDY4MDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0MDY4MDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9nYW1lT3JkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0MDY4MDAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA0MDY4MDAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmktYXBwL2VyeXVlMjYvcGFnZXMvdXNlci9iYXNlL2dhbWVPcmRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dhbWVPcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQwNjgwMDImXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ2FtZU9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ2FtZU9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB3ZWNoYXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy93ZWNoYXQudnVlJ1xuaW1wb3J0IGludGVyZmFjZXMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaW50ZXJmYWNlLmpzJ1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRnb29kc0luZm86IFtdLFxuXHRcdFx0Z29vZHNJbmZvQ3VyOiBbXSxcblx0XHRcdG1vbmV5OiAnJyxcblx0XHRcdHdlY2hhdFNob3c6IGZhbHNlLCAvL+aYvuekuuWIhuS6q1xuXHRcdFx0bG9hZGluZ1RleHQ6IFwi5q2j5Zyo5Yqg6L29Li4uLlwiLFxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGdvb2RzOiBmYWxzZSxcblx0XHRcdGthbklkOiAnJyxcblx0XHRcdHNob3dHYW1lT3ZlcjogJydcblxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50czoge1xuXHRcdHdlY2hhdFxuXHR9LFxuXHRvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24ocmVzKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5nb29kc0luZm9DdXIpXG5cdFx0dmFyIGEgPSB7XG5cdFx0XHRrOiB0aGlzLmdvb2RzSW5mb0N1ci5pZCxcblx0XHRcdGc6IHRoaXMuZ29vZHNJbmZvQ3VyLmNoaWxkX2lkXG5cdFx0fVxuXHRcdGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6IHRoaXMuZ29vZHNJbmZvQ3VyLnRpdGxlLFxuXHRcdFx0cGF0aDogJy9wYWdlcy9nYW1lL2luZGV4P3NjYW5Db2RlPScgKyBKU09OLnN0cmluZ2lmeShhKSwgLy8g6Lev5b6E77yM5Lyg6YCS5Y+C5pWw5Yiw5oyH5a6a6aG16Z2i44CCXG5cdFx0XHRpbWFnZVVybDogJ2h0dHA6Ly93d3cudGlrdG9rc2hvcGVlLmNvbScgKyB0aGlzLmdvb2RzLnRodW1iaW1nLFxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8v56uL5Y2z5YiG5LqrXG5cdFx0c2hhcmUoaXRlbSkge1xuXHRcdFx0Ly8gdGhpcy53ZWNoYXRTaG93ID0gdHJ1ZTtcblx0XHRcdHRoaXMuZ29vZHNJbmZvQ3VyID0gaXRlbTtcblx0XHRcdHRoaXMubW9uZXkgPSBpdGVtLm9uX3ByaWNlO1xuXHRcdFx0dGhpcy5rYW5JZCA9IGl0ZW0uaWQ7XG5cdFx0XHR0aGlzLmNoaWxkID0gaXRlbS5jaGlsZF9pZDtcblx0XHRcdGxldCBhID0ge1xuXHRcdFx0XHRrOiB0aGlzLmthbklkLFxuXHRcdFx0XHRnOiB0aGlzLmNoaWxkLFxuXHRcdFx0XHR5OiBpdGVtLnlvdSxcblx0XHRcdH1cblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2dhbWUvaW5kZXg/c2NhbkNvZGU9JyArIEpTT04uc3RyaW5naWZ5KGEpLCAvLyDot6/lvoTvvIzkvKDpgJLlj4LmlbDliLDmjIflrprpobXpnaLjgIJcblx0XHRcdH0pXG5cdFx0fSxcblx0XHR0b09yZGVyKGl0ZW0pIHsgLy/ljrvkuIvljZVcblx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pXG5cdFx0XHRpdGVtLmdhbWUgPSAn5ouN5Y2WJztcblx0XHRcdGl0ZW0ubnVtID0gMTtcblx0XHRcdGl0ZW0ua2FuX2lkID0gaXRlbS5pZDtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiAnLi4vLi4vb3JkZXIvYmFzZS9jcmVhdGVPcmRlcj9nb29kc0luZm89JyArIEpTT04uc3RyaW5naWZ5KGl0ZW0pXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0ZGVsR2FtZShlKSB7IC8v5Yig6Zmk5ZWG5ZOBXG5cdFx0XHR0aGlzLnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IGludGVyZmFjZXMuZGVsX2thbixcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGthbl9pZDogZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiAoKHJlcykgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuZXJyb3JfY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfliKDpmaTmiJDlip8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5pbml0RGF0YSgpXG5cdFx0XHRcdFx0XHR9LCA1MDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0fSxcblx0XHRhc3luYyBpbml0RGF0YSgpIHtcblx0XHRcdHRoaXMucmVxdWVzdCh7XG5cdFx0XHRcdHVybDogaW50ZXJmYWNlcy5nZXRfa2FuLCAvL+iOt+WPlueUqOaIt+W8gOegjea4uOaIj+iusOW9lVxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRzdWNjZXNzOiAoKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0XHRpZiAocmVzLmVycm9yX2NvZGUgPT09IDApIHtcblx0XHRcdFx0XHRcdHJlcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lbmRfdGltZSA9IHRoaXMudGltZXN0YW1wVG9UaW1lKGl0ZW0uZW5kX3RpbWUpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0dGhpcy5nb29kc0luZm8gPSByZXMuZGF0YTtcblx0XHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ29vZHNJbmZvLmxlbmd0aCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2FkaW5nVGV4dCA9ICfmmoLml6DmlbDmja4nXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0fSxcblx0XHR0aW1lc3RhbXBUb1RpbWUoY2pzaikge1xuXHRcdFx0bGV0IHRpbWUgPSBjanNqLnRvU3RyaW5nKClcblx0XHRcdGlmICh0aW1lLmxlbmd0aCA9PSAxMCkge1xuXHRcdFx0XHR0aW1lID0gdGltZSAqIDEwMDBcblx0XHRcdH1cblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUodGltZSkgLy/ml7bpl7TmiLPkuLoxMOS9jemcgCoxMDAw77yM5pe26Ze05oiz5Li6MTPkvY3nmoTor53kuI3pnIDkuZgxMDAwXG5cdFx0XHR2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJ1xuXHRcdFx0dmFyIE0gPSAoZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwID8gJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLSdcblx0XHRcdHZhciBEID0gZGF0ZS5nZXREYXRlKCkgKyAnICdcblx0XHRcdHZhciBoID0gZGF0ZS5nZXRIb3VycygpICsgJzonXG5cdFx0XHR2YXIgbSA9IGRhdGUuZ2V0TWludXRlcygpICsgJzonXG5cdFx0XHR2YXIgcyA9IGRhdGUuZ2V0U2Vjb25kcygpXG5cdFx0XHRyZXR1cm4gWSArIE0gKyBEICsgaCArIG0gKyBzXG5cdFx0fSxcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuaW5pdERhdGEoKTtcblx0fVxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9nYW1lT3JkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dhbWVPcmRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9