const router = require("express").Router();
const Ingredients = require("../models/Ingredient");
const Category = require("../models/Category");

router.get("/", (req, res) => {
  Ingredients.findAll({
    attributes: ["id", "name"],
    order: [["name", "DESC"]],
    include: [
      {
        model: Category,
        attributes: ["id", "name"]
      }
    ]
  }).then(ingredients => {
    return res.status(200).json(ingredients);
  });
});

module.exports = router;
