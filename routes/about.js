const express = require("express");
const router = express.Router();

const about_controller = require("../controllers/aboutController");
const {authMiddleware} = require("../middlewares/authMiddleware");


router.get("/", about_controller.about_page);

router.get("/create", about_controller.create_page_get);

router.post("/store", about_controller.store_page_post);

router.get("/post/:id/edit", authMiddleware, about_controller.update_about_us_get);

router.put("/post/:id/", authMiddleware, about_controller.update_about_us_put);

router.get("/post/:id/delete", authMiddleware, about_controller.delete_about_us_get);

module.exports = router;