<template>
	<view>
		<!-- 遮罩层 -->
		<view class="mask" v-if="!wechatShow"></view>
		<view class="share" ref="mp" v-if="!wechatShow">
			<view class="top-box">
				<view class="left">
					<image :src="'http://www.tiktokshopee.com' + goodsInfo.thumbimg"></image>
				</view>
				<view class="rig">
					<view class="title">{{goodsInfo.title}}</view>
					<view class="price">
						<view class="new">{{money}}</view>
						<view class="old">{{goodsInfo.price_one}}</view>
					</view>
				</view>
			</view>
			<view class="bot">
				<view class="buy" @tap="handleSavePhotos">直接购买</view>
				<button  class="help"  open-type="share" @tap="share">共享帮砍</button>
			</view>
		</view>
		<!-- 分享-->
		<wechat :goodsInfo="goodsInfo" ref="Series" :kanId="kanId" :child="child" :money="money" v-if="wechatShow"></wechat>
	</view>
</template>

<script>
	import wechat from '../../components/wechat.vue'
	import interfaces from '../../utils/interface.js';
	export default {
		props: ['goodsInfo', 'money', 'kanId', 'child' ,'you'],
		data() {
			return {
				wechatShow: false,
				// savePhotos: "保存到相册",
				// 	showBtn: false
			}
		},
		components: {
			wechat
		},
		onLoad() {
			
		},
		methods: {
			handleSavePhotos() {

				this.goodsInfo.game = '拍卖';
				this.goodsInfo.num = 1;
				this.goodsInfo.kanMoney = this.money;
				this.goodsInfo.kan_id = this.kanId;
				this.goodsInfo.you = this.you;
				
				uni.navigateTo({
					url: "../order/base/createOrder?goodsInfo=" + JSON.stringify(this.goodsInfo)
				})
			},
			// //立即分享
			share() {
				this.wechatShow = true;	
				// this.$refs.Series.send() //触发子组件方法
			},
		},
	}
</script>

<style lang="scss">
	.mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 21;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.share {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 50%;
		margin-top: -20vw;
		width: 60%;
		padding: 3vw 5%;
		height: 38vw;
		z-index: 22;
		border-radius: 50upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		flex-direction: column; //子元素竖排

		// overflow: hidden;
		.top-box {
			width: 100%;
			height: 60%;
			display: flex;

			// justify-content: space-between;
			// align-items: center;
			.left {
				width: 30%;
				height: 85%;
				margin-top: 2vw;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.rig {
				width: 70%;
				height: 100%;
				display: flex;
				flex-direction: column; //子元素竖排

				.title {
					flex: 6;
					color: #333;
					font-weight: 600;
					margin-left: 10upx;
					overflow: hidden;
					font-size: 32upx;
					padding-top: 5upx;
					line-height: 47upx;
					display: -webkit-box;
					overflow: hidden;
					text-overflow: ellipsis;
					word-wrap: break-word;
					white-space: normal !important;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.price {
					flex: 4;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-left: 10upx;

					.new {
						color: red;
						font-weight: 600;
						font-size: 48upx;
					}

					.old {
						color: #aaa;
						text-decoration: line-through;
						font-size: 32upx;
					}
				}
			}
		}

		.bot {
			width: 100%;
			height: 40%;
			align-items: center;
			display: flex;

			.buy {
				width: 48%;
				height: 10vw;
				background-color: #999;
				color: #666;
				font-size: 32upx;
				border-radius: 50upx;
				text-align: center;
				line-height: 10vw;
				font-weight: 600;
			}

			.help {
				width: 48%;
				height: 10vw;
				margin-left: 4%;
				background-color: #66FFCC;
				color: #333;
				font-weight: 600;
				font-size: 32upx;
				border-radius: 50upx;
				text-align: center;
				line-height: 10vw;
			}
		}
	}
</style>
