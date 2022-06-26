var express = require('express');
var router = express.Router();

const noticeController = require("../controllers/eventController")
const {validateMiddleware} = require("../middlewares/validationMiddleware");
const {authMiddleware} = require("../middlewares/authMiddleware");


/*router.get("/create", noticeController.create_notice_get)

router.post("/store", noticeController.create_notice_post)

router.get("/event/:id", noticeController.notice_detail);

router.get("/event/:id/edit", authMiddleware, noticeController.notice_update_get);

router.put("/event/:id/", authMiddleware, noticeController.notice_update_put);

router.get("/event/delete/:id",authMiddleware, noticeController.notice_delete);

router.get('/', noticeController.list_all_notice);*/

module.exports = router;

