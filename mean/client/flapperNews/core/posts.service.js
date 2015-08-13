(function () {
    'use strict';

    angular.module('flapperNews.core').factory('PostService', PostService);

    function PostService() {

        var service = {
            posts: []
        };

        return service;
    }

})();
