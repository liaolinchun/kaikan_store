<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import {
		mapMutations
	} from 'vuex';
	//#ifdef H5
	import {isLogin } from './utils/hApi.js'
	// #endif
	import interfaces from './utils/interface.js';
	export default {
		data() {
			return{
				
			}
		},
		methods: {
			...mapMutations(['login', 'logout'])
		},
		onLaunch: function() {
			this.request({
				url: interfaces.isLogin, //获取登录状态
				method: "POST",
				success: ((res) => {
					// console.log(res)
					if (res.error_code != 0) { //登录状态失效
						this.logout()
					} else { //更新信息
						const userInfo = {
							id: 1,
							mobile: res.tell,
							nickname: `砍砍用户${res.tell}`,
							portrait: '/static/user_img.png'
						}
						this.login(userInfo);
					}
				})
			});
			//#ifdef H5
			isLogin().then((res) => {
				console.log(res)
				if (res.error_code != 0) { //登录状态失效
					this.logout()
				} else { //更新信息
					const userInfo = {
						id: 1,
						mobile: res.tell,
						nickname: `砍砍用户${res.tell}`,
						portrait: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584357130382&di=99c11194936cc6efc617433713877360&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-501c31cde297a64e0710b6a2a592b156_hd.jpg'
					}
					this.login(userInfo);
				}
			})
			// #endif
		},
		onShow: function() {
			// let cookie = wx.getStorageSync('cookieKey');
			//  let header = {};
			//  if(cookie){
			//    header.Cookie=cookie;
			//  }
			 console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/iconfont/stylesheet.css";

	page {
		position: relative;
		background-color: #fff;
	}
</style>
