import { swap, performanceTimer } from "../utility/helpers.js";

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot >= arr[i]) {
      swap(arr, ++swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

performanceTimer(quickSort, 1000000);

// console.log(quickSort([10, -1, 42, 18, 2, 14]));
