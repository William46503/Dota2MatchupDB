const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nextlevelpenguin:MongoLlw46503@Dota2App.khg9ypc.mongodb.net/?retryWrites=true&w=majority");

app.post("/createHero",  (req, res) => {
    
});

app.listen(5000, ()=>{
    console.log('Port 5000 is up');
})