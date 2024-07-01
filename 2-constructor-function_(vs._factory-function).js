// To create an object type, we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

// In the constructor function, 'this' has no value.
// The value of 'this' will become the new object when a new object is created.

function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  this.sayName = function() {
    return "Hello, I'm " + this.name;
  }
}
// Methods should not be defined directly inside the constructor function in this way.
// They should be defined in the prototype to save memory, examples are in the prototype.js file.

const player1 = new Player('steve', 'X');
player1.sayName();

// When 'new' operator is used to call a function, 
// it creates an empty object and sets 'this' to point to that object
// otherwise, 'this' inside a function point to Window object in the browser 
// or the Global object in node

// A constructor function called with 'new' operator 
// returns the new object with properties and methods.
// There is no need to return anything from the constructor function itself.

// Object.prototype.constructor
// The constructor data property of an Object instance 
// returns a reference to the constructor function that created the instance object. 
// Note that the value of this property is a reference to the function itself, 
// not a string containing the function's name.

player1.constructor // returns Player constructor function

// Factory function version
function createPlayer(name, marker) {
  return {
    name,
    marker,
    sayName() {
      return "Hello, I'm " + this.name;
    }
  }
}

const player2 = createPlayer('steve', 'X');
player2.sayName();

player2.constructor // returns JavaScript's built in constructor function called Object, 
// which is called internally when an object literal is created.

// JavaScript does this under the hood:
// const player2 = new Object();

// there is also:
// new String()
// new Boolean()
// new Number()
// new Function()

// These are also objects with built-in properties and methods 
// such as .length, .toLowerCase(), etc.

// These are built-in constructors and should not be used when writing code.
