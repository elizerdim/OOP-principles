// This example is from The Odin Project

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476


// In the past, as there was only var, and it has no block-level visibility, 
// programmers invented a way to emulate it. 
// What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).
// That’s not something we should use nowadays
// https://javascript.info/var#iife

(function() {

  var message = "Hello";

  alert(message); // Hello

})();

// message variable is not available in the global scope