let expense = { type: "Business", amount: "$13" };

// let type = expense.type;
// let amount = expense.amount;

//ES6
//The name must be identical
let { type, amount } = expense;
console.log(type, amount);

//other example
//destructuring
let savedFiles = { extension: "jpeg", name: "repost", size: "12MB" };
function fileSummary({ name, extension, size }, { color }) {
  return `The file ${name}.${extension} is of size ${size} contains ${color}`;
}
console.log(fileSummary(savedFiles, { color: "Red" }));

//other example
let companies = ["HackerEarth", "HackerRank", "CodeForces", "CodeChef"];
//instead of accessing via indexing, we can use destructuring
//look at the order
let [name1, name2, name3, name4, name5] = companies;
let [content1, ...rest] = companies;
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
//if try to access out of bound
console.log(name5); //undefined
console.log(content1, rest);

//other example
let brands = [
  { name: "Google", location: "Hyderabad" },
  { name: "Facebook", location: "Chennai" },
  { name: "Apple", location: "Delhi" },
];

//accessing via indexing
// let location = brands[1].location;
// console.log(location);

//by destructuring
// let [{ location }] = brands;
// console.log(location);

//different approach
let Google = { locations: ["Hyderabad", "Chennai", "Delhi"] };
let {
  locations: [location],
} = Google;
console.log(location);

//When to use destructuring
//very long argument list, it will become difficult to remember
function signup(username, password, email, dob, city) {
  //create new user
}
signup("name", "password", "abc@gmail.com", "23/08/2001", "Chennai");

let user = {
  username: "name",
  password: "password",
  email: "abc@gmail.com",
  dob: "23/08/2001",
  city: "Chennai",
};

//we don't need to worry about the order
function signup1({ password, email, dob, city, username }) {
  //create new user
}

//other example
let points = [
  [4, 5],
  [10, 1],
  [0, 40],
];
console.log(
  points.map(([x, y]) => {
    return { x, y };
  })
);

//other example
function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}

//other example
const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map(([subject, time, teacher]) => ({
  subject,
  time,
  teacher,
}));

console.log(classesAsObject);

//other example
const numbers = [1, 2, 3];

function double([number, ...rest]) {
  return number === undefined ? [] : [number * 2, ...double(rest)];
}

console.log(double(numbers));
