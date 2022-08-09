<template>
  <div class="wrapper">
    <section class="container--head">
      <h1 class="container--head__heroName">{{ this.heroName }}</h1>
      <h3>This is body of Hero ID:{{ this.heroId }}</h3>
    </section>
    <section class="container--body">
      <article class="hero--container">
        <section class="hero--container__generalInfo">
          <h5 class="hero--container__columnTitle">Roles</h5>
          <ul>
            <li>Carry</li>
            <li>Nuke</li>
            <li>Asssasin</li>
          </ul>
        </section>
        <section class="hero--container__matchup-good">
          <h5 class="hero--container__columnTitle">Good Win Rate Against</h5>
          <div class="hero-container__matchup--container">
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="hero--container__matchup-bad">
          <h5 class="hero--container__columnTitle">Bad Win Rate Against</h5>
          <div class="hero-container__matchup--container">
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
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
body {
  margin: 0;
  padding: 0;
}
.wrapper {
  background: rgba(55, 54, 96, 1);
  color: whitesmoke;
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
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

  .container--head {
    text-align: center;
    padding: 20px;
  }

  .hero--container {
    display: flex;
    width: 80%;
    margin: 0 auto;
    background: rgba(55, 54, 96, 1);
    // box-shadow: 2px 2px 5px rgba(49, 48, 80, 1);
    border: 3px solid rgba(57, 56, 100, 1);
    border-radius: 20px;
    padding: 25px;
    justify-content: space-evenly;
  }
}
</style>
