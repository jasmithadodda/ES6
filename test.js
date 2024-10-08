//ctrl+shift+p
const numbers = [1, 2, 3, 4, 5];

//forEach
numbers.forEach((number) => console.log(number * 2));

//map
console.log(numbers.map((number) => number * 2));

//reduce
console.log(numbers.reduce((sum, number) => sum + number,0));

//find
console.log(numbers.find((number) => number > 3));

//every
console.log(numbers.every((number) => number > 0));

//some
console.log(numbers.some((number) => number > 4));

//filter
console.log(numbers.filter((number) => number > 2));
