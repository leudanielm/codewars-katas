// https://www.codewars.com/kata/513e1e47c600c93cef000001

// create your Animal class like object here
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
Animal.prototype = { 'toString': function() { return this.name + ' is a ' + this.type; } }
