const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blog title is required."],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "Blog description is required."],
    trim: true,
  },

  labels: [
    {
      type: "String",
      default: "Recommended",
    },
  ],

  author: {
    type: String,
    required: [true, "Author name is required."],
    trim: true,
  },

  likes: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
