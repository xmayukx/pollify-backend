const Poll = require("../models/poll");
const User = require("../models/user");

const vote = async (req, res) => {
  const { pollID, optionID, email } = req.body;
  const user = await User.exists({ email: email });
  const q = await Poll.findById(pollID);

  if (q) {
    const voted = await Poll.findOne(
      { _id: pollID, "options.voters": user._id },
      { "options.$": 1 }
    );

    if (!voted) {
      const update = await Poll.findOneAndUpdate(
        { _id: pollID, "options._id": optionID },
        {
          $addToSet: { "options.$.voters": user._id },
        },
        { new: true }
      );

      res.status(200).send(update);
    } else if (voted.options[0]._id.toString() === optionID) {
      console.log(voted)
      res.status(400).send("User has already voted for this option!");
    } else {
      res.status(400).send("User has already voted in this poll!");
    }

    res.status(401).send("Error occurred!");
  }
};

module.exports = { vote };
