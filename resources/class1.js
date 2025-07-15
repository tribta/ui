
/**
 * ==============================
 * LESSON: CLASS
 * ==============================
 */
// synctax:
// Pascal case
class Circle {
  constructor(r) {
    this.radius = r;
  }
  draw() {
    console.log("I draw a circle!!!");
  }
}

const circle = new Circle(10);

// NOTE: hoisting ???

sayHi();

// function expression
const sayBye = function () {
  console.log("Bye!");
};
// function declaration
function sayHi() {
  console.log("Hi!");
}
sayBye();

// NOTE:hoisting class
class S {
  constructor(width) {
    this.width = width;
  }
}
const Square = class {
  constructor(width) {
    this.width = width;
  }
};
const c = new S(5);
const s = new Square(10);
console.log(c);
console.log(s);

// NOTE:

class Person {
  constructor(name) {
    this.name = name;
  }
  static walk() {
    console.log("I'm walking.");
  }
}
const person = new Person("Trump");
// person.walk();

// NOTE: khởi tạo details cho method:
const x = Math.abs(-5);

/**
 * Đây là một class được tôi khởi tạo,
 * nhằm cung cấp các phép tính.
 */
class myMath {
  /**
   * Một method dùng
   * để trả về giá trị tuyệt đối...
   * @param value Bạn hãy nhập một giá trị
   * bất kỳ để chuyển đổi thành giá trị
   * tuyệt đối
   * @returns
   */
  static abs(value) {
    return value >= 0 ? value : -value;
  }
}

myMath.abs(-10);

// NOTE: sử dụng "this" trong func & class
class Circle1 {
  constructor(radius, color) {
    this.r = radius;
    this.c = color;
    this.draw = function () {
      console.log(`I draw a ${this.c} circle with radius = ${this.r}`);
    };
  }
}

const c1 = new Circle1(10, "RED");

// REMEMBER:
class C {
  constructor() {
    this.method = function () {
      console.log(this);
    };
  }
}

const o = new C();
o.method(); // constructor
const f = o.method;
f(); // ???
