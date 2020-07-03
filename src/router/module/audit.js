import { config } from '@/setting'
/**
 *  内容管控
*/
const auditRouter = {
    path:'audit',
    name: 'audit',
    component: () => import("@/views/audit/index"),
    meta:{title: '内容管控', icon: 'el-icon-tickets'}
}

export default auditRouter