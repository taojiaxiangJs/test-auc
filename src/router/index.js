import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import proxyRouter from "./module/proxy"
import scanRouter from "./module/scan"
import adminRouter from "./module/admin"
import treatingRouter from "./module/treating"
import ruleRouter from "./module/rule"
import gradingRouter from "./module/grading"
import helpRouter from "./module/help"
import dataRouter from "./module/data"
import auditRouter from "./module/audit"
import analyzeRouter from "./module/analyze"

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login')
    }, {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
    }
];

export const indexRoute = [{
    path: '/',
    redirect: '/index'
},{
    path: '/index',
    name: 'index',
    component: () => import('@/views/nav/index'),
}];

export const asyncRoutes = [
    proxyRouter,
    scanRouter,
    adminRouter,
    treatingRouter,
    ruleRouter,
    gradingRouter,
    helpRouter,
    dataRouter,
    auditRouter,
    analyzeRouter
];

const creatRouter = () => new Router({
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 })
    // 每次进入页面时都初始化滚轴位置
})

const router = creatRouter()

export function resetRouter() {
    const newRouter = creatRouter()
    router.matcher = newRouter.matcher
    // 对router.matcher属性做修改，即新的routes就会替换老的routes, 其实就是replaceRoutes()的含义（但是官方没有提供这个API）
}
export default router
