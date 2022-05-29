const Food = require("../models/foodModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Food Api.",
  });
};

exports.getFoods = async (req, res) => {
  try {
    const allFoods = await Food.find();
    res.status(200).json({
      message: "Success!!!",
      information: "Food Api",
      results: allFoods.length,
      data: allFoods,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching foods",
      message: err,
    });
  }
};
