require('dotenv').config();
const express = require("express");
const { json } = require("body-parser");

const port = 3005;

const app = express();

const charCtrl = require("./controllers/characters_controller");

app.use(json());

app.get("/api/characters",charCtrl.getCharacters);
app.post("/api/characters/:id",charCtrl.postCharacters);
app.put("/api/character/:id",charCtrl.updateCharacters);
app.delete("/api/characters/:id",charCtrl.deleteCharacters);




app.listen(port, () => console.log(`Listening on: ${port}`));