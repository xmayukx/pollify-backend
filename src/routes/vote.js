const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");
const authorization = require("../middlewares/authorization");

router.post("/votePoll", authorization, voteController.vote);

module.exports = router;
