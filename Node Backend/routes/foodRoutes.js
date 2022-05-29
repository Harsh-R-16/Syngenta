const express = require("express");

const { home, getFoods } = require("..//controllers/foodController");

const router = express.Router();

router.get("/", home).get("/foods", getFoods);

module.exports = router;
