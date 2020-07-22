<template>
	<view>
		<!-- <view class="top" v-if="gameOverShow">
		<view class="type arr" style="height: 70%;">
			<view style="text-align: center; width: 100%; font-size: 36upx;">游戏已结束</view>
		</view>
		<view style="height: 30%; width: 100%; text-align: center; background-color:#000; color: #fff; font-weight: 600;display: flex; align-items: center; justify-content: center;">
			重新发起
		</view>
		</view> -->
		<view class="gameOver" v-if="gameOverShow">
			<image src="../../static/gameOver.png"></image>
		</view>
		<view class="top">
			<!-- v-if="headerShow" -->

			<view class="type time">
				<view>好友帮砍贡献{{hunbit}}{{debit}}{{myriabit}}{{kilbit}}</view>
				<view>活动剩余 {{hour}} : {{minute}} : {{ second}}</view>
			</view>
			<view class="type arr" v-for="(item ,index) in  help" :key="index">
				<view class="ad">
					<view class="li">{{index + 1}}</view>
					<view class="img"></view>
					<view class="username">{{item.username || '砍砍用户'}}</view>
				</view>
				<view class="ad2">
					<view>{{item.help_time}}</view>
					<view>帮砍金额{{item.help_price}}</view>
				</view>
			</view>
		</view>
		<view class="count">00 : 00 : 0{{sec}}</view>
		<view class="money">
			<view class="box_p">
				<view class="unit">￥</view>
				<view class="left" v-if="ten">{{ten}}</view>
				<view class="left" v-if="ten > 0 || hunbit">{{hunbit}}</view>
				<view class="left" v-if="ten > 0 || hunbit > 0 || debit">{{debit}}</view>
				<view class="left" v-if="ten > 0 || hunbit > 0 || debit > 0 || myriabit">{{myriabit}}</view>
				<view class="left" v-if="ten > 0 || hunbit > 0 || debit > 0 || myriabit > 0 || kilbit">{{kilbit}}</view>
				<view class="dian">.</view>
				<view class="right" v-if="ten > 0 || hunbit > 0 || debit > 0 || myriabit > 0 || kilbit > 0 || ten">{{decade}}</view>
				<view class="right" v-if="ten > 0 || hunbit > 0 || debit > 0 || myriabit > 0 || kilbit > 0 || ten > 0 || unit">{{unit}}</view>
			</view>
		</view>
		<view class="start">
			<view class="box_d" @tap="countDown()">{{startFont}}</view>
		</view>
		<view class="countDown" v-if="isShow">
			<view class="font">
				{{startSec}}
			</view>
		</view>
		<!--跳转 分享-->
		<share v-if="shareShow" :money="money" :child="child_id" :you="you" :kanId="kan_id" :goodsInfo="goods"></share>
		<view class="zhu">{{remark}}</view>
	</view>
</template>

