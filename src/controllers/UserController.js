const User = require("../models/User");

const opError = { msg: "Operation not successful." };
const opSuccess = { msg: "Operation successful." };

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    return res.json(newUser);
  },
  async show(req, res) {
    const { id } = req.params;
    const wantedUser = await User.findByPk(id);
    return res.json(wantedUser);
  },
  async update(req, res) {
    let reply = opError;
    res.status(400);
    const { id } = req.params;
    const { name, email } = req.body;
    const changed = await User.update({ name, email }, { where: { id: id } });
    if (changed) {
      const updatedUser = await User.findByPk(id);
      reply = updatedUser;
      res.status(200);
    }
    return res.json(reply);
  },
  async destroy(req, res) {
    let reply = opError;
    res.status(400);
    const { id } = req.params;
    const deleted = await User.destroy({
      where: {
        id: id
      }
    });
    if (deleted) {
      reply = opSuccess;
      res.status(200);
    }
    return res.json(reply);
  },
  async index(req, res) {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  }
};
