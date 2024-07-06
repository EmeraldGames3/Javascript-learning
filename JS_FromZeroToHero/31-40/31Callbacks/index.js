// hello(goodbye);

// function hello(callback) {
//     setTimeout(() => {
//         console.log("Hello");
//         callback();
//     }, 3000);
// }

// function leave() {
//     console.log("Leave");
// }

// function wait() {
//     console.log("Wait");
// }

// function goodbye() {
//     console.log("Goodbye");
// }

sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}