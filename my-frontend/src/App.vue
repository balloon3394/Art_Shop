<template>
  <nav v-if="!isAuthPage" class="navbar">
    <div class="navbar-left">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/cats"> Art </router-link>
        <router-link class="navbar-item" to="/dogs"> Store </router-link>
        <router-link class="navbar-item" to="#"> Search </router-link>
        <p v-if="admin" class="adminoption">
          <router-link class="navbar-item" to="/Practice"> Practice </router-link>
        </p>
      </div>
    </div>
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="./assets/logo.png" alt="ArtShop" style="width: 50px" />
      </router-link>
    </div>
    <div class="navbar-right">
      <div class="navbar-end">
        <div class="end-munu">
          <router-link class="navbar-item" to="#"> Cart </router-link>
          <router-link class="navbar-item" to="#"> Money </router-link>
        </div>
        <div class="iconuser">
          <div v-if="user" >
            <h4 class="nameuser">{{ user.username }}</h4>
            <button v-on:click="logout" >Logout</button>
          </div>
          <div v-else >
            <router-link class="navbar-item" to="/login"> Login </router-link>
            <router-link class="navbar-item" to="/register"> Register </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data () {
    return {
      user: null,
      admin: false
    }
  },
  mounted () {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      this.user = JSON.parse(storedUser)

      if (this.user.status === 'admin') {
        this.admin = true
      }
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('user')
      this.user = null
    }
  },
  computed: {
    isAuthPage () {
      return this.$route.path === '/login' || this.$route.path === '/register'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 20px;
}

.navbar-item {
  color: white;
  margin: 1rem;
  text-decoration: none;
}

.navbar-item:hover {
  text-decoration: underline;
}

.navbar-left,
.navbar-right {
  display: flex;
}

.navbar-brand {
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.navbar-end,.navbar-start {
  display: flex;
  margin: 10px;
}

.iconuser {
  margin-top: 17px;
}

.adminoption{
  margin-top: 16px;
}

.nameuser{
  color: bisque;
}

.end-munu{
  margin-top: 17px;
  margin-right: 20px;
}
</style>
