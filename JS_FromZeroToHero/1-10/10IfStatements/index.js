// let age = 25;
// age = 13;

// if(age >= 18){
//     console.log("You are an adult");
// } 
// else {
//     console.log("You are a kid");
// }

// let time = 9;
// time = 17;

// if(time < 12){
//     console.log("Good morning");
// } else {
//     console.log("Good afternoon");
// }

// let isStudent = true;
// isStudent = false

// if(isStudent) {
//     console.log("Student")
// } else {
//     console.log("Not a student")
// }

// let age = 25;
// let hasLicence = true;

// if(age >= 16){
//     console.log("You are old enough to drive");
//     if(hasLicence){
//         console.log("You already have a license");
//     }
// } else {
//     console.log("You are a kid");
// }

// let age = 18;
// if(age >= 18) {
//     console.log("You are old enough to enter this site");
// } else if(age < 0){
//     console.log("Invalid age");
// } else if (age == 0){
//     console.log("You are a newborn");
// }
// else {
//     console.log("You are not old enough");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = () => {
    age = myText.value;
    age = Number(age);

    if(age >= 18) {
    resultElement.innerHTML = "You are old enough to enter this site";
    } else if(age < 0){
    resultElement.innerHTML = "Invalid age";
    } else if (age == 0){
    resultElement.innerHTML = "You are a newborn";
    } else {
    resultElement.innerHTML = "You are not old enough";
    }
}