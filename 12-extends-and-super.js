class Player {
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

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    super.speak("Rawr!") // runs immediately when an instance is created
  }
}

const player = new Player("player1", 100, 10, []);
const warrior = new Warrior("Genghis Khan", 300, 50, ["Sabre"], "Leather Shield");
warrior.speak("Come and sip from the cup of destruction");

console.log(Player) // returns ['length', 'prototype', 'name']
console.log(Player.prototype) // returns ['constructor', 'speak'] - the 2 methods in the class

Player.prototype.hi = "Hello"

console.log(Player.prototype) // returns ['constructor', 'speak', 'hi'] - with the added 'hi' property

console.log(warrior instanceof Player) // true
console.log(warrior instanceof Warrior) // true
console.log(warrior instanceof Array) // false
console.log(warrior instanceof Object) // true