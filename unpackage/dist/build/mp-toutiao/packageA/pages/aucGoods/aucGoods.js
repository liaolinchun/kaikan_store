(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["packageA/pages/aucGoods/aucGoods"],{"21db":function(t,e,n){"use strict";n.r(e);var o=n("f48c"),u=n("e811");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("458c");var r,a=n("f0c5"),c=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},2381:function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");o(n("66fd"));var e=o(n("21db"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("f266")["createPage"])},"458c":function(t,e,n){"use strict";var o=n("5003"),u=n.n(o);u.a},5003:function(t,e,n){},b85f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a")),u=i(n("6467"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,u,i,r){try{var a=t[i](r),c=a.value}catch(s){return void n(s)}a.done?e(c):Promise.resolve(c).then(o,u)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(o,u){var i=t.apply(e,n);function a(t){r(i,o,u,a,c,"next",t)}function c(t){r(i,o,u,a,c,"throw",t)}a(void 0)})}}var c=function(){return n.e("packageA/pages/aucGoods/base/goodsHeader").then(n.bind(null,"17dd"))},s={data:function(){return{swiperList:[],goodsInit:[],goodsData:[],e:3038,title_price:"",currentSwiper:0,detailsImg:[],number:1}},components:{goodsHeader:c},methods:{initData:function(){var t=a(o.default.mark(function t(e){var n=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:u.default.get_goods_detail,method:"POST",data:{goods_id:e},success:function(t){console.log(t),n.title_price=t.goods[0].price,n.goodsInit=t.goods[0],n.detailsImg=t.img_url,t.data.forEach(function(t){n.swiperList.push(t.thumbimg)})}}),this.request({url:u.default.get_goods_assess,method:"POST",data:{goods_id:e},success:function(t){0==t.error_code&&(t.data.forEach(function(t){t.time=n.timestampToTime(t.time)}),n.goodsData=t.data)}});case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),swiperChange:function(t){this.currentSwiper=t.detail.current},showBigImg:function(e,n,o){var u="https://www.tiktokshopee.com"+e,i=[];o?n.forEach(function(t){i.push("https://www.tiktokshopee.com"+t)}):n.forEach(function(t){i.push("https://www.tiktokshopee.com"+t.img_url)}),console.log(i),t.previewImage({current:u,urls:i})},navTo:function(e){t.navigateTo({url:e})},minus:function(){this.number--,this.number<1&&(this.number=1)},add:function(){this.number++}},onLoad:function(){this.initData(this.e)}};e.default=s}).call(this,n("f266")["default"])},e811:function(t,e,n){"use strict";n.r(e);var o=n("b85f"),u=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=u.a},f48c:function(t,e,n){"use strict";var o,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})}},[["2381","common/runtime","common/vendor"]]]);