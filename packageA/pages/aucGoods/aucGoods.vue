<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 头部 -->
		<goods-header></goods-header>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="(swiper , index) in swiperList" @tap="showBigImg(swiper ,swiperList , true)" :key="index">
					<image :src="'http://www.tiktokshopee.com' +swiper"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 倒计时 -->
		<view class="time" v-if="(!isPai)">
			<view class="time_icon">
				<image src="../../../static/img/time.png"></image>
				<text style="padding-left: 10upx; font-size: 26upx;">拍卖已开始</text>
			</view>
			<view class="time_run" @tap="gameStart">
				<text class="run">点击起拍</text>
			</view>
		</view>
		<view class="time" v-else>
			<view class="time_icon">
				<image src="../../../static/img/time.png"></image>
				<text style="padding-left: 10upx; font-size: 26upx;">正在进行</text>
			</view>
			<view class="time_run">
				预计
				<text class="run">00 : 00 : 0{{time}}</text>
				结束
			</view>
		</view>
		<!-- 价格、标题 -->
		<view class="info-box goods-info">
			<view class="title">
				{{goodsInit.title}}
			</view>
			<view class="price-box">
				<view class="price">
					<text>当前价格</text>
					<br />
					<text style="font-size: 28upx;">RMB</text>
				</view>
					<view class="cur">
						<view class="cur_text" v-for="(item ,ind) in priceArr" :key="ind" :class="{marquee_top:animate}">
							{{item}}
						</view>
					</view>
				<view class="old">市场价: ￥1688</view>
				<!-- <view class="soldOut">累计已售{{goodsInfo.soldOut}}件</view> -->
			</view>
		</view>
		<!-- 围观 -->
		<view class="bg_pink">
			<view class="left">
				<view class="text">
					<text>围观</text>
					<text>4522次</text>
				</view>
				<view class="text">
					<text>出价</text>
					<text>{{price_count + '人'}}</text>
				</view>
			</view>
			<view class="split"></view>
			<view class="right">
				<view class="text">
					<text>起拍价</text>
					<text>￥0.00</text>
				</view>
				<view class="text">
					<text>加价幅度</text>
					<text>￥0.00</text>
				</view>
			</view>
		</view>
		<!-- 出价记录 -->
		<view class="all_font" @tap="navTo('./base/priceLog')">
			<view>出价记录[{{jifen_log_length}}]</view>
			<view class="icon iconfont">&#xe76c;</view>
		</view>
		<view class="all_list">
			<view class="list">
				<view class="list_li">ww</view>
				<view class="list_li">领先</view>
				<view class="list_li">湖北武汉</view>
				<view class="list_li">￥1382.00</view>
			</view>
			<view class="list">
				<view class="list_li">ww</view>
				<view class="list_li">领先</view>
				<view class="list_li">湖北武汉</view>
				<view class="list_li">￥1382.00</view>
			</view>
			<view class="list">
				<view class="list_li">ww</view>
				<view class="list_li">领先</view>
				<view class="list_li">湖北武汉</view>
				<view class="list_li">￥1382.00</view>
			</view>
		</view>
		<!-- 信誉保证 -->
		<view class="credit">
			<view class="credit_type">
				<image src="../../static/img/sure.png"></image>
				<text>公平公正</text>
			</view>
			<view class="credit_type">
				<image src="../../static/img/sure.png"></image>
				<text>正品保障</text>
			</view>
			<view class="credit_type">
				<image src="../../static/img/sure.png"></image>
				<text>闪电发货</text>
			</view>
			<view class="credit_type">
				<image src="../../static/img/sure.png"></image>
				<text>售后保障</text>
			</view>
		</view>
		<!-- 往期成交 -->
		<view class="all_font" @tap="navTo('./base/laterDeal')">
			<view>往期成交</view>
			<view class="icon iconfont">&#xe76c;</view>
		</view>
		<view class="make_end">
			<view class="make_goods">
				<image src="../../../static/gameOver.png"></image>
				<view class="price">￥59555.50</view>
				<view class="user_n">宫本武藏6666</view>
			</view>
			<view class="make_goods">
				<image src="../../../static/gameOver.png"></image>
				<view class="price">￥59555.50</view>
				<view class="user_n">宫本武藏</view>
			</view>
			<view class="make_goods">
				<image src="../../../static/gameOver.png"></image>
				<view class="price">￥5555.50</view>
				<view class="user_n">宫本武藏</view>
			</view>
			<view class="make_goods">
				<image src="../../../static/gameOver.png"></image>
				<view class="price">￥595.50</view>
				<view class="user_n">宫本武藏</view>
			</view>
		</view>
		<!-- 评价 -->
		<view class="all_font" @tap="navTo('./base/pingJia')">
			<view>评价 <text style="font-size: 26upx;color: #999; padding-left: 10upx;">566</text></view>
			<view class="icon iconfont">&#xe76c;</view>
		</view>
		<view class="eval_init">
			<view class="content"></view>
		</view>
		<!-- 商品详情-->
		<view class="description">
			<view class="title">商品详情 </view>
			<view class="content" v-for="(item , index) in detailsImg" @tap="showBigImg(item.img_url , detailsImg)" :key="index">
				<image :src="'http://www.tiktokshopee.com' +item.img_url"></image>
			</view>
		</view>
		<!-- 出价 -->
		<view style="margin-bottom: 100upx; width: 100%; height: 20upx;"></view>
		<view class="to_price" v-if="(!shouBuy)">
			<view class="left">
				<view class="btn">
					<view class="minus" @tap="minus">-</view>
					<view class="inp">
						<input type="text" v-model="number">
					</view>
					<view class="add" @tap="add">+</view>
				</view>
			</view>
			<view  :class="isPai ? 'right' : 'right_cur'" @tap="addPrice">
				<text>出价</text>
				<br>
				<text style="font-size: 26upx;">{{goodsInit.jifen}}积分/次</text>
			</view>
		</view>
		<view class="to_price" v-else>
			<view class="left">
				<view class="btn2">
					成功拍下,请前往购买
				</view>
			</view>
			<view class="right2" @tap="toOrder(goodsInit)">
				<text>前往购买</text>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsHeader from './base/goodsHeader.vue'
	import interfaces from '../../../utils/interface.js'
	export default {
		data() {
			return {
				swiperList: [], //轮播图
				goodsInit: [], //初始化信息
				goodsData: [], 
				title_price: '',
				currentSwiper: 0, //轮播图下标
				detailsImg: [], //详情图
				goodsId : '', //商品id
				number: 1,  //出价次数
				time: '',  //倒计时时间
				price : '',
				priceArr: [], //测试价格
				price_count: '0', //出价人数
				jifen_log_length: '0', //出价记录
				buyKey : false , //是否可以拍得,  true关闭机器人
				shouBuy : false , //是否显示购买
				isPai : false , //是否开始拍卖
				animate : false,
				i: 2 , //随机加价秒数

			}
		},
		components: {
			goodsHeader
		},
	
		methods: {
			async initData_z(e) {

				this.request({
					url: interfaces.jifen_goods, //积分拍卖商品页
					method: "POST",
					data: {
						jgoods_id: e
					},
					success: ((res) => {
						console.log(res)

						this.goodsInit = res.data[0]; //初始化信息
						console.log(this.goodsInit)
						this.swiperList = res.thumbimg //提取轮播图

					})
				});
				this.request({
					url: interfaces.jifen_log, //出价记录
					method: "POST",
					data: {
						jgoods_id: e
					},
					success: ((res) => {
						if (res.error_code == 0) {

						}
					})
				});
				this.request({
					url: interfaces.jifen_content, //评价
					method: "POST",
					data: {
						jgoods_id: e
					},
					success: ((res) => {
						console.log(res)
					})
				})
				this.request({
					url: interfaces.jifen_order, //往期成交
					method: "POST",
					data: {
						jgoods_id: e
					},
					success: ((res) => {
						console.log(res)
					})
				})
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			showBigImg(src, srclist, isSwiper) { //预览大图
				let srcInit = 'https://www.tiktokshopee.com' + src;
				let imgList = [];
				if (isSwiper) { //查看轮播图
					srclist.forEach((item) => {
						imgList.push('https://www.tiktokshopee.com' + item) //http微信小程序真机不显示 ，改成https即可
					})
				} else { //查看详情图
					srclist.forEach((item) => {
						imgList.push('https://www.tiktokshopee.com' + item.img_url)
					})
				}
				console.log(imgList)
				uni.previewImage({
					current: srcInit,
					urls: imgList,
				})
			},
			navTo(url) { //页面跳转
				uni.navigateTo({
					url
				})
			},
			toOrder(item) { //去下单
				console.log(item)
				item.game = '积分';
				item.num = 1;
				item.kan_id = item.id;
				uni.navigateTo({
					// url: '../../order/base/createOrder?goodsInfo=' + JSON.stringify(item)
					url: '../../../pages/order/base/createOrder?goodsInfo=' + JSON.stringify(item)
				})
			},
			minus() {
				this.number--;
				if (this.number < 1) {
					this.number = 1;
				}
			},
			add() {	
				this.number++;
			},
			get_time() {
				let self = this;
				let timer = setInterval(() => {
					self.time--;
					if (self.time < self.i) {
						if(!self.buyKey){//如果没有达到可拍卖的价格
						    this.animate = true;
							self.init()
						}
						if(self.time < 1){
							this.shouBuy = true;
							this.animate = false;
							console.log('恭喜你拍得此商品')
							clearInterval(timer)
						}
					}
				}, 1000)
			},
			init(e , p ) {
				this.i = parseInt(10 * (Math.random() / 2) + 1)
				console.log(this.i)
				if(parseInt(this.price) > 142 || e){ //
					console.log('到达阈值')
				}else{
					this.time = 9;
					if(p){
						this.price = parseFloat(this.price) + p;
					}else{
						this.price = parseFloat(this.price) + 0.1;
					}
					this.showMarquee()
				}	
			},
			gameStart(){//点击游戏开始
				this.isPai = true;
				this.get_time()
			},
			showMarquee(){//价格变动
				this.price = this.price.toFixed(2);
				setTimeout(() => {
					this.priceArr.push(this.price)
					this.priceArr.shift();
					this.animate = false;
				},500)
			},
			addPrice() { //用户点击加价
			   if(this.isPai){ //如果拍卖已经开始
					this.request({
						url: interfaces.chujia, //拍卖出价
						method: "POST",
						data: {
							jgoods_id: this.goodsId,
							num : this.number
						},
						success: ((res) => {
							console.log(res)
							if(res.error_code == 0){//有积分
								this.animate = true;
								let add_price = this.number/10;
								this.buyKey = false; //每次加价重置
								if(parseInt(this.price) >= 130){ //如果到达可购买的价格,如再没有拍卖着，则倒计时可获得
									this.time = 9;
									this.price = parseFloat(this.price) + add_price;
									this.showMarquee();
								    this.buyKey = true;
								}else{
									this.init(this.buyKey ,add_price)
								}	
							}
							else if(res.error_code == 1){
								console.log('555')
								uni.showToast({
									icon: "none",
									title: res.data
								})
								setTimeout(function(){
									uni.navigateTo({
										url: '../../../pages/public/login'
									})
								},700)
								return;
							}else if(res.error_code == 4){
								console.log('555')
								uni.showToast({
									icon: "none",
									title: res.data
								})
								setTimeout(function(){
									uni.navigateTo({
										url: '../swop/base/toBuy'
									})
								},700)
								return;
							}
						})
					})
				}
			},
			Arr_price(e){
				for(let i = 0 ; i < 1 ; i++){
					this.priceArr[i] = e;
				}
			}
		},
		
		created() {
			// setInterval(this.showMarquee, 2000)
		},
		onLoad(option) {
			let data = JSON.parse(option.data);
			console.log(data)
			this.time = data.time;
			this.price = data.price;
			this.Arr_price(this.price)
			this.initData_z(data.jgoods);
			this.goodsId = data.jgoods;
			// this.get_time()
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F2F2F2;
	}

	/*<!-- 轮播图-->*/
	.swiper-box {
		position: relative;
		width: 100%;
		height: 85vw;

		swiper {
			width: 100%;
			height: 90vw;

			swiper-item {
				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	.time {
		width: 100%;
		height: 75upx;
		background-color: #FF3333;
		display: flex;
		align-items: center;
		position: relative;

		.time_icon {
			height: 92%;
			padding: 0 4%;
			display: flex;
			align-items: center;
			color: #FFFFFF;

			image {
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
			}
		}

		.time_run {
			color: #FFFFFF;
			text-align: center;
			font-size: 26upx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.run {
				font-size: 32upx;
				font-weight: 550;
				padding: 0 8upx;
			}
		}
	}

	/*<!-- 标题 价格 -->*/
	.info-box {
		width: 92%;
		padding: 10upx 4% 20upx 4%;
		background-color: #fff;
	}
	
	.marquee_top {
		transition: all .5s;
		margin-top: -50upx;
	}
	
	.goods-info {
		.price-box {
			display: flex;
			align-items: center;
			padding: 8upx 0;

			.price {
				font-size: 30upx;
				color: #FF3366;
				line-height: 36upx;
			}
				.cur {
					font-size: 52upx;
					font-weight: 550;
					color: #FF3366;
					padding: 0 40upx;
					position: relative;
					height: 80upx;
					overflow: hidden;
					.cur_text{
						height: 100upx;
					}
				
			}

			.old {
				font-size: 28upx;
				margin-top: 10upx;
				margin-left: 25upx;
				color: #999;
				text-decoration: line-through;
			}

			.soldOut {
				width: 100%;
				text-align: right;
				font-size: 22upx;
				color: #aaa;
			}
		}

		.title {
			font-size: 30upx;
			color: #333;
			font-weight: 600;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: normal !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}

	.bg_pink {
		width: 100%;
		height: 85upx;
		display: flex;
		align-items: center;
		background-color: #F78E91;
		border-bottom-left-radius: 40upx;
		border-bottom-right-radius: 40upx;

		.split {
			height: 60%;
			width: 1upx;
			background-color: #fff;
		}

		.left,
		.right {
			flex: 1;
			display: flex;
			flex-flow: column; //垂直
			color: #fff;
			font-size: 26upx;
			box-sizing: border-box;

			.text {
				display: flex;
				justify-content: space-between; //撑开
			}
		}

		.left {
			padding: 1% 5% 1% 10%;
		}

		.right {
			padding: 1% 10% 1% 5%;
		}
	}

	/*详情页*/
	.description {
		// padding-bottom: 100upx;

		.title {
			margin-top: 15upx;
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			display: flex;
			font-size: 28upx;
			justify-content: center;
			color: #333;
			// text-indent: 20upx;
			font-weight: 550;
			background-color: #fff;
		}

		.content {
			text-align: center;
			display: flex;
			flex-wrap: wrap;

			image {
				width: 100%;
				// margin-bottom: 5upx;
			}
		}

	}

	// 出价
	.to_price {
		width: 100%;
		height: 105upx;
		position: fixed;
		bottom: 0;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;

		.left {
			flex: 6;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.btn2 {
				color: #999;
				font-size: 28upx;
			}

			.btn {
				width: 60%;
				height: 60upx;
				border: 1px solid #ccc;
				display: flex;
				align-items: center;

				.add,
				.minus {
					width: 60upx;
					height: 60upx;
					text-align: center;
					line-height: 50upx;
					font-size: 42upx;
					color: #ccc;
				}

				.inp {
					flex: 1;
					text-align: center;

				}
			}
		}

		.right {
			flex: 4;
			height: 100%;
			box-sizing: border-box;
			background-color: #E6212A;
			text-align: center;
			color: #fff;
			font-size: 32upx;
			padding-top: 15upx;
		}
		.right_cur{
			flex: 4;
			height: 100%;
			box-sizing: border-box;
			background-color: #999;
			text-align: center;
			color: #fff;
			font-size: 32upx;
			padding-top: 15upx;
		}

		.right2 {
			color: #fff;
			font-size: 32upx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 4;
			height: 100%;
			box-sizing: border-box;
			background-color: #E6212A;
		}
	}

	// 出价记录/往期交易
	.all_font {
		margin-top: 15upx;
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32upx;
		color: #000;

		.icon {
			transform: rotate(180deg);
		}
	}

	.all_list {
		width: 100%;
		height: auto;
		background-color: #fff;
		display: flex;
		flex-flow: column;
		margin-top: 5upx;

		.list {
			display: flex;
			width: 92%;
			padding: 20upx 4%;
			align-items: center;
			font-size: 26upx;

			.list_li {
				flex: 1;
				text-align: center;

				&:nth-child(1) {
					text-align: left;
				}

				&:nth-child(4) {
					text-align: right;
				}
			}
		}
	}

	.eval_init {
		width: 92%;
		background-color: #fff;
		padding: 20upx 4%;
		margin-top: 5upx;

		.content {
			width: 92%;
			height: 150upx;
			padding: 20upx 4%;
			background-color: #F9F9F9;
		}
	}

	// 信誉保证
	.credit {
		display: flex;
		align-items: center;
		width: 92%;
		background-color: #FFFFFF;
		padding: 20upx 4%;
		margin: 15upx 0;

		.credit_type {
			width: 100%;
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 26upx;
			color: #DFD3C4;
			font-weight: 550;

			&:nth-child(1) {
				justify-content: flex-start; //位于容器的开头
			}

			&:nth-child(4) {
				justify-content: flex-end; //位于容器的结尾
			}

			image {
				width: 32upx;
				height: 32upx;
				border-radius: 50%;
				margin-right: 10upx;
			}
		}
	}

	.make_end {
		width: 92%;
		padding: 20upx 4%;
		display: flex;
		background-color: #FFFFFF;
		margin-top: 5upx;

		.make_goods {
			width: 25%;
			display: flex;
			flex-flow: column;
			padding: 0 10upx;
			box-sizing: border-box;
			overflow: hidden;
			text-align: center;
			position: relative;

			&::after {
				display: block;
				content: "";
				width: 90%;
				height: 180upx;
				opacity: .6;
				background-image: url(../../static/img/goods_end.png);
				background-repeat: no-repeat;
				background-position: 40upx 35upx;
				position: absolute;
				left: 0;
				top: 0;
			}

			image {
				opacity: .6;
				width: 100%;
				height: 185upx;
			}

			.price {
				font-size: 28upx;
				color: #333;
			}

			.user_n {
				color: #999;
				font-size: 26upx;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
				white-space: normal !important;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>
