/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Underscore.JS and __dirname
/*jslint plusplus:true*/
'use strict';

// this module

// https://github.com/kangax/array_subclassing
var makeSubArray;
makeSubArray = (function () {

  var MAX_SIGNED_INT_VALUE, hasOwnProperty;
  MAX_SIGNED_INT_VALUE = Math.pow(2, 32) - 1;
  hasOwnProperty = Object.prototype.hasOwnProperty;

  /*jslint bitwise:true*/
  function toUint32(value) {
    return value >>> 0;
  }

  /*jslint bitwise:false*/

  function getMaxIndexProperty(object) {
    var maxIndex = -1, isValidProperty, prop;

    /*jslint forin:true*/
    for (prop in object) {

      isValidProperty = (String(toUint32(prop)) === prop &&
          toUint32(prop) !== MAX_SIGNED_INT_VALUE &&
          hasOwnProperty.call(object, prop));

      if (isValidProperty && prop > maxIndex) {
        maxIndex = prop;
      }
    }
    /*jslint forin:false*/
    return maxIndex;
  }

  return function (methods) {
    var length = 0, i, len;
    methods = methods || { };

    methods.length = {
      get: function () {
        var maxIndexProperty = +getMaxIndexProperty(this);
        return Math.max(length, maxIndexProperty + 1);
      },
      set: function (value) {
        var constrainedValue = toUint32(value);
        if (constrainedValue !== +value) {
          throw new RangeError();
        }
        for (i = constrainedValue, len = this.length; i < len; i++) {
          delete this[i];
        }
        length = constrainedValue;
      }
    };
    methods.toString = {
      value: Array.prototype.join
    };
    return Object.create(Array.prototype, methods);
  };
}());

var SubArray = (function () {
  var methods = {
    last: {
      value: function () {
        return this[this.length - 1];
      }
    }
  };
  return function (length) {
    var arr = makeSubArray(methods);
    if (arguments.length === 1) {
      arr.length = length;
    } else {
      arr.push.apply(arr, arguments);
    }
    return arr;
  };
}());

SubArray.prototype.last = function () {
  return this.length ? this[this.length - 1] : undefined;
};

// exports

module.exports = SubArray;
