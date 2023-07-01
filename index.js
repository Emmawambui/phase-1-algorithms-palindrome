function isPalindrome(word) {
  // Write your algorithm here
  // 1. define what a palindrome is
  // 2. your glabal variable
  // 3. condition to be looked
  // 4. code to be executed

}

/* 
  Add your pseudocode here
  tenarary operator

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// add your own custom tests in here
function isPalindrome(word) {
   // reverse the input string
    const reversedWord = reverseString(word);
    // if the reversed string is the same as the input
   if (word === reversedWord) {
      return true;
     } else {      
      return false;

     }
    }
    console.log(car);

// function isPalindrome(word){
//   const reversedWord = reverseString(word);
//   return(word=== reversedWord ? "true": "false")
// }
// console.log(car)
// module.exports = isPalindrome;

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return (str === reversedStr? "true": "false")
}
console.log(car);