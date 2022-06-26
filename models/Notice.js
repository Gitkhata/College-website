const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
    noticeTitle:String,
    noticeBody:String,
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    datePosted: {
        /* can declare property type with an object like this because we need 'default'  */
        type: Date,
        default: new Date(),
    },
    image: String,
}, {timestamps:true});


//Export model
const Notice = mongoose.model("Notice", NoticeSchema);
module.exports = Notice;
