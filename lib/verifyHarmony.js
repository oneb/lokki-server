'use strict'

var logger = require('./logger');

// XXX
var util = require('util');
console.log('aaa');

try {
    eval('var [a, b] = [1, 2]');
} catch (err) {

    if (err.name === 'SyntaxError') {
        logger.error(
            '\n' +
            '\n' +
            '        ES6 destructuring not enabled!\n' +
            '\n' +
            '        You must run node with the --harmony_destructuring option\n' +
            '        Tip: alias node=\'node --harmony_destructuring\'\n' +
            '\n' +
            '        The program will now exit\n' 
        );
        process.exit(1);
    } else {
        throw err;
    };
}

// XXX
console.log('bbb');
