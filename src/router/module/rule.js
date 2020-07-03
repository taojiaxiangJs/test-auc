import { config } from '@/setting'
/**
 *  数据规则
*/
const ruleRouter = {
    path:'rule',
    name: 'rule',
    component: () => import("@/views/rule/index"),
    meta:{title: '数据规则', icon: 'el-icon-tickets'}
}

export default ruleRouter