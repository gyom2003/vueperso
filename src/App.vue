<template>
  <div id="class">
    <AppBar></AppBar>
    <CarouselComponent></CarouselComponent>
    <FooterComponent></FooterComponent>

  </div>
  <!--TODO FRONT: partie 2 body + changer font text + pb icons  -->
</template> 


<script >
//import component 
import AppBar from '../src/components/AppBar.vue'
import CarouselComponent from '../src/components/CarouselBody'
import FooterComponent from '../src/components/FooterBody.vue'

export default {
  components: {
    AppBar,
    CarouselComponent, 
    FooterComponent, 

  }
}
</script>

<style >
/* body {
  font-family: 'Poppins', sans-serif;
} */

</style>
