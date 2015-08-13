(function () {
    'use strict';

    angular.module('flapperNews.posts')
        .constant('POSTS', {
            STATE: 'posts',
            URL: '/posts/{id}',
            TEMPLATE: '/javascripts/flapperNews/posts/posts.html',
            CONTROLLER: 'PostsController'
        });

})();
