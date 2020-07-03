import { config } from '@/setting'
/**
 *  分类分级
*/
const gradingRouter = {
    path:'grading',
    name: 'grading',
    component: () => import("@/views/grading/index"),
    meta:{title: '分类分级', icon: 'el-icon-tickets'}
}

export default gradingRouter