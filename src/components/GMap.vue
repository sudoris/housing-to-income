<template>
  <div>
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'GMap',
  data() {
    return {
      lat: 25,
      lng: 121
    }
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    this.renderMap()
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
