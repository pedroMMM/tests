(function () {
    'use strict';

    angular.module('flapperNews.core').run(appRun);

    function appRun(Routes, HOMEPAGE) {
        Routes.configureStates([], HOMEPAGE.URL);
    }

})();
