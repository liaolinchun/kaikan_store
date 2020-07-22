const domain = "https://www.tiktokshopee.com/";
const interfaces = {
	
	  //#ifndef H5
	//登录注册
	login : domain + "apk/Login/act_login", //登录
	get_yan : domain + "apk/Login/get_yan" , //获取注册验证码
	zhuce : domain + "apk/Login/zhuce" ,//注册
	set_password : domain + "apk/Login/set_password", //设置密码
	get_code : domain + "apk/Login/get_code" ,//修改密码时获取验证码
	edit_password : domain + "apk/Login/edit_password" , //修改密码
	login_out : domain + "apk/Login/logout" , //退出登录
	isLogin: domain + "apk/index/is_online",
	
	// 获取首页数据
	search: domain + "apk/Index/search",
	get_banner: domain + 'apk/Index/get_ad',
	get_bigclass: domain + 'apk/Index/get_bigclass',
	get_hotgoods: domain + 'apk/Index/get_hotgoods',

	//分类
	get_bc_goods: domain + 'apk/Classe/get_bc_goods', //点击一级分类获取商品
	get_goods_detail: domain + 'apk/Classe/get_goods_detail', //获取商品详情规格
	get_goods_assess: domain + 'apk/Classe/goods_assess', //获取商品评价
	add_assess: domain + 'apk/Classe/add_assess', //评价商品

	//订单
	all_order: domain + 'apk/Order/all_order', //获取个人所有订单
	daifu_order: domain + 'apk/Order/daifu_order', //获取个人待付款订单
	daifa_order: domain + 'apk/Order/daifa_order', //待发货订单
	yifa_order: domain + 'apk/Order/yifa_order', //获取已发货订单
	end_order: domain + 'apk/Order/end_order', //已签收已完成订单
	shou_order: domain + 'apk/Order/shou_order', //售后服务订单
	shou: domain + 'apk/Order/shou', //点击确认收货

	//我的
	get_jifen: domain +  'apk/Mine/get_jifen', //积分
	get_news: domain + 'apk/Mine/get_news', //消息
	add_address: domain + 'apk/Mine/add_address', //添加收货地址
	get_address: domain + 'apk/Mine/get_address', //获取收货地址
	del_address: domain + 'apk/Mine/del_address', //删除收货地址
	set_moren: domain + 'apk/Mine/set_moren', //设置默认收货地址
	get_kefu: domain + 'apk/Mine/get_kefu', //获取客服电话
	get_kan: domain + 'apk/Mine/get_kan', //获取用户开砍游戏记录
	del_kan: domain + 'apk/Mine/del_kan', //删除开砍商品
	get_kanPrice: domain + 'apk/Mine/kan_price_all', //获取总砍价金额
	
	

	//购物车
	add_car: domain + 'apk/Car/add_car', //加入购物车
	get_car: domain + 'apk/Car/get_car', //获取购物车的商品
	add_order: domain + 'apk/Car/add_order', //购物车产品中加入订单
	del_car: domain + 'apk/Car/del_car', //删除购物车
	on_buy: domain + 'apk/Car/on_buy', //直接购买
	
	//游戏
	action_kan : domain + 'apk/Play/action_kan' , //发起人进入
	friend_kan : domain + 'apk/Play/friend_kan', //好友通过扫码进入砍砍页面
	set_play : domain + 'apk/Play/set_play' , // 发起游戏&分享帮砍 发起人已经玩过
	help_power : domain + 'apk/Play/help_power' , // 朋友助力
	kan_gou : domain + 'apk/Play/kan_gou' ,//游戏后直接购买
	
	//积分
	shoping_shop : domain + 'apk/Integral/shoping_shop' , //积分商城首页数据
	jifen_goods : domain + 'apk/Integral/jifen_goods' , //积分拍卖商品页
	jifen_log : domain + 'apk/Integral/jifen_log' , //出价记录
	jifen_content : domain + 'apk/Integral/jifen_content' , //评价
	add_content : domain + 'apk/Integral/add_content' , //添加评论
	jifen_order : domain + 'apk/Integral/jifen_order' , //往期成交
    pai_order : domain + 'apk/Integral/pai_order' , //成功拍下生成订单	
	chujia : domain + 'apk/Integral/chujia' , //客户出价
	jifen_buy : domain + 'apk/Xiaopay/gou_ka' , //购买积分
	// #endif
	
}
module.exports = interfaces;
