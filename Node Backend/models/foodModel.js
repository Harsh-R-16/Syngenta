const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Food name is required."],
    trim: true,
  },

  restaurant: {
    type: String,
    required: [true, "Restaurant name is required."],
    trim: true,
  },

  location: {
    type: String,
    required: [true, "Food location is required."],
    trim: true,
  },

  category: {
    type: String,
    required: [true, "Food category is required."],
    trim: true,
  },

  img: {
    type: String,
    default: "https://source.unsplash.com/random/?food",
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;
