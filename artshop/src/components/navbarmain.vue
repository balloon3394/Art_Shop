<template>
    <nav class="navbar">
        <div class="navbar-left">
            <div class="navbar-start">
                <a class="navbar-item" href="/about">
                    Art
                </a>
                <a class="navbar-item" href="/shop">
                    Store
                </a>
                <a class="navbar-item" href="/contact">
                    Search
                </a>
            </div>
        </div>
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/logo.png" alt="ArtShop" style="width: 50px;">
            </a>
        </div>
        <div class="navbar-right">
            <div class="navbar-end">
                <a class="navbar-item" href="/cart">
                    Cart
                </a>
                <a class="navbar-item" href="/money">
                    Money
                </a>
                <a class="navbar-item" href="/login">
                    Login
                </a>
                <a class="navbar-item" href="/register">
                    Register
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarMain'
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