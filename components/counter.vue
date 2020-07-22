<template>
	<view class="number">
		<view class="title">
			<text>数量</text>
		</view>
		<view class="box">
			<view class="minus" @tap.stop="minus">
				<view class="icon iconfont">-</view>
			</view>
			<view class="inputs">
				<input type="number" v-model="goodsInfo.num">
			</view>
			<view class="add" @tap.stop="add">
				<view class="icon iconfont">+</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props: ['goodsInfo'],
		data(){
			return{
				"number" : 1
			}
		},
		methods:{
			//减少数量
			minus(){
			    this.$emit('minus')
			},
			//增加数量
			add(){
				this.$emit('add')
			}
			// a(){
			// 	this.$emit('func' ,this.number)
			// }
		}
	}
</script>

<style lang="scss">
	.number{
		height: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.box{
			display: flex;
			border: 1px solid #eee;
		}
		
		.inputs{
			width: 60upx;
			height: 40upx;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			input{
				width: 60upx;
				height: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 26upx;
			}
		}
		.title{
			font-size: 28upx;
			color: #999;
			padding-right: 18upx;
		}
		.minus ,.add{
			width: 40upx;
			height: 40upx;
			border-radius: 5upx;
			
			.icon{

				line-height:40upx;
				font-size: 38upx;
				color: #999;
				width: 40upx;
				height: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
				
			}
		}
	}
</style>
