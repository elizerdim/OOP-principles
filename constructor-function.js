// Constructor functions are used to create objects
// It is considered good practice to name constructor functions with an upper-case first letter.

// Properties are defined in the constructor function
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Methods are defined on the prototype property
Player.prototype.sayName = function() {
  return "Hello, I'm " + this.name;
}

const player1 = new Player('steve', 'X');
player1.sayName();

// When 'new' operator is used to call a function, it creates an empty object and sets 'this' to point to that object
// otherwise, 'this' inside a function point to Window object in the browser or the Global object in node

// A constructor function called with 'new' operator returns the new object with properties and methods.
// There is no need to return anything from the constructor function itself.

console.log(Player); // returns [Function: Player]
console.log(Player.prototype); // returns { sayName: [Function (anonymous)] }
console.log(player1); // returns Player { name: 'steve', marker: 'X' }
console.log(player1.__proto__); // returns { sayName: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // Player is a constructor function
console.log(Object.getPrototypeOf(player1) === Player.prototype); // player1 is an object
console.log(Player.prototype.constructor); // returns [Function: Player]
console.log(player1.constructor); // returns [Function: Player]

Object.getPrototypeOf(player1) === Player.prototype //returns true
Object.getPrototypeOf(Player.prototype) === Object.prototype //returns true
// All Object Constructors inherit from Object.prototype

// An Object Constructor can be made to inherit from the prototype of another Object Constructor 
// with setPrototypeOf()

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return "Hello, I'm " + this.name;
}

function User(name, marker) {
  this.name = name;
  this.marker = marker;
}

User.prototype.getMarker = function() {
  return "My marker is " + this.marker;
}

console.log(Object.getPrototypeOf(User.prototype) === Object.prototype) // returns true
Object.setPrototypeOf(User.prototype, Person.prototype)
console.log(Object.getPrototypeOf(User.prototype) === Person.prototype) // returns true

// Using assignment operator as User.prototype = Person.prototype doesn't work because 
// it sets User prototype as a reference to the Person prototype instead of a copy.
// If assignment operator is used, trying to override an inherited method in User will change
// the original method on Person as well, leading to unexpected behavior and bugs in the code.



// Finally, because setPrototypeOf() causes performance issues in browsers,
// mdn suggests that Object.create() should be used instead
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Logs 'Shape moved.'


// Getters and Setters
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; // private property/variable

  this.draw = function() {
    console.log('draw');
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation;
circle.defaultLocation = { x: 1, y: 1 }
circle.draw();