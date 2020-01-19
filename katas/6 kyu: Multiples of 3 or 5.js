// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  return Array.apply(null, {length:number}).map(Number.call, Number)
              .filter(function(i){ return i > 0 && (i % 3 === 0 || i % 5 === 0); })
              .reduce(function(p,c){ return p + c; });
}
