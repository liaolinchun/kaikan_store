<template>
	<view class="popup site" v-show="showSite">
		<!-- 遮罩层 -->
		<view class="mask"></view>
		<view class="layer">
			<view class="site-header">
				<text class="font">配送至</text>
				<text class="icon iconfont" @tap.stop="hideSpec">&#xe606;</text>
			</view>
			<!--导航栏-->
			<view class="nav">
				<view class="type" v-for="(name ,index) in siteNav" :key="index" :class="{'cur' : index == showSiteIndex}" @tap="showSiteNav(index)">{{name}}</view>
			</view>
			<scroll-view scroll-y="true" class="city">
				<view class="row" :class="{'on' : index1 == showProvIndex}" v-for="(prov ,index1) in province" :key="index1" v-if="showOne"
				 @tap="showProvNav(prov,index1)">
					{{prov}}
				</view>
				<view class="row" :class="{'on' : index2 == showCityIndex}" v-for="(city ,index2) in citys" :key="index2" v-if="showTwo"
				 @tap="showCityNav(city,index2)">
					{{city}}
				</view>
				<view class="row" :class="{'on' : index3 == showRegIndex}" v-for="(reg ,index3) in region" :key="index3" v-if="showThree"
				 @tap="overSelect(reg,index3)">
					{{reg}}
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['showSite' ],
		data() {
			return {
				siteNav: ['选择省', '选择市', '选择区'],
				showSiteIndex: 0,
				showProvIndex: 0,
				showCityIndex: 0,
				showRegIndex : 0,
				goback: 0, //点击返回第一级记录序号
				data: [], //所有数据
				updateCity: [], //记录选中的省份
				province: [], //默认显示省份
				showOne: true,
				showTwo: false,
				showThree : false,
				citys: [], //选中省份的城市
				region: [] ,//所在城市的区
				newAddressName : ""

			}
		},
		methods: {

			hideSpec() {
					
				if(!this.newAddressName){
					this.$emit('func', false)
					return;
				}
				this.$emit('func', false ,this.newAddressName )
			},
			// getSelect(data) { //传入子组件的方法
			// 	this.count = data;
			// 	console.log(data)
			// },
			showSiteNav(index) { //导航栏切换
				if (index == 0) {
					this.showOne = true;
					this.showTwo = false;
					this.showThree = false;
					this.showProvIndex = this.goback;
				} else if (index == 1) {
					this.showOne = false;
					this.showTwo = true;
					this.showThree = false;
					this.showProvIndex = 0;
				}else if(index == 2){
					this.showOne = false;
					this.showTwo = false;
					this.showThree = true;
				}
				this.showSiteIndex = index;
			},
			showProvNav(prov, index) { //切换省
		
				this.siteNav[0] = prov;
				this.showProvIndex = index;
				var curProv;
				this.goback = index; //记录上一级选中序号
				curProv = this.data.filter(item => { //选中的省份
					return item.label == prov;
				});
				this.updateCity = curProv;
				this.citys = [];
				this.region = [];
				for (var i = 0; i < curProv.length; i++) {
					// this.citys.push(curProv[i].children.label)
					for (var j = 0; j < curProv[i].children.length; j++) {
						this.citys.push(curProv[i].children[j].label);
						this.siteNav[1] = this.citys[0];
					}
				}
				this.showOne = false;
				this.showTwo = true;
				this.showThree = false;
				this.siteNav[2] = '选择区';
				this.showSiteIndex = 1;
				this.showProvIndex = 0;
				this.showCityIndex = 0;

			},
			showCityNav(prov, index) { //切换城市

				this.siteNav[1] = prov; 
				this.showCityIndex = index;
				var self = this;
				var qu;
				this.region = [];
				for (var i = 0; i < self.updateCity.length; i++) {
					// this.citys.push(curProv[i].children.label)
					qu = self.updateCity[i].children.filter(item => { //选中区
						return item.label === prov;
					});
				} //所在城市 区
				for(var k = 0 ; k < qu[0].children.length ; k++){
					this.region.push(qu[0].children[k].label)
				}
				this.showOne = false;
				this.showTwo = false;
				this.showThree = true;
				
				this.siteNav[2] = this.region[0];
				this.showSiteIndex = 2;
				this.showRegIndex = 0;
			
			},
			overSelect(reg,index){ //完成地址选取
				this.siteNav[2] = reg;
				this.showRegIndex = index;
				if(this.siteNav){
					this.newAddressName = this.siteNav;
				}		
				// this.siteNav.forEach(item => {
				// 	this.newAddressName += item;
				// })
				this.hideSpec();
			},
			async getCity() {
				// let province = [];
				if(this.updateCity.length == 0){ //如果进入之前已经选择
					let data = await this.$api.citys('data'); //获取所有城市的信息
					this.data = data;
					for (var i = 0; i < data.length; i++) {
						this.province.push(data[i].label)
					}
				}
				// console.log(this.province)
				// province = data.filter(item => {
				// 			return item.label === '北京市';
				// });
			}
		}

	}
</script>

<style lang="scss">
	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;


		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: 0;
			width: 100%;
			// padding: 0 4%;
			height: 75%;
			background-color: #fff;
			align-content: space-between;

			.site-header {
				width: 94%;
				padding: 0 3%;
				height: 15vw;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.font {
					font-size: 54upx;
					font-weight: 500;
				}

				.icon {
					font-size: 34upx;
				}
			}
		}

		.nav {
			width: 100%;
			height: 10vw;
			background-color: #fff;
			display: flex;
			border-bottom: 1px solid #eee;

			.type {
				min-width: 15%;
				font-size: 28upx;
				color: #333;
				line-height: 10vw;
				padding-left: 3%;

				&.cur {
					border-bottom: 2px solid #412B85;
				}
			}
		}

		.city {
			width: 100%;
			height: 100%;
			overflow: hidden;
			// padding-bottom: 20upx;
			.row {
				width: 96%;
				margin: 0 2%;
				height: 70upx;
				display: flex;
				font-size: 32upx;
				color: #666;
				align-items: center;

				&.on {
					color: #412B85;

					&::after {
						content: url(../../../static/img/cur.png);
						margin-left: 30upx;
					}
				}
			}
		}
	}
</style>
