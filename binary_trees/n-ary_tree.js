// N-ary Tree, find the longest path where numbers are increasing

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

let parent = new Node(2);
let c1 = new Node(1)
let gcOf1 = new Node(5);
let ggcOf1 = new Node(6);
let c2 = new Node(3)
let gcOf2 = new Node(4);

parent.children.push(c1);
c1.children.push(gcOf1);
gcOf1.children.push(ggcOf1);
parent.children.push(c2);
c2.children.push(gcOf2);


const longestPath = node => {

  let max = 0;

  const traverse = (node, count) => {
    count++;
    if (count > max) max = count; 
    if (node.children === []) return;

    node.children.forEach(child => {
      if (child.value <= node.value) {
        traverse(child, 0);
      } else {
        traverse(child, count);
      }
    });
  };
  traverse(node, 0);

  return max;

};

let result = longestPath(parent);

console.log("result:", result);
