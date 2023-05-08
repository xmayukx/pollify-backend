const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    
    const authHeader = req.headers['authorization']
    // console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(token);
    if (token == null) return res.status(401)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send("unauthorized user")
        console.log(user);
        req.body.email=user.email;
        req.body.authStatus=200
        next()
    })
}

module.exports = authorization;