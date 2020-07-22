<template>
	<view>
		<!-- 状态栏 -->
		<view class="status"></view>
		<!-- 导航条 -->
		<page-head></page-head>
		<view class="banner">
			<image src="../../static/img/banner.png"></image>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="row">
					<view v-for="(row ,ind) in categoryList" :key="ind" class="scroll-view-item_H" :class="{'on' : ind == showCategoryIndex}"
					 @tap="showCategory(row)">{{row.b_name}}</view>
				</view>
			</scroll-view>
		</view>
		<!--列表-->
		<page-hot :showTitle="showTitle" :footer_Text="footer_Text" :hotList="goodsListCur"></page-hot>
		<view class="footer_font" >{{footer_Text}}</view>
	</view>
</template>

<script>
	import pageHead from './base/head.vue';
	import pageHot from '../home/base/pageHot.vue';
	import interfaces from '../../utils/interface.js';
	//#ifdef H5
	import {get_bc_goods} from '../../utils/hApi.js';
	// #endif
	export default {
		data() {
			return {
				goodsList: [], //得到的商品列表
				goodsListCur: [],
				addCategory: [], //新更新的数据
				showTitle: false,
				categoryList: [], //分类列表
				currentPage: 2, //第一页
				pagesize: 7, //每次加载8条
				showCategoryIndex: 0, //显示类目
				footer_Text : '暂无数据',
				index : '',
			}
		},
		components: {
			pageHead,
			pageHot
		},
		onLoad(option) {
			
			if(option.goodsInfo){ //搜索所得商品
				
				let data = JSON.parse(option.goodsInfo);	
				this.goodsList = data;
				this.footer_Text = '数据加载中...'
				this.get_goodsCur();//下拉刷新
			}else if(option.goods_id){ //分类跳转所得商品
				
				this.showCategoryIndex = option.goods_id - 1;
				let e = option.goods_id;
				this.index = e;
				this.initData(e)
			}
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
		methods: {
			showCategory(item) {
				//分类切换显示
				this.showCategoryIndex = item.id - 1;
				// onReachBottom(index)
				uni.showLoading({
					title: '加载中...'
				});
				this.initData(item.id)
			},
			async initData(e) {
				
				this.goodsListCur = [];
				this.request({
					url: interfaces.get_bc_goods, //获取分类商品 e分类id
					method: "POST",
					data: {
						b_class: e
					},
					success: ((res) => {
						if (res.error_code == 0) {
							this.goodsList = res.data;
						    this.footer_Text = '数据加载中...'
							// this.get_goodsCur();//下拉刷新
							this.goodsListCur = this.goodsList.slice(0 , this.pagesize) //初始化显示数据
							if(this.goodsListCur.length < 7){
								this.footer_Text = '到底了';
							}
						}else{
							this.footer_Text = '暂无数据'
						}
					})
				});
				//获取本地
				// let data = await this.$api.json('data');
				// this.categoryList = data.categoryList;
				this.request({
					url: interfaces.get_bigclass, //获取分类名称
					success: ((res) => {
						if(res.error_code == 0){
							this.categoryList = res.data;
						}
					})
				});
				//#ifdef H5
				get_bigclass().then((res) => {
					if(res.error_code == 0){
						this.categoryList = res.data;
					}
				})
				let goodData = {
					b_class : e
				}
				get_bc_goods(goodData).then((res) => {
					if (res.error_code == 0) {
						this.goodsList = res.data;
					    this.footer_Text = '数据加载中...'
						// this.get_goodsCur();//下拉刷新
						this.goodsListCur = this.goodsList.slice(0 , this.pagesize) //初始化显示数据
						if(this.goodsListCur.length < 7){
							this.footer_Text = '到底了';
						}
					}else{
						this.footer_Text = '暂无数据'
					}
				})
				// #endif

			},
			get_goodsCur(){
				let data = this.goodsList;
				this.addCategory = data.slice((this.currentPage - 1) * this.pagesize, this.currentPage *
					this.pagesize)
				if (this.addCategory.length > 0) { //如果数据更新
					uni.hideLoading();
					this.addCategory.forEach(item => {
						this.goodsListCur.push(item)
					})
					if(this.addCategory.length < 7){
						
						// this.addCategory.forEach(item => {
						// 	this.goodsListCur.push(item)
						// })
						this.footer_Text = '到底了';
						
					}
				} else{
					uni.hideLoading();
					this.footer_Text = '到底了';
				}
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				this.initData(this.index)
			}, 1000);
		},
		// 上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showLoading({
				title: '加载中...'
			},50);
			this.get_goodsCur();
			this.currentPage++
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

	.scroll-view_H {
		height: 60upx;
		width: 94%;
		margin: 0 3%;


		.row {
			height: 80upx;
			display: flex;


			.scroll-view-item_H {

				flex-shrink: 0;
				// flex-shrink 表示在父元素宽度不够的情况下是否自动收缩 0表示不自动收缩 1表示自动收缩 
				height: 90%;
				line-height: 80upx;
				justify-content: center;
				font-size: 30upx;
				padding: 0 20upx;
				display: flex;
				align-items: center;

				&.on {
					color: red;
					font-size: 28upx;
				}
			}
		}
	}

	.banner {
		width: 100%;
		height: 280upx;
		display: flex;

		image {
			width: 100%;
			height: 100%;
		}
	}
	.footer_font{
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
</style>
