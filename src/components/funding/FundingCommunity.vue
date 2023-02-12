<template>
  <div>
    <h1>Vuex(API, Store) 파일별 용도 </h1>
    <p>
      1. /src/api/index.js 에서 API 호출 함수 정의 <br>
      2. /src/store/index.js 에서 state 안에 필요한 변수 정의 <br>
      3. /src/store/actions.js 에서 /src/api/index.js 의 API 함수를 호출한 후 data를 정제하여 mutations으로 전달 <br>
      4. /src/store/mutations.js 에서 data를 state의 변수에 binding <br> 
      5. data를 사용할 vue 페이지에서 /src/store/getters.js 를 이용하여 store에 저장된 data를 호출 <br>
    </p>
    <p> ** 참고1 (sample: Spring 서버 사용) ** </p>
		<div v-for="item in fetchedTest2" :key="item.userName">
      userId: {{item.userId}} <br>
      userName: {{item.userName}} <br>
      userStat: {{item.userStat}} <br>
      <hr>
    </div>
    <br>
    <p> ** 참고2 (sample: vuex 사용) ** </p>
		<div v-for="(item, idx) in fetchedTest" :key="idx">
      id: {{item.id}} <br>
      title: {{item.title}} <br>
      points: {{item.points}} <br>
      <hr>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    }
  },
  created() {
		this.$store.dispatch('FETCH_TEST');
    this.$store.dispatch('FETCH_TEST2');
  },
  mounted() {
    this.test2();
  },
  computed: {
    ...mapGetters([
      'fetchedTest',
      'fetchedTest2',
    ]),
  },
  methods: {
    test(val) {
      console.log(val);
    },
    test2() {
      console.log("test2");
      this.test("kkk2");
      setTimeout(() => {
        this.test("kkk3");
      }, 3000);
    },
  }
}
</script>

<style>

</style>
