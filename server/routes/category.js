const router = require("express").Router();
const Category = require("../models/Category");
const Ingredient = require("../models/Ingredient");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  Category.findAll({
    order: [["name", "DESC"]],
    attributes: ["id", "name"],
    include: [
      {
        model: Ingredient,
        attributes: ["id", "name"],
        as: "ingredients"
      }
    ]
  }).then(categories => {
    return res.status(200).json(categories);
  });
});

module.exports = router;
