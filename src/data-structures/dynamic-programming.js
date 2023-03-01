// Memoized results here
const fibMemoData = [undefined, 1, 1];

function fibMemo(n) {
	if (fibMemoData[n]) return fibMemoData[n];
	// no need to check base numbers due to memo
	// if(n <= 2) return 1;
	const currentSum = fibMemo(n - 1) + fibMemo(n - 2);
	fibMemoData[n] = currentSum;
	return currentSum;
}

function fibTabulation(n) {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}

console.log(fibMemo(6));
console.log(fibTabulation(50));