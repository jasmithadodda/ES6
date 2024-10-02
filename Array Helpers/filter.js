//filter: Returns a new array with only the elements that pass a condition.

//example 1
//filter the products
var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruits", quantity: 10, price: 15 },
  { name: "orange", type: "fruits", quantity: 30, price: 13 },
  { name: "celery", type: "vegetable", quantity: 3, price: 5 },
];
var filtered = [];

//using for
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "vegetable") {
    filtered.push(products[i]);
  }
}
console.log(filtered);

//refactored using filter
//based on truthy or falsy value
console.log(products.filter((product) => product.type === "vegetable"));

//other scenario
//Type is 'vegetable', quantity is greater than 0 , price is less than 10
console.log(
  products.filter(function (product) {
    return (
      product.type === "vegetable" && product.quantity > 0 && product.price < 10
    );
  })
);

//example 2
var post = { id: 4, title: "Post4" };
var comments = [
  { postId: 1, content: "comment1" },
  { postId: 2, content: "comment2" },
  { postId: 3, content: "comment3" },
  { postId: 4, content: "comment4" },
  { postId: 5, content: "comment5" },
  { postId: 3, content: "comment3" },
  { postId: 4, content: "comment4" },
  { postId: 4, content: "comment4" },
  { postId: 2, content: "comment2" },
  { postId: 1, content: "comment1" },
  { postId: 5, content: "comment5" },
];
//filter the comments for particular post

function commentsForPost(post, comment) {
  return comment.filter(function (comment) {
    return comment.postId == post.id;
  });
}
console.log(commentsForPost(post, comments));

//example 3
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers;
filteredNumbers = numbers.filter((number) => number > 50);
console.log(filteredNumbers);

//example 4
//filter the users if they are admin
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];
var filteredUsers;
filteredUsers = users.filter((user) => user.admin === true);
console.log(filteredUsers);

//example 5
//implement reject function that should work opposite the given iterator function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reject(array, iteratorFunction) {
  return array.filter(function (element) {
    return !iteratorFunction(element);
  });
}
console.log(
  reject(numbers, function (number) {
    return number % 2 === 0;
  })
);
