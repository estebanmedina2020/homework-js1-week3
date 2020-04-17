/*
Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
-> 3
*/

/*
let number = "#######";
console.log(number.length);
-> 7
*/

//your code here
makeTriangle(7);
function makeTriangle(altura) {
  let triangle = [];
  for (let i = 1; i <= altura; i++) {
    triangle += "#";
    console.log(triangle);
  }
}
