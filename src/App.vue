<template>
  <v-app>
    <div>
      <tool-bar></tool-bar>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
  },
};
</script>

<style scoped>

</style>
