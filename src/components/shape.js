// declare class

// export class using module.exports

module.exports = class Shape {
  constructor() {
    this.color = "red";
  }

  drawShape = function () {
    console.log("drawshape");
  };
  calculateArea = function () {
    console.log("calculateArea");
  };
};
