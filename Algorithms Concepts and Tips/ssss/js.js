// 1. Reverse a String 
// Question: Write a function that takes a string and returns the same string in reverse order. 
// Example: 
// Input: “hello” 
// Output: “olleh” 
function ReverseString(str) {
  str = "hello";

  var reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}ReverseString();

// 2. Count Vowels 
// Question: Write a function that counts how many vowels appear in a string. Use the vowels a, e, i, o, and u. 
// Example; 
// Input: “hello” 
// Output: 2 
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        count++;
        break;
    }
  }
  console.log(count);
}
countVowels("hello");

// 3. Check Palindrome 
// Question: Write a function that checks whether a string is a palindrome. A palindrome reads the same forward and backward. 
// Example: 
// Input: “madam” 
// Output: true 

function palindrome() {
  let str = "madam";

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  let i = 0;
  while (i < str.length) {
    if (str[i] !== reversed[i]) {
      return false;
    }
    i++;
  }

  return true;
}
console.log(palindrome());


// 4. Longest Word in a Sentence 
// Question: Write a function that takes a sentence and returns the longest word in that sentence. 
// Example: 
// Input: "I love solving algorithms" 
// Output: “algorithms” 

function longestWordInString(str) {
  var words = str.split(" ");
  var longest = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}console.log(longestWordInString("I love programming"));


// 1. Convert a Letter Grade to Feedback[Text Wrapping Break]Question: Write a function that takes a single-letter string grade and returns a matching feedback message. 
// Example input: "B" 
// Example output: "Good job" 
// Requirements: 
// Use these rules: 
// A → Excellent 
// B → 	 
// C → You passed 
// D → Need improvement 
// F → Failed 
// Anything else → Invalid grade 

function grade(score) {
  switch (score) {
    case "A":
      return "Excellent";

    case "B":
      return "Good job";

    case "C":
      return "You passed";

    case "D":
      return "Need improvement";

    case "F":
      return "Failed";

    default:
      return "Invalid grade";
  }
}console.log(grade("A"));

// 2. Count Character Types in a String 
// Prompt: Write a function that takes a string and counts how many characters are vowels, digits, spaces, and other characters. 
// Example input: "Hi 123!" 
// Example output: { vowels: 1, digits: 3, spaces: 1, others: 3 } 
// Requirements: 
// Return an object with the four counts. 
// Treat uppercase and lowercase vowels the same. 
function countCharacters(str) {
  var vowels = 0;
  var digits = 0;
  var spaces = 0;
  var others = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        vowels++;
        break;
      case " ":
        spaces++;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        digits++;
        break;
      default:
        others++;

        break;
    }
  }
  var output = { vowels, digits, spaces, others };
  return output;
}
console.log(countCharacters("Hello 123"));















