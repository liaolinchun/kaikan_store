(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/good/base/ratings"],{"11fa":function(t,e,n){"use strict";(function(t){n("1eb0"),n("921b");i(n("66fd"));var e=i(n("f418"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},"1e1e":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},"3d2b":function(t,e,n){"use strict";n.r(e);var i=n("542b"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"41e0":function(t,e,n){},"542b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{labelIndex:0,ratingsList:[],videoContext:null,videoDirection:0,showFullscreenBtn:!0,videoSrc:"",showVideo:!0,clicked_list:[!1,!1,!1,!1,!1]}},onLoad:function(){var e=this;try{var n=t.getStorageSync("comments");n&&(n.forEach(function(t){t.time=e.timestampToTime(t.time)}),this.ratingsList=n)}catch(i){}this.showVideo=!1},onReady:function(e){this.videoContext=t.createVideoContext("myVideo")},methods:{loadRatings:function(t){this.labelIndex=t},showBigImg:function(e,n){t.previewImage({current:e,urls:n})},playVideo:function(t){this.videoSrc=t,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})}),this.showVideo=!0},videoPause:function(){this.videoSrc="",this.showVideo=!1},viderFullscreen:function(t){t.detail.fullScreen?this.videoContext.play():this.videoContext.pause()},videoError:function(t){console.log(t)},timestampToTime:function(t){var e=t.toString();10==e.length&&(e*=1e3);var n=new Date(e),i=n.getFullYear()+"-",o=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",r=n.getDate()+" ",u=n.getHours()+":",c=n.getMinutes()+":",a=n.getSeconds();return i+o+r+u+c+a}}};e.default=n}).call(this,n("c11b")["default"])},8229:function(t,e,n){"use strict";var i=n("41e0"),o=n.n(i);o.a},f418:function(t,e,n){"use strict";n.r(e);var i=n("1e1e"),o=n("3d2b");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("8229");var u,c=n("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=a.exports}},[["11fa","common/runtime","common/vendor"]]]);