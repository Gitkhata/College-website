const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    bannerTitle: String,
    bannerDescription: String,
    image: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});


//Export model
const Banner = mongoose.model("Banner", BannerSchema);
module.exports = Banner;