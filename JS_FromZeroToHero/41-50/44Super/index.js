class Animal {
    constructor(name) {
        this.alive = true;
        this.name = name;
    }

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    constructor() {
        super("rabbit");
    }
}

class Fish extends Animal {
    constructor() {
        super("fish");
    }
}

class Hawk extends Animal {
    constructor() {
        super("hawk");
    }
}

const animals = [new Rabbit(), new Fish(), new Hawk()];

animals.forEach((element) => console.log(element));
animals.forEach((element) => element.eat());
