// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

const numSquares = (n) => {
  debugger;
  if (isPerfectSquare(n)) return 1;
  let leastCount = (n+1);
  let perfectSquares = getPerfectSquares(n);

  const getLeastCount = (sum, count) => {
    if (sum === n) {
      if (leastCount > count) leastCount = count;
      return;
    } else if (sum > n) return;

    count++;

    perfectSquares.forEach(square => {

      getLeastCount(sum + square, count);
    });

  };
  getLeastCount(0, 0);

  return leastCount;
};

const getPerfectSquares = n => {
  let ps = [];
  while (n > 0) {
    if (isPerfectSquare(n)) {
      ps.push(n);
    }
    n--;
  }
  return ps;
}

const isPerfectSquare = (n) => {
  return (Math.sqrt(n) === Math.floor(Math.sqrt(n)));  
}

// console.log("isPerfectSquare(8):", isPerfectSquare(8));

let t1 = numSquares(1);
let t2 = numSquares(9);
let t3 = numSquares(10);
let t4 = numSquares(40);
// let t5 = numSquares(200);


console.log("t1:", t1);
console.log("t2:", t2);
console.log("t3:", t3);
console.log("t4:", t4);
// console.log("t5:", t5);