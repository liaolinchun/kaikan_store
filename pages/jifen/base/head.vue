<template>
	<view>
		<view class="header">
			  <!-- 我的积分 -->
			  <view class="mar_bor" @tap="off">
				  <view class="hide iconfont" >
					&#xe606;
				  </view>
			  </view>
			  <view class="jifen" :class="isShow ? 'open' : 'close'">
				 <test v-if="!isShow">
					  {{jifen + ' 积分'}}
				 </test>
			  </view>
			  <view class="right">
				  <view class="get_jifen">
				  	    领取积分
				  </view>
				  <view class="to_liwu" @tap="navTo">
					  <!-- #ifdef APP-PLUS -->
						<image src="../../static/img/jifen/gift-on.png"></image>
					  <!-- #endif -->
				  	    <image src="../../../static/img/jifen/gift-on.png"></image>
				  </view>
			  </view>
		</view>
		<view class="banner">
			<!-- #ifdef APP-PLUS -->
				<image src="../../static/img/banner.png"></image>
			<!-- #endif -->
			<image src="../../../static/img/banner.png"></image>
		</view>
	</view>
</template>-

<script>
	export default{
		props : ['jifen'],
		data(){
			return{
				isShow : false,
				icon : '&#xe606;',
			}
		},
		methods:{
			off(){ //积分显示开关
				if(this.isShow){
					this.isShow = false;
				}
				else{
					this.isShow = true;
				}
			},
			navTo(){
				console.log('跳转')
				// uni.switchTab({
				// 	url: '../../../packageA/pages/swop/swop'
				// })
				uni.navigateTo({
					url:'../../packageA/pages/swop/swop'
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 94%;
		padding: 0 3%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		// justify-content: space-between; //子元素撑开
		z-index: 10;
		background-color: #EC1C1C;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
			}
		.mar_bor{
			width: 50upx;
			height: 50upx;
			border: 6upx solid #000;
			border-radius: 50%;
			background-color: #EC1C1C;
			z-index: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			.hide{
				width: 80%;
				height: 80%;
				border-radius: 50%;
				font-weight: 800;
				font-size: 20upx;
				line-height: 40upx;
				text-align: center;
				background: conic-gradient(#FFD33C,#FFFAD9, #FFD33C, #FFFAD9, #FFD33C , #FFFAD9,#FFD33C);
			}
		}
		.jifen{
			width: auto;
			height: 45upx;
			border-radius: 35upx;
			background-color: #000;
			margin-left: -50upx;
			color: #fff;
			text-indent: 55upx;
			font-size: 24upx;
			line-height: 45upx;
			padding-right: 20upx;
			
			@keyframes showMenu {
				0% {
					transform: translateX(0);
				}
			
				100% {
					transform: translateX(-80%);
				}
			}
			
			@keyframes closeMenu {
				0% {
					transform: translateX(-30%);
				}
			
				100% {
					transform: translateX(0);
				}
			}
			
			&.open {
				animation: showMenu 0.35s linear both;
			}
			
			&.close {
				animation: closeMenu 0.65s linear both;
			}
		}
		.right{
			position: absolute;
			right: 4%;
			display: flex;
			align-items: center;
			.to_liwu{
				width: 60upx;
				height: 60upx;
				margin-top: -5upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.get_jifen{
				border: 1px solid #fff;
				height: 35upx;
				font-size: 26upx;
				color: #fff;
				padding: 3upx 10upx;
				border-radius: 30upx;
				margin-right: 25upx;
			}
		}
		.banner{
			width: 94%;
			padding: 0 3% 2.5% 3%;
			background-color: #EC1C1C;
			margin-top: 100upx;
			height: 230upx;
			display: flex;
			image{
				width: 100%;
				height: 100%;
			}
		}
</style>
