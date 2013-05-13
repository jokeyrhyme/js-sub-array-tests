/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
'use strict';

// this module

var Stack = (function () { // (C) Andrea Giammarchi - Mit Style License

  function Stack(length) {
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

  Stack.prototype = [];
  Stack.prototype.length = 0;
  Stack.prototype.toString = function () {
    return this.slice(0).toString();
  };

  Stack.prototype.constructor = Stack;
  return Stack;
}());

Stack.prototype.last = function () {
  return this.length ? this[this.length - 1] : undefined;
};

// exports

module.exports = Stack;
