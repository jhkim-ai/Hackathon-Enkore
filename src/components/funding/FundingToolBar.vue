<template>
  <div>
    <div class="content_outer_box">
      <div class="sub-funding-toolbar">
        <v-tabs
        v-model="tabData.tab"
        fixed-tabs
        background-color="white"
        color="red"
        height="30"
        >
          <v-tab
              v-for="item in tabData.items"
              :key="item"
            >
              {{ item }}
          </v-tab>
        </v-tabs>
      </div>
    </div>

    <div class="detail_outer_box">
      <div class="detail_inner_left_box">
        <div v-if="tabData.tab == 0">
          <funding-story></funding-story>
        </div>
        <div v-else-if="tabData.tab == 1">
          <funding-rule></funding-rule>
        </div>
        <div v-else-if="tabData.tab == 2">
          <funding-new-stroy></funding-new-stroy>
        </div>
        <div v-else-if="tabData.tab == 3">
          <funding-community></funding-community>
        </div>
        <div v-else-if="tabData.tab == 4">
          <funding-supporter></funding-supporter>
        </div>
      </div>

      <div class="detail_outer_right_box">
        <div class="detail_inner_right_box">
          <funding-order></funding-order>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FundingCommunity from './FundingCommunity.vue'
import FundingNewStroy from './FundingNewStroy.vue'
import FundingOrder from './FundingOrder.vue'
import FundingRule from './FundingRule.vue'
import FundingStory from './FundingStory.vue'
import FundingSupporter from './FundingSupporter.vue'

export default {
  components: { 
    FundingStory,
    FundingRule,
    FundingNewStroy,
    FundingCommunity,
    FundingSupporter,
    FundingOrder,
  },
  data () {
    return {
        tabData: {
          tab: null,
          items: [
            '스토리', '반환정책', '새소식', '커뮤니티', '서포터',
          ],
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
      }
    },
}
</script>

<style scoped>
.content_outer_box {
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
}
.sub-funding-toolbar {
  margin: 25px auto;
  display: flex;
  width: 60%;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
}
.detail_outer_box {
  margin: 0 auto;
  width: 90%;
}
.detail_inner_left_box {
  float: left;
  margin: 20px 0 0 0;
  padding: 0 25px 0 5px;
  width: 60%;
  /* box-shadow: 1px 1px 1px 1px rgb(100 100 0 / 10%); */
}
.detail_outer_right_box {
  float: right;
  margin: 20px 0 0 0;
  padding: 0 5px 0 25px;
  width: 40%;
  height: 2500px;
  /* box-shadow: 1px 1px 1px 1px rgb(50 0 100 / 10%); */
}
.detail_inner_right_box {
  position: sticky;
  top: 0;
  /* z-index:1; */
}
</style>
