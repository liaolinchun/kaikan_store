<template>
	<view>
		
		<!--导航栏-->
		<view class="nav">
			<view class="type" v-for="(name ,index) in orderNav" :key="index"
			 :class="{'cur' : index == showOrderIndex}" @tap="showOrderNav(index)">{{name}}</view>

		</view>
		<view class="unit" v-for="(item ,index) in showOrder" :key="index" @tap="navTo(item)">
			<view v-for="(i ,idx) in item.detail" :key="idx">
				<view class="time">
					<view>{{item.time}}</view>
					<view>{{item.state_name}}</view>
				</view>
				<view class="main">
					<view class="img">
						<image :src="'http://www.tiktokshopee.com' + item.detail[0].thumbimg"></image>
					</view>
					<view class="title"> {{item.detail[0].title}}</view>
				</view>
				<view class="font">
					<text style=" font-size: 25upx; position: absolute;left: 0; top: 8upx;">运费:{{item.detail[0].you}}</text>
					共计{{item.detail[0].num}}件商品&nbsp; &nbsp; &nbsp;价格&nbsp;: &nbsp;<text style="color: red; padding-left: 10upx; font-weight: 600;">￥ {{item.all_price}}</text>
				</view>
				<view>
					<view @tap.stop="toComment(item)" class="del" :class="{ 'on' : item.state_name == '提醒发货' || item.state_name == '去付款' || item.state_name == '确认收货'}">
						<view>{{item.state_name}}</view>
					</view>
					<view class="sale" @tap.stop="toSale(item)" v-if="item.state_name == '去评价'">
						<view>申请售后</view>
					</view>
				</view>
			</view>
		</view>
		<view class="loading-text" v-if="loading">{{loadingText}}</view>
		<view class="loading-text" v-if="showOrder.length == 0 && !loading">暂无数据</view>
		<popup-pay :showPay="showPay" ref="Series" :order_num="order_num" :Price="sum" style="z-index: 9999;" @func="setPay"></popup-pay>
	</view>
</template>

