// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
// Note:
// n is positive and will fit within the range of a 32-bit signed integer (n < 2^31).

// Input:
// 3
// Output:
// 3

// Input:
// 11
// Output:
// 0

// Explanation:
// The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.


1 * 10 ^ 1
2 * 10 ^ 2
3 * 10 ^ 3

// find which value n is between, then do n - magnitude to find remainder... divide and ceil that by digit in magnitude, also mod that to get the "index" the digit

const nthDigit = n => {
    let digitTrack = -1;
    for (let i = 1; i <= 32; i++) {
        let magnitude = Math.pow(i * 10, i);
        digitTrack += magnitude;
        if (digitTrack > n) {
            digitTrack -= magnitude;
            let difference = n - digitTrack;
            let number = Math.ceil(difference / i);
            let numIdx = difference % i;

            let str = (digitTrack + number).toString();
            return str[str.length - 1 - numIdx];
        }
    }
}

let result = nthDigit(100);
console.log('result: ', result);
