(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/popupPay"],{"70e2":function(e,t,n){"use strict";n.r(t);var o=n("acc3"),a=n("e8b4");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("eb58");var i,s=n("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=r.exports},ac79:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("a34a"));a(n("6467"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,a,c,i){try{var s=e[c](i),r=s.value}catch(u){return void n(u)}s.done?t(r):Promise.resolve(r).then(o,a)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function s(e){c(i,o,a,s,r,"next",e)}function r(e){c(i,o,a,s,r,"throw",e)}s(void 0)})}}var s={props:["showPay","Price","footerbottom","order_num","isGame"],data:function(){return{wechat:0,zhifubao:1,bankCard:2,dealCur:!0,showIndex:0,title:"request-payment",loading:!1,price:.01,alipayList:[],wxpayList:[]}},methods:{hidePay:function(){var t=this;this.$emit("func",!1),e.showModal({title:"取消支付",content:"确定要取消支付吗？",cancelText:"否",confirmText:"是",success:function(n){n.confirm?e.navigateTo({url:"../order"}):t.$emit("func",!0)}})},setIndex:function(e){this.showIndex=e},showCur:function(){console.log("13"),this.dealCur=!this.dealCur},weixinPay:function(){var t=this,n="";this.isGame?n="https://www.tiktokshopee.com/apk/Xiaopay/kan_pay":(n="https://www.tiktokshopee.com/apk/Xiaopay/pay",console.log(this.Price)),this.loading=!0,console.log(n),e.login({success:function(o){console.log(o.code),e.request({url:n,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:o.code,total_fee:t.Price,order_num:t.order_num},success:function(n){if(console.log(n),200===n.statusCode)if(200===n.data.state){var o=n.data;e.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(t){e.showToast({title:"感谢您的赞助!"})},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}else e.showModal({content:n.data.desc,showCancel:!1});else e.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},Payment:function(){},toRequestPayment:function(){if(0===this.showIndex){var e="http://www.tiktokshopee.com/apk/Wxpay/H5jsapipay";plus.runtime.openWeb(e,function(){})}else if(1===this.showIndex){var t="http://www.mamamohe.cn/zfb/alipay/index.php";plus.runtime.openWeb(t,function(){})}},requestPayment:function(){var t=i(o.default.mark(function t(n,a){var c,i=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getOrderInfo(n.id);case 3:if(c=t.sent,console.log("得到订单信息",c),200===c.statusCode){t.next=9;break}return console.log("获得订单信息失败",c),e.showModal({content:"获得订单信息失败",showCancel:!1}),t.abrupt("return");case 9:console.log(n.id,c.data),e.requestPayment({provider:n.id,orderInfo:c.data,success:function(t){console.log("success",t),e.showToast({title:"感谢您的赞助!"})},fail:function(t){console.log("fail",t),e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){i.loading=!1}});case 11:case"end":return t.stop()}},t,this)}));function n(e,n){return t.apply(this,arguments)}return n}(),getOrderInfo:function(t){var n="",o="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid="+n+"&total="+this.price;return new Promise(function(t){e.request({url:o,success:function(e){t(e)},fail:function(e){t(e)}})})}}};t.default=s}).call(this,n("543d")["default"])},acc3:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return o})},c8e2:function(e,t,n){},e8b4:function(e,t,n){"use strict";n.r(t);var o=n("ac79"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=a.a},eb58:function(e,t,n){"use strict";var o=n("c8e2"),a=n.n(o);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/popupPay-create-component',
    {
        'components/popupPay-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("70e2"))
        })
    },
    [['components/popupPay-create-component']]
]);