;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/popupPay"],{"69c6":function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},"70e2":function(t,n,e){"use strict";e.r(n);var o=e("69c6"),i=e("e8b4");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("eb58");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},ac79:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("a34a"));i(e("6467"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,o,i,r,a){try{var u=t[r](a),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(o,i)}function a(t){return function(){var n=this,e=arguments;return new Promise(function(o,i){var a=t.apply(n,e);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)})}}var u={props:["showPay","Price","footerbottom","order_num","isGame"],data:function(){return{wechat:0,zhifubao:1,bankCard:2,dealCur:!0,showIndex:0,title:"request-payment",loading:!1,price:.01,alipayList:[],wxpayList:[]}},methods:{hidePay:function(){var n=this;this.$emit("func",!1),t.showModal({title:"取消支付",content:"确定要取消支付吗？",cancelText:"否",confirmText:"是",success:function(e){e.confirm?t.navigateTo({url:"../order"}):n.$emit("func",!0)}})},setIndex:function(t){this.showIndex=t},showCur:function(){console.log("13"),this.dealCur=!this.dealCur},aliPay:function(){console.log("支付宝支付")},Payment:function(){},toRequestPayment:function(){if(0===this.showIndex){var t="http://www.tiktokshopee.com/apk/Wxpay/H5jsapipay";plus.runtime.openWeb(t,function(){})}else if(1===this.showIndex){var n="http://www.mamamohe.cn/zfb/alipay/index.php";plus.runtime.openWeb(n,function(){})}},requestPayment:function(){var n=a(o.default.mark(function n(e,i){var r,a=this;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.getOrderInfo(e.id);case 3:if(r=n.sent,console.log("得到订单信息",r),200===r.statusCode){n.next=9;break}return console.log("获得订单信息失败",r),t.showModal({content:"获得订单信息失败",showCancel:!1}),n.abrupt("return");case 9:console.log(e.id,r.data),t.requestPayment({provider:e.id,orderInfo:r.data,success:function(n){console.log("success",n),t.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),t.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){a.loading=!1}});case 11:case"end":return n.stop()}},n,this)}));function e(t,e){return n.apply(this,arguments)}return e}(),getOrderInfo:function(n){var e="",o="https://demo.dcloud.net.cn/payment/?payid="+n+"&appid="+e+"&total="+this.price;return new Promise(function(n){t.request({url:o,success:function(t){n(t)},fail:function(t){n(t)}})})}}};n.default=u}).call(this,e("c11b")["default"])},c8e2:function(t,n,e){},e8b4:function(t,n,e){"use strict";e.r(n);var o=e("ac79"),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=i.a},eb58:function(t,n,e){"use strict";var o=e("c8e2"),i=e.n(o);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/popupPay-create-component',
    {
        'components/popupPay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("70e2"))
        })
    },
    [['components/popupPay-create-component']]
]);