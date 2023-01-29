export default {
	SET_TEST(state, data) {
		console.log("mutations");
		console.log(data);
		state.test = data;
	},
}