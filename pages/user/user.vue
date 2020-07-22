<template>
	<view>
		<!-- 状态栏 -->
		<page-status ></page-status>
		<!-- 导航条 -->
		<view class="user-header">
			<view class="info">
				<view class="img">
					<image :src="userInfo.portrait || '../../static/user_img.png'"></image>
				</view>
				<view class="name">
					<view>{{userInfo.nickname || '游客'}}</view>
					<view class="cur">ID {{userInfo.mobile || '用户未登录'}}</view>
				</view>
			</view>
			<view class="icon iconfont" @tap="navTo('../set/set')">&#xe76c;</view>
		</view>
		<!--积分-->
		<view class="total">
			<view class="type">
				<view class="cur">{{kan_priceAll || '0'}}</view>
				<view>已砍金额</view>
			</view>
			<view class="type">
				<view class="cur">{{jifen || '0'}}</view>
				<view>积分</view>
			</view>
			<view class="type">
				<view class="cur">0</view>
				<view>礼物卡</view>
			</view>
		</view>
		<!---->
		<view>
			<view class="list-cell cur" @tap="navTo('../order/order')" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">订单</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
			<view class="list-cell" @tap="navTo('./base/gameOrder')" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">我的砍价</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
		</view>
		<view class="news">
			<view class="list-cell" @tap="offInfo(true)" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">消息</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
			<view class="service" v-if="InfoShow">
				<view class="box1 iconfont">物流信息 <text @tap="offInfo(false)" class="off">&#xe654;</text></view>
				<!-- <view class="box2">{{user_info}}</view> -->
				<view class="box3"> </view>
				<view class="box4">{{user_info}}</view>
			</view>
			<view class="list-cell" @tap="navTo('../address/address')" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">收货地址</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
			<view class="list-cell" @tap="off(true)" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">客服</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
			<view class="service" v-if="serviceShow">
				<view class="box1 iconfont">客服 <text @tap="off(false)" class="off">&#xe654;</text></view>
				<view class="box2">{{user_phone}}</view>
				<view class="box3">服务时间</view>
				<view class="box4">9: 30 - 18: 30</view>
			</view>
			<view class="list-cell" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit">常见问题</text>
				<text class="icon iconfont">&#xe76c;</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import 	interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {
		get_jifen,
		get_news,
		get_kefu,
		get_kanPrice
	} from '../../utils/hApi.js'
	// #endif
	export default{
		data(){
			return{
				serviceShow : false,
				InfoShow : false,
				jifen : 0,
				kan_priceAll : '',
				user_info : '',
				user_phone : '',	
			}
		},
		computed: {
			...mapState(['hasLogin' , 'userInfo'])
		},
		methods:{
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({
					url
				})
			},
			off(status){ //关闭客服
				this.serviceShow = status;
			},
			offInfo(status){ //
				
				 this.InfoShow = status;
				// 跳转 H5 支付
				// let url = 'http://www.mamamohe.cn/wx/pay.php';
				// let url = 'http://www.mamamohe.cn/zfb/alipay/index.php';
				// void plus.runtime.openWeb(url , function(){
				// 	console
				// })
			},
			async initData(){
				this.request({
					url: interfaces.get_jifen, //获取用户积分
					method: "POST",
					success: ((res) => {
						console.log(res)
						if(res.err_code == 1){
							this.jifen = res.data;
						}
					})
				});
				this.request({
					url: interfaces.get_news, //获取用户消息
					method: "POST",
					success: ((res) => {
						console.log(res)
						this.user_info = res.data;
					})
				});
				this.request({
					url: interfaces.get_kefu, //获取客服电话
					method: "POST",
					success: ((res) => {
						this.user_phone = res.data;
					})
				});
				this.request({
					url: interfaces.get_kanPrice, //获取砍价金额
					method: "POST",
					success: ((res) => {
						if(res.error_code == 0){
							this.kan_priceAll = res.data;
						}
					})
				})
				//#ifdef H5
				get_jifen().then((res) => {
					if(res.err_code == 0){
						this.jifen = res.data;
					}
				})
				get_news().then((res) => {
					this.user_info = res.data;
				})
				get_kefu().then((res) => {
					this.user_phone = res.data;
				})
				get_kanPrice().then((res) => {
					this.kan_priceAll = res.data;
				})
				//#endif
			}
		},
		onLoad() {
			this.initData()
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				this.initData();
			}, 1000);
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.user-header{
		width: 92%;
		height: 18vw;
		padding:  5vw 4% 2vw 4%;
		display: flex;
		background-color: #fff;
		align-items: center;
		justify-content: space-between;
		.icon{
			font-size: 46upx;
			color: #999;
			font-weight: 600;
			transform:rotate(180deg);
		}
		.info{
			display: flex;
			align-items: center;
			.img{
				width: 12vw;
				height: 12vw;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.name{
				display: flex;
				flex-direction: column;
				padding-left: 20upx;
				font-size: 28upx;
				font-weight: 600;
				.cur{
					color: #999;
				}
			}
		}
	}
	//积分
	.total{
		width: 100%;
		height: 18vw;
		background-color: #FDF8D8;
		display: flex;
		// align-items: center;
		
		.type{
			flex: 1;
			text-align: center;
			font-size: 28upx;
			line-height: 8vw;
			color: #FF9900;
			.cur{
				padding-top: 3vw;
				font-weight: 550;
				font-size: 45upx;
			}
		}
	}
		.list-cell {
			display: flex;
			align-items: baseline;
			padding: 20upx 5vw;
			line-height: 60upx;
			position: relative;
			background: #fff;
			justify-content: center;
			
			&.cur{
				margin-top: 10upx;
				border-bottom: 1px solid #eee;
			}
		
			&.cell-hover {
				background: #fafafa;
			}
		
			&.b-b:after {
				left: 30upx;
				margin-top: 5upx;
			}
		
			.icon {
		
				font-size: 28upx;
				color: #999;
				transform: rotate(180deg);
			}
			.cell-tit {
				flex: 1;
				font-size: 32upx;
				color: #333;
				margin-right: 10upx;
			}
		}
.news{
	width: 94%;
	margin: 3vw 3%;
	border-radius: 40upx;
	overflow: hidden;
	box-sizing: border-box;
}
//客服
 .service{
	 width: 60%;
	 height: 30vw;
	 border-radius: 20upx;
	 background-color: #FEF0EF;
	 position:fixed;
	 left: 50%;
	 transform: translateX(-50%);
	 top: 50%;
	 margin-top: -15vw;
	 z-index: 99;
	 text-align: center;
	 box-sizing: border-box;
	 overflow: hidden;
	 .box1{
		 font-size: 32upx;
		 line-height: 8vw;
		 background-color: #EC5045;
		 color: #FFFFFF;
		 position: relative;
		 .off{
			 position: absolute;
			 right: 5upx;
			 font-size: 36upx;
		 }
	 }
	 .box2{
		 font-size: 36upx;
		 font-weight: 600;
		 line-height: 10vw;
	 }
	 .box3{
		 font-size: 24upx;
		 line-height: 5vw;
	 }
	 .box4{
		 font-size: 28upx;
		 line-height: 7vw;
	 }
 }
	
</style>
