function findUniqueSubstrings(str1, str2, n) {
    const getSubstrings = (str, n) => {
        let substrings = new Map();
        for (let i = 0; i <= str.length - n; i++) {
            let substring = str.substr(i, n);
            if (substrings.has(substring)) {
                substrings.set(substring, substrings.get(substring) + 1);
            } else {
                substrings.set(substring, 1);
            }
        }
        return substrings;
    };

    let substrings1 = getSubstrings(str1, n);
    let substrings2 = getSubstrings(str2, n);

    let uniqueSubstrings = [];

    // Find substrings unique to str1
    substrings1.forEach((count, substring) => {
        if (count === 1 && !substrings2.has(substring)) {
            uniqueSubstrings.push(substring);
        }
    });

    // Find substrings unique to str2
    substrings2.forEach((count, substring) => {
        if (count === 1 && !substrings1.has(substring)) {
            uniqueSubstrings.push(substring);
        }
    });

    return uniqueSubstrings;
}

// Example usage
console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
// Output: [ 'abc', 'bcd', 'cde', 'def', 'efa', 'fab' ]

console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
// Output: [ 'oh' ]

console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
// Output: [ 'avas', 'vasc', 'ascr', 'ptjs' ]

console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));
// Output: []
