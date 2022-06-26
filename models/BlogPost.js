const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	postTitle:String,
	postBody:String,
	userid:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User",
		required:true
	},
	datePosted: {
		type: Date,
		default: new Date(),
	},
	image: String,
}, {timestamps:true});


//Export model
const BlogPost = mongoose.model("BlogPost", BlogSchema);
module.exports = BlogPost;