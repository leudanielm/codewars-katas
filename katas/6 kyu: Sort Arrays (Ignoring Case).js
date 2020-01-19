// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  var m = {},
      s = names.map(function(i,j){ 
        var k = i.toLowerCase();
        m[k] = i;
        return k;
      }).sort().map(function(i,j) {
        return m[i];
      });
  
  return s;
}

