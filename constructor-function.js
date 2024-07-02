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

console.log(Player);
console.log(Player.prototype);
console.log(player1);
console.log(player1.__proto__);
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // Player is a constructor function
console.log(Object.getPrototypeOf(player1) === Player.prototype); // player1 is an object
console.log(Player.prototype.constructor);
console.log(player1.constructor);

// When 'new' operator is used to call a function, it creates an empty object and sets 'this' to point to that object
// otherwise, 'this' inside a function point to Window object in the browser or the Global object in node

// A constructor function called with 'new' operator returns the new object with properties and methods.
// There is no need to return anything from the constructor function itself.