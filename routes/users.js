var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");
const {redirectIfAuthenticatedMiddleware} = require("../middlewares/redirectIfAuthenticatedMiddleware");

// Authentication middleware


// register user
router.get("/register", redirectIfAuthenticatedMiddleware, userController.user_register_get);

router.post("/create", redirectIfAuthenticatedMiddleware, userController.user_register_post);

// user login
router.get("/login", redirectIfAuthenticatedMiddleware, userController.user_login_get);

router.post("/login", redirectIfAuthenticatedMiddleware, userController.user_login_post)

//logout
router.get("/logout", userController.user_logout)



module.exports = router;
