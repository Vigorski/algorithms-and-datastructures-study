class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.occurences = 1;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) {
          current.occurences++;
          break;
        }
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }

    return this;
  }

  // Loop -> less memory
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return false;
  }

  // Recursevely -> less code, more elegant
  find(val, current = this.root) {
    if (current === null) return false;
    if (val === current.val) return current;
    if (val < current.val) {
      return this.find(val, current.left);
    } else {
      return this.find(val, current.right);
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(11);
tree.insert(7);
tree.insert(16);
tree.insert(2);
