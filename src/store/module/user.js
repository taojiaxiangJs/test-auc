import {user} from '../mutation.config'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { serverUrl } from '@/setting'
import router, {resetRouter} from '@/router'

const state = {
	token: getToken(),
	name: '张三',
	roles: []
}

const mutations = {
	[user.set_token]: (state, token) => {
		state.token = token
	},
	[user.set_name]: (state, name) => {
		state.name = name
	},
	[user.set_roles]: (state, roles) => {
		state.roles = roles
	}
}

const actions = {
	login({commit}, userInfo){
		const {username, password} = userInfo
		return new Promise((resolve, reject) => {
			// this.$ajax.post(serverUrl.loginUrl, { username: username.trim(), password: password }).then(res=>{
				let res = {
					data: {
						token: 'Bearer%20eyJtb2RlbCI6IlNJTVAtRE1DLUNVU1RPTSIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJzZWNhZG1pbiIsImp0aSI6IjVlZmJmNmI3ZTRiMDgyMzUzZTZjYTkxZCIsImlhdCI6MTU5MzU3MDk5OSwiZXhwIjoxNTkzNTcxODk5fQ._cacg7FrVqnfy6McxqY8kI4qLkahHCKE3jtKPAJbcUw'
					}
				}
				sessionStorage.setItem('name',username)


				const { data } = res
				commit('SET_TOKEN', data.token)
				setToken(data.token)
				resolve()
			// }).catch((err) => {
			// 	reject(err)
			// })
		})
	},

	getInfo({commit, state}) {
		return new Promise((resolve, reject) => {
			// this.$ajax.post(serverUrl.queryUserInfoUrl, { token: state.token}).then(res => {
				let res = {
					data:{
						name: sessionStorage.getItem('name'),
						roles: ['admin']
					}
				}



				const { data } = res;
				if(!data) reject('校验失败，请重新登陆！(W0001)')
				// roles ['admin'] or ,['developer','editor']
				const { name , roles} = data;
				if(!roles || roles.length <=0 ) reject('数据异常，请联系管理员！(W0002)')
				commit('SET_ROLES', roles)
				commit('SET_NAME', name)
				resolve(data)
			// }).catch(err => {
			// 	reject(err)
			// })
		})
	},

	logout({commit, state, dispatch}) {
		return new Promise((resolve, reject) => {
			// this.$ajax.post(serverUrl.logoutUrl, {token: state.token}).then(res => {
				commit('SET_TOKEN', '')
				commit('SET_ROLES', [])
				removeToken()
				resetRouter()
				resolve()
			// }).catch(err => {
			// 	reject(err)
			// })
		})
	},

	resetToken({commit}) {
		return new Promise((resolve,reject) => {
			commit('SET_TOKEN', '')
			commit('SET_ROLES', [])
			removeToken()
			resolve()
		})
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}