const express = require("express");
const pollController = require("../controllers/pollController");
const authorization = require("../middlewares/authorization");
const pollAuth = require("../middlewares/pollAuth");
const router = express.Router();

router.get(
  "/:pollID",
  express.json(),
  authorization,
  pollAuth,
  pollController.getPoll
);

router.post(
  "/createPoll",
  express.json(),
  authorization,
  pollController.createPoll
);

module.exports = router;
