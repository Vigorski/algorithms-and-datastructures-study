function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  const sorted = args.sort();

  for (let i = 1; i < sorted.length; i++) {
    if(args[i] === args[i - 1]) {
      return true
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 