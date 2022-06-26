
exports.validateMiddleware =  (req, res, next) => {
    if(req.files == null || req.body.postTitle==null||req.body.postBody==null) {
        return res.redirect("/blogs/new")
    }
    next()
}

