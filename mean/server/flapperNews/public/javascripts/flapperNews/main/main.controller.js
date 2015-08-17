(function () {
    'user strict';

    angular.module('flapperNews.main').controller('MainController', MainController);



    function MainController(PostService, Upvoter) {

        var vm = this;

        vm.addPost = addPost;
        vm.incrementUpvotes = incrementUpvotes;
        vm.posts = [];

        PostService.query().$promise.then(function (data) {
            angular.copy(data, vm.posts);
        }, function (error) {
            alert(error);
        });

        function incrementUpvotes(post) {
            Upvoter.upvote(post);
        }

        function addPost() {

            if (!vm.title || vm.title === '') {
                return;
            }

            vm.posts.push({
                title: vm.title,
                link: vm.link,
                upvotes: 0,
                comments: [
                    {
                        author: 'Joe',
                        body: 'Cool post!',
                        upvotes: 0
                    },
                    {
                        author: 'Bob',
                        body: 'Great idea but everything is wrong!',
                        upvotes: 0
                    }
                ]
            });
            vm.title = '';
            vm.link = '';
        }

    }

})();
