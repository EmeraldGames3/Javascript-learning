function openFridge(...foods){
    console.log(foods);
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = `sushi`;
const food4 = "hotdog";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let n of numbers){
        result += n;
    }

    return result;
}

function getAvarage(...numbers){
    return sum(...numbers) / numbers.length;
}

console.log(sum(1, 5, 3));
console.log(getAvarage(1, 5, 3));


function combineStrings(...strings){
    return strings.join(" ")
}

console.log(combineStrings("Mr", "Spongebob", "Squarepants", "III"));