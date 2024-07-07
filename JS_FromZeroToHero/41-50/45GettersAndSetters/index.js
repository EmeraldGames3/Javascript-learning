class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for first name
    get firstName() {
        return this._firstName;
    }

    // Setter for first name
    set firstName(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._firstName = value;
        } else {
            console.error('Invalid first name');
        }
    }

    // Getter for last name
    get lastName() {
        return this._lastName;
    }

    // Setter for last name
    set lastName(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._lastName = value;
        } else {
            console.error('Invalid last name');
        }
    }

    // Getter for full name (derived property)
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person('John', 'Doe');

// Using getters
console.log(person.firstName); // Output: John
console.log(person.lastName);  // Output: Doe
console.log(person.fullName);  // Output: John Doe

// Using setters
person.firstName = 'Jane';
person.lastName = 'Smith';

// Using getters after setting new values
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith
console.log(person.fullName);  // Output: Jane Smith

// Attempting to set invalid values
person.firstName = ''; // Output: Invalid first name
person.lastName = 123; // Output: Invalid last name

// Values remain unchanged after attempting to set invalid values
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith
