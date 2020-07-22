<template>
	<view>
		<!-- 状态栏 -->
		<!-- <page-status></page-status> -->
		<pay-header :goodsInfo="goodsInfo" :hour="hour" :sum="sum" :minute="minute" :second="second" :addressData="addressData"></pay-header>
		<!--商品列表-->
		<view class="goods-section">
			<view class="g-header b-b">
				<!-- <image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image> -->
				<text class="name">{{goodsInfo.detail[0].mer_name}}</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item">
				<image :src="'http://www.tiktokshopee.com' + goodsInfo.detail[0].thumbimg"></image>
				<view class="right">
					<view class="title-box">
						<view class="on">商城</view>
						<text class="title clamp">{{goodsInfo.detail[0].title}}</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">{{goodsInfo.detail[0].size}}</text>
					</view>
					<view class="price-box">
						<text class="price">￥{{goodsInfo.all_price}}</text>
						<text class="price-old">￥{{goodsInfo.all_price}}</text>
						<view class="number">x{{goodsInfo.detail[0].num}}</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>￥{{goodsInfo.detail[0].you}}</text>
			</view>
		</view>
		
		<!-- 底部 -->
		<view style="height: 170upx;"></view>
		<view class="footer" v-if="!showPay">
			<view class="price-content">
				<view class="price-tip">
					共{{goodsInfo.detail[0].num}}件
				</view>
				<view>
					<text class="price-tip">合计:</text>
					<text class="price">￥{{goodsInfo.all_price}}</text>
				</view>
			</view>
			<text class="submit"  @tap="toPay">去支付</text>
		</view>
		<popup-pay :showPay="showPay" :Price="sum" ref="Series" style="z-index: 9999;" @func="setPay"></popup-pay>
	</view>
</template>

