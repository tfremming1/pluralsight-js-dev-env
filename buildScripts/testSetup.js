//This file isn't transpiled, so must use CommonJS and ES5

//Restier babel to transpile before our trests run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};