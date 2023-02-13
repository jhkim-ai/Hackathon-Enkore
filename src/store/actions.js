import { fetchTestList, fetchTest2List } from '../api/index.js';

// 초기데이터 파일 읽어오기
import DONATE_FILE from '../assets/db/DONATEDB.json'
import BOARD_FILE from '../assets/db/BOARDDB.json'

  // [actions.js]
	// 정의: /api/index.js 의 API 호출 함수를 사용하여 data를 mutations로 전달

	// **  actions 사용 규칙 **
	// 1. 함수명은 아래와 같이 통일
  //   (1) select - FETCH_xxx
  //   (2) update - ...
  //   (3) insert - ...
  //   (4) delete - ...
  //   (5) init   - INIT_xxx
	// 2. 함수의 첫 번째 파라미터는 vuex 문법이기에 'context'로 고정
	// 3. API로부터 전달받은 data를 context.commit 함수를 이용하여 mutations로 전달
  //   (1) 파라미터 설명 - context.commit('전달할 mutations 함수명', '전달할 데이터')

export default {
	FETCH_TEST(context) {
		fetchTestList()
			.then(response => {
        console.log(response);
				context.commit('SET_TEST', response.data); // mutations에 data를 전달					
			})
			.catch(error => {
				console.log(error);
      })
	},
	FETCH_TEST2(context) {
		fetchTest2List()
			.then(response => {
				context.commit('SET_TEST2', response.data);
			})
			.catch(error => {
				console.log(error);
      })
	},
	INIT_DONATEDB({commit}){
		console.log("start ... INIT_DONATEDB");
		const res = DONATE_FILE
		const data = res.data.map(d=>({
			seq : d.seq,
			board: d.board,
			user: d.user,
			stock: d.stock,
			qty: d.qty,
			comment: d.comment,
			time: d.time 
		}))
		commit('SET_DONATE',data);
	},
	INIT_BOARDDB({commit}){
		console.log("start ... INIT_BOARDDB");
		const res = BOARD_FILE
		const data = res.data.map(d=>({
			board : d.board,
			title: d.title,
			foundation: d.foundation,
			goal: d.goal,
			category: d.category,
			bizno:d.bizno,
			tno: d.tno,
			address: d.address,
			time: d.time,
			note: d.note,
			pic: d.pic
		}))
		commit('SET_BOARD',data);
	},
	INIT_FUNDING({commit}){
		console.log("start ... INIT_BOARDDB");
		const res = BOARD_FILE
		const data = res.data.map(d=>({
			board : d.board,
			title: d.title,
			foundation: d.foundation,
			goal: d.goal,
			category: d.category,
			bizno:d.bizno,
			tno: d.tno,
			address: d.address,
			time: d.time,
			note: d.note,
			pic: d.pic
		}))
		commit('SET_FUNDING',data);
	}
}
