// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

const addDigitsTillOne = num => {
  if (num < 10) return num;
  
  num = addDigits(num);
  
  return addDigitsTillOne(num);
}

const addDigits = num => {
  let sum = 0;
  let left = num;
  while (left > 0) {
    let digit = left % 10;
    sum += digit;
    left = Math.floor(left / 10);
  }
  return sum;
}

let r = addDigitsTillOne(589);

console.log("r:", r);