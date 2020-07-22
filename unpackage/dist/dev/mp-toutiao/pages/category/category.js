(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/category/category"],{

/***/ 65:
/*!*************************************************************************!*\
  !*** D:/uni-app/eryue26/main.js?{"page":"pages%2Fcategory%2Fcategory"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _category = _interopRequireDefault(__webpack_require__(/*! ./pages/category/category.vue */ 66));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_category.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 66:
/*!******************************************************!*\
  !*** D:/uni-app/eryue26/pages/category/category.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=de64fba8& */ 67);
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ 69);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.vue?vue&type=style&index=0&lang=scss& */ 71);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uni-app/eryue26/pages/category/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/*!*************************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/category/category.vue?vue&type=template&id=de64fba8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./category.vue?vue&type=template&id=de64fba8& */ 68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_template_id_de64fba8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 68:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/category/category.vue?vue&type=template&id=de64fba8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 69:
/*!*******************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/category/category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./category.vue?vue&type=script&lang=js& */ 70);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/category/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 28));












































var _interface = _interopRequireDefault(__webpack_require__(/*! ../../utils/interface.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var pageHead = function pageHead() {return __webpack_require__.e(/*! import() | pages/home/base/pageHeader */ "pages/home/base/pageHeader").then(__webpack_require__.bind(null, /*! ../home/base/pageHeader.vue */ 278));};var _default =




{
  data: function data() {
    return {
      categoryList: [], //获取用户分类
      categoryListCur: [], //选中类目
      addCategory: [], //新更新的数据
      showCategoryIndex: 0, //初始显示页面
      currentPage: 2, //第一页
      pagesize: 7, //每次加载7条
      atIndex: 0,
      footer_Text: '暂无数据' };

  },
  components: {
    pageHead: pageHead },

  methods: {
    initData: function () {var _initData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {var _this = this;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                this.categoryListCur = []; //切换类目初始化
                console.log(this.categoryListCur);
                this.request({
                  url: _interface.default.get_bigclass, //获取用户分类
                  method: "POST",
                  success: function success(res) {
                    _this.categoryList = res.data;
                  } });

                this.request({
                  url: _interface.default.get_bc_goods, //获取分类商品 e分类id
                  method: "POST",
                  data: {
                    b_class: e },

                  success: function success(res) {
                    console.log(res, '6666');
                    if (res.error_code == 0) {

                      _this.goodsList = res.data;
                      _this.footer_Text = '数据加载中...';
                      // this.get_goodsCur();//下拉刷新
                      _this.categoryListCur = _this.goodsList.slice(0, _this.pagesize); //初始化显示数据
                      if (_this.categoryListCur.length < 7) {
                        _this.footer_Text = '到底了';
                      }
                    } else {
                      _this.footer_Text = '暂无数据';
                    }
                  } });case 4:case "end":return _context.stop();}}}, _callee, this);}));function initData(_x) {return _initData.apply(this, arguments);}return initData;}(),
























    get_goodsCur: function get_goodsCur() {var _this2 = this;
      var data = this.goodsList;
      this.addCategory = data.slice((this.currentPage - 1) * this.pagesize, this.currentPage *
      this.pagesize);
      if (this.addCategory.length > 0) {//如果数据更新
        uni.hideLoading();
        this.addCategory.forEach(function (item) {
          _this2.categoryListCur.push(item);
        });
        if (this.addCategory.length < 7) {

          // this.addCategory.forEach(item => {
          // 	this.categoryListCur.push(item)
          // })
          this.footer_Text = '到底了';

        }
      } else {
        uni.hideLoading();
        this.footer_Text = '到底了';
      }
    },
    showCategory: function showCategory(item) {//切换类目
      //分类切换显示
      this.showCategoryIndex = item.id - 1;
      // onReachBottom(index)
      uni.showLoading({
        title: '加载中...' });

      this.initData(item.id); //发起对应类目请求
    },
    //商品跳转
    toGoods: function toGoods(e) {
      uni.navigateTo({
        url: "../good/goods?goods_id=" + e.id });

    } },

  onLoad: function onLoad(option) {

    this.initData(1); //默认获取第一类目















  },
  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
    console.log('123');
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom: function onReachBottom() {
    uni.showLoading({
      title: '加载中...' });

    this.get_goodsCur();
    this.currentPage++;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 71:
/*!****************************************************************************************!*\
  !*** D:/uni-app/eryue26/pages/category/category.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.4.2.20191115.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./category.vue?vue&type=style&index=0&lang=scss& */ 72);
