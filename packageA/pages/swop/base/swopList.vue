<template>
	<view>
		<!-- <view class="scroll_list">
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="row">
					<view v-for="(row ,ind) in categoryList" :key="ind" class="scroll-view-item_H" :class="{'on' : ind == showCategoryIndex}"
					 @tap="showCategory(row)">{{row.b_name}}</view>
				</view>
			</scroll-view>
		</view> -->
		<!-- 筛选 -->
		<!-- <view class="select"></view> -->
		<!--商品 -->
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
					<view class="old">{{item.price}}</view>
					<view class="new">兑换</view>
				</view>
				<!-- <view class="integral">
					<text>赠{{item.jifen}}积分</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["hotList"],
		data(){
			return{
			
			}
		},
		methods:{
			navToDetailPage(e){
				uni.navigateTo({
					url: "../good/goods?goods_id=" + e.id
				});
			},
		}
	}
</script>

<style lang="scss">
	
	/* 积分商品 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 15upx;
		background: #F2F2F2;
		position: relative;
		top: 200upx;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 49%;
			padding-bottom: 20upx;
			box-sizing: border-box;
			overflow: hidden;
			&:nth-child(2n+1){
				margin-right: 2%;
				
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 0px;
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
			background-color: #fff;
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
			background-color: #FFFFFF;
			padding: 20upx 15upx;
			// box-sizing: border-box;
			// overflow: hidden;
			.old{
				flex: 1;
				font-size: 26upx;
				padding: 0 15upx 0 5upx;
				color: #FF6783;
				font-weight: 600;
				line-height: 40upx;
				// text-decoration:line-through;
			}
			.new{
				flex: 1;
				font-size: 26upx;
				padding: 0 15upx 0 5upx;
				color: #333;
				text-align: center;
				line-height: 40upx;
				font-weight: 500;
				background-color: #FDEB46;
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
