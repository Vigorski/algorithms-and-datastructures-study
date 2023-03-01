import { swap, performanceTimer } from "../utility/helpers.js";

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    
    if(i !== smallest) swap(arr, i, smallest);
  }

  return arr;
}

performanceTimer(selectionSort, 200);

// console.log(selectionSort([31, 30, 3, 2, 40, 30, 15, 22, 8]));