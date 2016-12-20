// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.


const isUgly = num => {
    if (num === 1) return true;

    for (factor = num; factor > 5; factor--) {
        if (num % factor === 0) {
            if (isPrimeAndAboveFive(factor)) return false;
        }
    }
    return true;
}

const isPrimeAndAboveFive = num => {
    for (div = num-1; div >= 2; div--) {
        if (num % div === 0) return false;
    }
    return true;
}

console.log('isUgly(15): ', isUgly(15));