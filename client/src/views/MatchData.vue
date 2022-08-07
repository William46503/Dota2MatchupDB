<template>
  <div class="wrapper">
    <section class="container--head">
      <h1 class="container--head__heroName">{{ this.heroName }}</h1>
    </section>
    <section class="container--body">
      <p>This is body</p>
      <p>this {{ this.heroId }}</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      heroId: this.$route.query.hero_id,
      heroName: this.$route.params.heroName,
      gameplayedData: [],
    };
  },
  methods: {
    async getHeroMatchData(heroId) {
      try {
        const url = `"http://localhost:5000/"${heroId}`;
        await axios.get(url);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
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

  text-align: center;
}
</style>
