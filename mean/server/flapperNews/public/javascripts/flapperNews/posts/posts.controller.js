(function () {
    'use strict';

    angular.module('flapperNews.posts').controller('PostsController', PostController);

    function PostController(PostService, $stateParams, CommentService, post) {

        var vm = this;

        vm.post = {};

        angular.copy(post, vm.post);

        //        PostService.get({
        //            postID: $stateParams.id
        //        }).$promise.then(function (data) {
        //            angular.copy(data, vm.post);
        //        }, function (error) {
        //            alert(error);
        //        });

        vm.addComment = addComment;
        vm.incrementUpvotes = incrementUpvotes;

        function incrementUpvotes(comment) {
            Upvoter.upvote(comment);
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
