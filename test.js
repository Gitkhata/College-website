const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/college_website', {useNewUrlParser: true});

BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, ke this:',
},(error, blogpost) => {
    console.log(error,blogpost)
})

BlogPost.find({}, (error, blogpost)=>{
    console.log(error, blogpost)
})


var id = "611e09b3ca4ca03a02c09e7a";
BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogpost)=>{
    console.log(error, blogpost)
})

var id = "611e09b3ca4ca03a02c09e7a";
BlogPost.findByIdAndDelete(id, (error, blogpost)=>{
    console.log(error, blogpost)
})