export default {
	
	// [mutations.js]
	// 정의: /store/actions.js 로부터 data를 전달받아 store의 state로 저장하는 함수

	// **  mutations 사용 규칙 **
	// 1. 함수명은 SET_xxx 으로 통일
	// 2. 함수의 첫 번째 파라미터는 'state'로 고정 (/store/index.js의 state 와 연결되기 때문)
	// 3. 함수의 두 번째 파라미터는 'data'로 고정 (/store/actions.js의 commit 함수가 사용된 곳의 data를 전달받음)

	SET_TEST(state, data) {
		state.test = data; // state에 data를 전달
	},
	SET_TEST2(state, data) {
		state.test2 = data;
	},
	SET_DONATE(state,data){
		state.donateDB=data;
	},
	UPDATE_DONATE(state,data){
		console.log("start... UPDATE_DONATE");
		state.donateDB.push(data);
	}
}
