// 1. Merge arrays with the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log("Merged Array:", mergedArray);
console.log("\n");


// 2. loop to print the star pyramid pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let spaces = ' '.repeat(rows - i);
  
  let stars = '* '.repeat(i).trimEnd(); //with spaces in between so we have the symmetric pyramid 
  console.log( spaces + stars);
}
console.log("\n");

// 3. While loop counting down from 10 to 1
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}


//LoopsQ5.js