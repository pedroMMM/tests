(function () {
    'user strict';

    angular.module('flapperNews.main').controller('MainController', MainController);



    function MainController(PostService, Upvoter, posts) {

        var vm = this;

        vm.addPost = addPost;
        vm.incrementUpvotes = incrementUpvotes;

        vm.posts = [];

        angular.copy(posts, vm.posts);


        //                        PostService.query().$promise.then(function (data) {
        //                    angular.copy(data, vm.posts);
        //                }, function (error) {
        //                    alert(error);
        //                });

        function incrementUpvotes(post) {
            Upvoter.upvote(post);
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
