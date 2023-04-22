const Poll = require('../models/poll');
const User = require('../models/user');

const vote = async (req, res) => {
    const { pollID, optionID, email } = req.body;
    const user = await User.exists({ email: email });
    const q = await Poll.findById(pollID);
    if (q) {
        const update = await Poll.findOneAndUpdate(
            { _id: pollID, 'options._id': optionID },
            {
                $addToSet: { 'options.$.voters': user._id },
            },
            { new: true })
        res.status(200).send(update)
    } else {
        res.status(401).send("Error occured!")
    }
}

module.exports = { vote };