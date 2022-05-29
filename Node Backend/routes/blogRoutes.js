const express = require("express");

const {
  home,
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  popularBlogs,
  likeBlog,
} = require("..//controllers/blogController");

const router = express.Router();

router.route("/").get(home);

router.route("/blogs").get(getBlogs).post(createBlog);

router.route("/blogs/popular").get(popularBlogs);

router.route("/blogs/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);

router.route("/blogs/:id/like").get(likeBlog);

module.exports = router;
