export default {
  // [getters.js]
	// 정의: /store/index.js의 state에 저장된 data를 return하는 함수

  // **  getters 사용 규칙 **
	// 1. 함수명은 fetchedXXX로 통일
	// 2. 함수의 첫 번째 파라미터는 'state'로 고정 (vuex문법 - /store/index.js의 state 와 연결되기 때문)
  
  fetchedTest(state) {
    return state.test; // state로부터 data를 전달받음
  },
}