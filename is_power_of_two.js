// Given an integer, write a function to determine if it is a power of two.

const isPowerOfTwo = function(n) {
    if (n === 2) return true;
    
    if (Math.floor(n) !== n) return false;
    
    return isPowerOfTwo(n / 2);
};

console.log('isPowerOfTwo(16): ', isPowerOfTwo(16));