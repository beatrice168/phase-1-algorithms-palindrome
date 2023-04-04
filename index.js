
  function isPalindrome(s) {
    // Write your algorithm here

    // Convert the string to lowercase and remove all non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Check if the string is equal to its reverse
    return s === s.split("").reverse().join("");
  }
  
  // Write your algorithm here

/* 
  Add your pseudocode here
  create a function is palindrome
  the function should receive a parameter
  the parameter should be a string
  the function should return a boolean
  the function should check if the string is a palindrome
  the function should return true if the string is a palindrome
  the function should return false if the string is not a palindrome

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
