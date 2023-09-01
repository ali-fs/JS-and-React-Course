// const Shape = function (name) {
//   this.name = name;
// };

// Shape.prototype.getColor = function () {
//   return "red";
// };

// const s1 = new Shape("circle");
// const s2 = new Shape("circle");
// const s3 = new Shape("circle");
// console.log(s1.getColor === s2.getColor);
// console.log(s1);

// prototype chain
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   getColor() {
//     return "red";
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const c1 = new Circle("c1", 10);
// console.log(c1);

// _________________________________________________________________________________________________________
//
//
// Function types
//
// Function statement (will be hoisted, can be called before definition)
// test1();
// function test1() {
//   console.log("1");
// }

// Function Expression (will be hoisted like variables! it's undefined before definition, can not be called before definition)
// test2(); // error
// const test2 = function () {
//   console.log("1");
// };

// Arrow Function // Added in ES6 (2015), more like Function Expression, "this" never changes in an arrow function
// const test3 = (a) => console.log(a);

// IIFE
// Immediately Invoked Function Expression
// (function () {
//   console.log("IIFE");
// })();

// Higher Order Functions (HOF) // a function which takes another function or returns another function
// EX: map, foreach, reduce, all callback functions
// [1, 2, 3].map(() => {});
// [1, 2, 3].map(function () {});

// Constructor Functions
// with "new" keyword to create an object with properties and methods
// const obj = new Array(10);

// _________________________________________________________________________________________________________
//
//
// Scope and Closure
// A closure is a "function" combined with references to the "variables" defined outside of it.
// Closures maintain the variable references, which allow functions to access variables outside of their scope.
// They “enclose” the function and the variables in its environment.

// POINT 1. Function closure being assigned to the function at the "definition" time.
// POINT 2. values of variables in the closure evaluates at the execution time (just normal behavior).
// POINT 3. A function remembers the closure even if the parent function is done executing!

// Why is it useful?
//  - callback functions!
//  - event handlers
//  - storing states

//EX:

// POINT 3:
// function outerFunc(outerValue) {
//   function innerFunc(innerValue) {
//     console.log("outerValue", outerValue);
//     console.log("innerValue", innerValue);
//   }
//   return innerFunc;
// }

// const inner = outerFunc("outer value");
// inner("inner value");

// ___________________________________

// POINT 1 and POINT 3
// var a = 10;

// function outerFunc(outerValue) {
//   const innerFunc = (innerValue) => {
//     console.log("outerValue", outerValue);
//     console.log("innerValue", innerValue);
//     console.log("a", a);
//     setTimeout(() => {
//       console.log("a", a);
//     }, 1000);
//   };
//   return innerFunc;
// }

// const inner = outerFunc("outer value");
// inner("inner value");

// a = 20;

// ___________________________________
// POINT 1, 2, and 3

// var a = 10;

// function run() {
//   var a = 20;
//   function print() {
//     console.log(a);
//   }
//   exec(print);
// }

// function exec(fn) {
//   var a = 30;
//   fn();
// }

// run();

// _________________________________________________________________________________________________________

// this keyword
// This is the object that "executes" the function (current execution context)
// in a regular function, this references the global object (window)
// in an arrow function, "this" references the parent "this" at the "definition" time and "never changes".

/*
    Normal function
        in a regular function => window
        anonymous function (callback, HOF) => window
        in an object method => object
        constructor function => object
        in an event handler => the element receiving the event

    Arrow Function
        Same as parent's this and never change.
*/

// const obj = {
//   name: "ali",
//   getNameNormal: function () {
//     console.log("getNameNormal", this.name); // "this" is the current object
//   },

//   getNameArrow: () => {
//     console.log("getNameArrow", this.name); // undefined. parent's "this" is window and window.name is undefined
//   },
// };

// obj.getNameNormal();
// obj.getNameArrow();

// ----------------------------------------

// const person = {
//   name: "mohammad",
//   languages: ["persian", "english"],

//   getLanguages: function () {
//     this.languages.forEach(function (lang) {
//       console.log(this.name, lang); // undefined - this is an anonymous function! "this" is window and window.name is undefined
//     });
//   },

//   // solutions:
//   getLanguagesArrow: function () {
//     this.languages.forEach((lang) => { // make it an arrow function. here, "this" is the same as parent's "this" which is the object itself
//       console.log(this.name, lang);
//     });
//   },
//   getLanguages2: function () {
//     this.languages.forEach(function (lang) {
//       console.log(this.name, lang);
//     }, this); // pass "this" to the function! foreach accepts a "this" as second parameter!
//   },
//   getLanguages3: function () {
//     var self = this; // create a variable called "self" just equal to "this"
//     this.languages.forEach(function (lang) {
//       console.log(self.name, lang); // use "self" instead of "this"! the function has access to "self" from it's closure!
//     });
//   },
// };

// person.getLanguagesArrow();

// -------------------------------------------------

// const person = {
//   name: "sana",

//   normal: function () {
//     console.log("normal", this.name); // ok. it's a method and "this" is equal to the object

//     const normal2 = function () {
//       console.log("normal2", this.name); // undefined! although it's in the object, it's not a method! it's just a function defined in a method so, "this" is window
//     };
//     const arrow2 = () => {
//       console.log("arrow2", this.name); // works, "this" is the same as parent's "this". so it's the object
//     };

//     normal2();
//     arrow2();
//   },

//   arrow: () => {
//     console.log("arrow", this.name); // undefined! "this" is equal to parent's "this" which is window! (parent who is creating the object)
//   },
// };

// person.normal();

// --------------------------------------------

// var a = 10;

// function run() {
//   var a = 20;
//   function print() {
//     console.log(a); // access from closure, 20
//     console.log("this.a", this.a); // access from "this". 10
//   }
//   exec(print);
// }

// function exec(fn) {
//   var a = 30;
//   console.log("exec -> a", a); // access from closure. 30
//   console.log("exec -> this.a", this.a); // access from "this", 10
//   fn();
// }

// run();

//________________________________________________________________________________________________________

// bind - apply - call
// these methods are useful when we want to change the context ("this")

// bind: takes "this" and returns a new function which we can call
// call: takes "this" and all of the parameters of the function and calls the function
// apply: takes "this" and an array of all parameters of the function and calls the function

// ** these methods have no effect on arrow functions as in a narrow function, "this" never changes!**

// const person = {
//   name: "sana",

//   getName: function (greeting, string) {
//     console.log(greeting, this.name + string);
//   },
//   getNameArrow: (greeting, string) => {
//     console.log(greeting, this.name + string);
//   },
// };

// person.getName("hello", "! how are you?");
// person.getName.bind({ name: "Mohammad" })("hello");
// person.getName.call({ name: "Ali" }, "hello", "! how are you?");
// person.getName.apply({ name: "Majid" }, ["hello", "! how are you?"]);

// person.getNameArrow("hello", "! how are you?");
// person.getNameArrow.bind({ name: "Mohammad" })("hello");
// person.getNameArrow.call({ name: "Ali" }, "hello", "! how are you?");
// person.getNameArrow.apply({ name: "Majid" }, ["hello", "! how are you?"]);

// _________________________________________________________________________________________________________

// hoisting
// all variables and functions will be lifted up, just before start executing the code.
// before start executing the code, there are some steps and one of them is hoisting, JS will go through out code line by line and
//   1. assign memory address to all variables (with value=undefined)
//   2. define all function statements
// then, JS will start from beginning again to execute the code. So, ex: if we log a variable before definition, we will see undefined (not an error)

// for variables defined with "let" and "const" it's a bit different.
// they will be hoisted! but not in the global window, but in "Temporal Dead Zone". So, we can't access the, before definition.

// aaa() // ok! aaa is hoisted and available
// bbb() // Error! its a function expression and hoisted just like a normal variable! so here, the value is undefined
//
// var bbb = function () {
//   console.log("this is bbb");
// };
//
// function aaaa() {
//   var a = 1;
//   console.log(a);
// }
//
// console.log(b); // no error, but undefined (hoisted)
// var b = 2;
//
// aaaa();
// console.log(b);
//
// console.log(c) // Error! at this point, "c" is hoisted in temporal dead zone and we don't have access to that!
// const c = 3
