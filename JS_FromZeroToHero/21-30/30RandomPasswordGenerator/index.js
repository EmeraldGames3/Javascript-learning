function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppperChars = lowerChars.toLocaleUpperCase();
    const numberChars = "0123456789";
    const symbols = "!@#$%^&*()_+=/<>?~`";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerChars : "";
    allowedChars += includeUpperCase ? uppperChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbols : "";

    if(length <= 0){
        window.alert("Password length must be at least 1");
        return "";
    }
    if(allowedChars.length === 0){
        window.alert("At least one set of character needs to be selected");
        return "";
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

let password = generatePassword(
    passwordLength, 
    includeLowerCase, 
    includeUpperCase, 
    includeSymbols
);

console.log(`Generated password: ${password}`);