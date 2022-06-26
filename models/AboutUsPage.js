const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const AboutUsPageSchema = new Schema({
    title:String,
    body:String,
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
});

//Export model
const AboutUsPage = mongoose.model("AboutUsPage", AboutUsPageSchema);
module.exports = AboutUsPage;
