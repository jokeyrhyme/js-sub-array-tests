/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
'use strict';

// this module

var SubArray = (function () { // (C) Andrea Giammarchi - Mit Style License

  function SubArray(length) {
    if (arguments.length === 1 && typeof length === "number") {
      /*jslint bitwise:true*/
      this.length = -1 < length && length === length << 1 >> 1 ?
          length :
          this.push(length);
      /*jslint bitwise:false*/
    } else if (arguments.length) {
      this.push.apply(this, arguments);
    }
  }

  function Array() {}
  Array.prototype = [];

  SubArray.prototype = [];
  SubArray.prototype.length = 0;
  SubArray.prototype.toString = function () {
    return this.slice(0).toString();
  };

  SubArray.prototype.constructor = SubArray;
  return SubArray;
}());

SubArray.prototype.last = function () {
  return this.length ? this[this.length - 1] : undefined;
};

// exports

module.exports = SubArray;
