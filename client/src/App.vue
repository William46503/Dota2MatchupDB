<template>
  <div id="app">
    <router-view />
  </div>
</template>

// --------------------------------------
<script></script>

// --------------------------------------

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

body {
  margin: 0;
}

#app {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;

  font-family: "Rubik", sans-serif;
  body,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px !important;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}
</style>
