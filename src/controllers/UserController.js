const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    return res.json(newUser);
  },
  async list(req, res) {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  }
};
