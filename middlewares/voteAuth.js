const User = require("../models/user");

const votAuth = async (req, res) => {
    const { email } = req.body;
    const user = await User.exists({ email: email })
}