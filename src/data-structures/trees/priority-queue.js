import { swap } from "../../utility/helpers.js";

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// with MinBinaryHeap
export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority)
    this.values.push(node);
    this.bubbleUp();
  }
  
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(element.priority >= parent.priority) break;
      swap(this.values, parentIdx, idx);
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const elementPriority = this.values[0].priority;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx].priority;
        if (leftChild < elementPriority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx].priority;
        if (
          (swapIdx === null && rightChild < elementPriority) ||
          (swapIdx !== null && rightChild < leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      swap(this.values, idx, swapIdx);
      idx = swapIdx;
    }
  }
}

const ER = new PriorityQueue();

ER.enqueue('Headache', 3);
ER.enqueue('Upset stomach', 2);
ER.enqueue('Abdominal gunshot wound', 0);
ER.enqueue('Rash', 3);
ER.enqueue('Feaver', 2);
ER.enqueue('Concussion', 1);
ER.enqueue('Carcrash', 0);

console.log(ER.values);