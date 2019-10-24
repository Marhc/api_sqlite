const express = require("express");
const routes = require("./routes");
const port = 3535;

const connection = require("./connection");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão efetuada!");
  })
  .catch(err => {
    console.log("Ocorreu um erro:", err);
  });

const app = express();

app
  .use(express.json())
  .use(routes)
  .listen(port);
