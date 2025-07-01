/**
 * ==============================
 * LESSON: Encapsulation - Đóng gói
 * ==============================
 * ==============================
 */

// TODO:
// object myCar:
// 3 properties & 3 methods.

const myCar = {
  brand: "Mercedes-Benz",
  model: "EQA",
  color: "Black",

  start() {
    console.log("Start the car");
  },
  stop() {
    console.log("Stop the car");
  },
  move() {
    console.log("The car is moving");
  },
};

// Procedure

/**
 * ==============================
 * LESSON: Abstract - trừu tượng
 * ==============================
 */

function Circle(radius) {
  this.r = radius;

  defaultLocation = { x: 0, y: 0 };
  // anonymous function
  computeLocation = () => {
    console.log("Print location to draw a circle!");
  };

  // calls get method:
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (radius) {
      if (!radius.x || !radius.y) 
        throw new Error("Invalid location!!!");
      defaultLocation = radius;
    },
  });

  // calls set method:

  this.draw = function () {
    this.computeLocation();
  };

  function circleArea(r) {
    return console.log(r * r * Math.PI);
  }

  this.getCircleArea = () => {
    circleArea(5);
  };
}

const circle = new Circle(5);
