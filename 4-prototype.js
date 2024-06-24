function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    return "Hello, I'm " + this.name;
  }
}

const player1 = new Player('steve', 'X');


Object.getPrototypeOf(player1) === Player.prototype //returns true

// Player.prototype refers to the .prototype property (which is an object) 
// of the Object Constructor (Player)

// Since all object instances created with Player inherit from it, 
// they inherit all the properties and methods in Player.prototype object too,
// i.e., they inherit from the Player.prototype object


Player.prototype.sayHello = function() {
  return "Hello, I'm " + this.name;
}

// sayHello() method defined in the Player constructor can be defined 
// on Player.prototype instead. Properties and functions common among 
// all object instances should be defined on the prototype to save memory

// __proto__ is a deprecated getter/setter for [[Prototype]] of an object instance


Object.getPrototypeOf(Player.prototype) === Object.prototype //returns true

// All Object Constructors inherit from Object.prototype, which has methods such
// as hasOwnProperty() and valueOf()


// An Object Constructor can be made to inherit from the prototype of another 
// Object Constructor instead of directly from Object.prototype using 
// setPrototypeOf()

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return "Hello, I'm " + this.name;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return "My marker is " + this.marker;
}

Object.getPrototypeOf(Player.prototype) // returns Object.prototype

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

// Player.prototype = Person.prototype doesn't work because it sets Player prototype
// to directly refer to the Person prototype instead of a copy and trying to 
// overwrite an inherited method on Player prototype will change the original 
// method on Person prototype as well 


// Finally, because setPrototypeOf() causes performance issues in browsers,
// mdn suggests that Object.create() should be used instead
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return "Hello, I'm " + this.name;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return "My marker is " + this.marker;
}

Player.prototype = Object.create(Person.prototype, {
  // Player.prototype.constructor should be set to Player, otherwise
  // it will take the prototype.constructor of Person (parent)
  constructor: {
    value: Player,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});