const express = require("express")
const pollController = require("../controllers/pollController")
const authorization = require("../middlewares/authorization")
const router = express.Router()

router.post('/createPoll', express.json(), authorization, pollController.createPoll);

module.exports = router



