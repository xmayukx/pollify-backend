const express = require("express");
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Poll = require("../models/poll")

const createPoll = async (req, res) => {
    console.log(req.body);
    const { question, options, email } = req.body

    const user = await User.findOne({ email: email })
    if (user) {

        const poll = new Poll({
            question: question,
            options: options.map(option => ({ content: option.content })),
            owner_info: user._id
        })

        const newPoll = await poll.save()

        const update = await User.findOneAndUpdate(
            { email: user.email },
            {
                $push: { polls: newPoll._id }
            }
        )
        res.status(200).send(update);

    } else {
        res.status(401).send("Something went wrong")
    }

}

module.exports = { createPoll };