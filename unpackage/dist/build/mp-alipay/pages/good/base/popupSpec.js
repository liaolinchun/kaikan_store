;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/good/base/popupSpec"],{"0325":function(n,t,e){"use strict";var u=e("704b"),o=e.n(u);o.a},"704b":function(n,t,e){},9728:function(n,t,e){"use strict";e.r(t);var u=e("da95"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},d8c3:function(n,t,e){"use strict";var u,o=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},da95:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/counter").then(e.bind(null,"d64e"))},o={props:["spaceInfo","goodsInfo","goodsSpec"],data:function(){return{isShow:"",data:{color_name:"",goods_id:"",id:"",kucun:"",price_one:"",thumbimg:""}}},methods:{hideSpec:function(){this.$emit("func",this.data,!1)},setSelectSpec:function(n){this.data=n},bridge:function(){this.data=this.goodsSpec[0]},minus:function(){this.$emit("minus")},add:function(){this.$emit("add")}},components:{counter:u}};t.default=o},e0d1:function(n,t,e){"use strict";e.r(t);var u=e("d8c3"),o=e("9728");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("0325");var i,a=e("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=r.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'pages/good/base/popupSpec-create-component',
    {
        'pages/good/base/popupSpec-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("e0d1"))
        })
    },
    [['pages/good/base/popupSpec-create-component']]
]);
