(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/base/createOrder"],{"0a81":function(e,t,n){},"14b2":function(e,t,n){"use strict";var o=n("0a81"),r=n.n(o);r.a},1745:function(e,t,n){"use strict";n.r(t);var o=n("5cf0"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},"184f":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"5cf0":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("a34a")),a=s(n("6467"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,r,a,s){try{var u=e[a](s),i=u.value}catch(d){return void n(d)}u.done?t(i):Promise.resolve(i).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function s(e){u(a,o,r,s,i,"next",e)}function i(e){u(a,o,r,s,i,"throw",e)}s(void 0)})}}var d=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},c={data:function(){return{car_goodsInfo:[],goodsInfo:[],maskState:0,desc:"",count:"",sum:"",addressData:{shou_name:"",shou_tell:"",province:"",area:"",address:"",mo_ren:""},showPay:!1,set_dizhi:"",key:!1}},onLoad:function(t){var n=this;t.car_goodsInfo?(this.key=!0,this.goodsInfo.push(JSON.parse(t.car_goodsInfo))):this.goodsInfo.push(JSON.parse(t.goodsInfo)),e("log",this.goodsInfo," at pages\\order\\base\\createOrder.vue:108"),this.goodsInfo.forEach(function(e){n.count+=e.num,n.sum=e.num*e.price_one,n.sum=n.sum.toFixed(2)}),this.initData()},components:{popupPay:d},methods:{initData:function(){var e=i(r.default.mark(function e(){var t=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.request({url:a.default.get_address,method:"POST",success:function(e){0===e.error_code&&(t.addressData=e.data.filter(function(e){return 1==e.mo_ren}),t.addressData=t.addressData[0],t.set_dizhi="更改地址"),t.addressData.mo_ren||(t.set_dizhi="设置地址")}});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),numberChange:function(e){this.number=e.number},changePayType:function(e){this.payType=e},submit:function(){if(this.key){var t=parseInt(this.sum);e("log",this.goodsInfo[0].id,this.addressData.id,t," at pages\\order\\base\\createOrder.vue:148");var n="";n+=this.goodsInfo[0].id,o.showLoading({title:"订单生成中..."},500);var r=this;setTimeout(function(){r.request({url:a.default.add_order,method:"POST",data:{car_ids:n,user_address:r.addressData.id,all_price:t},success:function(e){0==e.error_code&&(o.hideLoading(),r.showPay=!0,r.$refs.Series.Payment())}})},1e3)}else{e("log","666666"," at pages\\order\\base\\createOrder.vue:174");var s=this.goodsInfo[0].goods_id,u=this.goodsInfo[0].id,i=this.goodsInfo[0].num,d=this.addressData.id,c=parseInt(this.sum);o.showLoading({title:"订单生成中..."},500);var f=this;setTimeout(function(){e("log","123"," at pages\\order\\base\\createOrder.vue:186"),f.request({url:a.default.on_buy,method:"POST",data:{goods_id:s,child_id:u,num:i,user_address:d,all_price:c},success:function(t){e("log",t," at pages\\order\\base\\createOrder.vue:198"),0==t.error_code&&(o.hideLoading(),f.showPay=!0,f.$refs.Series.Payment())}})},1e3)}},setPay:function(e){this.showPay=e},stopPrevent:function(){}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"9c2f":function(e,t,n){"use strict";n.r(t);var o=n("184f"),r=n("1745");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("14b2");var s,u=n("f0c5"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=i.exports},df85:function(e,t,n){"use strict";(function(e){n("1eb0"),n("921b");o(n("66fd"));var t=o(n("9c2f"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["df85","common/runtime","common/vendor"]]]);