// 1. Khai báo tường minh
const o = { a: 1 };
// o --> Object.prototype --> null

const b = ["one", "two", "three"];
// b --> Array.prototype --> Object.prototype --> null

function f() {
  return 2;
}

// f --> Function.prototype --> --> Object.prototype --> null

const p = { b: 2, __proto__: o };
// p --> o --> Object.prototype --> null

// 2. sử dụng constructor

function Graph() {
  this.verticles = [];
  this.edges = [];
}

// method 1
Graph.prototype.add = function (value) {
  this.verticles.push(value);
};

// method 2:
Object.defineProperty(Graph.prototype, "remove", {
  value: function (v) {
    console.log("Remove the last verticle.");
    this.verticles.pop(v);
  },
  enumerable: false, // ko hiển thị ra
  writable: true, // ko cho chỉnh sửa
  configurable: false, // ko remove
});

const g = new Graph();

// verticles, edges, add(), remove()

delete Graph.prototype.remove;
for (const k in g) {
  console.log(k);
}
Graph.prototype.remove = function () {
  console.log("Update Remove Method");
};

// 3. sử dụng Object.create()
const z = { a: 1 };

const z1 = Object.create(z);

const z2 = Object.create(z1);

const z3 = Object.create(Object.prototype, {
  sayHello: {
    value: function () {
      console.log("Say hello!");
    },
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

// 4. Object.setPrototypeOf();
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj --> anotherObj --> Object.prototype --> null

// 5. __proto__ => deprecated
const obj1 = {};
obj1.__proto__ = { x: 1 };
obj1.__proto__.__proto__ = { y: 2 };
console.log(obj1.x); // 1
console.log(obj1.y); // 2
// obj1 --> { x: 1 } --> { y: 2 } --> Object.prototype --> null
