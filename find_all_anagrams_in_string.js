// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


const isAnagram = (str1, str2) => {
    let dictionary = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        dictionary[char] = (!dictionary[char]) ? 1 : dictionary[char]++;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!dictionary[char] || dictionary[char] < 0) {
            return false;
        } else {
            dictionary[char]--;
        }

    }
    return true;
};

const findAllAnagramsInString = (str, anagram) => {
    let length = anagram.length;
    let indices = [];
    for (let i = 0; i < str.length - length + 1; i++) {

        if (isAnagram(str.slice(i, i+length), anagram)) indices.push(i);
    }
    return indices;
};

let result = findAllAnagramsInString("cbaebabacd", "abc");

console.log('result: ', result);
