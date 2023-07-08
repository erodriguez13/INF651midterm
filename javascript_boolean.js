/* Eduardo Rodriguez- Midterm: Boolean
July 7, 2023 */

//o Question 1: Write a condition that checks whether a variable isRaining is true and a variable isSunny is false. Store the result in a variable called shouldStayInside.
var isRaining = true, isSunny = false;
var shouldStayInside;
if (isRaining && !isSunny) {shouldStayInside = true;}
else {shouldStayInside = false;}
console.log("Q1: shoudlStayInside:  "+shouldStayInside);

//o Question 2: Write a JavaScript function called hasPermission that takes two boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has permission and false otherwise.
function hasPermission(isUserLoggedIn, isAdmin){
	if ((isUserLoggedIn == true) && (isAdmin == true)){return true;}
		else {return false;}
}
console.log("Q2: Testing hasPermission(t, t) "+ hasPermission(true, true));
console.log("Testing hasPermission(f, t) "+ hasPermission(false, true));
console.log("Testing hasPermission(t, f) "+ hasPermission(true, false));
console.log("Testing hasPermission(f, f) "+ hasPermission(false, false));



//o Question 3: Write a JavaScript function called hasUniqueCharacters that takes a string as an argument and returns true if all characters in the string are unique and false otherwise.
function hasUniqueCharacters(string){
	for( let i = 0; i< string.length; i++){// start by comparing first char with 
		for (let j = i+1; j<string.length; j++)// the second char and proceed with comparig each combinatino of two chars 
			{if (string[i]== string[j]) return false;}// return false if two chars are the same
	}
	return true;// return true only when every two chars are not the same
}
console.log("Q3: Testing hasUniqueCharacters with abcdefg " + hasUniqueCharacters("abcdefg"));
console.log( "Testing hasUniqueCharacters with abcdefa " +hasUniqueCharacters("abcdefa"));