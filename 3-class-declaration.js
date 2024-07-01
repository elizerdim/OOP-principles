class Player {
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

// or it can be defined after class declaration
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
const flying = factory.generateFlyingEnemy("batman");
flying.fly() // batman can fly!

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim() // aquaman can swim!

console.log(Object.getOwnPropertyNames(EnemyFactory));
console.log(Object.getOwnPropertyNames(factory));
console.log(Object.getOwnPropertyNames(factory.__proto__));
console.log(Object.getOwnPropertyNames(flying));
console.log(Object.getOwnPropertyNames(flying.__proto__));
console.log(Object.getOwnPropertyNames(swimming));
console.log(Object.getOwnPropertyNames(swimming.__proto__));

// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.

// Static methods are often utility functions, such as functions to create or clone objects,
// whereas static properties are useful for caches, fixed-configuration, 
// or any other data that doesn't need to be replicated across instances. (info from MDN)