const BlogPost = require("../models/BlogPost");
const path = require("path");



//Display all blog posts
exports.post_list = async (req, res) => {
    const blogposts = await BlogPost.find({}).populate("userid");
    // console.log(req.session)
    res.render("blogs/blog_posts", {
        blogposts: blogposts,
        title: "Latest Posts",
    });
}

//Display description of specific blog post
exports.post_detail = async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id).populate("userid");
    res.render("blogs/blog_single", {
        title: "Blog",
        blogpost: blogpost,
    })
}

// Display post create form on GET
exports.post_create_get = function (req, res) {
    if(req.session.userId){
        res.render("blogs/new_post", {title: "New Post",
        createPost:true
        });
    }
    res.redirect("/users/login")

}

// Handle post create on POST
exports.post_create_post = async (req, res) => {
    let image = req.files.image;
    await image.mv(path.resolve(__dirname, "..", "public/images/blog/",  image.name),
        async (error) => {
        await BlogPost.create({
            ...req.body,
            image: "/images/blog/" + image.name,
            userid:req.session.userId
        })
        res.redirect("/blogs");
    })
}


// Display post delete form on GET
exports.post_delete_get = async (req, res)=> {
    const {id} = req.params;
    await BlogPost.findByIdAndDelete(id);
    res.redirect(`/blogs`);
}

// Display post delete form on POST
exports.post_delete_post = function (req, res) {
    res.send("Post delete GET")
}

// Display post update form on GET
exports.post_update_get = async (req, res)=>{
const {id} = req.params;
const blogpost=await BlogPost.findById(id);
res.render("blogs/update_blog", {
title:"Update Post",
updatePost:true,
blogpost:blogpost,
})
}

// Handle post update on POST
exports.post_update_put = async (req, res) =>{
const {id} = req.params;
const blogpost = await BlogPost.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
res.redirect(`/blogs/post/${blogpost._id}`);
}


