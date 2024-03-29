const express = require("express");
const Recipe = require("../models/Recipe");
const RecipeIngredient = require("../models/RecipeIngredient");
const Sequelize = require("sequelize");
const Ingredient = require("../models/Ingredient");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.findAndCountAll({
    order: [["id", "DESC"]],
    include: [
      {
        model: RecipeIngredient,
        // where: { state: Sequelize.col("") }
        where: {ingredientId : req.query.ingredientId },
        attributes: ["id", "ingredientId"],
        include: [
          {
            model: Ingredient,
            attributes: ["id", "name"]
          }
        ]
      }
    ]
  }).then(recipes => {
    return res.status(200).json(recipes);
  });
});

// router.get("/" , (req,res) => {
//   Recipe.findAndCountAll({
//     include: [
//       {
//         model: RecipeIngredient,
//         where: {ingredientId : req.params.ingredientId }
//       }
//     ]
//   }).then(recipe => res.status(200).json(recipe));

// });

router.get("/:recipeId", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.recipeId
    },
    include: [
      {
        model: RecipeIngredient,
        // where: { state: Sequelize.col("") }
        attributes: ["id", "ingredientId"],
        include: [
          {
            model: Ingredient,
            attributes: ["id", "name"]
          }
        ]
      }
    ]
  }).then(recipe => res.status(200).json(recipe));
});

module.exports = router;
