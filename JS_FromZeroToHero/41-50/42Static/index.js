class MathUtil {
    static PI = 3.1419;

    static getDiameter(radius) {
        return radius * 2;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(20));


class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello my username is ${this.username}`);
    }
}

const user1 = new User("Mircea");
const user2 = new User("Dadul");

console.log(User.userCount);