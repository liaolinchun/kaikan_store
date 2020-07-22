<template>
	<view>
		<!-- 状态栏 -->
		<view class="status"></view>
		<view class="head">
			<!-- 提示 -->
			<view class="hint" @tap="buy">
				<view class="hint_text">
					<view class="left">
						<view class="img">
							<image src="../../../static/img/jifen/gift.png"></image>
						</view>
						<view>礼品卡</view>
					</view>
					<view class="right">
						<view>0.00</view>
						<view class="iconfont icon">&#xe76c;</view>
					</view>
				</view>
			</view>
			<view class="scroll_list">
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="row">
						<view v-for="(row ,ind) in categoryList" :key="ind" class="scroll-view-item_H" :class="{'on' : ind == showCategoryIndex}"
						 @tap="showCategory(row)">{{row.b_name}}</view>
					</view>
				</scroll-view>
			</view>
			<!-- 筛选 -->
			<view class="select">
				<view :class="{'cur' : selectIndex == 1}" @tap="showIndx(1)">
					销量
				</view>
				<view  @tap="spin(1)" :class="rotate_x ? 'rotate' : 'img'">
					<image src="../../static/img/paixu.png"></image>
				</view>
				<view class="price_text" :class="{'cur' : selectIndex == 2}" @tap="showIndx(2)">价格</view>
				<view @tap="spin(0)" :class="rotate_j  ? 'rotate' : 'img'">
					<image src="../../static/img/paixu.png"></image>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<swop-list :hotList="hotList"></swop-list>
	</view>
</template>

<script>
	import swopList from './base/swopList.vue'
	import interfaces from '../../../utils/interface.js';
	export default {
		data() {
			return {
				categoryList: [], //分类列表
				hotList: [], //商品列表
				showCategoryIndex: 0, //显示类目
				selectIndex : 1, //热销价格切换
				rotate_x : true ,//销量排序 （true降序 false升序）
				rotate_j : false, //价格排序 
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			async initData() {
				this.request({
					url: interfaces.get_bigclass, //获取分类名称
					success: ((res) => {
						if (res.error_code == 0) {
							this.categoryList = res.data;
						}
					})
				});
				this.request({
					url: interfaces.get_hotgoods, //获取热卖商品
					method: "POST",
					success: ((res) => {
						console.log(res.data)
						this.hotList = res.data;
					})
				});
			},
			showCategory(item) {
				//分类切换显示
				this.showCategoryIndex = item.id - 1;

				// uni.showLoading({
				// 	title: '加载中...'
				// });
			},
			showIndx(e){
				this.selectIndex = e;
			}, 
			buy(){//购买会员
				console.log('会员')
				uni.navigateTo({
					url:'./base/buyMember'
				})
			},
			spin(e){//排序
				if(e){//如果是0 改变销量排序 否则改变价格	
					this.rotate_x = !this.rotate_x;  //销量排序
				}else{
					this.rotate_j = !this.rotate_j;  //价格排序
					if(this.rotate_j){
						this.hotList = this.hotList.sort((a , b) => { //升序 原生js数组sort方法
							return a.price - b.price
						})
					}
					else{
						this.hotList = this.hotList.sort((a , b) => { //降序
							return b.price - a.price
						})
					}
				}
			}
		},
		components: {
			swopList
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				this.initData();
			}, 1000);
		},
	}
</script>

<style lang="scss">
	.status {
		width: 100%;
		position: fixed;
		z-index: 10;
		background-color: #EC1C1C;
		top: 0;
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}
	
	.head {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.scroll_list {
		width: 94%;
		// padding: 0 3%;
		padding: 8upx 3%;
		background-color: #fff;
		// position: fixed;
		// top:90upx; //覆盖样式;

		.scroll-view_H {
			// height: 50upx;
			width: 100%;

			.row {
				height: 50upx;
				display: flex;

				.scroll-view-item_H {

					flex-shrink: 0;
					// flex-shrink 表示在父元素宽度不够的情况下是否自动收缩 0表示不自动收缩 1表示自动收缩 
					height: 90%;
					line-height: 50upx;
					justify-content: center;
					font-size: 26upx;
					padding: 0 10upx;
					display: flex;
					align-items: center;
					background-color: #F2F2F2;
					margin: 0 10upx;

					&:nth-child(1) {
						margin: 0;
					}

					&.on {
						color: #EC1C1C;
						background-color: #FEEDED;
						font-size: 26upx;
						border: 1px solid #EC1C1C;
					}
				}
			}
		}
	}

	/*筛选*/
	.select {
		width: 92%;
		padding: 0 4%;
		height: 50upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		font-size: 26upx;
		.price_text{
			padding-left: 30upx;
		}
		.cur{
			color: red;
		}
		.rotate{
			transform: rotate(180deg);
		}
		.rotate,.img {
			width: 30upx;
			height: 40upx;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
	}

	.hint {
		width: 92%;
		padding: 15upx 4%;
		height: 60upx;
		background-color: #434343;

		// position: fixed;
		// top: 0;
		.hint_text {
			width: 94%;
			height: 100%;
			padding: 0 3%;
			border: 1px solid #fff;
			border-radius: 20upx;
			line-height: 70upx;
			font-size: 30upx;
			background-color: #FFCC00;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				/* 	border: 1px solid #007AFF; */
				display: flex;
				align-items: center;
				font-size: 26upx;

				.img {
					width: 45upx;
					height: 45upx;
					padding-right: 15upx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.right {
				font-size: 26upx;
				display: flex;
				align-items: center;

				.icon {
					transform: rotate(-180deg);
					font-size: 32upx;
					padding-right: 15upx;
				}
			}
		}
	}
</style>
