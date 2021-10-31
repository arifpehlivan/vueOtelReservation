<template>
  <div class="home">
    <Navbar/>
    <Carousel/>
    <Room/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Room from '@/components/Room.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Room
  }
}
</script>
