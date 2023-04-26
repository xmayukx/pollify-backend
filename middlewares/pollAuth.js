const Poll = require("../models/poll");
const User = require("../models/user");
const ObjectId = require("mongoose").Types.ObjectId;
const pollAuth = async (req, res, next) => {
  const { pollID } = req.params;
  const { email } = req.body;
  // console.log(pollID);
  console.log(req.body, req.params);
  const poll = await Poll.findById(pollID);
  const user = await User.findOne({ email: email });
  if (poll) {
    req.body.poll = poll;
    if (poll.owner_info.equals(user._id)) {
      req.body.bearer = "owner";
      next();
    } else {
      req.body.bearer = "voter";
      next();
    }
  } else {
    res.status(403).send({ msg: "Poll does not exists." });
  }
};

module.exports = pollAuth;
