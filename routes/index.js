var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.list_all_banners);

router.get('/banners/create', indexController.create_banner_get);
module.exports = router;
