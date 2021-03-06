/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*global suite:true, test:true, suiteSetup:true, suiteTeardown:true, setup:true,
 teardown:true*/ // Mocha
'use strict';

// this module

// http://stackoverflow.com/questions/1606797
function construct(constructor, args) {
  function F() {
    return constructor.apply(this, args);
  }
  F.prototype = constructor.prototype;
  return new F();
}

// exports

module.exports = function (SubArray, suite, test, assert) {
      [
        [],
        ['a', 'b', 'c']
      ].forEach(function (args) {
          suite('constructed with: ' + JSON.stringify(args), function () {
            var subArray;

            test('constructed without incident', function () {
              subArray = construct(SubArray, args);
              assert(true, 'made it without throwing errors');
            });

            test('detectable as an Array', function () {
              assert.equal(Object.prototype.toString.call(subArray),
                '[object Array]');
            });

            test('inherits from global Array', function () {
              assert(subArray instanceof Array, 'instanceof Array');
            });

            test('initial length is correct', function () {
              assert.equal(subArray.length, args.length);
            });

            test('"last" method returns last of initial args', function () {
              var last = args.length ? args[args.length - 1] : undefined;
              assert(subArray.last, '"last" method exists');
              assert.equal(subArray.last(), last);
            });

            test('"push" adds a new last element', function () {
              subArray.push('last');
              assert(subArray.last, '"last" method exists');
              assert.equal(subArray.last(), 'last');
            });

            test('length is incremented post-"push"', function () {
              assert.equal(subArray.length, args.length + 1);
            });

            test('"pop" returns last element', function () {
              assert.equal(subArray.pop(), 'last');
            });

            test('"last" method returns last of initial args', function () {
              var last = args.length ? args[args.length - 1] : undefined;
              assert(subArray.last, '"last" method exists');
              assert.equal(subArray.last(), last);
            });

            test('length is decremented post-"pop"', function () {
              assert.equal(subArray.length, args.length);
            });

            test('setting length higher changes highest index', function () {
              subArray.length = 10;
              assert.equal(subArray.length, 10);
              subArray.push('last');
              assert.equal(subArray.length, 11);
              assert.equal(subArray[10], 'last');
            });

            test('setting length lower changes highest index', function () {
              subArray.length = 0;
              assert.equal(subArray.length, 0);
              subArray.push('last');
              assert.equal(subArray.length, 1);
              assert.equal(subArray[0], 'last');
            });

            test('add an element by direct index', function () {
              subArray[0] = 'abc';
              assert.equal(subArray.length, 1, 'length is updated');
              assert.equal(subArray[0], 'abc', 'element was stored/retrieved');
              assert.equal(subArray.last(), 'abc', '"last" finds element');
            });

            test('add an element by higher direct index', function () {
              subArray[2] = 'abc';
              assert.equal(subArray.length, 3, 'length is updated');
              assert(!subArray[1], 'skipped index is falsey');
              assert.equal(subArray[2], 'abc', 'element was stored/retrieved');
              assert.equal(subArray.last(), 'abc', '"last" finds element');
            });
          });
        });
    }
