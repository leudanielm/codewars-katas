// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  var m = minorWords ?
  ( /\s/g.test(minorWords)
    ? minorWords.split(/\s/) : minorWords.split('') )
    : false,
  r = (m && minorWords !== title) 
    ? '(?!'+ m.join('|') +')(\\b\\S)' 
    : '(\\b\\S)',
  t = title.toLowerCase()
           .replace(new RegExp(r,'gi'), function(e, f){
              return e.toUpperCase();
           });
           
  return m && m.indexOf(t.split(/\s/g)[0]) > -1
    ? t[0].toUpperCase() + t.substring(1, t.length)
    : t;
}

