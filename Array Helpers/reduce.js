//reduce

//example 1
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
//using for
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//refactored using reduce
console.log(
  numbers.reduce(function (/*Gets the value*/ sum, number) {
    return sum + number;
  }, /*This initial value is passed to sum*/ 0)
);

//example 2

let primaryColors = [{ color: "Red" }, { color: "Blue" }, { color: "Green" }];
let result = [];

//using for
for (let i = 0; i < primaryColors.length; i++) {
  result.push(primaryColors[i].color);
}
console.log(result);

//using map
console.log(primaryColors.map((color) => color.color));

//using reduce
console.log(
  primaryColors.reduce(function (accumulator, primaryColors) {
    accumulator.push(primaryColors.color);
    return accumulator;
  }, [])
);

//example 3
//check whether the paranthesis are balanced
function balancedParan(string) {
  return !string.split("").reduce(function (counter, character) {
    if (character === "(") {
      return ++counter;
    }
    if (character == ")") {
      return --counter;
    }
    return counter;
  }, 0);
}
console.log(balancedParan(")(())("));

//example 4
//distance travelled

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var totalDistance;
totalDistance = trips.reduce(function (total, trip) {
  return total + trip.distance;
}, 0);
console.log(totalDistance);

//example 5
var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (acc, desk) {
    if (desk.type === "sitting") {
      acc.sitting += 1;
    } else if (desk.type === "standing") {
      acc.standing += 1;
    }
    return acc;
  },
  { sitting: 0, standing: 0 }
);
console.log(deskTypes);

//example 6
function unique(array) {
  return array.reduce(function (acc, currentValue) {
    if (
      !acc.find(function (item) {
        return item === currentValue;
      })
    ) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
}
var numbers = [1, 1, 2, 3, 4, 4];
console.log(unique(numbers));
