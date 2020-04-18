/*
MigraCode

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Migra" instead of the
number, and for numbers divisible by 5 (and not 3), print "Code" instead.

When you have that working, modify your program to print "MigraCode" for
numbers that are divisible by both 3 and 5 (and still print "Migra" or "Code"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/
for (let num = 1; num < 101; num++) {
  // check if the number is divisible by 3 or 5
  let checkForThree = num % 3;
  let checkForFive = num % 5;

  // if the number is divisible by both 3 and 5, then print FizzBuzz
  if (checkForThree == 0 && checkForFive == 0) console.log("MigraCode");
  // if the number is divisible by 3, then print Migra
  else if (checkForThree == 0) console.log("Migra");
  // if the number is divisible by 5, then print Code
  else if (checkForFive == 0) console.log("Code");
  // otherwise just print the number
  else console.log(num);
}
