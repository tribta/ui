/**
 * ==============================
 * LESSON: Mixins
 * ==============================
 */
const canEat = {
  eat: function () {
    this.hungry--;
    console.log("Eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("Swimming");
  },
};

//NOTE: Cach 1: tạo object mới bằng cách ghép các methods
const cat = Object.assign({}, canEat, canWalk);
console.log(cat);

//NOTE: Cach 2: tạo object mới bằng cách sử dụng property
function Cat() {
  this.hungry = 10;
}
function Goldfish() {
  this.hungry = 5;
}

Object.assign(Cat.prototype, canEat, canWalk);
Object.assign(Goldfish.prototype, canEat, canSwim);
const c = new Cat();
const gf = new Goldfish();
c.eat();
c.walk();
gf.eat();
gf.swim();

// spread operator ...objectName
function Mixins(target, ...sources) {
  Object.assign(target, ...sources);
}

Mixins(Cat.prototype, canEat, canWalk, canSwim);
const z = new Cat();
z.eat();
z.walk();
z.swim();