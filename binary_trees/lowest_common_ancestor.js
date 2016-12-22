// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______3______
//        /              \
//     ___5__          ___1__
//    /      \        /      \
//    6      _2       0       8
//          /  \
//          7   4
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2.


class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let gcOf1b = new Node(4);
let gcOf1a = new Node(7);
let rcOf2 = new Node(8);
let lcOf2 = new Node(0);
let rcOf1 = new Node(2, gcOf1a, gcOf1b);
let lcOf1 = new Node(6);
let c2 = new Node(1, lcOf2, rcOf2)
let c1 = new Node(5, lcOf1, rcOf1)
let parent = new Node(3, c1, c2);


let result;

const lowestCommonAncestor = (root, p, q) => {
    if (root.value === p.value || root.value === q.value) return true;

    let l = root.left && lowestCommonAncestor(root.left, p, q)
    let r = root.right && lowestCommonAncestor(root.right, p, q)

    if (l && r) result = root;

    return (l || r);
}

lowestCommonAncestor(parent, lcOf1, gcOf1b);

console.log('result.value: ', result.value);