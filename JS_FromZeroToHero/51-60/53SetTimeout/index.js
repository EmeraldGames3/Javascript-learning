// setTimeout (callback, delay)

// function hello(){
//     window.alert("Hello World!");
// }

// setTimeout(hello, 1000);

// const timeoutID = setTimeout(() => window.alert("I am"), 1000);

// clearTimeout(timeoutID);

let timeoutID;

function startTimer() {
    timeoutID = setTimeout(() => window.alert("Hello"), 4000);
}

function clearTimer(){
    clearTimeout(timeoutID);
}