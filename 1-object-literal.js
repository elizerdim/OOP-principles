const employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime * this.rate);
  }
}

employee.getWage();

//this object encapsulates the following data and function
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

//the method inside the object has no parameters whereas the one on the outside has 3
//a symptom of procedural programming is functions with a lot of parameters
//"The best functions are those with no parameters" -Uncle Bob