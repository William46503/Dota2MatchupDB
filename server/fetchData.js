const axios = require("axios");
const mongoose = require("mongoose");
const HeroModel = require("./models/Heroes");

mongoose.connect(
  "mongodb+srv://nextlevelpenguin:MongoLlw46503@cluster0.khg9ypc.mongodb.net/Dota2App?retryWrites=true&w=majority"
);

//... <clustername>.khg9ypc.mongodb.net/<desired database/project name>?retryWrites=true&w=majority"



const updatedHeroList = [];

axios
  .get("https://api.opendota.com/api/heroes")
  .then(async function (response) {
    const fetchedHeroList = response.data;
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

    updatedHeroList.forEach(async (item) => {
        console.log(item);
        const newHero = new HeroModel(item);
        await newHero.save();
      });

    // HeroModel.insertMany(updatedHeroList, function(err) {
    //     console.log(err);
    // });
    console.log("Successfully fetched data from OpenDota");
  });
