<template>
	<view>
		<view v-if="showTitle"  class="hot">
			<text class="title">热卖推荐</text>
		</view>
		<view v-if="!showTitle" style="height: 30upx;"></view>
		<!--热卖商品-->
		<view class="guess-section">
			<view 
				v-for="(item, index) in hotList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="'http://www.tiktokshopee.com' +item.img" mode="aspectFill"></image>
				</view>
				<text class="fontTitle">{{item.title}}</text>
				<view class="price">
					<text class="old">{{item.market_price}}</text>
					<text class="new">{{item.price}}</text>
				</view>
				<view class="integral">
					<text>赠{{item.jifen}}积分</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["hotList","showTitle"],
		data(){
			return{
				hotLists : this.hotList
			}
		},
		methods:{
			navToDetailPage(e){
				uni.navigateTo({
					url: "../good/goods?goods_id=" + e.id
				});
			}
		}
	}
</script>

<style lang="scss">
	.hot{
		width: 100%;
		height: 50upx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.title{
			width: 100%;
			font-size: 24upx;
			text-align: center;
			letter-spacing:8px;
			font-weight: 800;
			font-family:"Microsoft YaHei"
		}
	}
	/* 热卖商品 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 20upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.fontTitle{
			width: 100%;
			font-size: 24upx;
			line-height: 30upx;
			height: 60upx;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: normal !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.price{
			width: 100%;
			height: 40upx;
			display: flex;
			.old{
				flex: 1;
				font-size: 28upx;
				padding: 0 15upx 0 5upx;
				color: #999;
				line-height: 40upx;
				text-decoration:line-through;
			}
			.new{
				flex: 1;
				font-size: 30upx;
				padding: 0 15upx 0 5upx;
				color: #FF675F;
				line-height: 40upx;
				font-weight: 500;
				text-align: right;
			}
		}
		.integral{
			width: 100%;
			height: 50upx;
			background-color: #FDEB46;
			font-size: 18upx;
			line-height: 50upx;
			text-align: center;
		}
	}

</style>
