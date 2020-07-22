<template>
	<view>
		<view class="order_number">
			订单号 : 8545548461545
		</view>

		<view class="inp_list">
			<view>
				<view class="type">退货原因</view>
				<input type="text" placeholder="请填写退货原因" v-model="cause_val">
			</view>
			<view>
				<view class="type">联系方式</view>
				<input type="text" placeholder="输入联系方式"  v-model="phone_val">
			</view>
			<view>
				<view class="type">申请原因</view>
				<input type="text" placeholder="请输入申请原因" v-model="apply_val">
			</view>
		</view>
		<view class="photo" @tap="setPhoto" v-if="imgList.length != 3">
			<view class="icon iconfont">&#xe622;</view>
			<view class="icon_tit">上传凭证 最多三张</view>
		</view>
		<view class="show_img" v-if="imgList.length > 0">
			<view class="img_box" v-for="(item ,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				<image :src="imgList[index]"></image>
				<view class="cu-tag" @tap.stop="DelImg" :data-index="index">
					<text class='iconfont' style="font-size: 46upx;">&#xe606;</text>
				</view>
			</view>

		</view>
		<view class="btn" @tap="submit">
			提交申请
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				count: 3,
				cause_val : '',
				phone_val : '',
				apply_val : ''

			}
		},
		methods: {
			setPhoto() {

				uni.chooseImage({
					count: this.count,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths);
							this.count =  3 - this.imgList.length;
						} else {
							this.imgList = res.tempFilePaths;
							if(this.imgList.length >= 3) {
								this.imgList = res.tempFilePaths.slice(this.imgList.length - 3 , this.imgList.length);//H5
							}
							this.count =  3 - this.imgList.length;
						}
					}
				});
			},
			ViewImage(e) { //显示查看
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) { //删除
				// uni.showModal({
				// 	title: '删除',
				// 	content: '确定要删除吗？',
				// 	cancelText: '否',
				// 	confirmText: '是',
				// 	success: res => {
				// 		if (res.confirm) {
				// 			this.imgList.splice(e.currentTarget.dataset.index, 1)
				// 		}
				// 	}
				// })
				this.imgList.splice(e.currentTarget.dataset.index, 1);
				// console.log(this.imgList.length)
				this.count =  3 - this.imgList.length;
			},
			submit(){//提交
				console.log(this.phone_val ,this.imgList)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7F7F7;
	}

	.order_number {
		width: 94%;
		padding: 0 3%;
		height: 120upx;
		margin-top: 5upx;
		background-color: #EBEBEB;
		color: #999;
		font-size: 32upx;
		line-height: 120upx;
	}

	.inp_list {
		width: 100%;
		margin-top: 5vw;

		.type {
			width: 94%;
			padding: 0 3%;
			height: 60upx;
			line-height: 60upx;
			color: #666;
			font-size: 24upx;

		}
		select{
			width: 100%;
			border: none;
			outline: none;
			height: 90upx;
			color: #999;
		}
		input {
			width: 94%;
			padding: 0 3%;
			height: 90upx;
			background-color: #fff;
			font-size: 36upx;
		}
	}

	.photo {
		width: 94%;
		margin: 50upx 3% 0upx 3%;
		height: 90upx;
		border: 1px dashed #aaa;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.icon {
			font-size: 44upx;
			padding-left: 20upx;
			color: #aaa;
		}

		.icon_tit {
			padding-right: 20upx;
			font-size: 28upx;
			color: #aaa;
		}
	}

	.btn {
		width: 92%;
		height: 80upx;
		background-color: #fff;
		margin: 20upx 4%;
		text-align: center;
		line-height: 80upx;
		font-size: 32upx;
		box-shadow: 5px 5px 10px #ddd;
		margin-bottom: 15upx;
	}

	.show_img {
		width: 90%;
		margin: 20upx 3% 30upx 3%;
		min-height: 180upx;
		border: 1px dashed #aaa;
		padding: 30upx 2%;
		display: flex;

		.img_box {
			width: 33%;
			background-color: #000;
			border: 1px solid #000;
			margin: 0 10upx;
			position: relative;

			image {
				width: 100%;
				height: 100%;

			}

			.cu-tag {

				text-align: center;
				position: absolute;
				top: 0;
				right: 0;
				color: #fff;
				width: 50upx;
				height: 50upx;
				background-color: #000;
				line-height: 50upx;
				opacity: .7;
				
			}
		}
	}
</style>
