
/* Eduardo Rodriguez- Midterm: Syntax
July 7, 2023

JavaScript Syntax (4 points)
• Question 1: Identify and correct the syntax errors in the following code:
 var number = 10;
o console.log (Number + 5);*/

var number = 10;
 console.log (number + 5);// the variable name is case sensitive so Number is incorrect while number is correct

/*• Question 2: Write a JavaScript function called isEven that takes a number as an argument
and returns true if the number is even and false if it is odd.*/
function isEven(number){
    (number %2 == 0)? return true : return false;} 
    // if the remainder of the numb is 0, than it is even / true else false
    

/*• Question 3: Write a JavaScript function called isPalindrome that takes a string as an
argument and returns true if it is a palindrome (reads the same forwards and backwards) and false otherwise.
 */
function isPalindrome (string)
{ //
const l = string.length;

for (let i =0; i<l/2; i++)// compare first and last characters of the strig to each other and move to the next set of characters
{
    if (string[i] != string[l-1-i]) return false;// if the two chars dont match once, return false 
}
return true;// only returns if no mismatch occurred
}
