// Factory functions set up and return the new object when you call the function. 
// They do not use the prototype, which incurs a performance penalty.

function createPlayer(name, marker) {
  return {
    name,
    marker,
    sayName() {
      return "Hello, I'm " + this.name;
    }
  }
}

const player2 = createPlayer('steve', 'X'); // 'new' keyword is not used when creating an object with a factory function
player2.sayName();

console.log(player2.constructor) // returns JavaScript's built in constructor function called Object, 
// which is called internally when an object literal is created.

// JavaScript does this under the hood:
// const player2 = new Object();

// JavaScript also uses these under the hood:
// new Array()
// new String()
// new Boolean()
// new Number()
// new Function()

// These have built-in properties and methods such as Array.length and String.prototype.toLowerCase()
// e.g. MDN link for String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// These are built-in constructors and should not be used when writing code.

// Declaring an object literal or a string is considered an instance of these built-in objects,
// so they have access to the properties and methods in them.


// Closures can be utilized to create private variables with factory functions to achieve abstraction
function createUser(name) {
  const discordName = "@" + name;
  let reputation = 0;

  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
console.log(josh);
josh.giveReputation();
console.log(josh.getReputation());
console.log(josh.reputation); // returns undefined


// Factory functions don't use prototypes but there are ways of imitating prototypal inheritance
// This factory function imitates inheritance to include 2 methods from createUser along with
// its own property (name) and method (increaseLevel) 
function createPlayerUser(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}

// Object.assign method can also be used to imitate prototypal inheritance
// to add additional properties in factory functions
// Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Properties in the target object are overwritten by properties in the sources 
// if they have the same key. Later sources' properties overwrite earlier ones.

function createPlayerUserObj (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}
