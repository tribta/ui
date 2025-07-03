const x = {};

const y = new Number();

const z = new String();

const v = {};

console.log(Object.getPrototypeOf(y)); // === number
// Object.getPrototypeOf(x) // == Object

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(v));
// true

// EXAMPLE:
const shape = {
  computeLocation() {
    console.log("Calculate location to create any Shape.");
    return { x: 100, y: 200 };
  },
};

const circle = Object.create(shape);

circle.radius = 500;
circle["PI"] = 3.14;

const myPosition = circle.computeLocation();

console.log(Object.getPrototypeOf(circle) === shape); // true
console.log(circle.__proto__ === shape);

/**
 * ==============================
 * LESSON: ARRAYS
 * ==============================
 */

const myArray = [];
console.log(Object.getPrototypeOf(myArray)); // prototype Object

/**
 * ==============================
 * LESSON: CLASS
 * ==============================
 */

// syntax: sử dụng Pascal hay camelCase
class Shape {
  computeLocation() {
    console.log("Calculate location to create any Shape.");
    return { x: 100, y: 200 };
  }
}

class Circle extends Shape {
  constructor(r) {
    this.radius = r;
    super();
  }
}

console.log(Object.getPrototypeOf(Circle) === Shape);

const circle1 = new Circle();
