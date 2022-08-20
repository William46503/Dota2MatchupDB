require("dotenv").config({ path: "server/.env" });
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");
const { MatchupModel, MatchupDataModel } = require("./models/MatchupModel");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority`;

// const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-6mwyu9g-shard-00-00.khg9ypc.mongodb.net:27017,ac-6mwyu9g-shard-00-01.khg9ypc.mongodb.net:27017,ac-6mwyu9g-shard-00-02.khg9ypc.mongodb.net:27017/?ssl=true&replicaSet=atlas-najo4g-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(uri).catch((err) => console.log(err.reason));

//Get all hero index
app.get("/hero-index", (req, res) => {
  HeroModel.find((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//search for matchup data of a certain hero heroId : NUMBER
app.get("/hero-data/search", (req, res) => {
  let searchID = req.query.heroId;
  MatchupModel.find({ heroId: searchID }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      //return an array of softed matchplayed data
      res.json(
        result[0].matchupData.sort(
          (firstItem, secondItem) => secondItem.winRatio - firstItem.winRatio
        )
      );
    }
  });
});

app.listen(5000, () => {
  console.log("Port 5000 is up");
});
