const express = require("express");
const db = require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const router = require("./src/routes");

db.run().catch(console.dir);

app.use(router);
app.get("/", (req, res) => {
  res.send({ msg: "pollify-backend" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
