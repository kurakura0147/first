<template>
  <div>
    <Nav />
    <main>
      <div class="container">
      <RouterView />
      <router-link to="/">back</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from './Navbar.vue'
import Menu from './Menu.vue'

export default {
  components: {
    Nav,
    Menu,
  }
}
</script>