// warmup exercise from https://www.youtube.com/watch?v=dVpSNOGj1uk&list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9&index=6

/*
    1. Create a class called "Printer" that has a constructor
       that takes two parameters:
       - brand (String)
       - colours (Array of Strings)
       *Don't set these to the "this" value yet

    2. Create a PRIVATE method called "setupPrinter" that takes
       the same two parameters as the constructor (brand, colours)
    
    3. This method will assign the brand and colours to the "this"
       Object inside the class (the instance of the class)

    4. Call the "setupPrinter" function from inside the constructor

    5. Create a new instance of Printer and see if the brand and
       colours got set correctly

    Example:
       class Printer {...}
       const printer = new Printer("HP", ["Red", "Green", "Blue"]);
       console.log( printer.brand, printer.colours )
       // HP ["Red", "Green", "Blue"]
*/

class Printer {
  constructor(brand, colors) {
    this.#setupPrinter(brand, colors);
  }

  #setupPrinter(brand, colors) {
    this.brand = brand;
    this.colors = colors;
  }
}

const printer = new Printer("HP", ["Red", "Green", "Blue"]);
console.log(printer.brand, printer.colors);
