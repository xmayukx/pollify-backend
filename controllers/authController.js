require('dotenv').config()
const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const signUp = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    const ext = await User.findOne({ email: email })
    if (ext) {
        // console.log(ext);
        res.status(400).send("Email already exists")
    } else {
        const hasedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hasedPassword })
        await user.save()
        const payload = { email: email };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET)
        res.status(200).json({ accessToken })
    }
}

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    let user= await User.findOne({email:email});
    if (user){
        const match=bcrypt.compareSync(password, user.password);
        if(!match){
            res.status(400).send("Incorrect password!")
        }else{
            res.status(200).send("Logged in!")
        }
    }else{
        res.status(400).send("Incorrect credentionals or User does not exists!")
    }
}

module.exports = { signUp, login }