//find

//example 1
//find the specific name
var users = [{ name: "Jill" }, { name: "Adam", id: "1" }, { name: "Frank" }];
var user;

//using for
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Adam") {
    user = users[i];
    break; //because after finding the specific name, we don't need to loop over again
  }
}
console.log(user);

//refactor using for
var finder = users.find(function (user) {
  return user.name === "Adam";
});
console.log(finder);

//example 2
function Car(model) {
  this.model = model;
}
var cars = [new Car("i20"), new Car("creta"), new Car("seltos")];
var sorted = cars.find(function (car) {
  return car.model === "creta";
});
console.log(sorted);

//example 3
//return post that has the postId=1
var posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];
var comment = { postId: 1, content: "Great Post" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id == comment.postId;
  });
}
console.log(postForComment(posts, comment));

//example 4
//Find Admin User
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];
var admin;
admin = users.find((user) => user.admin === true);
console.log(admin);

//example 5
//find account with balance 12
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];
var account;
account = accounts.find((account) => account.balance === 12);
console.log(account);

//example 6
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

function findWhere(array, criteria) {
  const key = Object.keys(criteria)[0];
  return array.find((item) => item[key] === criteria[key]);
}

console.log(findWhere(ladders, { height: 25 }));
