//foreach 

//example 1

let colors=['red','blue','green']
//for
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//for each
colors.forEach(color=>console.log(color))


//example2

//sum of all numbers in an array

//approach 1
let numberslist1=[1,2,3,4,5]
let sum1=0
numberslist1.forEach(number=>sum1+=number)
console.log(sum1);

//approach2
let numberslist2=[1,2,3,4,5]
let sum2=0
function adder(number){
    sum2+=number
}
numberslist2.forEach(adder)
console.log(sum2);


//example 3 

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    //for
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }

    //forEach
    posts.forEach(post=>savePost(post))
}


//example 4
//area of an image
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];

images.forEach(image=>areas.push(image.height*image.width))

console.log(areas);