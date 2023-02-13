<template>
  <div>
    <div>
      <home-carousel></home-carousel>
    </div>
    <div class="list-outer-view">
      <div class="list-inner-view">
        <esg-news-list></esg-news-list>
      </div>
      <div class="list-inner-view">
        <stock-list></stock-list>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '../components/HomeCarousel.vue'
import EsgNewsList from '../components/EsgNewsList.vue'
import StockList from '../components/StockList.vue'
import{ mapActions } from 'vuex';

export default {
  components: { 
    EsgNewsList, 
    StockList,
    HomeCarousel,
  },
  mounted(){
    console.log("... LOAD INIT DATA ... ");
    this.initD();
    this.initB();
    this.initF();
  },
  methods:{
        ...mapActions({
            initD: 'INIT_DONATEDB',
            initF: 'INIT_FUNDING',
            initB: 'INIT_BOARDDB' // this.init()을 this.$store.dispatch('dbInit')에 매핑
        }),
    }
}
</script>

<style scoped>
  .list-outer-view {
    display: flex;
    margin: auto;
    justify-content: center;
  }
  .list-inner-view {
    margin: 20px 30px;
  }
</style>