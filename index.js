function HtmlElement() {
  // 1. click()
  // syntax: this.click
  this.click = function () {
    console.log("Click the input element!!!");
  };
}

// 2. focus()
// syntax: HtmlElement.prototype
HtmlElement.prototype.focus = function () {
  console.log("Focus to input bar!!!");
};

// Object initialize:
const input = new HtmlElement();
input.click();
input.focus();
