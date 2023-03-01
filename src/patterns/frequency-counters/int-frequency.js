function sameFrequency(int1, int2){
	const intFreq = {}
	const int1AsArray = int1.toString();
	const int2AsArray = int2.toString();

	if(int1AsArray.length !== int2AsArray.length) return false;

	for(let item of int1AsArray){
		intFreq[item] = (intFreq[item] || 0) + 1;
	}

	for(let item of int2AsArray){
		if(!(item in intFreq)) {
			return false;
		} else if(intFreq[item] === 0) {
			return false;
		} else {
			intFreq[item]--;
		}
	}

	return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false