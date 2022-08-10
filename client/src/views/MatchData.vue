<template>
  <div class="wrapper">
    <section class="container--head">
      <h1 class="container--head__heroName">{{ this.heroName }}</h1>
      <!-- <h3>This is body of Hero ID:{{ this.heroId }}</h3> -->
      <section class="hero--container__generalInfo">
        <h5 class="hero--container__generalInfo--title">Roles:</h5>
        <ul>
          <li>Carry</li>
          <li>Nuke</li>
          <li>Asssasin</li>
        </ul>
      </section>
    </section>
    <section class="container--body">
      <article class="hero--container">
        <section class="hero--container__matchup-good">
          <h5 class="hero--container__columnTitle">Good Win Rate Against</h5>
          <div class="hero-container__matchup--container">
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
              <ul>
                <li>Gameplayed: 1000</li>
                <li>Wins: 500</li>
                <li>Win Rate: 50%</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
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
              <img src="https://placehold.jp/150x100.png" alt="bad matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="bad matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="bad matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="bad matchup image" />
              <ul>
                <li>Gameplayed</li>
                <li>Wins</li>
                <li>Win Rate</li>
              </ul>
            </div>
            <div class="hero-container__matchup__detail">
              <img src="https://placehold.jp/150x100.png" alt="bad matchup image" />
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
.wrapper {
  background: rgba(55, 54, 96, 1);
  min-height: 100vh; /* minus the height of the footer */
  color: whitesmoke;
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

  .container--head {
    text-align: center;
    padding-top: 20px;
    .hero--container__generalInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;

      .hero--container__generalInfo--title {
        font-size: 16px;
        padding-right: 10px;
      }
      ul {
        padding: 10;

        li {
          float: left;
          padding-left: 6px !important;
        }
      }
    }
  }

  .hero--container {
    display: flex;
    width: 60%;
    margin: 0px auto;
    background: rgba(55, 54, 96, 1);
    // box-shadow: 2px 2px 5px rgba(49, 48, 80, 1);
    border: 3px solid rgba(57, 56, 100, 1);
    border-radius: 20px;
    padding: 10px;
    justify-content: space-evenly;
    box-shadow: 3px 3px 10px rgb(13, 13, 19, 0.3);

    h5 {
      font-size: 18px;
    }

    .hero-container__matchup--container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .hero-container__matchup__detail {
        padding-top: 10px;
        position: relative;

        img {
          transition: all 0.5s ease-out;
        }
        ul {
          position: absolute;
          top: 45px;
          left: 15px;
          font-size: 14px;
          transition: all 0.5s ease-out;
          opacity: 0;
        }

        &:hover {
          img {
            transform: translateX(-20px);
          }
          ul {
            transform: translateX(130px);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
