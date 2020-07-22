<template>
	<view>
		<view>支付金额0.01</view>
		<button @tap="pay">微信支付</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				price: 1,
				providerList: []
			}
		},
		methods: {
			pay() {
				uni.login({
					success: res => {
						console.log(res)
						var code = res.code;
						console.log(code)
						wx.request({
							// url: 'http://www.tiktokshopee.com/apk/Xiaopay/pay',
							url: 'https://unidemo.dcloud.net.cn/payment/wx/mp',
							method: "POST",
							data: {
								code: code,
								amount : 0.01
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded' // 默认值
							},
							success: function(res) { //后端返回的数据
							console.log(res)
								var data = res.data;
								console.log(data);
								wx.requestPayment({
									timeStamp: data['timeStamp'],
									nonceStr: data['nonceStr'],
									package: data['package'],
									signType: data['signType'],
									paySign: data['paySign'],
									success: function(res) {
										wx.showModal({
											title: '支付成功',
											content: '',
										})
									},
									fail: function(res) {
										console.log(res);
									}
								})
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	.rmbLogo {
		font-size: 40upx;
	}

	button {
		background-color: #007aff;
		color: #ffffff;
	}

	.uni-h1.uni-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}

	.price {
		border-bottom: 1px solid #eee;
		width: 200upx;
		height: 80upx;
		padding-bottom: 4upx;
	}

	.ipaPayBtn {
		margin-top: 30upx;
	}
</style>
