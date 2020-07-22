<template>
	<view class="popup spec" v-show="spaceInfo.showSpace">
		<!-- 遮罩层 -->
		<view class="mask" @tap.stop="hideSpec"></view>

		<view class="layer">
			<view class="content">
				<view class="master">
					<view class="left">
						<image :src="'http://www.tiktokshopee.com' + data.thumbimg"></image>
					</view>
					<view class="right">
						<view class="new">{{data.price_one}}</view>
						<view class="soldOut">库存{{data.kucun || '0'}}件</view>
						<view class="select">选择 规格</view>
					</view>
				</view>
				<view class="title">选择:</view>
				<!-- <view class="sp"> -->
			   <scroll-view scroll-y="true" class="sp">
					<view v-for="(item ,index) in goodsSpec" @tap.stop="setSelectSpec(item)" :class="{'null' : item.kucun == 0 ,'on': item.id == data.id }"  :key="index">{{item.color_name}}</view>
				</scroll-view>
			<!-- 	</view> -->
				<view class="length">
					<!-- 					@func="getSelect" -->
					<counter @minus="minus" @add="add" :goodsInfo="goodsInfo"></counter>
				</view>
			</view>
			<view class="btn">
				<button class="confirm-btn button"  @tap.stop="hideSpec">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import counter from '../../../components/counter.vue'
	export default {

		props: [ "spaceInfo", "goodsInfo", "goodsSpec"],
		data() {
			return {
				isShow: '',
				data: {
					color_name : '',
					goods_id : '',
					id : '',
					kucun : '',
					price_one : '',
					thumbimg : '',
				} ,//选中商品的信息
			}
		},
		methods: {

			hideSpec() {
				this.$emit('func', this.data, false)
			},
			// getSelect(data) { //传入子组件的方法
			// 	this.count = data;
			// },
			setSelectSpec(item) { // 选择规格	
				if(item.kucun == 0){
					return;
				}else{
					this.data = item;
				}
			},
			bridge() {
				//初始默认
				// this.data = this.goodsSpec[0];
				console.log(this.goodsSpec)
				if(this.goodsSpec[0].kucun != ''){
					this.data = this.goodsSpec[0];
				}else if(this.data.thumbimg == ''){
					this.data.thumbimg = this.goodsSpec[0].thumbimg;
					this.data.price_one = this.goodsSpec[0].price_one;
				}
			},
			minus() {
				this.$emit("minus");
			},
			add() {
				this.$emit("add");
			}
		},
		components: {
			counter
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
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: 0;
			width: 92%;
			padding: 0 4%;
			max-height: 90%;
			min-height: 75%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				width: 100%;
				padding: 20upx 0;
				position: relative;

				.master {
					background-color: #F2F2F2;
					display: flex;

					.left {
						width: 30%;
						height: 25vw;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.right {
						width: 70%;
						padding-left: 30upx;
						display: flex;
						flex-flow: column;

						.new {
							font-size: 42upx;
							font-weight: 600;
							padding-top: 20upx;
							color: #DB2351;
						}

						.soldOut {
							font-size: 24upx;
							color: #aaa;
							padding-top: 10upx;
							padding-left: 10upx;
						}

						.select {
							font-size: 28upx;
							color: #666;
							padding-left: 8upx;
							padding-top: 2upx;
							padding-bottom: 5upx;
						}
					}
				}
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;
				flex-wrap: wrap; //超出换行
				width: 100%;
				max-height: 70vw;
				padding: 5upx;
				align-items: center;
				box-sizing: border-box;
				overflow: hidden;
				// .spec_list {
				// 	width: 100%;
				// 	height: 100%;
					// box-sizing: border-box;
					// overflow: hidden;
				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 20upx 20upx 0;
					background-color: #eee;
					color: #999;

					&.on {
						// padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
					&.null{
						background-color: #f9f9f9;
						color: #ddd;
					}
				}
			// }
		}

			.length {
				margin-top: 30upx;
				border-top: solid 1upx #eee;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;

			}

		}
	}
</style>
