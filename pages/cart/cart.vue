<template>
	<view>
		<!-- 空白页 -->
		<view v-if="!hasLogin || goodsList.length == 0" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="hasLogin"  url="../home/home" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				还没登录
				<view class="navigator" @click="navToLogin">去登陆></view>
			</view>
		</view>
		<!-- 购物列表 -->
		<view class="goods-list">
			<!-- <view v-if="goodsList.length == 0" class="empty-tips">
				空空如也
				<navigator class="navigator"  url="../home/home" open-type="switchTab">随便逛逛></navigator>
			</view> -->
			<view class="row" v-for="(item,index) in goodsList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap="handleSingleDelete(item)">
					<view class="icon iconfont">&#xe659;</view>
				</view>
				<!-- 商品 -->
				<view class="production" @touchstart="handleTouchStart(index,$event)" @touchmove="handleTouchMove(index,$event)"
				 @touchend="handleTouchEnd(index,$event)" :class="[theIndex == index ? 'open' : oldIndex == index ? 'close' : '']">
					<!-- checkbox -->
					<view class="container" @tap="handleCheckbox(item)">
						<view class="checkbox">
							<view :class="{'on':item.selected}"></view>
						</view>
					</view>

					<!-- 商品详情 -->
					<view class="goods-info" @tap="handleGoodsInfo(item)">
						<view class="img">
							<image :src="'http://www.tiktokshopee.com' + item.thumbimg"></image>
						</view>
						<view class="info">
							<view class="title">{{item.title}}</view>
							<view class="spec">{{item.color_name}}</view>
							<view class="price-number">
								<view class="price">{{item.price_one}}</view>
								<counter @add="add(item)" @minus="minus(item)" :goodsInfo="item" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部菜单 -->
		<view class="footer" v-if="!goodsList.length == 0" :style="{bottom: footerbottom}">
			<view class="sum_price">
				<view class="check-box">
					<view class="checkbox" @tap="handleSelectedAll">
						<view :class="{'on': isAllSelected}"></view>
					</view>
					<view class="del" @tap="handleMulDelete" v-if="selectedList.length > 0" :class="{show: isAllSelected}">清空</view>
				</view>
				<view>
					<text>合计 : </text>
					<text class="price"> ￥{{sumPrice}}</text>
				</view>
			</view>
			<view class="btn" :class="{ 'on' : sumPrice != '0.00'}" @tap="toPay">
				结算
			</view>
		</view>
		<popup-pay :showPay="showPay" :Price="sumPrice" @func="setPay" :footerbottom="footerbottom"></popup-pay>
	</view>
</template>

