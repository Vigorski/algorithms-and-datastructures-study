function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function findRefactored(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        
        if(arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

const initialArr = Array.from(Array(200000).keys());
const shuffled = shuffle(initialArr);
const bigArr = shuffled.slice(0, Math.ceil(shuffled.length / 2)).sort();

const start = performance.now();
console.log(findRefactored(bigArr, number));
const end = performance.now();
console.log('time diff is: ', end - start);
