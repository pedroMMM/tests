(function () {
    'use strict';

    angular.module('flapperNews.posts')
        .constant('POSTS', {
            STATE: 'posts',
            URL: '/posts/{id}',
            TEMPLATE: '/client/flapperNews/posts/posts.html',
            CONTROLLER: 'PostsController'
        });

})();
