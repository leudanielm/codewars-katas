// https://www.codewars.com/kata/520d9c27e9940532eb00018e

function solution(){
 // return true if this method is called with duplicate argument values 
 var a = false, 
     b = Array.prototype.sort.call(arguments);
     console.log(b);
     Array.prototype.reduce.call(b, function(p,c) {
         if ( p === c ) { a = !a; }
         return c;
     });
 
 return a;
}
