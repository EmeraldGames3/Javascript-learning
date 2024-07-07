const p = {
    fullName: 'Spongebob Squarepants',
    age: 30,
    isStudent: true,
    hobbies: ['karate', 'jellyfishing', "cooking"],
    address : {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Atlantis? idk"
    }
}

console.log(p);
console.log(p.hobbies);
console.log(p.hobbies[1]);
console.log(p.address.street);
console.log(p.address['street']);

for(const property in p.address) {
    console.log(property, p.address[property]);   
}

class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country){
        this.street = street;
        this.country = country;
        this.city = city;
    }
}

const p1 = new Person("Spongebob", 30, 
    '124 Conch St.', 'Bikini Bottom', 'International Waters');

console.log(p1);