import { config } from '@/setting'
/**
 *  行为分析
*/
const analyzeRouter = {
    path:'analyze',
    name: 'analyze',
    component: () => import("@/views/analyze/index"),
    meta:{title: '行为分析', icon: 'el-icon-tickets'}
}

export default analyzeRouter