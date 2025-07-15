// const boxPrototype = {
//   getValue() {
//     return this.value;
//   },
// };

// const boxes = [
//   { value: 1, __proto__: boxPrototype },
//   { value: 2, __proto__: boxPrototype },
//   { value: 3, __proto__: boxPrototype },
// ];

function Box(value) {
  this.value = value;
  // this.getValue = function (value) {
  //   return this.value;
  // };
}
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
