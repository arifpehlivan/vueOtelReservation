<template>
  <div>
     <b-carousel 
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000;"
        fade
        indicators>
        
     <b-carousel-slide
        id="imageca"
        :img-src="require('../assets/carousel1.jpg')"
     >
     </b-carousel-slide>

     <b-carousel-slide
        id="imageca"
        :img-src="require('../assets/carousel2.jpg')"
     >
     </b-carousel-slide>

     <b-carousel-slide
        id="imageca"
        :img-src="require('../assets/carousel3.jpg')">
     </b-carousel-slide>

     </b-carousel> 
  </div>
</template>

<script>
export default {
    name:'Carousel'
}
</script>

<style>
#imageca{
    height: 85vh!important;
}
</style>