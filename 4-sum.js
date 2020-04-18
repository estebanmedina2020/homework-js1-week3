/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/

let sumEven = 0;
for (i = 50; i <= 100; i++) {
  if (i % 2 == 0) sumEven += i;
}
console.log("The sum of even numbers between 50 and 100 is " + sumEven);
