import { constantRoutes, asyncRoutes, indexRoute } from '@/router'
import { permission } from '../mutation.config'

const state = {
	router: [],
	addRoutes: []
}

const mutations = {
	[permission.set_routes] : (state, routes) => {
		state.routes = constantRoutes.concat(routes)
		state.addRoutes = routes
	}
}

const actions = {
	generateRoutes( { commit }, roles) {
		return new Promise(resolve => {
			let accessedRoutes;
			if(roles.includes('admin')){
				indexRoute[1].children = asyncRoutes
				accessedRoutes =  indexRoute || []
			}else{
				indexRoute[1].children = filterAsyncRoutes(roles, asyncRoutes)
				accessedRoutes = indexRoute
			}
			commit( 'SET_ROUTES', accessedRoutes )
			resolve(accessedRoutes)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}

function hasPermission(roles, route){
	if(route.meta && route.meta.roles){
		return roles.some(item => route.meta.roles.includes(item))
	}else{
		return true
	}
}

function filterAsyncRoutes(roles, routes){
	let arr = [];
	routes.map( route => {
		const Obj = { ...route }
		if(hasPermission(roles, Obj)){
			if(Obj.children){
				Obj.children = filterAsyncRoutes(Obj.children, roles)
			}
			arr.push(Obj)
		}
	})
}

