(function () {

    angular.module('blocks.router').provider('Routes', RoutesProvider);

    RoutesProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function RoutesProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        this.$get = Routes;

        $locationProvider.html5Mode(true);

        Routes.$inject = ['$state'];

        function Routes($state) {

            var hasOtherwise = false;

            var service = {
                configureStates: configureStates,
                getStates: getStates
            };

        }
    }

})();
