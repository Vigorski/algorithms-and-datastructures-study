import { swap } from "../utility/helpers.js";

export class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);

		// Bubbling values up
		while (this.values[parentIndex] < val) {
			swap(this.values, parentIndex, index);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	extractMax() {
		// First remove max node and swap last node in its place
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			// now we keep swapping nodes from the top down
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
