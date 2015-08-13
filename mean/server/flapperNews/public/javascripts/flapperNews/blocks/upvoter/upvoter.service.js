(function () {
    'use strict';

    angular.module('blocks.upvoter').factory('Upvoter', Upvoter);

    function Upvoter() {

        var service = {
            upvote: upvote
        };

        return service;

        function upvote(upvotable) {
            upvotable.upvotes += 1;
        };

    }

})();
