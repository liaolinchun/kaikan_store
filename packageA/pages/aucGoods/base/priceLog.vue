<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		
		<view class="pai_list">
			<view class="pai_user cur">
				<view class="text">user1</view>
				<view class="text">领先</view>
				<view class="text">广东广州</view>
				<view class="text">￥1979.20</view>
			</view>
			<view class="pai_user">
				<view class="text">user1</view>
				<view class="text">领先</view>
				<view class="text">广东广州</view>
				<view class="text">￥1979.20</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
	}
</script>

<style lang="scss" scoped>
	.pai_list{
		width: 92%;
		padding: 0 4%;
		background-color: #FFFFFF;
		.cur{
			color: #F8CB70;
		}
		.pai_user{
			width: 100%;
			padding: 20upx 0;
			display: flex;
			font-size: 26upx;
			.text{
				flex: 1;
				text-align: center;
				&:nth-child(1){
					text-align: left;
				}
				&:nth-child(4){
					text-align: right;
				}
			}
		}
	}
</style>
