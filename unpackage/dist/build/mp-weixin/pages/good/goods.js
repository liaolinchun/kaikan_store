(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/good/goods"],{"0bde":function(t,o,e){"use strict";(function(t){e("1eb0"),e("921b");n(e("66fd"));var o=n(e("cf62"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},1204:function(t,o,e){"use strict";e.r(o);var n=e("2700"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);o["default"]=i.a},2700:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=a(e("a34a")),i=a(e("6467")),s=e("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function c(t,o,e,n,i,s,a){try{var c=t[s](a),r=c.value}catch(u){return void e(u)}c.done?o(r):Promise.resolve(r).then(n,i)}function r(t){return function(){var o=this,e=arguments;return new Promise(function(n,i){var s=t.apply(o,e);function a(t){c(s,n,i,a,r,"next",t)}function r(t){c(s,n,i,a,r,"throw",t)}a(void 0)})}}function u(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(o){d(t,o,e[o])})}return t}function d(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var l=function(){return e.e("pages/good/goodsHeader").then(e.bind(null,"cf08"))},f=function(){return e.e("pages/good/base/popupSpec").then(e.bind(null,"e0d1"))},h=function(){return e.e("pages/good/goodsEval").then(e.bind(null,"cb44"))},g={data:function(){return{title_price:"",goodsInit:{},swiperList:[],detailsImg:[],goodsSpec:[],goodsInfo:{num:1,type:"",price:"",id:"",selectdata:"请选择 颜色 规格"},data:[],goodsData:[],currentSwiper:0,spaceInfo:{showSpace:!1},entTime:"",ids:[],key:"",showCollect:!0}},components:{goodsHeader:l,popupSpec:f,goodsEval:h},computed:u({},(0,s.mapState)(["hasLogin"])),methods:{initData:function(){var t=r(n.default.mark(function t(o){var e=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:i.default.get_goods_detail,method:"POST",data:{goods_id:o},success:function(t){console.log(t),e.title_price=t.goods[0].price,e.goodsInit=t.goods[0],e.detailsImg=t.img_url,t.data.forEach(function(t){e.swiperList.push(t.thumbimg)}),e.goodsSpec=t.data}}),this.request({url:i.default.get_goods_assess,method:"POST",data:{goods_id:o},success:function(t){0==t.error_code&&(t.data.forEach(function(t){t.time=e.timestampToTime(t.time)}),e.goodsData=t.data,console.log(e.goodsData))}});case 2:case"end":return t.stop()}},t,this)}));function o(o){return t.apply(this,arguments)}return o}(),timestampToTime:function(t){var o=t.toString();10==o.length&&(o*=1e3);var e=new Date(o),n=e.getFullYear()+"-",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",s=e.getDate()+" ";e.getHours(),e.getMinutes(),e.getSeconds();return n+i+s},swiperChange:function(t){this.currentSwiper=t.detail.current},setSelect:function(t,o){this.data=t,this.goodsInfo.type=t.color_name,this.goodsInfo.id=t.id,this.goodsInfo.price=t.price_one*this.goodsInfo.num,this.goodsInit.price=t.price_one*this.goodsInfo.num,this.goodsInit.market_price=this.goodsInit.market_price*this.goodsInfo.num,this.spaceInfo.showSpace=o,this.goodsInfo.selectdata="已选择 : ".concat(t.color_name," ，数量 : ").concat(this.goodsInfo.num)},showBigImg:function(o,e,n){var i="https://www.tiktokshopee.com"+o,s=[];n?e.forEach(function(t){s.push("https://www.tiktokshopee.com"+t)}):e.forEach(function(t){s.push("https://www.tiktokshopee.com"+t.img_url)}),console.log(s),t.previewImage({current:i,urls:s})},add:function(){this.goodsInfo.num++},minus:function(){this.goodsInfo.num<=1||this.goodsInfo.num--},showSpec:function(){this.spaceInfo.showSpace="ture",this.$refs.Series.bridge()},toGame:function(o){if(console.log(o,"游戏"),o.you=this.goodsInit.you,!this.hasLogin)return t.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){t.navigateTo({url:"../public/login"})},1e3);if(this.goodsInfo.type)if(1==this.goodsInfo.num){var e=o.price;t.setStorageSync("goodsPrice",JSON.stringify(e));var n=this.goodsInfo.id,i=this.goodsInit.you;t.navigateTo({url:"../game/index?goodsId="+n+"&bottomPrice="+this.title_price+"&you="+i})}else t.showToast({icon:"none",title:"开砍数量限制1件"});else t.showToast({icon:"none",title:"请选择规格"})},collect:function(){var o=this;if(this.showCollect){if(!this.hasLogin)return t.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){t.navigateTo({url:"../public/login"})},1e3);t.showToast({icon:"none",title:"收藏成功"},500),this.showCollect=!1}else t.showModal({title:"提示",content:"确定要取消收藏吗？",cancelText:"否",confirmText:"是",success:function(t){o.showCollect=!0}})},joinCart:function(){if(!this.hasLogin)return t.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){t.navigateTo({url:"../public/login"})},1e3);this.goodsInfo.type?this.request({url:i.default.add_car,method:"POST",data:{goods_id:this.data.goods_id,child_id:this.data.id,num:this.goodsInfo.num},success:function(o){0==o.error_code?t.showToast({icon:"none",title:"成功加入购物车"}):t.showToast({icon:"none",title:"请先去登录"})}}):t.showToast({icon:"none",title:"请选择规格"})},toBuy:function(){if(!this.hasLogin)return t.showToast({icon:"none",title:"请先去登录"}),void setTimeout(function(){t.navigateTo({url:"../public/login"})},1e3);this.goodsInfo.type?(this.data.num=this.goodsInfo.num,this.data.old_money=this.goodsInit.market_price,this.data.game="商城",this.data.you=this.goodsInit.you,this.data.title=this.goodsInit.title,t.navigateTo({url:"../order/base/createOrder?goodsInfo="+JSON.stringify(this.data)})):t.showToast({icon:"none",title:"请选择规格"})}},onLoad:function(o){var e=o.goods_id;this.initData(e),t.showShareMenu({withShareTicket:!0,success:function(t){console.log(t)},fail:function(t){console.log(t)}})}};o.default=g}).call(this,e("543d")["default"])},"528a":function(t,o,e){},a2e1:function(t,o,e){"use strict";var n,i=function(){var t=this,o=t.$createElement;t._self._c},s=[];e.d(o,"b",function(){return i}),e.d(o,"c",function(){return s}),e.d(o,"a",function(){return n})},c9c2:function(t,o,e){"use strict";var n=e("528a"),i=e.n(n);i.a},cf62:function(t,o,e){"use strict";e.r(o);var n=e("a2e1"),i=e("1204");for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);e("c9c2");var a,c=e("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);o["default"]=r.exports}},[["0bde","common/runtime","common/vendor"]]]);