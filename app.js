document.write("<h1>Table Multiplication</h1>")

var inpNum= +prompt("Enter Any Number");
var takeNum= +prompt('Enter a range: ');

for (i=1; i<=takeNum; i++){
    document.write(inpNum + " * " + i + " = " + i*inpNum + "<br>")
}


/* program to generate a multiplication table
upto a range */

// take number input from the user
// const number = parseInt(prompt('Enter an integer: '));

// // take range input from the user
// const range = parseInt(prompt('Enter a range: '));

// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     document.write(`${number} * ${i} = ${result} <br>`);
// }