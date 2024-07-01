// This is spaghetti code
let employeeOne_baseSalary = 30_000;
let employeeOne_overtime = 10;
let employeeOne_rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

getWage(employeeOne_baseSalary, employeeOne_overtime, employeeOne_rate);

// This is object-oriented code with an object literal
const employeeOne = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime * this.rate);
  }
}

employee.getWage();

// The method inside the object has no parameters,
// whereas the function in the spaghetti code has 3.
// A symptom of procedural programming is functions with a lot of parameters.
// "The best functions are those with no parameters" -Uncle Bob