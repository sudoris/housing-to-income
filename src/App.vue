<template>
  <div id="app">
    <GMap v-if="initGmap" />
  </div>
</template>

<script>
import initGmap from "./lib/initGmap"

import GMap from "./components/GMap.vue"

export default {
  name: "app",
  components: {
    GMap
  },
  data() {
    return {
      initGmap: false
    };
  },
  async mounted() {
    await initGmap()
      .then(res => {
        this.initGmap = true
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>

<style>
</style>
