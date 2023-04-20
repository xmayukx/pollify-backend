const express = require('express');
const router = express.Router();

const authRouter = require('./auth')
const pollsRouter= require('./polls')

router.use('/auth', authRouter)
router.use('/polls',pollsRouter)

module.exports = router

