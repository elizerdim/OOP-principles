// value types: strings, numbers, booleans, symbols, undefined, null 
let x = 10;
let y = x;

x = 20;

console.log(x); // returns 20
console.log(y); // returns 10
// value is stored in the variable

// reference types: objects, arrays, functions
let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a); // returns { value: 20 }
console.log(b); // returns { value: 20 }
// Value is stored in a location in the memory and 
// the reference to that location is stored in the variable.
// When a is copied to b, the reference to that location is copied to b.


// number
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // returns 10


// object
let obj = { value: 10 };

function increaseValue(obj) {
  obj.value++;
}

increaseValue(obj);
console.log(obj); // returns { value: 11 }

