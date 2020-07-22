<template>
	<view>
		<view class="box" v-for="(item ,index) in goodsInfo" :key="index">
			<view class="time">结束时间 {{item.end_time}}</view>
			<view class="main">
				<view class="left">
					<image :src="'http://www.tiktokshopee.com' + item.thumbimg"></image>
				</view>
				<view class="center">
					<view class="top">{{item.title}}</view>
					<view class="btn">
						<text class="new">￥{{item.on_price}}</text>
						<text class="old">￥{{item.price_one}}</text>
					</view>
				</view>
				<view class="right">
					<view>{{item.end}}</view>
					<!-- <view class="cur">0.47</view> -->
				</view>
			</view>
			<view class="footer">
				<view></view><!-- 撑开 -->
				<view class="btn" v-if="item.end !='游戏结束'">
					<view class="type"  @tap="share(item)">分享帮砍</view>
					<view class="type cur" @tap="toOrder(item)">去下单</view>
				</view>
				<view class="btn" v-else>
					<view class="type cur" @tap="delGame(item.id)">删除商品</view>
				</view>
			</view>
		</view>
		<!-- 分享-->
		<wechat :goodsInfo="goodsInfoCur" ref="Series" :kanId="kanId" :child="child" :money="money" v-if="wechatShow"></wechat>
		<view class="loading-text" v-if="loading">{{loadingText}}</view>
	</view>
</template>

<script>
	import wechat from '../../../components/wechat.vue'
	import interfaces from '../../../utils/interface.js'
	//#ifdef H5
	import {
		get_kan,
		del_kan
	} from '../../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				goodsInfo: [],
				goodsInfoCur: [],
				money: '',
				wechatShow: false, //显示分享
				loadingText: "正在加载....",
				loading: true,
				goods: false,
				kanId: '',
				showGameOver: ''

			}
		},
		components: {
			wechat
		},
		onShareAppMessage: function(res) {
			console.log(this.goodsInfoCur)
			var a = {
				k: this.goodsInfoCur.id,
				g: this.goodsInfoCur.child_id
			}
			if (res.from === 'button') {
				// 来自页面内转发按钮
			}
			return {
				title: this.goodsInfoCur.title,
				path: '/pages/game/index?scanCode=' + JSON.stringify(a), // 路径，传递参数到指定页面。
				imageUrl: 'http://www.tiktokshopee.com' + this.goods.thumbimg,
			}
		},
		methods: {
			//立即分享
			share(item) {
				// this.wechatShow = true;
				this.goodsInfoCur = item;
				this.money = item.on_price;
				this.kanId = item.id;
				this.child = item.child_id;
				let a = {
					k: this.kanId,
					g: this.child,
					y: item.you,
				}
				uni.navigateTo({
					url: '/pages/game/index?scanCode=' + JSON.stringify(a), // 路径，传递参数到指定页面。
				})
			},
			toOrder(item) { //去下单
				console.log(item)
				item.game = '拍卖';
				item.num = 1;
				item.kan_id = item.id;
				uni.navigateTo({
					url: '../../order/base/createOrder?goodsInfo=' + JSON.stringify(item)
				})
			},
			delGame(e) { //删除商品
				this.request({
					url: interfaces.del_kan,
					method: "POST",
					data: {
						kan_id: e
					},
					success: ((res) => {
						if (res.error_code == 0) {
							uni.showToast({
								title: '删除成功',
								icon: 'none',
							})
							let self = this;
							setTimeout(function() {
								self.initData()
							}, 500)
						}
					})
				})
				//#ifdef H5
				let data = {
					kan_id : e
				}
				del_kan(data).then((res) => {
					if(res.error_code == 0){
						uni.showToast({
							title: '删除成功',
							icon: 'none',
						})
						let self = this;
						setTimeout(function() {
							self.initData()
						}, 500)
					}
				})
				//#endif
			},
			async initData() {
				this.request({
					url: interfaces.get_kan, //获取用户开砍游戏记录
					method: "POST",
					success: ((res) => {
						console.log(res)
						if (res.error_code === 0) {
							res.data.forEach((item) => {
								item.end_time = this.timestampToTime(item.end_time)
							})
							this.goodsInfo = res.data;
							this.loading = false;
							if (this.goodsInfo.length < 1) {
								this.loading = true;
								this.loadingText = '暂无数据'
							}
						}
					})
				});
				//#ifdef H5
				get_kan().then((res) => {
					if (res.error_code === 0) {
						res.data.forEach((item) => {
							item.end_time = this.timestampToTime(item.end_time)
						})
						this.goodsInfo = res.data;
						this.loading = false;
						if (this.goodsInfo.length < 1) {
							this.loading = true;
							this.loadingText = '暂无数据'
						}
					}
				})
				//#endif
			},
			timestampToTime(cjsj) {
				let time = cjsj.toString()
				if (time.length == 10) {
					time = time * 1000
				}
				var date = new Date(time) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-'
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
				var D = date.getDate() + ' '
				var h = date.getHours() + ':'
				var m = date.getMinutes() + ':'
				var s = date.getSeconds()
				return Y + M + D + h + m + s
			},
		},
		onLoad() {
			this.initData();
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}

	.box {
		width: 92%;
		padding: 20upx 4%;
		margin: 10upx 0;
		background-color: #fff;

		.time {
			font-size: 24upx;
			color: #999;
			padding-bottom: 10upx;
			line-height: 30upx;
		}

		.main {
			width: 100%;
			display: flex;
			height: 130upx;
			overflow: hidden;

			.left {
				width: 120upx;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.center {
				flex: 1;
				padding: 0 20upx;
				display: flex;
				flex-direction: column;

				.top {
					flex: 1;
					font-size: 24upx;
					color: #333;
					font-weight: 600;
					display: -webkit-box;
					overflow: hidden;
					text-overflow: ellipsis;
					word-wrap: break-word;
					white-space: normal !important;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					padding-top: 5upx;
				}

				.btn {
					padding-bottom: 5upx;

					.new {
						color: red;
						font-size: 38upx;
						font-weight: 600;
					}

					.old {
						font-size: 26upx;
						color: #999;
						padding-left: 20upx;
						text-decoration: line-through;
					}
				}

			}

			.right {
				margin-top: 10upx;
				width: 120upx;
				height: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between; //子元素撑开
				font-size: 26upx;
				color: #FF9900;
				align-items: center;

				.cur {
					font-size: 36upx;
					font-weight: 600;
				}
			}
		}

		.footer {
			height: 50upx;
			display: flex;
			justify-content: space-between;

			.btn {
				// margin-top: 5upx;
				display: flex;
				font-size: 26upx;
				// margin-bottom: 5upx;
				// button{
				// 	width: 0;
				// 	height: 0;
				// 	font-size: 0;
				// }
				.type {
					padding: 5upx 15upx;
					height: 35upx;
					line-height: 35upx;
					color: #000;
					font-size: 26upx;
					border-radius: 50upx;
					background: #66FFCC;
				}

				.cur {
					margin-left: 20upx;
					background-color: #EC5045;
				}
			}
		}
	}
</style>
