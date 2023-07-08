/* Eduardo Rodriguez- Midterm: Operators
July 7, 2023 */

//Question 1: Given the variables a = 10 and b = 3, what is the value of the following expression: a % b?
// a%b is the remainder of 10/3 so it is equal to 1
var a = 10, b =3;
console.log("Q1 a%b: " + (a%b));

//Question 2: Write a JavaScript function called isInRange that takes a number as an argument and 
//		returns true if it falls within a specific range (e.g., between 10 and 20) and false otherwise.
function isInRange(numb){
if (numb >= 70 && numb <= 100) {return true; }
else {return false;}
}
console.log("Q2: Tesing isRange(85): " + isInRange(85));
console.log("Tesing isRange(65): " + isInRange(65));

// Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the following expression: a > b || c < b && a === c?
// The expression is evaluated step by step below
//(a > b) || (c < b) && (a === c)
//(true) or (true &&  false)  since && has a higher presedence than ||
//(true) or (false)
// (TRUE)
a = 5, b = 3, c= 2;
console.log ( "Q3: "+ (a > b || c < b && a === c));