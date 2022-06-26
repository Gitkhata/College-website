const path = require("path");
const ContactUsPage = require("../models/ContactUsPage");

exports.contact_page= async (req, res)=>{
    const contactUs =await ContactUsPage.find({});
    res.render("contact/contact_us_show", {contactUs:contactUs,title:"Contact Us"});
    res.render("partials/footer", {contactUs: contactUs});
}


exports.create_page_get=(req, res)=> {
    if(req.session.userId){
        res.render("contact/contact_us_create", {title:"Crate Contact Information Page",
            createPost:true
        });
    }
    res.redirect("/users/login")
}

exports.store_page_post=async (req, res)=> {
    await ContactUsPage.create({
        ...req.body,
        userid:req.session.userId
    })
    res.redirect("/contact");
}

exports.update_contact_us_get =async (req, res)=> {
    const {id} = req.params;
    const contactUs = await ContactUsPage.findById(id);
    res.render("contact/contact_us_update", {
        title:"Update Contact",
        updatePost:true,
        contactUs:contactUs
    })
}

exports.update_contact_us_put=async (req, res)=> {
    const {id} = req.params;
    await ContactUsPage.findByIdAndUpdate(id, req.body,{runValidators:true, new:true});
    res.redirect(`/contact`);
}

exports.delete_contact_get=async (req, res)=> {
    const {id} = req.params;
    await ContactUsPage.findByIdAndDelete(id);
    res.redirect(`/contact`);
}