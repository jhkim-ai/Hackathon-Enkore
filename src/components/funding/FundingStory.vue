<template>
  <div>
    <div class="funding_story_img_div">
      <v-img
        :src="`https://picsum.photos/500/300?image=20`"
        :lazy-src="`https://picsum.photos/10/6?image=20`"
        aspect-ratio="1"
        cover
        class="grey lighten-4 rounded-xl funding_story_img"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="black lighten-5"
              class="progress_position"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
    <div>
        hi
    </div>
  </div>
</template>

<script>
export default {
    
    data() {
        return {

    
        }
    },
}
</script>

<style scoped>
 .progress_position {
    margin-top: 32%;
 }
 .funding_story_img_div {
    width: 100%;
    height: 500px;
 }
 .funding_story_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
</style>
