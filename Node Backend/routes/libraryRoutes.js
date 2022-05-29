const express = require("express");

const {
  home,
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("..//controllers/libraryController");

const router = express.Router();

router.route("/").get(home);

router.route("/books").get(getBooks).post(createBook);

router.route("/books/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
