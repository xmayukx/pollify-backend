const express = require('express');
const router = express.Router();

const authRouter = require('./auth')
const pollsRouter = require('./polls')
const voteRouter = require('./vote')

router.use('/auth', authRouter)
router.use('/polls', pollsRouter)
router.use('/vote', voteRouter)

module.exports = router

