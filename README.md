# Object Oriented Programming Principles

I've been learning OOP for quite some time now, and I decided to make a repo of OOP principles for future reference. I will also include some technical explanations here.

## Procedural vs. Object-Oriented Programming

In **procedural programming**, there are a bunch of variables in which data is stored and functions that operate on these data. This turns into spagetti code as the project grows because of the interdependency between these variables and functions.

In **object-oriented programming**, related variables and functions are combined and grouped in objects.

## 4 Pillars of Object-Oriented Programming

**1-Encapsulation** - Bundling data, along with the methods that operate on that data, into an object, thereby hiding its internal representation or state from the outside.

**2-Abstraction** - Hidden Complexity - Complex implementation details are hidden inside objects and only the necessary features are exposed to the outside.

Benefits: 

<ins>simpler interface</ins> - it is easier to interact with the objects and use their methods

<ins>reduced impact of change</ins> - if a method inside an object is changed in the future, it won't leak to the rest of the code outside of the object and none of that code will require any changes

**3-Inheritance** - When an object is created based on another object and inherits all of its properties and methods. The benefit of inheritance is it helps eliminate redundant code and lower memory usage, thus increasing performance.

**4-Polymorphism** - Allows treatment and handling of different data types through the same interface; it is the ability to present the same interface for different data types. It is achieved by redefining or overwriting a method inside a derived child class of a parent. It eliminates the need for long lines of `if...else` or `switch` statements.

For example, different classes of circle, square, rectangle, triangle, and so on can inherit various properties and methods from a class of shape, while also having their own draw() method, overwriting the one defined in the class of shape.

## SOLID Design Principles

- Single Responsibility Principle
- Open-Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Single Responsibility Principle

Every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".

### Open-Closed Principle

Every class, module, or function in a program should be open for extension, but closed for modification.

- A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.

- A module will be said to be closed if it is available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).

### Liskov Substitution Principle

Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

An overridden method of a subclass needs to accept the same input parameter values as the method of the superclass. That means you can implement less restrictive validation rules, but you are not allowed to enforce stricter ones in your subclass. Otherwise, any code that calls this method on an object of the superclass might cause an exception, if it gets called with an object of the subclass.

### Interface Segregation Principle

No code should inherit or be forced to depend on methods it does not use.

### Dependency Inversion Principle

High-level modules should depend on abstractions rather than concrete implementations. 

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.


## Useful Resources
[Object-Oriented Programming in JavaScript](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1073s) - This beginner's video explains OOP principles in a simple and concise way - most of the examples and descriptions in here are from this video.

[Prototypal inheritance](https://javascript.info/prototype-inheritance) - Detailed explanation of prototypes and inheritance

[Object.create() method](https://www.youtube.com/watch?v=MACDGu96wrA)

[Constructors Are Bad For JavaScript](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/) - An article about the drawbacks of constructors in JavaScript.

"c instanceof C does not mean that c was created by C or that c has anything to do with C. It basically just means “at this moment, the prototype C will use if it’s invoked as a constructor (even if it’s never actually invoked as a constructor) appears somewhere in the chain of prototypes of c”. Essentially, it’s equivalent to C.prototype.isPrototypeOf(c), but the latter is far more upfront about what it’s actually doing."

[Module Pattern in JavaScript](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm) - Even though IIFEs are not needed anymore with the newer JavaScript modules, this is a great article on the module pattern. It also explains how primitive and reference types work differently in an IIFE module, it helps to understand how primitive and reference types differ in JavaScript.

[Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA) - Great comparison of composition and inheritance with very clear examples.

[Classical Inheritance is obsolete](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9) - This article argues that using `class` keyword is not necessary in any situation.

[SOLID design principles](https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5) - Short article series on SOLID design principles

[SOLID design principles video series](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9) - Video series by Web Dev Simplified

[JavaScript OOP video series on YouTube from Tech with Nader](https://www.youtube.com/playlist?list=PLovN13bqAx7DVYEicMjXyCmmGa_bueVt9)

[SOLID Design Principles Explained: The Liskov Substitution Principle with Code Examples](https://stackify.com/solid-design-liskov-substitution-principle/#:~:text=The%20Liskov%20Substitution%20Principle%20in,the%20objects%20of%20your%20superclass.)