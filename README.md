# Object Oriented Programming Principles

I've been learning OOP for quite some time now, and I decided to make a repo of OOP principles for future reference. I will also include some technical explanations here.

## Procedural vs. Object-Oriented Programming

In **procedural programming**, there are a bunch of variables in which data is stored and functions that operate on these data. This turns into spagetti code as the project grows because of the interdependency between these variables and functions.

In **object-oriented programming**, related variables and functions are combined and grouped in objects.

## 4 Pillars of Object-Oriented Programming

**Encapsulation** - Bundling data, along with the methods that operate on that data, into an object, thereby hiding its internal representation or state from the outside.

**Abstraction** - Hidden Complexity - Complex implementation details are hidden inside objects and only the necessary features are exposed to the outside.

Benefits: 

<ins>simpler interface</ins> - it is easier to interact with the objects and use their methods

<ins>reduced impact of change</ins> - if a method inside an object is changed in the future, it won't leak to the rest of the code outside of the object and none of that code will require any changes

**Inheritance** - When an object is created based on another object and inherits all of its properties and methods. The benefit of inheritance is it helps eliminate redundant code and lower memory usage, thus increasing performance.

**Polymorphism** - Allows treatment and handling of different data types through the same interface; it is the ability to present the same interface for different data types. It is achieved by redefining or overwriting a method inside a derived child class of a parent. It eliminates the need for long lines of ```if...else``` or ```switch``` statements.

For example, different classes of circle, square, rectangle, triangle, and so on can inherit various properties and methods from a class of shape, while also having their own draw() method, overwriting the one defined in the class of shape.

## Useful Resources
[Object-Oriented Programming in JavaScript](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1073s) - This beginner's video explains OOP principles in a simple and concise way.
[Prototypal inheritance](https://javascript.info/prototype-inheritance) - Detailed explanation of prototypes and inheritance
[Object.create() method](https://www.youtube.com/watch?v=MACDGu96wrA)