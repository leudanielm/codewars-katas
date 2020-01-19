// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
  // TODO: complete
  return new RegExp(ending + '$').test(str);
}
