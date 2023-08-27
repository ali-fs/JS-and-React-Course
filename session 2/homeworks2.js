// 1.
// Write function which takes two strings and checks if they are anagrams
// Two strings are said to be anagram if we can form one string
// by arranging the characters of another string.
// For example, "race" and "care". Here, we can form race by arranging
// the characters of care.

// 2:
// Implement a function that takes an integer array and sorts it.
// (Do not use the javascript sort method)
// (Do not mutate the original array)

// 3:
// Considering these data:
// const userList = [
//   { id: 1, name: "Abolfazl", gender: "male" },
//   { id: 2, name: "Majid", gender: "male" },
//   { id: 3, name: "Mohammad", gender: "male" },
//   { id: 4, name: "Sana", gender: "female" },
// ];
// const HobbyList = [
//   { id: 11, name: "Reading" },
//   { id: 12, name: "Swimming" },
//   { id: 13, name: "Music Listening" },
//   { id: 14, name: "Movie Watching" },
//   { id: 15, name: "Game playing" },
// ];
// const userHobbies = {
//   userID_3: [12, 15, 11, 14],
//   userID_1: [15, 13],
//   userID_4: [13, 12, 11],
// };

// Write a code to retrieve this result:
// const result = [
//   {
//     id: 1,
//     name: "Abolfazl",
//     gender: "male",
//     hobbies: ["Game playing", "Music Listening"],
//   },
//   { id: 2, name: "Majid", gender: "male", hobbies: [] },
//   {
//     id: 3,
//     name: "Mohammad",
//     gender: "male",
//     hobbies: ["Swimming", "Game playing", "Reading", "Movie Watching"],
//   },
//   {
//     id: 4,
//     name: "Sana",
//     gender: "female",
//     hobbies: ["Music Listening", "Swimming", "Reading"],
//   },
// ];

// 4:
// Implement a function which takes an string and return repeated characters
// EX: input: "abcdabcdabfw"
// out: {
//   a: 3,
//   b: 3,
//   c: 2,
//   d: 2,
//   f: 1,
//   w: 1,
// };

// 5:
// Bonus question! Think on it if you're interested.
// Implement a function which takes an string containing these characters:
// "(", ")", "{", "}", "[", "]"
// and check if the brackets are balanced
// EX:
// )( is NOT balanced
// ((())) is balanced
// ((()) is NOT balanced
// [{[(){[]}()]}] is balanced
