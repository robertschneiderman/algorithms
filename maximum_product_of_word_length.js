// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

// Example 1:
// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// Return 16
// The two words can be "abcw", "xtfn".

// Example 2:
// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
// Return 4
// The two words can be "ab", "cd".

// Example 3:
// Given ["a", "aa", "aaa", "aaaa"]
// Return 0
// No such pair of words.


const maximumProductWordLength = words => {
    let sortedWords = words.reverse(words.sort(sortByLength));
    let lengths = [];

    for (i = 0; i < sortedWords.length-1; i++) {
        for (j = i+1; j < sortedWords.length; j++) {
            if (wordsAreUnique(sortedWords[i], sortedWords[j])) {
                lengths.push((sortedWords[i].length * sortedWords[j].length));
            }
        }
    }

    return lengths;
    // return 0; 
}

const sortByLength = (word1, word2) => {
    return word1.length - word2.length;
}

const wordsAreUnique = (word1, word2) => {
    for (i = 0; i < word1.length; i++) {
        let letter = word1[i];
        if (word2.indexOf(letter) !== -1) return false;
    }
    return true;
}

let result = maximumProductWordLength(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])

console.log('result: ', result);