<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 头部 -->
		<goods-header></goods-header>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="(swiper , index) in swiperList" @tap="showBigImg(swiper ,swiperList , true)" :key="index">
					<image :src="'http://www.tiktokshopee.com' +swiper"></image>
				</swiper-item>
			</swiper>
			<view class="collect iconfont" v-if="showCollect" @tap="collect">&#xe607;</view>
			<view class="collect_on iconfont" v-else @tap="collect">&#xe608;</view>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<view class="price-box">
				<view class="price">{{title_price}}</view>
				<view class="cur">起</view>
				<view class="old">￥{{goodsInit.market_price}}</view>
				<!-- <view class="soldOut">累计已售{{goodsInfo.soldOut}}件</view> -->
			</view>
			<view class="title">
				{{goodsInit.title}}
			</view>
			<view class="integral">--该商品购后可赠获 <view class="cur">{{goodsInit.jifen}}</view>积分--</view>
		</view>
		<!-- 选择 颜色 分类-->
		<view class="select-box">
			<view class="title"><text>规格</text></view>
			<view class="color">{{goodsInfo.selectdata}}</view>
			<view class="icon iconfont" @tap="showSpec">&#xe602;</view>
		</view>
		<!-- 选择 包邮 分类-->
		<view class="select-box">
			<view class="title"><text>发货</text></view>
			<view class="color iconfont"><text style="padding-right: 25upx;">&#xe60b;广东广州 </text> 快递 : <text>{{goodsInit.you}}</text></view>
			<view class="soldOut iconfont">累计已售{{goodsInfo.soldOut || '0'}}件</view>
		</view>
		<!-- 选择规格 模态框 -->
		<popup-spec @add="add" @minus="minus" @func="setSelect" ref="Series" :goodsSpec="goodsSpec" :goodsInfo='goodsInfo'
		 :spaceInfo='spaceInfo'></popup-spec>
		 
		<!-- 商品评价-->
		<goods-eval :goodsData="goodsData"></goods-eval>
		<!-- 商品详情-->
		<view class="description">
			<view class="title">商品详情 </view>
			<view class="content" v-for="(item , index) in detailsImg" @tap="showBigImg(item.img_url , detailsImg)"  :key="index">
				<image  :src="'http://www.tiktokshopee.com' +item.img_url"></image>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="box1" @tap="joinCart">
				<view class="icon iconfont">&#xe601;</view>
				<view class="iconFont">加入购物车</view>
			</view>
			<view class="box2" @tap="toBuy">
				<view class="icon2">￥{{goodsInit.price}}</view>
				<view class="iconFont2">直接购买</view>
			</view>
			<view class="box3">低至</view>
			<view class="box4" @tap="toGame(goodsInfo)">
				<view class="icon4">￥{{title_price}}</view>
				<view class="iconFont4">发起开砍</view>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsHeader from "./goodsHeader.vue"
	import interfaces from '../../utils/interface.js'
	import popupSpec from './base/popupSpec.vue'
	import goodsEval from './goodsEval.vue'
	//#ifdef H5
	import {get_goods_detail , get_goods_assess ,add_car} from '../../utils/hApi.js'
	// #endif
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				title_price: '', //最低价格
				goodsInit: {}, //初始显示
				swiperList: [], //轮播图
				detailsImg : [], //详情图
				goodsSpec: [], //商品规格
				goodsInfo: { //选中后的商品信息
					num: 1,
					type: '',
					price: '',
					id : '',
					selectdata: '请选择 颜色 规格' //默认规格		
				},
				data: [], //选中商品
				goodsData: [],
				currentSwiper: 0, //轮播图下标
				spaceInfo: {
					showSpace: false
				}, // 是否展示选择规格遮罩
				entTime: '',
				ids: [],
				key: '',
				showCollect: true
			}
		},
		components: {
			goodsHeader,
			popupSpec,
			goodsEval
		},
		computed: {
			...mapState(['hasLogin'])
		},
		methods: {
			async initData(e) {
				this.request({
					url: interfaces.get_goods_detail, //取商品详情规格 e商品id
					method: "POST",
					data: {
						goods_id: e
					},
					success: ((res) => {
						console.log(res)
						this.title_price = res.goods[0].price;
						this.goodsInit = res.goods[0]; //初始化信息
						this.detailsImg = res.img_url; //详情图
						res.data.forEach((item) => {
							this.swiperList.push(item.thumbimg) //提取轮播图
						})
						this.goodsSpec = res.data; //模态框规格
					})
				});
				this.request({
					url: interfaces.get_goods_assess, //取商品评价 e商品id
					method: "POST",
					data: {
						goods_id: e
					},
					success: ((res) => {
						if (res.error_code == 0) {
							res.data.forEach((item) => {
							  item.time =  this.timestampToTime(item.time)
							})
							this.goodsData = res.data;
							console.log(this.goodsData)
						}
					})
				});
				//#ifdef H5
				let dataGoods = {
					goods_id : e
				}
				get_goods_detail(dataGoods).then((res) => {
			
					if(res.error_code == 0){
						this.title_price = res.goods[0].price;
						this.goodsInit = res.goods[0]; //初始化信息
						res.data.forEach((item) => {
							this.swiperList.push(item.thumbimg) //提取轮播图
						})
						this.goodsSpec = res.data; //模态框规格
					}
				})
				get_goods_assess(dataGoods).then((res) => {
					
					if (res.error_code == 0) {
						this.goodsData = res.data;
						res.data.forEach((item) => {
						  item.time =  this.timestampToTime(item.time)
						})
						this.goodsData = res.data;
					}
				})
				// #endif
			},
			timestampToTime(cjsj) { //转换时间
				let time = cjsj.toString()
				if(time.length == 10){
					time = time * 1000
				}
				var date = new Date(time) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-'
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
				var D = date.getDate() + ' '
				var h = date.getHours() + ':'
				var m = date.getMinutes() + ':'
				var s = date.getSeconds()
				return Y + M + D
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			setSelect(data, show) { //传入子组件的方法
				this.data = data;
				this.goodsInfo.type = data.color_name; //选中规格
				this.goodsInfo.id = data.id; //选中商品id
				this.goodsInfo.price = data.price_one * this.goodsInfo.num; //选中商品价格
				this.goodsInit.price = data.price_one * this.goodsInfo.num; //选中商品价格
				this.goodsInit.market_price = this.goodsInit.market_price * this.goodsInfo.num;
				this.spaceInfo.showSpace = show;
				this.goodsInfo.selectdata = `已选择 : ${data.color_name} ，数量 : ${this.goodsInfo.num}`;
			},
			showBigImg(src, srclist , isSwiper){ //预览大图
				 let srcInit =  'https://www.tiktokshopee.com' +  src ;
				 let imgList = [];
				 if(isSwiper){ //查看轮播图
					srclist.forEach((item) => {
						 imgList.push('https://www.tiktokshopee.com' + item) //http微信小程序真机不显示 ，改成https即可
					})
				 }
				 else{  //查看详情图
					 srclist.forEach((item) => {
					 	 imgList.push('https://www.tiktokshopee.com' + item.img_url)
					 })
				 }
				 console.log(imgList)
				 uni.previewImage({
					current: srcInit,
					urls: imgList,
				})
			},
			add() {
				this.goodsInfo.num++;
			},
			minus() {
				if (this.goodsInfo.num <= 1) {
					return;
				}
				this.goodsInfo.num--;
			},
			//显示选择
			showSpec() {
				this.spaceInfo.showSpace = 'ture';
				this.$refs.Series.bridge() //触发子组件方法
			},
			toGame(e) {
				console.log(e , '游戏')
				e.you = this.goodsInit.you;
				if (!this.hasLogin) {

					uni.showToast({
						icon: "none",
						title: "请先去登录"
					})
					setTimeout(function() {
						uni.navigateTo({
							url: '../public/login'
						})
					}, 1000)
					return;
				} else if (!this.goodsInfo.type) {
					uni.showToast({
						icon: "none",
						title: "请选择规格"
					})
					return;
				}
				else if (this.goodsInfo.num != 1) {
					uni.showToast({
						icon: "none",
						title: "开砍数量限制1件"
					})
					return;
				}
				// else if (parseFloat(e.price) <= 9.99) {
				// 	uni.showToast({
				// 		icon: "none",
				// 		title: "低价过低,不可开砍"
				// 	})
				// 	return;
				// }

				let price = e.price;
				uni.setStorageSync('goodsPrice', JSON.stringify(price)); //本地存储用户信息
				
				let id = this.goodsInfo.id;
				let you = this.goodsInit.you;
				uni.navigateTo({
					url: '../game/index?goodsId=' + id + '&bottomPrice=' + this.title_price + '&you=' + you
				})
				// uni.navigateTo({
				// 	url: '../game/index?goodsId=' + 9.99
				// })
			},
			collect() { //点击收藏
				if (this.showCollect) { //未收藏
					if (!this.hasLogin) {

						uni.showToast({
							icon: "none",
							title: "请先去登录"
						})
						setTimeout(function() {
							uni.navigateTo({
								url: '../public/login'
							})
						}, 1000)
						return;
					}
					uni.showToast({
						icon: "none",
						title: "收藏成功"
					}, 500)
					this.showCollect = false;
				} else { //已收藏
					uni.showModal({
						title: '提示',
						content: '确定要取消收藏吗？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							this.showCollect = true;
						}
					})
				}
			},
			joinCart() { //加入到购物车
				if (!this.hasLogin) {

					uni.showToast({
						icon: "none",
						title: "请先去登录"
					})
					setTimeout(function() {
						uni.navigateTo({
							url: '../public/login'
						})
					}, 1000)
					return;
				}
				// 1.规格
				else if (!this.goodsInfo.type) {
					uni.showToast({
						icon: "none",
						title: "请选择规格"
					})
					return;
				}
				// console.log(this.data)
				//发起网络请求
				this.request({
					url: interfaces.add_car, //加入购物车
					method: "POST",
					data: {
						goods_id: this.data.goods_id, //商品id
						child_id: this.data.id, //商品规格id
						num: this.goodsInfo.num, //商品数量
					},
					success: ((res) => {
						if (res.error_code == 0) {
							uni.showToast({
								icon: "none",
								title: "成功加入购物车"
							})
						} else {
							uni.showToast({
								icon: "none",
								title: "请先去登录"
							})
						}
					})
				});
				//#ifdef H5
				let data_cat = {
					goods_id: this.data.goods_id, //商品id
					child_id: this.data.id, //商品规格id
					num: this.goodsInfo.num, //商品数量
				}
				add_car(data_cat).then((res) => {
					if (res.error_code == 0) {
						uni.showToast({
							icon: "none",
							title: "成功加入购物车"
						})
					} else {
						uni.showToast({
							icon: "none",
							title: "请先去登录"
						})
					}
				})
				//#endif
			},
			toBuy() { //直接购买
				if (!this.hasLogin) {

					uni.showToast({
						icon: "none",
						title: "请先去登录"
					})
					setTimeout(function() {
						uni.navigateTo({
							url: '../public/login'
						})
					}, 1000)
					return;
				} else if (!this.goodsInfo.type) {
					uni.showToast({
						icon: "none",
						title: "请选择规格"
					})
					return;
				}
				this.data.num = this.goodsInfo.num;
				this.data.old_money = this.goodsInit.market_price;
				this.data.game = '商城';
				this.data.you = this.goodsInit.you;
				this.data.title = this.goodsInit.title;
				// this.data.mark =
				console.log(this.data , '6666')
				uni.navigateTo({
					url: "../order/base/createOrder?goodsInfo=" + JSON.stringify(this.data)
				})
			},
		},
		onLoad(option) {
			let e = option.goods_id;
			console.log(e)
			this.initData(e);
			//#ifdef MP-WEIXIN
			// wx.showShareMenu的真正作用，是控制是否显示转发分享菜单在 "...”菜单中，而不是直接弹出分享界面。
			
			// wx.showShareMenu 的参数 withShareTicket 为 true 时，点击模拟器右上角菜单后出现的转发按钮，会出现一个测试群列表
			
			uni.showShareMenu({ //
				withShareTicket : true,
				success : function(res){
					console.log(res)
				},
				fail : function(res){
					console.log(res)
				}
			})
			//#endif
		}
	}
