const dotenv = require("dotenv");
require("dotenv").config();
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");
const { MatchupModel, MatchupDataModel } = require("./models/MatchupModel");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}"@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

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
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Port 5000 is up");
});
