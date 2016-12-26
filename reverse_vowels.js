// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

var reverseVowels = function(s) {
    let indices = [];
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            indices.push(i)
        }
    }
    
    for (let i = 0; i < Math.floor(indices.length / 2); i++) {
        let firstIndex = indices[i];
        let lastIndex = indices[indices.length-1-i]
        // let saved = s[firstIndex];
        s = s.substring(0, firstIndex) + s[lastIndex] + s.substring(firstIndex+1, lastIndex) + s[firstIndex] + s.slice(lastIndex+1);
        // s[firstIndex] = s[lastIndex];
        // s[lastIndex] = saved;
    }
    
    return s;
};

let result = reverseVowels("leetcode");

console.log('result: ', result);