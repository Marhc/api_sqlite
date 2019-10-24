const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.json({ msg: "Api online" });
});

routes.post("/user", UserController.create);

routes.get("/users", UserController.list);

module.exports = routes;
