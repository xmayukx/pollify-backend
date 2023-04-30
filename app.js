const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./routes");

db.run().catch(console.dir);

app.use(router);
app.get("/", (req, res) => {
  res.send({ msg: "pollify-backend" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
