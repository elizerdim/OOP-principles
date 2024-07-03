class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
increaseRectangleWidth(rectangle1);

const rectangle2 = new Rectangle(5, 5);
increaseRectangleWidth(rectangle2);

console.log(rectangle1.area()); // returns 22
console.log(rectangle2.area()); // returns 30

// According to Liskov substitution principle, replacing rectange2 with a new Square object
// should give the exact same results because it's also a square, but it gives different results:
const square = new Square(5, 5);
increaseRectangleWidth(square);

console.log(square.area()); // returns 36

// So instead of Square inheriting from Rectangle, both classes can inherit from another
// class called Shape - or composition can be used instead of inheritance
