import { config } from '@/setting'
/**
 *  合规检测
*/
const dataRouter = {
    path:'data',
    name: 'data',
    component: () => import("@/views/data/index"),
    meta:{title: '数据源', icon: 'el-icon-tickets'}
}

export default dataRouter