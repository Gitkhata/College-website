const express = require('express');
const router = express.Router();


const {validateMiddleware} = require("../middlewares/validationMiddleware");
const {authMiddleware} = require("../middlewares/authMiddleware");
const courseController = require("../controllers/courseController");



router.get("/create", courseController.create_course_get)

router.post("/store", courseController.create_course_post)

router.get("/course/:id", courseController.course_detail);

router.get("/course/:id/edit", authMiddleware, courseController.course_update_get);

router.put("/course/:id/", authMiddleware, courseController.course_update_put);

router.get("/course/:id/delete",authMiddleware, courseController.course_delete);

router.get('/', courseController.list_all_courses);



module.exports = router;