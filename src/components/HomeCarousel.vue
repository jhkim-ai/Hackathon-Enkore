<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('../assets/aespa_karina4.jpg'),
        },
        {
          src: require('../assets/aespa_karina3.jpg'),
        },
        {
          src: require('../assets/aespa_karina2.jpg'),
        },
        {
          src: require('../assets/aespa_karina.jpg'),
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>

<style></style>
