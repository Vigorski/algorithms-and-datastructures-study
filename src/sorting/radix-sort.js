import { performanceTimer } from "../utility/helpers.js";

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  
  for (let digit = 0; digit < maxDigits; digit++) {
    const distributed = Array.from({length: 10}, () => []);

    for (let i = 0; i < arr.length; i++) {
      distributed[getDigit(arr[i], digit)].push(arr[i]);
    }
    arr = [].concat(...distributed)
  }
  
  return arr;
}

performanceTimer(radixSort, 1000000);

// console.log(radixSort([1, 30, 2, 11, 481, 38, 41]));