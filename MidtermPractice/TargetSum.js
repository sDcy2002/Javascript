function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    let maxLength = 0;
    let longestSubarray = [];
    let currentSum = 0;
    let start = 0;
    const seen = new Set();
    
    for (let end = 0; end < arr.length; end++) {
        // If the element is already in the set, remove elements from the start
        // until the element is removed from the set.
        while (seen.has(arr[end])) {
            seen.delete(arr[start]);
            currentSum -= arr[start];
            start++;
        }

        // Add the current element to the set and update the current sum
        seen.add(arr[end]);
        currentSum += arr[end];

        // If the current sum matches the target sum, update maxLength and longestSubarray
        if (currentSum === targetSum) {
            if (end - start + 1 > maxLength) {
                maxLength = end - start + 1;
                longestSubarray = arr.slice(start, end + 1);
            }
        }
    }

    return { maxLength, subarray: longestSubarray };
}

// Example usage:
console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15));
console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26));
console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2));