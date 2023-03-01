/////////////////////////////////////////
//REVERSE STRING
/////////////////////////////////////////

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'


/////////////////////////////////////////
// FIND PALINDROME

function isPalindrome(str){
  if(str.length <= 1) return true;
  if(str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


/////////////////////////////////////////
// SAMPLE INPUT / OUTPUT
/////////////////////////////////////////

function someRecursive(arr, cb){
  if(arr.length === 0) return false;
  if (cb(arr[arr.length - 1])) return true;

  return someRecursive(arr.slice(0 , -1), cb);
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false


/////////////////////////////////////////
// FLATTEN
/////////////////////////////////////////

function flatten(arr){
  if(!Array.isArray(arr)) return [arr];
  if(arr.length === 0) return [];
  
  return [...flatten(arr[0]), ...flatten(arr.slice(1))]
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]