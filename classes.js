//prototypal inheritance
//constructor object
function SportsCar(options) {
  this.title = options.title;
}

//method
SportsCar.prototype.drive = function () {
  return "Started";
};

//constructor object
function Honda(options) {
  SportsCar.call(this, options);
  this.color = options.color;
}

Honda.prototype = Object.create(SportsCar.prototype);
Honda.prototype.constructor = Honda;

Honda.prototype.honk = function () {
  return "horn";
};

const honda = new Honda({ color: "White", title: "Civic" });

console.log(honda);
console.log(honda.drive());
console.log(honda.honk());

//Refactor with classes
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "Started";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); //Call the Car Constructor
    this.color = options.color;
  }
  honk() {
    return "Horn";
  }
}

let toyota = new Toyota({ color: "Red", title: "Innova" });
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);
