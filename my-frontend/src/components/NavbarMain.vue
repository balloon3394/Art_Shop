<template>
    <nav class="navbar">
        <div class="navbar-left">
            <div class="navbar-start">
                <router-link class="navbar-item" to="#">
                    Art
                </router-link>
                <router-link class="navbar-item" to="#">
                    Store
                </router-link>
                <router-link class="navbar-item" to="#">
                    Search
                </router-link>
                <router-link class="navbar-item" to="/About">
                    About
                </router-link>
            </div>
        </div>
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../assets/logo.png" alt="ArtShop" style="width: 50px;">
            </router-link>
        </div>
        <div class="navbar-right">
            <div class="navbar-end">
                <router-link class="navbar-item" to="#">
                    Cart
                </router-link>
                <router-link class="navbar-item" to="#">
                    Money
                </router-link>
                <router-link class="navbar-item" to="#">
                    Login
                </router-link>
                <router-link class="navbar-item" to="#">
                    Register
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarMain',

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
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
</style>
