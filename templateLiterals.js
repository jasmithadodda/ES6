//Template Literals

//example 1
let year = new Date().getFullYear();
//we can inject variable inside string
console.log(`The year is ${year}`);

//example 2
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
console.log(doubleMessage(2));

//example 3
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("r", "e"));
