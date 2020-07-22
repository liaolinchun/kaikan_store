<template>
	<view>
		<!-- 状态栏 -->
		<view class="status"></view>
		<!-- 头部 -->
		<jifen-head :jifen="jifen"></jifen-head>
		<!-- 提示 -->
		<view class="hint">
			<view class="hint_text">
				<view class="text" v-for="(item, index) in marqueeList" :key="index" :class="{marquee_top:animate}">
					<text class="cur">恭喜</text>
					<text>{{item.name}}以￥15.40</text>
					<text class="cur">拍中</text>
					<text>{{item.city}}第四个房间</text>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<jifen-list ref="Series" :goodsList="goodsList" :categoryList="categoryList"></jifen-list>
	</view>
</template>

<script>
	import interfaces from '../../utils/interface.js';
	import jifenHead from './base/head.vue'
	import jifenList from './base/jifenList.vue'
	export default {
		data() {
			return {
				jifen : 20,//积分
				categoryList: [], //分类列表
				goodsList: [], //商品列表
				animate: false,
				marqueeList: [{
						name: '130****3195',
						city: '北京',
						amount: '10'
					},
					{
						name: '150****2454',
						city: '上海',
						amount: '20'
					},
					{
						name: '131****2329',
						city: '广州',
						amount: '30'
					},
					{
						name: '183****5685',
						city: '重庆',
						amount: '40'
					}
				]
			}
		},
		components: {
			jifenHead,
			jifenList
		},
		onLoad() {
			this.initData();
			// this.$refs.Series.getTime()
		},
		created() {
			setInterval(this.showMarquee, 5000)
		},
		methods: {
			showMarquee() {
				this.animate = true;
				setTimeout(() => {
					this.marqueeList.push(this.marqueeList[0]);
					this.marqueeList.shift();
					this.animate = false;
				}, 1000)
			},
			// ceshi(e) {
			// 	console.log('456', e)
			// 	this.$refs.Series.getTime()
			// },
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
					url: interfaces.shoping_shop, //积分商城首页数据
					success: ((res) => {
						console.log(res)
						if (res.error_code == 0) {
							this.goodsList = res.data;
						}
					})
				});
				this.request({
					url: interfaces.get_jifen, //获取用户积分
					method: "POST",
					success: ((res) => {
						this.jifen = res.data;
					})
				});
			},
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

	.marquee_top {
		transition: all .5s;
		margin-top: -50upx;
	}

	.hint {
		width: 92%;
		padding: 15upx 4%;
		height: 60upx;
		background-color: #434343;
		overflow: hidden;
	


		.hint_text {
			width: 94%;
			height: 100%;
			padding: 0 3%;
			border: 1px solid #fff;
			border-radius: 20upx;
			line-height: 60upx;
			font-size: 30upx;
			background-color: #FFCC00;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: normal !important;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			position: relative;

			.text {
				// display: block;
				// position: absolute;
				height: 100upx;
			}

			.cur {
				color: red;
			}
		}
	}
</style>
