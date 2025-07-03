/**
 * ==============================
 * LESSON: Descriptor
 * ==============================
 */

const person = { myName: "Julius Ceasar" };

const objectRoot = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(objectRoot, "toString");

Object.defineProperty(person, "myName", {
  writable: false,
  enumerable: false,
  configurable: false,
});

for (const k in person) {
  console.log(k);
}

person.myName = "Peter Parker";
delete person.myName;

/**
 * ==============================
 * LESSON: Properties Constructor
 * ==============================
 */
const myObject = {};
const myObject2 = new Object();

const parent = Object.getPrototypeOf(myObject);

function Circle(r) {
  this.radius = r;
}

const circle = new Circle(5);

console.log(circle.__proto__ === Circle.prototype);

const myArray = [];
const myArray2 = new Array();

/**
 * ==============================
 * LESSON: instance member
 * ==============================
 */
function Circle2(r) {
  // instance member
  this.r = r;
  
  this.move = function () {
    // this.draw();
    console.log("Move!");
  };
}

const c1 = new Circle2(5);
const c2 = new Circle2(10);

//NOTE: c1 & Circle cùng tham chiếu về Object Root
c1.__proto__ === Circle2.prototype;

// IMPORTANT: lưu trữ method trong OBJ ROOT!

// prototype member
c1.__proto__.draw = function () {
  this.move();
  console.log("I draw a circle");
};

// prototype member
Circle2.prototype.draw2 = function () {
  console.log("I draw a circle");
};

// NOTE: Overriding method của OBJECT ROOT!
c1.toString();

c1.__proto__.toString = function () {
  console.log("I am Overriding toString method");
};
Circle2.prototype.toString = function () {
  console.log("hello");
};

// NOTE: Tham chiếu chéo giữa instance & prototype member
