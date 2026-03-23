// 1. Remove Blanks
// Task:Create a function that removes all spaces from a given string.

// function removeBlank(str) {
//     let result ="";
//     for(i=0;i<str.length;i++){
//         if(str[i]!= " "){
//             result+=str[i];
//         }
//     }
//     return result;
// }
// console.log(removeBlank("i love aws"));
function removeBlanks() {
    var chat = "I can not BELIEVE it's not BUTTER";
    var arr  = chat.split(" ");
    console.log(arr.join(""));
}
removeBlanks();

// 2. Get Digits
// Task:
// Create a function that extracts and returns the digits from a given string as an integer.

// Function Signature:


function getDigits(str) {
    var results = "";
for (var i = 0 ; i<str.length;i++){
    if(!isNaN(str[i])&& str[i] !=" "){
        results+=str[i];
        }
    }return results;
}console.log(getDigits("abc8c0d1ngd0j0!8"));


// 3. Acronyms
// Task:
// Create a function that converts a given string into its acronym.
//  The acronym should consist of the first letter of each word, capitalized.
// .split()
// .toUpperCase()
// Examples:

function acronym(str) {
    var result = "";
    str = str.toUpperCase();
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            result += arr[i][0];
        }
    }return result;
}
console.log(acronym(" there's no free lunch - gotta pay yer way."));


    // 4. Count Non-Spaces
    // Task:
    // Create a function that counts and returns the number of non-space characters in a given string.
    function countNonSpaces(str) {
        var result = "";
        for(var i = 0;i<str.length;i++){
            if(str[i] !=" "){
                result++;
            }
        }return result
    }console.log(countNonSpaces("Honey pie, you are driving me crazy"));

    // 5. Remove Shorter Strings
    // Task:
    // Create a function that filters an array of strings, 
    // returning only those strings that have a length greater than or equal to a specified value.
    function removeShorterStrings(arr, minLength) {
        var result = [];
        for(var i = 0;i<arr.length;i++){
            if(arr[i].length>=minLength){
                result.push(arr[i]);
            }
        }return result
    }console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));