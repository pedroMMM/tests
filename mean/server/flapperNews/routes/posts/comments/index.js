var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

router.param('commentID', getCommentID);

router.get('/', getComments);

router.get('/:commentID ', getCommentByID);

router.post('/', postComment);

router.put('/:commentID/upvote', upvote);

module.exports = router;

//////////////////////

function getCommentID(req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function (err, comment) {
        if (err) {
            return next(err);
        }
        if (!comment) {
            return next(new Error('can\'t find comment'));
        }

        req.comment = comment;
        return next();
    });
}

function getComments(req, res, next) {
    req.post.populate('comments', function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(req.post.comments);
    });
}

function getCommentByID(req, res) {
    res.json(req.comment);
}

function postComment(req, res, next) {
    var comment = new Comment(req.body);
    var post = req.post;
    comment.post = post;

    comment.save(function (err, comment) {
        if (err) {
            return next(err);
        }

        post.comments.push(comment);
        post.save(function (err, post) {
            if (err) {
                return next(err);
            }
            res.json(comment);
        });

    });
}

function upvote(req, res, next) {
    req.comment.upvote(function (err, comment) {
        if (err) {
            return next(err);
        }
        res.json(comment);
    });

}
