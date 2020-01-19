// https://www.codewars.com/kata/5168b125faced29f66000005

function solution(fullText, searchText){
  return (fullText.match(new RegExp(searchText, 'gi')) || []).length;
}
