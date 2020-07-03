import { config } from '@/setting'
/**
 *  数据脱敏
*/
const treatingRouter = {
    path:'treating',
    name: 'treating',
    component: () => import("@/views/treating/index"),
    meta:{title: '数据脱敏', icon: 'el-icon-tickets'}
}

export default treatingRouter