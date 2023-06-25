const express = require("express");
const db = require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./src/routes");
const { intialize } = require("./socket");
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/pollifyDB');
// db.run().catch(console.dir);

intialize(server);
app.use(router);

app.get("/", (req, res) => {
  res.send({ msg: "pollify-backend" });
});



app.use((req, res) => {
  res.status(404).send({ error: "Route dosn't exist!" });  
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
