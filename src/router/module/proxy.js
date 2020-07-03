const proxyRouter = {
    path: "proxy",
    name: 'proxy',
    component: () => import("@/views/proxy/proxy"),
    mate: { title: "数据鉴权" },
    redirect: "proxy/resource",
    children: [
        {
            path: "resource",
            component: () => import("@/views/proxy/components/resource.vue"),
            mate: { title: "资源", icon: "el-icon-tickets" }
        },
        {
            path: "subject",
            component: () => import("@/views/proxy/components/subject.vue"),
            mate: { title: "主体", icon: "el-icon-user" }
        },
        {
            path: "action",
            component: () => import("@/views/proxy/components/action.vue"),
            mate: { title: "操作", icon: "el-icon-mouse" }
        },
        {
            path: "environment",
            component: () => import("@/views/proxy/components/environment.vue"),
            mate: { title: "环境", icon: "el-icon-original" }
        },
        {
            path: "policy",
            component: () => import("@/views/proxy/components/policy.vue"),
            mate: { title: "策略", icon: "el-icon-share" }
        },
    ]
}

export default proxyRouter;

