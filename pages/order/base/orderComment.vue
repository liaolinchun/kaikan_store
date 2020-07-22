<template>
	<view>
		<view class="goods">
			<view class="img">
				<image :src="goodsInfo.img"></image>
			</view>
			<view class="info">
				<view class="title">{{goodsInfo.title}}</view>
				<view class="type">颜色分类 : 卡其色;尺码 : 41</view>
			</view>
		</view>
	<!-- 	评分 -->
		<view class="grade">
			<view class="des type">描述相符</view>
			<view class="star" >
				<view class="iconfont" v-for="(item,index) in clicked_list"  :key="index" @tap="setStar(index)">
					<view class="icon" v-if="item">
						&#xe604;
					</view>
					<view v-else class="starIcon icon">
						&#xe604;
					</view>
				</view>
			</view>
			<view class="type font">{{des_font}}</view>
		</view>
	<!-- 	评论 -->
	<view class="review">
		<textarea class="text_box" v-model="comment_content" placeholder="宝贝满足你的期待吗? 说说你的使用心得, 分享给想买的他们吧"  cols="30" rows="10"></textarea>
		<view class="upload">
			<view class="upload_img type" @tap="uploadImg">
				<view class="iconfont" style="font-size: 56upx;color: #ccc; margin-top: 25upx;">&#xe622;</view>
				<view style="font-size: 24upx; color: #ccc;">添加照片</view>
			</view>
			<view class="img_box type"  v-for="(item ,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				<image :src="imgList[index]"></image>
				<view class="cu-tag" @tap.stop="DelImg" :data-index="index">
					<text class='icon iconfont'>&#xe606;</text>
				</view>
			</view>
		</view>
	</view>
	<!-- 	提交-->
	<view class="submit" @tap.stop="submit">
		发布
	</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interface.js'
	//#ifdef H5
	import {add_assess} from '../../../utils/hApi.js'
	// #endif
	export default{
		data(){
			return{
				goodsInfo :[],
				clicked_list:[false,false,false,true,true], //对应星星个数
				des_font : '好',
				imgList: [],
				count: 9, // 限制上传张数
				comment_content : ''
			}
		},
		methods:{
			setStar(index){ //评分

				switch (index) {
					case 0:
						this.star(index)
						this.des_font = '差'
						break;
					case 1:
						this.star(index)
						this.des_font = '一般'
						break;
					case 2:
						this.star(index)
						this.des_font = '好'
						break;
					case 3:
						this.star(index)
						this.des_font = '非常好'
						break;
					case 4:
						this.star(index)
						this.des_font = '五星好评'
						break;
				}
			},
			star(index){ //改变星星状态
				var fil_clicked = [];
			    this.clicked_list.forEach((item , ind) => {
					ind <= index ? item = false : item = true;
					this.clicked_list[ind] = item
				});
			},
			uploadImg(){ //上传照片
				uni.chooseImage({
					count: this.count,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths);
							this.count =  9 - this.imgList.length;
						} else {
							this.imgList = res.tempFilePaths;
							if(this.imgList.length >= 9) {
								// console.log('大于9')
								this.imgList = res.tempFilePaths.slice(this.imgList.length - 9 , this.imgList.length);//H5
							}
							this.count =  9 - this.imgList.length;
						}
					}
				});
			},
			ViewImage(e) { //显示查看
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) { //删除

				this.imgList.splice(e.currentTarget.dataset.index, 1);
				this.count =  9 - this.imgList.length;
			},
			submit(){ //提交
				console.log('提交评论' , this.imgList)
				var star_count = 0;
				for(var i = 0 ; i < this.clicked_list.length; i++){
					if(this.clicked_list[i] == false){
						star_count += 1; //记录星星数量
					}
				}
				this.request({
					url : interfaces.add_assess,
					method: 'POST' ,
					data : {
						goods_id : 2772 ,
						content : this.comment_content,
						heart : star_count,
					},
					seccess : ((res) => {
						if(res.error_code == 0){
							uni.showToast({
								title: "评论提交成功!"
							},1000)
						}
					})
				})
				//#ifdef H5
				let data = {
					goods_id : 2772 ,
					content : this.comment_content,
					heart : star_count,
				}
				add_assess(data).then((res) => {
					if(res.error_code == 0){
						uni.showToast({
							title: "评论提交成功!"
						},1000)
					}
				})
				//#endif
			}
		},
		onLoad(option){
			this.goodsInfo = JSON.parse(option.goodsInfo);
			// console.log(this.goodsInfo)
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7F7F7;
	}
	.goods{
		width: 92%;
		padding:  20upx 4%;
		display: flex;
		background-color: #fff;
		.img{
			width: 100upx;
			height: 100upx;

			image{
				width: 100%;
				height: 100%;
			}
		}
		.info{
			flex: 1;
			height: 100upx;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;// 子元素撑开

			
			.title{
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
				white-space: normal !important;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				font-size: 31upx;
				color: #333;
				letter-spacing:1px;
				padding-top: 8upx;
			}
			.type{
				color: #999;
				font-size: 26upx;
				padding-bottom: 8upx;
			}
		}
	}
	.grade{
		width: 100%;
		height: 100upx;
		border-bottom: 1px #eee solid;
		margin-top: -20upx;
		display: flex;
		align-items: center;
		background-color: #fff;
		.type{
			padding: 0 10upx;
		}
		.des{
			padding-left: 30upx;
			font-size: 36upx;
			font-weight: 550;
		}
		.font{
			color: #999;
			font-size: 22upx;
		}
		.star  {
			display: flex;
			font-size: 28upx;
			color: #aaa;
			.icon{
				font-size: 38upx;
			}
			.starIcon{
				color: #FFB910;
			}
		}
	}
	
	.review{
		width: 92%;
		padding:  20upx 4% 50upx 4%;
		background-color: #fff;
		
		.text_box{
			width: 100%;
			font-size: 30upx;
			height: 220upx;
		}
		.upload{
			width: 100%;
			margin-top: 20upx;
			display: flex;
			flex-wrap:wrap;
			.upload_img{
				width: 150upx;
				height: 150upx;
				border: 1px dashed #ccc;
				display: flex;
				align-items: center;
				margin-bottom: 20upx;
				flex-direction: column;//子元素竖排
			}
			.img_box{
				width: 150upx;
				height: 150upx;
				margin-bottom: 20upx;
				margin-left: 10upx;
				background-color: #000;
				border: 1px solid #000;
				position: relative;
				&:nth-child(2){
					margin-left: 20upx;
				}
				image{
					width: 100%;
					height: 100%;
				}
				.cu-tag {
				
					text-align: center;
					position: absolute;
					top: 0;
					right: 0;
					color: #fff;
					width: 30upx;
					height: 30upx;
					background-color: #000;
					opacity: .7;
					display: flex;
					.icon{
						font-size: 28upx;
					}
				}
			}
		}
	}
	.submit{
		width: 100%;
		height: 120upx;
		background-color: #EC5045;
		position: fixed;
		bottom: 0;
		line-height: 120upx;
		color: #fff;
		text-align: center;
		font-size: 32upx;
	}
</style>
