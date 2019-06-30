const Sequelize = require("sequelize");
const db = require("../configs/db");
const Category = require("./Category");
class Ingredient extends Sequelize.Model {}

Ingredient.init(
  {
    name: Sequelize.STRING,
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize: db,
    modelName: "ingredients",
    paranoid: true
  }
);

Ingredient.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Ingredient, { as: "ingredients", foreignKey: "categoryId" });

module.exports = Ingredient;
