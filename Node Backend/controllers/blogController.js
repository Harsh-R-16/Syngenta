const Blog = require("../models/blogModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Blogs Api.",
  });
};

exports.getBlogs = async (req, res) => {
  try {
    const { title, author } = req.query;
    const regex = [new RegExp(title, "i"), new RegExp(author, "i")];
    let allBlogs;
    if (title || author) {
      allBlogs = await Blog.find({
        title: { $regex: regex[0] },
        author: { $regex: regex[1] },
      });
    } else {
      allBlogs = await Blog.find();
    }
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

exports.getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching blog",
      message: err,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in creating blog",
      message: err,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in updating blog",
      message: err,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in deleting blog",
      message: err,
    });
  }
};

exports.popularBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({ likes: { $gt: 0 } });
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      results: allBlogs.length,
      data: allBlogs.sort((a, b) => b.likes - a.likes),
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching popular blogs",
      message: err,
    });
  }
};

exports.likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    blog.likes++;
    blog.save();
    res.status(200).json({
      message: "Success!!!",
      information: "Blog Api",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in updating likes of blog",
      message: err,
    });
  }
};
