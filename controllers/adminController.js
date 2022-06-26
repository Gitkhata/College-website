const path = require("path");
const BlogPost = require("../models/BlogPost");


exports.adminDashboard = (req, res)=>{
    res.render("admin/index")
}


exports.adminBlogList = async (req, res)=>{
        const blogposts = await BlogPost.find({}).populate("userid");
        res.render("admin/list_all_blogs", {
            blogposts: blogposts,
        });
    }
