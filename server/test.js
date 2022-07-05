const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");

//To RUN: Right-click, run code.

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

function findHeroId(name) {
  let heroName = name;

  HeroModel.findOne({ name: heroName }, (err, result) => {
    console.log(result.id);
  });
}

//Find id by Name
