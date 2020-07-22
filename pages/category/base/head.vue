<template>
	<view>
		<view class="header">
			<!-- 搜索框 -->
			<view class="icon-btn" @tap="goBack">
				<view class="icon iconfont" >&#xe76c;</view>
			</view>
			<view class="input-box">
				<input
					placeholder="默认关键字"
					placeholder-style="color:#c0c0c0;"
					v-model="inp_text"
				/>
				<view class="icon iconfont" @tap="seek">&#xe62b;</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interface.js'
	export default{
		data(){
			return{
				inp_text : ''
			}
		},
		methods:{
			goBack(){
				uni.navigateBack()
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
								url: "./toCategory?goodsInfo=" + JSON.stringify(res.data)
							})
						}
						else{
							uni.showToast({
								icon : 'none',
								title:  res.data
							})
						}
					})
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
		background-color: #EC1C1C;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

			.icon {
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
			background-color: #fff;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			border: 1px solid #fff;
			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}
			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.icon-btn {
			width: 70upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon {
				width: 60upx;
				height: 60upx;
				font-size: 42upx;
				color: #000;
				font-weight: 600;
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
