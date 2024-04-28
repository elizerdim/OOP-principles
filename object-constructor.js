function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    return "Hello, I'm " + this.name;
  }
}

const player1 = new Player('steve', 'X');
player1.sayName();