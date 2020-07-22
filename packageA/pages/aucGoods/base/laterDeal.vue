<template>
	<view>
		<view class="main">
			<view class="time">2020-05-20 18:06:59</view>
			<view class="info">
				<view class="left">
					<view>中奖者: 留意少女</view>
					<view>市场价: ￥6689.00</view>
					<view>成交价: ￥5568.00</view>
				</view>
				<view class="right">
					<view>91.37%</view>
					<view>省</view>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="time">2020-05-20 18:06:59</view>
			<view class="info">
				<view class="left">
					<view>中奖者: 留意少女</view>
					<view>市场价: ￥6689.00</view>
					<view>成交价: ￥5568.00</view>
				</view>
				<view class="right">
					<view>91.37%</view>
					<view>省</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		background-color: #f2f2f2;
	}
	.main{
		width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-top: 5upx;
		.time{
			padding: 5upx 0;
			font-size: 24upx;
			color:#999;
		}
		.info{
			width: 100%;
			padding: 10upx 0;
			height: 150upx;
			display: flex;
			justify-content: space-between;
			.left,.right{
				display: flex;
				flex-flow: column; //竖排
				// align-items: center;
				justify-content: center;
			}
			.left{
				font-size: 24upx;
				view{
					padding: 5upx 0;
				}
			}
			.right{
				align-items: center;
				font-size: 34upx;
				color: #EEAD3C;
				font-weight: 550;
				view{
					padding: 7upx 0;
				}
			}
		}
	}
</style>
