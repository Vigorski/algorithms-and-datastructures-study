class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    const oldHead = this.head;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let midNode = this.head;

    while (i < index) { 
      midNode = midNode.next;
      i++;
    }

    return midNode;
  }

  set(index, val) {
    let node = this.get(index);
    if(node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let node = this.get(index - 1);  
    let remaining = node.next;
    let newNode = new Node(val);
    newNode.next = remaining;
    node.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let node = this.get(index - 1);
    let removed = node.next;
    node.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  log() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push("hello there");
list.push("you are number 101 in this cell");
list.push("get comfy!");
list.push("<3");
