(function () {
    'use strict';

    angular.module('flapperNews.posts').controller('PostsController', PostController);

    function PostController(PostService, $stateParams, CommentService, post) {

        var vm = this;

        vm.post = {};

        angular.copy(post, vm.post);

        vm.addComment = addComment;
        vm.incrementUpvotes = incrementUpvotes;

        function incrementUpvotes(comment) {
            CommentService.upvote({
                postID: post._id,
                commentID: comment._id
            }, {}).$promise.then(function (data) {
                angular.copy(data, comment);
            }, function (error) {
                alert(error);
            });
        }

        function addComment() {
            if (vm.body === '') {
                return;
            }

            var newComment = {
                body: vm.body,
                author: 'user',
                upvotes: 0
            };

            CommentService.save({
                postID: post._id
            }, newComment).$promise.then(function (data) {
                vm.post.comments.push(data);
                vm.body = '';
            }, function (error) {
                alert(error);
            });
        }

    }

})();
