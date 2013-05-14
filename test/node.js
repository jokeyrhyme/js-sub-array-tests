/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*global suite:true, test:true, suiteSetup:true, suiteTeardown:true, setup:true,
 teardown:true*/ // Mocha
'use strict';

// Node.JS standard modules

var fs, path;
fs = require('fs');
path = require('path');

// 3rd-party modules

var chai, assert;

chai = require('chai');
assert = require('chai').assert;

// this module

fs.readdirSync(path.join(__dirname, '..', 'lib')).map(function (filename) {
  return {
    filename: filename,
    constructor: require(path.join(__dirname, '..', 'lib', filename))
  };
}).forEach(function (mod) {
  var SubArray = mod.constructor;
  suite(mod.filename, function () {
    require(path.join(__dirname, 'tests'))(SubArray, suite, test, assert);
  });
});
