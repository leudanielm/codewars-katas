// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const secondValueIndex = numbers.indexOf(target - number);
    if (secondValueIndex > -1 && secondValueIndex !== i) {
      return [i, secondValueIndex];
    }    
  }
  
  return [];
}
