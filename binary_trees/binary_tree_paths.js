// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let gcOf1 = new Node(5);
let c2 = new Node(3)
let c1 = new Node(2, gcOf1)
let parent = new Node(1, c1, c2);


const binaryTreePaths = tree => {
    let paths = [];

    let recursiveFnc = (node, path) => {
        path.push(node.value);

        if (!node.left && !node.right) return paths.push(path);

        let pathDup = path.slice(0)

        if (node.left) recursiveFnc(node.left, path);
        if (node.right) recursiveFnc(node.right, pathDup);
    }

    recursiveFnc(tree, []);

    return paths;
}

let result = binaryTreePaths(parent);

console.log('result: ', result);