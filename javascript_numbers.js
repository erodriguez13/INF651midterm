/* Eduardo Rodriguez- Midterm: Numbers
July 7, 2023 

Numbers (6 points)
o Question 1: Calculate the square root of a given number and store the result in a variable called result.
o Question 2: Write a JavaScript function called isPrime that takes a number as an argument and returns true if it is a prime number and false otherwise.
o Question 3: Write a JavaScript function called generateRandomNumber that takes two numbers, min, and max, as arguments and returns a random number between min and max */


// Question 1:
var number =9;
var result = Math.sqrt(number);// function to find square of number
console.log ("The square root of "+number + " is "+ result);

// Question 2: A prime number is a number that is divisible by 1 and itself only
// 1 is not a prime number 
function isPrime(numb){
    if (numb==1) return false;// 1 is not a prime number
    else if (numb==2) return true; // 2 is a prime number
    else {
        for (var i = 2; i < numb; i++)// check to see if numb is divislbe by any other number between 2 and numb are able to be divided 
            {if (numb%i === 0) return false;}
        return true;// if numb is only divislbe by 1 and numb (itself), then the number is prime.
    }
}
console.log("Testing isPrime: " + isPrime(3), isPrime(6),isPrime(7), isPrime(8) );// should return true, false, true and false


// Question 3:
function generateRandomNumber(min, max){
    return Math.round(Math.random()*(max-min)+min);// using the math.random funct, return number that is between min and max and round to the nearest int
}
console.log("Testing generateRandomNumber: " +generateRandomNumber(1, 30));
console.log("Testing generateRandomNumber, again: " + generateRandomNumber(1, 30));

