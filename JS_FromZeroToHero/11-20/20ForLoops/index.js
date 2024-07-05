for(let i = 0; i <= 2; i++){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}

for(let i = 0; i <= 20; i++){
    if(i % 2 === 0)
        continue;
    if(i === 13)
        break;
    console.log(i);
}

// for(let i = 0; true; i++){
//     console.log(i);
// }