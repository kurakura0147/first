<template>
  <div>
    <Nav />
    <main>
      <div class="container">
      <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import Nav from './Navbar.vue'

export default {
  components: {
    Nav,
  }
}
</script>