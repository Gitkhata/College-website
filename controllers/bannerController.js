const Banner = require("../models/Banner");
const path = require("path");

exports.list_all_banners = async (req, res) => {
    const banners = await Banner.find({})
    res.render("index", {
        title: "Banners",
        banners: banners,
    })
}

exports.create_banner_get = (req, res) => {
    if (req.session.userId) {
        res.render("banner/banner_create", {
            title: "New Banner",
            createPost: true
        });
    }
    res.redirect("/users/login")
}

exports.create_banner_post = async (req, res) => {
    let image = req.files.image;
    await image.mv(path.resolve(__dirname, "..", "public/images/banner/", image.name),
        async (error) => {
            await Banner.create({
                ...req.body,
                image: "/images/banner/" + image.name,
                userid: req.session.userId
            })
            res.redirect(`/`)
        })
}

exports.banner_detail = async (req, res) => {
    const banner = await Banner.findById(req.params.id);
    res.render("index", {
        title: "Banner Description",
        banner: banner
    })
}

exports.banner_update_get = async (req, res) => {
    const {id} = req.params;
    const banner = await Banner.findById(id);
    res.render("banner/banner_update", {
        title: "Update Banner",
        updatePost: true,
        banner: banner
    })
}

exports.banner_update_put = async (req, res) => {
    const {id} = req.params;
    const banner = await Banner.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/banners/banner/${banner._id}`);
}

exports.banner_delete = async (req, res) => {
    const bannerId = req.params.id;
    await Banner.findByIdAndDelete(bannerId);
    res.redirect("/index");
}


