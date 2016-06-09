'use strict';

var appConfig = require('./config/index.js');

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'chai', 'fixture'],

    files: [
      'public/*.js',
      'test/*.js',
      'public/*.html'
    ],

    exclude: [
    
    ],

    preprocessors: {
      'public/*.html': ['html2js']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: appConfig.autoWatch,

    // autoWatch: false,

    browsers: appConfig.browsers,

    // browsers: ['Chrome'],

    singleRun: appConfig.singleRun

    //singleRun: true
  })
}
