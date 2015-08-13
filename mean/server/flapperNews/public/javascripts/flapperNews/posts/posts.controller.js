(function () {
    'use strict';

    angular.module('flapperNews.posts').controller('PostsController', PostController);

    function PostController($stateParams, PostService, Upvoter) {

        var vm = this;

        vm.post = PostService.posts[$stateParams.id];
        vm.addComment = addComment;
        vm.incrementUpvotes = incrementUpvotes;

        function incrementUpvotes(comment) {
            Upvoter.upvote(comment);
        }

        function addComment() {
            if (vm.body === '') {
                return;
            }
            vm.post.comments.push({
                body: vm.body,
                author: 'user',
                upvotes: 0
            });

            vm.body = '';
        }

    }

})();