<template>
	<div class="login">
		<div class="login-container">
			<div class="header"><img src="../../assets/img/logo_login.png" alt="logo"></div>
			<p>
				<span class="label">用户名：</span> 
				<el-input ref="username" v-model="loginInfo.username" size="large" placeholder="输入用户名"  @blur="verifyFn('username')" prefix-icon="el-icon-user" style="width:380px"></el-input>
				<span class="tips" v-if="!verify.username">用户名不能为空</span>
			</p>
			<p>
				<span class="label">密码：</span> 
				<el-input ref="password" v-model="loginInfo.password" :type="passwordType" @blur="verifyFn('password')" size="large" placeholder="输入密码" prefix-icon="el-icon-lock" style="width:380px"></el-input>
				<img v-if="passwordType == 'password'" @click="passwordType = 'text'" class="eyeicon" src="../../assets/img/eyeclose.png" alt="">
				<img v-else class="eyeicon" @click="passwordType = 'password'" src="../../assets/img/eyeopen.png" alt="">
				<span class="tips" v-if="!verify.password">密码不能为空</span>
			</p>
			<p>
				<span class="label">验证码：</span> 
				<el-input ref="verificationCode" v-model="loginInfo.verificationCode" @blur="verifyFn('verificationCode')" size="large" placeholder="输入验证码" style="width:200px"></el-input>
				<span class="img"></span>
				<span class="tips" v-if="!verify.verificationCode">验证码不能为空</span>
				<img :src="codeSrc" class="code-img" @click="getCode()">
			</p>
			<p>
				<span class="structure"></span>
				<el-button id="btn" style="width:380px" @click="submit">登 陆</el-button>	
			</p>
  		</div>
	</div>
</template>

<script>
import { serverUrl } from '@/setting'

export default {
	data(){
		return{
			loginInfo:{
				username: '',
				password: '',
				verificationCode: '',
			},
			passwordType: 'password',
			verify:{
				username: true,
				password: true,
				verificationCode: true
			}, 
			redirect: '',
			query: {},
			codeSrc: ''
		}
	},
	created() {
		this.getCode()
		var _self = this;
		document.onkeydown = function(e){
			var key = window.event.keyCode;
			if(key == 13 || key == 100){
				_self.submit()
			}
		}
	},
	mounted(){
		if(!this.loginInfo.username){
			this.$refs.username.focus()
		}else if(!this.loginInfo.password){
			this.$refs.password.focus()
		}else if(!this.loginInfo.verificationCode){
			this.$refs.verificationCode.focus()
		} 
	},
	watch: {
		$route: {
			handler: function(route){
				if(route.query){
					this.redirect = route.query.redirect
					this.query = this.getQuery(route.query)
				}
			},
			immediate: true
		}
	},
	methods: {
		getCode(){
			let base64 = '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'
			this.codeSrc = `data:image/gif;base64,${base64}`;
			// this.$ajax.get(serverUrl.getCodeUrl).then(res => {
			// 	const { data } = res;
			// 	this.codeSrc = `data:image/gif;base64,${data.validCode}`
			// 	this.loginForm.validCodeKey = data.validCodeKey
			// })
		},
		verifyFn(type){
			this.verify[type] = !!this.loginInfo[type]
		},
		verifySubmitFn(){
			if(!this.verify.username || !this.verify.password || !this.verify.verificationCode){
				return false
			}
			if(!this.loginInfo.username){
				this.verify.username = false
				return false
			}
			if(!this.loginInfo.password){
				this.verify.password = false
				return false
			}
			if(!this.loginInfo.verificationCode){
				this.verify.verificationCode = false
				return false
			}
			if(this.loginInfo.verificationCode.length != 4){
				this.$message.error('请输入正确的验证码！')
				return false
			}
			return true
		},
		submit(){
			if(!this.verifySubmitFn()){
				return
			} 
			this.$store.dispatch('user/login',this.loginInfo).then(() => {
				this.$router.push({
					path: this.redirect || '/',
					query: this.query
				})
			}).catch((err)=>{
				this.getCode()
			})
		},
		getQuery(query) {
			return Object.keys(query).reduce((acc, cur) => {
				if (cur !== 'redirect') {
					acc[cur] = query[cur]
				}
				return acc
			}, {})
		},
    }
}
</script>

<style scoped>
	.login{
		min-height: 100%;
		width: 100%;
		background-color: #888;
		overflow: hidden;
	}
	.login-container{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 800px;
		height: 461px;
		max-width: 100%;
		overflow: hidden;
		background: #fff;
		
	}
	.header{
		height: 63px;
		background: #494a52;
		display: flex;
		align-items: center;
		padding-left: 24px;
		margin-bottom: 62px;
	}
	.header img{
		height: 36px;
	}
	span{
		display: inline-block;
	}
	.label{
		width: 100px;
		line-height: 40px;
		text-align: right;
		font-size: 18px;
	}
	.img{
		width: 150px;
		margin-left: 26px;
	}
	.structure {
		width: 100px;
	}
	.eyeicon{
		position: absolute;
		right: 168px;
    	top: 14px;
		width: 22px;
		color:#C0C4CC;
	}
	.el-button{
		background-color: #ee8e00;
		border-color: #ee8e00;
		color: #ffffff;
		height: 48px;
		font-size: 16px;
	}
	.tips{
		color: #F56C6C;
		position: absolute;
		left: 264px;
		bottom: -18px;
		font-size: 12px;
	}
	.code-img{
		position: absolute;
		top: 0;
		right: 158px;
		height: 48px;
	}
	p{
		text-align: center;
		margin: 0 0 26px;
		position: relative;
	}
	p>>>.el-input__inner{
		height: 48px;
		font-size: 16px;
	}
</style>