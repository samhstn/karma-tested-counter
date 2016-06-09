'use strict';

var configSource = process.env.ENV || 'chrome';

module.exports = require('./env/' + configSource);
