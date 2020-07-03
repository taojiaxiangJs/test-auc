import { config } from '@/setting'

const adminRouter = {
    path:'admin',
    name: 'admin',
    component: () => import("@/views/admin/index"),
    meta:{ title: "系统管理", icon: "el-icon-tickets" }
}

export default adminRouter;