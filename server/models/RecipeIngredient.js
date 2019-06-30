const Sequelize = require("sequelize");
const db = require("../configs/db");
const Recipe = require("./Recipe");
const Ingredient = require("./Ingredient");

class RecipeIngredient extends Sequelize.Model {}

RecipeIngredient.init(
  { recipeId: Sequelize.INTEGER, ingredientId: Sequelize.INTEGER },
  {
    sequelize: db,
    modelName: "recipe_ingredients"
  }
);
// RecipeIngredient.belongsTo(Recipe);
RecipeIngredient.belongsTo(Ingredient);

module.exports = RecipeIngredient;
