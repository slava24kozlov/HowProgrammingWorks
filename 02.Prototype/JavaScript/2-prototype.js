'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function(obj) {    //because Function === Object, we can add a property to the function
  const { x, y } = obj;
  return new Point(x, y);
};

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
};

console.log('function prototype:', (function() {}).prototype);
console.log('lambda prototype:', (() => {}).prototype);  //arrow function doesn't have prototype

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
console.log(Point.from({x: 1, y: 1}));
