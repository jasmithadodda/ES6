//default function argument
function add(a, b = 10) {
  return a + b;
}
console.log(add(5));
console.log(add(5, 1));

//example 2
function User(id) {
  this.id = id;
}
function Token() {
  return Math.random();
}
function AdminUser(user = new User(Token())) {
  user.admin = true;
  return user;
}
//create a new user or pass an existing user
let user = new User(Token());
AdminUser(user);

