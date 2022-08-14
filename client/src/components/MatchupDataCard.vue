<template>
  <div class="hero-container__matchup__detail">
    <img src="https://placehold.jp/150x100.png" :alt="{ matchType } + image" />
    <!-- NEED TO FIX THESE -->
    <ul>
      <li>Gameplayed: 1000</li>
      <li>Wins: 500</li>
      <li>Win Rate: 50%</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["matupData", "imgName", "matchupType"],
  data() {
    return {
      matchType: this.matchType,
    };
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

//
<div class="hero-container__matchup__detail">
//               <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
//               <ul>
//                 <li>Gameplayed: 1000</li>
//                 <li>Wins: 500</li>
//                 <li>Win Rate: 50%</li>
//               </ul>
//             </div>
//
<div class="hero-container__matchup__detail">
//               <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
//               <ul>
//                 <li>Gameplayed</li>
//                 <li>Wins</li>
//                 <li>Win Rate</li>
//               </ul>
//             </div>
//
<div class="hero-container__matchup__detail">
//               <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
//               <ul>
//                 <li>Gameplayed</li>
//                 <li>Wins</li>
//                 <li>Win Rate</li>
//               </ul>
//             </div>
//
<div class="hero-container__matchup__detail">
//               <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
//               <ul>
//                 <li>Gameplayed</li>
//                 <li>Wins</li>
//                 <li>Win Rate</li>
//               </ul>
//             </div>
//
<div class="hero-container__matchup__detail">
//               <img src="https://placehold.jp/150x100.png" alt="good matchup image" />
//               <ul>
//                 <li>Gameplayed</li>
//                 <li>Wins</li>
//                 <li>Win Rate</li>
//               </ul>
//             </div>
