// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to insert characters into the display
function insert(character) {
    var display = document.getElementById('display');
    var displayValue = display.value;

    if (character === '(') {
        // If the last character is a number, insert a multiplication sign before the opening parenthesis
        var lastChar = displayValue.charAt(displayValue.length - 1);
        if (!isNaN(lastChar)) {
            displayValue += '*(';
        } else {
            displayValue += '(';
        }
    } else if (character === ')') {
        // If the last character is an opening parenthesis, insert the number inside the parentheses
        var lastChar = displayValue.charAt(displayValue.length - 1);
        if (lastChar === '(') {
            var numberToInsert = displayValue.charAt(displayValue.length - 2);
            displayValue = displayValue.slice(0, -2) + '(' + numberToInsert + ')' + character;
        } else {
            displayValue += character;
        }
    } else {
        // For other characters, simply insert them into the display
        displayValue += character;
    }

    // Update the display value
    display.value = displayValue;
}

// Function to delete the last character from the display
function deleteLast() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}

// Function to calculate the expression in the display
function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}
