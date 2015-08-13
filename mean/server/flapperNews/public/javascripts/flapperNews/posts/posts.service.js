(function () {
    'use strict';

    angular.module('flapperNews.posts').factory('PostService', PostService);

    function PostService() {

        var service = {
            posts: []
        };

        return service;
    }

})();
