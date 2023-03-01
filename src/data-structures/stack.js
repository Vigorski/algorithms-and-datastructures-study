class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // the name is push, but behavior is like unshift
  push(val) {
    let node = new Node(val);
    if(this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let oldStack = this.first;
      node.next = oldStack;
      this.first = node;
    }

    return ++this.length;
  }
  
  // the name is pop, but behavior is like shift
  pop() {
    if(this.length === 0) return null;
    let temp = this.first;
    if(this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return temp.val;
  }
}

const stack = new Stack();

stack.push('first')
stack.push('second')
stack.push('third')
stack.push('fourth')