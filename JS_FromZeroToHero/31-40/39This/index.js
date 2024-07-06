const person1 = {
    name: "Spongebob",
    favFodd: "hamburgers",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
}

 const person2 = {
    name: "Patrick",
    lastName: "Star",
    age: 32,
    isEmployed: false,
    friend: person1,
    sayHello : person1.sayHello,
 }

person1.sayHello();
person2.sayHello();

console.log(this); // The window itself