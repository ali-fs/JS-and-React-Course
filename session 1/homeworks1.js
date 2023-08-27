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
//   { amount: 45, category: "Transportation" },
// ];
//
// output sample:
// const result = {
//   Food: 130,
//   Transportation: 75,
//   Entertainment: 20,
// };

// 6.
// Write function which takes an array of camelCase strings
// and return the same array with snakeCase strings.
//
// Input sample:
// ['firstName', 'lastName', 'ageOfPerson']
//
// output sample:
// ['first_name', 'last_name', 'age_of_person']
