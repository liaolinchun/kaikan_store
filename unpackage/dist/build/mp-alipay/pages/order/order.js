(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/order"],{"05e2":function(t,e,n){"use strict";n.r(e);var r=n("155e"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"155e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),o=a(n("6467"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,u,"next",t)}function u(t){i(a,r,o,s,u,"throw",t)}s(void 0)})}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/popupPay")]).then(n.bind(null,"70e2"))},c={data:function(){return{orderNav:["全部","待付款","代发货","待收货","已完成"],showOrderIndex:0,showOrder:[],orderLists:[],dfk_order:[],dfh_order:[],dsh_order:[],end_order:[],loadingText:"正在加载....",loading:!0,showPay:!1,sum:"",order_num:""}},components:{popupPay:u},onShow:function(){},methods:{showOrderNav:function(t){switch(this.showOrderIndex=t,t){case 0:this.showOrder=this.orderLists;break;case 1:this.showOrder=this.dfk_order;break;case 2:this.showOrder=this.dfh_order;break;case 3:this.showOrder=this.dsh_order;break;case 4:this.showOrder=this.end_order;break}},initData:function(){var t=s(r.default.mark(function t(){var e=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.request({url:o.default.all_order,method:"POST",success:function(t){0==t.error_code&&(e.orderLists=t.data,e.showOrder=t.data,t.data.forEach(function(t){t.time=e.timestampToTime(t.time)}),e.dfk_order=t.data.filter(function(t){return"待付款"===t.state_name}),e.dfh_order=t.data.filter(function(t){return"待发货"===t.state_name}),e.dsh_order=t.data.filter(function(t){return"待收货"===t.state_name}),e.end_order=t.data.filter(function(t){return"已完成"===t.state_name}),e.loading=!1)}});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),navTo:function(e){"待付款"==e.state_name?t.navigateTo({url:"../pay/toPay?goodsInfo="+JSON.stringify(e)}):"待收货"==e.state_name||"待发货"==e.state_name?t.navigateTo({url:"../pay/endOrder?goodsInfo="+JSON.stringify(e)}):"已完成"==e.state_name&&t.navigateTo({url:"../pay/endOrder?goodsInfo="+JSON.stringify(e)})},toSale:function(e){t.navigateTo({url:"./base/afterSale"})},toComment:function(e){if("已完成"!=e.state_name)return"待付款"==e.state_name?(this.order_num=e.order_num,this.sum=e.all_price,this.showPay=!0,void this.$refs.Series.Payment()):void("提醒发货"==e.iconTitle?(t.showLoading({title:"发送中..."}),setTimeout(function(){t.hideLoading(),setTimeout(function(){t.showToast({icon:"success",title:"已成功提示商家"})},200)},1e3)):"删除订单"==e.iconTitle?t.showModal({title:"提示",content:"确定要删除订单吗？",cancelText:"否",confirmText:"是",success:function(t){}}):"确认收货"==e.iconTitle&&t.showModal({title:"确认收货",content:"确定订单吗？",cancelText:"否",confirmText:"是",success:function(e){setTimeout(function(){t.showToast({icon:"success",title:"订单已完成"})},200)}}));t.navigateTo({url:"./base/orderComment?goodsInfo="+JSON.stringify(e)})},setPay:function(t){this.showPay=t},timestampToTime:function(t){var e=t.toString();10==e.length&&(e*=1e3);var n=new Date(e),r=n.getFullYear()+"-",o=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",a=n.getDate()+" ",i=n.getHours()+":",s=n.getMinutes()+":",u=n.getSeconds();return r+o+a+i+s+u}},onLoad:function(){this.initData()}};e.default=c}).call(this,n("c11b")["default"])},"2d29":function(t,e,n){"use strict";n.r(e);var r=n("5251"),o=n("05e2");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("bf4d");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=u.exports},5251:function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"846c":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");r(n("66fd"));var e=r(n("2d29"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},"9c60":function(t,e,n){},bf4d:function(t,e,n){"use strict";var r=n("9c60"),o=n.n(r);o.a}},[["846c","common/runtime","common/vendor"]]]);