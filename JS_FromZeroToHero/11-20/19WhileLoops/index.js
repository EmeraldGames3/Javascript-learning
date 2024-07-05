// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);
// }

// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    //Security ;)
    if(username === `Eu` && password === `123`){
        loggedIn = true;
    }
}

console.log("Logged in");