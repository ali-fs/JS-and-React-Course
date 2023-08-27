/*
OOP
    object oriented programming
    Class is like a template for creating multiple objects with the same list of properties
    but different data values saved in it.

    Customer
    Admin
    QaUser
*/

// concepts
//      1. Abstraction
//          hide the implementation details and highlight an object’s essential features to the users.
//          Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.
//          sample: calculating the salary of an employee based on work hours.

//      2. Inheritance
//          Inheritance makes all properties and methods available to a child class.
//          This allows us to reuse common logic and model real-world relationships.
//          sample: login function for all access levels, print name and family for header, send sms

//      3. Encapsulation
//          Encapsulation means keeping properties and methods private inside a class so that
//          they are not accessible from outside that class.
//          sample: not exposing the mobile number of the user when we want to send sms

//      4. Polymorphism
//          Polymorphism means having different and many forms.
//          We can overwrite a method inherited from a parent class.
//          sample: calculating the area of a shape

// const P = function (name, family, age) {
//   this.name = name;
//   this.family = family;
//   this.age = age;
// };

// class Person {
//   constructor(name, family, age) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//   }

//   get getFullName() {
//     return `${this.name} ${this.family}`;
//   }
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Student extends Person {
//   constructor(name, family, age, studentID, field, university) {
//     super(name, family, age);
//     this.studentID = studentID;
//     this.field = field;
//     this.university = university;
//   }

//   getStudentData() {
//     console.log(`Student of ${this.field} at university of ${this.university}`);
//   }
// }

// class Employee extends Person {
//   #mobile;
//   constructor(name, family, age, occupation) {
//     super(name, family, age);
//     this.occupation = occupation;
//     this.salary = 0;
//   }

//   printOccupationData() {
//     console.log(`${this.getFullName} is working as a ${this.occupation}`);
//   }

//   setMobile(mobile) {
//     this.#mobile = mobile;
//   }

//   sendSms(text) {
//     console.log(`${text} has been sent to ${this.#mobile}`);
//   }

//   //   setSalary(newSalary) {
//   //     this.salary = newSalary;
//   //   }
//   //   emp1.setSalary(2000)

//   set setSalary(newSalary) {
//     this.salary = newSalary;
//   }
//   //   emp1.setSalary = 2000

//   get getSalary() {
//     return this.salary;
//   }
// }

// const person1 = new Person("Ali", "Sabzinezhad", 30);
// const person2 = new Person("Majid", "Mahmoodi", 23);

// const student1 = new Student(
//   "Abolfazl",
//   "Mallahi",
//   24,
//   1,
//   "computer",
//   "tehran"
// );
// console.log(student1.family);
// student1.getStudentData();
// console.log(student1.getFullName);

// const emp1 = new Employee("Sana", "Fathi", 20, "Engineer");
// emp1.printOccupationData();
// // console.log(person1.name);
// // console.log(person2.name);

// emp1.setMobile("09999999999");

// emp1.sendSms("hello");

// emp1.setSalary = 2000;
// console.log(emp1.getSalary);

// ________________________________________________________

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   toString() {
//     return `${this.__proto__.constructor.name}`;
//   }

//   static isShape(obj) {
//     return obj instanceof Shape;
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(color, height, width) {
//     super(color);
//     this.height = height;
//     this.width = width;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const c1 = new Circle("red", 5);
// const r1 = new Rectangle("blue", 4, 3);
// const arr = [c1, r1];

// arr.forEach((shape) => {
//   if (Shape.isShape(shape)) {
//     console.log(shape.toString() + " " + shape.getArea());
//   }
// });
