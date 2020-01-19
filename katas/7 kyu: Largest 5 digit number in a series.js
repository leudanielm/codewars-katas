// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits){
  var sols = [];
  for (var i = 0; i < digits.length; i++) {
    sols.push(parseInt(digits.substring(i, i+5), 10));
  }
  
  return Math.max.apply(Math, sols);
}
