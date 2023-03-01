function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([1,5,23,42,77], 88));