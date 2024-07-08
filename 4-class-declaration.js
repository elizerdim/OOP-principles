class Player {
  description = "player" // 'description' is created as a property on all instances

  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  sayName() {
    return "Hello, I'm " + this.name;
  };
}

const player1 = new Player('steve', 'X');
player1.sayName();

console.log(Object.getOwnPropertyNames(Player)); // returns ['length', 'name', 'prototype'] - 'name' here is not the same as the 'name' property
console.log(Object.getOwnPropertyNames(Player.prototype)); // returns ['constructor', 'sayName']
console.log(Object.getOwnPropertyNames(player1)); // returns properties - ['description', 'name', 'marker']
console.log(Object.getOwnPropertyNames(player1.__proto__)); // returns methods in the prototype - ['constructor', 'sayName']
// methods in classes go directly into the prototype



// The 'static' keyword defines a static property or method for a class.
// Static properties and methods are not included in the instances of the class
class ClassWithStaticMethod {
  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }
  static {
    console.log('Class static initialization block called');
  }
}

console.log(ClassWithStaticMethod.staticProperty); // returns "someValue"
console.log(ClassWithStaticMethod.staticMethod()); // returns "static method has been called."

// static fields are inherited with 'extends' keywords
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "static field";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"


// Static method example with 'class' syntax:
// example from https://www.youtube.com/watch?v=GEfh_B_JAl0&list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9&index=2
class EnemyFactory {
  generateFlyingEnemy(name) {
    return new (class FlyingEnemy {
      constructor(name) {
        this.name = name;
      }
      
      fly() {
        console.log(`${this.name} can fly!`)
      }
    })(name)
  }
  
  static generateSwimmingEnemy(name) {
    class SwimmingEnemy {
      constructor(name) {
        this.name = name;
      }
      
      swim() {
        console.log(`${this.name} can swim!`)
      }
    }
    
    return new SwimmingEnemy(name);
  }
}

// using the 'static' keyword is the same as assigning it directly to the class
EnemyFactory.generateRunningEnemy = function(name) {
  class RunningEnemy {
    name = name; //property can also be defined without the constructor since it has access to 'name' in the outer scope

    run() {
      console.log(`${this.name} can run!`)
    }
  }

  return new RunningEnemy(name);
}

const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman"); // regular method accessed from the instance
flying.fly() // batman can fly!

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman"); // static method accessed from the class
swimming.swim() // aquaman can swim!

console.log(Object.getOwnPropertyNames(EnemyFactory));
console.log(Object.getOwnPropertyNames(factory));
console.log(Object.getOwnPropertyNames(factory.__proto__));
console.log(Object.getOwnPropertyNames(flying));
console.log(Object.getOwnPropertyNames(flying.__proto__));
console.log(Object.getOwnPropertyNames(swimming));
console.log(Object.getOwnPropertyNames(swimming.__proto__));

// Static properties/methods cannot be directly accessed on instances of the class. 
// They are not included in the new object when a new instance is created.
// Instead, they're accessed on the class itself.

// Static methods are often utility functions, such as functions to create or clone objects,
// whereas static properties are useful for caches, fixed-configuration, 
// or any other data that doesn't need to be replicated across instances. (info from MDN)


// Inheritance
// 'extends' and 'super'
class GamePlayer {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`)
  }
}

class Warrior extends GamePlayer {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    super.speak("Rawr!") // runs immediately when an instance is created
  }
}

// super(args) - invokes the constructor of the superclass
// super.method - using 'super' with dot notation gives access to the methods in the superclass's prototype

// 'extends' is equivalent to 'setPrototypeOf' in constructor functions

const player = new GamePlayer("player1", 100, 10, []);
const warrior = new Warrior("Genghis Khan", 300, 50, ["Sabre"], "Leather Shield");
warrior.speak("Come and sip from the cup of destruction");

console.log(Object.getOwnPropertyNames(GamePlayer)) // returns ['length', 'prototype', 'name']
console.log(Object.getOwnPropertyNames(GamePlayer.prototype)) // returns ['constructor', 'speak'] - the 2 methods in the class
console.log(Object.getPrototypeOf(warrior) === Warrior.prototype)
console.log(Object.getPrototypeOf(warrior) === GamePlayer.prototype)

GamePlayer.prototype.hi = "Hello"

console.log(Object.getOwnPropertyNames(GamePlayer.prototype)) // returns ['constructor', 'speak', 'hi'] - with the added 'hi' property

console.log(warrior instanceof GamePlayer) // true
console.log(warrior instanceof Warrior) // true
console.log(warrior instanceof Array) // false
console.log(warrior instanceof Object) // true

// Private properties and methods
// Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class. 
// The privacy encapsulation of these class properties is enforced by JavaScript itself. 
// The only way to access a private property is via dot notation, and you can only do so within the class that 
// defines the private property. (explanation from MDN)
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

// Getters and Setters
// This class saves the temp in Fahrenheit
// The getter returns the temp in Celcius
// The setter takes a temp in Celcius and saves it in the object in Fahrenheit
// example is from freeCodeCamp
class Thermostat {
  constructor(_temp) {
    this._temp = _temp;
  }

  get temperature() {
    return 5/9 * (this._temp - 32);
  }

  set temperature(tempInCelcius) {
    this._temp = tempInCelcius * 9.0 / 5 + 32    
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius