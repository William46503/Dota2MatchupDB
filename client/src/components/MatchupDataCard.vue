<template>
  <div class="hero-container__matchup__detail">
    <img src="https://placehold.jp/150x100.png" :alt="matchupType + ' matchup image'" />
    <!-- NEED TO FIX THESE -->

    <ul>
      <li>OpponentID : {{ this.matchupDataObject.opponentID }}</li>
      <li>Gameplayed: {{ this.matchupDataObject.gamesPlayed }}</li>
      <li>Wins: {{ this.matchupDataObject.wins }}</li>
      <li>Win Rate: {{ this.matchupDataObject.winRatio }}%</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      heroList: [],
    };
  },
  props: {
    matchupType: {
      type: String,
      required: true,
    },
    matchupDataObject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    logStuff() {
      console.log();
    },
    async getHeroData() {
      try {
        // JSON responses are automatically parsed.

        const url = "http://localhost:5000/hero-index";
        await axios
          .get(url)
          .then((response) => {
            if (response.status === 200) {
              console.log(`response status is: ${response.status}`);
            }

            var unsortedList = response.data;
            this.heroList = unsortedList.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });
            console.log(this.heroList);
          })
          .catch((error) => {
            console.log(error);
          });

        // console.log(`"hero data:" ${this.heroList}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.logStuff(), this.getHeroData();
  },
};
</script>

<style lang="scss" scoped>
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
      transform: translateX(120px);
      opacity: 1;
    }
  }
}
</style>
