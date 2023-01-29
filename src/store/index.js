import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({ // 상태관리 도구
	state: {
		test: [],
	},
	getters,
	mutations,
	actions,
});
