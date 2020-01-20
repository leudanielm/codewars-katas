// https://www.codewars.com/kata/583d10c03f02f41462000137

function maxSum(arr, range) {
  const sums = [];
  const lastSum = 0;
  const size = range.length;
  let i = 0;
    
  while (i < size) {
    const [start, end] = range[i]; 
    sums[i] = sumRange(
      arr,
      start,
      end
    );
    i++;
  }
  
  return Math.max(...sums);
}

function sumRange(arr, start, end) {
  let sum = 0;
  let i = start;
  while (i <= end) {
    sum += arr[i];
    i++;
  }
  
  return sum;
}
