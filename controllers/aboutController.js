const path = require("path");
const AboutUsPage = require("../models/AboutUsPage");


exports.about_page = async (req, res)=> {
    const aboutUs =await AboutUsPage.find({});
    res.render("about/about_us_show", {aboutUs:aboutUs,title:"About Us"});
};

exports.create_page_get = (req, res)=>{
    if(req.session.userId){
        res.render("about/about_us_create", {title:"Crate New About Us Page",
            createPost:true
        });
    }
    res.redirect("/users/login")
}

exports.store_page_post = async (req, res)=>{
    await AboutUsPage.create({
                ...req.body,
                userid:req.session.userId
            })
            res.redirect("/about");
}

exports.update_about_us_get = async (req, res)=>{
    const {id} = req.params;
    const aboutUs = await AboutUsPage.findById(id);
    res.render("about/about_us_update", {
        title:"Update About Page",
        updatePost:true,
        aboutUs:aboutUs
    })
}


exports.update_about_us_put = async (req, res)=>{
    const {id} = req.params;
    const aboutUs = await AboutUsPage.findByIdAndUpdate(id, req.body,{runValidators:true, new:true});
res.redirect(`/about`);
}

exports.delete_about_us_get = async (req, res)=>{
    const {id} = req.params;
 await AboutUsPage.findByIdAndDelete(id);
    res.redirect(`/about`);
}
