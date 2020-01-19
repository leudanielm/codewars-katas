// https://www.codewars.com/kata/51689e27fe9a00b126000004

function formatWords(words){
  words = (words || []).filter(function(k){ return k.length > 0; }),
  ln = words.length;
  if ( ln === 0 ) { return ''; }
  if ( ln === 1 ) { return words[0]; }
  if ( ln === 2 ) { return words.join(' and '); }
  if ( ln > 2 ) {
    return words.slice(0, ln - 1).join(', ') +
           ' and ' + words[ln - 1]
  }
}
