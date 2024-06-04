// Problem Statement: Given a string, transform it based on the following rules:
// ● If the length of the string is divisible by 3, reverse the entire string.
// ● If the length of the string is divisible by 5, replace each character with its ASCII code.
// ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
// both operations in the order specified above.

// Example: Input: "Hamburger"
// Output: "regrubmaH"
// Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15.
// Therefore, the string is reversed, resulting in "regrubmaH".

// Example: Input: "Pizza"
// Output: "80 105 122 122 97"
// Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15.
// Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

// Example: Input: "Chocolate Chip Cookie"
// Output: "eikooCpihCetalocohC"
// Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15.
// Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".

// Constraints:
// ● The string will only contain alphanumeric characters and spaces.
// ● The length of the string will be between 1 and 1000.
// Expected Time Complexity: O(n), where n is the length of the string. Expected Space
// Complexity: O(n), where n is the length of the string.
// Note: You can assume that the input will always be valid and within the specified
// constraints. Your solution should handle all possible cases and return the transformed
// string accordingly.
// These examples use real-world words related to food to illustrate the transformations
// applied based on the divisibility of the string length by 3, 5, and 15.




function transformStringBasedOnLength(str) {
    const length = str.length;
    let result = '';

    // Check if length is divisible by 3
    if (length % 3 === 0) {
        result = str.split('').reverse().join('');
    }

    // Check if length is divisible by 5
    if (length % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // Check if length is divisible by both 3 and 5
    if (length % 15 === 0) {
        result = str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the conditions are met, return the original string
    if (result === '') {
        result = str;
    }

    return result;
}

// Example usage
console.log(transformStringBasedOnLength("Hamburger")); // Output: "regrubmaH"
console.log(transformStringBasedOnLength("Pizza")); // Output: "80 105 122 122 97"
console.log(transformStringBasedOnLength("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
