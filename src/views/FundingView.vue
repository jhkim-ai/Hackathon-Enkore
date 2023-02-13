<template>
  <div>
    <div>
      <div class="wrap_tab carousel_box" style = "height: 500px" >
        <!-- <ul class="list_tab tab_type6" style = "height: 500px; flex-wrap: wrap; justify-content: center; align-content: space-around">
            <span class="txt_tab">의결권펀딩 참여하기</span>
        </ul> -->
        <home-carousel></home-carousel>
      </div>
      <div class="group_fundlist funding_list_box">
        <h4 class="screen_out">펀딩 리스트</h4>
        <div class="search_box_outer">
          <div class="search_box_inner">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @click:append="searchFunding"
          ></v-text-field>
          </div>
        </div>
        <ul class="list_fund_size list_fund fund_raising"><!---->
          <!--이거 통하나가 카드섹션 하나-->
          <li v-for="item in fetcheFunding" :key="item.board" class="listcard">
                <router-link class="p_card" :to="{ name: 'FundingDetail', query: { param1: 1, param2: '재단이름'} }" >
                  <span class="box_thumb">
                  <span kagetype="c203" class="img_thumb" v-bind:style="{ 'background-image' : 'url(' + getCurUrl(item) + ')' }"></span>
                  </span>
                  <span class="box_together">
                    <span class="bundle_tit">
                      <strong class="tit_together ellipsis_type1">
                        <span class="tag_bundle">
                          <span class="tag_state tag_state_default">종료임박</span>
                        </span>{{item.title}}
                      </strong>
                      <span class="txt_proposer">
                        <span class="screen_out"></span>
                        </span>{{item.foundation}}</span>
                    <span class="wrap_state">
                      <span class="state_bar">
                        <span class="state_gage state_ing" v-bind:style= "{ width: searchDonate(item) }"></span>
                      </span>
                      <span class="screen_out">달성률</span>
                      <span class="txt_per">{{searchDonate(item)}}</span>
                    </span><!---->
                    <span class="price_goal">{{searchDonate(item)}} &nbsp;&nbsp;&nbsp; {{item.goal}}주 </span>
                  </span>
                </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/kakao.css";
import HomeCarousel from '@/components/HomeCarousel.vue';
import{ mapGetters } from 'vuex';

export default {
  name: "FundingView",
  components: {
    HomeCarousel,
  },
  computed: {
    ...mapGetters([
      'fetcheFunding'
    ]),
  },
  methods: {
    clickList() {
      this.$router.push({
        name: "Query",
        query: { name: "Query 프로그래밍 방식", age: 2 },
      });
    },
    searchFunding() {
      alert('click Test');
    },
    getCurUrl(item){
      return item.pic;
    },
    getBoard(item){
      return item.board;
    },
    searchDonate(item){
      console.log(item);
      return (item.now/item.goal*100) + "%";
    }
  },
}
</script>

<style scoped>
.carousel_box {
  margin: 10px 0px 20px 0px;
}
.funding_list_box {
  width: 80%;
  margin: 50px auto 0px auto;
}
.funding_list_box > h4 {
  height: 100px;
  width: 100px;
  line-height: 20px;
  text-indent: 0px;
  margin-left: 10%;
  margin-top: -9px;
}
.list_fund li {
  margin: 40px 0.5% 0 0.5%;
}
.list_fund_size {
  padding-left: 10%;
}
.search_box_outer {
  display: flex;
  justify-content: flex-end;
}
.search_box_inner {
  /* margin: -35px 80px 12px 0px; */
  margin: -35px 10% 12px 0px;
  width: 300px;
}
.state_ing {
  background-color: #FF6D00;
}
</style>
