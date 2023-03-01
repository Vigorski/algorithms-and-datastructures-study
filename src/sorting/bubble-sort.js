import { swap, performanceTimer } from "../utility/helpers.js";

let count = 0;

function bubbleSort(arr) {
  let noSwaps = true;

  for (let i = arr.length - 1; i >= 0; i--) {
    count++;
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        count++;
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if(noSwaps) break;
  }

  return arr
}

performanceTimer(bubbleSort, 200);

// console.log(bubbleSort([31, 30, 3, 2, 40, 30, 15, 22, 8]));
// console.log(bubbleSort([40, 2, 3, 8, 15, 22, 30, 30, 31]));

console.log(count);