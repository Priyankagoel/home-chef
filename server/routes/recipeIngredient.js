const router = require("express").Router();
const RecipeIngredient = require("../models/RecipeIngredient");

router.get("/", (req, res) => {
  RecipeIngredient.findAll({
    order: [["recipe_id", "DESC"]]
  }).then(recipeIngredients => {
    return res.status(200).json(recipeIngredients);
  });
});

module.exports = router;
