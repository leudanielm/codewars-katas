// https://www.codewars.com/kata/513e7e1aee7d36073e00000d

// extend Array so that it supports our new each() method
Array.prototype.each = function(callback) {
  var that = this;
  return Array.prototype.forEach.call(that, function(item, index) {
      if (callback.apply(that, [item,index]) === true) {
        that.splice(0,index);
        return;
      }
  });
}
