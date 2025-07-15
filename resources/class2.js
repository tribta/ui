/**
 * ==============================
 * LESSON: Symbol() & WeakMap()
 * ==============================
 */
// unique value
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

// private property
const _radius = Symbol();
class Circle {
  constructor(r) {
    this[_radius] = r;
  }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle._radius);

// private method
const _radius2 = Symbol();
class Circle2 {
  constructor(r) {
    this.radius = r;
  }
  [_radius2]() {
    console.log("I draw a circle.");
  }
}

const circle2 = new Circle2(10);
circle2[_radius2]();

// Ứng dụng Symbol() trong BankAccount:
const PRIVATE_ID = Symbol();
const PRIVATE_BALANCE = Symbol();

class BankAccount {
  constructor(id, owner, balance) {
    this[PRIVATE_ID] = id;
    this.owner = owner;
    this[PRIVATE_BALANCE] = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this[PRIVATE_BALANCE] += amount;
    }
  }
}
const account = new BankAccount(12345, "Harry Potter", 1000);
account.deposit(500);
console.log(account.balance);
console.log(account.id);

// WeakMap();
const privateData = new WeakMap();
class Person {
  constructor(name, age) {
    this.name = name;
    privateData.set(this, {
      age: age,
    });
  }
}
const person = new Person("Julius Ceasar", 99);
console.log(person.name);
console.log(person.age);
console.log(person);
console.log(privateData.get(person));

// Sử dụng #
class Stack {
  #items = [];
}

const stack = new Stack();
stack.items.push("0x123");
console.log(stack);