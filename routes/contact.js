const express = require("express");
const router = express.Router();

const contact_controller = require("../controllers/contactController");
const {authMiddleware} = require("../middlewares/authMiddleware");

router.get("/", contact_controller.contact_page);

router.get("/create", contact_controller.create_page_get);

router.post("/store", contact_controller.store_page_post);

router.get("/post/:id/edit", authMiddleware, contact_controller.update_contact_us_get);

router.put("/post/:id/", authMiddleware, contact_controller.update_contact_us_put);

router.get("/post/:id/delete", authMiddleware, contact_controller.delete_contact_get);


module.exports = router;