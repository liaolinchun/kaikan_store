<template>
	<view>
		<!-- <video v-show="showVideo" id="myVideo" class="myVideo" :src="videoSrc" :show-fullscreen-btn="showFullscreenBtn"
		 :direction="videoDirection" @pause="videoPause" @fullscreenchange="viderFullscreen">
		</video> -->
		<view class="null" v-if="showNull">暂无评论~</view>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row,Rindex) in ratingsList" :key="Rindex">
					<view class="left">
						<view class="face">
							<image :src="row.face || 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=145692761,4091651670&fm=26&gp=0.jpg'"></image>
						</view>
					</view>
					<view class="right">
						<view class="name-date">
							<view class="username">
								{{row.username || '砍砍用户'}}
							</view>
							<view class="star" >
								<view class="iconfont" v-for="(item,index) in clicked_list" :key="index">
									<view v-if="item">
										&#xe604;
									</view>
									<view v-else class="starIcon">
										&#xe604;
									</view>
								</view>
							</view>
						</view>
						<view class="spec">
							<view class="date">
								{{row.time}}
							</view>
							<view>
								{{row.spec || ''}}
							</view>
						</view>
						<view class="first">
							<view class="rat">
								{{row.content}}
							</view>
							<view class="img-video">
								<view class="box" v-for="item in row.video" @tap="playVideo(item.path)" :key="item.path">
									<image mode="aspectFill" :src="item.img"></image>
									<view class="playbtn">
										<view class="icon iconfont">&#xe7e9;</view>
									</view>
								</view>
								<view class="box" v-for="item in row.img" @tap="showBigImg(item,row.img)" :key="item">
									<image mode="aspectFill" :src="item"></image>
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelIndex: 0, // 当前评论类型下标
				ratingsList: [],
				videoContext: null, // 播放器对象
				videoDirection: 0, // 全屏方向
				showFullscreenBtn: true, // 是否全屏
				videoSrc: '',
				showVideo: true, // 小程序端隐藏
				clicked_list:[false,false,false,false,false] ,//对应星星个数
				showNull : false
			}
		},
		onLoad() {
			try {
				const comments = uni.getStorageSync('comments'); //读取本地存储
				if (comments) {
					this.ratingsList = comments;
					console.log(this.ratingsList.length)
					if(this.ratingsList.length < 1){
						this.showNull = true;
						console.log('显示')
					}
					else{
						this.showNull = false;
						console.log('隐藏')
					}
					
				}
			} catch (e) {
				// error
			}
			// #ifdef  MP
			this.showVideo = false
			// #endif
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			loadRatings(index) {
				this.labelIndex = index;
			},
			// showBigImg(src, srclist) { // 预览图片
			
			// 	uni.previewImage({
			// 		current: src,
			// 		urls: srclist
			// 	});
			// },
			// playVideo(path) { // 播放视频
			// 	this.videoSrc = path;
			// 	this.$nextTick(function() {
			// 		this.videoContext.requestFullScreen({
			// 			direction: 0
			// 		});
			// 	});
			// 	// #ifdef  MP
			// 	this.showVideo = true;
			// 	// #endif
			// },
			// videoPause() {
			// 	this.videoSrc = '';
			// 	// #ifdef  MP
			// 	this.showVideo = false;
			// 	// #endif
			// },
			// viderFullscreen(e) {
			// 	if (e.detail.fullScreen) { // 全屏
			// 		this.videoContext.play();
			// 	} else { // 退出全屏
			// 		this.videoContext.pause();
			// 	}
			// },
			// videoError(e) {
			// 	console.log(e)
			// },
		}
	}
</script>

<style lang="scss">
	.myVideo {
		position: fixed;
		top: 50%;
		right: 100%;
		// #ifdef  MP
		top: 0;
		right: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		// #endif
	}
	.null{
		//暂无
		width: 100%;
		height: 80upx;
		color: #999;
		text-align: center;
		font-size: 28upx;
		padding-top: 10upx;
	}
		
	.content {
		view {
			display: flex;
		}

		width: 94%;
		padding: 0 3%;

		.list {
			width: 100%;
			flex-wrap: wrap;
			padding: 20upx 0;

			.row {
				width: 100%;
				margin-top: 30upx;

				.left {
					width: 10vw;
					flex-shrink: 0;
					margin-right: 10upx;

					.face {
						width: 100%;

						image {
							width: 10vw;
							height: 10vw;
							border-radius: 100%;
						}

					}
				}

				.right {
					width: 100%;
					flex-wrap: wrap;

					.name-date {
						width: 100%;
						justify-content: space-between;
						align-items: baseline;

						.username {
							font-size: 32upx;
							color: #555;
						}

						.star  {
							font-size: 28upx;
							color: #aaa;
							
							.starIcon{
								color: #FFB910;
							}
						}
					}

					.spec {
						width: 100%;
						color: #aaa;
						font-size: 26upx;
						justify-content: space-between;
						align-items: baseline;
						.date  {
							font-size: 28upx;
							color: #aaa;
							}
					}

					.first {
						width: 100%;
						flex-wrap: wrap;

						.rat {
							font-size: 30upx;
						}

						.img-video {
							width: 100%;
							flex-wrap: wrap;

							.box {
								width: calc((84.6vw - 50upx)/4);
								height: calc((84.6vw - 50upx)/4);
								margin: 5upx 5upx;
								position: relative;
								justify-content: center;
								align-items: center;

								image {
									position: absolute;
									width: 100%;
									height: 100%;
									border-radius: 10upx;
								}

								.playbtn {
									position: absolute;

									.icon {
										font-size: 80upx;
										color: rgba(255, 255, 255, .9)
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
