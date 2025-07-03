/**
 * ==============================
 * LESSON: truyền tham số cho constructor cha.
 * ==============================
 */

function Shape(color) {
  this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius, color) {
  this.radius = radius;
  //   Shape(color); // nó sẽ lưu trên window
  Shape.call(this, color);
}

const c = new Circle(1, "RED");

/**
 * ==============================
 * LESSON: Method Overriding
 * ==============================
 */

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape2() {}

Shape2.prototype.duplicate = function () {
  console.log("Duplicate!");
};

extend(Circle2, Shape2);
extend(Square2, Shape2);

function Circle2() {}
Circle2.prototype.duplicate = function () {
  console.log("Dupicate number 2");
};

function Square2() {}
Square2.prototype.duplicate = function () {
  console.log("Dupicate number 2");
};

// 1. Tạo một Square2(), sao chép prototype của Shape() qua.
// Tạo một Shape Array [], sau đó tạo 1 Object Circle và sao chép
// prototype của Shape Array qua.

const shape3 = [new Circle2(), new Square2()];
// for...of
for (const k of shape3) {
  k.duplicate();
}
