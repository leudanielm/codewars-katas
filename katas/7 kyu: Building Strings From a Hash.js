// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2

function solution(pairs){
  return Object.keys(pairs).map(function(key){
    return key + ' = ' + pairs[key];
  }).join(',');
}
