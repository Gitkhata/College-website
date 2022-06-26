const Course = require("../models/Courses");
const path = require("path");



exports.list_all_courses = async (req, res) => {
    const courses = await Course.find({})
    res.render("course/course_list", {
        title: "Courses Offered",
        courses: courses,
    })
}

exports.create_course_get = (req, res) => {
    if (req.session.userId) {
        res.render("course/course_create", {
            title: "New Course",
            createPost: true
        });
    }
    res.redirect("/users/login")

}

exports.create_course_post = async (req, res) => {
    await Course.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect(`/courses`)
}

exports.course_detail = async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.render("course/course_detail", {
        title: "Course Description",
        course: course
    })
}

exports.course_update_get = async (req, res) => {
    const {id} = req.params;
    const course = await Course.findById(id);
    res.render("course/course_update", {
        title: "Update Course",
        updatePost: true,
        course: course
    })
}


exports.course_update_put = async (req, res) => {
    const {id} = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/courses/course/${course._id}`);
}

exports.course_delete = async (req, res) => {
    const courseId = req.params.id;
    await Course.findByIdAndDelete(courseId);
        res.redirect("/Courses");
}


