/*
Copyright (c) 2014-2015 F-Secure
See LICENSE for details
*/

'use strict';

// this must be set before config.js is loaded
process.env.NODE_ENV = 'test';

// (this uses config.js)
require('./lib/verifyHarmony');

var reporter = require('nodeunit').reporters.default;

process.on('uncaughtException', function(err) {
    throw err;
});

global.lokkiUnitTestingMode = {};// just inform everyone that we are in "run unittests" mode

// Start all tests
reporter.run(['locmap/test', 'test'], null, function(err) {
    // Redis connection should be closed after tests are run, otherwise process will hang
    var db = require('./lib/db');
    db.quit();
    if (err) {
        throw err;
    }
    
});
