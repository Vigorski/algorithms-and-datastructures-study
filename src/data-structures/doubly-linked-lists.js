class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = null;
    let count = 0;
    const halfListLength = Math.floor(this.length / 2);
    if (index <= halfListLength) {
      count = 0;
      currentNode = this.head;

      while(count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let node = this.get(index, val);
    let prev = node.prev;
    let newNode = new Node(val);
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = node;
    node.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();

    let node = this.get(index);
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();

list.push("hello there");
list.push("you are number 101 in this cell");
list.push("get comfy!");
list.push("<3");
