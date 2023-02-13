<template>
  <div>
    <v-carousel
    :cycle="true"
    interval="2500">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        fade
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
          src: require('../assets/main-image-1.png'),
        },
        {
          src: require('../assets/main-image-2.png'),
        },
        {
          src: require('../assets/main-image-3.png'),
        },
        {
          src: require('../assets/main-image-4.png'),
        },
        {
          src: require('../assets/main-image-5.png'),
        },
      ],
    };
  },
};
</script>

<style></style>
