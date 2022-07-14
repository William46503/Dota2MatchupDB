const axios = require("axios");
const mongoose = require("mongoose");
const MatchupModel = require("./models/MatchupModel");
const HeroModel = require("./models/Heroes");

var heroListLength;
var matchupDataArray = [];

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

HeroModel.find((err, result) => {
  if (err) {
    console.log(err);
  } else {
    result.forEach((element) => {
      // console.log(element.id);

      if (element.id < 2) {
        axios
          .get(`https://api.opendota.com/api/heroes/${element.id}/matchups`)
          .then((response) => {
            console.log(response.status);

            matchupDataArray = response.data.map((matchup) => {
              matchup.hero_id;
            });

            const newMatchData = new MatchupModel({
              heroId: element.id,
              matchupData: matchupDataArray,
            });

            newMatchData.save((err, data) => {
              if (err) {
                console.log(err.message);
              } else {
                console.log(data);
              }
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  }
});

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
