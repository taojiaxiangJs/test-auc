import {nav} from '../mutation.config'

const state = {
	current: '',
	data: [
		{ key: 'dashboard', val: '首页' },
		{ key: 'grading', val: '分类分级' },
		{ key: 'scan', val: '合规检测' },
		{ key: 'audit', val: '内容管控' },
		{ key: 'proxy', val: '数据鉴权' },
		{ key: 'treating', val: '数据脱敏' },
		{ key: 'analyze', val: '行为分析' },
		{ key: 'admin', val: '系统设置', location: 'right' },
		{ key: 'data', val: '信息源', location: 'right' },
		{ key: 'rule', val: '数据规则', location: 'right' },
		{ key: 'adminu', val: '管理员', location: 'right' },
		{ key: 'help', val: '帮助', location: 'right' }
	]
};

const mutations = {
	[nav.set_current]: (state, value) => {
		state.current = value
	}
}

export default {
	namespaced: true,
	state,
	mutations
}