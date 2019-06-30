const Sequelize = require("sequelize");
const db = require("../configs/db");
const Ingredient = require("./Ingredient");

class Category extends Sequelize.Model {}

Category.init(
  {
    name: Sequelize.STRING
  },
  {
    sequelize: db,
    modelName: "categories",
    paranoid: true
  }
);

module.exports = Category;
