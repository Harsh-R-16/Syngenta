const express = require("express");

const { home, getBooks } = require("..//controllers/libraryController");

const router = express.Router();

router.get("/", home).get("/books", getBooks);

module.exports = router;
