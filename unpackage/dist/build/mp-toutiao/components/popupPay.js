(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/popupPay"],{"70e2":function(t,n,e){"use strict";e.r(n);var o=e("acc3"),a=e("e8b4");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("eb58");var i,u=e("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},ac79:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a"));a(e("6467"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,o,a,r,i){try{var u=t[r](i),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(o,a)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(o,a){var i=t.apply(n,e);function u(t){r(i,o,a,u,c,"next",t)}function c(t){r(i,o,a,u,c,"throw",t)}u(void 0)})}}var u={props:["showPay","Price","footerbottom","order_num","isGame"],data:function(){return{wechat:0,zhifubao:1,bankCard:2,dealCur:!0,showIndex:0,title:"request-payment",loading:!1,price:.01,alipayList:[],wxpayList:[]}},methods:{hidePay:function(){var n=this;this.$emit("func",!1),t.showModal({title:"取消支付",content:"确定要取消支付吗？",cancelText:"否",confirmText:"是",success:function(e){e.confirm?t.navigateTo({url:"../order"}):n.$emit("func",!0)}})},setIndex:function(t){this.showIndex=t},showCur:function(){console.log("13"),this.dealCur=!this.dealCur},Payment:function(){},toRequestPayment:function(){if(0===this.showIndex){var t="http://www.tiktokshopee.com/apk/Wxpay/H5jsapipay";plus.runtime.openWeb(t,function(){})}else if(1===this.showIndex){var n="http://www.mamamohe.cn/zfb/alipay/index.php";plus.runtime.openWeb(n,function(){})}},requestPayment:function(){var n=i(o.default.mark(function n(e,a){var r,i=this;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.getOrderInfo(e.id);case 3:if(r=n.sent,console.log("得到订单信息",r),200===r.statusCode){n.next=9;break}return console.log("获得订单信息失败",r),t.showModal({content:"获得订单信息失败",showCancel:!1}),n.abrupt("return");case 9:console.log(e.id,r.data),t.requestPayment({provider:e.id,orderInfo:r.data,success:function(n){console.log("success",n),t.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){i.loading=!1}});case 11:case"end":return n.stop()}},n,this)}));function e(t,e){return n.apply(this,arguments)}return e}(),getOrderInfo:function(n){var e="",o="https://demo.dcloud.net.cn/payment/?payid="+n+"&appid="+e+"&total="+this.price;return new Promise(function(n){t.request({url:o,success:function(t){n(t)},fail:function(t){n(t)}})})}}};n.default=u}).call(this,e("f266")["default"])},acc3:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},c8e2:function(t,n,e){},e8b4:function(t,n,e){"use strict";e.r(n);var o=e("ac79"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},eb58:function(t,n,e){"use strict";var o=e("c8e2"),a=e.n(o);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/popupPay-create-component',
    {
        'components/popupPay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("70e2"))
        })
    },
    [['components/popupPay-create-component']]
]);
