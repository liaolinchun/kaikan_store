import Vue from 'vue'
import App from './App' 
import store from './store'
import http from './utils/https.js'

import Json from './static/mock/home.json' //测试用数据
import JsonList from './static/mock/listdata.json' //分类测试用数据
import Citys from './static/mock/citys.json' //全国地区三级联动数据



// 网络请求
Vue.prototype.request = http
// axios.defaults.withCredentials = true

//#ifdef H5
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = false; //允许发送Cookie
// #endif

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}	

/*拉取本地静态数据*/
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}
const citys = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Citys[type]);
		}, 500)
	})
}
/*拉取本地分类静态数据*/
const listjson = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(JsonList[type]);
		}, 500)
	})
}

const prePage = ()=>{ //获取屏幕内容
	let pages = getCurrentPages(); 
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.prototype.$api = { json , listjson , prePage ,msg ,citys};
Vue.prototype.$store = store;

// 注册全局组件
import status from './components/status.vue'
Vue.component('page-status', status)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
