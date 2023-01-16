<template>
  <div class="toolbar">
    <div class="toolbar-home-link">
      <router-link to="/">Enkore</router-link>
    </div>
    <div class="toolbar-menu-link">
      <router-link to="/fund">의결권펀딩</router-link>
    </div>
    <div class="toolbar-menu-link">
      <router-link to="/donate">배당금기부</router-link>
    </div>

    <div class="project-btn">
      <user-status></user-status>
      <v-btn
        class="ma-2 cyan darken-2 white--text"
      >
        프로젝트 생성하기
      </v-btn>
    </div>
  </div>
</template>

<script>
import UserStatus from './UserStatus.vue';

export default {
  components: { 
    UserStatus, 
  },
};
</script>

<style scoped>
  .toolbar {
    display: flex;
    background-color: #373a3c;
    height: 80px;
    align-items: center;
  }
  .toolbar-home-link {
    font-size: 30px;
    margin: 0px 80px 0px 100px;
  }
  .toolbar-menu-link {
    margin: 0px 30px;
  }
  .toolbar-home-link a {
    color: #0097A7;
    text-decoration: none;
  }
  .toolbar-menu-link a {
    color: white;
    text-decoration: none;
  }
  .project-btn {
    display: flex;
    margin-left: auto;
    margin-right: 80px;
  }
</style>
