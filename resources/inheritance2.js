function HtmlElement() {
  // 1. click()
  // syntax: this.click
  this.click = function () {
    console.log("Click the input element!!!");
  };
}
const items = [];

function HtmlSelectElement(items) {
  this.items = items || [];

  // addItem(item) => push && append
  this.addItem = function (item) {
    this.items.push(item);
  };
  // removeItem(item) => slice || splice || filter
  this.removeItem = function (item) {
    this.items = this.items.filter((i) => i !== item);
  };
}

// kế thừa:
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// check yêu cầu số 2:
const array = new HtmlSelectElement();

array.items = [1, 2, 3, 4, 5];
array.removeItem(1);
array.addItem(6);

// 2. focus()
// syntax: HtmlElement.prototype
HtmlElement.prototype.focus = function () {
  console.log("Focus to input bar!!!");
};

// Object initialize:
const input = new HtmlElement();
input.click();
input.focus();

const render = function (a) {
  return `<input>\n
           <option>${a}\n
        <input>\n`;
};
