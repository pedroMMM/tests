(function () {
    'use strict';

    angular.module('flapperNews.main')
        .constant('MAIN', {
            STATE: 'home',
            URL: '/home',
            TEMPLATE: '/client/flapperNews/main/main.html',
            CONTROLLER: 'MainController'
        });

})();