<script>
	import counter from '../../components/counter.vue';
	import popupPay from '../../components/popupPay.vue';
	import 	interfaces from '../../utils/interface.js';
	//#ifdef H5
	import {get_car ,del_car} from '../../utils/hApi.js'
	// #endif
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				goodsList: [],
				theIndex: null, // 控制滑动效果 当前滑动下标
				oldIndex: null, // 上一个左滑下标
				isAllSelected: false,
				selectedList: [],
				sumPrice: '0.00',
				showPay : false,
				goods_pay : []
			}
		},
		computed:{
			...mapState(['hasLogin'])
		},
		components: {
			counter,
			popupPay
		},
		methods: {
			async initData(){
				this.request({
					url: interfaces.get_car, //读取购物车数据
					method: "POST",
					success: ((res) => {
						if(res.error_code ==0){ //登录状态

							this.goodsList = res.data;
	
						}
					})
				});
				//#ifdef H5
				get_car().then((res) => {
					if(res.error_code ==0){ //登录状态
					
						this.goodsList = res.data;
						
					}
				})
				//#endif
			},
			navToLogin(){ //去登陆
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			toPay(){ //去支付
				if(this.sumPrice != '0.00'){ 
					// this.showPay = true;
					// this.$refs.Series.Payment() //触发子组件方法(获取支付通道)
					// console.log(this.goods_pay)
					this.goods_pay.game = '商城';
					// this.goods_pay.old_money = this.goodsInit.market_price;
					uni.navigateTo({
						url: '../order/base/createOrder?car_goodsInfo=' + JSON.stringify(this.goods_pay)
					})
				}
			},
			setPay(show){ //传入子组件的方法
				this.showPay = show;
				
			},
			handleSelectedAll() { //全选
				this.isAllSelected = !this.isAllSelected;

				//数据处理
				let arr = [];
				this.goodsList.forEach((item, i) => {
					item.selected = this.isAllSelected;
					arr.push(item);
				})

				this.selectedList = this.isAllSelected ? arr : [];
				this.sumPrice = '0.00';
			},
			handleMulDelete() { // 循环删除所有选中的商品
				while (this.selectedList.length > 0) {
					this.handleSingleDelete(this.selectedList[0])
				}
				// 初始化数据
				// this.selectedList = [];
				this.isAllSelected = false;
			},
			add(item){
				item.num++;
				// 更新storage

				this.sum();
			},
			minus(item){
				if(item.num <= 1){
					return;
				}
				item.num--;
	
				this.sum();
			},
			handleTouchStart(index, event) { //手指点击
				// 多点触控 不触发
				if (event.touches.length > 1) {
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				// 初始化坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			handleTouchMove(index, event) { //手指滑动
				// 多点触控 不触发
				if (event.touches.length > 1) {
					return;
				}
				// 移动位置
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				// 滑动位置小 不触发
				if (Math.abs(moveX) < 5) { //Math.abs 求数值的绝对值
					return;
				}

				// 竖向滑动 不触发
				if (Math.abs(moveY) > Math.abs(moveX)) {
					return;
				}

				// 左滑
				if (moveX < 0) {
					this.theIndex = index;
				}

			},
			handleTouchEnd(idnex, event) { //手指离开
				// console.log('离开')
			},
			handleCheckbox(item) { //单选
				this.goods_pay = [];
				this.goods_pay = item;
				this.goodsList.forEach((goods, index) => {
					if(item.id != goods.id){
						goods.selected = false;
					}
				})
				item.selected = !item.selected;
				this.sum()
			
				this.isAllSelected = false;
			},
			sum(){ //合计
				this.sumPrice = 0;
				this.goodsList.forEach((item,i) => {
					if(item.selected){
						this.sumPrice =  (item.num * item.price_one)
					}
				})
				this.sumPrice  = this.sumPrice.toFixed(2);
		
			},
			handleSingleDelete(item) { //删除
				// 更新storage
				
				let e = item.id;
				this.request({
					url: interfaces.del_car, //删除
					method: "POST",
					data : {
						car_id : e,
					},
					success: ((res) => {
						if(res.error_code ==0){ //登录状态
							uni.showToast({
								icon: 'none',
								title: '删除成功'
							})
							this.initData()
						}
					})
				});
				//#ifdef H5
				let data = {
					car_id : item.id,
				}
				del_car(data).then((res) => {
					if(res.error_code ==0){ //登录状态
						uni.showToast({
							icon: 'none',
							title: '删除成功'
						})
						this.initData()
					}
				})
				//#endif
				// 更新数组
				this.goodsList.splice(this.goodsList.indexOf(item), 1);
				this.selectedList.splice(this.selectedList.indexOf(item), 1);


				// 全部删除取消全选状态
				this.isAllSelected = this.goodsList.length > 0 ? this.isAllSelected : false;

				this.oldIndex = null;
				this.theIndex = null;
			},
			handleGoodsInfo(item) {
				console.log(item)
				uni.navigateTo({
					url: "../good/goods?goods_id=" + item.goods_id
				})
			}
		},
		onShow() {
			this.initData();
		},
		onLoad() {
			// 兼容h5下的底部菜单
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName("uni-tabbar")[0].offsetHeight + "px";
			// #endif
		}

	}
</script>

<style lang="scss">
	page {
		background-color: #F2F2F2;
	}
	
	.empty{
				position:fixed;
				left: 0;
				top:0;
				width: 100%;
				height: 100vh;
				padding-bottom:100upx;
				display:flex;
				justify-content: center;
				flex-direction: column;
				align-items:center;
				background: #fff;
				image{
					width: 240upx;
					height: 160upx;
					margin-bottom:30upx;
				}
				.empty-tips{
					display:flex;
					font-size: 28upx;
					color: #aaa;
					.navigator{
						color: #EC1C1C;
						margin-left: 16upx;
					}
				}
			}
	.container {
		display: flex;
		align-items: center;
		
		.checkbox {
			width: 35upx;
			height: 35upx;
			// border-radius: 100%;
			border: solid 2upx #f06c7a;
			display: flex;
			justify-content: center;
			align-items: center;

			.on {
				width: 25upx;
				height: 25upx;
				// border-radius: 100%;
				background-color: #f06c7a;
			}
		}

		.text {
			font-size: 28upx;
			margin-left: 10upx;
		}
	}


	.goods-list {
		width: 100%;
		padding: 20upx 0 150upx 0;


		.empty {
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #a7a7a7;
		}

		.row {
			width: calc(92%);
			height: calc(22vw + 40upx);
			margin: 20upx auto;
			// border-radius: 15upx;
			// box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;



			.menu {
				.icon {
					color: #fff;
					font-size: 60upx;
				}

				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #f06c7a;
				border-right: 10px solid #fff;
				// border-left: 5upx solid #fff;
				overflow: hidden;
				color: #fff;
				// border-radius: 20upx;
				z-index: 2;
			}

			.production {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-30%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-30%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.35s linear both;
				}

				&.close {
					animation: closeMenu 0.25s linear both;
				}

				background-color: #fff;

				.container {
					padding-left: 20upx;
					flex-shrink: 0;
					height: 22vw;
					margin-right: 20upx;
				}

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				display: flex;
				align-items: center;


				.goods-info {
					width: 100%;
					display: flex;
					padding-right: 20upx;


					.img {
						width: 22vw;
						height: 22vw;
						border-radius: 10upx;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 10upx;

						image {
							width: 22vw;
							height: 22vw;
						}
					}

					.info {
						width: 100%;
						height: 22vw;
						overflow: hidden;
						display: flex;
						flex-wrap: wrap;
						position: relative;

						.title {
							width: 100%;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							// text-align: justify;
							overflow: hidden;

						}

						.spec {
							font-size: 20upx;

							color: #a7a7a7;
							height: 30upx;
							display: flex;
							align-items: center;
							padding: 10upx 10upx;
							border-radius: 15upx;
							margin-bottom: 20vw;
						}

						.price-number {
							position: absolute;
							width: 100%;
							bottom: 0upx;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							font-size: 28upx;
							height: 60upx;

							.price {
								color: red;
								font-size: 34upx;
							}

						}
					}
				}
			}
		}
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 150upx;
		display: flex;
		flex-direction: column; //子元素竖排
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.sum_price {
			width: 100%;
			height: 65upx;
			text-align: right;
			line-height: 65upx;
			display: flex;
			justify-content: space-between; //子元素撑开

			.check-box {
				display: flex;
				align-items: center;

				.checkbox {
					width: 38upx;
					height: 38upx;
					// border-radius: 100%;
					// border: solid 2upx #f06c7a;
					display: flex;
					justify-content: center;
					align-items: center;
					background-image: url('../../static/img/select.png');
					background-size: 100% 100%;
					z-index: 2;

					.on {
						// width: 30upx;
						// height: 30upx;
						// // border-radius: 100%;
						// background-color: #f06c7a;
						width: 38upx;
						height: 38upx;
						border-radius: 50%;
						background-image: url('../../static/img/selected.png');
						background-size: 100% 100%;
						z-index: 2;
					}
				}

				.del {
					width: 0px;
					height: 38upx;
					color: #fff;
					font-size: 28upx;
					line-height: 38upx;
					text-indent: 20upx;
					text-align: center;
					border-radius: 30upx;
					background-color: #C0C4CC;
					opacity: 0;
					transition: .5s;
					margin-left: -30upx;
					z-index: 1;

					&.show {
						opacity: 1;
						width: 120upx;
					}
				}
			}

			.price {
				color: #f06c7a;
				padding-left: 20upx;
			}
		}

		.btn {
			width: 100%;
			height: 70upx;
			background-color: #D5D5D5;
			color: #fff;
			display: flex;
			align-items: center; //垂直居中
			justify-content: center; //水平居中
			font-weight: 600;
			font-size: 34upx;
		}

		.on {
			width: 100%;
			height: 70upx;
			background-color: #f06c7a;
			color: #fff;
			display: flex;
			align-items: center; //垂直居中
			justify-content: center; //水平居中
			font-weight: 600;
			font-size: 34upx;
		}
	}
</style>
