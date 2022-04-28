<template>
  <div id="app">
    <header>
      <h1><strong>DOTA2</strong>Database</h1>
    </header>
    <form class="search-box">
      <input
        type="search"
        class="search-field"
        placeholder="Search Dota2 Info"
        required
      />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

#app {
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
  h6,
  p,
  div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  header {
    padding: 50px 0px;
    h1 {
      font-size: 42px;
      color: rgb(117, 0, 0);
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      cursor: default;
      z-index: 100;
      strong {
        color: #313131;
      }
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    font-family: "Rubik", sans-serif;

    .search-field {
      border: none;
      outline: none;
      width: 25%;
      font-size: 20px;
      background: #f1f1f1;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
      border-radius: 8px;
      padding: 10px;

      transition: all 0.4s;

      &:focus,
      &:valid {
        background: #313131;
        color: #fff;
        width: 50%;
      }
    }
  }
}
</style>
