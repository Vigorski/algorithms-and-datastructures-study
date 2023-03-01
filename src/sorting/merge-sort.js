import { performanceTimer } from "../utility/helpers.js";

function merge(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i++]);
    } else {
      mergedArr.push(arr2[j++]);
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i++]);
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j++]);
  }

  return mergedArr;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
 
performanceTimer(mergeSort, 1000000);

// console.log(mergeSort([1, 3, 2, -1, 4, 8, 4]));