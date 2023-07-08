
/* Eduardo Rodriguez- Midterm: Variables:
July 7, 2023
Variables (6 points)
o Question 1: Declare a variable called name and assign it a string value of your
choice. Then, display a message that says "Hello, [name]!" using the value of the
name variable.
o Question 2: Create two variables, x, and y, and assign them numerical values.
Swap the x and y values using a third variable and display the updated values. */

//Question 1 

var name = "Sullivan";
console.log ("Hello, " +name + "!");

//Question 2
var x= 5, y =10;// declare two variables x, and y and assign values that are in increasin order
var temp;// place holder for one of the two variables
// swap values
temp = x;
x=y;
y= temp;

console.log ("X= " +x +" and Y= "+ y); // returns to console swapped values (larger value first, small value last)
