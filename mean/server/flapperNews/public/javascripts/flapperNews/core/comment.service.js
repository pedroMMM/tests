(function () {
    'use strict';

    angular.module('flapperNews.core').factory('CommentService', CommentService);

    CommentService.$inject = ['$resource'];

    function CommentService($resource) {

        var service = $resource('/api/posts/:postID/comments/:commentID', null, {

            update: {
                method: 'PUT'
            },
            upvote: {
                method: 'PUT',
                url: '/api/posts/:postID/comments/:commentID/upvote'
            }

        });

        return service;
    }

})();
