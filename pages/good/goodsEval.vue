<template>
	<view class="eval-box comments">
		<view class="row">
			<view class="text">商品评论({{goodsData.length}})</view>
			<view class="arrow" @tap="toRatings">
				<view class="show">
					好评度<text>100%</text>
					<view class="icon iconfont">&#xe76c;</view>
				</view>
			</view>
		</view>
		<!-- #ifndef H5 -->
		<view class="comment">
			<view class="user-info">
				<!-- <view class="face">
					<image :src="goodsData.img || ''"></image>
				</view> -->
				<view class="content">
					{{goodsData[0].content || '暂无评论'}}
				</view>
			</view>
			<view class="time">
				{{goodsData[0].time || ''}}
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		props: ['goodsData'],
		data() {
			return {

			}
		},
		methods: {
			toRatings() {
				uni.setStorageSync('comments', this.goodsData)
				uni.navigateTo({
					url: './base/ratings'
				})
			}
		}
	}
</script>

<style lang="scss">
	.eval-box {
		width: 92%;
		padding: 10upx 4% 20upx 4%;
		background-color: #fff;
		margin-top: 10upx;
		margin-bottom: 15upx;
	}

	.comments {
		.row {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 0 0 10upx 0;

			.text {
				font-size: 30upx;
			}

			.arrow {
				font-size: 26upx;
				position: absolute;
				right: 4%;
				color: #333;

				text {
					color: red;
				}

				.show {
					display: flex;
					align-items: center;

					.icon {
						color: #666;
						font-size: 36upx;
						transform: rotate(180deg);
					}
				}
			}
		}

		.comment {
			width: 100%;

			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;
				// .face {
				// 	width: 40upx;
				// 	height: 40upx;
				// 	margin-right: 8upx;

				// 	image {
				// 		width: 40upx;
				// 		height: 40upx;
				// 		border-radius: 100%;
				// 	}
				// }

				.content {
					margin-top: 5upx;
					font-size: 26upx;
					padding-left: 20upx;
				}

			}

			.time {
				margin-top: 10upx;
				font-size: 24upx;
				color: #999;
			}
		}
	}
</style>
