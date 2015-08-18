(function () {
    'use strict';

    angular.module('flapperNews.posts').run(appRun);

    function appRun(Routes, POSTS) {
        Routes.configureStates(getStates(POSTS));
    }

    function getStates(POSTS) {
        return [
            {
                state: POSTS.STATE,
                config: {
                    url: POSTS.URL,
                    templateUrl: POSTS.TEMPLATE,
                    controller: POSTS.CONTROLLER,
                    controllerAs: 'vm',
                    resolve: postPromise
                }
            }
        ];
    }

    var postPromise = {
        PostService: 'PostService',

        post: function (PostService, $stateParams) {
            return PostService.get({
                postID: $stateParams.id
            }).$promise;
        }
    };

})();
