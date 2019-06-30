const express = require("express");

const recipeRoutes = require("./recipe");
const categoryRoutes = require("./category");
const recipeIngredientRoutes = require("./recipeIngredient");
const ingredientRoutes = require("./ingredient");



const router = express.Router();

router.use("/recipes", recipeRoutes);
router.use("/categories", categoryRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/recipe-ingredients", recipeIngredientRoutes);


module.exports = router;
