import { config } from '@/setting'
/**
 *  合规检测
*/
const scanRouter = {
    path:'scan',
    name:'scan',
    component: () => import("@/views/scan/index"),
    meta:{title: '合规检测', icon: 'el-icon-tickets'}
}

export default scanRouter