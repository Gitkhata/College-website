const express = require('express');
const router = express.Router();


const {validateMiddleware} = require("../middlewares/validationMiddleware");
const {authMiddleware} = require("../middlewares/authMiddleware");
const bannerController = require("../controllers/bannerController");



// router.get("/create", bannerController.create_banner_get)

router.post("/store", bannerController.create_banner_post)

router.get("/banner/:id", bannerController.banner_detail);

router.get("/banner/:id/edit", authMiddleware, bannerController.banner_update_get);

router.put("/banner/:id/", authMiddleware, bannerController.banner_update_put);

router.get("/banner/:id/delete",authMiddleware, bannerController.banner_delete);

router.get('/', bannerController.list_all_banners);



module.exports = router;