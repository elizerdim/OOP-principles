// Constructor function
// example is from https://www.youtube.com/watch?v=PFmuCDHHpwk&t=2834s
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; // private property/variable

  let computeOptimumLocation = function(factor) {
    // ...
  } // private method/function

  this.draw = function() {
    computeOptimumLocation(0.1);
    console.log('draw');
  }
}

const circle = new Circle(10);
circle.draw();


// 'class' syntax
// example is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}

const instance = new ClassWithPrivateField();


// Factory function
// same example from 5-factory-function.js
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0; // private variable
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}