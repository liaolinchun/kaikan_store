<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 顶部导航栏 -->
		<page-head></page-head>
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="{'on' : index == showCategoryIndex}"
				 @tap="showCategory(category)">
					<view class="text">
						<view class="block"></view>
						<!-- {{category.title}} -->
						{{category.b_name}}
					</view>
				</view>
			</scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view scroll-y="true" class="right">
				<view class="category" v-for="(category , index) in categoryListCur" :key="index" @tap="toGoods(category)">
					<view class="image-wrapper">
						<image :src="'http://www.tiktokshopee.com' +category.img"></image>
					</view>
					<view class="category-font">
						<text class="fontTitle">{{category.title}}</text>
						<view class="price">
							<text class="old">{{category.market_price}}</text>
							<text class="new"><text class="cur">￥</text>{{category.price}}</text>
						</view>
						<view class="soldOut">
							<text><text>已售</text>{{category.shouchu}}</text>
						</view>
						<view class="integral">
							<text>赠{{category.jifen}}积分</text>
						</view>
					</view>
				</view>
				<view class="loading-text">{{footer_Text}}</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import 	interfaces from '../../utils/interface.js'
	import pageHead from '../home/base/pageHeader.vue'
	//#ifdef H5
	import {get_bigclass ,get_bc_goods} from '../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				categoryList: [], //获取用户分类
				categoryListCur: [], //选中类目
				addCategory: [], //新更新的数据
				showCategoryIndex: 0, //初始显示页面
				currentPage: 2, //第一页
				pagesize: 7, //每次加载7条
				atIndex: 0,
				footer_Text : '暂无数据'
			}
		},
		components: {
			pageHead
		},
		methods: {
			async initData(e) {
				this.categoryListCur = []; //切换类目初始化
				console.log(this.categoryListCur)
				this.request({
					url: interfaces.get_bigclass, //获取用户分类
					method: "POST",
					success: ((res) => {
						this.categoryList = res.data;
					})
				});
				this.request({
					url: interfaces.get_bc_goods, //获取分类商品 e分类id
					method: "POST",
					data: {
						b_class: e
					},
					success: ((res) => {
						console.log(res , '6666')
						if (res.error_code == 0) {
							
							this.goodsList = res.data;
						    this.footer_Text = '数据加载中...';
							// this.get_goodsCur();//下拉刷新
							this.categoryListCur = this.goodsList.slice(0 , this.pagesize) //初始化显示数据
							if(this.categoryListCur.length < 7){
								this.footer_Text = '到底了';
							}
						}else{
							this.footer_Text = '暂无数据'
						}
					})
				});
				//#ifdef H5
				this.categoryListCur = []; //切换类目初始化
				let res = await get_bigclass()
				this.categoryList = res.data;
				let data = {
					b_class : e
				}
				get_bc_goods(data).then((res) => {
					if (res.error_code == 0) {
						
						this.goodsList = res.data;
					    this.footer_Text = '数据加载中...';
						// this.get_goodsCur();//下拉刷新
						this.categoryListCur = this.goodsList.slice(0 , this.pagesize) //初始化显示数据
						if(this.categoryListCur.length < 7){
							this.footer_Text = '到底了';
						}
					}else{
						this.footer_Text = '暂无数据'
					}
				}) //获取分类商品 e分类id
				// #endif
			},
			get_goodsCur(){
				let data = this.goodsList;
				this.addCategory = data.slice((this.currentPage - 1) * this.pagesize, this.currentPage *
					this.pagesize)
				if (this.addCategory.length > 0) { //如果数据更新
					uni.hideLoading();
					this.addCategory.forEach(item => {
						this.categoryListCur.push(item)
					})
					if(this.addCategory.length < 7){
						
						// this.addCategory.forEach(item => {
						// 	this.categoryListCur.push(item)
						// })
						this.footer_Text = '到底了';
						
					}
				} else{
					uni.hideLoading();
					this.footer_Text = '到底了';
				}
			},
			showCategory(item) { //切换类目
				//分类切换显示
				this.showCategoryIndex = item.id - 1;
				// onReachBottom(index)
				uni.showLoading({
					title: '加载中...'
				});
				this.initData(item.id); //发起对应类目请求
			},
			//商品跳转
			toGoods(e) {
				uni.navigateTo({
					url: "../good/goods?goods_id=" + e.id
				});
			},
		},
		onLoad(option) {
			
			this.initData(1); //默认获取第一类目
			//#ifdef MP-WEIXIN
			// wx.showShareMenu的真正作用，是控制是否显示转发分享菜单在 "...”菜单中，而不是直接弹出分享界面。
			
			// wx.showShareMenu 的参数 withShareTicket 为 true 时，点击模拟器右上角菜单后出现的转发按钮，会出现一个测试群列表
			
			uni.showShareMenu({ //
				withShareTicket : true,
				success : function(res){
					console.log(res)
				},
				fail : function(res){
					console.log(res)
				}
			})
			//#endif
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
			console.log('123')
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showLoading({
				title: '加载中...'
			});
			this.get_goodsCur();
			this.currentPage++
		},
		
	}
</script>

<style lang="scss">
	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;
		
		.left {
			width: 24%;
			background-color: #f2f2f2;
			position: fixed;
			// top: 90upx;
			// /*  #ifdef  APP-PLUS  */
			// top: var(--status-bar-height) + 90 'upx'; //覆盖样式
			// /*  #endif  */
			left: 0;
			.row {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #999;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background-color: #fff;

					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #666;

						.block {
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}

		.right {
			position: absolute;
			width: 76%;
			left: 24%;
			/*  #ifdef  H5  */
				padding-bottom: 120upx;
			/*  #endif  */
		

			.category {
				padding: 6upx 15upx;
				display: flex;

				.image-wrapper {
					flex: 4;
					height: 28vw;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.category-font {
					flex: 6;
					height: 28vw;
					display: -webkit-box;
					flex-direction: column; //子元素竖排
					overflow: hidden;

					.fontTitle {
						width: 100%;
						font-size: 25upx;
						line-height: 30upx;
						height: 60upx;
						padding-left: 10upx;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						word-wrap: break-word;
						white-space: normal !important;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.price {
						width: 100%;
						height: 60upx;
						display: flex;

						.old {
							flex: 1;
							font-size: 28upx;
							padding: 0 15upx 0 5upx;
							color: #999;
							line-height: 60upx;
							text-decoration: line-through;
						}

						.new {
							flex: 1;
							font-size: 32upx;
							padding: 0 15upx 0 5upx;
							color: #FF675F;
							line-height: 60upx;
							font-weight: 500;
							text-align: right;

							.cur {
								font-size: 16upx;
							}
						}
					}

					.soldOut {
						border: 1px solid #EE666C;
						width: 94%;
						height: 4.5vw;
						margin-left: 3%;
						border-radius: 15upx;
						background-color: #FFF5F0;
						text-align: center;
						font-size: 12upx;
						line-height: 4.5vw;
						color: #aaa;
					}

					.integral {
						width: 100%;
						height: 50upx;
						background-color: #FDEB46;
						font-size: 18upx;
						margin-top: 10upx;
						line-height: 50upx;
						text-align: center;
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
		}
	}

</style>
