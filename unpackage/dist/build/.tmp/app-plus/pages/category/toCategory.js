(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/toCategory"],{"49a8":function(t,e,o){"use strict";o.r(e);var n=o("e5b0"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"7c70":function(t,e,o){"use strict";o.r(e);var n=o("f200"),a=o("49a8");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("7d3b");var r,s=o("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=u.exports},"7d3b":function(t,e,o){"use strict";var n=o("f930"),a=o.n(n);a.a},e5b0:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(o("a34a")),i=r(o("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,o,n,a,i,r){try{var s=t[i](r),u=s.value}catch(c){return void o(c)}s.done?e(u):Promise.resolve(u).then(n,a)}function u(t){return function(){var e=this,o=arguments;return new Promise(function(n,a){var i=t.apply(e,o);function r(t){s(i,n,a,r,u,"next",t)}function u(t){s(i,n,a,r,u,"throw",t)}r(void 0)})}}var c=function(){return o.e("pages/category/base/head").then(o.bind(null,"6145"))},d=function(){return o.e("pages/home/base/pageHot").then(o.bind(null,"4342"))},f={data:function(){return{goodsList:[],goodsListCur:[],addCategory:[],showTitle:!1,categoryList:[],currentPage:1,pagesize:7,showCategoryIndex:0,footer_Text:"暂无数据"}},components:{pageHead:c,pageHot:d},onLoad:function(e){if(e.goodsInfo){var o=JSON.parse(e.goodsInfo);this.goodsList=o,this.footer_Text="数据加载中...",this.get_goodsCur()}else if(e.goods_id){this.showCategoryIndex=e.goods_id-1;var n=e.goods_id;t("log",n," at pages\\category\\toCategory.vue:59"),this.initData(n)}},methods:{showCategory:function(t){this.showCategoryIndex=t.id-1,n.showLoading({title:"加载中..."}),this.initData(t.id)},initData:function(){var e=u(a.default.mark(function e(o){var n,r=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.goodsListCur=[],this.request({url:i.default.get_bc_goods,method:"POST",data:{b_class:o},success:function(e){t("log",e," at pages\\category\\toCategory.vue:84"),0==e.error_code?(r.goodsList=e.data,r.footer_Text="数据加载中...",r.get_goodsCur()):r.footer_Text="暂无数据"}}),e.next=4,this.$api.json("data");case 4:n=e.sent,this.categoryList=n.categoryList;case 6:case"end":return e.stop()}},e,this)}));function o(t){return e.apply(this,arguments)}return o}(),get_goodsCur:function(){var t=this,e=this.goodsList;this.addCategory=e.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize),this.addCategory.length>0?(n.hideLoading(),this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.addCategory.length<7&&(this.addCategory.forEach(function(e){t.goodsListCur.push(e)}),this.footer_Text="到底了")):n.hideLoading()}},onPullDownRefresh:function(){setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){n.showLoading({title:"加载中..."},50),this.get_goodsCur(),this.currentPage++}};e.default=f}).call(this,o("0de9")["default"],o("6e42")["default"])},f200:function(t,e,o){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return n})},f930:function(t,e,o){},fd0c:function(t,e,o){"use strict";(function(t){o("1eb0"),o("921b");n(o("66fd"));var e=n(o("7c70"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["fd0c","common/runtime","common/vendor"]]]);