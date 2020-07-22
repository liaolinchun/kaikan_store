module.exports = function(param){
    var _self = this, 
        url = param.url,
        method = param.method,
        header = param.header || {},
        data = param.data || {};
    
   
    //请求方式:GET或POST(POST需配置header: {'content-type' : "application/x-www-form-urlencoded"},)
    if(method){
        method = method.toUpperCase();//小写改为大写
        if(method=="POST"){
            header = {'content-type' : "application/x-www-form-urlencoded"};
			
			// #ifdef MP-WEIXIN 
			 header = {'content-type' : "application/x-www-form-urlencoded" , 'Cookie': uni.getStorageSync("sessionid")}; //解决小程序无法获取SESSION问题
			// #endif
		}
     }
    //#ifndef H5
    //用户交互:加载圈
    if (!param.hideLoading) {
        uni.showLoading({title:'加载中...'});
    }
    
    //网络请求
    uni.request({
        url: url,
        method: method || 'GET',
		// xhrFields:{
		//         withCredentials:true
		// },
        header: header,
        data: data,
        success: res => {
            if (res.statusCode && res.statusCode != 200) {//api错误
                uni.showModal({
                    content:"" + res.msg
                });
                return;
            }
			// wx.setStorageSync('cookieKey', res.header['Set-Cookie']);//保存Cookie到Storage
            typeof param.success == "function" && param.success(res.data);
        },
        fail: (e) => {
            uni.showModal({
                content:"" + e.msg,
            });
            typeof param.fail == "function" && param.fail(e.data);
        },
        complete: () => {
            // console.log("网络请求complete");
            setTimeout(function(){
				uni.hideLoading();
			},1000)
            typeof param.complete == "function" && param.complete();
            return;
        }
    });
	// #endif
}

