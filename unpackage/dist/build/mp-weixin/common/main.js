(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1130:function(t,e,n){"use strict";n.r(e);var o=n("5c48");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("ba0d");var r,i,a,c,f=n("f0c5"),l=Object(f["a"])(o["default"],r,i,!1,null,null,null,!1,a,c);e["default"]=l.exports},"5c48":function(t,e,n){"use strict";n.r(e);var o=n("6f5e"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"6f5e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),u=r(n("6467"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{}},methods:i({},(0,o.mapMutations)(["login","logout"])),onLaunch:function(){var t=this;this.request({url:u.default.isLogin,method:"POST",success:function(e){if(0!=e.error_code)t.logout();else{var n={id:1,mobile:e.tell,nickname:"砍砍用户".concat(e.tell),portrait:"/static/user_img.png"};t.login(n)}}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=c},ba0d:function(t,e,n){"use strict";var o=n("e3a7"),u=n.n(o);u.a},ca22:function(t,e,n){"use strict";(function(t,e){n("1eb0"),n("921b");var o=l(n("66fd")),u=l(n("1130")),r=l(n("e4df")),i=l(n("0f5c")),a=l(n("e9e5")),c=l(n("8627")),f=l(n("90a1"));function l(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.prototype.request=i.default;var p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:n,mask:o,icon:u})},m=function(t){return new Promise(function(e){setTimeout(function(){e(a.default[t])},500)})},b=function(t){return new Promise(function(e){setTimeout(function(){e(f.default[t])},500)})},g=function(t){return new Promise(function(e){setTimeout(function(){e(c.default[t])},500)})},v=function(){var t=getCurrentPages(),e=t[t.length-2];return e.$vm};o.default.prototype.$api={json:m,listjson:g,prePage:v,msg:p,citys:b},o.default.prototype.$store=r.default;var y=function(){return n.e("components/status").then(n.bind(null,"83d2"))};o.default.component("page-status",y),o.default.config.productionTip=!1,u.default.mpType="app";var h=new o.default(s({},u.default));e(h).$mount()}).call(this,n("543d")["default"],n("543d")["createApp"])},e3a7:function(t,e,n){}},[["ca22","common/runtime","common/vendor"]]]);