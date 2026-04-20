let score = 85; // test value 
let grade;

// Switch statement for grading
switch (true) {
  case (score >= 90 && score <= 100):
    grade = 'A';
    break;
  case (score >= 80 && score <= 89):
    grade = 'B';
    break;
  case (score >= 70 && score <= 79):
    grade = 'C';
    break;
  case (score >= 60 && score <= 69):
    grade = 'D';
    break;
  case (score < 60 && score >= 0):
    grade = 'F';
    break;
  default:
    grade = 'Invalid Score';
}
console.log(`Grade: ${grade}`);

// Ternary operator for pass/fail
let passStatus = score >= 60 ? "Passed" : "Failed";
console.log(`Status: ${passStatus}`);

//controlFlowQ1.js