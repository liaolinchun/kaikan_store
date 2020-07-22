<template>
	<view class="popup pay" v-if="showPay">
		<!-- 遮罩层 -->
		<view class="mask"></view>
		<view class="layer">
			<view class="pay-title">
				<view class="title">确认支付</view>
				<view class="icon iconfont" @tap.stop="hidePay">&#xe606;</view>
			</view>
			<view class="money">
				￥{{Price}}
			</view>
			<!--微信支付-->
			<!-- #ifdef MP-WEIXIN -->
			<button type="primary" @click="weixinPay" :loading="loading">微信支付</button>
			<!-- #endif -->
			<!--支付宝支付-->
			<!-- #ifdef MP-ALIPAY -->
			<button type="primary" @click="aliPay" :loading="loading">支付宝支付</button>
			<!-- #endif -->

			<!-- #ifdef APP-PLUS -->
			<view class="pay-list">
				<view class="mode" @tap="setIndex(0)">
					<view class="icon">
						<image src="/static/img/pay/wechat.png"></image>
						<view class="font">微信支付</view>
					</view>
					<view class="sel" :class="{ 'cur' : wechat == showIndex}"></view>
				</view>
				<view class="mode" @tap="setIndex(1)">
					<view class="icon">
						<image src="/static/img/pay/zhifubao.png"></image>
						<view class="font">支付宝支付</view>
					</view>
					<view class="sel" :class="{ 'cur' : zhifubao == showIndex}"></view>
				</view>
				<view class="mode" @tap="setIndex(2)">
					<view class="icon">
						<image src="/static/img/pay/bankCard.png"></image>
						<view class="font">银行卡支付</view>
					</view>
					<view class="sel" :class="{ 'cur' : bankCard == showIndex}"></view>
				</view>
			</view>
			<!--协议-->
			<view class="deal">
				<view class="box1" @tap="showCur" :class="{ 'cur' : dealCur}">
				</view>
				<view class="box2">
					我已同意<text style="color: #f40;">《XMM会员服务协议》</text>
				</view>
			</view>
			<!-- #endif -->
			<!-- 支付 -->
			<!-- #ifdef H5 -->
			<view class="btn" @tap="toRequestPaymentH5()">
				立即支付
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="btn" @tap="toRequestPayment()">
				立即支付
			</view>
			<!-- #endif -->
			<view v-if="footerbottom" :style="{height: footerbottom}"></view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../utils/interface.js'
	export default {
		props: ["showPay", "Price", "footerbottom", "order_num", "isGame", "mark"],
		data() {
			return {
				wechat: 0,
				zhifubao: 1,
				bankCard: 2,
				dealCur: true,
				showIndex: 0,
				/*支付部分*/
				title: 'request-payment',
				loading: false,
				price: 0.01, //支付价格
				alipayList: [], //支付宝支付
				wxpayList: [], //微信支付

			}
		},
		methods: {

			hidePay() {
				this.$emit('func', false)
				uni.showModal({
					title: '取消支付',
					content: '确定要取消支付吗？',
					cancelText: '否',
					confirmText: '是',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: "../order"
							})
						} else {
							this.$emit('func', true)
						}
					}
				})
			},
			setIndex(n) { //切换支付方式
				this.showIndex = n;
			},
			showCur() { //选中已阅读
				console.log('13')
				this.dealCur = !this.dealCur;
			},
			/*小程序微信支付*/
			// weixinPay() {
			// 	console.log('微信支付')
			// 	// let url = 'https://www.tiktokshopee.com/apk/Play/aa';
			// 	// void plus.runtime.openWeb(url, function() { //跳转H5支付

			// 	// })

			// },
			//#ifdef MP-WEIXIN
			weixinPay() {
				let url = '';
				if (this.isGame) { //游戏支付
					url = 'https://www.tiktokshopee.com/apk/Xiaopay/kan_pay'
				} else { //普通支付
					url = 'https://www.tiktokshopee.com/apk/Xiaopay/pay'
				}
				this.loading = true;
				console.log(url)
				uni.login({
					success: (e) => {
						console.log(e.code)
						uni.request({
							url: url,
							method: 'POST',
							header: {
								"content-type": "application/x-www-form-urlencoded"
							},
							data: {
								code: e.code, // code 换取 openid 和 session_key 等信息
								total_fee: this.Price, //支付价格
								order_num: this.order_num,//订单号
								mark : this.mark,//买家留言
							},
							success: (res) => {
								console.log(res);
								if (res.statusCode !== 200) {
									uni.showModal({
										content: "支付失败，请重试！",
										showCancel: false
									});
									return;
								}
								if (res.data.state === 200) {
									// console.log("得到接口prepay_id", res.data.payment);
									let paymentData = res.data;
									uni.requestPayment({
										timeStamp: paymentData.timeStamp,
										nonceStr: paymentData.nonceStr,
										package: paymentData.package,
										signType: 'MD5',
										paySign: paymentData.paySign,
										success: (res) => {
											uni.showToast({
												title: "感谢您的赞助!"
											})
										},
										fail: (res) => {
											uni.showModal({
												content: "支付失败,原因为: " + res
													.errMsg,
												showCancel: false
											})
										},
										complete: () => {
											this.loading = false;
										}
									})
								} else {
									uni.showModal({
										content: res.data.desc,
										showCancel: false
									})
								}
							},
							fail: (e) => {
								console.log("fail", e);
								this.loading = false;
								uni.showModal({
									content: "支付失败,原因为: " + e.errMsg,
									showCancel: false
								})
							}
						})
					},
					fail: (e) => {
						console.log("fail", e);
						this.loading = false;
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					}
				})
			},
			//#endif
			//#ifdef MP-ALIPAY
			aliPay() {
				
				console.log('支付宝支付')
				
				my.request({ //在小程序端调用 my.request 接口，连接到商户服务端
					method: 'POST',
					url: 'https://www.tiktokshopee.com/Alipay.php',
					data: {
						 // from: '支付宝',
						 // production: 'AlipayJSAPI',
					},
					headers:{
					    'content-type':'application/json'  //默认值
					},
					dataType: 'json',
					success: function(info) {
						console.log(info , '服务器返回tradeNO');
						my.tradePay({ //在小程序端使用 tradeNO，调用 my.tradePay 接口唤起支付收银台
							tradeNO: info,
							success: function(res) {
								my.alert(res)
							},
							fail: function(res) {
								my.alert(res)
							}
						})
					}
				})
			},
			//#endif
			/*APP支付*/
			Payment() {
				// #ifdef APP-PLUS
				uni.getProvider({
					service: "payment", //授权支付
					success: (e) => {
						console.log("payment success:" + JSON.stringify(e));
						let alipayList = [];
						let wxpayList = [];
						console.log(e, '初始')
						e.provider.map((value) => {
							switch (value) {
								case 'alipay':
									alipayList.push({
										name: '支付宝',
										id: value,
										loading: false
									});
									break;
								case 'wxpay':
									wxpayList.push({
										name: '微信',
										id: value,
										loading: false
									});
									break;
								default:
									break;
							}
						})
						this.alipayList = alipayList;
						this.wxpayList = wxpayList;
					},
					fail: (e) => {
						console.log("获取支付通道失败：", e);
					}
				});
				// #endif
			},
			//#ifdef H5
			toRequestPaymentH5() { //h5支付
				if (this.showIndex === 0) { //微信支付
					let url = 'http://www.mamamohe.cn/wx/pay.php';
					location.href = url;
				} else if (this.showIndex === 1) { //支付宝支付
					let url = 'http://www.mamamohe.cn/zfb/alipay/index.php';
					location.href = url;
				}
			},
			//#endif
			toRequestPayment() {
				var e, index;
				if (this.showIndex === 0) { //微信支付
					// e = this.wxpayList[0]; //App支付
					// index = 0;
					// this.requestPayment(e,index)
					let url = 'http://www.tiktokshopee.com/apk/Wxpay/H5jsapipay';
					void plus.runtime.openWeb(url, function() { //跳转H5支付

					})
				} else if (this.showIndex === 1) { //支付宝支付
					// e = this.alipayList[0]; //App支付
					// index = 1;
					// this.requestPayment(e ,index)
					let url = 'http://www.mamamohe.cn/zfb/alipay/index.php';
					void plus.runtime.openWeb(url, function() { //跳转H5支付

					})
				}
			},
			async requestPayment(e, index) {
				// console.log(JSON.stringify(e) , 666666666666)
				this.loading = true;
				let orderInfo = await this.getOrderInfo(e.id);
				console.log("得到订单信息", orderInfo);
				if (orderInfo.statusCode !== 200) {
					console.log("获得订单信息失败", orderInfo);
					uni.showModal({
						content: "获得订单信息失败",
						showCancel: false
					})
					return;
				}
				console.log(e.id, orderInfo.data)
				uni.requestPayment({
					provider: e.id,
					orderInfo: orderInfo.data,
					success: (e) => {
						console.log("success", e);
						uni.showToast({
							title: "感谢您的赞助!"
						})
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			getOrderInfo(e) {
				let appid = "";
				// #ifdef APP-PLUS
				appid = plus.runtime.appid;
				// #endif
				//https://demo.dcloud.net.cn/payment/?payid=wxpay&appid=HBuilder&total=1
				let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=' + this.price;
				// let url = 'https://demo.dcloud.net.cn/payment/?payid=wxpay&appid=HBuilder&total=0.01';
				// let url =  'http://www.mamamohe.cn/wx/pay.php';
				return new Promise((res) => {
					uni.request({
						url: url,
						success: (result) => {
							res(result);
						},
						fail: (e) => {
							res(e);
						}
					})
				})
			}

		}

	}
</script>

<style lang="scss">
	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21%;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: 0;
			// bottom: footerbottom;
			width: 100%;
			min-height: 15%;
			background-color: #fff;
			align-content: space-between;

			.pay-title {
				display: flex;
				align-items: center;
				width: 96%;
				padding: 0 2%;
				padding: 10upx 0;
				color: #666;
				font-size: 32upx;

				.title {
					flex: 1;
					text-align: center;
					font-size: 38upx;
					padding-left: 80upx;
				}
			}

			.money {
				color: #FFCC66;
				width: 100%;
				font-size: 60upx;
				font-weight: 600;
				text-align: center;
			}

			.pay-list {
				width: 94%;
				padding: 0 3%;
				display: flex;
				flex-direction: column; //子元素竖排

				.mode {
					display: flex;
					justify-content: space-between; //子元素撑开
					width: 100%;
					height: 120upx;
					align-items: center;

					.icon {
						display: flex;
						align-items: center;
					}

					image {
						width: 100upx;
						height: 100upx;
						z-index: 9999;
					}

					.font {
						color: #666;
						font-size: 36upx;
						padding-left: 20upx;
					}

					.sel {
						width: 40upx;
						height: 40upx;
						border: 1px solid #ddd;
						border-radius: 50%;
						margin-right: 5upx;

						&.cur {
							background-size: 100% 100%;
							border: 1px solid #40BB0A;
							background-image: url("../static/img/pay/on.png");
						}
					}
				}
			}

			.deal {
				width: 94%;
				padding: 0 3%;
				display: flex;
				height: 50upx;
				margin-top: 40upx;
				align-items: center;

				.box1 {
					width: 5vw;
					height: 5vw;
					border: 1px #ddd solid;

					&.cur {
						background-image: url("../static/img/cur.png");
						background-size: 100% 100%
					}
				}

				.box2 {
					font-size: 28upx;
					margin-left: 20upx;
					color: #333;
				}
			}
		}

		.btn {
			margin-top: 20upx;
			width: 100%;
			height: 120upx;
			z-index: 999;
			display: flex;
			align-items: center; //垂直居中
			justify-content: center; //水平居中
			color: #fff;
			background-color: red;
		}
	}
</style>
