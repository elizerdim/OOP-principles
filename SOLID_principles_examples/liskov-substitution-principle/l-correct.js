// Creating two superclasses instead of one solves the problem

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

// This example also illustrates the problem with inheritance and why maybe composition should be favored.

// In addition to flying, a duck can also swim. But a class cannot inherit from two superclasses,
// so a third class maybe called FlyingSwimmingBird should be created for duck to inherit from.
// But doing this each time this problem is encountered leads to lots of permutations, which makes the 
// inheritance relations really complicated. Composition - which means adding functionality instead of 
// inheriting functionality - can be used in such cases.
