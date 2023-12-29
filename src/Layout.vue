
<template>
    <div class="layoutdiv">
      <AppBar></AppBar>
      <CarouselComponent></CarouselComponent>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>

import AppBar from '../src/components/AppBar.vue'
import CarouselComponent from '../src/components/CarouselBody'
import FooterComponent from '../src/components/FooterBody.vue'

  export default {
    name: 'LayoutVue',
    components: {
      AppBar,
      CarouselComponent, 
      FooterComponent, 
  }
  };
  </script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
.layoutdiv {
  font-family: 'Quicksand', sans-serif;
}
</style>