'use strict';

function Rect(x, y, width, height) {  //new вызывает конструктор у function и class
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.toString = function() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  };
}

const p1 = new Rect(10, 20, 50, 50); //создался объект c помощью конструктора Rect у которого prototype Rect

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
