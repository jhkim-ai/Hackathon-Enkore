import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FundingView from '../views/FundingView.vue';
import DonateView from '../views/DonateView.vue';
import DonateDetail from '../views/DonateDetail.vue';
import FundingDetail from '../views/FundingDetailView.vue';
import ProjectMake from '../views/ProjectMakeView.vue';
import EnkoreMyPage from '../views/EnkoreMyPage.vue';
import DonateMyPage from '../components/DonateMyPage.vue';
import FundingMyPage from '../components/mypage/FundingMyPage.vue';
import ProjectMyPage from '../components/mypage/ProjectMyPage.vue';
import EsgPage from '../components/EsgPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      // path: URL 주소
      // component: URL로 접속했을 때 나타나는 화면
      path: '/index',
      component: HomeView,
    },
    {
      path: '/fund',
      component: FundingView,
    },
    {
      path: '/fund/detail',
      component: FundingDetail,
      name: 'FundingDetail',
      props: true,
    },
    {
      path: '/donate',
      component: DonateView,
    },
    {
      path: '/donate/detail',
      component: DonateDetail,
      name: 'DonateDetail',
      props: true,
    },
    {
      path: '/myPage',
      component: EnkoreMyPage,
      name: 'EnkoreMyPage',
      props: true,
    },
    {
      path: '/myPageFunding',
      component: FundingMyPage,
      name: 'FundingMyPage',
      props: true,
    },
    {
      path: '/myPageDonate',
      component: DonateMyPage,
      name: 'DonateMyPage',
      props: true,
    },
    {
      path: '/esgPage',
      component: EsgPage,
      name: 'EsgPage',
      props: true,
    },
    //민주추가 부분(시작)
    {
      path: '/projectmake',
      component: ProjectMake,
      name: 'ProjectMake',
      props: true,
    },
    {
      path: '/myPageProject',
      component: ProjectMyPage,
      name: 'ProjectMyPage',
      props: true,
    },
    //민주추가 부분(끝)
  ],
});
