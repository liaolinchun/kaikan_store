<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<view class="mian">
			<view class="user">大叔****</view>
			<view class="type">
				<view>2020-05-20</view>
				<view>华为 Meta 30 pro 5GB+250GB</view>
			</view>
			<view class="content">非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好</view>
			<view class="imgs">
				<image></image>
				<image></image>
				<image></image>
				<image></image>
				<image></image>
			</view>
		</view>
		<view class="mian">
			<view class="user">大叔****</view>
			<view class="type">
				<view>2020-05-20</view>
				<view>华为 Meta 30 pro 5GB+250GB</view>
			</view>
			<view class="content">非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好</view>
			<view class="imgs">
				<image></image>
				<image></image>
				<image></image>
				<image></image>
				<image></image>
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
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f2f2f2;
		.mian{
			width: 90%;
			padding: 2%;
			background-color: #fff;
			margin: 20upx 3%;
			.user{
				color: #999;
				font-size: 30upx;
				display: flex;
				padding: 5upx 0;
			}
			.type{
				color: #999;
				font-size: 26upx;
				display: flex;
				justify-content: space-between;
			}
			.content{
				padding-top: 30upx;
				color: #333;
				font-size: 32upx;
			}
			.imgs{
				display: flex;
				padding-top: 10upx;
				flex-wrap: wrap;
				image{
					width: 140upx;
					height: 150upx;
					flex-wrap: wrap;
					margin: 10upx;
					background-color: #00CC99;
				}
			}
		}
	}
</style>
