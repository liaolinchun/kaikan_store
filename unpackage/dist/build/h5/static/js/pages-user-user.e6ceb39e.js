(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"04e0":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),o=i(n("cebc")),a=n("2f62"),s=i(n("6467")),c=n("444b"),l={data:function(){return{serviceShow:!1,InfoShow:!1,jifen:0,user_info:"",user_phone:""}},computed:(0,o.default)({},(0,a.mapState)(["hasLogin","userInfo"])),methods:{navTo:function(t){this.hasLogin||(t="/pages/public/login"),uni.navigateTo({url:t})},off:function(t){this.serviceShow=t},offInfo:function(t){this.InfoShow=t},initData:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:s.default.get_jifen,method:"POST",success:function(t){console.log(t),1==t.err_code&&(e.jifen=t.data)}}),this.request({url:s.default.get_news,method:"POST",success:function(t){console.log(t),e.user_info=t.data}}),this.request({url:s.default.get_kefu,method:"POST",success:function(t){e.user_phone=t.data}}),(0,c.get_jifen)().then(function(t){0==t.err_code&&(e.jifen=t.data)}),(0,c.get_news)().then(function(t){e.user_info=t.data}),(0,c.get_kefu)().then(function(t){e.user_phone=t.data});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},onLoad:function(){this.initData()}};e.default=l},1765:function(t,e,n){"use strict";n.r(e);var i=n("04e0"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"1d0b":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-ab2ca2b2]{background-color:#f6f6f6}.user-header[data-v-ab2ca2b2]{width:92%;height:18vw;padding:5vw 4% 2vw 4%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.user-header .icon[data-v-ab2ca2b2]{font-size:%?46?%;color:#999;font-weight:600;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.user-header .info[data-v-ab2ca2b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user-header .info .img[data-v-ab2ca2b2]{width:12vw;height:12vw;border-radius:50%;overflow:hidden}.user-header .info .img uni-image[data-v-ab2ca2b2]{width:100%;height:100%}.user-header .info .name[data-v-ab2ca2b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?20?%;font-size:%?28?%;font-weight:600}.user-header .info .name .cur[data-v-ab2ca2b2]{color:#999}.total[data-v-ab2ca2b2]{width:100%;height:18vw;background-color:#fdf8d8;display:-webkit-box;display:-webkit-flex;display:flex}.total .type[data-v-ab2ca2b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?28?%;line-height:8vw;color:#f90}.total .type .cur[data-v-ab2ca2b2]{padding-top:3vw;font-weight:550;font-size:%?45?%}.list-cell[data-v-ab2ca2b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% 5vw;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.cur[data-v-ab2ca2b2]{margin-top:%?10?%;border-bottom:1px solid #eee}.list-cell.cell-hover[data-v-ab2ca2b2]{background:#fafafa}.list-cell.b-b[data-v-ab2ca2b2]:after{left:%?30?%;margin-top:%?5?%}.list-cell .icon[data-v-ab2ca2b2]{font-size:%?28?%;color:#999;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.list-cell .cell-tit[data-v-ab2ca2b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;color:#333;margin-right:%?10?%}.news[data-v-ab2ca2b2]{width:94%;margin:3vw 3%;border-radius:%?40?%;overflow:hidden;box-sizing:border-box}.service[data-v-ab2ca2b2]{width:60%;height:30vw;border-radius:%?20?%;background-color:#fef0ef;position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:50%;margin-top:-15vw;z-index:99;text-align:center;box-sizing:border-box;overflow:hidden}.service .box1[data-v-ab2ca2b2]{font-size:%?32?%;line-height:8vw;background-color:#ec5045;color:#fff;position:relative}.service .box1 .off[data-v-ab2ca2b2]{position:absolute;right:%?5?%;font-size:%?36?%}.service .box2[data-v-ab2ca2b2]{font-size:%?36?%;font-weight:600;line-height:10vw}.service .box3[data-v-ab2ca2b2]{font-size:%?24?%;line-height:5vw}.service .box4[data-v-ab2ca2b2]{font-size:%?28?%;line-height:7vw}body.?%PAGE?%[data-v-ab2ca2b2]{background-color:#f6f6f6}',""])},"268e":function(t,e,n){var i=n("1d0b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("749d7fb8",i,!0,{sourceMap:!1,shadowMode:!1})},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n("795b"),r=n.n(i);function o(t,e,n,i,o,a,s){try{var c=t[a](s),l=c.value}catch(u){return void n(u)}c.done?e(l):r.a.resolve(l).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var a=t.apply(e,n);function s(t){o(a,i,r,s,c,"next",t)}function c(t){o(a,i,r,s,c,"throw",t)}s(void 0)})}}},"4e7b":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-status"),n("v-uni-view",{staticClass:"user-header"},[n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:t.userInfo.portrait||"../../static/pyq.png"}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v(t._s(t.userInfo.nickname||"游客"))]),n("v-uni-view",{staticClass:"cur"},[t._v("ID "+t._s(t.userInfo.mobile||"用户未登录"))])],1)],1),n("v-uni-view",{staticClass:"icon iconfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("../set/set")}}},[t._v("")])],1),n("v-uni-view",{staticClass:"total"},[n("v-uni-view",{staticClass:"type"},[n("v-uni-view",{staticClass:"cur"},[t._v("50")]),n("v-uni-view",[t._v("已砍金额")])],1),n("v-uni-view",{staticClass:"type"},[n("v-uni-view",{staticClass:"cur"},[t._v(t._s(t.jifen||"0"))]),n("v-uni-view",[t._v("积分")])],1),n("v-uni-view",{staticClass:"type"},[n("v-uni-view",{staticClass:"cur"},[t._v("0")]),n("v-uni-view",[t._v("礼物卡")])],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"list-cell cur",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("../order/order")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("订单")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./base/gameOrder")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("我的砍价")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1)],1),n("v-uni-view",{staticClass:"news"},[n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.offInfo(!0)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("消息")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1),t.InfoShow?n("v-uni-view",{staticClass:"service"},[n("v-uni-view",{staticClass:"box1 iconfont"},[t._v("物流信息"),n("v-uni-text",{staticClass:"off",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.offInfo(!1)}}},[t._v("")])],1),n("v-uni-view",{staticClass:"box3"}),n("v-uni-view",{staticClass:"box4"},[t._v(t._s(t.user_info))])],1):t._e(),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("../address/address")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("收货地址")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.off(!0)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("客服")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1),t.serviceShow?n("v-uni-view",{staticClass:"service"},[n("v-uni-view",{staticClass:"box1 iconfont"},[t._v("客服"),n("v-uni-text",{staticClass:"off",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.off(!1)}}},[t._v("")])],1),n("v-uni-view",{staticClass:"box2"},[t._v(t._s(t.user_phone))]),n("v-uni-view",{staticClass:"box3"},[t._v("服务时间")]),n("v-uni-view",{staticClass:"box4"},[t._v("9: 30 - 18: 30")])],1):t._e(),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("常见问题")]),n("v-uni-text",{staticClass:"icon iconfont"},[t._v("")])],1)],1)],1)},o=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"51b61":function(t,e,n){"use strict";n.r(e);var i=n("4e7b"),r=n("1765");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("537a");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"ab2ca2b2",null,!1,i["a"],a);e["default"]=c.exports},"537a":function(t,e,n){"use strict";var i=n("268e"),r=n.n(i);r.a},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=m;var f="suspendedStart",v="suspendedYield",h="executing",d="completed",b={},p={};p[a]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(I([])));g&&g!==i&&r.call(g,a)&&(p=g);var y=C.prototype=_.prototype=Object.create(p);k.prototype=y.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},u.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(t,e,n,i){var r=new L(m(t,e,n,i));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},E(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=I,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:I(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),b}}}function m(t,e,n,i){var r=e&&e.prototype instanceof _?e:_,o=Object.create(r.prototype),a=new z(i||[]);return o._invoke=j(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function _(){}function k(){}function C(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(n,i,o,a){var s=x(t[n],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function j(t,e,n){var i=f;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===d){if("throw"===r)throw o;return P()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=x(t,e,n);if("normal"===c.type){if(i=n.done?d:v,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=d,n.method="throw",n.arg=c.arg)}}}function O(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,b;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,b):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())}}]);