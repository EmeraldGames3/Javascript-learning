 const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello : () => console.log("Hi I'm Spongebob"),
 };

 const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 32,
    isEmployed: false,
    friend: person1,
    sayHello : function(){console.log("Hey I'm Patrick")},
 }

 console.log(person1);
 console.log(person1.isEmployed);
 console.log(person1["age"]);

 console.log(person2);
 person1.sayHello();
 person2.sayHello();