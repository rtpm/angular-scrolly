// Karma configuration
// Generated on Tue Jul 30 2013 07:32:11 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/helpers.js',
      'lib/jquery.js',
      'lib/angular.js',
      'lib/angular-mocks.js',
      'src/**/*.js'
    ],

    customLaunchers: {
      'sauce_ios': {
        base: 'SauceLabs',
        platform: 'OS X 10.8',
        browserName: 'iphone',
        version: '6'
      },
      'sauce_android': {
        base: 'SauceLabs',
        platform: 'Linux',
        browserName: 'android',
        version: '4.0'
      },
     'sauce_chrome': {
        base: 'SauceLabs',
        platform: 'Linux',
        browserName: 'chrome'
      },
     'sauce_firefox': {
        base: 'SauceLabs',
        platform: 'Linux',
        browserName: 'firefox'
      },
      'sauce_ie': {
        base: 'SauceLabs',
        platform: 'Windows 8',
        browserName: 'internet explorer',
        version: '10'
      }
    },

    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
