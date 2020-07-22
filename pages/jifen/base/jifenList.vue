<template>
	<view class="main">
		<view class="scroll_list">
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="row">
					<view v-for="(row ,ind) in categoryList" :key="ind" class="scroll-view-item_H" :class="{'on' : ind == showCategoryIndex}"
					 @tap="showCategory(row)">{{row.b_name}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 商品 -->
		<view class="goods_list" v-for="(item , ind) in goodsList" :key="ind" @tap="navToGoods(item)">
			<view class="top">
				<view class="img">
					<image :src="'http://www.tiktokshopee.com' + item.img"></image>
				</view>
				<view class="text">
					<view class="title">{{item.title}}</view>
					<view class="title_hint">每次参与消耗120积分</view>
				</view>
			</view>
			<view class="bottom">
				<view class="left">
					<view class="photo"></view>
					<view class="username">{{user}}</view>
				</view>
				<view class="right">
					<view class="time_out">00 : 0{{time}}</view>
					<view class="price">￥{{item.now_price}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['categoryList' , 'goodsList'],
		data() {
			return {
				showCategoryIndex: 0, //显示类目
				time : 9 ,
				price : '2629.50',
				user : '130****3195',
			}
		},
		methods: {
			showCategory(item) {
				//分类切换显示
				this.showCategoryIndex = item.id - 1;

				// uni.showLoading({
				// 	title: '加载中...'
				// });
			},
			navToGoods(item){ //跳转至拍卖商品
				let data = {
					time : this.time,
					price : item.now_price,
					jgoods : item.id,
				}
				uni.navigateTo({
					url:'../../packageA/pages/aucGoods/aucGoods?data=' + JSON.stringify(data)
				})
			},
			//生成随机手机号
			getMoble(){
				 let prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
				 let i = parseInt(10 * Math.random());
				 let prefix = prefixArray[i];
				 
				 for(let j = 0 ; j < 8; j++){
					 prefix = prefix + Math.floor(Math.random() * 10); //随机生成手机号码
				 }
				 let reg = /^(\d{3})\d{4}(\d{4})$/; //正则隐藏手机号中间4位
				 prefix = prefix.replace(reg , '$1****$2');
				 // this.user = prefix;
				 return prefix; //返回号码
				 // console.log(prefix)
			},
			getTime(){
				console.log('12323132')
				let self = this;
				setInterval(()=>{
					self.time--;
					if(self.time < 2){
						self.time = 9;
						self.price = parseFloat(self.price) + 0.1;
						self.price = self.price.toFixed(2);
						self.user = self.getMoble()
					}
				},1000)
				console.log(self.price)
			}
		},
		onLoad() {
			this.getTime()
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #F2F2F2;
		padding-bottom: 20upx;
	}

	.scroll_list {
		width: 100%;
		padding: 8upx 0;
		background-color: #fff;

		.scroll-view_H {
			height: 50upx;
			width: 94%;
			margin: 0 3%;

			.row {
				height: 50upx;
				display: flex;

				.scroll-view-item_H {

					flex-shrink: 0;
					// flex-shrink 表示在父元素宽度不够的情况下是否自动收缩 0表示不自动收缩 1表示自动收缩 
					height: 90%;
					line-height: 50upx;
					justify-content: center;
					font-size: 26upx;
					padding: 0 10upx;
					display: flex;
					align-items: center;
					background-color: #F2F2F2;
					margin: 0 10upx;

					&:nth-child(1) {
						margin: 0;
					}

					&.on {
						color: #EC1C1C;
						background-color: #FEEDED;
						font-size: 26upx;
						border: 1px solid #EC1C1C;
					}
				}
			}
		}
	}
	.goods_list{
		width: 100%;
		// height: 220upx;
		// padding: 10upx 3%;
		margin-top: 15upx;

		.top{
			width: 100%;
			padding: 10upx 3%;
			height: 160upx;
			background-color: #fff;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			overflow: hidden;
			.img{
				width: 20%;
				height: 100%;
				background-color: #999;
			}
			.text{
				width: 80%;
				padding: 0 20upx;

				.title{
					font-size: 28upx;
					color: #333333;
					line-height: 36upx;
					display: -webkit-box;
					overflow: hidden;
					text-overflow: ellipsis;
					word-wrap: break-word;
					white-space: normal !important;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.title_hint{
					color: #B7B7B7;
					padding-top: 10upx;
					font-size: 24upx;
				}
			}
		}
		.bottom{
			width: 94%;
			height: 45upx;
			padding: 10upx 3%;
			background-color:#F9F9F9 ;
			display: flex;
			align-items: center;
			justify-content: space-between; //子元素撑开
			.left{
				height: 100%;
				display: flex;
				align-items: center;
				.photo{
					width: 45upx;
					height: 45upx;
					background-color: #aaa;
					border-radius: 50%;
				}
				.username{
					padding-left: 10upx;
					font-size: 26upx;
					line-height: 26upx;
					color: #bbb;
				}
			}
			.right{
				height: 100%;
				display: flex;
				align-items: center;
				font-size: 30upx;
				font-weight: 550;
				.time_out{
					padding-right: 10upx;
				}
				.price{
					color: #FF9900;
				}
			}
		}
	}
</style>
