// https://www.codewars.com/kata/5121303128ef4b495f000001

function greet(myName, yourName){
  return "Hello " + yourName + ", my name is " + myName;
}
function Person(myName) { this.name = myName; }
Person.prototype = { 'greet': function(yourName) { return 'Hello ' + yourName + ', my name is ' + this.name; } }
