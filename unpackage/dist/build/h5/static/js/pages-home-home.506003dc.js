(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"00b0":function(t,e,i){"use strict";i.r(e);var a=i("3179"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"17e8":function(t,e,i){var a=i("b55f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0678c94a",a,!0,{sourceMap:!1,shadowMode:!1})},"1adf":function(t,e,i){"use strict";var a=i("17e8"),n=i.n(a);n.a},"23db":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),o=a(i("a6cb")),s=a(i("4342")),r=a(i("6467")),c=i("444b"),l={data:function(){return{swiperList:[],categoryList:[],currentSwiper:0,hotList:[],showTitle:!0}},components:{pageHeader:o.default,pageHot:s.default},onLoad:function(){this.initData()},methods:{initData:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,i,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.request({url:r.default.get_banner,method:"POST",success:function(t){n.swiperList=t.data}}),this.request({url:r.default.get_hotgoods,method:"POST",success:function(t){n.hotList=t.data}}),this.request({url:r.default.get_bigclass,success:function(t){n.categoryList=t.data}}),t.next=5,(0,c.get_banner)();case 5:return e=t.sent,t.next=8,(0,c.get_hotgoods)();case 8:return i=t.sent,t.next=11,(0,c.get_bigclass)();case 11:a=t.sent,this.swiperList=e.data,this.hotList=i.data,this.categoryList=a.data;case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swiperChange:function(t){this.currentSwiper=t.detail.current},toCategory:function(t){uni.navigateTo({url:"../category/toCategory?goods_id="+t})},toCart:function(){uni.switchTab({url:"../cart/cart"})}}};e.default=l},2975:function(t,e,i){"use strict";var a=i("5053"),n=i.n(a);n.a},3179:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["hotList","showTitle"],data:function(){return{hotLists:this.hotList}},methods:{navToDetailPage:function(t){uni.navigateTo({url:"../good/goods?goods_id="+t.id})}}};e.default=a},3916:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-status"),i("page-header",{on:{func:function(e){arguments[0]=e=t.$handleEvent(e),t.toCart.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"swiper"},[i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.swiperList,function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-image",{attrs:{src:"http://www.tiktokshopee.com"+t.img}})],1)}),1),i("v-uni-view",{staticClass:"indicator"},t._l(t.swiperList,function(e,a){return i("v-uni-view",{key:a,staticClass:"dots",class:{on:t.currentSwiper>=a}})}),1)],1)],1),i("v-uni-view",{staticClass:"category-list"},t._l(t.categoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"category",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCategory(e.id)}}},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:"http://www.tiktokshopee.com"+e.tubiao}})],1),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.b_name))])],1)}),1),i("page-hot",{attrs:{showTitle:t.showTitle,hotList:t.hotList}})],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},4342:function(t,e,i){"use strict";i.r(e);var a=i("4a43"),n=i("00b0");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1adf");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2c29ac9c",null,!1,a["a"],s);e["default"]=c.exports},"4a43":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.showTitle?i("v-uni-view",{staticClass:"hot"},[i("v-uni-text",{staticClass:"title"},[t._v("热卖推荐")])],1):t._e(),t.showTitle?t._e():i("v-uni-view",{staticStyle:{height:"30upx"}}),i("v-uni-view",{staticClass:"guess-section"},t._l(t.hotList,function(e,a){return i("v-uni-view",{key:a,staticClass:"guess-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:"http://www.tiktokshopee.com"+e.img,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"fontTitle"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",{staticClass:"old"},[t._v(t._s(e.market_price))]),i("v-uni-text",{staticClass:"new"},[t._v(t._s(e.price))])],1),i("v-uni-view",{staticClass:"integral"},[i("v-uni-text",[t._v("赠"+t._s(e.jifen)+"积分")])],1)],1)}),1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},5053:function(t,e,i){var a=i("6e73");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4cd58a93",a,!0,{sourceMap:!1,shadowMode:!1})},"6e73":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-03357cfa]{background-color:#f2f2f2}.swiper[data-v-03357cfa]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.swiper .swiper-box[data-v-03357cfa]{width:100%;height:30.7vw;overflow:hidden;box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);position:relative;z-index:1}.swiper .swiper-box uni-swiper[data-v-03357cfa]{width:100%;height:30.7vw}.swiper .swiper-box uni-swiper uni-swiper-item uni-image[data-v-03357cfa]{width:100%;height:40vw}.swiper .swiper-box .indicator[data-v-03357cfa]{position:absolute;bottom:%?20?%;left:%?20?%;background-color:hsla(0,0%,100%,.4);width:%?150?%;height:%?5?%;border-radius:%?3?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.swiper .swiper-box .indicator .dots[data-v-03357cfa]{width:%?0?%;background-color:#fff;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.swiper .swiper-box .indicator .dots.on[data-v-03357cfa]{width:25%}.category-list[data-v-03357cfa]{width:100%;padding:0 0 %?30?% 0;border-bottom:solid %?2?% #f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff}.category-list .category[data-v-03357cfa]{width:16%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:%?-10?%}.category-list .category .img[data-v-03357cfa]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.category-list .category .img uni-image[data-v-03357cfa]{width:13vw;height:13vw}.category-list .category .text[data-v-03357cfa]{margin-top:%?10?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#3c3c3c}.banner[data-v-03357cfa]{width:100%}.banner uni-image[data-v-03357cfa]{width:100%;height:36vw;border-radius:%?4?%;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3)}.promotion[data-v-03357cfa]{width:92%;margin:%?10?% 4% %?30?% 4%}.promotion .text[data-v-03357cfa]{width:100%;height:%?60?%;font-size:%?34?%;font-weight:600;margin:%?10?%}.promotion .list[data-v-03357cfa]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.promotion .list .column[data-v-03357cfa]{width:43%;padding:%?15?% 3%;background-color:#ebf9f9;border-radius:%?10?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.promotion .list .column .top[data-v-03357cfa]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?5?%}.promotion .list .column .top .title[data-v-03357cfa]{font-size:%?30?%}.promotion .list .column .left[data-v-03357cfa]{width:50%;height:18.86vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between}.promotion .list .column .left .ad[data-v-03357cfa]{margin-top:%?5?%;width:100%;font-size:%?22?%;color:#acb0b0}.promotion .list .column .left .into[data-v-03357cfa]{width:100%;font-size:%?24?%;color:#aaa;margin-bottom:%?5?%}.promotion .list .column .right[data-v-03357cfa]{width:18.86vw;height:18.86vw}.promotion .list .column .right uni-image[data-v-03357cfa]{width:18.86vw;height:18.86vw}body.?%PAGE?%[data-v-03357cfa]{background-color:#f2f2f2}',""])},7402:function(t,e,i){"use strict";i.r(e);var a=i("23db"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},b55f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.hot[data-v-2c29ac9c]{width:100%;height:%?50?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hot .title[data-v-2c29ac9c]{width:100%;font-size:%?24?%;text-align:center;letter-spacing:8px;font-weight:800;font-family:Microsoft YaHei}\n/* 热卖商品 */.guess-section[data-v-2c29ac9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.guess-section .guess-item[data-v-2c29ac9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?20?%}.guess-section .guess-item[data-v-2c29ac9c]:nth-child(2n+1){margin-right:4%}.guess-section .image-wrapper[data-v-2c29ac9c]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-2c29ac9c]{width:100%;height:100%;opacity:1}.guess-section .fontTitle[data-v-2c29ac9c]{width:100%;font-size:%?24?%;line-height:%?30?%;height:%?60?%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;white-space:normal!important;-webkit-line-clamp:2;-webkit-box-orient:vertical}.guess-section .price[data-v-2c29ac9c]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.guess-section .price .old[data-v-2c29ac9c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;padding:0 %?15?% 0 %?5?%;color:#999;line-height:%?40?%;text-decoration:line-through}.guess-section .price .new[data-v-2c29ac9c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;padding:0 %?15?% 0 %?5?%;color:#ff675f;line-height:%?40?%;font-weight:500;text-align:right}.guess-section .integral[data-v-2c29ac9c]{width:100%;height:%?50?%;background-color:#fdeb46;font-size:%?18?%;line-height:%?50?%;text-align:center}',""])},ce4e:function(t,e,i){"use strict";i.r(e);var a=i("3916"),n=i("7402");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("2975");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"03357cfa",null,!1,a["a"],s);e["default"]=c.exports}}]);