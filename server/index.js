const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const controller = require("./controllers/controller");

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected, brooo");
  })
  .catch(err => console.error(err));

app.get("/api/houses", controller.getAll);
app.post("/api/houses", controller.create);
app.get("/api/houses/:id", controller.getOne);
app.delete("/api/houses/:id", controller.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`Server listneing on port ${SERVER_PORT}`);
});
