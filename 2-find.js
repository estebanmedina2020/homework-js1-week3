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

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];
function find(cities, letter) {
  let counter = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].startsWith(letter)) {
      counter = counter + 1;
    }
  }
  return counter;
}
console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];
function find(cities, letter) {
  let counter = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].startsWith(letter)) {
      counter++;
    }
  }
  return counter;
}
console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));