<script>
	import payHeader  from './base/payHeader.vue';
	import popupPay from '../../components/popupPay.vue';
	import interfaces from '../../utils/interface.js';
	//#ifdef H5
	import {get_address} from '../../utils/hApi.js'
	// #endif
 	export default{
		data(){
			return{
				showPay : false,
				goodsInfo : [] ,
				addressData : [],
				sum : '',
				price :'',
				hour: '',
				minute: '',
				second: '',
				end_time : '',
			}
		},
		components:{
			payHeader,
			popupPay
		},
		methods:{
			toPay(){
				this.showPay =  true;
				this.$refs.Series.Payment() //触发子组件方法(获取支付通道)
			},
			setPay(show){ //传入子组件的方法
				this.showPay = show;
			},
			async initData() {
				this.request({
					url: interfaces.get_address, //获取收货地址
					method: "POST",
					success: ((res) => {
						if (res.error_code === 0) {
							this.addressData = res.data.filter((item) => {
								return item.mo_ren == 1; //获取默认地址
							});
							this.addressData = this.addressData[0]
							this.set_dizhi = '更改地址';
						}
						if (!this.addressData.mo_ren) {
							this.set_dizhi = '设置地址'
						}
					})
				});
				//#ifdef H5
				get_address().then((res) => {
					if (res.error_code === 0) {
						this.addressData = res.data.filter((item) => {
							return item.mo_ren == 1; //获取默认地址
						});
						this.addressData = this.addressData[0]
						this.set_dizhi = '更改地址';
					}
					if (!this.addressData.mo_ren) {
						this.set_dizhi = '设置地址'
					}
				})
				//#endif
			},
			open() {
				// console.log('时间', this.end_time)
				let that = this;
				let timer = setInterval(function() {
					var newDate = new Date().getTime();
					var date = new Date(that.end_time) - newDate;
					if (date > 0) {
						let time = date / 1000;
						// 获取时、分、秒,毫秒
						that.hour = parseInt((time % (60 * 60 * 24)) / 3600) < 10 ? ('0' + parseInt((time % (60 * 60 * 24)) / 3600)) :
							parseInt((time % (60 * 60 * 24)) / 3600)
						that.minute = parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10 ? ('0' + parseInt(((time % (60 * 60 * 24)) %
							3600) / 60)) : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
						that.second = parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10 ? ('0' + parseInt(((time % (60 * 60 * 24)) %
							3600) % 60)) : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
						that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;
			
					} else {
						//活动已结束，全部设置为'00'
						that.hour = "00",
							that.minute = "00",
							that.second = "00"
					}
				}, 1000)
			},
		},
		onLoad(option) {
			this.goodsInfo = JSON.parse(option.goodsInfo)
			console.log(this.goodsInfo)
			this.end_time = this.goodsInfo.etime * 1000;
			this.sum = parseFloat(this.goodsInfo.detail[0].num * this.goodsInfo.all_price) + parseFloat(this.goodsInfo.detail[0].you);
			this.sum = this.sum.toFixed(2);
			this.price = parseFloat(this.goodsInfo.all_price - this.goodsInfo.detail[0].you) / this.goodsInfo.detail[0].num; //单价
			this.price = this.price.toFixed(2); 
			console.log(this.sum , this.price)
			this.initData();
			this.open();
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2F2F2;
	}
	.goods-section {
		margin-top: 16upx;
		width: 96%;
		margin: 15upx 2%;
		background: #fff;
		padding-bottom: 1px;
	
		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
			border-bottom: 1px solid #eee;
		}
	
		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
			background-color: #990000;
		}
	
		.name {
			font-size: 34upx;
			color: #000;
			margin-left: 5upx;
		}
	
		.g-item {
			display: flex;
			margin: 20upx 30upx;
	
			image {
				flex-shrink: 0;
				display: block;
				width: 170upx;
				height: 180upx;
				border-radius: 4upx;
			}
	
			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
				.title-box{
	
					display: flex;
					.on{
						width: 8vw;
						height: 5vw;
						text-align: center;
						line-height: 5vw;
						color: #FF9900;
						background-color: #FEEDED;
						font-size: 24upx;
						border: 1px solid #FF9900;
					}
					.title {
						flex: 1;
						font-size: 32upx;
						color: #333;
						padding-left: 20upx;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						word-wrap: break-word;
						white-space: normal !important;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					
					.spec {
						font-size: 26upx;
						color: #999;
					}
					
				}
			}
			.spec-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				padding: 3upx 0;
				color: #999;
			
				.spec {
					margin-bottom: 4upx;
				}
				.number{
					font-size: 26upx;
					color: #999;
					margin-left: 20upx;
				}
			}	
			
			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: #999;
				position: relative;
				.price {
					color: red;
					font-size: 38upx;
					margin-bottom: 4upx;
				}
				.price-old{
					padding-left: 25upx;
					font-size: 28upx;
					text-decoration: line-through;
				}
				.number{
					font-size: 36upx;
					color: #333;
					margin-left: 20upx;
					position: absolute;
					right: 0;
				}
			}
	
			.step-box {
				position: relative;
			}
		}
		.fee{
			display: flex;
			justify-content: space-between;
			font-size: 32upx;
			color: #666;
			margin: 5upx 30upx;
		}
	}
	/*底部*/
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		// z-index: 1;
		display: flex;
		align-items: center;
		flex-direction: column; //子元素竖排
		width: 100%;
		height: 180upx;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: red;
		box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.price-content{
			// padding-left: 30upx;
			width: 92%;
			margin:  15upx 4% 5upx 4%;
			display: flex;
			justify-content: space-between;
			.price-tip{
				color: #333;
				font-size: 34upx;
				padding-right: 15upx;
			}
			.price{
				font-size: 32upx;
				color: red;
			}
		}
		.submit{
			display:flex;
			align-items:center;	//垂直居中
			justify-content: center; //水平居中
			width: 92%;
			height: 80upx;
			margin:  10upx 4%;
			color: #fff;
			font-size: 32upx;
			z-index: 99;
			background-color:#EE666C;
		}
	}
	
</style>
