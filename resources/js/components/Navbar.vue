<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm" style="margin-bottom:20px;">
        <div class="container">
            <a class="navbar-brand" href="/">
                Laravel
            </a>
            <ul class="navbar-nav ml-auto">
                <RouterLink class="button button--link" to="/login">
                    Login / Register
                  </RouterLink>
            </ul>
        </div>
                            <button class="button button--link" @click="logout">Logout</button>

    </nav>
</template>


<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')

      this.$router.push('/login')
    }
  }
}
</script>