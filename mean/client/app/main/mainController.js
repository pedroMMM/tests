(function () {
    'user strict';

    angular.module('flapperNews.main').controller('MainController', MainController);

    function MainController() {

        var vm = this;

        vm.test = 'Hello world!';

        vm.addPost = addPost;
        vm.incrementUpvotes = incrementUpvotes;

        vm.posts = [
            {
                title: 'post 1',
                upvotes: 5
            },
            {
                title: 'post 2',
                upvotes: 2
            },
            {
                title: 'post 3',
                upvotes: 15
            },
            {
                title: 'post 4',
                upvotes: 9
            },
            {
                title: 'post 5',
                upvotes: 4
            }
        ];

        function addPost() {

            if (!vm.title || vm.title === '') {
                return;
            }

            vm.posts.push({
                title: vm.title,
                link: vm.link,
                upvotes: 0
            });
            vm.title = '';
            vm.link = '';
        }

        function incrementUpvotes(post) {
            post.upvotes += 1;
        }

    }

})();
