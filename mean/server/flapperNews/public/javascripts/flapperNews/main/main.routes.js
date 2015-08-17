(function () {
    'use strict';

    angular.module('flapperNews.main').run(appRun);

    function appRun(Routes, MAIN) {
        Routes.configureStates(getStates(MAIN), MAIN.URL);
    }

    function getStates(MAIN) {
        return [
            {
                state: MAIN.STATE,
                config: {
                    url: MAIN.URL,
                    templateUrl: MAIN.TEMPLATE,
                    controller: MAIN.CONTROLLER,
                    controllerAs: 'vm',
                    resolve: postsPromise
                }
            }
        ];
    }

    var postsPromise = {
        PostService: 'PostService',

        posts: function (PostService) {
            return PostService.query().$promise;
        }
    };

})();
