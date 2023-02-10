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
          src: require('../assets/main-image-1.png'),
        },
        {
          src: require('../assets/main-image-2.png'),
        },
        {
          src: require('../assets/main-image-3.png'),
        },
        {
          src: require('../assets/main-image-1.png'),
        },
        {
          src: require('../assets/main-image-2.png'),
        },
      ],
    };
  },
};
</script>

<style></style>
