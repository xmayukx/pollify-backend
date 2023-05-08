const express = require("express");
const authController = require("../controllers/authController");
const authorization = require("../middlewares/authorization");
const router = express.Router();

router.post("/signup", express.json(), authController.signUp);
router.post("/login", express.json(), authController.login);
router.post("/check", express.json(), authorization, authController.checkauth);

module.exports = router;
