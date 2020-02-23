<template>
  <div>
    <main>
    <div class="col-md-10 col-md-offset-1">
      <div class="card">
        <!-- カードタイトル -->
        <div class="card-header">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                @click="tab = 1"
              >Login</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="tab = 2"
              >Register</a>
            </li>
          </ul>
        </div>

        <!-- ログイン画面 -->
        <div class="card-body">
          <div class="form-group" v-show="tab === 1">
            <form  @submit.prevent="login">
              <div class="form-group row">
                <label for="LoginInputEmail">Login Mail</label>
                  <input type="text" class="form-control" id="LoginInputEmail" v-model="loginForm.email" placeholder="Enter email">
              </div>
              <div class="form-group row">
                <label for="LoginInputPassword">Password</label>
                  <input type="password" class="form-control" id="LoginInputPassword" v-model="loginForm.password" placeholder="Enter password">
              </div>
              <div class="form__button">
                <button type="submit" class="btn btn-primary">login</button>
              </div>
            </form>
          </div>

          <!-- 登録画面 -->
          <div class="form-group" v-show="tab === 2">
            <form @submit.prevent="register">
              <div class="form-group row">
                <label for="InputName">Name</label>
                <input type="text" class="form-control" id="InputName" v-model="registerForm.name" placeholder="Enter name">
              </div>
              <div class="form-group row">
                <label for="InputEmail">Email</label>
                <input type="text" class="form-control" id="InputEmail" v-model="registerForm.email" placeholder="Enter email">
              </div>
              <div class="form-group row">
                <label for="InputPassword">Password</label>
                <input type="password" class="form-control" id="InputPassword" v-model="registerForm.password" placeholder="Enter password">
              </div>
              <div class="form-group row">
                <label for="confirmPassword">Password (confirm)</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="registerForm.password_confirmation" placeholder="Enter password">
              </div>
              <div class="form__button">
                <button type="submit" class="btn btn-primary">register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register () {
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch('auth/register', this.registerForm)
      // トップページに移動する
      this.$router.push('/')
    },
    async login () {
      // authストアのloginアクションを呼び出す
      // await = 非同期アクション完了後、次に移行
      // dispatch = アクションの呼出.第１引数=アクション名
      await this.$store.dispatch('auth/login', this.loginForm)
      // トップページに移動する
      this.$router.push('/')
    },
  },
}
</script>