var typeOfCalculator = prompt("Please enter a for an advance or b for a basic calculator");

var num1 = parseFloat(prompt("First number?: "));

var answer;

if(typeOfCalculator == "a") {
  var operation = prompt("Type pow for power and sqr for square root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("what operation?: +-*/");
} else {
  console.log("Invalid option.");
}

if(operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "pow" || operation == "sqr" ) {
  var num2 = parseFloat(prompt("Second number?: "));
}

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
  case "pow":
    answer = Math.pow(num1, num2);
    break;
  case "sqr":
    answer = Math.sqrt(num1);
    break;
  default:
    break;
}

alert(num1 + " " + operation + " " + num2 + " = " + answer);
