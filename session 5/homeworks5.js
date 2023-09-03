// 1.
// Convert this callback-based function into a promise-based function
const callbackBased_IsSumOdd = (num1, num2, callback) => {
  setTimeout(() => {
    const result = num1 + num2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error(`Sum of ${num1} and ${num2} is not odd!`), null);
    }
  }, 1000);
};

callbackBased_IsSumOdd(4, 4, (err, res) => {
  if (err) console.log(err.message);
  else if (res) console.log(res);
});

// promise-based version:
const promiseBased_IsSumOdd = (num1, num2) => {
  // Implement this function
};

promiseBased_IsSumOdd(4, 4)
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message));

// --------------------------------------------------------------------------------------------------------------

// 2.
// Implement a function that executes a given function repeatedly at a fixed interval of 1 second.
// Also, stop running after 4 seconds
// (search for setInterval capabilities)

function repeater(fn) {
  // call fn every 1000ms
  // and any other necessary code
}

// call repeater to do a simple console.log every 1 second
// and do something to stop the execution after 4 seconds

// --------------------------------------------------------------------------------------------------------------

// 3.
// Implement a function that fetches data from an API
// and cancels the request if it takes longer than a specified time. (timeout)
// use Promise.race

const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutMs = 100; // change this to test your code

// normal call function
const callFn = new Promise((resolve, reject) =>
  fetch(url)
    .then((res) => res.json().then(resolve))
    .catch(reject)
);

function fetchWithTimeout(url, timeout) {
  // Implement this function
}

// call sample
fetchWithTimeout(url, timeoutMs)
  .then((data) => console.log("Data:", data))
  .catch((error) => console.log("Error:", error.message));

// --------------------------------------------------------------------------------------------------------------

// 4.
// Write a JavaScript function that fetches data from an API
// and retries the request a specified number of times if it fails.

function fetchDataWithRetry(url, maxRetries) {
  // Implement this function
}

const correctURL = "https://jsonplaceholder.typicode.com/posts";
const wrongURL = "https://jsonplaceholder.typicode.com/posts!!!!!";
const maxRetries = 3;

// call sample (change correctURL to wrongURL to test your code)
fetchDataWithRetry(correctURL, maxRetries)
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.log("Error:", error.message));

// sample output for correct url:
// calling 1/3
// Fetched data: [{…}, {…},...]

// sample output for wrong url:
// calling 1/3
// GET https://jsonplaceholder.typicode.com/posts!!!!! 404
// calling 2/3
// GET https://jsonplaceholder.typicode.com/posts!!!!! 404
// calling 3/3
// GET https://jsonplaceholder.typicode.com/posts!!!!! 404
// Error: Rejected after 3 retries
