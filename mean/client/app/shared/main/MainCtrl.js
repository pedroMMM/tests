(function () {
    'user strict';

    angular.module('controllers').controller('MainCtrl', MainCtrl);

    function MainCtrl() {

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
                upvotes: 0
            });
            vm.title = '';
        }

        function incrementUpvotes(post) {
            post.upvotes += 1;
        }

    }

})();
