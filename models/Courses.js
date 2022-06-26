const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	name: {
	type:String,
	required:true,
	unique:true,
	},
	faculty:String,
	totalSemester:Number,
	courseDuration:String,
	universityAffiliation:String,
	description:String,
	userid:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User",
		required:true
	}
});


//Export model
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;