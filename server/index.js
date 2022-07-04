const express = require("express");
const app = express();
const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
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

app.listen(5000, () => {
  console.log("Port 5000 is up");
});
