const mongoose = require("mongoose");

const HeroesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  goodMatchUp: {
    type: [String],
    required: false,
  },
  badMatchUp: {
    type: [String],
    required: false,
  },
});

const HeroModel = mongoose.model("heroes", HeroesSchema, "heroes");

module.exports = HeroModel;
