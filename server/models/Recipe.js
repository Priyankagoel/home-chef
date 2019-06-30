const Sequelize = require("sequelize");
const db = require("../configs/db");
const RecipeIngredient = require("./RecipeIngredient");
class Recipe extends Sequelize.Model {}

Recipe.init(
  {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    createdBy: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db, modelName: "recipes", paranoid: true }
);

Recipe.hasMany(RecipeIngredient);
module.exports = Recipe;
