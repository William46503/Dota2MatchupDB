<template>
  <div class="wrapper">
    <section class="container--head">
      <h1 class="container--head__heroName">{{ this.heroName }}</h1>
      <!-- <h3>This is body of Hero ID:{{ this.heroId }}</h3> -->
      <section class="hero--container__generalInfo">
        <h5 class="hero--container__generalInfo--title">Roles:</h5>

        <ul>
          <li v-for="role in heroRoles" v-bind:key="role">{{ role }}</li>
        </ul>
      </section>
    </section>
    <section class="container--body">
      <article class="hero--container">
        <section class="hero--container__matchup-good">
          <h5 class="hero--container__columnTitle">Good Win Rate Against</h5>
          <div class="hero-container__matchup--container">
            <matchup-card
              v-for="matchData in this.goodMatchupData"
              v-bind:key="matchData._id"
              :matchupDataObject="matchData"
              :matchupType="'good'"
            />
          </div>
        </section>
        <section class="hero--container__matchup-bad">
          <h5 class="hero--container__columnTitle">Bad Win Rate Against</h5>
          <div class="hero-container__matchup--container">
            <matchup-card
              v-for="matchData in this.badMatchupData"
              v-bind:key="matchData._id"
              :matchupDataObject="matchData"
              :matchupType="'bad'"
            />
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
import MatchupCard from "../components/MatchupDataCard.vue";
import axios from "axios";
import { ref } from "vue";

export default {
  components: { MatchupCard },
  data() {
    return {
      heroId: this.$route.query.hero_id,
      heroName: this.$route.params.heroName,
      heroRoles: this.$route.query.hero_roles,
      matchupData: ref([]),
      goodMatchupData: ref([]),
      badMatchupData: ref([]),
    };
  },
  methods: {
    async getHeroMatchData(Id) {
      try {
        const url = "http://localhost:5000/hero-data/search";
        await axios
          .get(url, { params: { heroId: Id } })
          .then((response) => {
            if (response.status === 200) {
              console.log(`response status is: ${response.status}`);
            }
            this.matchupData = JSON.parse(JSON.stringify(response.data));
          })
          .then(() => {
            this.goodMatchupData = this.matchupData.slice(0, 7);
            this.badMatchupData = this.matchupData
              .slice(this.matchupData.length - 7, this.matchupData.length)
              .reverse();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    parseData(inputData) {
      return JSON.parse(JSON.stringify(inputData));
    },
  },
  created() {
    this.getHeroMatchData(this.heroId);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: whitesmoke;
  min-height: 100vh; /* minus the height of the footer */
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

    // box-shadow: 2px 2px 5px rgba(49, 48, 80, 1);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 20px;
    padding: 10px;
    justify-content: space-evenly;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

    h5 {
      font-size: 18px;
    }

    .hero-container__matchup--container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
