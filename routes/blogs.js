
const express = require("express");
const router = express.Router();


// Controller Modules
const blog_controller = require("../controllers/blogController");

const {validateMiddleware} = require("../middlewares/validationMiddleware");
const {authMiddleware} = require("../middlewares/authMiddleware");

// GET reqyests for creating Blog. NOTE: This must come before route for id
router.get("/new", authMiddleware, blog_controller.post_create_get);

// POST request for creating post

//Validation middleware applied
router.post("/store", validateMiddleware, blog_controller.post_create_post);


// GET request to update Post
router.get("/post/:id/edit", authMiddleware, blog_controller.post_update_get);

// PUT (update) notice
router.put("/post/:id/", authMiddleware, blog_controller.post_update_put);

router.get("/post/:id/delete", authMiddleware, blog_controller.post_delete_get);

// GET request for single blog post
router.get("/post/:id", blog_controller.post_detail);

// Get request for list of all blog posts
router.get("/", blog_controller.post_list);

module.exports = router;