/* harmony import */ var _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_category_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/eryue26/pages/category/category.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[65,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L21haW4uanMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS52dWU/NWJkNyIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnZ1ZT8zM2E5Iiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkudnVlP2ZkNWEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaS1hcHAvZXJ5dWUyNi9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS52dWU/NTQwYyIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnZ1ZT84ZWE4Iiwid2VicGFjazovLy9EOi91bmktYXBwL2VyeXVlMjYvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkudnVlPzhlOGEiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJkYXRhIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcnlMaXN0Q3VyIiwiYWRkQ2F0ZWdvcnkiLCJzaG93Q2F0ZWdvcnlJbmRleCIsImN1cnJlbnRQYWdlIiwicGFnZXNpemUiLCJhdEluZGV4IiwiZm9vdGVyX1RleHQiLCJjb21wb25lbnRzIiwicGFnZUhlYWQiLCJtZXRob2RzIiwiaW5pdERhdGEiLCJlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJpbnRlcmZhY2VzIiwiZ2V0X2JpZ2NsYXNzIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImdldF9iY19nb29kcyIsImJfY2xhc3MiLCJlcnJvcl9jb2RlIiwiZ29vZHNMaXN0Iiwic2xpY2UiLCJsZW5ndGgiLCJnZXRfZ29vZHNDdXIiLCJ1bmkiLCJoaWRlTG9hZGluZyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInNob3dDYXRlZ29yeSIsImlkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInRvR29vZHMiLCJuYXZpZ2F0ZVRvIiwib25Mb2FkIiwib3B0aW9uIiwib25QdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9uUmVhY2hCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1COztBQUVuQjtBQUNBLHFHO0FBQ0FBLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFIO0FBQ3JIO0FBQzREO0FBQ0w7QUFDYzs7O0FBR3JFO0FBQytNO0FBQy9NLGdCQUFnQix5TkFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQWkwQixDQUFnQiw4MEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2Q3IxQixpRzs7Ozs7QUFLZTtBQUNkQyxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxrQkFBWSxFQUFFLEVBRFIsRUFDWTtBQUNsQkMscUJBQWUsRUFBRSxFQUZYLEVBRWU7QUFDckJDLGlCQUFXLEVBQUUsRUFIUCxFQUdXO0FBQ2pCQyx1QkFBaUIsRUFBRSxDQUpiLEVBSWdCO0FBQ3RCQyxpQkFBVyxFQUFFLENBTFAsRUFLVTtBQUNoQkMsY0FBUSxFQUFFLENBTkosRUFNTztBQUNiQyxhQUFPLEVBQUUsQ0FQSDtBQVFOQyxpQkFBVyxFQUFHLE1BUlIsRUFBUDs7QUFVQSxHQVphO0FBYWRDLFlBQVUsRUFBRTtBQUNYQyxZQUFRLEVBQVJBLFFBRFcsRUFiRTs7QUFnQmRDLFNBQU8sRUFBRTtBQUNGQyxZQURFLDBHQUNPQyxDQURQO0FBRVAscUJBQUtYLGVBQUwsR0FBdUIsRUFBdkIsQ0FGTyxDQUVvQjtBQUMzQlksdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtiLGVBQWpCO0FBQ0EscUJBQUtjLE9BQUwsQ0FBYTtBQUNaQyxxQkFBRyxFQUFFQyxtQkFBV0MsWUFESixFQUNrQjtBQUM5QkMsd0JBQU0sRUFBRSxNQUZJO0FBR1pDLHlCQUFPLEVBQUcsaUJBQUNDLEdBQUQsRUFBUztBQUNsQix5QkFBSSxDQUFDckIsWUFBTCxHQUFvQnFCLEdBQUcsQ0FBQ3RCLElBQXhCO0FBQ0EsbUJBTFcsRUFBYjs7QUFPQSxxQkFBS2dCLE9BQUwsQ0FBYTtBQUNaQyxxQkFBRyxFQUFFQyxtQkFBV0ssWUFESixFQUNrQjtBQUM5Qkgsd0JBQU0sRUFBRSxNQUZJO0FBR1pwQixzQkFBSSxFQUFFO0FBQ0x3QiwyQkFBTyxFQUFFWCxDQURKLEVBSE07O0FBTVpRLHlCQUFPLEVBQUcsaUJBQUNDLEdBQUQsRUFBUztBQUNsQlIsMkJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxHQUFaLEVBQWtCLE1BQWxCO0FBQ0Esd0JBQUlBLEdBQUcsQ0FBQ0csVUFBSixJQUFrQixDQUF0QixFQUF5Qjs7QUFFeEIsMkJBQUksQ0FBQ0MsU0FBTCxHQUFpQkosR0FBRyxDQUFDdEIsSUFBckI7QUFDRywyQkFBSSxDQUFDUSxXQUFMLEdBQW1CLFVBQW5CO0FBQ0g7QUFDQSwyQkFBSSxDQUFDTixlQUFMLEdBQXVCLEtBQUksQ0FBQ3dCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixDQUFyQixFQUF5QixLQUFJLENBQUNyQixRQUE5QixDQUF2QixDQUx3QixDQUt1QztBQUMvRCwwQkFBRyxLQUFJLENBQUNKLGVBQUwsQ0FBcUIwQixNQUFyQixHQUE4QixDQUFqQyxFQUFtQztBQUNsQyw2QkFBSSxDQUFDcEIsV0FBTCxHQUFtQixLQUFuQjtBQUNBO0FBQ0QscUJBVEQsTUFTSztBQUNKLDJCQUFJLENBQUNBLFdBQUwsR0FBbUIsTUFBbkI7QUFDQTtBQUNELG1CQXBCVyxFQUFiLEVBWE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RFJxQixnQkF4RFEsMEJBd0RNO0FBQ2IsVUFBSTdCLElBQUksR0FBRyxLQUFLMEIsU0FBaEI7QUFDQSxXQUFLdkIsV0FBTCxHQUFtQkgsSUFBSSxDQUFDMkIsS0FBTCxDQUFXLENBQUMsS0FBS3RCLFdBQUwsR0FBbUIsQ0FBcEIsSUFBeUIsS0FBS0MsUUFBekMsRUFBbUQsS0FBS0QsV0FBTDtBQUNyRSxXQUFLQyxRQURhLENBQW5CO0FBRUEsVUFBSSxLQUFLSCxXQUFMLENBQWlCeUIsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsQ0FBRTtBQUNsQ0UsV0FBRyxDQUFDQyxXQUFKO0FBQ0EsYUFBSzVCLFdBQUwsQ0FBaUI2QixPQUFqQixDQUF5QixVQUFBQyxJQUFJLEVBQUk7QUFDaEMsZ0JBQUksQ0FBQy9CLGVBQUwsQ0FBcUJnQyxJQUFyQixDQUEwQkQsSUFBMUI7QUFDQSxTQUZEO0FBR0EsWUFBRyxLQUFLOUIsV0FBTCxDQUFpQnlCLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxlQUFLcEIsV0FBTCxHQUFtQixLQUFuQjs7QUFFQTtBQUNELE9BYkQsTUFhTTtBQUNMc0IsV0FBRyxDQUFDQyxXQUFKO0FBQ0EsYUFBS3ZCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQTtBQUNELEtBN0VPO0FBOEVSMkIsZ0JBOUVRLHdCQThFS0YsSUE5RUwsRUE4RVcsQ0FBRTtBQUNwQjtBQUNBLFdBQUs3QixpQkFBTCxHQUF5QjZCLElBQUksQ0FBQ0csRUFBTCxHQUFVLENBQW5DO0FBQ0E7QUFDQU4sU0FBRyxDQUFDTyxXQUFKLENBQWdCO0FBQ2ZDLGFBQUssRUFBRSxRQURRLEVBQWhCOztBQUdBLFdBQUsxQixRQUFMLENBQWNxQixJQUFJLENBQUNHLEVBQW5CLEVBUGtCLENBT007QUFDeEIsS0F0Rk87QUF1RlI7QUFDQUcsV0F4RlEsbUJBd0ZBMUIsQ0F4RkEsRUF3Rkc7QUFDVmlCLFNBQUcsQ0FBQ1UsVUFBSixDQUFlO0FBQ2R2QixXQUFHLEVBQUUsNEJBQTRCSixDQUFDLENBQUN1QixFQURyQixFQUFmOztBQUdBLEtBNUZPLEVBaEJLOztBQThHZEssUUE5R2Msa0JBOEdQQyxNQTlHTyxFQThHQzs7QUFFZCxTQUFLOUIsUUFBTCxDQUFjLENBQWQsRUFGYyxDQUVJOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsQixHQWhJYTtBQWlJZDtBQUNBK0IsbUJBbEljLCtCQWtJTTtBQUNuQkMsY0FBVSxDQUFDLFlBQU07QUFDaEJkLFNBQUcsQ0FBQ2UsbUJBQUo7QUFDQSxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EvQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsR0F2SWE7QUF3SWQ7QUFDQStCLGVBekljLDJCQXlJRTtBQUNmaEIsT0FBRyxDQUFDTyxXQUFKLENBQWdCO0FBQ2ZDLFdBQUssRUFBRSxRQURRLEVBQWhCOztBQUdBLFNBQUtULFlBQUw7QUFDQSxTQUFLeEIsV0FBTDtBQUNBLEdBL0lhLEU7Ozs7Ozs7Ozs7Ozs7QUNsRGY7QUFBQTtBQUFBO0FBQUE7QUFBcS9DLENBQWdCLHU4Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXpnRCx1QyIsImZpbGUiOiJwYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGU2NGZiYTgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGU2NGZiYTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGU2NGZiYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGU2NGZiYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZTY0ZmJhOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZTY0ZmJhOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pLWFwcC9lcnl1ZTI2L3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlNjRmYmE4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBcdGludGVyZmFjZXMgZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJmYWNlLmpzJ1xuaW1wb3J0IHBhZ2VIZWFkIGZyb20gJy4uL2hvbWUvYmFzZS9wYWdlSGVhZGVyLnZ1ZSdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2F0ZWdvcnlMaXN0OiBbXSwgLy/ojrflj5bnlKjmiLfliIbnsbtcblx0XHRcdGNhdGVnb3J5TGlzdEN1cjogW10sIC8v6YCJ5Lit57G755uuXG5cdFx0XHRhZGRDYXRlZ29yeTogW10sIC8v5paw5pu05paw55qE5pWw5o2uXG5cdFx0XHRzaG93Q2F0ZWdvcnlJbmRleDogMCwgLy/liJ3lp4vmmL7npLrpobXpnaJcblx0XHRcdGN1cnJlbnRQYWdlOiAyLCAvL+esrOS4gOmhtVxuXHRcdFx0cGFnZXNpemU6IDcsIC8v5q+P5qyh5Yqg6L29N+adoVxuXHRcdFx0YXRJbmRleDogMCxcblx0XHRcdGZvb3Rlcl9UZXh0IDogJ+aaguaXoOaVsOaNridcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRwYWdlSGVhZFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXN5bmMgaW5pdERhdGEoZSkge1xuXHRcdFx0dGhpcy5jYXRlZ29yeUxpc3RDdXIgPSBbXTsgLy/liIfmjaLnsbvnm67liJ3lp4vljJZcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnlMaXN0Q3VyKVxuXHRcdFx0dGhpcy5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiBpbnRlcmZhY2VzLmdldF9iaWdjbGFzcywgLy/ojrflj5bnlKjmiLfliIbnsbtcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNhdGVnb3J5TGlzdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IGludGVyZmFjZXMuZ2V0X2JjX2dvb2RzLCAvL+iOt+WPluWIhuexu+WVhuWTgSBl5YiG57G7aWRcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGJfY2xhc3M6IGVcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMgLCAnNjY2NicpXG5cdFx0XHRcdFx0aWYgKHJlcy5lcnJvcl9jb2RlID09IDApIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dGhpcy5nb29kc0xpc3QgPSByZXMuZGF0YTtcblx0XHRcdFx0XHQgICAgdGhpcy5mb290ZXJfVGV4dCA9ICfmlbDmja7liqDovb3kuK0uLi4nO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcy5nZXRfZ29vZHNDdXIoKTsvL+S4i+aLieWIt+aWsFxuXHRcdFx0XHRcdFx0dGhpcy5jYXRlZ29yeUxpc3RDdXIgPSB0aGlzLmdvb2RzTGlzdC5zbGljZSgwICwgdGhpcy5wYWdlc2l6ZSkgLy/liJ3lp4vljJbmmL7npLrmlbDmja5cblx0XHRcdFx0XHRcdGlmKHRoaXMuY2F0ZWdvcnlMaXN0Q3VyLmxlbmd0aCA8IDcpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZvb3Rlcl9UZXh0ID0gJ+WIsOW6leS6hic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmZvb3Rlcl9UZXh0ID0gJ+aaguaXoOaVsOaNridcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcdH0sXG5cdFx0Z2V0X2dvb2RzQ3VyKCl7XG5cdFx0XHRsZXQgZGF0YSA9IHRoaXMuZ29vZHNMaXN0O1xuXHRcdFx0dGhpcy5hZGRDYXRlZ29yeSA9IGRhdGEuc2xpY2UoKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnZXNpemUsIHRoaXMuY3VycmVudFBhZ2UgKlxuXHRcdFx0XHR0aGlzLnBhZ2VzaXplKVxuXHRcdFx0aWYgKHRoaXMuYWRkQ2F0ZWdvcnkubGVuZ3RoID4gMCkgeyAvL+WmguaenOaVsOaNruabtOaWsFxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0dGhpcy5hZGRDYXRlZ29yeS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2F0ZWdvcnlMaXN0Q3VyLnB1c2goaXRlbSlcblx0XHRcdFx0fSlcblx0XHRcdFx0aWYodGhpcy5hZGRDYXRlZ29yeS5sZW5ndGggPCA3KXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyB0aGlzLmFkZENhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0Ly8gXHR0aGlzLmNhdGVnb3J5TGlzdEN1ci5wdXNoKGl0ZW0pXG5cdFx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0XHR0aGlzLmZvb3Rlcl9UZXh0ID0gJ+WIsOW6leS6hic7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZXtcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHRoaXMuZm9vdGVyX1RleHQgPSAn5Yiw5bqV5LqGJztcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNob3dDYXRlZ29yeShpdGVtKSB7IC8v5YiH5o2i57G755uuXG5cdFx0XHQvL+WIhuexu+WIh+aNouaYvuekulxuXHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlJbmRleCA9IGl0ZW0uaWQgLSAxO1xuXHRcdFx0Ly8gb25SZWFjaEJvdHRvbShpbmRleClcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitLi4uJ1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmluaXREYXRhKGl0ZW0uaWQpOyAvL+WPkei1t+WvueW6lOexu+ebruivt+axglxuXHRcdH0sXG5cdFx0Ly/llYblk4Hot7Povaxcblx0XHR0b0dvb2RzKGUpIHtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiBcIi4uL2dvb2QvZ29vZHM/Z29vZHNfaWQ9XCIgKyBlLmlkXG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9LFxuXHRvbkxvYWQob3B0aW9uKSB7XG5cdFx0XG5cdFx0dGhpcy5pbml0RGF0YSgxKTsgLy/pu5jorqTojrflj5bnrKzkuIDnsbvnm65cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0fSxcblx0Ly/kuIvmi4nliLfmlrDvvIzpnIDopoHoh6rlt7HlnKhwYWdlLmpzb27mlofku7bkuK3phY3nva7lvIDlkK/pobXpnaLkuIvmi4nliLfmlrAgXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjogdHJ1ZVxuXHRvblB1bGxEb3duUmVmcmVzaCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG5cdFx0fSwgMTAwMCk7XG5cdFx0Y29uc29sZS5sb2coJzEyMycpXG5cdH0sXG5cdC8v5LiK5ouJ5Yqg6L2977yM6ZyA6KaB6Ieq5bex5ZyocGFnZS5qc29u5paH5Lu25Lit6YWN572uXCJvblJlYWNoQm90dG9tRGlzdGFuY2VcIlxuXHRvblJlYWNoQm90dG9tKCkge1xuXHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJ+WKoOi9veS4rS4uLidcblx0XHR9KTtcblx0XHR0aGlzLmdldF9nb29kc0N1cigpO1xuXHRcdHRoaXMuY3VycmVudFBhZ2UrK1xuXHR9LFxuXHRcbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYLjIuNC4yLjIwMTkxMTE1LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC4yLjQuMi4yMDE5MTExNS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclguMi40LjIuMjAxOTExMTUuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=