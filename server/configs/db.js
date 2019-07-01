const Sequelize = require("sequelize");

const sequelize = new Sequelize("home_chef", "root", "mysql@123", {
  dialect: "mysql",
  logging: false,
  
});

module.exports = sequelize;
