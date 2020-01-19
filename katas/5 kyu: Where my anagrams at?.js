// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {  
  var w = word.split('').sort().join('');
  return words.filter(function(value) {
    return (value.split('').sort().join('') === w);         
  });
}
