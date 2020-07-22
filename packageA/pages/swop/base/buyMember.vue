<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<view class="box">
			<view class="bg_top"></view>
			<view class="bg_bot">
				<view class="title">购买礼品包</view>
				<view class="card" @tap="toBuy">
					<view  class="iconfont icon"> &#xe65e;</view>
					<view class="font_cart">
						<view class="font_o">购礼品包</view>
						<view class="font_t">赠送积分</view>
					</view>
					<view class="click_icon">
						<view class="box box1"></view>
						<view class="box box2"></view>
						<view class="box box3"></view>
						<view class="img"></view>
					</view>
				</view>
			</view>
			<view class="clubCard">
				<view class="price">0.00</view>
			</view>
		</view>
		<!-- 收入、支出 -->
		<view class="type">
			<view class="type_on" :class="{'cur' : isCur == 1}" @tap="switchCur(1)">收入</view>
			<view class="type_on" :class="{'cur' : isCur == 2}" @tap="switchCur(2)">支出</view>
		</view>
		<view class="flie_type">
			<view class="list">日期</view>
			<view class="list">时间</view>
			<view class="list">方式</view>
			<view class="list">数额</view>
		</view>
		<!-- 列表 -->
		<view class="flie_list">
			<view class="list_f">2020/05/12</view>
			<view class="list_f">16:30</view>
			<view class="list_f">购入</view>
			<view class="list_f">9.90</view>
		</view>
		<view class="flie_list">
			<view class="list_f">2020/05/12</view>
			<view class="list_f">16:30</view>
			<view class="list_f">购入</view>
			<view class="list_f">9.90</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isCur : 1
			}
		},
		methods:{
			switchCur(e){
				this.isCur =  e;
			},
			toBuy(){
				uni.navigateTo({
					url: './toBuy'
				})
			}
		}	
	}
</script>

<style lang="scss">
	page{
		background-color: #f2f2f2;
	}
	.box{
		width: 100%;
		position: relative;
		.bg_top{
			width: 100%;
			height: 180upx;
			background-color:#FFCC33 ;
		}
		.bg_bot{
			width: 100%;
			height: 360upx;
			background-color:#66FFCC ;
			.title{
				width: 92%;
				font-size: 30upx;
				color: #333;
				font-weight: 550;
				padding: 130upx 4% 20upx;
			}
			.card{
				width: 92%;
				height: 160upx;
				background-color:#E6212A ;
				margin: 0 4%;
				z-index: 99;
				border-radius: 40upx;
				position: absolute;
				bottom: 20upx;
				display: flex;
				.icon{
					font-size: 48upx;
					color: #fff;
					padding: 30upx;
				}
				.font_cart{
					border: 1px solid red;
					padding-top: 15upx;
					.font_o{
						color: #fff;
						font-size: 54upx;
					}
					.font_t{
						font-size: 32upx;
						color: #ccc;
					}
				}
				.click_icon{
					flex: 1;
					position: relative;
					display: flex;
					align-items: center;
					overflow: hidden;
					.box{
						position: absolute;
						opacity: .4;
					}
					.img{
						width: 80upx;
						height: 80upx;
						position: absolute;
						right: 90upx;
						background-image: url(../../../static/img/click.png);
						background-size: 100% 100%;
					}
					.box1{
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						background-color: #fff;
						right: 90upx;
					}
					.box2{
						width: 150upx;
						height: 150upx;
						border-radius: 50%;
						border: 25upx #fff solid;
						right: 35upx;
					}
					.box3{
						width: 300upx;
						height: 300upx;
						border-radius: 50%;
						border: 25upx #fff solid;
						right: -55upx;
					}
				}
			}
		}
		.clubCard{
			width: 70%;
			height: 260upx;
			border-radius: 30upx;
			border: 7upx solid #fff;
			position: absolute;
			top: 20upx;
			z-index: 99;
			left: 50%;
			transform: translateX(-50%);
			background-color: #C02126;
			.price{
				width: 50%;
				height: 50upx;
				border-radius: 50upx;
				background-color: #FFCC00;
				position: absolute;
				bottom: 55upx;
				left: 50%;
				text-align: center;
				font-size: 26upx;
				line-height: 50upx;
				transform: translateX(-50%);
			}
		}
	}
	.type{
		width: 100%;
		height: 100upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		text-align: center;
		.type_on{
			flex: 1;
			font-size: 30upx;
			color: #666;

		}
		.cur{
			width: 120upx;
			height: 50upx;
			color: #E6212A;
			border-bottom:  5upx solid #E6212A;
		}
	}
	.flie_type{
		width: 100%;
		height: 70upx;
		background-color: #ddd;
		display: flex;
		align-items: center;
		text-align: center;
		.list{
			flex: 1;
			font-size: 28upx;
		}
	}
	.flie_list{
		width: 100%;
		height: 50upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		text-align: center;
		margin-bottom: 5upx;
		.list_f{
			flex: 1;
			color: #999;
			font-size: 24upx;
		}
	}
</style>
