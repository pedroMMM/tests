(function () {
    'use strict';

    angular.module('flapperNews.core').factory('PostService', PostService);

    PostService.inject = ['$resource'];

    function PostService($resource) {

        var service = $resource('/api/posts/:postID', null, {});

        return service;
    }

})();
