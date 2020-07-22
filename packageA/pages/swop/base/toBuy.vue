<template>
	<view class="container">
		<swiper class="swiper" :indicator-dots="false" @change="changeCurrent">
			<swiper-item v-for="(imgs , index) in filterImgs" :key="index">
				<view class="nav_s">
					<view class="item" :class="{'item_cur' : item.id == curId}" v-for="(item ,ind) in imgs" :key="ind"  @tap="checked(item)">
						<image :src="item.id == curId ? img_on : img"></image>
						<view class="title">{{item.desc}}</view>
						<view class="jifen">{{item.jifen + '积分'}}</view>
						<view class="price">
							<view>{{item.price + '元'}}</view>
							<view class="old">{{item.old_price}}</view>
						</view>
					
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 	提示点 -->
		<view class="dots">
			<view class="on" :class="{'on_off' : page == 0}"></view>
			<view class="on" :class="{'on_off' : page == 1}"></view>
		</view>
		<view class="explain">
			<view style="margin-bottom: 5upx;">礼品包详情</view>
			<view>1. 15礼品卡一张,可在礼品区叠加使用。</view>
			<view>2. 赠送1500积分。</view>
			<view class="prev" @tap="navTo_lipin">礼包预览</view>
		</view>
		<view class="submit" @click="weixinPay" v-if="show_buy">
			立即购买￥{{price}}
		</view>
	</view>
</template>

<script>
	import interfaces from '../../../../utils/interface.js';
	export default {
		data() {
			return {
				show_buy: false,
				price: 999,
				jifen: 0, 
				curId: 0,
				page: 0, //当前所在页
				img: "../../../static/img/bg_liwu.jpg", //默认背景图
				img_on: "../../../static/img/bg_liwu_on.jpg", //选中背景图
				iconList: [{
					"id": "1",
					"jifen": "1500",
					"desc": "15元礼品包",
					"price": "12",
					"old_price": "15元"
				}, {
					"id": "2",
					"jifen": "2730",
					"desc": "39元礼品包",
					"price": "39"
				}, {
					"id": "3",
					"jifen": "7920",
					"desc": "99元礼品包",
					"price": "99"
				}, {
					"id": "4",
					"jifen": "17910",
					"desc": "199元礼品包",
					"price": "199"
				}, {
					"id": "5",
					"jifen": "29900",
					"desc": "299元礼品包",
					"price": "299"
				}, {
					"id": "6",
					"jifen": "59900",
					"desc": "599元礼品包",
					"price": "569",
					"old_price": "599元"

				}, {
					"id": "7",
					"jifen": "99900",
					"desc": "999元礼品包",
					"price": "899",
					"old_price": "999元"
				}, {
					"id": "8",
					"jifen": "199900",
					"desc": "1999元礼品包",
					"price": "1759",
					"old_price": "1999元"
				}, {
					"id": "9",
					"jifen": "399900",
					"desc": "3999元礼品包",
					"price": "3519",
					"old_price": "3999元"
				}, {
					"id": "10",
					"jifen": "599900",
					"desc": "5999元礼品包",
					"price": "5099",
					"old_price": "5999元"
				}]
			}
		},
		methods: {
			checked(e) { //点击选中礼包
				this.curId = e.id;
				this.price = e.price;
				this.jifen = e.jifen;
				this.show_buy = true;
			},
			changeCurrent(e) { //滑动swiper触发
				this.page = e.target.current;
			},
			navTo_lipin(){
				console.log('跳转')
				uni.navigateTo({
					url: '../swop'
				})
			},
			weixinPay(){
				//购买礼包
					uni.login({
						success: (e) => {
							console.log(e.code)
							uni.request({
								url: interfaces.jifen_buy,
								method: 'POST',
								data: {
									code: e.code, // code 换取 openid 和 session_key 等信息
									price: this.price, //支付价格
									jifen: this.jifen,//所获积分
								},
								success: (res) => {
									console.log(res, '成功');
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
									console.log("fail错误", e);
									uni.showModal({
										content: "支付失败,原因为: " + e.errMsg,
										showCancel: false
									})
								}
							})
						},
						fail: (e) => {
							console.log("fail", e);
							uni.showModal({
								content: "支付失败,原因为: " + e.errMsg,
								showCancel: false
							})
						}
					})
				},
		},
		computed: {
			filterImgs() {
				let imgs = [];
				// let self = this;
				this.iconList.forEach((item, index) => {
					let page = ~~(index / 6) //~~ 取正
					if (!imgs[page]) { //如果page等于0; 取反则为true
						imgs[page] = []
					}
					imgs[page].push(item)
				})
				return imgs;
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f2f2;
	}

	.container {
		height: 620upx;
		background-color: #FFFFFF;
	}

	.swiper {
		height: 550upx;
	}

	.dots {
		width: 100%;
		height: 50upx;
		display: flex;
		align-items: center;
		justify-content: center;

		.on {
			width: 7%;
			height: 10upx;
			background-color: #FBE3E6;
			margin: 0 7upx;
			border-radius: 8upx;
		}

		.on_off {
			background-color: #E6212A;
		}
	}

	.nav_s {
		display: flex;
		flex-wrap: wrap;
		height: 550upx;
		background-color: #fff;
		position: relative;

		.item_cur {
			&::after {
				display: block;
				content: "";
				width: 30upx;
				height: 30upx;
				border: 3px solid #FFCC00;
				/*  #ifdef  MP-WEIXIN  */
				content: url(../../../static/img/cur_y.png);
				/*  #endif  */
				/*  #ifdef  APP-PLUS  */
				background-image: url(../../../static/img/cur_y.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				/*  #endif  */
				border-radius: 50%;
				z-index: 999;
				position: absolute;
				background-color: #fff;
				right: 30upx;
				bottom: 25upx;
			}
		}

		.item {
			display: flex;
			flex-direction: column;
			align-item: center;
			width: 33%;
			height: 50%;
			position: relative;

			image {
				width: 100%;
				height: 100%;
				position: absolute;
			}

			.title {
				width: 100%;
				position: absolute;
				text-align: center;
				color: #fff;
				font-size: 28upx;
				font-weight: 550;
				top: 90upx;
			}

			.jifen {
				width: 100%;
				position: absolute;
				left: 18%;
				color: #FF0016;
				font-size: 24upx;
				top: 155upx;
			}

			.price {
				width: 100%;
				position: absolute;
				left: 18%;
				color: #FF0016;
				font-size: 24upx;
				top: 195upx;
				display: flex;

				.old {
					font-size: 22upx;
					color: #999;
					text-decoration: line-through;
					padding-left: 5upx;
					padding-top: 3upx;
				}
			}
		}
	}

	//购买
	.submit {
		width: 100%;
		height: 105upx;
		position: fixed;
		bottom: 0;
		font-size: 32upx;
		color: #fff;
		text-align: center;
		line-height: 105upx;
		background-color: #E6212A;
	}

	.explain {
		width: 94%;
		padding: 50upx 3%;
		color: #999;
		font-size: 24upx;
		position: relative;
		view {
			padding-top: 5upx;
		}
		.prev{
			position: absolute;
			right: 5%;
			color: #fff;
			background-color: #aaa;
			padding: 3upx 15upx;
			border-radius: 20upx;
			top: 95upx;
			cursor: pointer;
		}
	}
</style>
