// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str) {
  const ipArray = str.split('.').map(Number);
  return !/\s/.test(str) && ipArray.length === 4 && ipArray.every(b => b >= 0 && b <= 255);
}

