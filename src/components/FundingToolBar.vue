<template>
  <div>
    <div class="sub-funding-toolbar">
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
        <funding-story></funding-story>
      </div>
      <div v-else-if="tabData.tab == 1">
        {{tabData.items[tabData.tab]}}
      </div>
      <div v-else-if="tabData.tab == 2">
        {{tabData.items[tabData.tab]}}
      </div>
      <div v-else-if="tabData.tab == 3">
        {{tabData.items[tabData.tab]}}
      </div>
      <div v-else-if="tabData.tab == 4">
        {{tabData.items[tabData.tab]}}
      </div>
    </div>
  </div>
</template>

<script>
import FundingStory from './FundingStory.vue'

export default {
  components: { 
    FundingStory,
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
.sub-funding-toolbar {
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
