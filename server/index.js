const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");
const { MatchupModel, MatchupDataModel } = require("./models/MatchupModel");

mongoose.connect(
  "mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

app.get("/hero-index", (req, res) => {
  HeroModel.find((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// app.get("/hero-data/:heroId", (req, res) => {
//   res.send(req.params);
//   MatchupModel.find({ heroId: req.params["heroId"] }, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

app.listen(5000, () => {
  console.log("Port 5000 is up");
});
