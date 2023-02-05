import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

import DonateDB from '../assets/db/donate.json'

Vue.use(Vuex);

export const store = new Vuex.Store({ // 상태관리 도구
	state: {
		test: [],
		test2: [],
		donateDB:[],
	},
	getters,
	mutations:{
		__proto__: mutations,
		setDB(state,data){
			state.donateDB=data;
		}
	},
	actions:{
		__proto__: actions,
		init_DonateDB({commit}){
			const res = DonateDB
			const data = res.data.map(d=>({
				board: d.board,
				user: d.user,
				stock: d.stock,
				qty: d.qty,
				time: d.time 
			}))
			commit('setDB',data);
		}
	}
});
