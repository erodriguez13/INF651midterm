
/* Eduardo Rodriguez- Midterm: Math
July 7, 2023
 */


//o Question 1: Generate a random number between 1 and 100 (inclusive) using the Math.random() function and round it to the nearest integer. Store the result in a variable called randomNumber.
var randomNumber = Math.round(Math.random()*(100-1)+1);
console.log("Q1: Testing randomNumber: "+randomNumber);


//o Question 2: Write a JavaScript function called calculateFactorial that takes a number as an argument and returns its factorial.
function calculateFactorial(numb){
if (numb<0) {return -1;}// return -1 if numb is negative
else if(numb ==0) {return 1;}
else {
	return numb*(calculateFactorial(numb-1)); // recursively find the factorial by multiplying numb *() numb- 1)* ...
}
}
console.log("Q2: Testing calculateFactorial(4): "+calculateFactorial(4));

//o Question 3: Write a JavaScript function called calculatePower that takes two numbers, base and exponent, as arguments and returns the result of base raised to the power of exponent.
function calculatePower(base, exp){ return base**(exp);}// base** exp = base to the exp
console.log("Q3: Testing calculatePower(4,3): "+calculatePower(4,3));


