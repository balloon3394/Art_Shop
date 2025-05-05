<template>
    <div class="register">
      <div>
        <form v-on:submit.prevent="register" class="register">
            <h1>REGISTER</h1>
            <input v-model="username" type="text" placeholder="Username" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <input v-model="confirmpassword" type="password" placeholder="Confirm password" required>
            <button type="submit">register</button>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      confirmpassword: '',
      status: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters({
      getUsers: 'getUsers'
    })
  },
  methods: {
    ...mapActions({
      registerUser: 'registerUser'
    }),

    register () {
      if (!this.username || !this.password || !this.confirmpassword) {
        this.status = 'error'
        this.message = 'All fields are required!'
        return
      }

      if (this.password !== this.confirmpassword) {
        this.status = 'error'
        this.message = 'Passwords do not match!'
        return
      }

      const userExists = this.getUsers.some((user) => user.username === this.username)

      if (userExists) {
        this.status = 'error'
        this.message = 'this username is already used!'
        return
      }

      const newuser = {
        id: this.getUsers.length + 1,
        username: this.username,
        password: this.password,
        status: 'cus'
      }
      this.registerUser(newuser)

      this.status = 'success'
      this.message = 'Register complete'
      this.username = ''
      this.password = ''
      this.confirmpassword = ''
    }
  }
}
</script>
