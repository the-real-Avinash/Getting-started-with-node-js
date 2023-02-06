// ------------------------------var let const ------------------------------------
// var name = "Avinash";
// let age = 22;
// const hasHobbies = true;
// ---------------------------------function ------------------------------
// function summarizeUser(userName, userAge, userHobbies)
{
  return `User name is ${name} and user age is ${age} and he has hobbies ${hasHobbies}`;
}
// console.log(summarizeUser(name, age,hasHobbies));

// const add = (a,b) => { // return a+b; // }
// console.log(add(2,3)); // const add = () => 2+3;
// console.log(add());
// --------------------------object------------------------------
// const person = {
// name: "Avinash",
// age: 23,
// greet: () => {
// console.log("Hello");
// }, // }; // person.greet();
// -----------------------Array methods -------------------------------
// const hobbies = ["sports", 'cooking', 'horseriding'];
// for(hobby of hobbies){ // console.log(hobby); // }
// console.log(hobbies.map((ele) => { // return ele + 3; // }))
// --------------------------Spread and Rest operator ------------------------
// spread operator // const nameArray = ['avinash', 'abhijeet', 'john'];
// const copiedArray = [...nameArray]; // console.log(copiedArray);
// const person = {
// name: "Avinash",
// age: 23,
// greet: () => { // console.log("Hello");
// },
// };
// const copiedPerson = {...person};
// console.log(copiedPerson);
// rest operator
// const toArray = (...args) => {

// return args; // }
// console.log(toArray(2,3,4,5,6,7,8));
// -------------------------Destructuring--------------------------------------
// const nameArray = ['avinash', 'abhijeet', 'john'];
// const [name1,name2] = nameArray;
// console.log(name1);
// const person = {
// name: "Avinash",
// age: 23,
// greet: () => {
// console.log("Hello");
// },
// };
// const function1 = ({name, age}) =>{
// console.log(name, age);
// } // function1(person)
// var x = 7;
// function getName (){
// console.log("Helllo");
// } // getName();
// console.log(x);
// var a =5;
// const count = true;
// let countValue = new Promise(function (resolve, reject)
//  { if (count) { resolve("There is a count value.");
// } else { reject("There is no count value"); } });
//  console.log(countValue);
