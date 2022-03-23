class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(value) {
    if (value instanceof Square) {
      return square.side * square.side;
    } else if (value instanceof Rectangle) {
      return rectangle.width * rectangle.height;
    } else if (value instanceof Circle) {
      return Math.pow(circle.radius, 2) * Math.PI;
    }
  }
}

const areaCalculator = new AreaCalculator();
const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
