<template>
	<view>
		<!-- 栏 -->

		<pay-header :addressData="addressData" :hideTime="true"></pay-header>
		<!--商品列表-->
		<view class="goods-section">
			<view class="g-header b-b">
				<!-- <image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image> -->
				<text class="name">西城小店铺</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item">
				<image src="../../static/img/category/banner.jpg"></image>
				<view class="right">
					<view class="title-box">
						<view class="on">拍卖</view>
						<text class="title clamp">古黛妃 短袖t恤女夏装2019新款 韩版于是洞洞拖鞋 夏季浴室防滑简约居家简约居家</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">芒果味 1L*4盒</text>
					</view>
					<view class="price-box">
						<text class="price">￥ 12.6</text>
						<text class="price-old">￥15.8</text>
						<view class="number">x1</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>￥0.00</text>
			</view>
			<view class="g-item">
				<image src="../../static/img/category/banner.jpg"></image>
				<view class="right">
					<view class="title-box">
						<view class="on">拍卖</view>
						<text class="title clamp">古黛妃 短袖t恤女夏装2019新款 韩版于是洞洞拖鞋 夏季浴室防滑简约居家简约居家</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">芒果味 1L*4盒</text>
					</view>
					<view class="price-box">
						<text class="price">￥ 12.6</text>
						<text class="price-old">￥15.8</text>
						<view class="number">x1</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>￥0.00</text>
			</view>
		</view>
		<view class="goods-section">
			<view class="g-header b-b">
				<!-- <image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image> -->
				<text class="name">西城小店铺</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item">
				<image src="../../static/img/category/banner.jpg"></image>
				<view class="right">
					<view class="title-box">
						<view class="on">拍卖</view>
						<text class="title clamp">古黛妃 短袖t恤女夏装2019新款 韩版于是洞洞拖鞋 夏季浴室防滑简约居家简约居家</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">芒果味 1L*4盒</text>
					</view>
					<view class="price-box">
						<text class="price">￥ 12.6</text>
						<text class="price-old">￥15.8</text>
						<view class="number">x1</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>￥0.00</text>
			</view>
			<view class="g-item">
				<image src="../../static/img/category/banner.jpg"></image>
				<view class="right">
					<view class="title-box">
						<view class="on">拍卖</view>
						<text class="title clamp">古黛妃 短袖t恤女夏装2019新款 韩版于是洞洞拖鞋 夏季浴室防滑简约居家简约居家</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">芒果味 1L*4盒</text>
					</view>
					<view class="price-box">
						<text class="price">￥ 12.6</text>
						<text class="price-old">￥15.8</text>
						<view class="number">x1</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>￥0.00</text>
			</view>
		</view>
		<!-- 底部 -->
		<view style="height: 120upx;"></view>
		<view class="footer" @tap="navTo(goodsInfo)">
			<text class="submit">{{goodsInfo.iconTitle}}</text>
		</view>

	</view>
</template>

<script>
	import payHeader from './base/payHeader.vue';
	import popupPay from '../../components/popupPay.vue';
	export default {
		data() {
			return {
				goodsInfo: [],
				addressData: {
					name: '',
					mobile: '',
					addressName: '',
					address: '',
					area: '',
					default: '',
				}
			}
		},
		components: {
			payHeader,
			popupPay
		},
		methods: {
			navTo(item) {

				if (item.iconTitle == '去评价') {
					uni.navigateTo({
						url: '../order/base/orderComment?goodsInfo=' + JSON.stringify(item)
					})
				} else if (item.iconTitle == '提醒发货') {
					uni.showLoading({
						title: "发送中..."
					})
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							icon: "success",
							title: "已成功提示商家",
						})
						setTimeout(() => {
							uni.navigateTo({
								url : '../order/order'
							})
						},200)
					}, 1000)
				}
				else if( item.iconTitle == '确认收货'){
					uni.showModal({
						title: '确认收货',
						content: '确定订单吗？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							setTimeout(() => {
								uni.showToast({
									icon: "success",
									title: "订单已完成",
								})
								setTimeout(() => {
									uni.navigateTo({
										url : '../order/order'
									})
								},500)
							},500)
							// if (res.confirm) {
							// 	this.imgList.splice(e.currentTarget.dataset.index, 1)
							// }
						}
					})
				}
			}
		},
		onLoad(option) {
			// this.addressData = JSON.parse(option.addressData)
			this.goodsInfo = JSON.parse(option.goodsInfo)
			// console.log(this.goodsInfo)
		}
	}
</script>

<style lang="scss">
	page {
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

				.title-box {

					display: flex;

					.on {
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

				.number {
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

				.price-old {
					padding-left: 25upx;
					font-size: 28upx;
					text-decoration: line-through;
				}

				.number {
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

		.fee {
			display: flex;
			justify-content: space-between;
			font-size: 32upx;
			color: #666;
			margin: 5upx 30upx;
		}
	}

	/*底部*/
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		// z-index: 1;
		display: flex;
		align-items: center;
		flex-direction: column; //子元素竖排
		width: 100%;
		height: 120upx;
		font-size: 30upx;
		background-color: #EC5045;
		z-index: 998;
		color: red;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.submit {
			color: #fff;
			line-height: 120upx;
			font-size: 34upx;
		}
	}
</style>
