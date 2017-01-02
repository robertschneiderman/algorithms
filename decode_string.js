// Given an encoded string, return it's decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

// a2[c]a2[c]

// determine if number with parseInt.
// multiple inside what's inside brackets
// run until no more brackets and numbers

const decodeString = str => {
    while(!decoded(str)) {
        for (i = 0; i < str.length; i++) {
            let letter = str[i];
            if (parseInt(letter)) {
                let extractedString = extractString(str, i+2);
                let decoded = multiplyStr(parseInt(letter), extractedString);
                str = str.slice(0, i) + decoded + str.slice(i + extractedString.length + 3);
            }
        }
    }
    return str;
}

const decoded = str => {
    // if (str === '') return false;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter === '[') return false;
    }
    return true;
}

const multiplyStr = (num, str) => {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += str;
    }
    return result;
}

const extractString = (str, idx) => {
    let result = '';
    let parens = ['['];

    for (let i = idx; i < str.length; i++) {
        let letter = str[i];
        if (letter === ']') parens.pop();
        if (letter === '[') parens.push('[')
        if (parens.length === 0) return result;
        result += letter;
    }
}

let result = decodeString("2[abc]3[cd]ef");
console.log('result: ', result);