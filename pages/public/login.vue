<template>
	<view class="container">
		<!-- 状态栏 -->
		<page-status ></page-status>
		
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon iconfont" @click="navBack">&#xe76c;</view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="number" 
						:value="mobile" 
						placeholder="请输入手机号码"
						maxlength="11"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="mobile" 
						value="" 
						placeholder="请输入密码"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<view class="forget-section" @tap="setPhone">
				忘记密码?
			</view>
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>
	</view>
</template>

<script>
	import {  
        mapMutations  
    } from 'vuex';
	import interfaces from '../../utils/interface.js';
	//#ifdef H5
	import {login} from '../../utils/hApi.js'
	// #endif
	export default{
		data(){
			return {
				mobile: '',
				password: '',
				logining: true,
				isReg : false,//是否注册后登录
			}
		},
		onLoad(option){
			this.isReg = option.isReg;
			console.log(this.isReg)
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key; //监控输入
				this[key] = e.detail.value; //登录号码
				this.logining = false;
			},
			setPhone(){
				//修改密码
				uni.navigateTo({
					url: '../set/base/setPhone'
				})
			},
			navBack(){
				uni.navigateBack();
			},
			toRegist(){
				uni.navigateTo({
					url : './register'
				})
			},
			async toLogin(){
				// this.logining = true;
				const {mobile, password} = this;
				
				if(!mobile){
					uni.showToast({
						icon:"none",
						title:"请输入手机号"
					})
					return;
				}
				else if(!password){
					uni.showToast({
						icon:"none",
						title:"请输入密码"
					})
					return;
				}
				else {
					this.request({
						url: interfaces.login,
						method: "POST",
						data: {
							tell : this.mobile,
							password : this.password
						},
						success: ((res) => {
							
							if(res.error_code == 0){
								let session_id = res.session;
								const userInfo = {				
										id: 1,
										mobile: this.mobile,
										nickname: `砍砍用户${this.mobile}`,
										
										portrait: '../../static/user_img.png'
								}
								// #ifdef MP-WEIXIN 
								uni.removeStorageSync('sessionid')
								uni.setStorageSync("sessionid", `PHPSESSID=${session_id}`); //储存服务器返回session_id,解决session会话结束
								// #endif
								this.login(userInfo)
								if(this.isReg){//如果是注册后登录
									uni.switchTab({
										url: '../home/home'
									})
								}else{ 
									uni.navigateBack()
								}
								// uni.navigateBack()
								
							}else{
								uni.showToast({
									icon:'none',
									title: '账号或密码错误'
								})
							}			
						})
					});
					//#ifdef H5
					let data = {
							tell : this.mobile,
							password : this.password
					}
					login(data).then((res) => {
						if(res.error_code == 0){
							let session_id = res.session;
							const userInfo = {				
									id: 1,
									mobile: this.mobile,
									nickname: `砍砍用户${this.mobile}`,
									
									portrait: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584357130382&di=99c11194936cc6efc617433713877360&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-501c31cde297a64e0710b6a2a592b156_hd.jpg'
							}
							this.login(userInfo)
							uni.switchTab({
								url: '../home/home'
							})
							// uni.navigateBack()
							
						}else{
							uni.showToast({
								icon:'none',
								title: '账号或密码错误'
							})
						}			
					})
					// #endif	
					// uni.navigateBack();  
				}
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
		box-sizing: border-box;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: #999;
	}
	.left-top-sign{
		font-size: 120upx;
		color: #F8F8F8;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:fixed;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:fixed;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:#F8F6FC;
		height: 150upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: 30upx;
			color: #606266;
		}
		input{
			height: 60upx;
			font-size: 32upx;
			color: #666;
			width: 100%;
			/*  #ifdef  MP-ALIPAY */
			background-color:#F8F6FC;
			/*  #endif  */
		}	
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: #FA436A;
		color: #fff;
		font-size: 22upx;
		/*  #ifdef  MP-ALIPAY */
		margin-left: 7%;
		/*  #endif  */
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: 26upx;
		color: #4399fc;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		position:fixed;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: 24upx;
		color:#999;
		text-align: center;
		text{
			color:#4399fc;
			margin-left: 10upx;
		}
	}
</style>
