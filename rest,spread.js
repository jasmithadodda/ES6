//add array of numbers using reduce helper
function add1(numbers) {
  return numbers.reduce((result, number) => {
    return result + number;
  }, 0);
}
console.log(add1([1, 2, 3, 4, 5]));

//what if instead [1,2,3,4,5] we pass 1,2,3,4,5

//rest operator (Collects multiple elements into one)
//1,2,3,4,5 >>> [1,2,3,4,5]
function add2(...numbers) {
  return numbers.reduce((result, number) => {
    return result + number;
  }, 0);
}
console.log(add2(1, 2, 3, 4, 5, 6, 7, 8, 9));

let defaultColors = ["Red", "Green", "Blue"];
let favouriteColors = ["Yellow", "Orange"];
let earthyColors = ["Navy", "Grey"];

//We can use concat
console.log(defaultColors.concat(favouriteColors));

//Spread (Expands iterables into individual elements)
//'a' 'b' 'c' >>> ['a','b','c']
console.log(["blue", ...earthyColors, ...defaultColors, ...favouriteColors]);

//other example
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}
console.log(validateShoppingList("orange", "bread"));

//other example
let MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};
