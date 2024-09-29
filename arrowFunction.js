//normal function
const add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

//arrow function

//more than one parameter or no parameter - use ()
const sub = (a, b) => a - b;
console.log(sub(2, 1));

//one parameter - () is not needed
const double = number => 2 * number;
console.log(double(2));

//other example
const numbers = [1, 2, 3, 4, 5];
const doublelist = numbers.map(number => 2 * number);
console.log(doublelist);

//other example (lexical this)
const team = {
  members: ["Jane", "Adam"],
  teamName: "Fire",
  teamSummary: function () {
    return this.members.map((member) => `${member} is from ${this.teamName}`);
  },
};
console.log(team.teamSummary());

//other example why arrow function is not always the solution
const profile = {
    name: 'Alex',
    getName:function(){
        return this.name
    }
};
console.log(profile.getName());