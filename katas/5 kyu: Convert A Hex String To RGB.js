// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  return function(f) {
    return {
      'r': parseInt(f[0], 16),
      'g': parseInt(f[1], 16),
      'b': parseInt(f[2], 16)
    };
}.call(this, hexString.match(/(([0-9]?[a-f]?){2})/gi).filter(
    function(r) {
      return !!r;
    }
  ));
  
}
