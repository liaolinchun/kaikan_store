<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 导航条 -->
		<page-header @func="toCart"></page-header>
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="'http://www.tiktokshopee.com' +swiper.img"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view class="dots" v-for="(swiper ,index) in swiperList" :class="{'on' : currentSwiper >= index}" :key="index"></view>
				</view>
			</view>
		</view>
		<!-- 分类列表 -->
		<view class="category-list">
			<view class="category" v-for="(row, index) in categoryList" :key="index" @tap="toCategory(row.id)">
				<view class="img">
					<image :src="'http://www.tiktokshopee.com' + row.tubiao "></image>
				</view>
				<view class="text">{{ row.b_name }}</view>
			</view>
		</view>
		<!--热卖推荐-->
		<page-hot :showTitle="showTitle" :hotList="hotList"></page-hot>
	</view>
</template>

<script>
	import pageHeader from './base/pageHeader.vue'
	import pageHot from './base/pageHot.vue'
	import interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {get_banner ,get_hotgoods ,get_bigclass} from '../../utils/hApi.js'
	// #endif

	export default {
		data() {
			return {
				// 轮播图片
				swiperList: [],
				// 分类菜单
				categoryList: [],
				currentSwiper: 0, //当前轮播图显示下标
				//热卖商品
				hotList: [],
				showTitle: true
			}
		},
		components: {
			pageHeader,
			pageHot
		},
		onLoad(option) {

			this.initData();
			//#ifdef MP-WEIXIN
			// wx.showShareMenu的真正作用，是控制是否显示转发分享菜单在 "...”菜单中，而不是直接弹出分享界面。
			
			// wx.showShareMenu 的参数 withShareTicket 为 true 时，点击模拟器右上角菜单后出现的转发按钮，会出现一个测试群列表

			uni.showShareMenu({ //
				withShareTicket : true,
			})
			//#endif
		},
		methods: {
			async initData() {
				 
				this.request({
					url: interfaces.get_banner, //获取轮播图
					method: "POST",
					success: ((res) => {
						this.swiperList = res.data
					})
				});
				this.request({
					url: interfaces.get_hotgoods, //获取热卖商品
					method: "POST",
					success: ((res) => {
						this.hotList = res.data;
					})
				});
				this.request({
					url: interfaces.get_bigclass, //获取分类名称
					success: ((res) => {
						this.categoryList = res.data;
					})
				});
				
				//#ifdef H5
				  let swiper =  await get_banner();
				  let hot = await get_hotgoods();
				  let big = await get_bigclass();
				  
				  this.swiperList = swiper.data;
				  this.hotList = hot.data;
				  this.categoryList = big.data;
				// #endif
			},
			
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//分类跳转
			toCategory(e) {
				uni.navigateTo({
					url: "../category/toCategory?goods_id=" + e
				})
			},
			toCart() {
				uni.switchTab({
					url: "../cart/cart"
				})
			}
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
	page {
		background-color: #F2F2F2;
	}

	.swiper {
		width: 100%;
		// margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 100%;
			height: 30.7vw;
			overflow: hidden;
			// border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/4);
					}
				}
			}
		}
	}

	.category-list {
		width: 100%;
		padding: 0 0 30upx 0;
		// padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #33FFCC;

		.category {
			width: 16%;
			margin-top: 20upx;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: -10upx;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 13vw;
					height: 13vw;
				}
			}

			.text {
				margin-top: 10upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;

			}
		}
	}

	.banner {
		width: 100%;

		// margin: 40upx 0%;
		image {
			width: 100%;
			height: 36vw;
			border-radius: 4upx;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
		}
	}

	.promotion {
		width: 92%;
		margin: 10upx 4% 30upx 4%;

		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
</style>
