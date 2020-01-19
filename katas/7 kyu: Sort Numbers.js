// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solution(nums){
  return (Object.prototype.toString.call(nums) === '[object Array]') ?
          Array.prototype.sort.call(nums, function(x,y){return x-y;}) : [];
}
