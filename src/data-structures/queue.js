class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// has similar behavior to unshift and pop
export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) return null;

    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = temp.next;
    this.length--;
    return temp.val;
  }
}

let queue = new Queue();

queue.enqueue('FIRST')
queue.enqueue('2')
queue.enqueue('third')