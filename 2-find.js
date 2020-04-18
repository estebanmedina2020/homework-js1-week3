/*
Given an array of cities create a function that returns the number of cities that start with 'A'

It may be useful know that:
- in strings you can use the function startsWith()
- we can iterate arrays
- we know the lenght of an array by using length


var name = "Jose";
console.log(name + " starts with E = " + name.startsWith('E'));
console.log(name + " starts with J = " + name.startsWith('J'));

const namesArray = ["Jose","Juan"];
console.log(namesArray[0]); //"Jose"
console.log(namesArray.length); //2
*/
/*
function find(cities, letter) {
  var counter = 0;
  //your code here
  return counter;
}
const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];
console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));
*/

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];
function find(cities, letter) {
  var counter = 0;
  for (let i = 0; i < citiesArray.length; i++) {
    if (cities[i].startsWith("A")) {
      return (counter = letter.length);
    }
  }
}
console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];
function find(cities, letter) {
  let counter = 0;
  for (let i = 0; i < citiesArray.length; i++) {
    if (cities[i].startsWith("A")) {
      return counter;
    }
  }
}
console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));
