// https://www.codewars.com/kata/525d8c20915a399b5600087b

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  
  if ( this.words.filter(function(word) {
       return word.length === pattern.length;
     }).length === 0 ) {
       return [];
     }
  
  if ( /^\?+$/.test(pattern) ) {
     return this.words.filter(function(word) {
       return word.length === pattern.length;
     });
  }
  
  var regex = new RegExp(pattern.replace(/\?/g, '.'), 'i')
  return this.words.filter(function(word) {
      return regex.test(word) && pattern.length === word.length;    
  });
  
}
