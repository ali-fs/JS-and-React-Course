// callback functions

// const executer = (num1, num2, callback) => {
//   setTimeout(() => {
//     const result = num1 + num2;
//     callback(result);
//   }, 1000);
// };

// console.log("start");

// executer(1, 2, (res) => {
//   console.log(res);
// });

// console.log("end");

// const executer = (url, callback) => {
//   fetch(url)
//     .then((response) =>
//       response.json().then((res) => {
//         callback(res);
//       })
//     )
//     .catch((e) => {});
// };

// async , await

// const executer = async (url, callback) => {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     callback(result);
//   } catch (e) {
//     console.log("error");
//   }
// };

// const url = "https://dummy.restapiexample.com/api/v1/employees";
// executer(url, (result) => {
//   console.log(result);
// });

// Promise

// const checkEven = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 10);
//   if (rand % 2 === 0) {
//     resolve(rand);
//   } else {
//     reject(rand);
//   }
// });

// checkEven
//   .then((result) => {
//     console.log("success", result);
//   })
//   .catch((e) => {
//     console.log("failed", e);
//   })
//   .finally(() => {
//     console.log("end");
//   });

// const checkEven = () => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 10);
//     if (rand % 2 === 0) {
//       resolve(rand);
//     } else {
//       reject(rand);
//     }
//   });
// };

// const test = async () => {
//   try {
//     const result = await checkEven();
//     console.log(result);
//   } catch (e) {
//     console.log("error", e);
//   }
// };

// test();
// const checkEven = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.floor(Math.random() * 10);
//     resolve(rand);
//   }, 2000);
// });

// console.log("start");
// console.log(checkEven);
// checkEven.then((result) => {
//   console.log("success", result);
// });
// console.log("end");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2");
//   }, 3000);
// });

// Promise.race([p1, p2]).then(console.log);
// Promise.all([p1, p2]).then(console.log);

// Rest API
//    GET, POST, PUT, DELETE
// Graphql
//    query, mutation
// Web Socket

// promise has priority over other async methods (setTimeout, setInterval)

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("3");
//   }, 0);
// });

// p1.then((res) => console.log(res));
