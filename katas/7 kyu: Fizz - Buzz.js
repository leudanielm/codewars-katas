// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc

function solution(number){
  var a = 0, b = 0, c = 0;
  Array.apply(null, {length:number})
       .map(Number.call, Number)
       .filter(function(e){ return e > 0; })
       .forEach(function(e, i) {
          if ( e % 3 === 0 && e % 5 !== 0 ) { a++; }
          if ( e % 3 !== 0 && e % 5 === 0 ) { b++; }
          if ( e % 3 === 0 && e % 5 === 0 ) { c++; }
       });
  
  return [a, b, c];
}