<script>
	import popupPay from '../../components/popupPay.vue';
	import interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {
		all_order
	} from '../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				orderNav: ['全部', '待付款', '代发货', '待收货', '已完成'],
				showOrderIndex: 0,
				showOrder: [], //显示订单
				orderLists: [], //全部订单
				dfk_order: [], //待付款订单
				dfh_order: [], //代发货订单
				dsh_order: [], //待收货订单
				end_order: [], //已完成订单
				loadingText: "正在加载....",
				loading: true,
				showPay: false, //隐藏支付
				sum: '', //总价
				order_num :'' ,//订单编号

			}
		},
		components: {
			popupPay
		},
		onShow() {
			
		},
		methods: {
			showOrderNav(index) {
				this.showOrderIndex = index;
				switch (index) {
					case 0:
						this.showOrder = this.orderLists;
						break;
					case 1:
						this.showOrder = this.dfk_order;
						break;
					case 2:
						this.showOrder = this.dfh_order;
						break;
					case 3:
						this.showOrder = this.dsh_order;
						break;
					case 4:
						this.showOrder = this.end_order;
						break;
				}
			},
			async initData() {
				this.request({
					url: interfaces.all_order, //获取个人所有订单
					method: "POST",
					success: ((res) => {
						console.log(res)
						if (res.error_code == 0) {
							this.orderLists = res.data;
							this.showOrder = res.data;
							res.data.forEach((item) => {
							  item.time =  this.timestampToTime(item.time)
							  if(item.state_name == '待付款') item.state_name = '去付款'
							})
							this.dfk_order = res.data.filter((item) => {
								return item.state_name === '去付款';
							})
							this.dfh_order = res.data.filter((item) => {
								return item.state_name === '待发货';
							})
							this.dsh_order = res.data.filter((item) => {
								return item.state_name === '待收货';
							})
							this.end_order = res.data.filter((item) => {
								return item.state_name === '已完成';
							})
							this.loading = false;
						}else if(res.error_code == 2){ //暂无数据
							this.loading = false; 
						}
					})
				});
				// let data = await this.$api.json('data');
				// this.orderLists = data.orderLists;
				// this.showOrder = data.orderLists;
				//#ifdef H5
					let res = await all_order();
					if (res.error_code == 0) {
						this.orderLists = res.data;
						this.showOrder = res.data;
						res.data.forEach((item) => {
						  item.time =  this.timestampToTime(item.time)
						  if(item.state_name == '待付款') item.state_name = '去付款'
						})
						this.dfk_order = res.data.filter((item) => {
							return item.state_name === '去付款';
						})
						this.dfh_order = res.data.filter((item) => {
							return item.state_name === '待发货';
						})
						this.dsh_order = res.data.filter((item) => {
							return item.state_name === '待收货';
						})
						this.end_order = res.data.filter((item) => {
							return item.state_name === '已完成';
						})
						this.loading = false;
					}
				// #endif
				

			},
			//跳转查看商品
			navTo(item) {
				if (item.state_name == '去付款') {
					console.log(item)
					uni.navigateTo({
						url: '../pay/toPay?goodsInfo=' + JSON.stringify(item)
					})
				} else if (item.state_name == '待收货' || item.state_name == '待发货') {
					uni.navigateTo({
						url: '../pay/endOrder?goodsInfo=' + JSON.stringify(item)
					})
				} else if (item.state_name == '已完成') {
					uni.navigateTo({
						url: '../pay/endOrder?goodsInfo=' + JSON.stringify(item)
					})
				}
			}, //售后
			toSale(item) {
				uni.navigateTo({
					url: './base/afterSale'
				})
			},
			toComment(item) { //精确跳转
				if (item.state_name == '已完成') {
					uni.navigateTo({
						url: './base/orderComment?goodsInfo=' + JSON.stringify(item)
					})
					return;
				} else if (item.state_name == '去付款') { //直接付款
					this.order_num = item.order_num;
					this.sum = parseFloat(item.all_price) + parseFloat(item.detail[0].you)
					this.sum = this.sum.toFixed(2)
					this.showPay = true;
					this.$refs.Series.Payment() //触发子组件方法(获取支付通道)
					return;
				} else if (item.iconTitle == '提醒发货') {
					uni.showLoading({
						title: "发送中..."
					})
					setTimeout(() => {
						uni.hideLoading()
						setTimeout(() => {
							uni.showToast({
								icon: "success",
								title: "已成功提示商家",
							})
						}, 200)
					}, 1000)
				} else if (item.iconTitle == '删除订单') {
					uni.showModal({
						title: '提示',
						content: '确定要删除订单吗？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							// if (res.confirm) {
							// 	this.imgList.splice(e.currentTarget.dataset.index, 1)
							// }
						}
					})
				} else if (item.iconTitle == '确认收货') {
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
							}, 200)
							// if (res.confirm) {
							// 	this.imgList.splice(e.currentTarget.dataset.index, 1)
							// }
						}
					})
				}

			},
			setPay(show) { //传入子组件的方法
				this.showPay = show;
			},
			timestampToTime(cjsj) {
				let time = cjsj.toString()
				if(time.length == 10){
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

	.nav {
		width: 100%;
		height: 12vw;
		background-color: #fff;
		display: flex;

		.type {
			flex: 1;
			font-size: 30upx;
			color: #999;
			height: 12vw;
			line-height: 12vw;
			text-align: center;


			&.cur {
				color: red;
			}
		}
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

	.unit {
		width: 92%;
		padding: 10upx 4% 25upx 4%;
		min-height: 50vw;
		margin-top: 15upx;
		border-radius: 50upx;
		background-color: #fff;
		position: relative;

		.time {
			color: #999;
			font-size: 24upx;
			display: flex;
			// padding: 0 3vw;
			justify-content: space-between;
			align-items: center;
			height: 10vw;
		}

		.main {
			width: 100%;
			height: 20vw;
			display: flex;
			align-items: center;

			.img {
				width: 20vw;
				height: 20vw;

				image {
					width: 100%;
					height: 100%;

				}
			}

			.title {
				flex: 1;
				padding-left: 25upx;
				font-size: 30upx;
				font-weight: 500;
				letter-spacing: 1upx;
				// line-height: ;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
				white-space: normal !important;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		.font {
			width: 100%;
			height: 10vw;
			line-height: 10vw;
			text-align: right;
			font-size: 32upx;
			color: #666;
			border-bottom: 1px solid #eee;
			position: relative;
		}

		.del {
			width: 25vw;
			height: 8vw;
			margin-top: 15upx;
			color: #aaa;
			border: 1px solid #ddd;
			font-size: 34upx;
			line-height: 8vw;
			text-align: center;
			position: absolute;
			right: 5vw;

			&.on {
				color: #EC5045;
				border: 1px solid #EC5045;
				background-color: #FEF0EF;
			}
		}

		.sale {
			width: 25vw;
			height: 8vw;
			margin-top: 15upx;
			color: #aaa;
			border: 1px solid #ddd;
			font-size: 34upx;
			line-height: 8vw;
			text-align: center;
			position: absolute;
			right: 33vw;
		}
	}
</style>
