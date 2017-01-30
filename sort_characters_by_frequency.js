// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

const sortBy = (a, b) => {
    if (b.charCodeAt(0) > a.charCodeAt(0)) return -1;
    if (a.charCodeAt(0) > b.charCodeAt(0)) return 1;
    return 0;
};

const sortCharactersByFrequency = str => {
    let sortedArr = str.split('').sort(sortBy);
    let resultStr = '';
    for (let i = 0; i < sortedArr.length; i++) {
        let char = sortedArr[i];
        let prev = sortedArr[i-1];
        resultStr += char;
    }
    return resultStr;
};

let result = sortCharactersByFrequency('Aabb');
console.log('result: ', result);