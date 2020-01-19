// https://www.codewars.com/kata/51f9d3db4095e07f130001ee

var compose = function() {
  if ( 'undefined' === typeof arguments[0] ) return;
  if ( arguments.length === 1 ) return arguments[0];
  var args = Array.prototype.slice.apply(arguments),
      value = args[0],
      fns = args.slice(1),
      prev = args[1].call(null, value);
  
  for ( var i = 1, ln = fns.length; i < ln; i++ ) {
    prev = fns[i].call(null, prev);
  }
  
  return prev;

}
