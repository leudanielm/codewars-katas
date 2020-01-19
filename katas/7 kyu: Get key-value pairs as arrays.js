// https://www.codewars.com/kata/515dfd2f1db09667a0000003

function keysAndValues(data){
  // TODO: complete
  var k = Object.keys(data);
  return [k, k.map(function(i){return data[i]})];
}
