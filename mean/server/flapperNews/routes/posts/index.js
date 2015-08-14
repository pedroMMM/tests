var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

router.get('/', getPosts);

router.post('/', postPost);

module.exports = router;

//////////////////////

function getPosts(req, res, next) {
    Post.find(function (err, obj) {
        if (err) {
            return next(err);
        }
        res.json(obj);
    });
}

function postPost(req, res, next) {
    var obj = new Post(req.body);
    post.save(function (err, obj) {
        if (err) {
            return next(err);
        }
        res.json(obj);
    });
}
