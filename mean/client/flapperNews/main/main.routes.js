(function () {
    'use strict';

    angular.module('flapperNews.main').run(appRun);

    function appRun(Routes) {
        console.info('DEBUG - main.routes.js | appRun activated');

        Routes.configureSates(getSates(), homepage);

        function getStates() {
            return [
                {
                    state: 'home',
                    config: {
                        url: mainURL,
                        templateUrl: mainTemplateURL,
                        controller: 'MainController',
                        controllerAs: 'vm'
                    }
                }
            ];
        }
    }

})();
