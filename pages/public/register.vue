<template>
	<view class="container">
		<!-- 状态栏 -->
		<page-status></page-status>

		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon iconfont" @click="navBack">&#xe76c;</view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">REGISTER</view>
			<view class="welcome">
				注册用户！
			</view>
			<view class="input-content">
				<view class="input-item">
					<view class="type">
						<text class="tit">手机号码</text>
						<view v-if="isVerify" class="cur" @tap="huoqu">获取验证码</view>
						<view v-else class="notCur">{{hint}}</view>
					</view>
					<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
				</view>
				<view class="input-item">
					<view class="type">
						<text class="tit">验证码</text>
						<view v-if="toVerify" class="iconfont" style="color: #4CD964;">&#xe6b8;</view>
					</view>
					<input type="mobile" value="" placeholder="请输入验证码" placeholder-class="input-empty" maxlength="20" password
					 data-key="verify" @input="inputChange" @confirm="toRegister" />
				</view>
				<view class="input-item">
					<view class="type">
						<text class="tit">请输入密码</text>
						<view v-if="toRes" class="iconfont" style="color: #4CD964;">&#xe6b8;</view>
					</view>
					<input type="mobile" value="" placeholder="6位以上数字、字母组合" placeholder-class="input-empty" maxlength="20" password
					 data-key="password" @input="inputChange" @confirm="toRegister" />
				</view>
			</view>
			<button class="confirm-btn" @click="toRegister" :disabled="logining">注册</button>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {
		get_yan,
		zhuce,
		set_password
	} from '../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				mobile: '',
				verify: '',
				password: '',
				logining: true,
				isVerify: false, //显示获取验证码
				toVerify: false, //验证码输入
				toRes: false, //输入密码成功
				miaos: 9,
				miao: 5,
				hint: '获取验证码',
				clear: false,
				yan_zheng: ''
			}
		},
		onLoad() {

		},
		methods: {

			inputChange(e) {
				const key = e.currentTarget.dataset.key; //监控输入
				this[key] = e.detail.value; //号码
				const {
					mobile
				} = this;

				var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (reg.test(mobile)) {
					this.isVerify = true;
				} else {
					this.isVerify = false;
				}

			},
			navBack() {
				setTimeout(() => {
					uni.navigateTo({
						url: './login'
					})
				}, 500)
			},
			time() {
				this.hint = `${this.miao}${this.miaos}s后可重新获取`
				this.miaos--;
				if (this.miaos < 0) {
					this.miaos = 9;
					this.miao--;
					if (this.miao < 0) {
						this.miao = 0;
						this.miaos = 0;
						this.isVerify = true;
						this.hint = '获取验证码';
						this.clear = true;
						return;
					}
				}
			},
			huoqu() {
				//获取验证码
				let tell = this.mobile;
				this.request({
					url: interfaces.get_yan,
					method: "POST",
					data: {
						tell
					},
					success: ((res) => {
						console.log(res)
						if (res.error_code == 0) {
							this.yan_zheng = res.data;
							this.logining = false;
							this.isVerify = false; //60秒后 可重新获取
							let self = this;
							let timer = setInterval(function() {
								if (self.clear) {
									// console.log('清除')
									clearInterval(timer)
								} else {
									self.time();
								}
							}, 1000)
							uni.showToast({
								icon: "success",
								title: "已发送,请注意查收",
								duration: 1500,
							})
						} else {
							uni.showToast({
								icon: "none",
								title: res.data,
								duration: 1500,
							})
						}
					})
				});
				//#ifdef H5
				let data_yan = {
					tell: this.mobile
				}
				get_yan(data_yan).then((res) => { //发送验证码
					this.logining = false;

					if (res.error_code == 0) {
						this.yan_zheng = res.data;
						uni.showToast({
							icon: "success",
							title: "已发送,请注意查收",
						}, 500)
					} else {
						uni.showToast({
							icon: "none",
							title: res.data,
						}, 500)
					}
				})
				// #endif
			},
			async toRegister() {
				// this.logining = true;
				const {
					mobile,
					verify,
					password
				} = this;

				if (!mobile) {
					uni.showToast({
						icon: "none",
						title: "请输入手机号"
					})
					return;
				} else if (!verify) {
					uni.showToast({
						icon: "none",
						title: "请输入验证码"
					})
					return;
				} else if (verify != this.yan_zheng) {
					//验证验证码验证码	
					uni.showToast({
						icon: "none",
						title: "验证码错误",
						duration: 1500,
					})
				} else {
					this.request({
						url: interfaces.set_password,
						method: "POST",
						data: {
							tell: this.mobile,
							password: this.password
						},
						success: ((res) => {
							if (res.error_code == 0) {
								uni.showToast({
									icon: "success",
									title: "注册成功!",
									duration: 1000,
								})
								let self = this;
								let isReg = true;
								setTimeout(function() {
									uni.navigateTo({
										url: './login?isReg=' + isReg
									}) //跳转登录
								}, 1000)
							}
						})
					});
					//h5
					//#ifdef H5
					let data_zhu = {
						code: this.verify
					}
					let data_set = {
						tell: this.mobile,
						password: this.password
					}
					set_password(data_set).then((res) => {
						if (res.error_code == 0) {
							uni.showToast({
								icon: "success",
								title: "注册成功!",
								duration: 1500,
							})
							let self = this;
							setTimeout(function() {
								self.navBack(); //跳转登录
							}, 1000)
						}
					})
					// #endif
				}
			}
		},

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 115px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
		box-sizing: border-box;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: #999;
	}

	.left-top-sign {
		font-size: 120upx;
		color: #F8F8F8;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: fixed;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: fixed;
		left: -270upx;
		bottom: -320upx;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 30upx;
		background: #F8F6FC;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		.type {
			display: flex;
			flex: 1;
			justify-content: space-between;
			/* 子元素撑开 */
			align-items: center;
			padding-top: 10upx;

			.tit {
				height: 50upx;
				line-height: 56upx;
				font-size: 30upx;
				color: #606266;
			}

			.cur {
				font-size: 22upx;
				line-height: 50upx;
				background-color: #FA436A;
				color: #fff;
				padding: 0 20upx;
				border-radius: 50upx;

			}

			.notCur {
				font-size: 22upx;
				line-height: 50upx;
				background-color: #999999;
				color: #fff;
				padding: 0 20upx;
				border-radius: 50upx;

			}

		}

		&:last-child {
			margin-bottom: 0;
		}

		input {
			height: 60upx;
			font-size: 32upx;
			color: #666;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: #FA436A;
		color: #fff;
		font-size: 22upx;

		&:after {
			border-radius: 100px;
		}
	}
</style>
