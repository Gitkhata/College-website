
const User = require("../models/User");
const flash = require("connect-flash");
const bcrypt = require("bcrypt")
const path = require("path");

//login form
exports.user_login_get = (req, res) => {
    res.render("users/login", {
        title: "User Login"
    })
}

exports.user_login_post = (req, res) => {
    const {username, password} = req.body;
    User.findOne({
        username: username
    }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId=user._id;
                    loggedIn=req.session.userId;
                    res.redirect("/")
                } else {
                    res.redirect("login/")
                }
            })
        } else {
            res.redirect("login/")
        }
    })
}

//show user registration form
exports.user_register_get = (req, res) => {
    var username="";
    var password="";
    const data= req.flash("data")[0];

    if(typeof data!="undefined"){
        username=data.username;
        password=data.password;
    }
    res.render("users/register", {
        title: "Register New User",
        errors:req.session.validationErrors,
        // errors: flash('validationErrors'),
        username:username,
        password:password
    });
}

//register user POST
exports.user_register_post = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            // const validationErrors = Object.keys(error.errors).map(key=>error.errors[key].message)

            const validationErrors = Object.keys(error.errors).map(key =>error.errors[key].message)
            req.flash('validationErrors',validationErrors);

            // req.session.validationErrors = validationErrors;

            req.flash("data", req.body);

            return res.redirect("register/")
        }
        res.redirect("login/");
    })
}

//logout
exports.user_logout = (req, res)=>{
    req.session.destroy(()=>{
        loggedIn=null;
        res.redirect("/")
    })
}

