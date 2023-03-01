// naive search substring

function findSubString(base, str) {
  let count = 0;

  for (let i = 0; i < base.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if(base[i + j] !== str[j]) break;
      if(j === str.length - 1) count++;
    }
  }

  // for (let i = 0; i < base.length; i++) {
  //   if(base.slice(i, i + str.length) === str) count++;
  // }

  return count;
}

console.log(findSubString('samehereomgomg', 'omg'));