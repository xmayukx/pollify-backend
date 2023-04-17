const express = require('express');
const router = express.Router();
// const pollRouter = require('./polls')
// const userRouter = require('./users')
const authRouter = require('./auth')

router.use('/auth', authRouter)
// router.get('/polls', pollRouter);
// router.get('/users', userRouter);

module.exports = router

