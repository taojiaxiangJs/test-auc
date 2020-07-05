import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const constantRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index')
	}
]

export const indexRoute = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index/index')
	}
]
export default new VueRouter({
	routes: constantRoutes,
	scrollBehavior:() => ({y:0})
})