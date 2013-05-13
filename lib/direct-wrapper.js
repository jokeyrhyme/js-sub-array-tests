/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
'use strict';

// this module

function SubArray() {
  var arr, args;
  args = Array.prototype.slice.apply(arguments);
  arr = [];
  arr.push.apply(arr, args);

  arr.last = function () {
    return this.length ? this[this.length - 1] : undefined;
  };

  return arr;
}

// exports

module.exports = SubArray;
