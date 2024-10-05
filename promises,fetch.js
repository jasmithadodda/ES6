/*promises 
1.unresolved - waiting for something to finish 
2.resolved - something finished and it all went ok
3.rejected - something finished and something went bad
*/

promise = new Promise(() => {});

/*
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
*/

promise = new Promise((resolve, reject) => {
  resolve();
});

/*
Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined 
*/

promise = new Promise((resolve, reject) => {
  reject();
});

/*
Promise {<rejected>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: undefined
 */

//then and catch
//then is called only if promise is resolved
promise
  .then(() => console.log("Success"))
  .then(() => console.log("This is also succeeded"))
  //catch is called if promise is rejected
  .catch(() => console.log("Something went wrong"));

//async code with promises
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 5000);
  reject();
});
promise
  .then(() => console.log("Success"))
  .then(() => console.log("This is also succeeded"))
  .catch(() => console.log("Something went wrong"));

//request using fetch
url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

//shortcoming of fetch
url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
//---fetch hits catch--- if network requests fail
//but network hits the server and gets a failed status code ---fetch hits then---
