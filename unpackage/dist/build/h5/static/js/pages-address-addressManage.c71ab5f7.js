(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressManage"],{2645:function(t,e,n){var i=n("b041");e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup[data-v-dbd6925a]{position:fixed;top:0;width:100%;height:100%;z-index:20}.popup .mask[data-v-dbd6925a]{position:fixed;top:0;width:100%;height:100%;z-index:21%;background-color:rgba(0,0,0,.6)}.popup .layer[data-v-dbd6925a]{position:fixed;z-index:22;bottom:0;width:100%;height:75%;background-color:#fff;-webkit-align-content:space-between;align-content:space-between}.popup .layer .site-header[data-v-dbd6925a]{width:94%;padding:0 3%;height:15vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.popup .layer .site-header .font[data-v-dbd6925a]{font-size:%?54?%;font-weight:500}.popup .layer .site-header .icon[data-v-dbd6925a]{font-size:%?34?%}.popup .nav[data-v-dbd6925a]{width:100%;height:10vw;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #eee}.popup .nav .type[data-v-dbd6925a]{min-width:15%;font-size:%?28?%;color:#333;line-height:10vw;padding-left:3%}.popup .nav .type.cur[data-v-dbd6925a]{border-bottom:2px solid #412b85}.popup .city[data-v-dbd6925a]{width:100%;height:100vw;overflow:hidden}.popup .city .row[data-v-dbd6925a]{width:96%;margin:0 2%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;color:#666;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.popup .city .row.on[data-v-dbd6925a]{color:#412b85}.popup .city .row.on[data-v-dbd6925a]::after{content:url('+i(n("305e"))+");margin-left:%?30?%}",""])},"305e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhklEQVQ4T6WTP0hbYRTFz3kxsSiFglBxKAgu6gsFiUtbMO9Zqh2cnFwEce5WOkQTfJi8IrgUN0eHrFroIiXKa3Bwrr4oioNDh+LgJJT8eadEVGKMaap3+vg498e999xLPDL4yHw8GGANuPM00P4AgGgNuiskP0D6/J8Ax7DMcJbAlKScVyiPtwyIxVbDT/+crROcELQXCbW/+v7z00VLgLGXy53FSvEbARvQL4OMbe3P/64awNFouq/62N5PnTRyxOp1nqGjbZvkEIALlTjsHc0dXmtpme4mJVvArFdIZmshr/sWnkeeRH4Q6AdQURC89w5SuVoN46ZrU9giQUFfPL/8EXCCkWjmhREwT6K3miBoxvOTa/VVXs7ANt1FAKlLoZQjjKSgDRI9V39LXiGZaNTi1RAdwzbDeQBv6kUSvnqFuUlUC2wQNy68jbrdQQAfRNe1TtLuGctx33eK9638LRtr5wHptBQKDe3sJc6b3cudPbDMTJrCdEV6lz9IHf/r2FpapGaQvzlbiXoFvHgcAAAAAElFTkSuQmCC"},3911:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("8081")),a=i(n("6467")),o=n("444b"),s={data:function(){return{showSite:!1,addressData:{name:"",mobile:"",addressName:"请选择省 、 市 、 区",province:"",area:"",address:"",default:2,showCheck:!1},new_address:!0,key:!1,id:""}},components:{popupSite:r.default},onLoad:function(t){var e="新增收货地址";if(this.key=!1,"edit"===t.type){this.new_address=!1,e="编辑收货地址",this.key=!0;var n=JSON.parse(t.data);this.id=n.id,this.addressData=n,this.addressData.addressName=n.province+n.area,1==n.mo_ren&&(this.addressData.showCheck=!0)}this.manageType=t.type,uni.setNavigationBarTitle({title:e})},methods:{switchChange:function(t){t.detail.value?this.addressData.default=1:this.addressData.default=2},setSelect:function(t,e){this.showSite=t,e&&(this.addressData.province=e[0],this.addressData.area=e[1]+e[2],this.addressData.addressName=this.addressData.province+this.addressData.area)},setShowSite:function(){this.key||(this.showSite=!0,this.$refs.getCity.getCity())},confirm:function(){var t=this;if(this.new_address){var e=this.addressData;if(!e.shou_name)return void this.$api.msg("请填写收货人姓名");if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(e.shou_tell))return void this.$api.msg("请输入正确的手机号码");if("请选择省 、 市 、 区"==e.addressName)return void this.$api.msg("请选择所在位置");if(!e.address)return void this.$api.msg("请填写门牌号信息");console.log(this.addressData),this.request({url:a.default.add_address,method:"POST",data:{shou_name:e.shou_name,shou_tell:e.shou_tell,shou_email:"",province:e.province,area:e.area,address:e.address,zip_code:"",mo_ren:e.default},success:function(e){0==e.error_code&&(t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))}});var n={shou_name:e.shou_name,shou_tell:e.shou_tell,shou_email:"",province:e.province,area:e.area,address:e.address,zip_code:"",mo_ren:e.default};(0,o.add_address)(n).then(function(e){0==e.error_code&&(t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))})}else{this.request({url:a.default.set_moren,method:"POST",data:{address_id:this.id},success:function(e){0==e.error_code&&(t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))}});var i={address_id:this.id};(0,o.set_moren)(i).then(function(e){0==e.error_code&&(t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))})}}}};e.default=s},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var i=n("795b"),r=n.n(i);function a(t,e,n,i,a,o,s){try{var c=t[o](s),d=c.value}catch(u){return void n(u)}c.done?e(d):r.a.resolve(d).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,c,"next",t)}function c(t){a(o,i,r,s,c,"throw",t)}s(void 0)})}}},"532d":function(t,e,n){"use strict";var i=n("5f08"),r=n.n(i);r.a},"5f08":function(t,e,n){var i=n("d349");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("57f67e76",i,!0,{sourceMap:!1,shadowMode:!1})},"804b":function(t,e,n){"use strict";var i=n("c310"),r=n.n(i);r.a},8081:function(t,e,n){"use strict";n.r(e);var i=n("8a74"),r=n("fa19");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("804b");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"dbd6925a",null,!1,i["a"],o);e["default"]=c.exports},"8a74":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showSite,expression:"showSite"}],staticClass:"popup site"},[n("v-uni-view",{staticClass:"mask"}),n("v-uni-view",{staticClass:"layer"},[n("v-uni-view",{staticClass:"site-header"},[n("v-uni-text",{staticClass:"font"},[t._v("配送至")]),n("v-uni-text",{staticClass:"icon iconfont",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)}}},[t._v("")])],1),n("v-uni-view",{staticClass:"nav"},t._l(t.siteNav,function(e,i){return n("v-uni-view",{key:i,staticClass:"type",class:{cur:i==t.showSiteIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSiteNav(i)}}},[t._v(t._s(e))])}),1),n("v-uni-scroll-view",{staticClass:"city",attrs:{"scroll-y":"true"}},[t._l(t.province,function(e,i){return t.showOne?n("v-uni-view",{key:i,staticClass:"row",class:{on:i==t.showProvIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showProvNav(e,i)}}},[t._v(t._s(e))]):t._e()}),t._l(t.citys,function(e,i){return t.showTwo?n("v-uni-view",{key:i,staticClass:"row",class:{on:i==t.showCityIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showCityNav(e,i)}}},[t._v(t._s(e))]):t._e()}),t._l(t.region,function(e,i){return t.showThree?n("v-uni-view",{key:i,staticClass:"row",class:{on:i==t.showRegIndex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.overSelect(e,i)}}},[t._v(t._s(e))]):t._e()})],2)],1)],1)},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",d="object"===typeof t,u=e.regeneratorRuntime;if(u)d&&(t.exports=u);else{u=e.regeneratorRuntime=d?t.exports:{},u.wrap=m;var h="suspendedStart",l="suspendedYield",f="executing",p="completed",v={},w={};w[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==i&&r.call(g,o)&&(w=g);var b=C.prototype=k.prototype=Object.create(w);_.prototype=b.constructor=C,C.constructor=_,C[c]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},A(N.prototype),N.prototype[s]=function(){return this},u.AsyncIterator=N,u.async=function(t,e,n,i){var r=new N(m(t,e,n,i));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},A(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=O,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),d=r.call(o,"finallyLoc");if(c&&d){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function m(t,e,n,i){var r=e&&e.prototype instanceof k?e:k,a=Object.create(r.prototype),o=new D(i||[]);return a._invoke=T(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function C(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){function e(n,i,a,o){var s=x(t[n],t,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?Promise.resolve(d.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(d).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,o)})}o(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function T(t,e,n){var i=h;return function(r,a){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw a;return P()}n.method=r,n.arg=a;while(1){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=x(t,e,n);if("normal"===c.type){if(i=n.done?p:l,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function E(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a5d7:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),a={props:["showSite"],data:function(){return{siteNav:["选择省","选择市","选择区"],showSiteIndex:0,showProvIndex:0,showCityIndex:0,showRegIndex:0,goback:0,data:[],updateCity:[],province:[],showOne:!0,showTwo:!1,showThree:!1,citys:[],region:[],newAddressName:""}},methods:{hideSpec:function(){this.newAddressName?this.$emit("func",!1,this.newAddressName):this.$emit("func",!1)},showSiteNav:function(t){0==t?(this.showOne=!0,this.showTwo=!1,this.showThree=!1,this.showProvIndex=this.goback):1==t?(this.showOne=!1,this.showTwo=!0,this.showThree=!1,this.showProvIndex=0):2==t&&(this.showOne=!1,this.showTwo=!1,this.showThree=!0),this.showSiteIndex=t},showProvNav:function(t,e){var n;this.siteNav[0]=t,this.showProvIndex=e,this.goback=e,n=this.data.filter(function(e){return e.label==t}),this.updateCity=n,this.citys=[],this.region=[];for(var i=0;i<n.length;i++)for(var r=0;r<n[i].children.length;r++)this.citys.push(n[i].children[r].label),this.siteNav[1]=this.citys[0];this.showOne=!1,this.showTwo=!0,this.showThree=!1,this.siteNav[2]="选择区",this.showSiteIndex=1,this.showProvIndex=0,this.showCityIndex=0},showCityNav:function(t,e){this.siteNav[1]=t,this.showCityIndex=e;var n,i=this;this.region=[];for(var r=0;r<i.updateCity.length;r++)n=i.updateCity[r].children.filter(function(e){return e.label===t});for(var a=0;a<n[0].children.length;a++)this.region.push(n[0].children[a].label);this.showOne=!1,this.showTwo=!1,this.showThree=!0,this.siteNav[2]=this.region[0],this.showSiteIndex=2,this.showRegIndex=0},overSelect:function(t,e){this.siteNav[2]=t,this.showRegIndex=e,this.siteNav&&(this.newAddressName=this.siteNav),this.hideSpec()},getCity:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.citys("data");case 2:for(e=t.sent,this.data=e,n=0;n<e.length;n++)this.province.push(e[n].label);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=a},c310:function(t,e,n){var i=n("2645");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("e1dd67fc",i,!0,{sourceMap:!1,shadowMode:!1})},d349:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0ecf51d2]{background:#fff;padding-top:%?16?%}.row[data-v-0ecf51d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.row .tit[data-v-0ecf51d2]{-webkit-flex-shrink:0;flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#333}.row .input[data-v-0ecf51d2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#999;padding-left:%?20?%}.row .icon-shouhuodizhi[data-v-0ecf51d2]{font-size:%?36?%;color:#666;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.default-row[data-v-0ecf51d2]{margin-top:%?16?%}.default-row .tit[data-v-0ecf51d2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.default-row uni-switch[data-v-0ecf51d2]{-webkit-transform:translateX(%?16?%) scale(.9);transform:translateX(%?16?%) scale(.9)}.add-btn[data-v-0ecf51d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;position:fixed;bottom:3vw;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:%?30?%;color:#fff;background-color:#ee666c;border-radius:%?0?%}body.?%PAGE?%[data-v-0ecf51d2]{background:#fff}',""])},fa19:function(t,e,n){"use strict";n.r(e);var i=n("a5d7"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},fa9a:function(t,e,n){"use strict";n.r(e);var i=n("fd79"),r=n("ff77");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("532d");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"0ecf51d2",null,!1,i["a"],o);e["default"]=c.exports},fd79:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("page-status"),n("v-uni-view",{staticClass:"row b-b"},[n("v-uni-text",{staticClass:"tit"},[t._v("收件人")]),n("v-uni-input",{staticClass:"input",attrs:{type:"text",disabled:t.key,placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:t.addressData.shou_name,callback:function(e){t.$set(t.addressData,"shou_name",e)},expression:"addressData.shou_name"}})],1),n("v-uni-view",{staticClass:"row b-b"},[n("v-uni-text",{staticClass:"tit"},[t._v("联系手机")]),n("v-uni-input",{staticClass:"input",attrs:{type:"number",disabled:t.key,placeholder:"收货人手机号码","placeholder-class":"placeholder"},model:{value:t.addressData.shou_tell,callback:function(e){t.$set(t.addressData,"shou_tell",e)},expression:"addressData.shou_tell"}})],1),n("v-uni-view",{staticClass:"row b-b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setShowSite.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tit"},[t._v("所在地区")]),n("v-uni-text",{staticClass:"input"},[t._v(t._s(t.addressData.addressName))]),n("v-uni-text",{staticClass:"icon-shouhuodizhi iconfont"},[t._v("")])],1),n("v-uni-view",{staticClass:"row b-b"},[n("v-uni-text",{staticClass:"tit"},[t._v("详细地址")]),n("v-uni-input",{staticClass:"input",attrs:{type:"text",disabled:t.key,placeholder:"街道、门牌号等","placeholder-class":"placeholder"},model:{value:t.addressData.address,callback:function(e){t.$set(t.addressData,"address",e)},expression:"addressData.address"}})],1),n("v-uni-view",{staticClass:"row default-row"},[n("v-uni-text",{staticClass:"tit"},[t._v("设置默认地址")]),n("v-uni-switch",{attrs:{checked:t.addressData.showCheck,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1),n("v-uni-button",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("提交")]),n("popup-site",{ref:"getCity",attrs:{showSite:t.showSite},on:{func:function(e){arguments[0]=e=t.$handleEvent(e),t.setSelect.apply(void 0,arguments)}}})],1)},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},ff77:function(t,e,n){"use strict";n.r(e);var i=n("3911"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a}}]);