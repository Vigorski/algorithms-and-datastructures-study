export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function swap(arr, id1, id2) {
  const temp = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = temp;
}

export function performanceTimer(fn, items) {
  const initialArr = Array.from(Array(items*2).keys());
  const shuffled = shuffle(initialArr);
  const bigArr = shuffled.slice(0, Math.ceil(shuffled.length / 2));

  const start = performance.now();
  console.log(fn(bigArr));
  const end = performance.now();
  console.log(end - start);
}
