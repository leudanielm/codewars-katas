// https://www.codewars.com/kata/5966847f4025872c7d00015b

function averageString(str) {
  const numbersArr = str.split(/\s/).map(stringToNumber);
  if (!str || Math.max(...numbersArr) > 9) {
    return 'n/a';
  }
  
  return numberToString(avg(numbersArr));
}

const NUMBERS = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const NUMBERS_MAP = 
  NUMBERS
    .reduce((memo, number, index) => {
      memo[number] = index;
      return memo;
    }, {});

function stringToNumber(str) { return isNaN(NUMBERS_MAP[str]) ? 10 : NUMBERS_MAP[str]; }
function numberToString(num) { return NUMBERS[num]; }
function avg(arr) {
  return Math.floor(arr.reduce((memo, item) => memo + item, 0) / arr.length);
}

