// exercise 1 from https://www.youtube.com/watch?v=dVpSNOGj1uk&list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9&index=6

/*
    1. Create a class called "Utilties"

    2. Add a STATIC method to "Utilties" called
       "camelCase" that has a single parameter:
       - str (String)

    3. Add logic to "camelCase" that assumes that
       "str" is a String and returns the camel-
       cased version of the String. Eg:
       "hello there" => "helloThere"
       "Number Stock Items" => "numberStockItems"
       * You can assume that the spaces are where
         we move to the next upper-cased word

    4. Test this function on some Strings:
       console.log(Utilities.camelCase("hello there"))
       // helloThere
       console.log(Utilities.camelCase("HELLO THERE"))
       // helloThere
       console.log(Utilities.camelCase("I love cookies"))
       // iLoveCookies
       console.log(Utilities.camelCase("Monkey Banana"))
       // monkeyBanana
*/

class Utilities {
  static camelCase(str) {
    if (typeof str === "string") {
      const wordsArr = str.split(" ");
      const camelCaseWordsArr = [wordsArr[0].toLowerCase()];

      for (let i = 1; i < wordsArr.length; i++) {
        const titleCaseWord =
          wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1).toLowerCase();
        camelCaseWordsArr.push(titleCaseWord);
      }

      return camelCaseWordsArr.join("");
    }
  }
}

console.log(Utilities.camelCase("hello there"));
console.log(Utilities.camelCase("HELLO THERE"));
console.log(Utilities.camelCase("I love cookies"));
console.log(Utilities.camelCase("Monkey Banana"));
