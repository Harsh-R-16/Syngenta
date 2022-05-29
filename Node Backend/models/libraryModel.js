const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required."],
    trim: true,
  },

  author: {
    type: String,
    required: [true, "Author name is required."],
    trim: true,
  },

  category: {
    type: String,
    required: [true, "Book category is required."],
    trim: true,
  },

  img: {
    type: String,
    default: "https://source.unsplash.com/random/?book",
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Library = mongoose.model("book", librarySchema);

module.exports = Library;
