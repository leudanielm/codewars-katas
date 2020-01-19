// https://www.codewars.com/kata/521ef596c106a935c0000519

function prime(num) {
 if (num===2){ return [num]; }
  var a = [];
  for (var i = 2; i <= num; i++) {
    if(is_prime(i)) {
      a.push(i);
    }
  }
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  function is_prime(num) {
    var sq = Math.sqrt(num),
        result = true;
    for (var i = 2; i <= sq; i++) {
      if (num % i === 0) {
         result = false;
      }
    }
    return result;
  }
  
  return a;
}
