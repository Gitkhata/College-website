var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const expressSession = require("express-session");
const flash = require("connect-flash")
var methodOverride = require('method-override')

const fileUpload = require("express-fileupload");
// const bodyParser = require("body-parser");


//Import routes

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var noticesRouter = require('./routes/notices');
var eventsRouter = require('./routes/events');
var coursesRouter = require('./routes/courses');
const blogsRouter = require("./routes/blogs")
const contactRouter = require("./routes/contact")
const aboutRouter = require("./routes/about");
const bannerRouter = require('./routes/banner');
const adminRouter = require('./routes/admin');



var app = express();

// Setup mongoose connection
mongoose.connect('mongodb://localhost/college_website', {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true});
const db= mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())
app.use(expressSession({
  secret:"JP",
  saveUninitialized: true,
  resave:true,
}))

//flush error message from session
app.use(flash())

// override with POST having ?_method=?
app.use(methodOverride('_method'))

//  routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/blogs", blogsRouter);
app.use("/admin", adminRouter);
app.use("/notices", noticesRouter);
app.use("/events", eventsRouter);
app.use("/courses", coursesRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/banners", bannerRouter);



global.loggedIn = null;
app.use("*", (req, res,next)=>{
  loggedIn = req.session.userId;
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
