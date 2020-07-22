<template>
	<view class="content">
		<!-- 状态栏 -->
		<page-status></page-status>

		<view class="row b-b">
			<text class="tit">收件人</text>
			<input class="input" type="text" v-model="addressData.shou_name" :disabled="key" placeholder="收货人姓名"
			 placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">联系手机</text>
			<input class="input" type="number" v-model="addressData.shou_tell" :disabled="key" placeholder="收货人手机号码"
			 placeholder-class="placeholder" />
		</view>
		<view class="row b-b" @tap="setShowSite">
			<text class="tit">所在地区</text>
			<text class="input">
				{{addressData.addressName}}
			</text>
			<text class="icon-shouhuodizhi iconfont">&#xe76c;</text>
		</view>
		<view class="row b-b">
			<text class="tit">详细地址</text>
			<input class="input" type="text" v-model="addressData.address" :disabled="key" placeholder="街道、门牌号等"
			 placeholder-class="placeholder" />
		</view>

		<view class="row default-row">
			<text class="tit">设置默认地址</text>
			<switch :checked="addressData.showCheck" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>

		<popup-site :showSite="showSite" ref="getCity" @func="setSelect"></popup-site>
	</view>
</template>

<script>
	import popupSite from './base/popupSite.vue'
	import interfaces from '../../utils/interface.js'
	//#ifdef H5
	import {
		add_address,
		set_moren
	} from '../../utils/hApi.js'
	//#endif
	export default {
		data() {
			return {
				showSite: false,
				addressData: {
					name: '',
					mobile: '',
					addressName: '请选择省 、 市 、 区',
					province: '', //省
					area: '', //市区
					address: '',
					default: 2, //是否设置为默认地址 1:是 2不是
					showCheck: false,
				},
				new_address: true, //新增或编辑
				key: false, //如果修改就锁住输入框
				id: '' //收货地址id
			}
		},
		components: {
			popupSite
		},
		onLoad(option) {
			let title = '新增收货地址';
			this.key = false;
			if (option.type === 'edit') {
				this.new_address = false; //编辑 修改默认
				title = '编辑收货地址'
				this.key = true; //编辑默认地址
				let data = JSON.parse(option.data)
				this.id = data.id;
				this.addressData = data;
				this.addressData.addressName = data.province + data.area;
				if (data.mo_ren == 1) {
					this.addressData.showCheck = true;
				}
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e) {
				if (e.detail.value) {
					this.addressData.default = 1;
				} else {
					this.addressData.default = 2;
				}
			},

			setSelect(show, newAddressName) { //传入子组件的方法
				this.showSite = show;
				if (newAddressName) {

					this.addressData.province = newAddressName[0];
					this.addressData.area = newAddressName[1] + newAddressName[2];
					this.addressData.addressName = this.addressData.province + this.addressData.area;
				}
			},
			//选择地址
			setShowSite() {
				if (!this.key) {
					this.showSite = true;
					this.$refs.getCity.getCity() //触发子组件方法
				}
			},

			//提交
			confirm() {
				if (this.new_address) { //如果是新增
					let data = this.addressData;
					if (!data.shou_name) {
						this.$api.msg('请填写收货人姓名');
						return;
					}
					if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.shou_tell)) {
						this.$api.msg('请输入正确的手机号码');
						return;
					}
					if (data.addressName == '请选择省 、 市 、 区') {
						this.$api.msg('请选择所在位置');
						return;
					}
					if (!data.address) {
						this.$api.msg('请填写门牌号信息');
						return;
					}

					//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
					// this.$api.prePage().refreshList(data, this.manageType);
					// this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
					console.log(this.addressData)
					this.request({
						url: interfaces.add_address, //获取
						method: "POST",
						data: {
							shou_name: data.shou_name,
							shou_tell: data.shou_tell,
							shou_email: '',
							province: data.province,
							area: data.area,
							address: data.address,
							zip_code: '',
							mo_ren: data.default,
						},
						success: ((res) => {

							if (res.error_code == 0) {
								this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
								setTimeout(() => {
									uni.navigateBack()
								}, 800)
							}
						})
					})
					//h5
					//#ifdef H5
					let dataInfo = {
						shou_name: data.shou_name,
						shou_tell: data.shou_tell,
						shou_email: '',
						province: data.province,
						area: data.area,
						address: data.address,
						zip_code: '',
						mo_ren: data.default,
					}
					add_address(dataInfo).then((res) => {
						if (res.error_code == 0) {
							this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							setTimeout(() => {
								uni.navigateBack()
							}, 800)
						}
					})
					//#endif
				} else { //修改默认地址
					this.request({
						url: interfaces.set_moren,
						method: 'POST',
						data: {
							address_id: this.id
						},
						success: ((res) => {
							if (res.error_code == 0) {
								this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
								setTimeout(() => {
									uni.navigateBack()
								}, 800)
							}
						})
					});
					//H5
					//#ifdef H5
					let data = {
						address_id: this.id
					}
					set_moren(data).then((res) => {
						if (res.error_code == 0) {
							this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							setTimeout(() => {
								uni.navigateBack()
							}, 800)
						}
					})
					//#endif
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFF;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: #333;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: #999;
			padding-left: 20upx;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: #666;
			transform: rotate(180deg);
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		position: fixed;
		bottom: 3vw;
		left: 50%;
		transform: translateX(-50%);
		font-size: 30upx;
		color: #fff;
		background-color: #EE666C;
		border-radius: 0upx;
	}
</style>
