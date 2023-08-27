// Destructuring

// const obj = {
//   name: "ali",
//   age: 30,
//   height: 170,
//   weight: 70,
// };
// const arr = ["a", "b", "c", "d"];

// const { name: myName, age } = obj;
// const [firstLetter, , secondLetter] = arr;

// console.log(myName);
// console.log(firstLetter, secondLetter);

//  Spread
// ...obj ...arr

// console.log(...arr);

// const newObj = {
//   ...obj,
//   courses: ["js", "react"],
// };

// const newObj = {
//   ...obj,
//   courses: ["js", "react"],
//   weight: 80,
// };

// console.log(newObj);
// const newArr = [...arr, "e", "f", "g"];
// console.log(newArr);

// try {
//   const obj = {};
//   console.log(obj.a.b);
//   // throw new Error("custom error");
// } catch (error) {
//   console.log(error.message);
//   console.log('"b" doesn\'t exist');
// } finally {
//   console.log("executed successfully");
// }

// const arr = [
//   {
//     name: "ali",
//     age: 30,
//     height: 1.7,
//     weight: 70,
//   },
//   {
//     name: "mamad",
//     age: 30,
//     height: 1.8,
//     weight: 70,
//   },
// ];

// // arr.forEach((person, index) => (arr[index].height = person.height * 100));

// const newArr = arr.map((person) => {
//   return {
//     ...person,
//     height: person.height * 100,
//   };
// });
// console.log(arr);
// console.log(newArr);

//
//
//
// -------------------------------------------------------------------------------------------
// 1.
// Write function which takes a matrix and checks whether a matrix is a
// diagonal or not.
// In linear algebra, a diagonal matrix is a matrix in which
// the entries outside the main diagonal are all zero
// (the diagonal from the upper left to the lower right).
//
// Example:
// [ [1, 0, 0], [0, 2, 0], [0, 0, 4] ] = true
// [ [1, 0, 0], [0, 2, 5], [0, 0, 4] ] = false

// const arr = [
//   [1, 0, 0],
//   [0, 3, 0],
//   [0, 0, 4],
// ];
// const func = (arr) => {
//   for (let row = 0; row < arr.length; row++) {
//     for (let col = 0; col < arr.length; col++) {
//       if (row !== col && arr[row][col] !== 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// console.log(func(arr));

// -------------------------------------------------------------------------------------------
// 2.
// Write a JavaScript program to print all years and months between
// 01.01.1900 and now, which the 1st day of the month is Friday
//
// Output sample:
// 1900 'June'
// 1901 'February'
// 1901 'March'
// 1901 'November'
// 1902 'August'
// 1903 'May'
// 1904 'January'

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const currentYear = new Date().getFullYear();
// for (let year = 1900; year <= currentYear; year++) {
//   // const endMonth = year === currentYear ? 7 : 12;
//   // for (let month = 0; month < endMonth; month++) {
//   for (let month = 0; month < 12; month++) {
//     const date = new Date(year, month, 1);
//     const dayIndex = date.getDay();
//     if (dayIndex === 5 && date <= Date.now()) {
//       console.log(date.getFullYear() + "  " + monthNames[date.getMonth()]);
//     }
//   }
// }

// -------------------------------------------------------------------------------------------
// 3.
// Write function which takes a 2D array and
// flatten the array to a 1D array
//
// Input sample:
// [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ];
// output sample:
// [1, 2, 3, 4, 5, 6, 7]

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ];
// console.log(arr.flat());
// let newArr = [];
// arr.forEach((item) => {
//   newArr = [...newArr, ...item];
// });
// console.log(newArr);

// const newArr = arr.reduce((prev, curr) => {
//   return prev.concat(curr);
// }, []);
// console.log(newArr);

// -------------------------------------------------------------------------------------------
// 4.
// Write function which takes a nested array and
// flatten the array to a 1D array using reduce method
//
// Input sample:
// [
//   [1, 2],
//   [3, 4],
//   [[[5, 6], 7], 8],
//   [1, [2, 3, [[4, 5, 6], 7, 8]], 9],
// ];
// output sample:
// [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr = [
//   3,
//   [1, 2],
//   [3, 4],
//   [[[5, 6], 7], 8],
//   [1, [2, 3, [[4, 5, 6], 7, 8]], 9],
// ];

// const nestFlatter = (arr) => {
//   return arr.reduce((prev, curr) => {
//     if (Array.isArray(curr)) {
//       const flatted = nestFlatter(curr);
//       return prev.concat(flatted);
//     } else {
//       return prev.concat(curr);
//     }
//   }, []);
// };

// stack [] First in, Last out (FILO)
// queue [] First in, First out (FIFO)

// => prev: [3, 1, 2, 3, 4, 5, 6, 7, 8]
// curr: [[[5, 6], 7], 8]

// console.log(nestFlatter(arr));

// recursive function: A function which calls itself!
// It must have a break out condition
//
//
//
//
// -------------------------------------------------------------------------------------------
// 5.
// Write function which takes an array of expenses with amount and category
// and return an object with a category and sum of the amounts using reduce method.
//
// Input sample:
// const expenses = [
//   { amount: 50, category: "Food" },
//   { amount: 30, category: "Transportation" },
//   { amount: 80, category: "Food" },
//   { amount: 20, category: "Entertainment" },
//   { amount: 45, category: "Cloths" },
//   { amount: 45, category: "Transportation" },
// ];
//
// output sample:
// const result = {
//   Food: 130,
//   Transportation: 75,
//   Entertainment: 20,
// };

// const res = expenses.reduce((prev, curr) => {
// prev[curr.category]
//   ? (prev[curr.category] += curr.amount)
//   : (prev[curr.category] = curr.amount);

// prev[curr.category] = prev[curr.category]
//   ? prev[curr.category] + curr.amount
//   : curr.amount;

// if (prev[curr.category]) prev[curr.category] += curr.amount;
// else prev[curr.category] = curr.amount;
//   return prev;
// }, {});

// console.log(res);

// -------------------------------------------------------------------------------------------
// 6.
// Write function which takes an array of camelCase strings
// and return the same array with snakeCase strings.
//
// Input sample:
// ['firstName', 'lastName', 'ageOfPerson']
//
// output sample:
// ['first_name', 'last_name', 'age_of_person']

// const camelCaseToSnakeCase = (str) => {
//   return str
//     .split("")
//     .map((char) => {
//       if (char.toUpperCase() === char) {
//         return `_${char.toLowerCase()}`;
//       }
//       return char;
//     })
//     .join("");
// };

// const arr = ["firstName", "lastName", "ageOfPerson"];
// console.log(arr.map(camelCaseToSnakeCase));
