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

    preprocessors: {
      'public/*.html': ['html2js']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: appConfig.autoWatch,

    browsers: appConfig.browsers,

    singleRun: appConfig.singleRun
  })
}
