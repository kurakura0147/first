<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm" style="margin-bottom:20px;">
        <div class="container">
            <a class="navbar-brand" href="/">
                Laravel
            </a>
              <button v-if="isLogin" @click="logout" class="button button--link">Logout</button>
              <RouterLink v-else class="nav-item nav-link nav-item" to="/">
                Login / Register
              </RouterLink>
        </div>

    </nav>
</template>


<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  },
  computed: {
    isLogin (){
      return this.$store.getters['auth/check']
    },
    username (){
      return this.$store.getters['auth/username']
    }
  },
}
</script>