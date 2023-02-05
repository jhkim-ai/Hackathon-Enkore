import { fetchTestList, fetchTest2List } from '../api/index.js';

  // [actions.js]
	// 정의: /api/index.js 의 API 호출 함수를 사용하여 data를 mutations로 전달

	// **  actions 사용 규칙 **
	// 1. 함수명은 아래와 같이 통일
  //   (1) select - FETCH_xxx
  //   (2) update - ...
  //   (3) insert - ...
  //   (4) delete - ...
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
}
