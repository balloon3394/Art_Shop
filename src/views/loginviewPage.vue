<template>
  <div>
    <form v-on:submit.prevent="login" class="loginform">
      <h1>Login</h1>
      <p>USERNAME: <input type="text" required v-model="currentusername" /></p>
      <p>PASSWORD: <input type="password" required v-model="currentpassword" /></p>
      <button class="b-login" type="submit">LOGIN</button>
    </form>
    <p v-if="status === 'success'" id="correct">login successful!</p>
    <p v-if="status === 'error'" id="incorrect">username or password incorrect!</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentusername: '',
      currentpassword: '',
      status: ''
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    login () {
      const user = this.getUsers.find((u) => u.username === this.currentusername)

      if (!user || user.password !== this.currentpassword) {
        this.status = 'error'
      } else {
        this.status = 'success'
        sessionStorage.setItem('user', JSON.stringify({ username: user.username, status: user.status }))

        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
#correct {
  color: chartreuse;
}

#incorrect {
  color: red;
}
</style>
