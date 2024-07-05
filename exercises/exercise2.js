// exercises 1 and 2 from https://www.youtube.com/watch?v=b-xlD981pic&list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9&index=4

// exercise 1
/*
    1. Create a class called "Shape" whose constructor
       takes one parameter:
       - colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"

    2. Add a method to "Shape" called "describe" that
       will log out the following to the console:
       "A ${this.colour} ${this.type}"

    3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property

    4. Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)
    
    5. Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property

    6. Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height)

    7. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/

// exercise 2
/*
    1. Copy your code over from your exercise-2 solution.

    2. Add another class called "Circle" that extends
       the "Shape" class.
    
    3. The "Circle" constructor will have two parameters:
       - colour
       - radius
       Call the super constructor with "colour"
       Assign "radius" to the instance of "Circle"
       Assign "Circle" to the "type" property

    4. Add an "area" method to "Circle" that will calculate
       and return the total area of the circle.
       (Area of a circle is: pi * radius * radius )
       * Lookup how to get the value for "pi" on Google/MDN

    5. Add a method to "Circle" called "describe" that
       will log out the following to the console:
       "A round and awesome ${this.colour} ${this.type}"

    6. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       const circle = new Circle("green", 3);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       console.log( circle.area() ); // 28.27433
       for ( const shape of [square, rectangle, circle] ) {
        shape.describe();
       }
       // A blue square
       // A red rectangle
       // A round and awesome green circle
*/

class Shape {
  constructor(color = "Transparent") {
    this.color = color;
    this.type = "Shape";
  }

  describe() {
    console.log(`A ${this.color} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
    this.type = "Square";
  }

  area() {
    return this.sideLength ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
    this.type = "Circle";
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  describe() {
    console.log(`A round and awesome ${this.color} ${this.type}`);
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
const circle = new Circle("green", 3);
console.log(square.area());
console.log(rectangle.area());
console.log(circle.area());
for (const shape of [square, rectangle, circle]) {
  shape.describe();
}
