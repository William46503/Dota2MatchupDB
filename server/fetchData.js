const axios = require("axios");
const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");

//To RUN: Right-click, run code.

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

//... <clustername>.khg9ypc.mongodb.net/<desired database/project name>?retryWrites=true&w=majority"

const updatedHeroList = [];

axios
  .get("https://api.opendota.com/api/heroes")
  .then(async function (response) {
    const fetchedHeroList = response.data; //Fetch newest data to update the herolist
    fetchedHeroList.forEach((item) => {
      updatedHeroList.push({
        id: item.id,
        name: item.localized_name,
        roles: item["roles"],
      });
    });
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(async function () {
    //After succesfully fetching and proganized the listed of newest hero list, save to mongoose cloud DB
    updatedHeroList.forEach(async (item) => {
      console.log(item);
      const newHero = new HeroModel(item);
      await newHero.save();
    });

    console.log("Successfully fetched data from OpenDota");
  });
