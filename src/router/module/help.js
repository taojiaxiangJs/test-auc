import { config } from '@/setting'
/**
 *  合规检测
*/
const helpRouter = {
    path:'help',
    name: 'help',
    component: () => import("@/views/help/index"),
    meta:{title: '帮助', icon: 'el-icon-tickets'}
}

export default helpRouter