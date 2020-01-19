// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
      b = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
  
  return str.replace(/\S/g, function(letter) {
    return a.indexOf(letter) > -1 ? b[a.indexOf(letter)] : letter;
  });
}
