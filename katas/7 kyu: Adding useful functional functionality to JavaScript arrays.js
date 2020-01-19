// https://www.codewars.com/kata/52195c9bb576caf14200007f

Array.range = function(start, count) {
  var a = [];
  while (count--) { a.push(start++); }
  
  return a;
}

Array.prototype.sum = function() {
  return ( !this.length ) ? 0 :
  Array.prototype.reduce.call( this, function( sum, element ) {
      return sum + element;
  });
}
