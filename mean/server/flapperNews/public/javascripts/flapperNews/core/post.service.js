(function () {
    'use strict';

    angular.module('flapperNews.core').factory('PostService', PostService);

    PostService.$inject = ['$resource'];

    function PostService($resource) {

        var service = $resource('/api/posts/:postID', null, {

            update: {
                method: 'PUT'
            },
            upvote: {
                method: 'PUT',
                url: '/api/posts/:postID/upvote'
            }

        });

        return service;
    }

})();
