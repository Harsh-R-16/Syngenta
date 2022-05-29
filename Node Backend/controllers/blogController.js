const Blog = require("../models/blogModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Blogs Api.",
  });
};

exports.getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      results: allBlogs.length,
      data: allBlogs,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching blogs",
      message: err,
    });
  }
};
