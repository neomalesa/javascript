
//Type conversion

// 1. String to Number Conversion
let stringInput = "25";     //Input string 25 as a string 

let numberOutput = Number(stringInput); 
console.log(`Converted value: ${numberOutput} (Type: ${typeof numberOutput})`);


// 2. Truthy & Falsy Checks
const valuesToTest = [0, "", "hello", null, undefined, NaN]; //>using if statement 

for (let i = 0; i < valuesToTest.length; i++) {
  let val = valuesToTest[i];
  
  if (val) {
    // USing String(val) to properly display "" instead of an empty space in the console
    console.log(`"${String(val)}" is truthy.`);
  } else {
    console.log(`"${String(val)}" is falsy.`);
  }
}

//TypeConversionQ2.js