</script>

<style lang="scss">
	.status {
		/*  #ifdef  APP-PLUS  */
		opacity: 0;
		/*  #endif  */
	}

	page {
		background-color: #F2F2F2;
	}

	/*<!-- 轮播图-->*/
	.swiper-box {
		position: relative;
		width: 100%;
		height: 90vw;

		swiper {
			width: 100%;
			height: 90vw;

			swiper-item {
				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);

		}

		.collect,
		.collect_on {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40upx;
			font-size: 38upx;
			position: absolute;
			bottom: 20upx;
			left: 20upx;
			padding: 0 25upx;
			border-radius: 40upx;
			background-color: rgba(255, 255, 255, 0.7);
		}

		.collect_on {
			background-color: rgba(0, 0, 0, 0.2);
			color: #D81E06;
		}
	}

	/*<!-- 标题 价格 -->*/
	.info-box {
		width: 92%;
		padding: 10upx 4% 20upx 4%;
		background-color: #fff;
		margin-bottom: 15upx;
		border-bottom-left-radius: 40upx;
		border-bottom-right-radius: 40upx;
	}

	.goods-info {
		.price-box {
			display: flex;
			align-items: center;

			.price {
				font-size: 36upx;
				font-weight: 500;
				color: #FF3366;
				line-height: 46upx;
			}

			.cur {
				font-size: 22upx;
				color: #FF3366;
				padding-left: 10upx;
				padding-top: 10upx;
			}

			.old {
				font-size: 28upx;
				margin-top: 10upx;
				margin-left: 15upx;
				color: #999;
				text-decoration: line-through;
			}

			.soldOut {
				width: 100%;
				text-align: right;
				font-size: 22upx;
				color: #aaa;
			}
		}

		.title {
			font-size: 28upx;
			color: #333;
			font-weight: 600;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: normal !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.integral {
			width: 100%;
			height: 10vw;
			display: flex;
			background-color: #FEFAB0;
			font-size: 18upx;
			margin-top: 10upx;
			line-height: 10vw;
			border-radius: 10upx;
			align-items: center;
			justify-content: center;

			.cur {
				color: #FF6665;
				padding: 0 10upx;
			}
		}
	}

	/*<!-- 选择 -->*/
	.select-box {
		width: 94%;
		height: 10vw;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 0 3%;

		.title {
			font-size: 30upx;
			width: 15%;
		}

		.color {
			width: 60%;
			font-size: 26upx;
			line-height: 28upx;
			color: #999;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: normal !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.icon {
			width: 15%;
			color: #ccc;
			font-size: 55upx;
			position: absolute;
			right: 20upx;
			text-align: right;
		}

		.soldOut {
			color: #ccc;
			font-size: 24upx;
			position: absolute;
			right: 20upx;
			text-align: right;
		}
	}

	/*详情页*/
	.description {
		padding-bottom: 100upx;

		.title {
			margin-top: 5upx;
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			display: flex;
			font-size: 26upx;
			text-align: left;
			color: #333;
			text-indent: 20upx;
			font-weight: 550;
			background-color: #fff;
		}

		.content {
			text-align: center;
			display: flex;
			flex-wrap: wrap;
			image {
				width: 100%;
				// margin-bottom: 5upx;
			}
		}

	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 100%;
		height: 99upx;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.box1,
		.box2,
		.box3,
		.box4 {
			display: flex;
			flex-direction: column; //子元素竖排
		}

		.box1 {
			width: 30%;
			height: 100%;
			background-color: #FFFFFF;

			.icon {
				height: 65%;
				font-size: 55upx;
				text-align: center;
				color: #999;
				padding-top: 10upx;
				line-height: 49upx;
			}

			.iconFont {
				font-size: 24upx;
				text-align: center;
				line-height: 40upx;
			}
		}

		.box2 {
			width: 30%;
			height: 100%;
			background-color: #00FFCC;

			.icon2 {
				height: 50%;
				font-size: 35upx;
				font-weight: 600;
				text-align: center;
				color: #999;
				padding-top: 10upx;
				line-height: 49upx;
			}

			.iconFont2 {
				height: 50%;
				font-size: 24upx;
				text-align: center;
				line-height: 30upx;
				color: #999;
			}
		}

		.box3 {
			width: 10%;
			height: 100%;
			background-color: #B81A22;
			color: #FFFFFF;
			font-size: 28upx;
			writing-mode: vertical-lr;
			text-align: center;
			line-height: 70upx;
		}

		.box4 {
			width: 30%;
			height: 100%;
			background-color: #E6212A;

			.icon4 {
				height: 50%;
				font-size: 35upx;
				font-weight: 600;
				text-align: center;
				color: #fff;
				padding-top: 10upx;
				line-height: 49upx;
			}

			.iconFont4 {
				height: 50%;
				font-size: 24upx;
				text-align: center;
				line-height: 30upx;
				color: #fff;
			}
		}
	}
</style>
