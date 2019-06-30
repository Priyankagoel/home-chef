const Sequelize = require("sequelize");

const sequelize = new Sequelize("home_chef", "root", "", {
  dialect: "mysql",
  logging: false,
  
});

module.exports = sequelize;
