// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

// For loop goes through perfect squares
// while loop add perfect square until equal or over
//  equal: return count (inside while loop)
//  over: reset count (after while loop)



function numSquares(n) {
  var map = [0],
      i, j, min;
  for( i = 1; i <= n; i++ ){
    j = 1;
    min = i;
    while( j * j <= i ){ // 1*1 <= 1
      min = Math.min(min, 1 + map[i - j * j]); // min = 1, 1 + map[1 - 1*1] -> (1, 1)
      j++; // j = 2
    }
    console.log("map:", map);
    map[i] = min; //[0, 1, 2]
  }
  return map[n];
}

// console.log("isPerfectSquare(8):", isPerfectSquare(8));

// let t1 = numSquares(1);
// let t2 = numSquares(9);
// let t3 = numSquares(10);
let t4 = numSquares(1040);
// let t5 = numSquares(200);


console.log("t1:", t1);
console.log("t2:", t2);
console.log("t3:", t3);
console.log("t4:", t4);
// console.log("t5:", t5);