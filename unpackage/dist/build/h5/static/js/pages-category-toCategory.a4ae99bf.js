(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-toCategory"],{"00b0":function(t,e,n){"use strict";n.r(e);var i=n("3179"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"17e8":function(t,e,n){var i=n("b55f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0678c94a",i,!0,{sourceMap:!1,shadowMode:!1})},"1a1f":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("96cf");var r=i(n("3b8d")),o=i(n("6145")),a=i(n("4342")),s=i(n("6467")),c=n("444b"),u={data:function(){return{goodsList:[],goodsListCur:[],addCategory:[],showTitle:!1,categoryList:[],currentPage:1,pagesize:7,showCategoryIndex:0,footer_Text:"暂无数据"}},components:{pageHead:o.default,pageHot:a.default},onLoad:function(t){if(t.goodsInfo){var e=JSON.parse(t.goodsInfo);this.goodsList=e,this.footer_Text="数据加载中...",this.get_goodsCur()}else if(t.goods_id){this.showCategoryIndex=t.goods_id-1;var n=t.goods_id;console.log(n),this.initData(n)}},methods:{showCategory:function(t){this.showCategoryIndex=t.id-1,uni.showLoading({title:"加载中..."}),this.initData(t.id)},initData:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var n,i,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.goodsListCur=[],this.request({url:s.default.get_bc_goods,method:"POST",data:{b_class:e},success:function(t){console.log(t),0==t.error_code?(r.goodsList=t.data,r.footer_Text="数据加载中...",r.get_goodsCur()):r.footer_Text="暂无数据"}}),t.next=4,this.$api.json("data");case 4:n=t.sent,this.categoryList=n.categoryList,i={b_class:e},(0,c.get_bc_goods)(i).then(function(t){0==t.error_code?(r.goodsList=t.data,r.footer_Text="数据加载中...",r.get_goodsCur()):r.footer_Text="暂无数据"});case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),get_goodsCur:function(){var t=this,e=this.goodsList;this.addCategory=e.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize),this.addCategory.length>0?(uni.hideLoading(),this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.addCategory.length<7&&(this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.footer_Text="到底了")):uni.hideLoading()}},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){uni.showLoading({title:"加载中..."},50),this.get_goodsCur(),this.currentPage++}};e.default=u},"1adf":function(t,e,n){"use strict";var i=n("17e8"),r=n.n(i);r.a},3179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["hotList","showTitle"],data:function(){return{hotLists:this.hotList}},methods:{navToDetailPage:function(t){uni.navigateTo({url:"../good/goods?goods_id="+t.id})}}};e.default=i},"35fb":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("f499"));n("386d");var o=i(n("6467")),a={data:function(){return{inp_text:""}},methods:{goBack:function(){uni.navigateBack()},seek:function(){this.request({url:o.default.search,method:"POST",data:{goods_name:this.inp_text},success:function(t){0==t.error_code?uni.navigateTo({url:"./toCategory?goodsInfo="+(0,r.default)(t.data)}):uni.showToast({icon:"none",title:t.data})}})}}};e.default=a},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n("795b"),r=n.n(i);function o(t,e,n,i,o,a,s){try{var c=t[a](s),u=c.value}catch(l){return void n(l)}c.done?e(u):r.a.resolve(u).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var a=t.apply(e,n);function s(t){o(a,i,r,s,c,"next",t)}function c(t){o(a,i,r,s,c,"throw",t)}s(void 0)})}}},4342:function(t,e,n){"use strict";n.r(e);var i=n("4a43"),r=n("00b0");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("1adf");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2c29ac9c",null,!1,i["a"],a);e["default"]=c.exports},"49a8":function(t,e,n){"use strict";n.r(e);var i=n("1a1f"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"4a43":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.showTitle?n("v-uni-view",{staticClass:"hot"},[n("v-uni-text",{staticClass:"title"},[t._v("热卖推荐")])],1):t._e(),t.showTitle?t._e():n("v-uni-view",{staticStyle:{height:"30upx"}}),n("v-uni-view",{staticClass:"guess-section"},t._l(t.hotList,function(e,i){return n("v-uni-view",{key:i,staticClass:"guess-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToDetailPage(e)}}},[n("v-uni-view",{staticClass:"image-wrapper"},[n("v-uni-image",{attrs:{src:"http://www.tiktokshopee.com"+e.img,mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"fontTitle"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"price"},[n("v-uni-text",{staticClass:"old"},[t._v(t._s(e.market_price))]),n("v-uni-text",{staticClass:"new"},[t._v(t._s(e.price))])],1),n("v-uni-view",{staticClass:"integral"},[n("v-uni-text",[t._v("赠"+t._s(e.jifen)+"积分")])],1)],1)}),1)],1)},o=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"4eb0":function(t,e,n){"use strict";var i=n("602f"),r=n.n(i);r.a},"602f":function(t,e,n){var i=n("98e3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6a4838f3",i,!0,{sourceMap:!1,shadowMode:!1})},6145:function(t,e,n){"use strict";n.r(e);var i=n("7d0d"),r=n("b1bd");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("4eb0");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"03f742b8",null,!1,i["a"],a);e["default"]=c.exports},"6e9e":function(t,e,n){"use strict";var i=n("c5c9"),r=n.n(i);r.a},"7c70":function(t,e,n){"use strict";n.r(e);var i=n("c720"),r=n("49a8");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("6e9e");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"530c7d95",null,!1,i["a"],a);e["default"]=c.exports},"7d0d":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"icon-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1),n("v-uni-view",{staticClass:"input-box"},[n("v-uni-input",{attrs:{placeholder:"默认关键字","placeholder-style":"color:#c0c0c0;"},model:{value:t.inp_text,callback:function(e){t.inp_text=e},expression:"inp_text"}}),n("v-uni-view",{staticClass:"icon iconfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.seek.apply(void 0,arguments)}}},[t._v("")])],1)],1),n("v-uni-view",{staticClass:"place"})],1)},o=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={},v={};v[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(H([])));b&&b!==i&&r.call(b,a)&&(v=b);var y=L.prototype=_.prototype=Object.create(v);k.prototype=y.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},C(T.prototype),T.prototype[s]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,n,i){var r=new T(x(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},C(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=H,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;P(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:H(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,i){var r=e&&e.prototype instanceof _?e:_,o=Object.create(r.prototype),a=new z(i||[]);return o._invoke=E(t,n,a),o}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function _(){}function k(){}function L(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,i,o,a){var s=m(t[n],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function E(t,e,n){var i=f;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return F()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=m(t,e,n);if("normal"===c.type){if(i=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function j(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=m(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function H(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98e3":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-03f742b8]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;z-index:10;background-color:#ec1c1c;top:0}.header .icon[data-v-03f742b8]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%;color:#666}.header .input-box[data-v-03f742b8]{width:100%;height:%?60?%;background-color:#fff;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px solid #fff}.header .input-box .icon[data-v-03f742b8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-03f742b8]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-03f742b8]{width:%?70?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-03f742b8]{width:%?60?%;height:%?60?%;font-size:%?42?%;color:#000;font-weight:600}.place[data-v-03f742b8]{background-color:#fff;height:%?100?%}',""])},b1bd:function(t,e,n){"use strict";n.r(e);var i=n("35fb"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},b55f:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.hot[data-v-2c29ac9c]{width:100%;height:%?50?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hot .title[data-v-2c29ac9c]{width:100%;font-size:%?24?%;text-align:center;letter-spacing:8px;font-weight:800;font-family:Microsoft YaHei}\n/* 热卖商品 */.guess-section[data-v-2c29ac9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.guess-section .guess-item[data-v-2c29ac9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?20?%}.guess-section .guess-item[data-v-2c29ac9c]:nth-child(2n+1){margin-right:4%}.guess-section .image-wrapper[data-v-2c29ac9c]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-2c29ac9c]{width:100%;height:100%;opacity:1}.guess-section .fontTitle[data-v-2c29ac9c]{width:100%;font-size:%?24?%;line-height:%?30?%;height:%?60?%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;white-space:normal!important;-webkit-line-clamp:2;-webkit-box-orient:vertical}.guess-section .price[data-v-2c29ac9c]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.guess-section .price .old[data-v-2c29ac9c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;padding:0 %?15?% 0 %?5?%;color:#999;line-height:%?40?%;text-decoration:line-through}.guess-section .price .new[data-v-2c29ac9c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;padding:0 %?15?% 0 %?5?%;color:#ff675f;line-height:%?40?%;font-weight:500;text-align:right}.guess-section .integral[data-v-2c29ac9c]{width:100%;height:%?50?%;background-color:#fdeb46;font-size:%?18?%;line-height:%?50?%;text-align:center}',""])},c5c9:function(t,e,n){var i=n("efc8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6048760c",i,!0,{sourceMap:!1,shadowMode:!1})},c720:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"status"}),n("page-head"),n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{attrs:{src:"../../static/img/banner.png"}})],1),n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true"}},[n("v-uni-view",{staticClass:"row"},t._l(t.categoryList,function(e,i){return n("v-uni-view",{key:i,staticClass:"scroll-view-item_H",class:{on:i==t.showCategoryIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showCategory(e)}}},[t._v(t._s(e.name))])}),1)],1)],1),n("page-hot",{attrs:{showTitle:t.showTitle,footer_Text:t.footer_Text,hotList:t.goodsListCur}}),n("v-uni-view",{staticClass:"footer_font"},[t._v(t._s(t.footer_Text))])],1)},o=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},efc8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.status[data-v-530c7d95]{width:100%;position:fixed;z-index:10;background-color:#ec1c1c;top:0;height:0}.scroll-view_H[data-v-530c7d95]{height:%?60?%;width:94%;margin:0 3%}.scroll-view_H .row[data-v-530c7d95]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex}.scroll-view_H .row .scroll-view-item_H[data-v-530c7d95]{-webkit-flex-shrink:0;flex-shrink:0;height:90%;line-height:%?80?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.scroll-view_H .row .scroll-view-item_H.on[data-v-530c7d95]{color:red;font-size:%?28?%}.banner[data-v-530c7d95]{width:100%;height:%?280?%;display:-webkit-box;display:-webkit-flex;display:flex}.banner uni-image[data-v-530c7d95]{width:100%;height:100%}.footer_font[data-v-530c7d95]{text-align:center;font-size:%?28?%;color:#999}',""])}}]);