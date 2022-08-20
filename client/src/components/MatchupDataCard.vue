<template>
  <div class="hero-container__matchup__detail">
    <img
      :src="getHeroImage(this.matchupOpponentName)"
      :alt="this.matchupType + ' matchup image'"
    />

    <ul>
      <li>Hero: {{ this.matchupOpponentName }}</li>
      <li>Gameplayed: {{ this.matchupDataObject.gamesPlayed }}</li>
      <li>Wins: {{ this.matchupDataObject.wins }}</li>
      <li>Win Rate: {{ this.matchupDataObject.winRatio }}%</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroList: [],
      opponentName: "Default",
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
    matchupOpponentName: {
      type: String,
      required: true,
    },
  },
  methods: {
    logStuff() {},

    getHeroImage(heroName) {
      //convert hero.name to lowercase to match name of the respective png
      var imageName = heroName.toLowerCase().replace(/[\s-]/g, "");
      var imageURL = `/img/HeroImages/${imageName}.png`;

      return imageURL;
    },
  },
  created() {
    this.logStuff();
  },
};
</script>

<style lang="scss" scoped>
.hero-container__matchup__detail {
  padding-top: 10px;
  position: relative;

  img {
    width: 80%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease-out;
  }
  ul {
    position: absolute;
    top: 25%;
    left: 15px;
    font-size: 14px;
    transition: all 0.6s ease-out;
    opacity: 0;
    cursor: default;
  }

  &:hover {
    img {
      transform: scale(0.9) translateX(-20px);
    }
    ul {
      transform: translateX(180px);
      opacity: 1;
    }
  }
}
</style>
