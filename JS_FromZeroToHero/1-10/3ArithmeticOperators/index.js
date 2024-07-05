let students = 30;

students++;
--students;

students *= 2;
students /= 3;
students **= 2;
students %= 30;

console.log(students);

/*
    operator precedence
    1. paranthesis ()
    2. exponents
    3.multiplication, division & modulo
    4. addition & subtraction
*/

let result = (1 + 2) * 3 + 4 ** 2 - 2

console.log(result);