import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FundingView from '../views/FundingView.vue';
import DonateView from '../views/DonateView.vue';
import DonateDetail from '../views/DonateDetail.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
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
      path: '/donate',
      component: DonateView,
    },
    {
      path: '/donate/detail',
      component: DonateDetail,
      name: 'DonateDetail',
      props: true,
    },
  ],
});
