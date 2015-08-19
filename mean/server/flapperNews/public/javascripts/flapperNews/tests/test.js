'use strict';

describe('Testing main module', function () {

    var main;
    var core;

    //    beforeEach(function () {
    //        core = angular.module('flapperNews');
    //    });

    beforeEach(module('flapperNews.core'))

    if ('should be registered', function () {
            expect(core).toBeDefined();
        });

});
