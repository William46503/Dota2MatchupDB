const axios = require("axios");
const mongoose = require("mongoose");

const HeroModel = require("./models/Heroes");

var heroListLength;
let matchupData = [];

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

// function getHeroList() {
//   HeroModel.find((err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return result;
//     }
//   });
// }

// let heroListLength = getHeroList().length;

// HeroModel.find((err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let heroListLength = result.length;
//     result.forEach((element) => {
//       let newHeroContainer = new HeroMatchModel({
//         heroId: element.id,
//         name: element.name,
//         heroMatchState: axios
//           .get(`https://api.opendota.com/api/heroes/${element.id}/matchups`)
//           .then((response) => {
//             matchupData = response.data;
//           })
//           .catch((error) => {
//             console.log(error.response);
//           })
//           .then(() => {
//             let newMatchData = new HeroMatchModel({
//               opponentId: matchupData.hero_id,
//               gamesPlayed: matchupData.games_played,
//               wins: matchupData.wins,
//               // winRatio: matchUpData.wins / matchUpData.games_played,
//             });
//           }),
//       });

//       newHeroContainer.save();
//     });
//   }
// });
