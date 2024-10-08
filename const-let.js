//var

//function-scoped or global scoped
//redeclare 
//reassign
//initialized as undefined
var x = 10;
function varExample() {
    
    if (true) {
      var x = 20; // Same variable, function-scoped
      console.log(x); // 20
    }
    console.log(x); // 20 (still the same variable)
  }
  console.log(x)
  varExample();


//let

//block-scoped {}
//reassign 
//can't be redeclared
//if accessed without declaration throws ReferenceError

function letExample() {
    let x = 10;
    if (true) {
      let x = 20; // Different variable (block-scoped)
      console.log(x); // 20
    }
    console.log(x); // 10 (the outer variable)
  }
  letExample();

  
//const

//block-scope {}
//can't be redeclared
//can't be reassigned
//if accessed without declaration throws ReferenceError
//Mutable for objects and arrays
  
const y = 10;
// y = 20; // Error: Assignment to constant variable
const arr = [1, 2, 3];
arr.push(4); // Works fine, since we are mutating the array
console.log(arr); // [1, 2, 3, 4]


//other example for readability
//number of vowels in a given string

function count(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let number = 0;
    for (var i = 0; i < vowels.length; i++) {
      if (vowels.includes(string[i])) {
        number++;
      }
    }
    return number;
  }
  
  console.log(count("Raghu"));


//other example
function scopeTest() {
    console.log("-----Using var-----");
    var x = 10;
    if (true) {
        var x = 20;
        console.log("Inside if block (var x):", x);                 
    }
    console.log("Outside if block (var x):", x);

    console.log("\n-----Using let-----");
    let y = 10;
    if (true) {
        let y = 20;
        console.log("Inside if block (let y):", y);
    }
    console.log("Outside if block (let y):", y);

    console.log("\n-----Using const-----");
    const z = [1, 2, 3];
    console.log("Initial array (const z):", z);
    z.push(4);
    console.log("Modified array (const z):", z);
}
scopeTest();  //20 20  20 10  [1,2,3]  [1,2,3,4]



