const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// for(let row of matrix){
//     console.log(row);
//     for(let column of row){
//         console.log(column);
//     }
// }

console.log(matrix);

for(let row of matrix){
    const rowString = row.join(" ");
    console.log(rowString);
}