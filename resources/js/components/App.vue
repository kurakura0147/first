<template>
  <div>
    <Nav />
    <main>
      <div class="container">
        <div class="col-md-14">
          <div class="card">
          <RouterView />
          </div>
        </div>
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