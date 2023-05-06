require("dotenv").config();
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER_ADMIN}:${process.env.PASSWORD_ADMIN}@cluster0.qtgwdoz.mongodb.net/pollifyDB?retryWrites=true&w=majority`;

const run = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB!");
  });
};

module.exports = { run };
