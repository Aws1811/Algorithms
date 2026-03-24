// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  var shortestWord = strs[0];

  for (var i = 1; i < strs.length; i++) {
    if (shortestWord.length > strs[i].length) {
      shortestWord = strs[i];
    }
  }

  for (var j = 0; j < shortestWord.length; j++) {
    for (var i = 0; i < strs.length; i++) {
      if (strs[i][j] !== shortestWord[j]) {
        return shortestWord.slice(0, j);
      }
    }
  }

  return shortestWord;
};
