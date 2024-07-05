let x = 1;
// let x = 2; Error

function f1() {
    let x = 2;
    console.log(x);
}

function f2() {
    console.log(x);
}

console.log(x);
f1();
f2();