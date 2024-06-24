// for...of (arrays)
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// for...in (objects)
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  if (typeof object[property] !== 'function') {
    console.log(`${property}: ${object[property]}`);
  }
}

// 'in' operator can also be used to check if a property exists in an object
if ('a' in object) {
  console.log("Object has 'a' property")
}