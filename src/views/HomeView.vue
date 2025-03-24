<template>
  <div class="home">
    <header>
      <div class="content-header">
        <img
          src="../assets/text.png"
          alt="text"
          style="width: 600px; margin-left: 20px; margin-right: 80px"
        />
        <img src="../assets/text2.png" alt="paint" style="width: 600px" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

header{
  background-color: black;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
}
</style>
