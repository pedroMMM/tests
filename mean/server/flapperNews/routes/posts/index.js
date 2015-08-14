var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

router.param('postID', getPostID);

router.get('/', getPosts);

router.post('/', postPost);

router.get('/:postID', getPostByID);

router.put('/:postID/upvote', upvote);

router.use('/:postID/comments', require('./comments'));

module.exports = router;

//////////////////////

function getPostID(req, res, next, id) {
    var query = Post.findById(id);

    query.exec(function (err, post) {
        if (err) {
            return next(err);
        }
        if (!post) {
            return next(new Error('can\'t find post'));
        }

        req.post = post;
        return next();
    })
}

function getPosts(req, res, next) {
    Post.find(function (err, posts) {
        if (err) {
            return next(err);
        }
        res.json(posts);
    });
}

function postPost(req, res, next) {
    var post = new Post(req.body);
    post.save(function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
}

function getPostByID(req, res) {
    req.post.populate('comments', function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(req.post);
    });
}

function upvote(req, res, next) {
    req.post.upvote(function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(post);
    })
}
