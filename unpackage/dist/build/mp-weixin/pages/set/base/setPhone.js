(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/base/setPhone"],{"3b3b":function(t,e,n){"use strict";var s=n("b8e4"),o=n.n(s);o.a},"6f4d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(n("6467"));function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{phone:"",verify:"",password:"",logining:!0}},methods:{update:function(){var e=this,n=/^[1][3,4,5,7,8][0-9]{9}$/;if(n.test(this.phone)){var o=this.phone;this.request({url:s.default.get_code,method:"POST",data:{tell:o},success:function(n){0===n.error_code&&(e.logining=!1),t.showToast({icon:"success",title:"已发送,请注意查收"},500)}})}else t.showToast({title:"号码错误",icon:"none",duration:500}),t.vibrate({success:function(){console.log("success")}})},setUpdate:function(){this.password&&this.verify?this.request({url:s.default.edit_password,method:"POST",data:{code:this.verify,tell:this.phone,password:this.password},success:function(e){0==e.error_code?(t.showToast({icon:"success",title:"成功修改密码!"},500),t.navigateBack()):t.showToast({icon:"success",title:e.data},500)}}):t.showToast({title:"请输密码或验证码",size:26,icon:"none",duration:500})}}};e.default=u}).call(this,n("543d")["default"])},"8e4a":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");s(n("66fd"));var e=s(n("fb11"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a21e:function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return s})},b8e4:function(t,e,n){},bb50:function(t,e,n){"use strict";n.r(e);var s=n("6f4d"),o=n.n(s);for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);e["default"]=o.a},fb11:function(t,e,n){"use strict";n.r(e);var s=n("a21e"),o=n("bb50");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("3b3b");var a,i=n("f0c5"),c=Object(i["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=c.exports}},[["8e4a","common/runtime","common/vendor"]]]);