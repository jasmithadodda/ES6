//example 1
let computers = [
  { name: "Mac", ram: 16 },
  { name: "Acer", ram: 32 },
  { name: "hp", ram: 8 },
];

var allComputersCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;

//using for
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputerCanRunProgram = true;
  }
}
console.log(allComputersCanRunProgram);
console.log(onlySomeComputerCanRunProgram);

//every
//if all elements returns true , every will also return true
console.log(
  computers.every(function (computer) {
    return computer.ram > 16;
  })
);

//some
//if atleast one element returns true, some will return true
console.log(
  computers.some(function (computer) {
    return computer.ram > 16;
  })
);

//example 2
var names = ["Alexander", "Sam", "Bill"];
console.log(names.every((name) => name.length > 4));
console.log(names.some((name) => name.length > 4));

//practical use of every and some
//example 3
function Field(value) {
  this.value = value;
}
//adding method
Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field("user1");
var password = new Field("12345678");
var dob = new Field("23/08/2001");
var fields = [username, password, dob];
var validation = fields.every((field) => field.validate());
console.log(validation);
if (validation) {
  //allow user to login
} else {
  //throw error message
}

//example 4
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted;

hasSubmitted = users.every((user) => user.hasSubmitted === true);
console.log(hasSubmitted);

//example 5
//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

var inProgress;

inProgress = requests.some((request) => request.status === "pending");
console.log(inProgress);
