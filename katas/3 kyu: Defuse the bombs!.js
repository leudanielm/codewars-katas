// https://www.codewars.com/kata/54d558c72a5e542c0600060f

// Defuse all of the Bombs!

// Bomb #1
Bomb.diffuse(42);

// Bomb #2
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

// Bomb #3
Bomb.diffuse(BombKey);

// Bomb #4
global.diffuseTheBomb = () => true;
Bomb.diffuse();

// Bomb #5
Bomb.diffuse(3.14159);

// Bomb #6
const currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 4);
Bomb.diffuse(currentDate);

// Bomb #7
Bomb.diffuse(Object.freeze({ key: 43 }));

// Bomb #8
(() => {
  let i = 0;
  const originalValueOf = Object.prototype.valueOf;
  Object.prototype.valueOf = () => { return i === 0 ? (i++ && 9) : 11; };
  Bomb.diffuse({});
  Object.prototype.valueOf = originalValueOf;  
})();

// Bomb #9
(() => {
  let x = 0;
  Math.random = () => x === 0 ? (x++ || 0.5) : 1;
  Bomb.diffuse(42);
})();

// Bomb #10
Array.prototype.toString = function() {
  return this.valueOf().reduce((x, y) => x + y, 0);
};
Bomb.diffuse('eWVz');


console.log( Bomb );
console.log('---');
console.log( Bomb.diffuse.toString() );
