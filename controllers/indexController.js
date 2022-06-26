
const Banner = require("../models/Banner");
const path = require("path")

exports.list_all_banners = async (req, res) => {
    const banners = await Banner.find({})
    res.render("index", {
        title: "Banners",
        banners: banners,
    })
}

exports.create_banner_get = function (req, res){
    if (req.session.userId) {
        res.render("banner/banner_create", {
            title: "New Banner",
            createPost: true
        });
    }
    res.redirect("/users/login")
}
