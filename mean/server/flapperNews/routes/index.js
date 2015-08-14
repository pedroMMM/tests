var express = require('express');
var router = express.Router();
var posts = require('./posts');

/* GET home page. */
router.get('/', index);

router.use('/posts', posts);

module.exports = router;

//////////////////////

function index(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
}
