<template>
  <div class="sub-funding-toolbar">
    <v-tabs
    fixed-tabs
    background-color="white"
    color="red"
    height="30"
  >
    <v-tab>
      스토리
    </v-tab>
    <v-tab>
      반환정책
    </v-tab>
    <v-tab>
      새소식
    </v-tab>
    <v-tab>
      커뮤니티
    </v-tab>
    <v-tab>
      서포터
    </v-tab>
  </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
  border-color: white white rgba(0, 0, 0, 0.12) white;
  border-style: solid;
}
</style>