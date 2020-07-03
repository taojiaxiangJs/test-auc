import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const moduleFiles = require.context('./module',true, /\.js$/)

const modules = moduleFiles.keys().reduce((modules, modulePath) => {
	var moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	var value = moduleFiles(modulePath)
	modules[moduleName] = value.default
	return modules
},{})

const store = new Vuex.Store({
	modules,
	getters,
	plugins: [createPersistedState({
		storage: window.sessionStorage
	})]
})

export default store