(function () {
    'use strict';

    angular.module('flapperNews.main')
        .constant('MAIN', {
            STATE: 'home',
            URL: '/home',
            TEMPLATE: '/javascripts/flapperNews/main/main.html',
            CONTROLLER: 'MainController'
        });

})();
