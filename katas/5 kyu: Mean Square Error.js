// https://www.codewars.com/kata/51edd51599a189fe7f000015

var solution = function(firstArray, secondArray) {
  if ( firstArray.length !== secondArray.length ) {
    throw Error("The arrays must have the same length.");
  }
  
  return firstArray
        .map(function(i,j) { return Math.pow(Math.abs(i-secondArray[j]),2); })
        .reduce(function(i,j){return i+j;})/firstArray.length;
}
