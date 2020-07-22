<template>
	<view class="container">
		<view class="list-cell b-b m-t" @click="navTo('./base/setPhone')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">手机号</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="list-cell b-b" @click="navTo('砍砍ID')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">砍砍ID</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="list-cell">
			<text class="cell-tit">声音</text>
			<switch checked color="#4CDA64" @change="switchChange" />
		</view>
		<view class="list-cell" @click="navTo('消息推送')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">开启消息推送</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="list-cell b-b" @click="navTo('清除缓存')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">清除缓存</text>
			<text class="icon2">3M</text>
		</view>
		<view class="list-cell b-b" @click="navTo('客服支持')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">客服支持</text>
			<text class="icon2">400-888-8888</text>
		</view>
		<view class="list-cell b-b" @click="navTo('用户协议')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">砍砍用户协议</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="list-cell b-b" @click="navTo('砍砍隐私')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">砍砍隐私政策</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="list-cell b-b" @click="navTo('关于砍砍')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">关于砍砍</text>
			<text class="icon iconfont">&#xe76c;</text>
		</view>
		<view class="log-out-btn" @click="toLogout">
			退出登录
		</view>
		<view class="sion">Version 1.0.0©2020砍砍</view>
		
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	import 	interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {login_out} from '../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {

			};
		},
		methods: {
			...mapMutations(['logout']),

			navTo(url) {
				// this.$api.msg(`跳转到${url}`);
				uni.navigateTo({
					url
				})
			},
			//退出登录
			toLogout() {
				uni.showModal({
					content: '确定要退出登录么',
					success: (e) => {
						if (e.confirm) {
							this.request({
								url: interfaces.login_out, //退出
								method: "POST",
								success: ((res) => {
									if(res.error_code ==0){ //成功退出
										this.logout(); //触发全局state
										setTimeout(() => {
											uni.navigateBack();
										}, 200)
									}
								})
							});
							//#ifdef H5
							login_out().then((res) => {
								if(res.error_code ==0){ //成功退出
									this.logout(); //触发全局state
									setTimeout(() => {
										uni.navigateBack();
									}, 200)
								}
							})
							// #endif
						}
					}
				});
			},
			//switch
			switchChange(e) {
				let statusTip = e.detail.value ? '打开' : '关闭';
				// this.$api.msg(`${statusTip}消息推送`);
			},

		}
	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.log-out-btn {
		background-color: #EC5045;
		width: 70%;
		height: 15vw;
		border-radius: 30upx;
		color: #fff;
		line-height: 15vw;
		text-align: center;
		position: fixed;
		bottom: 15vw;
		left: 50%;
		transform: translateX(-50%);
	}
	.sion{
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 8vw;
		font-size: 18upx;
		color: #999;
	}

	.list-cell {
		display: flex;
		align-items: baseline;
		padding: 20upx 2vw;
		line-height: 60upx;
		position: relative;
		background: #fff;
		justify-content: center;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
			margin-top: 5upx;
		}

		.icon {

			font-size: 28upx;
			color: #999;
			transform: rotate(180deg);
		}

		.icon2 {
			font-size: 28upx;
			color: #999;
		}

		.cell-tit {
			flex: 1;
			font-size: 32upx;
			color: #999;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: 28upx;
			color: #999;
		}

		switch {
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
