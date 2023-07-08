
/* Eduardo Rodriguez- Midterm: Conditionals
July 7, 2023
 */

/*
o Question 1: Write an if-else statement that checks whether a variable num is
positive, negative, or zero. Print the appropriate message accordingly.*/
console.log ("Q1:")
var num=5;
if(num>0){console.log ("This number ("+num+ ") is positive");} 
else if (num<0){console.log ("This number ("+num+ ") is negative");}
else console.log("This number ("+num+ ") is 0");


num = -5;
if(num>0){console.log ("This number ("+num+ ") is positive");} 
else if (num<0){console.log ("This number ("+num+ ") is negative");}
else console.log("This number ("+num+ ") is 0");

/*o Question 2: Write a JavaScript function called getDiscount that takes a purchase
amount as an argument. If the purchase amount is greater than $100, apply a 10% discount. 
If it is less than or equal to $100, apply a 5% discount. Return the discounted amount.*/
console.log ("Q2:")
function getDiscount(purchaseAmount){
    if (purchaseAmount>=100){return purchaseAmount*.9;}
    else return purchaseAmount;
}
console.log("Testing getDiscount(200): "+getDiscount(200));
console.log("Testing getDiscount(99): "+getDiscount(99));


/*o Question 3: Write an if-else statement that checks whether a year is a leap year. 
Print "Leap year" if it is divisible by 4 but not divisible by 100, or if it is divisible by 400.
Otherwise, print "Not a leap year".*/
console.log ("Q3:")


var year = 2004;
if ((((year% 4)==0) && ((year%100)!= 0)) || (year%400)==0){console.log(year +" is a leap year");}
else {console.log(year +" is NOT leap year");}

var year = 100;
if ((((year% 4)==0) && ((year%100)!= 0)) || (year%400)==0){console.log(year +" is a leap year");}
else {console.log(year +" is NOT leap year");}