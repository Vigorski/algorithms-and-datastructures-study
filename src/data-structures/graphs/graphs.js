import { Stack } from "../stack.js";
import { Queue } from "../queue.js";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    for (const edge of this.adjacencyList[vertex]) {
      this.removeEdge(edge, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }

  DFSRecursive(startingVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    if (!adjacencyList[startingVertex]) return null;

    (function dfs(vertex) {
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour); // need return due to forEach
        }
      });
    })(startingVertex);

    return result;
  }

  DFSIteratively(startingVertex) {
    const stack = new Stack();
    const results = [];
    const visited = {};
		let current;

    stack.push(startingVertex);

    while (stack.length) {
       current = stack.pop();

      if (!visited[current]) {
        visited[current] = true;
        results.push(current);

        if (this.adjacencyList[current].length !== 0) {
          for (const neighbour of this.adjacencyList[current]) {
            stack.push(neighbour);
          }
        }
      }
    }

    return results;
  }

	BFS(startingVertex) {
		const results = [];
		const visited = {};
		const queue = new Queue();
		let current;
		queue.enqueue(startingVertex);

		while(queue.length) {
			current = queue.dequeue();

			if (!visited[current]) {
				visited[current] = true;
				results.push(current);
	
				for (const neighbour of this.adjacencyList[current]) {
					queue.enqueue(neighbour)
				}
			}
		}

		return results;
	}
}

window.g = new Graph();
window.g2 = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g2.addVertex("Moscow");
g2.addVertex("Tokyo");
g2.addVertex("Sydney");
g2.addVertex("New York");
g2.addVertex("Berlin");
g2.addVertex("Rio");

g2.addEdge("Moscow", "Tokyo");
g2.addEdge("Moscow", "Sydney");
g2.addEdge("Tokyo", "New York");
g2.addEdge("Sydney", "Berlin");
g2.addEdge("New York", "Berlin");
g2.addEdge("New York", "Rio");
g2.addEdge("Berlin", "Rio");

// console.log(g.adjacencyList)
// console.log(g.DFSRecursive('A'))
// console.log(g.DFSIteratively("A"));
console.log(g.BFS("A"));