<script>
	var timer;
	import share from './share.vue';
	import interfaces from '../../utils/interface.js';
	export default {
		data() {
			return {
				headerShow: false,
				goods_id: '', //商品id
				goodsInfo: {
					name: '',
					old: '',
					new: '',
					soldOut: '',
					img: '',
					id: '',
					money: '',
				},
				goods: [],
				sec: 9,
				startSec: 3,
				isShow: false,
				canClick: true,
				startFont: '开始',
				money: '', //优惠后价格
				kan_id: '', //游戏id
				child_id: '', //开砍商品id
				unit: '', //十分
				decade: '', //分
				hunders: '.', //点
				kilbit: '', //个
				myriabit: '', //十
				debit: '', //百
				hunbit: '', //千
				ten: '', //万	
				timer: null,
				count: 0, //记录点击次数		
				shareShow: false,
				hour: '',
				minute: '',
				second: '',
				endTime: '',
				userInfo: '',
				end_time: '', //活动剩余时间
				gameOverShow: false,
				isFriend: false, //是否是朋友帮砍
				help: [], //朋友帮砍
				bottomPrice: '', //最低的价格
				remark: '注: 请在游戏活动时间结束之前进行购买',
				you: '',//记录邮费
			}
		},
		onLoad(option) {
			try {
				uni.showToast({
					icon: "loading",
					title: "数据获取中",
				})
				if ((option.scanCode)) { //扫码进入
					this.headerShow = false;
					this.isFriend = true;
					let codeData = JSON.parse(option.scanCode);
					this.kan_id = codeData.k;
					this.gameOverShow = false;
					this.you = codeData.y;
					this.request({ //扫码后发起请求
						url: interfaces.friend_kan,
						method: 'POST',
						data: {
							kan_id: codeData.k
						},
						success: ((res) => {
							console.log(res)
							if (res.error_code == 1) {
								uni.showToast({
									title: '请先去登录',
									icon: 'none',
									duration: 1000
									
								})
								setTimeout(function() {
									uni.navigateTo({
										url: '../public/login'
									})
								}, 1200)

							}else if (res.error_code == 3) {
							 	uni.showToast({
							 		title: res.data,
							 		icon: 'none',
							 		duration: 1000
							 		
							 	})
							 	setTimeout(function() {
							 		uni.switchTab({
							 			url:  '../home/home'
							 		})
							 	}, 1200)
							 
							 }else if (res.error_code == 4) { //游戏已经结束
								this.gameOverShow = true;
							} else if (res.error_code == 5) { //已经玩过此游戏,不能重复玩!

								this.end()
								this.goods = res.goods[0];
								this.money = res.on_price;
								this.kan_id = res.kan_id;
								this.end_time = res.end_time * 1000;
								this.child_id = res.child_id;
								this.help = res.help;
								this.help_Arr();
								this.open();
								if (parseFloat(res.on_price) <= parseFloat(this.bottomPrice)) { //到达最低价

									this.money = this.bottomPrice.toFixed(2);
									this.remark = '已经到达最低价,请在活动时间结束前进行购买';
								}
							} else if (res.error_code == 0) { //还没玩过 可以玩
								this.goodsInfo.old = res.on_price;
								this.end_time = res.end_time * 1000;
								this.open();
								if (parseFloat(res.on_price) <= parseFloat(this.bottomPrice)){ //到达最低价
									this.end();
									this.remark = '已经到达最低价,请在活动时间结束前进行购买';
									return;
								}
								console.log('123')
								this.init();
								console.log('456')
							}
						})
					})
				} else { //直接进入
					this.bottomPrice = option.bottomPrice; //记录最低价
					this.you = option.you; //记录邮费
					let goodsId = option.goodsId;
					this.goods_id = option.goodsId;
					const PriceInit = JSON.parse(uni.getStorageSync('goodsPrice')); //读取本地存储
					this.headerShow = true;
					this.gameOverShow = false;
					this.goodsInfo.old = PriceInit;
					// this.goodsInfo.old = 10000.15
					console.log(this.goodsInfo.old)
					this.initData(goodsId);

				}

			} catch (e) {
				// error
			}
			// console.log(endTime, now, this.hour, this.minute, this.second)

		},
		components: {
			share
		},
		onShareAppMessage: function(res) {
			// console.log(this.goods)
			var a = {
				k: this.kan_id,
				g: this.child_id,
				y: this.you
			}
			if (res.from === 'button') {
				// 来自页面内转发按钮
			}
			return {
				title: this.goods.title,
				path: '/pages/game/index?scanCode=' + JSON.stringify(a), // 路径，传递参数到指定页面。
				imageUrl : 'http://www.tiktokshopee.com' + this.goods.thumbimg,
			}
		},
		methods: {
			initData(e) {
				this.isFriend = false;
				this.request({
					url: interfaces.action_kan,
					method: 'POST',
					data: {
						child_id: e
					},
					success: ((res) => {
						if (res.error_code == 3) { //并无此游戏，开始发起
							this.init();
						}
						if (res.error_code == 5) { //已经玩过此游戏,不能重复玩!
							// this.goodsInfo = res.
							// this.send(); //可以转发
							this.end();
							this.goods = res.goods[0];
							this.money = res.on_price;
							this.kan_id = res.kan_id;
							this.end_time = res.end_time * 1000;
							this.child_id = res.child_id;
							this.help = res.help;
							this.help_Arr();
							this.open();
							if (parseFloat(res.on_price) <= parseFloat(this.bottomPrice)) { //到达最低价
								this.money = this.bottomPrice.toFixed(2);
								this.remark = '已经到达最低价,请在活动时间结束前进行购买';
							}
						}
					})
				})
			},
			gameOver(e) { //开砍游戏开始
				console.log(e)
				this.request({
					url: interfaces.set_play,
					method: 'POST',
					data: {
						child_id: this.goods_id,
						help_price: e
					},
					success: ((res) => {
						console.log(res)
						if (res.error_code == 0) {
							this.end()
							this.goods = res.guige;
							this.kan_id = res.kan_id;
							this.child_id = res.child_id;
							this.shareShow = true; //显示
							this.end_time = res.end_time * 1000;
							this.money = res.on_price;
							this.open()
						}
					})
				})
			},
			help_power(e) { //朋友游戏开始
				this.request({
					url: interfaces.help_power,
					method: 'POST',
					data: {
						kan_id: this.kan_id,
						help_price: e
					},
					success: ((res) => {
						console.log(res)
						if (res.error_code == 0) {
							this.end()
							this.goods = res.goods[0];
							this.kan_id = res.kan_id;
							this.child_id = res.child_id;
							this.shareShow = true; //显示
							this.end_time = res.end_time * 1000;
							this.money = res.on_price;
							this.open();
							if (parseFloat(res.on_price) <= parseFloat(this.bottomPrice)) { //到达最低价
								this.money = this.bottomPrice.toFixed(2);
								this.remark = '已经到达最低价,请在活动时间结束前进行购买';
							}
						}
					})
				})
			},
			help_Arr() { //好友帮砍

				this.help.forEach((item) => {
					item.help_time = this.timestampToTime(item.help_time)
				})

			},
			timestampToTime(cjsj) {
				let time = cjsj.toString()
				if (time.length == 10) {
					time = time * 1000
				}
				var date = new Date(time) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-'
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
				var D = date.getDate() + ' '
				var h = date.getHours() + ':'
				var m = date.getMinutes() + ':'
				var s = date.getSeconds()
				return Y + M + D + h + m + s
			},
			open() {
				// console.log('时间', this.end_time)
				let that = this;
				timer = setInterval(function() {
					var newDate = new Date().getTime();
					var date = new Date(that.end_time) - newDate;
					if (date > 0) {
						let time = date / 1000;
						// 获取时、分、秒,毫秒
						that.hour = parseInt((time % (60 * 60 * 24)) / 3600) < 10 ? ('0' + parseInt((time % (60 * 60 * 24)) / 3600)) :
							parseInt((time % (60 * 60 * 24)) / 3600)
						that.minute = parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10 ? ('0' + parseInt(((time % (60 * 60 * 24)) %
							3600) / 60)) : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
						that.second = parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10 ? ('0' + parseInt(((time % (60 * 60 * 24)) %
							3600) % 60)) : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
						that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;

					} else {
						//活动已结束，全部设置为'00'
						that.hour = "00",
							that.minute = "00",
							that.second = "00"
					}
				}, 1000)
			},
			countDown() { //点击开始
				if (this.startSec == 3) {
					console.log('开始')
					if (!this.canClick) return;
					this.canClick = false;
					this.isShow = true;
					let self = this;
					let clock = setInterval(() => {
						self.startSec--;
						if (this.startSec < 1) {
							clearInterval(clock)
							this.canClick = true;
							this.isShow = false;
							this.startFont = '点击';
							this.start();
						}
					}, 1000)
				} else {
					//点击节流
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						this.minus(); //执行函数
					}, 100)
				}
			},
			//
			init() { //开始
				this.canClick = true;
				this.startFont = '开始';
				this.synth();
				this.shareShow = false;
				this.sec = 9;
				this.goodsInfo.old = +this.goodsInfo.old; //+隐式转换为number , 避免this.goodsInfo.old.toFixed(2)报错（this.goodsInfo.old为字符串）;
				this.money = this.goodsInfo.old.toFixed(2);
				if (parseInt(this.goodsInfo.old) === this.goodsInfo.old) {
					this.money = this.goodsInfo.old.toFixed(2)
				}
				this.single(this.money);
			},
			end() { //玩过

				this.single(this.goodsInfo.old) //分解
				this.synth(); //合成
				this.canClick = false;
				this.startFont = '结束';
				this.synth();
				this.shareShow = true;
				this.sec = 0;
				console.log('结束')
			},
			start() {
				let timer = setInterval(() => {
					this.sec--;
					if (this.sec < 1) {
						clearInterval(timer);
						this.canClick = false;
						this.startFont = '结束';
						this.synth();
						if (this.isFriend) {
							console.log('好友') //好友发起游戏
							let kan_money = parseFloat(this.goodsInfo.old - this.money).toFixed(2);
							this.help_power(kan_money);
						} else {
							console.log('开砍')
							let kan_money = parseFloat(this.goodsInfo.old - this.money).toFixed(2);
							this.gameOver(kan_money); //发起人开砍游戏结束
						}
					}
				}, 1000)
			},
			//分解单个金额
			single(money) {

				this.money = money.toString().split('') //分解

				this.unit = this.money[this.money.length - 1];
				this.decade = this.money[this.money.length - 2];
				this.hunders = this.money[this.money.length - 3]; //分割点

				this.kilbit = this.money[this.money.length - 4];
				this.myriabit = this.money[this.money.length - 5];
				this.debit = this.money[this.money.length - 6];
				this.hunbit = this.money[this.money.length - 7];
				this.ten = this.money[this.money.length - 8];

			},
			//合成金额
			synth() {

				if (this.ten) {
					this.money = this.ken + this.hunbit + this.debit + this.myriabit + this.kilbit + this.hunders + this.decade + this
						.unit;
				} else if (this.hunbit) {
					this.money = this.hunbit.toString() + this.debit.toString() + this.myriabit.toString() + this.kilbit.toString() +
						this.hunders + this.decade + this.unit;
				} else if (this.debit) {
					this.money = this.debit.toString() + this.myriabit.toString() + this.kilbit.toString() + this.hunders + this.decade +
						this.unit;
				} else if (this.myriabit) {
					this.money = this.myriabit.toString() + this.kilbit.toString() + this.hunders + this.decade + this.unit;
				} else if (this.kilbit) {
					this.money = this.kilbit.toString() + this.hunders + this.decade + this.unit;
				}


			},
			//点击减少
			minus() {
				if (this.canClick) {
					this.count++;
					if (this.unit > 0) {
						this.unit--;
					}
					else{
						this.unit = 9;
						if(this.decade > 0){
							 this.decade--; //分
						}
						else{
							this.decade = 9;
							if(this.kilbit > 0){
								this.kilbit--; //个
							}else{
								this.kilbit = 9;
								if(this.myriabit > 0) {
									this.myriabit--;//十
								}else{
									if(this.debit > 0){//百
										this.myriabit = 9;
										this.debit--;
									}else{
										if(this.hunbit > 0){//千
											this.myriabit = 9;
											this.debit = 9;
											this.hunbit--;
											console.log(this.bebit , this.myriabit , this.hunbit)
										}else{
											if(this.ten > 0){
												this.debit = 9;
												this.hunbit = 9;
												this.myriabit = 9;
												this.ten--;
											}else{
												return;
											}
										}
									}
								}
							}
						}
					}
				}
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FF0033;
		box-sizing: border-box;
		overflow-y: hidden;
		overflow: hidden;
	}

	.top {
		width: 92%;
		height: 30vw;
		margin: 30upx 4%;
		border: 2px #990000 solid;
		border-radius: 30upx;
		display: flex;
		flex-direction: column; //子元素竖排
		overflow: hidden;
		margin-top: 6vw;

		.type {
			width: 92%;
			height: 25%;
			padding: 0 4%;
			background-color: #FF4A4A;

		}

		.time {
			background-color: #990000;
			color: #fff;
			font-size: 18upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.arr {
			color: #fff;
			font-size: 18upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.ad {
				flex: 4;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				// overflow: hidden;

				.li {
					width: 10%;
					height: 100%;
					align-items: center;
					text-align: center;
					font-size: 28upx;
					line-height: 60upx;
				}

				.img {
					width: 30upx;
					height: 30upx;
					border: 1px solid #fff;
					border-radius: 50%;
				}

				.username {
					width: 70%;
					height: 90%;
					line-height: 50upx;
					text-indent: 5upx;
				}
			}

			.ad2 {
				flex: 6;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.count {
		width: 100%;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		margin-top: 10vw;
		z-index: 1;
	}

	.money {
		width: 60%;
		height: 150upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		margin-top: 12vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20% 0 25%;
		z-index: 1;

		.box_p {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.unit {
				font-size: 45upx;
				font-weight: 600;
				text-align: right;
				padding-top: 30upx;
			}

			.left {
				width: 60upx;
				height: 80upx;
				border: 2px solid #000;
				color: red;
				font-size: 48upx;
				background-color: #fff;
				font-weight: 600;
			}

			.dian {
				font-size: 105upx;
				font-weight: 600;
				color: #ffffff;
			}

			.right {
				width: 60upx;
				height: 60upx;
				border: 2px solid #000;
				color: red;
				font-size: 48upx;
				line-height: 60upx;
				background-color: #fff;
				font-weight: 600;
				margin-top: 10upx;
			}
		}
	}

	.start {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 25vw;
		font-weight: 600;
		display: flex;
		margin-top: 15vw;

		.box_d {
			justify-content: space-between;
			align-items: center;
			margin: auto;
			width: 25vw;
			height: 25vw;
			border-radius: 50%;
			border: 3px solid #fff;
			color: #fff;
			background-color: #990000;
		}
	}

	.countDown {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		color: #FFFFFF;
		z-index: 2222;
		text-align: center;
		background-color: #000000;
		opacity: .7;

		.font {
			margin: 0;
			justify-content: space-between;
			align-items: center;
			margin: auto;
			color: #FFFFFF;
			font-size: 455upx;
		}
	}

	.zhu {
		width: 100%;
		color: #fff;
		font-size: 24upx;
		text-align: center;
		position: fixed;
		bottom: 20upx;
	}

	.gameOver {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: red;
		z-index: 99999;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
