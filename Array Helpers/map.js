//map: Transforms each element and returns a new array.
//instead of mutating an array ,we are producing a new array

//example 1
//double the numbers in list
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

//for loop
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

//refactored using map
//approach 1
function listDoubler(number) {
  return number * 2;
}
let doubled1 = numbers.map(listDoubler);
console.log(doubled1);

//approach 2
let doubled = numbers.map((number) => number * 2);
console.log(doubled);

//example2
//list of prices using map
let cars = [
  { model: "i20", price: "CHEAP" },
  { model: "fortuner", price: "EXPENSIVE" },
];

//approach1
function pricelister(car) {
  return car.price;
}
console.log(cars.map(pricelister));

//approach2
console.log(cars.map((car) => car.price));

//other example
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];
var heights;
heights = images.map((image) => image.height);
console.log(heights);

//other example
var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
function pluck(array, property) {
  return array.map((item) => item[property]);
}
console.log(pluck(paints, "color"));

//other example
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];
var speeds = trips.map((trip) => trip.distance / trip.time);
console.log(speeds);
