// Reverse the string
const originalString = "Superman";
const reversedString = originalString.split('').reverse().join('');
console.log("Reversed String:", reversedString);

// Check if the string is a palindrome
const isPalindrome = originalString.toLowerCase() === originalString.split('').reverse().join('').toLowerCase();
console.log("Is Palindrome:", isPalindrome);

// Ask for user input and check data type
const userInput = prompt("Enter something:");
console.log("Type of Input:", typeof userInput);

// Check if the given array is consistent
const isConsistent = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
      return false;
    }
  }
  return true;
};

const exampleArray = [1, 2, 3, 5, 6, 7];
console.log("Is Array Consistent:", isConsistent(exampleArray));