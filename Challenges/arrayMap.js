// Problem Statement:
// Given an array of integers and a target sum, determine if there exists a contiguous
// subarray within the array that sums up to the target. Return true if such a subarray exists,
// otherwise return false.
// Example:
// Input: arr = [4, 2, 7, 1, 9, 5], target = 17
// Output: true
// Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.
// Constraints:
// - The array will contain between 1 and 100,000 elements.
// - The elements in the array and the target sum will be between -1,000,000,000 and
// 1,000,000,000.
// Expected Time Complexity: O(n), where n is the length of the array.
// Expected Space Complexity: O(1).



function doesSubarraySumExist(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Shrink the window as long as currentSum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the current sum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}


// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(doesSubarraySumExist(arr, target)); // Output: true

