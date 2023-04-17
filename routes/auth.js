const express = require("express")
const authController = require("../controllers/authController")
const authorization = require("../middlewares/authorization")
const bodyParser = require("body-parser")
const router = express.Router()
// router.use(bodyParser.urlencoded({ extended: true }));


router.post('/signup', authController.signUp);
router.post('/login', authController.login);

module.exports = router