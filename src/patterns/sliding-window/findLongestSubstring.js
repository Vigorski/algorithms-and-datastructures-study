// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest
// substring with all distinct characters.

function findLongestSubstring(str) {
  if (str.length === 0 || typeof str !== 'string') return 0;

  const uniqueChars = {};
  let start = 0;
  let end = 0;
  let max = -Infinity;
  let tempMax = 0;

  while (end < str.length) {
    if(str[end] in uniqueChars) {
      delete uniqueChars[str[start]];
      start++;
      tempMax--;
    } else {
      uniqueChars[str[end]] = true;
      end++;
      tempMax++;
    }

    if(tempMax > max) {
      max = tempMax;
    }
  }
  
  return max;
}

// findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
