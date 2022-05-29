const Library = require("../models/libraryModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Library Api.",
  });
};

exports.getBooks = async (req, res) => {
  try {
    const allBooks = await Library.find();
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      results: allBooks.length,
      data: allBooks,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching blogs",
      message: err,
    });
  }
};
