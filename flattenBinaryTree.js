// Given a binary tree, flatten it to a linked list in-place.

// For example,
// Given

//          1
//         / \
//        2   5
//       / \   \
//      3   4   6
// The flattened tree should look like:
//    1
//     \
//      2
//       \
//        3
//         \
//          4
//           \
//            5
//             \
//              6

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let lcOf2 = new Node(6);
let rcOf1 = new Node(4);
let lcOf1 = new Node(3);
let c2 = new Node(5, null, lcOf2)
let c1 = new Node(2, lcOf1, rcOf1)
let parent = new Node(1, c1, c2);

// dfs through binary tree

const flattenBinaryTree = root => {
    let nodes = [];

    let recursiveFnc = (nodes, root) => {
        if (!root.left && !root.right) return [root];

        if (root.left) return nodes.concat(recursiveFnc(nodes, root.left));
        if (root.right) return nodes.concat(recursiveFnc(nodes, root.right));
    }

    recursiveFnc(nodes, root);

    return nodes;
}

let nodes = flattenBinaryTree(parent);

console.log(nodes);

nodes.forEach(node => {
    console.log(node.value);
})

// let node = parent;
// while (node) {
//     console.log(node);
//     node = node.right;
// }