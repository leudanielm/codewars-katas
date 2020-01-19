// https://www.codewars.com/kata/51e704f2d8dbace389000279

function arraysSimilar(arr1, arr2) {
  // TODO: Implement your arraysSimilar
  arr1.sort();
  arr2.sort();
  for ( var i = 0; i < arr2.length; i++ ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
}
