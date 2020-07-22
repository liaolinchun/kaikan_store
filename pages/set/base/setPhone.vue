<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<view class="phone on">
			<view class="font">手机号</view>
			<input type="number" v-model="phone" placeholder="请输入手机号码">
		</view>
		<view class="phone">
			<view class="font">验证码</view>
			<input type="number" v-model="verify" placeholder="请输入验证码">
			<view class="btn" @tap="update">获取验证码</view>
		</view>
		<view class="phone">
			<view class="font">新密码</view>
			<input type="number" v-model="password" placeholder="请输入新的密码">
		</view>
		<button class="update" :disabled="logining" @tap="setUpdate">
			确认修改
		</button>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interface.js';
	//#ifdef H5
	import {
		get_code,
		edit_password
	} from '../../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				phone: '',
				verify: '',
				password : '',
				logining: true,
			}
		},
		methods: {
			update() { //获取验证码
				var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (reg.test(this.phone)) {
					//获取验证码
					let tell = this.phone;
					this.request({
						url: interfaces.get_code,
						method: "POST",
						data: {
							tell
						},
						success: ((res) => {
							if (res.error_code === 0) {
								this.logining = false;
							} 
							uni.showToast({
								icon: "success",
								title: "已发送,请注意查收",
							}, 500)
						})
					});
					//#ifdef H5
					let data_code = {
						tell : this.phone
					}
					get_code(data_code).then((res) => {
						if (res.error_code === 0) {
							this.logining = false;
						} 
						uni.showToast({
							icon: "success",
							title: "已发送,请注意查收",
						}, 500)
					})
					// #endif
				} else {
					uni.showToast({
						title: '号码错误',
						icon: 'none',
						duration: 500
					});
					uni.vibrate({ //手机震动
						success: function() {
							console.log('success');
						}
					});
				}
			},
			setUpdate() { //修改密码
				if (!this.password || !this.verify) {
					uni.showToast({
						title: '请输密码或验证码',
						size : 26,
						icon: 'none',
						duration: 500
					});
				}else {
					this.request({
							url: interfaces.edit_password,
							method: "POST",
							data: {
								code : this.verify,
								tell: this.phone,
								password: this.password
							},
							success: ((res) => {
								if (res.error_code == 0) {
									uni.showToast({
										icon: "success",
										title: "成功修改密码!",
									}, 500)
									uni.navigateBack();
								}else{
									uni.showToast({
										icon: "success",
										title: res.data,
									}, 500)
								}
							})
						});
					//#ifdef H5
					let data = {
						code : this.verify,
						tell: this.phone,
						password: this.password
					}
					edit_password(data).then((res) => {
						if (res.error_code == 0) {
							uni.showToast({
								icon: "success",
								title: "成功修改密码!",
							}, 500)
							uni.navigateBack();
						}else{
							uni.showToast({
								icon: "success",
								title: res.data,
							}, 500)
						}
					})
					// #endif
				}
			}
		}
	}
</script>

<style lang="scss">
	.phone {
		display: flex;
		width: 92%;
		height: 10vw;
		line-height: 10vw;
		padding: 0upx 4% 0upx 4%;
		color: #666;
		font-size: 32upx;

		&.on {
			padding-top: 3vw;
		}

		.font {
			min-width: 22%;
		}

		input {
			width: 100%;
			font-size: 30upx;
			line-height: 10vw;
			height: 10vw;
			color: #666;
		}

		.btn {
			width: 38%;
			height: 7vw;
			line-height: 7vw;
			background-color: #FEF0EF;
			border: 1px solid red;
			font-size: 28upx;
			margin-top: 1vw;
			padding: 0 10upx;
			border-radius: 20upx;
		}

		.show {
			width: 38%;
			height: 7vw;
			line-height: 7vw;
			margin-top: 1vw;
			padding: 0 10upx;
			font-size: 28upx;
			color: red;
		}
	}

	.update {
		width: 90%;
		height: 13vw;
		margin: 10vw 5%;
		border-radius: 15upx;
		color: #FFFFFF;
		font-size: 36upx;
		line-height: 13vw;
		text-align: center;
		background-color: #EC5045;
	}
</style>
