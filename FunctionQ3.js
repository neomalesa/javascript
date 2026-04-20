

function greetingBot(name, isMorning) {

  // Using a ternary operator and template literals
  return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
}

// Function output 
console.log(greetingBot("Alice", true));   
//console.log(greetingBot("Bob", false));    