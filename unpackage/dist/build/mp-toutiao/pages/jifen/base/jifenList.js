(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jifen/base/jifenList"],{"110c":function(t,n,e){"use strict";e.r(n);var o=e("b2e9"),a=e("861c");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("3270");var c,i=e("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},3270:function(t,n,e){"use strict";var o=e("e89c"),a=e.n(o);a.a},"861c":function(t,n,e){"use strict";e.r(n);var o=e("c96a"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},b2e9:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return o})},c96a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:["categoryList"],data:function(){return{showCategoryIndex:0,time:9}},methods:{showCategory:function(t){this.showCategoryIndex=t.id-1},navToGoods:function(){console.log("156"),t.navigateTo({url:"../../packageA/pages/aucGoods/aucGoods"})},get_time:function(){var t=this;setInterval(function(){t.time--,t.time<0&&(t.time=9)},1e3)}},onLoad:function(){this.get_time()}};n.default=e}).call(this,e("f266")["default"])},e89c:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/jifen/base/jifenList-create-component',
    {
        'pages/jifen/base/jifenList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("110c"))
        })
    },
    [['pages/jifen/base/jifenList-create-component']]
]);
