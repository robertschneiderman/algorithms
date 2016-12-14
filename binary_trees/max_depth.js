// Given a binary tree, flatten it to a linked list in-place.

// For example,
// Given

//          1
//         / \
//        2   5
//       / \   \
//      3   4   6
             //  \
             //   7


class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}
rgcOf2 = new Node(7)
let lcOf2 = new Node(6, null, rgcOf2);
let rcOf1 = new Node(4);
let lcOf1 = new Node(3);
let c2 = new Node(5, null, lcOf2)
let c1 = new Node(2, lcOf1, rcOf1)
let parent = new Node(1, c1, c2);


var maxDepth = root => {
    let maxDepth = 0;
    let recFnc = (root, count) => {
        if (root && !root.left && !root.right) {
            if (count > maxDepth) maxDepth = count;
            return;
        } 
        recFnc(root.left, count++);
        recFnc(root.right, count++);
    }
    recFnc(root, 0);
    return maxDepth;
};


console.log(maxDepth(parent));