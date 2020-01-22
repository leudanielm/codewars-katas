// https://www.codewars.com/kata/55b7bb74a0256d4467000070

function properFractions(n) {
  if (n === 1) return 0;
  
  let result = n;
  
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      while (n % i == 0) {
        n /= i;
      }
      result -= result / i;
    }
  }
  
  if(n > 1) {
    result -= result / n;
  }
  
  return result;
}

