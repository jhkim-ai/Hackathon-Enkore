<template>
  <div>
    <div class="sub-donate-toolbar">
      <v-tabs
      v-model="tabData.tab"
      fixed-tabs
      background-color="white"
      color="red"
      height="30"
      >
        <v-tab
            v-for="(item, idx) in tabData.items"
            :key="item"
          >
            {{idx}} + {{ item }}
        </v-tab>
      </v-tabs>
    </div>

    <div class="detail_outer_box">
      <div v-if="tabData.tab == 0">
        <DonateStory></DonateStory>
      </div>
      <div v-else-if="tabData.tab == 1">
        <DonateLegal></DonateLegal>
      </div>
      <div v-else-if="tabData.tab == 2">
        <div class="outer-line">
          <iframe src="https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=%EC%9E%AC%EB%8B%A8%EC%9D%B4%EB%A6%84" title="새소식"  style="width:100%; height:800px"></iframe>
        </div>
      </div>
      <div v-else-if="tabData.tab == 3">
        <DonateCommu></DonateCommu>
      </div>
      <div v-else-if="tabData.tab == 4">
        <DonateSupport></DonateSupport>
      </div>
    </div>
  </div>
</template>

<script>

import DonateStory   from './DonateStory.vue'
import DonateCommu   from './DonateCommu.vue'
import DonateSupport from './DonateSupport.vue'
import DonateLegal   from './DonateLegal.vue'

export default {
  components: { 
    DonateStory, DonateCommu , DonateSupport, DonateLegal
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
.sub-donate-toolbar {
  margin: 30px auto;
  display: flex;
  width: 60%;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
}
.detail_outer_box {
  margin: 30px auto;
  width: 60%;
}
</style>
