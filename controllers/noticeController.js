const Notice = require("../models/Notice");
const path = require("path");


exports.list_all_notice = async (req, res) => {
    const notices = await Notice.find({}).populate("userid");
    res.render("notice/notice_all", {
        notices: notices,
        title: "Notices",
    })
}

exports.create_notice_get = (req, res) => {
    if (req.session.userId) {
        res.render("notice/new_notice", {
            title: "New Notice",
            createNotice: true
        });
    }
    res.redirect("/users/login")

}

exports.create_notice_post = async (req, res) => {
    let image = req.files.image;
    await image.mv(path.resolve(__dirname, "..", "public/images/notice/", image.name),
        async (error) => {
            await Notice.create({
                ...req.body,
                image: "/images/notice/" + image.name,
                userid: req.session.userId
            })
            res.redirect("/notices");
        })
}


exports.notice_detail = async (req, res) => {
    const notice = await Notice.findById(req.params.id).populate("userid");
    res.render("notice/notice_single", {
        title: "Notice",
        notice: notice,
    })
}

exports.notice_update_get = async (req, res) => {
    const {id} = req.params;
    const notice = await Notice.findById(id);
    res.render("notice/update_notice", {
        title: "Update Notice",
        updateNotice: true,
        notice: notice,
    })
}

exports.notice_update_put = async (req, res) => {
    const {id} = req.params;
    const notice = await Notice.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/notices/notice/${notice._id}`);
}

exports.notice_delete = async (req, res) => {
    const noticeId = req.params.id;
    await Notice.findByIdAndDelete(noticeId, (error, notice) => {
        res.redirect("/notices")
    })
}


