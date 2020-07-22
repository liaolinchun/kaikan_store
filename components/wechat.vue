<template>
	<view>
		<!-- 遮罩层 -->
		<view class="mask"></view>
		<view class="box" @longtap="longtap">
			<view class="box1">
				<text>砍价你厉害</text>
				<text class="b">来给老板上一课</text>
			</view>
			<view class="box2">
				<image :src="'http://www.tiktokshopee.com' + goodsInfo.thumbimg"></image>
			</view>
			<view class="box3">￥{{money}}</view>
			<view class="box4">
				<view class="logo">
					<image src="/static/img/face.jpg"></image>
				</view>
				<view class="font">Hi,这家店有点嚣张,来给它上一课</view>
				<!-- 生成二维码 -->
				<view class="code qrcode">
					<tki-qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :pdground="pdground"
					 :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
				</view>
			</view>
			<view class="save">长按图片保存二维码</view>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="wechat">
			<view class="type" @tap="formSubmit">
				<image src="/static/wechat.png" mode=""></image>
				<text>微信</text>
			</view>
			<view class="type" @tap="formSubmit2">
				<image src="/static/pyq.png" mode=""></image>
				<text>朋友圈</text>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'

	export default {
		props: ['goodsInfo', 'money', 'kanId', 'child'],
		data() {
			return {
				ifShow: true,
				val: '', // 要生成的二维码值
				size: 100, // 二维码大小
				unit: 'upx', // 单位
				pdground: '#FF625E', // 角标色
				icon: '', // 二维码图标
				iconsize: 15, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: false, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		mounted() {
			var a = {
				k: this.kanId,
				g: this.child
			}
			console.log(a)
			a = JSON.stringify(a)
			this.val = a;
			setTimeout(() => {
				this.goodsInfo.old = this.money;
				this.goodsInfo.key = true;
				this.$refs.qrcode._makeCode() //生成二维码
			}, 1000)
		},
		components: {
			tkiQrcode
		},
		methods: {
	
			qrR(res) {
				this.src = res
			},
			saveQrcode() {

				this.$refs.qrcode._saveCode()
				setTimeout(() => {
					uni.showToast({
						icon: "success",
						title: "保存成功,打开APP识别",
					})
				}, 200)
			},
			longtap() { //长按保存
				uni.showModal({
					title: '保存二维码',
					content: '保存到本地相册吗？',
					cancelText: '否',
					confirmText: '是',
					success: res => {
						if (res.confirm) {
							this.saveQrcode()
						}
					}
				})
			},

			// 执行事件 //分享到微信好友
			formSubmit: function() {
				//#ifdef APP-PLUS
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "快来帮朋友砍一刀吧~",
					summary: this.goodsInfo.name,
					imageUrl: "/static/img/home/" + this.goodsInfo.img,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				//#endif
				//#ifdef MP-WEIXIN
				
				//#endif
			},
			//分享到朋友圈
			formSubmit2: function() {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://uniapp.dcloud.io/goods=" + JSON.stringify(this.goodsInfo),
					title: "快来帮朋友砍一刀吧~",
					summary: this.goodsInfo.name,
					imageUrl: "/static/img/home/" + this.goodsInfo.img,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
		}
	}
</script>

<style lang='scss'>
	.mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 21;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.box {
		position: fixed;
		top: 20vw;
		left: 50%;
		transform: translateX(-50%);
		width: 50%;
		padding: 0vw 5% 4vw 5%;
		height: 60%;
		z-index: 22;
		border-radius: 20upx;
		background-image: linear-gradient(to bottom, #FF5E5E, #FBBC6B);
		display: flex;
		align-items: center;
		flex-direction: column;

		/* //子元素竖排 */
		.box1 {
			width: 100%;
			height: 17%;

			text {
				width: 100%;
				display: block;
				color: #fff;
				font-size: 38upx;
				font-weight: 800;
				line-height: 7vw;
				padding-top: 2vw;
			}

			.b {
				text-align: right;
				padding-top: 0;
			}
		}

		.box2 {
			width: 100%;
			height: 47%;
			border-radius: 50upx;
			background-color: #fff;
			overflow: hidden;
			box-shadow: 5px 5px 10px #000;

			image {
				width: 100%;
				height: 100%;
				background-size: 100% 100%;
				z-index: 33;
			}
		}

		.box3 {
			width: 100%;
			height: 10%;
			text-align: center;
			color: red;
			font-weight: 600;
			font-size: 55upx;
			padding-top: 1vw;
		}

		.box4 {
			width: 100%;
			height: 20%;
			background-color: #fff;
			border-radius: 30upx;
			display: flex;
			align-items: center;

			.logo {
				width: 80upx;
				height: 80upx;
				margin-left: 3vw;
				/* flex: 3; */
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.font {
				flex: 4;
				font-size: 16upx;
				margin-left: 2vw;
			}

			.code {
				width: 100upx;
				height: 100upx;
				margin-top: 15upx;
				margin-right: 3vw;
				flex: 3;
				display: flex;
				align-items: center;
				justify-content: center;

			}
		}

		.save {
			margin-top: 20upx;
			font-size: 28upx;
		}
	}

	.wechat {
		position: fixed;
		z-index: 22;
		bottom: 0;
		width: 92%;
		padding: 0 4%;
		min-height: 20%;
		border-radius: 30upx 30upx 0 0;
		background-color: #E8E8E8;
		display: flex;

		/* 			flex-wrap: wrap;
			align-content: space-between; */
		.type {

			flex: 1;
			display: flex;
			align-items: center;
			flex-direction: column;
			/* //子元素竖排 */
			padding-top: 5vw;

			image {
				width: 15vw;
				height: 15vw;
				border-radius: 50%;
			}

			text {
				font-size: 24upx;
				padding-top: 2vw;
			}
		}
	}
</style>
