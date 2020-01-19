// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
  var a = Math.abs, p = function( n ) { return parseInt( n, 10 ); };
  return ( '' + a(number) ).split( '' ).reduce(function( i, j ){ return p( i ) + p( j ); }, 0);
}

