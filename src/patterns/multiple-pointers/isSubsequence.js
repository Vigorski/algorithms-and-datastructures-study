// Write a function called isSubsequence which takes in two strings and checks whether the 
// the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if(str2.length < str1.length) return false;
  if(str1.legnth === 0) return false;

  str1 = str1.toLowerCase().replace( /\s/g, '');
  str2 = str2.toLowerCase().replace( /\s/g, '');

  let y = 0;

  for (let i = 0; i < str2.length; i++) {
    if(str2[i] === str1[y]) {
      y++;
    }

    if(y === str1.length) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('siN g', 'ssssssssI, #n! gggggg')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)