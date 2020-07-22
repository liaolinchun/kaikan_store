import axios from 'axios'
import Qs from 'qs'

  //#ifdef H5        
uni.showLoading({title:'加载中...'});

axios.interceptors.response.use(function (response) {
    // Do something with response data
		uni.hideLoading();
        return response.data;  
  },
  err => {
    // 对响应错误做些什么
    console.log('err', err.response) // 修改后
    return Promise.reject(err)
  });
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //POST请求头部设置
//请求订单Ment组件的数据接口

const api = "https://www.tiktokshopee.com/";

// 获取首页数据
export let get_banner = (data) => { //获取轮播图
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Index/get_ad',data)
}
export let get_hotgoods = (data) => { //获取热卖商品
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Index/get_hotgoods',data)
}
export let get_bigclass = (data) => { //获取分类名称
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Index/get_bigclass',data)
}
export let search = (data) => { //商品搜索
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Index/search',data)
}

//分类
export let get_bc_goods = (data) => { //点击一级分类获取商品
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Classe/get_bc_goods',data)
}
export let get_goods_detail = (data) => { //获取商品详情规格
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Classe/get_goods_detail',data)
}
export let get_goods_assess = (data) => { //获取商品评价
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Classe/goods_assess',data)
}
export let add_assess = (data) => { //评价商品
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Classe/add_assess',data)
}

//登录注册
export let isLogin = (data) => { //是否登录
  data = Qs.stringify(data)
  return axios.post(api + 'apk/index/is_online',data)
}
export let login = (data) => { //登录
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/act_login',data)
}
export let zhuce = (data) => { //注册
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/zhuce',data)
}
export let set_password = (data) => { //设置密码
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/set_password',data)
}
export let get_yan = (data) => { //获取注册验证码
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/get_yan',data)
}
export let login_out = (data) => { //退出登录
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/logout',data)
}
export let get_code = (data) => { //修改密码时获取验证码
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/get_code',data)
}
export let edit_password = (data) => { //修改密码
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Login/edit_password',data)
}

//订单
export let all_order = (data) => { //获取个人所有订单
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Order/all_order',data)
}

//我的
export let get_jifen = (data) => { //积分
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_jifen',data)
}
export let get_kefu = (data) => { //获取客服电话
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_kefu',data)
}
export let get_news = (data) => { //消息
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_news',data)
}
export let add_address = (data) => { //添加收货地址
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/add_address',data)
}
export let get_address = (data) => { //获取收货地址
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_address',data)
}
export let del_address = (data) => { //删除收货地址
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/del_address',data)
}
export let set_moren = (data) => { //设置默认收货地址
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/set_moren',data)
}
export let get_kan = (data) => { //获取用户开砍游戏记录
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_kan',data)
}
export let del_kan = (data) => { //删除开砍商品
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/del_kan',data)
}
export let get_kanPrice = (data) => { //获取总砍价金额
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Mine/get_kanPrice',data)
}

//购物车
export let add_car = (data) => { //加入购物车
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Car/add_car',data)
}
export let get_car = (data) => { //获取购物车的商品
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Car/get_car',data)
}
export let add_order = (data) => { //购物车产品中加入订单
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Car/add_order',data)
}
export let del_car = (data) => { //删除购物车
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Car/del_car',data)
}
export let on_buy = (data) => { //直接购买
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Car/on_buy',data)
}

//游戏 
export let action_kan = (data) => { //发起人进入
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Play/action_kan',data)
}
export let friend_kan = (data) => { //好友通过扫码进入砍砍页面
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Play/friend_kan',data)
}
export let set_play = (data) => { //发起游戏&分享帮砍 发起人已经玩过
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Play/set_play',data)
}
export let help_power = (data) => { //朋友助力
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Play/help_power',data)
}
export let kan_gou = (data) => { //游戏后直接购买
  data = Qs.stringify(data)
  return axios.post(api + 'apk/Play/kan_gou',data)
}


	// #endif