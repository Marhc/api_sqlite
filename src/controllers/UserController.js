const User = require("../models/User");

const message = { success: "Operation successful." };

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    return res.json(newUser);
  },
  async show(req, res) {
    res.status(400);
    const { id } = req.params;
    const userFound = await User.findByPk(id);
    if (userFound) {
      res.status(200);
    }
    return res.json(userFound);
  },
  async update(req, res) {
    let reply = null;
    res.status(400);
    const { id } = req.params;
    const { name, email } = req.body;
    const changed = await User.update({ name, email }, { where: { id: id } });
    if (changed[0]) {
      const updatedUser = await User.findByPk(id);
      reply = updatedUser;
      res.status(200);
    }
    return res.json(reply);
  },
  async destroy(req, res) {
    let reply = null;
    res.status(400);
    const { id } = req.params;
    const deleted = await User.destroy({
      where: {
        id: id
      }
    });
    if (deleted) {
      reply = { message: message.success };
      res.status(200);
    }
    return res.json(reply);
  },
  async index(req, res) {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  }
};
