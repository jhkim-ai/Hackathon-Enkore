import { fetchTestList } from '../api/index.js';

export default {
	FETCH_TEST(context) {
		fetchTestList()
			.then(response => {
        console.log("Action 입니다");
				console.log(response.data);

				context.commit('SET_TEST', response.data);					
			})
			.catch(error => {
				console.log(error);
      })
	},
}