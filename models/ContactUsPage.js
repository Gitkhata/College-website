const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ContactUsPageSchema = new Schema({
    phone1:String,
    phone2:String,
    email:String,
    address:String,
    facebookPage:String,
    description:String,
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
});

//Export model
const ContactUs = mongoose.model("ContactUs", ContactUsPageSchema);
module.exports = ContactUs;
