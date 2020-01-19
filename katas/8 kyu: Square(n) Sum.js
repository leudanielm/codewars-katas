// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
  var s = 0;
  numbers.map(function(i,j) {
    s+= i*i;
  });
  
  return s;
}
