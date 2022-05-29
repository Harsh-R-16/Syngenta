const express = require("express");

const {
  home,
  getFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
} = require("..//controllers/foodController");

const router = express.Router();

router.route("/").get(home);

router.route("/foods").get(getFoods).post(createFood);

router.route("/foods/:id").get(getFood).patch(updateFood).delete(deleteFood);

module.exports = router;
