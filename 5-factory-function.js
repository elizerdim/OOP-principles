// Factory functions use closures to create private variables
// They are regular functions that return an object
// They don't use the prototype, so they are not good for performance if
// you are creating thousands of object

// Constructor function
const User = function(name) {
  this.name = name;
  this.discordName = "@" + name;
  this.reputation = 0;
  this.getReputation = function() {
    return this.reputation;
  }
  this.giveReputation = function() {
    this.reputation += 1;
  }
}

// Unlike the constructor above, the object created with this factory function
// doesn't contain the reputation variable itself, it only contains two methods
// that read or increase its value

// Factory function
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();


// Factory functions don't use prototypes but there are ways of imitating
// prototypal inheritance with them too

// The factory function createPlayer returns an object with the 
// name variable and the two methods that exist on createUser
// along with an additional method of itself

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}


// Object.assign method can also be used to imitate prototypal inheritance
// to add additional properties in the subtype
// Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

function createPlayer (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}
