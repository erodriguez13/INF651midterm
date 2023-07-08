
/* Eduardo Rodriguez- Midterm: Strings:
July 3, 2023
 */
//Question 1: Given the string "Hello, World!", write code to convert it to uppercase 
//and store the result in a variable called uppercaseString.
string = "Hello, World!";
var uppercaseString = string.toUpperCase();
console.log("Q1: Testing uppercaseString: "+uppercaseString);

//Question 2: Write a JavaScript function called countVowels that takes a string as 
//an argument and returns the number of vowels present in the string.
function countVowels(string){
    var count;
    count = string.match (/[aeiou]/gi).length;// compare to see if the chars match the vowels (chars in square brackets)
    return count;
}
console.log("Q2: Testing countVowels with aeio: "+countVowels("aeio"));

console.log("Q2: Testing countVowels with BCDEF: "+countVowels("bcdef"));

//Question 3: Write a JavaScript function called truncateString that takes a string 
//and a number maxLength as arguments and returns a truncated version of the string 
//if it exceeds maxLength, appending an ellipsis ("...") at the end.

function truncateString(string, maxLength){
    if (string.length< maxLength){return string;}// return unmodified string if string fits within max length
    else {var modifiedString = string.substring(0,maxLength)+ "(...)"; //return substring of max length + (...) appended
        return modifiedString;}

}
console.log("Q3: Testing truncateString(ABCDEF, 2): "+ truncateString("ABCDEFG", 2));
