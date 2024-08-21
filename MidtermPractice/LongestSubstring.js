function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let longestSubstring = "";
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }

        charIndexMap.set(currentChar, end);

        // Calculate current length of the substring
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstring = s.slice(start, end + 1);
        }
    }

    return { maxLen: maxLength, longestSubstring: longestSubstring };
}

// Example usage:
console.log(lengthOfLongestSubstring("babcabcb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));