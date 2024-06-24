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