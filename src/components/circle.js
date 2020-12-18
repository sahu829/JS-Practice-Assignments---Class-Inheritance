// import using require

import Shape from "./shape";

//const { default: Shape } = require("./shape");

//const { default: Shape } = require("./shape");

// declare class

// export class using module.exports

module.exports = class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea = function () {
    console.log("extends class");
  };
};
