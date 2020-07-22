<template>
	<view>
		<!-- 状态栏 -->
		<!-- <page-status></page-status> -->
		<!-- 地址 -->
		<view class="address-section">
			<view class="order-content">
				<!-- <text class="yticon icon-shouhuodizhi"></text> -->
				<view class="cen">
					<view class="top">
						<text class="name">{{addressData.shou_name}}</text>
						<text class="mobile">{{addressData.shou_tell}}</text>
						<view class="default" v-if="addressData.mo_ren == 1">默认</view>
						<navigator class="alter" url="/pages/address/address?source=1">{{set_dizhi}}</navigator>
					</view>
					<text class="address">{{addressData.province}} {{addressData.area}} {{addressData.address}}</text>
				</view>
				<!-- <text class="yticon icon-you"></text> -->
			</view>
			<image class="a-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvVHce/1/deXzuJHSdOM+fhpKMllI2SkTZpV6ULYrCHQGwrf41p/LENVk3QTipSWujKoyot1aQN0FYQQxtsMCS2SVuqsfFYHxBKYQNGV9ouZdA8nDipH4mT+HFf+51rO0pN0japrw9HreLe3Pqc3/me3+f3uFdIvfVuDIAPix1C9oceicFRVQWlvRWCkL1omqb1Of9z9rXZY65rhcO6x5ove19oWkX/RAaSMLOEkg+2Zt0wEcvoWOZzYZnXeWEbzmP7XPs11//LnOiDEY9DkGRwGw5a59QUTM2As+1qiD5v0TUvvC9Bc52KpmDSnju4ic7+CIinNVQoElYtcUM8jx2L1bzwPn14DOrHZ0hzEdxOPJtW16FH45CvuBzyZU22aH7Od9LnU/E0xpMqJG6iZ309qeqYNoA1gTJ4ZdF2zY2pJNSTfYCmkb85+GnO1hIbh+DzQVndaiHYTs3ZGJpifE/DyVnzi+X7pWqen8/i+8kPYUSjEORPCd9XtUKs9Fi+KMxjVzE0n9ZNnIgkYXwK+B5LafC4JKyudcMxD2+LqblGfNcY30VxJsfhcOCJ7xr02ATkluXE96DtmrPvPxFLIUH7zY3vOc0Z39O0oGtqy1DlFIuu+Zx8P/Ffa8/hEBey4rh0uuPWS6S6CRUhyGjG0hcfOWex+c9zXSsE5HmFzseP3H294Sl847VBRGJJQHTwy9wJNKAE7otLfXi2K3hRgeB81+bar8IDEPvFMxi6cxebnMx2cjrnDmiIwUAGDTvugX9de9E1L7R9NK1jc+8gnj8dy2rOKY/JRhgV8Cr405ea0HEBOxajeaHtySPvYvD2bUgdP0lmuzkl7oLl6Wn0wX/Dd1D/xG5bNc/f+7NjY9jyzghlM5QxS/ySOGt+Wlt3WwDXBz22a86gHrqjG7Hnekhz5uciN9NVDEBxXYng87vgEoqveZ7y+XsPE99vOTyAs1SkU+bOT3NKIJHUsIb4/rsL8L0YmrMRffQ3GNn8c6L7BOnu4pW10/xR4nsK9T+5FzWda2fXcEXTfLbtYUrc7joSwguno9kilZfsLNmgtaBcxv7rmudN2i9Fc8YRlsvkr6aOvoeBHxDf//MBzVfGke9p8vVhVN2wAQ1P7rFdczYeO34Wm4+Gsr4mcqzWMqQ5IX5rex3W1pUXX/PCRlwkjpEtDyLy9B8sPxcgLWzFpy7rWlTH3eq66AbUj0fh7lyJhn27oFzVck41mTdgdnU5+3fzbczsqqVwQ14aSuCrhwZoo3UEqCLW6biZJZZZom0e0UhlSiY3rvBjd0cdfLJjTrsXYvN8e5TvPEZ2PYbw9l9CrKqAWFNB+2+W/oiTc2l9BFefC/WPdqPyuxts1/zMlIrbqVB7OZSgaSWrC2eUWHUGcLa2MVrLyho3ftvVhNYq1ye6J8XUnI3JFw8idNdOaB+GIS+vsZhf6gMvsP1OJKGFx1H9o1sQeOSBXOcfc9pQDM3Z2PGvEeykxJ0l7AGaTyux4YKVLpOvs0BO/v0UQf17LdUzwdcskuaFHRo1NIrQxq1I9ByEc2kj+ZwDZsk1z/H9I+L7us+j4fHdUFa2FF3zQtv3DyTwrTcGoVFxXOeWKZEoPeNm+E66b7zSj71r6+ERHXN21C5V85nPmo7I3scRvncfxOoyiP7y0vNdyMZ17X9xmGR+43MPwvvtm23XnPH9h68P4u8U2yuJ7wonvmu0pigValf73XhmfRCt1S5bNbd6QK/0ov+2bhjDE8T3aj58p5hujCehjsZQs+lWLNl5N0RvuS2a5z/T8cLOd8K4/72wxdaAXHq+syGT7sOM7xLxvaOe+F5lu+bqYBjDd25H4s+vQ26ugSBL1lsEC+m4C8fQvMhXZXTa/CR8N96MekrapWCdvc1t+rvn32PY3juYrc7cEjjonFuMYQm97QsBPLSq1v7pKJAPbbwHZ3ueoqCyhJIJStqto8/BdMTh8q1A8PcPo+xrXbbP97ehSXydFWpjU0CZzO8xInM+CqSdTV688OVmBBT7O6DRh/dhYOt20nqSdK+f1RIqdRMqRXgrR90Dm+Dfsdn2+QYpeH7/8CBe+mAsq7nIsevKEjivgv1dQdzYUGH7dMlXe3FmwxZMTRyFgiZkW48mF0/XMYWqm75JfH8IUmPA1tlUMnHv+8T3N3J8d3Hkey6I3re6Djvaam1v/urhswjdsQ2jf/kVJRI1xHdPrh1lltzTWUxXai5H07N74P7KettnPDQyjWtf/ohglyJfl7jz/drP+vDrzgYsLZdtP2PRnz6B/u4t9I+U9cYCH81hddoFuBG4bxNq7v9xSfh+G/H9wKkIwF5JkR38fF3VLb73dDXhpsYS8P0Vxve7MZ14E04EkX2SumDj40Lkjz2LS9x1nZVqcK1rh1L/GaiZDB1GYwGPRi9+sA4r63odGEjAoKTZS0mTwUtoS2sTPioc1jd64KJqNZXRP9EtLFrLT5KQOd6H1JtvQ/SUQ1CUC1Z/tjp5MgXn51bAfc1VpAUVb6pqi+bsqRlrOB0ITSI0kUa1IvF7JcribPbxZnt9BYIeBZm0ap1BO2yHLMOIxjH111chmDocXg9XzZFR4fD74e5cA9GtQEulbLGbfaNMvv4+BfG3hiet9wxlUeDGdDPn68uqXVgVKKezbiBN/HHYoTnrqlORkDx0BHr/ABzVVbknbZysZ3wnRVyda6HU1UIjvpt28p2C+T+GEtYeeEh3jqcdKjl2BcWY65q9UAQb+c6+k3iePnaS+P5Pq8spOJ38fJ09RVI1OFuWo6xtJXSD+J6xh++OHN8PEt8HxtNY4pbAczC+m2Rnh8V3J9Q0Fa4LeG97YQdehj4aoSL9NZiZNMTKStp6g5/x5NsW37vWQaS1WXzPHvjihzYS/lgshbeJ75WySHm7wNXXk8SbK/xutOX4ntHtYRxE0eJn6uARaGf6ie++7GPNxVkf/78AAwCn1+RYqusbZQAAAABJRU5ErkJggg=="></image>
		</view>

		<view class="goods-section">
			<view class="g-header b-b">
				<!-- <image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image> -->
				<text class="name">{{goodsInfo[0].mer_name || '店铺'}}</text>
				<text class="order_number"> 订单号 :{{order_num || ''}}</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item" v-for="(item ,index) in goodsInfo" :key="index">
				<image :src="'http://www.tiktokshopee.com' +item.thumbimg"></image>
				<view class="right">
					<view class="title-box">
						<view :class="item.game === '拍卖' ?  'on' : 'off'">{{item.game}}</view>
						<text class="title clamp">{{item.title || '6666'}}</text>
						<!-- <text class="spec">春装款 L</text> -->
					</view>
					<view class="spec-box">
						<text class="spec">规格:</text>
						<text class="number">{{item.color_name}}</text>
					</view>
					<view class="price-box">
						<text class="price">￥{{item.kanMoney || item.on_price || item.price_one}}</text>
						<text class="price-old">￥{{ item.price_one}}</text>
						<view class="number">x{{item.num}}</view>
					</view>
				</view>
			</view>
			<view class="fee">
				<text>配送费</text>
				<text>{{goodsInfo[0].you}}</text>
			</view>
		</view>
	<!-- 	<view class="mark" v-if="isShowMark"> -->
		<view class="mark">
			<view style="padding-bottom: 10upx;">买家留言:</view>
			<input type="text" v-model="markContent">
		</view>
		<!-- 底部 -->
		<view style="height: 80upx;"></view>
		<view class="footer" v-if="!showPay">
			<view class="price-content">
				<view class="price-tip">
					共{{count}}件
				</view>
				<view>
					<text class="price-tip">合计:</text>
					<text class="price">{{sum}}</text>
				</view>
			</view>
			<text class="submit" @tap="submit">去支付</text>
		</view>
		<popup-pay :showPay="showPay" :isGame="isGame" ref="Series" :mark="markContent" :order_num="order_num" :Price="sum" style="z-index: 9999;" @func="setPay"></popup-pay>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interface.js';
	//#ifdef H5
	import {
		get_address,
		add_order,
		on_buy
	} from '../../../utils/hApi.js'
	// #endif
	import popupPay from '../../../components/popupPay.vue';
	export default {
		data() {
			return {
				car_goodsInfo: [],
				goodsInfo: [],
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				count: '',
				sum: '', //总价
				addressData: {
					shou_name: '',
					shou_tell: '',
					province: '',
					area: '',
					address: '',
					mo_ren: ''
				},
				showPay: false,
				set_dizhi: '',
				key: false,
				game: false,
				order_num : '', //订单号
				isGame : false , //是否为游戏
				markContent: '',
				isShowMark : true , //是否显示留言（开砍下单不显示留言） 

			}
		},
		onLoad(option) {
			//商品数据
			//let data = JSON.parse(option.data);

			if (option.car_goodsInfo) { //购物车结算
				this.key = true;
				this.goodsInfo.push(JSON.parse(option.car_goodsInfo));
			} else {
				this.goodsInfo.push(JSON.parse(option.goodsInfo));
			}
			this.goodsInfo.forEach(goods => {
				this.count += goods.num;
				this.sum =parseFloat( goods.num * goods.price_one )+ parseFloat(goods.you);
				if (goods.game == '拍卖') {
					this.isShowMark = false;
					this.game = true;
					this.sum = goods.kanMoney * goods.num + parseFloat(goods.you)|| goods.on_price * goods.num + parseFloat(goods.you);
				}
				this.sum = this.sum.toFixed(2);
			})
			this.initData();
		},
		components: {
			popupPay
		},
		methods: {
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
			numberChange(data) {
				this.number = data.number;
			},
			changePayType(type) {
				this.payType = type;
			},
			submit() {
				if (this.game) { //拍卖
					uni.showLoading({
						title: '订单生成中...'
					}, 500)
					let that = this;
					setTimeout(function() {
						that.request({
							url: interfaces.kan_gou, //购物成商品添加订单
							method: "POST",
							data: {
								kan_id: that.goodsInfo[0].kan_id, //游戏id
								user_address: that.addressData.id, //收货地址id
							},
							success: ((res) => {
								if (res.error_code == 0) { //生成成功
									that.order_num = res.order_num;
									that.isGame = true;
									uni.hideLoading()
									that.showPay = true;
									that.$refs.Series.Payment() //触发子组件方法(获取支付通道)
								}
							})
						});
					}, 1000)
				} else { //普通
					if (this.key) { //通过购物车结算
						let sum = parseInt(this.sum)
						let str = '';
						str += this.goodsInfo[0].id
						uni.showLoading({
							title: '订单生成中...'
						}, 500)
						let that = this;
						setTimeout(function() {
							that.request({
								url: interfaces.add_order, //购物成商品添加订单
								method: "POST",
								data: {
									car_ids: str, //购物车id
									user_address: that.addressData.id, //收货地址id
									all_price: sum, //总价
									mark: that.markContent, //备注
								},
								success: ((res) => {
									if (res.error_code == 0) { //生成成功
										that.order_num = res.order_num;
										uni.hideLoading()
										that.showPay = true;
										that.$refs.Series.Payment() //触发子组件方法(获取支付通道)
									}
								})
							});
							//#ifdef H5
							let goods_data = {
								car_ids: str, //购物车id
								user_address: that.addressData.id, //收货地址id
								all_price: sum, //总价
							}
							add_order().then((res) => {
								if (res.error_code == 0) { //生成成功
									uni.hideLoading()
									that.showPay = true;
									that.$refs.Series.Payment() //触发子组件方法(获取支付通道)
								}
							})
							//#endif
						}, 1000)
					} else {

						let goods_id = this.goodsInfo[0].goods_id; //商品id
						let child_id = this.goodsInfo[0].id; //商品规格id
						let num = this.goodsInfo[0].num; //购买数量
						let user_address = this.addressData.id; //收货地址id 
						let all_price = parseFloat(this.sum); //总价
						all_price= all_price.toFixed(2);
						uni.showLoading({
							title: '订单生成中...'
						}, 500)

						let that = this;
						setTimeout(function() {

							that.request({
								url: interfaces.on_buy, //购买生成订单
								method: "POST",
								data: {
									goods_id,
									child_id,
									num,
									user_address,
									all_price,
									mark: that.markContent, //备注
								},
								success: ((res) => {
									if (res.error_code == 0) { //生成成功
										that.order_num = res.order_num;
										uni.hideLoading()
										that.showPay = true;
										that.$refs.Series.Payment() //触发子组件方法(获取支付通道)
									}
								})
							});
							//#ifdef H5
							let pay_data = {
								goods_id,
								child_id,
								num,
								user_address,
								all_price,
							}
							on_buy(pay_data).then((res) => {
								if (res.error_code == 0) { //生成成功
									uni.hideLoading()
									that.showPay = true;
									that.$refs.Series.Payment() //触发子组件方法(获取支付通道)
								}
							})
							//#endif
						}, 1000)
					}
				}

				// this.showPay = true;
				// this.$refs.Series.Payment() //触发子组件方法(获取支付通道)
			},
			setPay(show) { //传入子组件的方法
				this.showPay = show;
			},
			stopPrevent() {}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F4f4f4;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: #999;
			padding-left: 30upx;

			.top {
				display: flex;
				position: relative;

				.default {
					padding: 0 5upx;
					margin-left: 3vw;
					background-color: #E4E4E4;
					border-radius: 20upx;
					color: #FFFFFF;
				}

				.alter {
					position: absolute;
					right: 3vw;
					background-color: #EE666C;
					color: #FFFFFF;
					height: 5vw;
					line-height: 5vw;
					padding: 0 10upx;
					border-radius: 20upx;
				}
			}
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: #999;
		}

		.icon-you {
			font-size: 32upx;
			color: #999;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
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

		.order_number {
			font-size: 28upx;
			color: #999;
			padding-left: 20upx;
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

					.off {
						width: 8vw;
						height: 5vw;
						text-align: center;
						line-height: 5vw;
						color: #DA5C4E;
						background-color: #FEEDED;
						font-size: 24upx;
						border: 1px solid #DA5C4E;
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
	.mark{
		width: 92%;
		padding: 20upx 4%;
		color: #333;
		font-size: 28upx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 20upx;
		input{
			width: 100%;
			color: #999;
		}
	}
	/*底部*/
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		// z-index: 95;
		display: flex;
		align-items: center;
		flex-direction: column; //子元素竖排
		width: 100%;
		height: 180upx;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: red;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			// padding-left: 30upx;
			width: 92%;
			margin: 15upx 4% 5upx 4%;
			display: flex;
			justify-content: space-between;

			.price-tip {
				color: #333;
				font-size: 34upx;
				padding-right: 15upx;
			}

			.price {
				font-size: 32upx;
				color: red;
			}
		}

		.submit {
			display: flex;
			align-items: center; //垂直居中
			justify-content: center; //水平居中
			width: 92%;
			height: 80upx;
			margin: 10upx 4%;
			color: #fff;
			font-size: 32upx;
			background-color: #EE666C;
		}
	}
</style>
