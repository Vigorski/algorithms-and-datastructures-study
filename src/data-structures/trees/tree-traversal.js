import { Queue } from "../queue.js";
import { BinarySearchTree } from "./binary-search-tree.js";

class TreeTraversal extends BinarySearchTree {
  // Breadth first search
  BFS() {
    let current = this.root;
    let queue = new Queue();
    let data = [];

    queue.enqueue(current);
    while (queue.length) {
      current = queue.dequeue();
      data.push(current.val);
      if (!!current.left) queue.enqueue(current.left);
      if (!!current.right) queue.enqueue(current.right);
    }

    return data;
  }

	traversal(data, node, order) {
		if (order === "pre") data.push(node.val);
		if (node.left) traversal(node.left);
		if (order === "in") data.push(node.val);
		if (node.right) traversal(node.right);
		if (order === "post") data.push(node.val);
	}

  DFS(order) {
    let data = [];
    this.traversal(data, this.root, order);
    return data;
  }
}

const tree = new TreeTraversal();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFS("pre"));
console.log(tree.DFS("post"));
console.log(tree.DFS("in"));
