<template>
  <div class="background">
    <div class="container">
      <div class="card">
        <form v-on:submit.prevent="login" class="loginform">
          <img id="logo" :src="require('/src/assets/logo.png')" alt="ArtShop" style="width: 80px" />
          <p  id="username-field"><input type="text" required v-model="currentusername" placeholder="Username"/></p>
          <p  id="password-field"><input type="password" required v-model="currentpassword" placeholder="Password"/></p>
          <p class="forgot-password"><a @click.prevent="forgotPassword" href="#">Forgot Password?</a></p>
          <button class="b-login" type="submit">Sign in</button>
        </form>
        <p v-if="status === 'success'" id="correct">login successful!</p>
        <p v-if="status === 'error'" id="incorrect">username or password incorrect!</p>
        <p>Not a member? <a @click.prevent="createaccount" href="#">Create Account</a></p>
      </div>
    </div>
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
    },
    forgotPassword () {
      alert('ทำไมจำไม่ได้')
    },
    createaccount () {
      alert('แล้วทำไมไม่สมัครก่อนละ')
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#correct {
  color: chartreuse;
}

#incorrect {
  color: red;
}

.card {
  text-align: center;
  justify-content: space-between;
  border: 2px groove rgb(255, 255, 255);
  border-radius: 20px;
  width: 400px;
  height: 600px;
  background-color: rgb(238, 245, 245);
}

.loginform {
  padding: 30px;
  margin-top: 20px;
}

#username-field{
  margin-top: 60px;
}

#password-field {
  margin-top: 20px;
}

input {
  width: 100%;
  height: 40px;
  cursor: text;
}

button {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border: white;
  border-radius: 20px;
  color: rgb(248, 250, 251);
  background-color: rgb(120, 201, 200);
  cursor: pointer;
}

.background {
  height: 100vh; /* ให้สูงเต็มจอ */
  display: flex;
  justify-content: center;
  align-items: center;
  /* ✅ พื้นหลังเฉพาะหน้าล็อกอิน */
  background-image: url('/src/assets/bg-art1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

a {
  cursor: pointer;
}
</style>
