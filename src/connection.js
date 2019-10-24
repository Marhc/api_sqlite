const Sequelize = require("sequelize");
const config = require("./database/config");
const User = require("./models/User");

const connection = new Sequelize(config);

User.init(connection);

module.exports = connection;
