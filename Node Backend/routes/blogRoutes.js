const express = require("express");

const { home, getBlogs } = require("..//controllers/blogController");

const router = express.Router();

router.get("/", home).get("/blogs", getBlogs);

module.exports = router;
