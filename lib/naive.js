/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
'use strict';

// this module

var SubArray = function () {
  this.push.apply(this, arguments);
  return this;
};
SubArray.prototype = Object.create(Array.prototype);

SubArray.prototype.last = function () {
  return this.length ? this[this.length - 1] : undefined;
};

// exports

module.exports = SubArray;
