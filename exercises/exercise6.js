// exercise 2 from https://www.youtube.com/watch?v=dVpSNOGj1uk&list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9&index=6

/*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/

class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  static isMammal() {}
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  static isCute() {}
  eatBanana() {}
}

// new keyword invokes the constructor method of the class, creating a new object with instance properties
// the methods on the class, i.e. instance methods, go to the prototype of the instance

const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal)); // mammal, eyes - instance properties
console.log(Object.getOwnPropertyNames(animal.__proto__)); // constructor, describe - instance methods
console.log(Object.getOwnPropertyNames(Animal)); // knownMammals, isMammal - static properties and methods
console.log(Object.getOwnPropertyNames(Animal.__proto__)); // Function.prototype

const monkey = new Monkey();
console.log(Object.getOwnPropertyNames(monkey)); // mammal, eyes, height, weight - instance properties + inherited (instance) properties
console.log(Object.getOwnPropertyNames(monkey.__proto__)); // constructor, eatBanana - instance methods
console.log(Object.getOwnPropertyNames(Monkey)); // knownMonkeys, isCute - static properties and methods
console.log(Object.getOwnPropertyNames(Monkey.__proto__)); // describe - Animal.prototype, i.e. static properties and methods of Animal
