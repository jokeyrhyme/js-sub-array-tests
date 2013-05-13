/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
'use strict';

// this module

/**
 * represents a collection of files
 * http://stackoverflow.com/questions/3261587
 * @constructor
 * @param {Array} [files] initial set of File objects
 */
//function FileListing(files) {
//  var arr = [];
//  if (Array.isArray(files)) {
//    arr.push.apply(arr, files);
//  }
//  Object.defineProperties(arr, FileListing.prototype);
//  return arr;
//}
//FileListing.prototype = {};

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
