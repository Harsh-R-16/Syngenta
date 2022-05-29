const Food = require("../models/foodModel");

exports.home = (req, res) => {
  res.status(200).json({
    message: "Success!!!",
    information: "This is Base URL for Food Api.",
  });
};

exports.getFoods = async (req, res) => {
  try {
    const allFoods = await Food.find(req.query);
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

exports.getFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Food Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in fetching food",
      message: err,
    });
  }
};

exports.createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(200).json({
      message: "Success!!!",
      information: "Food Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in creating food",
      message: err,
    });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Success!!!",
      information: "Food Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in updating food",
      message: err,
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndDelete(id);
    res.status(200).json({
      message: "Success!!!",
      information: "Food Api",
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error in deleting food",
      message: err,
    });
  }
};
