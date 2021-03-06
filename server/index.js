const express = require("express");
const massive = require("massive");
const app = express();
const controller = require("./controllers/controller");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

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
  console.log(`This game sucks ${SERVER_PORT}`);
});
