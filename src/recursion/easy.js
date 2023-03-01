function productOfArray(arr) {
  if(arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}

function factorial(num){
  if(num === 0) return 1;
  
   return num * factorial(num-1);
}

function fib(n){
  // add whatever parameters you deem necessary - good luck!
  let i = 1;
  
  function findSequence (prev, next) {
      if(i++ === n){
        return next;
      };
      
    return findSequence(next, prev + next);
  }
  
  return findSequence(0, 1);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465