
/* Eduardo Rodriguez- Midterm: Loops and Iterations
July 7, 2023

What are some advantages of using JavaScript in web development? */

/*
o Question 1: Write a while loop that prints the numbers from 1 to 20.

o Question 2: Write a JavaScript function called calculateSum that takes a positive
integer n as an argument and returns the sum of all numbers from 1 to n.

o Question 3: Write a JavaScript function called calculateFactorialIterative that
takes a positive integer n as an argument and calculates its factorial using a loop
instead of recursion.
*/
// Question 1
console.log("Question 1: ")

var n= 0;
while (n <=20){// when n becomes greater than 20, the loop will stop
	console.log(n);// prints out n, from 1 to 20
	n++;}


// Question 2
console.log("Question 2: ")

function calculateSum(n){ 
	if (n<0) {return -1;}
	var sum;
	for (sum =0; sum <= n; n++)// loop from 0 to n
		{sum += sum; sum ++} // add each number from 1 to n 
	return sum;
}

console.log("calculateSum(5): " + calculateSum(5));

// Question 3
console.log("Question 3: ");
function calculateFactorialIterative(n){
	if (n<0) {return -1;}
	else if (n==0) {return 1;}
	else {

	var total=1, i;
	for (i=1; i <= n; i++)
		{total = total*i;}
	return total;}
}
console.log("calculateFactorialIterative(5): "+calculateFactorialIterative(5));