// console.log("started Execution...");

// //this is asynchronus data
// setTimeout(() => {
//   console.log("logic Excute...");
// }, 2000);

// console.log("complete Execution...");

// how to handle asynchronus data in js using callback &  promises and async await

let a = 20;
let b = 0;


// this is how we handle asynchronus behaviour in js using promises
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
