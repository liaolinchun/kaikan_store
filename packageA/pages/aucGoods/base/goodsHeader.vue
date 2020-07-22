<template>
	<view class="header">
		<!-- 头部-默认显示 -->
		<view class="before">
			<view class="back">
				<view class="icon iconfont"  @tap="back">&#xe76c;</view>
			</view>
			<view class="middle"></view>
		<!-- 	领取积分 -->
			<view class="icon-btn" @tap="navToBuy">
				领取积分
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default{
		data(){
			return{
				//是否显示返回按钮
				// #ifndef MP
				showBack:true,
				// #endif
							
			}
		},
		onLoad(){
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
		},
		computed: {
			...mapState(['hasLogin' , 'userInfo'])
		},
		methods:{
			//返回上一页
			back() {
				uni.navigateBack();
			},
			navToBuy(){//跳转购买
				if(!this.hasLogin){//如果没有登录
					uni.navigateTo({
						url: '../../../pages/public/login'
					})
					return;
				}
				uni.navigateTo({
					url: '../swop/base/toBuy'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 100%;
		height: 80upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.before{
			width: 96%;
			padding: 0 0 0 4%;
			height: 80upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			background-color: #FFFFFF;
			opacity: 0.5;
			/*  #ifdef  APP-PLUS  */
				top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;
			.back{
				width: 60upx;
				height: 60upx;
				flex-shrink: 0;
				.icon{
					width: 50upx;
					height: 50upx;
					line-height: 50upx;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32upx;
				}
			}
			.middle{
				width: 100%;
			}
			.icon-btn{
				width: 130upx;
				height: 40upx;
				flex-shrink: 0;
				display: flex;
				background-color: #FF3366;
				color: #fff;
				border-bottom-left-radius: 30upx;
				border-top-left-radius: 30upx;
				font-size: 28upx;
				line-height:40upx;
				text-align: center;
				text-indent: 15upx;
			}
		}
		.before {

				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.3);
					border-radius: 100%;
					
				}
			
		}
	}
</style>
