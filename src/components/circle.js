// import using require
let Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {}
}
module.exports = Circle;
// export class using module.exports
