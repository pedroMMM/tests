(function () {
    'use strict';

    angular.module('flapperNews.posts')
        .constant('POSTS', {
            STATE: 'post',
            URL: '/post/{id}',
            TEMPLATE: '/javascripts/flapperNews/posts/posts.html',
            CONTROLLER: 'PostsController'
        });

})();
