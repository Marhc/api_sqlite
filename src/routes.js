const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.json({ msg: "Api online" });
});

routes.post("/users", UserController.store);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);
routes.get("/users", UserController.index);

module.exports = routes;
