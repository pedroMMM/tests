module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'public/javascripts/bower_components/angular/angular.js',
            'public/javascripts/bower_components/angular-resource/angular-resource.js',
            'public/javascripts/bower_components/angular-ui-router/release/angular-ui-router.js',
            'public/javascripts/bower_components/angular-mocks/angular-mocks.js',
            'public/javascripts/flapperNews/core/*.js',
            'public/javascripts/flapperNews/blocks/router/*.js',
            'public/javascripts/flapperNews/main/*.js',
            'public/javascripts/flapperNews/posts/*.js',
            'public/javascripts/flapperNews/flapperNews.module.js',
            'public/javascripts/flapperNews/tests/*.js',
        ],
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    });
};
