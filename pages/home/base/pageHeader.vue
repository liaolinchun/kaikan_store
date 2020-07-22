<template>
	<view>
		<view class="header">
			<!-- 搜索框 -->
			<view class="input-box">
				<input placeholder="默认关键字" placeholder-style="color:#c0c0c0;" v-model="inp_text" />
				<view class="icon iconfont" @tap="seek">&#xe62b;</view>
			</view>
			<!-- 右侧图标按钮 -->
			<!-- <view class="icon-btn">
				<view class="icon iconfont">&#xe9e6;</view>
			</view> -->
			<view class="icon-btn" @tap="goCode">
				<view class="icon iconfont">&#xe65e;</view>
			</view>
			<view class="icon-btn" @tap="goCart">
				<view class="icon iconfont" style="font-size: 52upx;">&#xe601;</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interface.js'
	//#ifdef H5
	import {search} from '../../../utils/hApi.js'
	// #endif
	export default {
		data() {
			return {
				inp_text: '',
				//#ifdef H5
				data : {
					goods_name : ''
				},
				// #endif
			}
		},
		methods: {
			goCart() {
				this.$emit('func')
			},
			seek() {		
				this.request({
					url: interfaces.search, //搜索
					method: "POST",
					data: {
						goods_name: this.inp_text
					},
					success: ((res) => {
						if (res.error_code == 0) {
							uni.navigateTo({
								url: "../category/toCategory?goodsInfo=" + JSON.stringify(res.data)
							})
						}else{
							uni.showToast({
								icon : 'none',
								title:  res.data
							})
						}
					})
				});
				//#ifdef H5
				this.data.goods_name = this.inp_text;
				search(this.data).then( (res) => {
					if (res.error_code == 0) {
						uni.navigateTo({
							url: "../category/toCategory?goodsInfo=" + JSON.stringify(res.data)
						})
					}else{
						uni.showToast({
							icon : 'none',
							title:  res.data
						})
					}
				})
				// #endif
			},
			goCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType : ['qrCode' , 'barCode'],
					success: function(res) {
						console.log('条码内容：' + res.result);
						
						// console.log(JSON.parse(res.result))
						// uni.navigateTo({
						// 	url : '../../address/address'
						// })

						uni.reLaunch({
							url: '/pages/game/index?scanCode=' + res.result 
						});
						// void plus.runtime.openWeb(res.result , function(){

						// })
					},
					fail : function(res){
						console.log(res , '错误')
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		.icon {
			width: 80upx;
			height: 60upx;
			margin-right: 5upx;
			display: flex;
			align-items: center;
			font-size: 42upx;
			color: #666;
		}

		.input-box {
			width: 100%;
			height: 60upx;
			background-color: #FEEFEF;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			border: 1px solid #FDCEB6;

			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 50upx;
				height: 60upx;
				font-size: 30upx;
				color: #c0c0c0;
			}

			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
				/*  #ifdef  MP-ALIPAY */
				margin-left: 2%;
				background-color: #FEEFEF;
				/*  #endif  */
			}
		}

		.icon-btn {
			width: 80upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 80upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
</style>
