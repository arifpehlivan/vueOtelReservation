<template>
  <div class="home">
    <Navbar/>
    <Carousel/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel
  }
}
</script>
