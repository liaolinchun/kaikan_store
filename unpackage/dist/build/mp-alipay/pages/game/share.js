;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/game/share"],{"0718":function(n,t,o){"use strict";o.r(t);var e=o("642f"),u=o("80b4");for(var a in u)"default"!==a&&function(n){o.d(t,n,function(){return u[n]})}(a);o("9ca9");var r,c=o("f0c5"),f=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=f.exports},"361d":function(n,t,o){},5284:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e(o("6467"));function e(n){return n&&n.__esModule?n:{default:n}}var u=function(){return o.e("components/wechat").then(o.bind(null,"4fd4"))},a={props:["goodsInfo","money","kanId","child"],data:function(){return{wechatShow:!1}},components:{wechat:u},onLoad:function(){},methods:{handleSavePhotos:function(){this.goodsInfo.game="拍卖",this.goodsInfo.num=1,this.goodsInfo.kanMoney=this.money,this.goodsInfo.kan_id=this.kanId,n.navigateTo({url:"../order/base/createOrder?goodsInfo="+JSON.stringify(this.goodsInfo)})},share:function(){this.wechatShow=!0}}};t.default=a}).call(this,o("c11b")["default"])},"642f":function(n,t,o){"use strict";var e,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];o.d(t,"b",function(){return u}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return e})},"80b4":function(n,t,o){"use strict";o.r(t);var e=o("5284"),u=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=u.a},"9ca9":function(n,t,o){"use strict";var e=o("361d"),u=o.n(e);u.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/game/share-create-component',
    {
        'pages/game/share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("0718"))
        })
    },
    [['pages/game/share-create-component']]
]);
