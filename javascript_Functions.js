
/* Eduardo Rodriguez- Midterm: Functions
July 7, 2023

What are some advantages of using JavaScript in web development? */

/*
o Question 1: Write a JavaScript function called reverseString that takes a string as an argument and returns the reversed version of the string.
o Question 2: Write a JavaScript function called calculateBMI that takes a person's weight (in kilograms) and height (in meters) as arguments and returns their body mass index (BMI).
o Question 3: Write a JavaScript function called capitalizeWords that takes a sentence as an argument and returns the sentence with each word capitalized.
*/
console.log("Question 1: ");
function reverseString (string)
{ 
var rstring= "";
for (let i =string.length-1; i>=0; i--)
	{rstring += string[i];// add one char to the new string in reverse order
		}
return rstring;
}
console.log("Reversing ABCDEF: --- "+reverseString("ABCDEF"));



//Question 2:
console.log("Question 2: ");
 
function calculateBMI(weight, height){
var BMI = weight/ (height*height);
	return BMI;}

console.log ("calculateBMI (87.5, 1.8):--- "+ Math.round (calculateBMI (87.5, 1.8)) );




//Question 3:
console.log("Question 3: ");
function capitalizeWords(string){return string.toUpperCase()};
let x= capitalizeWords("Good morning, good afternoon and good night!");
console.log("Capitalizing words: --- "+x);
