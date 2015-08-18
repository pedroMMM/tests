(function () {
    'user strict';

    angular.module('flapperNews.main').controller('MainController', MainController);

    function MainController(PostService, Upvoter, posts) {

        var vm = this;

        vm.addPost = addPost;
        vm.incrementUpvotes = incrementUpvotes;

        vm.posts = [];

        angular.copy(posts, vm.posts);

        function incrementUpvotes(post) {
            PostService.upvote({
                postID: post._id
            }, {}).$promise.then(function (data) {
                angular.copy(data, post);
            }, function (error) {
                alert(error);
            });
        }

        function addPost() {

            if (!vm.title || vm.title === '') {
                return;
            }

            var newPost = {
                title: vm.title,
                link: vm.link,
            };

            PostService.save(newPost).$promise.then(function (data) {
                vm.posts.push(data);

                vm.title = '';
                vm.link = '';

            }, function (error) {
                alert(error);
            });
        }
    }
})();
