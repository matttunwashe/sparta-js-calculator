var typeOfCalculator = prompt("Enter a for an advance calculator and b for a basic calculator");

var num1 = parseFloat(prompt("First number?: "));

var answer;

if(typeOfCalculator == "a") {
  var operation = prompt("Type pow for power and sqr for square root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("what operation?: +-*/");
} else {
  console.log("Invalid option.");
}

if(operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "pow") {
  var num2 = parseFloat(prompt("Second number?: "));

switch (operation) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    answer = num1 / num2;
    break;
  case "^":
    answer = Math.pow(num1, num2);
    break;
  case "sqrt":
    answer = Math.sqrt(num1);
    break;
  default:
    break;
}

alert(num1 + " " + operation + " " + num2 + " = " + answer);







// var calc = prompt ('what calculator would you like? (a)dvanced (b)basic (c)BMI')
// if calc = a || b || c
// var basic = prompt ('what number do you want to calculate?')
// var advanced = prompt ('first number you want to calculator?')
// var BMI = prompt('what is your BMI?')
//
// if (basic) {
//
// }

// switch (basic) {
//   case :
//
//     break;
//   default:
//
// }
