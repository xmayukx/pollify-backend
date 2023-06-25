const { getIO } = require("../../socket");
const Poll = require("../models/poll");
const User = require("../models/user");
const io = getIO();

const vote = async (req, res) => {
  const { pollID, optionID, email } = req.body;
  const user = await User.exists({ email: email });

  await Poll.findById(pollID)
    .then(async (poll) => {
      if (poll) {
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
          ).catch((error) => {
            console.log("Option not found!", error.message);
          });
          io.emit("voted",update.options)
          console.log(voted.options[0]._id.toString());
          res.status(200).send(update);
        } else if (voted.options[0]._id.toString() === optionID) {
          // console.log(voted)
          res.status(400).send("User has already voted for this option!");
        } else {
          res.status(400).send("User has already voted in this poll!");
        }
      } else {
        console.log("Error");
        res.status(401).send("Error occurred!");
      }
    })
    .catch((error) => {
      console.log("Error occured:", error.message);
      res.status(404).send("Not found!");
    });
  // var isFound=poll.id? true : false;
};

module.exports = { vote };
