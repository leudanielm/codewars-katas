// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  return str.split(/\s/g).map(function(i) {
    var l = i.length;
    return i.substring(1, l) +
    i.substring(0, 1) + 'ay';
  }).join(' ');
}
