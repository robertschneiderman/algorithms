// cycle, square, and add each digit in while loop
// encase while loop in while loop that sees if result === 1 (return true)
// store all result variables and return false if a input has ever been an ouput

const isHappy = (num) => {
  let outputs = [];
  while (num !== 1) {
    num = happyOp(num);
    if (outputs.filter(output => output === num).length > 0) return false;
    outputs.push(num);
  }
  return true;
}

const happyOp = num => {
  let result = 0;
  let left = num;
  while (left > 0) {
    let digit = left % 10;
    result += Math.pow(digit, 2);
    left = Math.floor(left / 10);
  }
  return result;
};

let t1 = isHappy(4);
console.log("t1:", t1);

// 7
// 13
// 10
// 1
