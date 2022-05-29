const Library = require("../models/libraryModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Library Api.",
  });
};

exports.getBooks = async (req, res) => {
  try {
    console.log(req.query);
    const { title, author, category } = req.query;
    const regex = [
      new RegExp(title, "i"),
      new RegExp(author, "i"),
      new RegExp(category, "i"),
    ];
    // Posts.find({ title: { $regex: regex } });
    let allBooks;
    if (title || author || category) {
      allBooks = await Library.find({
        title: { $regex: regex[0] },
        author: { $regex: regex[1] },
        category: { $regex: regex[2] },
      });
    } else {
      allBooks = await Library.find();
    }
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      results: allBooks.length,
      data: allBooks,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching books",
      message: err,
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Library.findById(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching book",
      message: err,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const food = await Library.create(req.body);
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in creating book",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Library.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in updating book",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Library.findByIdAndDelete(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Library Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in deleting book",
      message: err,
    });
  }
};
