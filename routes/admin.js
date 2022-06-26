
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const {authMiddleware} = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, adminController.adminDashboard);

router.get("/blogs", authMiddleware, adminController.adminBlogList);

module.exports = router;