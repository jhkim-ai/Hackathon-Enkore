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

export default {
  components: { 
    EsgNewsList, 
    StockList,
    HomeCarousel,
  },
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