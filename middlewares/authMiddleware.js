
const User = require("../models/User");

exports.authMiddleware = (req, res, next)=>{
    User.findById(req.session.userId, (error, user)=>{
        if(error || !user)
            return res.redirect("/users/login")
        next()
    })
}