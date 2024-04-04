function calculator(){
    let operator = prompt("Enter an operator (+, -, *, /):");
    let num1 = parseInt(prompt("Enter num1:"));
    let num2 = parseInt(prompt("Enter num2:"));
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log("Error! Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;
    } else {
        console.log("Invalid operator");
        return;
    }

    console.log("Result:", result);
}

calculator();
