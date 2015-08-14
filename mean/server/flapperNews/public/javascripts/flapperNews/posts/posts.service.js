(function () {
    'use strict';

    angular.module('flapperNews.posts').factory('PostService', PostService);

    PostService.inject = ['$resource'];

    function PostService($resource) {

        var service = $resource('/posts/:postID', null, {});

        return service;
    }

})();







//(function () {
//    'use strict';
//
//    angular.module('flapperNews.posts').factory('PostService', PostService);
//
//    function PostService() {
//
//        var service = {
//            posts: []
//        };
//
//        return service;
//    }
//
//})();
