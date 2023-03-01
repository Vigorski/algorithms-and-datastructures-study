/////////////////////////////////////////
// CAPITALIZE
/////////////////////////////////////////

function capitalizeFirst (arr) {
  const first = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  if(arr.length <= 1) return first;

  return [first].concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


/////////////////////////////////////////
// FLATTEN
/////////////////////////////////////////

function nestedEvenSum (obj, sum = 0) {
  for (const key in obj) {
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
     sum += nestedEvenSum(obj[key]) 
    } else if(Number.isInteger(obj[key]) && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


/////////////////////////////////////////
// CAPITALIZE ALL LETTERS
/////////////////////////////////////////

function capitalizeWords (arr) {
  if(arr.length === 0) return [];
  return [arr.shift().toUpperCase()].concat(capitalizeWords(arr));
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


/////////////////////////////////////////
// STRINGIFY NUMBERS
/////////////////////////////////////////

function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if(typeof obj[key] === 'number') {
      newObj[key] = String(obj[key]);
    } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// console.log(stringifyNumbers(obj))

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }


/////////////////////////////////////////
// collectStrings
/////////////////////////////////////////

function collectStrings(obj) {
  let strArr = [];
  
  for (const key in obj) {
    if(typeof obj[key] === 'string') {
      strArr.push(obj[key]);
    } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      strArr = strArr.concat(collectStrings(obj[key]))
    }
  }

  return strArr;
}

const obj4 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj4)) // ["foo", "bar", "baz"])