<template>
	<view class="content">

		<view v-if="addressList.length != 0" class="list" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="address-box">
					<text v-if="item.mo_ren == 1" class="tag">默认</text>
					<text class="address">{{item.province}} {{item.area}}</text>
				</view>
				<view class="u-box">
					<text class="name">{{item.shou_name}}</text>
					<text class="mobile">{{item.shou_tell}}</text>
				</view>
			</view>
			<text class="icon-bianji iconfont" style="color: #999;"  @click.stop="delAddress(item)">&#xe659;</text>
			<text class="icon-bianji iconfont"   @click.stop="addAddress('edit', item)">&#xe605;</text>
		</view>
		<text class="cur" v-if="addressList.length == 0">
			请添加收货地址
		</text>
	
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	import 	interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {get_address ,del_address} from '../../utils/hApi.js'
	//#endif
	export default {
		data() {
			return {
				source: 0,
				addressList: [] ,
			}
		},
		onLoad(option){
			this.source = option.source;
		},
		onShow(option) {
			this.initData()
		},
		methods: {
			async initData(){
				this.request({
					url: interfaces.get_address, //获取收货地址
					method: "POST",
					success: ((res) => {
						// console.log(res.data)
						if(res.error_code === 0){
							this.addressList = res.data;
						}else{
							this.addressList = []
						}
					})
				});
				//#ifdef H5
				get_address().then((res) => {
					if(res.error_code === 0){
						this.addressList = res.data;
					}else{
						this.addressList = []
					}
				})
				
				//#endif
			},
			delAddress(item){//删除地址
				uni.showModal({
					title: '删除',
					content: '确定要删除收货地址吗？',
					cancelText: '否',
					confirmText: '是',
					success: res => {
						if (res.confirm) {
							this.request({
								url: interfaces.del_address, //删除收货地址
								method: "POST",
								data : {
									address_id : item.id
								},
								success: ((res) => {
									if(res.error_code == 0){
										this.initData();
									}
								})
							});
							//#ifdef H5
							let data = {
								address_id : item.id
							}
							del_address(data).then((res) => {
								if(res.error_code == 0){
									this.initData();
								}
							})
							//#endif
						}
					}
				})
			},
			//选择地址
			checkAddress(item){
				
				
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item; 
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				// console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
		background: #fff;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			font-size: 24upx;
			color: #FB6B81;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 32upx;
		}
		.address{
			font-size: 30upx;
			color: #666;
		}
	}
	.u-box{
		font-size: 28upx;
		color: #999;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 48upx;
		color: #666;
		padding-left: 30upx;
	}
	.cur{
		display: block;
		width: 100%;
		height: 50upx;
		font-size: 26upx;
		color: #999;
		text-align: center;
	}
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: #EE666C;
		border-radius: 0;
	}
</style>
