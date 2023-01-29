<template>
  <div>
		<div v-for="(item, idx) in fetchedTest" :key="idx">
      id: {{item.id}} <br>
      title: {{item.title}} <br>
      points: {{item.points}} <br>
      <hr>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    }
  },
  created() {
		this.$store.dispatch('FETCH_TEST');
  },
  computed: {
    ...mapGetters([
      'fetchedTest',
    ]),
  }
}
</script>

<style>

</style>
