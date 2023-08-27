// console.log("hello world");
/*
FE, BE, DevOps, Seo, Database, IT, QA, Design, Reliability, Disaster Recovery, Data Analyze

// App
  // - FE 
  // - BE
  // - DB
  // - Server

  JS
    Client (Web) Chrome (v8), Firefox
    Server NodeJs
    Desktop Electron Js
    Mobile ReactNative, Cordova

    Host objects: based on the platform (window in Web and process in server or cli)
    Native objects (belongs to the JS like Math, Object, String)

    JS versions
      EcmaScript (ES5, ES6, ...)

      ES5
      ES6 (2015)
      // compile different versions
      babel (convert ES6+ => ES5)
      lebab (convert ES5 => ES6)
  */

// Variable definition

// 1. Without any keyword
// a = 10;
// global scope (accessible in all of the application using window.a)
// Memory leek
// dangerous because it can be re-defined or be used in other pages or files!

// 2. With var keyword

// function test() {
//   var b = 11;
// }
// console.log(b) // error

// function scope
// only accessible in the surrounding function

// 3. With let or const keyword
// function test2() {
//   if (a === 10) {
//     let c = 1;
//     const d = 2;
//     c = 3;
//     d = 3; // error!
//   }
//   // console.log(c); // error!
// }
// block scope
// only accessible within the nearest block
// const is just like let, but a const variable can't be reassigned

//
// Primitive vs non-primitive variables
//
// Primitive variables: Number, String, boolean, null, undefined, symbol
//    primitive variables will be passed by value.
//    will be compared by value
// let a = 10 // primitive

// non-primitive variables: Object, Array, function, class
//    non-primitive variables will be passed by reference.
//    if a function change a non-primitive value, the original function will be affected
//    because it has the reference address of that variable.

// passed by value sample
// function increment(input) {
//   input = input + 1;
//   console.log("input = ", input);
// }
// const a = 10;
// increment(a);
// console.log("a is ", a);

// passed by reference sample
// function changeName(input) {
//   input.name = "hasan";
//   console.log("input = ", input);
// }
// const obj = {
//   name: "ali",
// };
// changeName(obj);
// console.log("obj is ", obj);
//

// Mutable vs immutable
// Mutable variables can be changed but the immutable variables can not be changed! should be re-assigned
// strings are immutable in js!
// var name = "ali";
// name[1] = "m";
// console.log(name); // no change because strings are immutable

// Array
// var array = [1, 2, 3, 4, 5, 6];
// console.log(array.length);
// var newArray = array.concat([4, 5, 6]);
// console.log(newArray);
// console.log(array[1]);
// console.log(array.at(-1));
// console.log(array[array.length - 1]);
// console.log(Array.isArray("sss"));
// var a = new Array(10).map;
// console.log(a);
// console.log(a[2]);

// console.log(array.pop()); // removes an element from the end of the array
// console.log(array);
// console.log(array.shift()); // removes an element from the start of the array
// console.log(array);

// console.log(array.push(4));// adds an element to the end of the array
// console.log(array);
// console.log(array.unshift(4)); // adds an element to the start of the array
// console.log(array);

// console.log(array.filter((element) => element % 2 === 0));
// console.log(array.find((element) => element > 2)); // will return the first item which satisfies the condition
// console.log(array.findIndex((element) => element > 2)); // will return the first item index which satisfies the condition

// const obj = {
//   name: "ali",
//   age: 30,
//   gender: "male",
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.name);
// console.log(obj["name"]);

// var a = 1;
// if (a > 5) {
//   console.log(">5");
// } else if (a > 7) {
//   console.log(">7");
// } else {
//   console.log("<=5");
// }

// var lang = "EN"; // 'FA', 'DE', ...
// switch (lang) {
//   case "EN":
//     console.log("english");
//     break;
//   case "FA":
//   case "DE":
//     console.log("farsi or deutsch ");
//     break;
//   default:
//     console.log("unknown");
// }

// falsy values: false, 0, "", undefined, null, NaN (not a number)
// truthy values: anything else! ( "ali", 10, {}, [])
// if ([]) {
//   console.log("yes");
// }

// type casting
// var a = "10.1";
// var b = 10;
// const int = Number.parseInt(a);
// const float = Number.parseFloat(a);
// console.log(n);

// const b1 = Boolean(a);
// const b2 = !!a;
// console.log(b2);

// const array = [1, 2];
// console.log(typeof array);
// console.log(Array.isArray(array));

//
//
// Functions
// function statement
// function test1 () {
// }

// function Expression
// const test2 = function () {};

// Arrow Function
// const test3 = () => {} // es6

// Loops in JS
// for
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var a = 0;
// while (a < 10) {
//   console.log(a);
//   a += 1;
// }

// var array = [3, 4, 5, 6, 7, 8];
// var obj = {
//   name: "ali",
//   age: 30,
//   gender: "male",
// };

// var result = array.map((item) => {
//   return item + 1;
// });
// console.log(result);
// console.log(array);

// array.forEach((item) => {
//   const t = item + 1;
//   return t;
// });
// console.log(array);

//
// for (name in names) iterate over keys (works over objects)
// for (name of names) iterate over values (doesn’t work over objects)

// for (i in array) {
//   console.log(i);
// }
// for (i of array) {
//   console.log(i);
// }
// for (i in obj) {
//   console.log(i);
// }
// for (i of obj) {
//   console.log(i);
// }

// var array = [3, 4, 5, 6, 7, 8];

// const t = array.reduce((prev, cur) => {
//   return prev + cur;
// }, 0);
// console.log(t);

// const result = array.some((item) => item < 4);
// const result = array.every((item) => item < 4);
// console.log(result);
